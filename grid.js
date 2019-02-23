
function update(){
    var xval= parseInt(document.getElementById('xid').value);
    var yval= parseInt(document.getElementById('yid').value);
    var val=document.getElementById('val');
    console.log(val.value);
    updateCell(xval,yval,val.value);
    var cells=window.grid.rows*window.grid.cols;
    if(window.grid.done>=cells){
        alert('out of bounds matrix cell to update');
       
    }
    else if(window.grid.done==cells-1){
        window.grid.done=0;
    }
    else window.grid.done++;
}


//entrypoint
function initGrid(rowSize, colSize) {
    var grid = document.getElementById("mygrid");
    
    window.grid={
        rows:rowSize,
        cols:colSize,
        done:0
    }
    for (i = 0; i < rowSize; i++) {
        for (j = 0; j < colSize; j++) {
            var data = {
                rowSize: rowSize,
                colSize: colSize,
                row: i,
                col: j
            };
            var cell = initCell(data);
            grid.appendChild(cell);
        }
    }
    
}
