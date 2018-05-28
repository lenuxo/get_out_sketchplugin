var UI = require('sketch/ui')
export default function(context) {
  var Rectangle = require('sketch/dom').Rectangle
  var document = require('sketch/dom').getSelectedDocument()
  var page = document.selectedPage
  var selectedLayers = document.selectedLayers
  if (selectedLayers.isEmpty) {
    UI.alert("No selection", "Select your layers first.\n先选中要移出的元素，再执行操作")
    return
  }
  selectedLayers.forEach(layer=>{
    if(layer.type!="Artboard"){
      pgBasis(layer)
    }else{
      console.log(layer.type)
    }
  })
  function pgBasis(layer){
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
  UI.message("✅Get out✅")
}