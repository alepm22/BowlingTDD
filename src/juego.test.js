import Juego from "./juego.js";

describe("juego", () => {
  it("Debería crearse la clase juego pero vacía", () => {
    const myJuego = new Juego();
    expect(myJuego).toBeDefined();
  });
});