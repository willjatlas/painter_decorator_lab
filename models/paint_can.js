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

PaintCan.prototype.removePaint = function(amount){
    if (this.isPaintCanEmpty() === false){
        this.paintLevel -= amount;
    }
};


module.exports = PaintCan;