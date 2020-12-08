const assert    = require("assert");
const Decorator = require("../decorator.js");
const PaintCan  = require("../paint_can.js");
const Room      = require("../room.js");

describe("Decorator", function(){

    let decorator;

    beforeEach(function(){
        paint1    = new PaintCan(10);
        paint2    = new PaintCan(7);
        room      = new Room(9);
        bigRoom   = new Room(12);
        decorator = new Decorator("Steve");
    });

    it("should start with no paint in stock", function(){
        assert.deepStrictEqual(decorator.paintStock, []);
    });

    it("should be able to add paint cans to their paint stock", 
    function(){
        decorator.addPaintCan(paint1);
        assert.deepStrictEqual(decorator.paintStock, [paint1]);
    });

    it("should be able to calculate the total litres of paint in stock",
    function(){
        decorator.addPaintCan(paint1);
        decorator.addPaintCan(paint2);
        assert.strictEqual(decorator.getTotalPaint(), 17);
    });

    it("should be able to calculate if it has enought paint for a room",
    function(){
        decorator.addPaintCan(paint1);
        assert.strictEqual(decorator.checkEnoughPaintForRoom(room), true); 
    });

    it("should be able to calculate if it does not have enough paint for a room",
    function(){
        decorator.addPaintCan(paint2);
        assert.strictEqual(decorator.checkEnoughPaintForRoom(room), false);
    });

    it("should be able to paint a room if they have anough paint",
    function(){
        decorator.addPaintCan(paint1);
        decorator.paintRoom(room);
        assert.strictEqual(room.isPainted, true);
    });

    it("should say you can't paint a room if not enough paint", 
    function(){
        decorator.addPaintCan(paint2);
        decorator.paintRoom(room);
        assert.strictEqual(room.isPainted, false);
    });

    it("should be able to remove paint from can when painting",
    function(){
        decorator.addPaintCan(paint1);
        decorator.paintRoom(room);
        assert.strictEqual(decorator.getTotalPaint(), 1);
    });

    it("should be able to swtich cans when they are empty and finish room",
    function(){
        decorator.addPaintCan(paint1);
        decorator.addPaintCan(paint2);
        decorator.paintRoom(bigRoom);
        assert.strictEqual(decorator.getTotalPaint(), 5);
    });

    it("should remove cans if they have run out of paint", 
    function(){
        decorator.addPaintCan(paint1);
        decorator.addPaintCan(paint2);
        decorator.paintRoom(bigRoom);
        assert.deepStrictEqual(decorator.getTotalPaint(), 5);
    })
});