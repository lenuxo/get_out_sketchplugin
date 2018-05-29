import UI from 'sketch/ui'
import Dom from 'sketch/dom'
import BrowserWindow from 'sketch-module-web-view'

export default function(context) {
  var Rectangle = Dom.Rectangle
  var document = Dom.getSelectedDocument()
  var page = document.selectedPage
  var selectedLayers = document.selectedLayers

  var alert=new BrowserWindow({
      identifier: 'duanjun.getout.alert',
        width: 280,
        height: 90,
        center: true,
        resizable: false,
        minimizable: false,
        frame: false,
        show: false
  })
  alert.loadURL('alert.html')
  alert.on('blur',()=>{
    if(alert.isVisible()){
      alert.close()
    }
  })
  if (selectedLayers.isEmpty) {
    // UI.alert("No selection", "Select your layers first.\n先选中要移出的元素，再执行操作")
    alert.show()
    setTimeout(() => {alert.close()}, 2500);
    return
  }
  selectedLayers.forEach(layer=>{
    if(layer.type!="Artboard"){
      pageBasis(layer)
    }
  })
  function pageBasis(layer){
    let pos1=layer.frame.changeBasis({from:layer})
    let pos2=new Rectangle(
      pos1.x-layer.frame.x,
      pos1.y-layer.frame.y,
      layer.frame.width,
      layer.frame.height
    )
    layer.parent=page
    layer.frame=pos2
  }
  UI.message("✅ Get out")
}