const assert = require("assert");
const PaintCan = require("../paint_can.js")

describe("PaintCan", function(){

    let paintCan;

    beforeEach(function(){
        paintCan = new PaintCan(10);
    });

    it("should have paint in the can in litres", function(){
        assert.strictEqual(paintCan.paintLevel, 10);
    });
})