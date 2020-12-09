const PaintCan = function(paintLevel){

    this.paintLevel = paintLevel;

};

PaintCan.prototype.isPaintCanEmpty = function(){
    return this.paintLevel === 0;
};

PaintCan.prototype.removePaint = function(amount){
    if (this.isPaintCanEmpty() === false){
        this.paintLevel -= amount;
    }
};

module.exports = PaintCan;