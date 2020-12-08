const assert   = require("assert");
const PaintCan = require("../paint_can.js")

describe("PaintCan", function(){

    let paintCan;

    beforeEach(function(){
        paintCan = new PaintCan(10);
    });

    it("should have paint in the can in litres", function(){
        assert.strictEqual(paintCan.paintLevel, 10);
    });

    it("should be able to see if the can is empty", function(){
        paintCanEmpty = new PaintCan(0)
        assert.strictEqual(paintCanEmpty.isPaintCanEmpty(),true);
    });

    it("should check if can still has paint", function(){
        assert.strictEqual(paintCan.isPaintCanEmpty(), false); 
    })

})