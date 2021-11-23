import { FooBarQix } from "./fooBarQix";

describe("", () => {
  let _sut: FooBarQix;

  beforeEach(() => {
    _sut = new FooBarQix();
  });


  it("Should return 1 when called with 1", () => {
    expect(_sut.FooMyNumber(1)).toBe("1");
  });

  it("Should return 2 when called with 2", () => {
    expect(_sut.FooMyNumber(2)).toBe("2");
  });

  it("Should return 4 when called with 4", () => {
    expect(_sut.FooMyNumber(4)).toBe("4");
  });


  it("Should return Foo when called with 6", () => {
    expect(_sut.FooMyNumber(6)).toBe("Foo");
  });

  it("Should return FooFoo when called with 3", () => {
    expect(_sut.FooMyNumber(3)).toBe("FooFoo");
  });

  it("Should return BarBar when called with 5", () => {
    expect(_sut.FooMyNumber(5)).toBe("BarBar");
  });

  it("Should return QixQix when called with 7", () => {
    expect(_sut.FooMyNumber(7)).toBe("QixQix");
  });

  it("Should return Bar when called with 10", () => {
    expect(_sut.FooMyNumber(10)).toBe("Bar");
  });

  it("Should return FooBarBar when called with 15", () => {
    expect(_sut.FooMyNumber(15)).toBe("FooBarBar");
  });

  it("Should return Bar when called with 20", () => {
    expect(_sut.FooMyNumber(20)).toBe("Bar");
  });

  it("Should return FooQix when called with 21", () => {
    expect(_sut.FooMyNumber(21)).toBe("FooQix");
  });

  it("Should return Qix when called with 28", () => {
    expect(_sut.FooMyNumber(28)).toBe("Qix");
  });
  it("Should return Qix when called with 49", () => {
    expect(_sut.FooMyNumber(49)).toBe("Qix");
  });

  it("Should return FooFooFoo when called with 33", () => {
    expect(_sut.FooMyNumber(33)).toBe("FooFooFoo");
  });

  it("Should return FooQix when called with 27", () => {
    expect(_sut.FooMyNumber(27)).toBe("FooQix");
  });
 
});