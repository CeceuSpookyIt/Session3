import { FooBarQix } from "./fooBarQix";

describe("", () => {
  let _sut: FooBarQix;

  beforeEach(() => {
    _sut = new FooBarQix();
  });

  it("Primeiro test", () => {
    expect(_sut.FooMyNumber(6)).toBe("");
  });
});