export default function (context) {
  var UI = require('sketch/ui')
  var Rectangle = require('sketch/dom').Rectangle
  var document = require('sketch/dom').getSelectedDocument()
  var page = document.selectedPage
  var selectedLayers = document.selectedLayers
  if (selectedLayers.isEmpty) {
    UI.alert("没选中", "先选中要移出artboard外的元素，再执行操作")
    return
  }
  selectedLayers.layers.forEach(layer => {
    if (layer.type != "Artboard") {
      let pos1 = layer.localRectToPageRect(layer.frame)
      let pos2 = new Rectangle(
        pos1.x - layer.frame.x,
        pos1.y - layer.frame.y,
        layer.frame.width,
        layer.frame.height
      )
      layer.parent = page
      layer.frame = pos2
    }
  })
  UI.message("⬆️出来了⬆️")
}