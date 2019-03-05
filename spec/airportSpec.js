describe('Airport', function() {

  var airport;

  beforeEach(function() {
   airport = new Airport(5);
  });
  
  it('has 5 available hangar spaces on creation', function() {
    expect(airport.hangar.length).toEqual(5);
  });

});