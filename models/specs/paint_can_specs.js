const assert   = require("assert");
const PaintCan = require("../paint_can.js");

describe("PaintCan", function(){

    let paintCan;

    beforeEach(function(){
        paintCan = new PaintCan(10);
        paintCanEmpty = new PaintCan(0);
    });

    it("should have paint in the can in litres", function(){
        assert.strictEqual(paintCan.paintLevel, 10);
    });

    it("should be able to see if the can is empty", function(){     
        assert.strictEqual(paintCanEmpty.isPaintCanEmpty(),true);
    });

    it("should check if can still has paint", function(){
        assert.strictEqual(paintCan.isPaintCanEmpty(), false); 
    });

    it("should be able to remove a given amount of paint",function(){
        paintCan.removePaint(3);
        assert.strictEqual(paintCan.paintLevel, 7)
    });

})