window.simulation={
    targetCell:{
        row:0,
        col:0,
        state:STATE.NC,
        flags:{
            computed:false
        }
    },
    subscription:null,
    startSim:function(){
        for( rowIndex=0;i<window.grid.rows;rowIndex++){
            for(colIndex=0;colIndex<window.grid.cols;colIndex++){
                this.updateCell(rowIndex,colIndex,STATE.RUNNING,1)
                window.setTimeout(()=>{
                   updateCell(rowIndex,colIndex,STATE.DONE,2);
                },5000);
            }
        }
        
    },
    stopSim:function(){
        window.clearInterval(this.subscription);
        window.initGrid();
    },

    
}
