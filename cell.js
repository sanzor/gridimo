var STATE={
    NC:0,
    RUNNING:1,
    DONE:2,
    properties:[
        "grid-cell-nc",
        "grid-cell-running",
        "grid-cell-done"
    ]
}

var DEFAULT="grid-cell";

function getCellId(row, col) {
    var name = "c_" +  row + "_" +  col ;
    return name;
    
}
function getCell(row,col){
    var id=getCellId(row,col);
    var cell = document.getElementById(id);
    return cell;
}

function initCell(data) {

    var cell = document.createElement("div");
    cell.id = window.getCellId(data.row, data.col);
    cell.classList.add("grid-cell");
    cell.classList.add("grid-cell-nc");
    cell.innerHTML = "NotComputed";

    cell.style["grid-row-start"]=data.row;
    cell.style['grid-row-end']=data.row+1;
    cell.style['grid-column-start']=data.col;
    cell.style['grid-column-end']=data.col+1;
    return cell;
}

function updateStyle(state,cell){
     cell.className="";
     cell.classList.add(DEFAULT);
     cell.classList.add(STATE.properties[state]);
}


function updateCell(row, col,state, value) {
    if(row>=window.grid.rows || col >=window.grid.cols){
        alert("Index out of bounds, max sizes x="+window.sizes.rows+",y="+window.sizes.cols);
        return;
    }
    var cell=getCell(row,col);
    if(!(value==null&& value==undefined)){
        cell.innerHTML=value;
    }
    updateStyle(state,cell);
   
}