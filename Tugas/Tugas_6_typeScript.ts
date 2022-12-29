// import * as readlineSync from 'readline-sync';

// nomor 1
function LuasLingkaran(radius: number): number {
  let circleArea = Number(radius);
  if (circleArea <=  0) {
    return circleArea;
  }
   if (isNaN(circleArea)) {
    return circleArea
  } 
  const jari = Math.PI * radius * radius
  return jari
     
}
console.log( LuasLingkaran(0))

