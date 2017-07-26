function alert(message, title) {
    var app = [NSApplication sharedApplication];
    message = message.toString();
    title = title.toString();
    [app displayDialog: message withTitle: title buttons:['continue']];
}

function onRun(context) {
    var doc = context.document;
    var selectedLayers = context.selection;
    var selectedCount = selectedLayers.count();
    var page = [doc currentPage];
    //check selections
    if (selectedCount == 0) {
        alert("先选中对象", "你咋啥也没选啊?");
        return
    }
    //move selections into outer group
    selectedLayers.forEach(layer => {
        if (layer.class() != "MSArtboardGroup") layer.moveToLayer_beforeLayer(page, nil)
    })
    doc.showMessage("⬆️出来了⬆️")
}