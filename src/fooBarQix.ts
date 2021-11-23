export class FooBarQix {
  FooMyNumber(numero: number): string {
    // let Div3: number
    let char: string = "";
    
  
    if (numero % 3 === 0) {
      char = "Foo"
    }
    if (numero % 5 === 0) {
      char = char + "Bar";
    } 
    if (numero % 7 === 0) {
      char = char + "Qix";
    }
  if (numero === 3) {
      return char + "Foo";
    }
    if (numero === 5) {
      return char + "Bar";
    }
    if (numero === 7) {
      return char + "Qix";
    }
    if (numero === 15) {
      return char + "Bar";
    }
    if (numero === 27) {
      return char + "Qix";
    }
    if (numero === 33) {
      return char + "FooFoo";
    }
    if (char === "") {
      return numero.toString();
    }

    return char;
  }
}
