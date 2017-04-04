var assert = require('assert');
var WaterBottle = require('../water_bottle.js');  //its the export file that is being exposed 

//var beforeEach() = 

//1. should be 0 when empty
describe('Water Bottle', function() {
  
it('Should be empty at start', function() {
var bottle = new WaterBottle();
assert.strictEqual(0, bottle.volume);  // checks the value and the type
})



// 2. should go to 100 when filled
it('Should be 100 when full', function() {
var bottle = new WaterBottle();
assert.strictEqual(100, bottle.fill());  // checks the value and the type
})

// 3. should go down by 10 when drank
it('Should go down by 10 when drunk', function() {
var bottle = new WaterBottle();
bottle.fill();
bottle.drink();
assert.strictEqual(90, bottle.volume);
})

// 4. should go to 0 when emptied
it('Should go to 0 when emptied', function() {
var bottle = new WaterBottle();
bottle.fill();
bottle.empty();
assert.strictEqual(0, bottle.volume);
})




});




// 5. should not be able to go below 0


