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
        output += can.paintLevel;
    };
    return output;
};

Decorator.prototype.checkEnoughPaintForRoom = function(room){
    if (this.getTotalPaint() >= room.area){
        return true;
    }
    else{
        return false;
    };
};

Decorator.prototype.paintRoom = function(room){
    if(this.checkEnoughPaintForRoom(room) === true){
        let toPaint = room.area;
        while(toPaint > 0){
            for(let can of this.paintStock){
                if(can.isPaintCanEmpty() !== true){
                    can.removePaint(1);
                    toPaint --; 
                };
            };
        };
        room.paintRoom();
    };
};

module.exports = Decorator;