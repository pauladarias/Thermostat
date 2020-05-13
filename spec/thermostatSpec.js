  'use strict';

  describe('Thermostat',function(){

    var thermostat;

    beforeEach(function(){
      thermostat = new Thermostat();
    })
    it('starts at 20 min', function(){
      expect(thermostat.getCurrentTemperature()).toEqual(20);
    });
    it('increases the temperature with up()', function(){
      thermostat.up();
      expect(thermostat.getCurrentTemperature()).toEqual(21);
    });
    it('decreases the temperature with dowm()', function() {
      thermostat.down();
      expect(thermostat.getCurrentTemperature()).toEqual(19);
    });
    it('has a minimum of 10 degrees', function() {
      for (var i = 1; i < 11; i++) {
        thermostat.down();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(10);
    });
    it('has power saving mode ON by default', function() {
      expect(thermostat.isPowerSavingModeOn()).toBe(true);
    });
    it('can switch PSM Off', function() {
      thermostat.switchPowerSavingModeOff();
      expect(thermostat.isPowerSavingModeOn()).toBe(false);
    });
    it('can switch PSM back ON', function() {
      thermostat.switchPowerSavingModeOff();
      expect(thermostat.isPowerSavingModeOn()).toBe(false);
      thermostat.switchPowerSavingModeOn();
      expect(thermostat.isPowerSavingModeOn()).toBe(true);
    });
    it('has a reset mode', function() {
      for (var i = 0; i < 5; i++) {
        thermostat.up();
      }
      thermostat.resetTemperature();

      expect(thermostat.getCurrentTemperature()).toEqual(20);
    });


    describe('when power saving mode is ON', function() {
      it('has a maximum temperature of 25 degrees', function() {
        for ( var i = 1; i < 6; i++) {
          thermostat.up();
        }
        expect(thermostat.getCurrentTemperature()).toEqual(25);
      });
    });

    describe('when power saving mode in OFF', function() {
      it('has a maximum temperature of 32', function (){
       thermostat.switchPowerSavingModeOff();
       for ( var i = 1; i < 13; i++) {
        thermostat.up();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(32);
      });
    });
    describe('displaying usage levels', function() {
      describe('when the temperature is below 18 degrees', function() {
        it('is considered low-usage', function() {
          for (var i = 0; i < 3; i++) {
            thermostat.down();
          }
          expect(thermostat.energyUsage()).toEqual('low-usage');
        });
      });
      describe('when temperature is between 18 and 25 degrees', function() {
        it('is considered medium-usage', function() {
          expect(thermostat.energyUsage()).toEqual('medium-usage');
        });
      });
      describe('when temperature is anything else', function() {
        it('is considered high-usage', function() {
          thermostat.powerSavingMode = false;
          for (var i = 0; i < 6; i++) {
            thermostat.up()
          }
          expect(thermostat.energyUsage()).toEqual('high-usage');
        });
      });
    });

});
