const assert    = require("assert");
const Decorator = require("../decorator.js");
const PaintCan  = require("../paint_can.js");
const Room      = require("../room.js");

describe("Decorator", function(){

    let decorator;

    beforeEach(function(){
        paint1    = new PaintCan(10);
        paint2    = new PaintCan(7);
        room      = new Room(5);
        decorator = new Decorator("Steve");
    });

    it("should start with no paint in stock", function(){
        assert.deepStrictEqual(decorator.paintStock, []);
    });


});