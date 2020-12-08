const PaintCan = function(paintLevel){

    this.paintLevel = paintLevel;

};

PaintCan.prototype.isPaintCanEmpty = function(){
    if (this.paintLevel > 0){
        return false; 
    }
    else{
        return true;
    }
};

module.exports = PaintCan;