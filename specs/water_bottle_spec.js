var assert = require('assert');
var WaterBottle = require('../water_bottle.js');  //its the export file that is being exposed 

describe('Water Bottle', function() {


it('Should be empty at start', function() {

var bottle = new WaterBottle();
assert.strictEqual(0, bottle.volume);  // checks the value and the type
})



})