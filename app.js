function convert() {
  const numberInput = document.getElementById('input').value;

function convertToRoman(num) {
    var romanNum = {
      "M" : 1000,
      "CM": 900,
      "D" : 500,
      "CD" : 400,
      "C"  : 100,
      "XC" : 90,
      "L" : 50,
      "XL" : 40,
      "X" : 10,
      "IX" : 9,
      "V" : 5,
      "IV" : 4,
      "I" : 1
    }

    let result = ""
    for (var key in romanNum) {
      while (num >= romanNum[key]) {
        //romanNum[key] accesses the numbers, {100, 90, 50, etc}
        result += key
        num -= romanNum[key]
      }
    }
   return result;
  }

const converter = convertToRoman(numberInput);
document.getElementById('answer').value = converter;
return true;

}
