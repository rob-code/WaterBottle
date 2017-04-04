
var WaterBottle = function(){
  this.volume = 0;

this.fill = function () {
  return this.volume = 100;
}

this.drink = function () {
  this.volume -= 10;
}



}





module.exports = WaterBottle;