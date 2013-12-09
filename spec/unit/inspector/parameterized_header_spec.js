describe("RAML.Inspector.ParameterizedHeader", function() {
  var name, definition, parameterizedHeader;

  beforeEach(function() {
    name = "X-Custom-{*}";
    definition = { type: 'string' };

    parameterizedHeader = RAML.Inspector.ParameterizedHeader.fromRAML(name, definition);
  });

  describe("creating a header", function() {
    var header;

    beforeEach(function() {
      header = parameterizedHeader.create("test");
    });

    it("returns a new header definition", function() {
      expect(header.displayName).toEqual('X-Custom-test');
      expect(header.type).toEqual(definition.type);
    });
  });
});
