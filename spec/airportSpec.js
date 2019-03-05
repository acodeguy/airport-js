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

});
