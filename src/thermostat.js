function Thermostat() {

  this.temperature = 20;
  this.powerSavingMode = true;
  this.minimumTemperature = 10;
  this.maximumTemperature = 32;
  this.powerSavingModeTemperature = 25;
}

  Thermostat.prototype = {

  increase: function() {
      if (this.powerSavingMode === true && (this.temperature + 1) > this.powerSavingModeTemperature) {
        throw "Cannot increase temperature powersave mode on";
      } else if (this.powerSavingMode === false && (this.temperature + 1) > this.maximumTemperature){
        throw "Cannot increase temperature beyond maximum";
      } else{
      this.temperature += 1;
    }
  },

  decrease: function() {
    if (this.temperature === this.minimumTemperature) {
      throw "Cannot decrease temperature beyond minimum";}
    else {
      this.temperature -= 1;}
  },

  powerSaving: function() {
    this.powerSavingMode = !this.powerSavingMode;
  },

  resetTemperature: function() {
    this.temperature = 20;
  },

  energyUsage: function() {
    if (this.temperature < 18) {
      return "low-usage";
    } else if (this.temperature > 25) {
      return "high-usage";
    } else {
      return "medium-usage";
    }
  }
};
