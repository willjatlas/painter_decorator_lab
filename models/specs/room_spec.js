const assert = require("assert");
const Room   = require("../room.js");

describe("Room", function(){

    let room;

    beforeEach(function(){
        room = new Room(6);
    });

    it("should have an area", function(){
        assert.strictEqual(room.area, 6);
    });

    it("should start with no paint", function(){
        assert.strictEqual(room.isPainted, false);
    });

});