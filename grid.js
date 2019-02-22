function getCellId(row, col) {
    var name = "cell_" + { row } + "_" + { col };
    return name;
}
function updateGridCell(row, col, value) {
    var cellId = getCellId(row, col);
    var gridcell = document.getElementById(cellId);
}

function initGrid(rowSize, colSize) {
    var grid = document.getElementById("mygrid");

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
function initCell(data) {

    var cell = document.createElement("div");
    cell.id = window.getCellId(data.row, data.col);
    cell.value = "NotComputed";


    cell.style["grid-column"] = data.row.toString() + "/" + data.rowSize.toString();
    cell.style["grid-row"] = data.col.toString() + "/" + data.colSize.toString();
    return cell;

}