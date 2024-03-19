import Juego from "./juego.js";

describe("juego", () => {
  it("Debería crearse la clase juego pero vacía", () => {
    const myJuego = new Juego();
    expect(myJuego).toBeDefined();
  });
  it("Debe crearse la clase juego pero vacía ", () => {
    const g = new Juego();
    for (let i=0;i<20;i++)
    {
      g.roll(0);
    }
    expect(g.score()).toEqual(0);
  });
});