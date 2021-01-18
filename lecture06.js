var a = 100;
a;
var b = 3.14;
b;
var c = 1e-3;
c;

var height = prompt("키를 입력해 주세요.")
console.log(height, typeof(height));

var height_int = parseInt(height);
console.log(height_int, typeof(height_int));
var height_float = parseFloat(height);
console.log(height_float , typeof(height_float))

var str = "3.141592는 pi의 근삿값입니다."
var pi_int = parseInt(str);
console.log(pi_int, typeof(pi_int))
var pi_float = parseFloat(str);
console.log(pi_float, typeof(pi_float))
//6강 숫자형
