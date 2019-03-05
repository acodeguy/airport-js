describe('Airport', function() {

  var airport;
  var plane;

  beforeEach(function() {
   airport = new Airport(5);
   planeSpy = {}
  });

  it('has 5 available hangar spaces on creation', function() {
    expect(airport.hangar.length).toEqual(5);
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

});
