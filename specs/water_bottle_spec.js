var assert = require('assert');
var WaterBottle = require('../water_bottle.js');  //its the export file that is being exposed 



//1. should be 0 when empty
describe('Water Bottle', function() {

  var bottle;

  beforeEach(function () {
    bottle = new WaterBottle();  
  }) 

  it('Should be empty at start', function() {
    assert.strictEqual(0, bottle.volume); 
  })

// 2. should go to 100 when filled
it('Should be 100 when full', function() {
  bottle.fill();
  assert.strictEqual(100, bottle.volume);  // checks the value and the type
})

// 3. should go down by 10 when drank
it('Should go down by 10 when drunk', function() {
  bottle.fill();
  bottle.drink();
  assert.strictEqual(90, bottle.volume);
})

// 4. should go to 0 when emptied
it('Should go to 0 when emptied', function() {
  bottle.fill();
  bottle.empty();
  assert.strictEqual(0, bottle.volume);
})

it('Volume should be reduced correctly on drink', function() {
  bottle.fill();
  bottle.drink();
  bottle.drink();
  bottle.drink();
  bottle.drink();
  bottle.drink();
  assert.strictEqual(50, bottle.volume);
})


// 5. should not be able to go below 0
it('Volume should not go below 0', function() {
  bottle.fill();
  bottle.drink();
  bottle.drink();
  bottle.drink();
  bottle.drink();
  bottle.drink();
  bottle.drink();
  bottle.drink();
  bottle.drink();
  bottle.drink();
  bottle.drink();
  bottle.drink();
  assert.strictEqual(0, bottle.volume);
})


});





