describe('Airport', function() {

  var airport;

  beforeEach(function() {
   airport = new Airport(5);
   planeSpy = {}
  });

  it('has 5 available hangar spaces on creation', function() {
    expect(airport.hangarCapacity).toEqual(5);
  });

  it('lands a plane in its hangar', function() {
    airport.land(planeSpy);
    expect(airport.hangar).toContain(planeSpy);
  });

  it('despatches a plane from its hangar', function() {
    airport.takeOff(planeSpy);
    expect(airport.hangar).not.toContain(planeSpy);
  });

  it('confirms that a plane is not in the airport after take-off', function() {
    airport.land(planeSpy);
    airport.takeOff(planeSpy);
    expect(airport.hasPlane(planeSpy)).toEqual(false);
  });

  it('prevents landing when the airport is full', function() {
    for (var i = 1; i <= 5; i++) {
      airport.land({});
    }
    expect(function() { airport.land(planeSpy) }).toThrow('airport full');
  });

  it('prevents takeOff when the weather is stormy', function() {
    spyOn(airport, "checkWeather").and.returnValue("stormy");
    expect(function() { airport.takeOff(planeSpy) }).toThrow('cannot takeoff - stormy weather');
  });

  it('prevents landing when the weather is stormy', function() {
    spyOn(airport, "checkWeather").and.returnValue("stormy");
    expect(function() { airport.land(planeSpy) }).toThrow('cannot land - stormy weather');
  });
});
