describe("Calculadora de cadenar ", () => {
  it("Deberia retornar el numero en formato int", () => {
    expect(stringToInt("1")).toEqual(1);
  });
});
function stringToInt(numString){
  return parseInt(numString);
}
