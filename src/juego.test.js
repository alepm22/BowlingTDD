import Juego from "./juego.js";

describe("juego", () => {
    let g; 

  beforeEach(() => {
    g = new Juego();
  });
  
  it("Debe crearse la clase juego pero vacía ", () => {
    const myJuego = new Juego();
    expect(myJuego).toBeDefined();
  });

  function rollMany(n,pins){
    for (let i=0;i<n;i++)
    {
      g.roll(pins);
    }

  }

  it("Debe tirar 20 veces el jugador derribando cero pinos en cada tiro y dando score 0 ", () => {
    let n=20
    let pins=0
    rollMany(20,0)
    expect(g.score()).toEqual(0);
  });
    
  it("Debe tirar 20 veces el jugador derribando cero pinos en cada tiro y dando score de 20 ", () => {
    rollMany(20,1)
    expect(g.score()).toEqual(20);
  });

});