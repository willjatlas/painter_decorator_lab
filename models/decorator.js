const Decorator = function(name){

    this.name       = name;
    this.paintStock = [];

};

Decorator.prototype.addPaintCan = function(paintCan){
    this.paintStock.push(paintCan);
};




module.exports = Decorator;