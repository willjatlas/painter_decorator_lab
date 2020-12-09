const Decorator = function(name){

    this.name       = name;
    this.paintStock = [];

};

Decorator.prototype.addPaintCan = function(paintCan){
    this.paintStock.push(paintCan);
};

Decorator.prototype.removeCan = function(paintCan){
    this.paintStock.shift();
}

Decorator.prototype.getTotalPaint = function(){
    let output = 0;
    for(let can of this.paintStock){
        output += can.paintLevel;
    };
    return output;
};

Decorator.prototype.checkEnoughPaintForRoom = function(room){
    return this.getTotalPaint() >= room.area;
}; 

Decorator.prototype.paintRoom = function(room){
    if(this.checkEnoughPaintForRoom(room) === true){
        let toPaint = room.area;
        let newStock = [];
        for(let can of this.paintStock){
            if(can.isPaintCanEmpty !== true){
                if(can.paintLevel <= toPaint){
                    let over     =  toPaint - can.paintLevel;
                    toPaint      =  over;
                }
                else{
                    can.removePaint(toPaint)
                    newStock.push(can);
                }
            };
        };
        this.paintStock = newStock;
        room.paintRoom();
    };  
};
module.exports = Decorator;