


/*
let sum = 0 ;
for (let i=5; i<=100; i++){
 
    if(i % 2 ==0){
        sum = sum+i
       
    }

}
console.log(sum)
*/







// 1-misol
// Savol : 1 dan n gacha barcha 3 ga hamda 7 ga karrali sonlar soni topuvchi algaritm yozing.
// Javob
/*
function topuvchiAlgoritm(n) {
    let natija = [];
    for (let i = 1; i <= n; i++) {
      if (i % 3 === 0 || i % 7 === 0) {
        natija.push(i);
      }
    }
    return natija;
  }
  
  let n = prompt("Soni kiriting kiriting: ");
  n = parseInt(n);
  let natija = topuvchiAlgoritm(n);
  console.log("1 dan " + n + " gacha barcha 3 ga hamda 7 ga karrali sonlar: " + natija);
  */


  //2-misol
  //Savol : n dan 1 gacha barcha juft sonlar yig'indisini topuvchi algoritm yozing.
  /*
  function juftSonlarYigindisi(n) {
    let yigindi = 0;
    for (let i = 2; i <= n; i += 2) {
      yigindi += i;
    }
    return yigindi;
  }
  
  let n = prompt("Soni kiriting: ");
  n = parseInt(n);
  let yigindi = juftSonlarYigindisi(n);
  console.log("1 dan " + n + " gacha bo'lgan juft sonlar yig'indisi: " + yigindi);
  */

  // 3-misol
  // Savol : n soni berilgan songacha 5 ga bo'lanadigan hamda 7 ga bolinmaydiganlarining 
  // yi'gindisini topuvchi algoritm yozing.

//Javob
/*
function topuvchiAlgoritm(n) {
  let yigindi = 0;

  for (let i = 1; i <= n; i++) {
      if (i % 5 === 0 && i % 7 !== 0) {
          yigindi += i;
      }
  }

  return yigindi;
}

const n = 50; 
const natija = topuvchiAlgoritm(n);
console.log(`1 dan ${n} gacha 5 ga bo'lanadigan va 7 ga bo'linmaydigan sonlarining yig'indisi: ${natija}`);
*/


// 5 -misol
//Savol :  Soning  faktorialini topadigan funksiya.


/*
function faktorial(n) {
  let natija = 1;
  if (n === 0 || n === 1) {
      return natija;
  }
  for (let i = 2; i <= n; i++) {
      natija *= i;
  }
  return natija;
}

const son = 4; 
const natija = faktorial(son);
alert(`${son} faktoriali: ${natija}`);

*/


// 6-misol 
// Savol : Berilgan soning bo'luvchilarini ekranga chiqaruvchi algoritm yozing .

/*
function boluvchilarniChiqar(son) {
  let boluvchilar = [];

  for (let i = 1; i <= son; i++) {
      if (son % i === 0) {
          boluvchilar.push(i);
      }
  }

  return boluvchilar;
}

const testSon = 12; 
const boluvchilar = boluvchilarniChiqar(testSon);
console.log(`${testSon} sonining bo'luvchilari: ${boluvchilar}`);
*/



