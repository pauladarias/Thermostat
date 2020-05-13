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

  });