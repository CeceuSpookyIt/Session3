export class FooBarQix {

  FooMyNumber(numero: number): string {
    let char: string = "";

    const puras = [
      {
        num: 0,
        text: "*"
      },
      {
        num : 3,
        text : "Foo"
      }, 
      {
        num: 5,
        text: "Bar"
      }, 
      {
        num: 7 ,
        text:  "Qix"
      }
    ];
    
    puras.forEach(pura => {
      if (numero % pura.num === 0) {
        char = char + pura.text;
      }
    });
   
    const numeros = numero.toString();

    for(let numeroDePosicao of numeros) {
      for(let pura of puras) {
        if (numeroDePosicao === pura.num.toString()) {
          char = char + pura.text;
          break;
        }
      }
    }
   
    if (char === "") {
      return numero.toString();
    }

    return char;
  }
}
