const PaintCan = require("./paint_can"); 

const Decorator = function(name){

    this.name       = name;
    this.paintStock = [];

};

Decorator.prototype.addPaintCan = function(paintCan){
    this.paintStock.push(paintCan);
};

Decorator.prototype.getTotalPaint = function(){
    let output = 0;
    for(let can of this.paintStock){
        console.log(can.paintLevel);
        output += can.paintLevel;
    };
    return output;
};




module.exports = Decorator;