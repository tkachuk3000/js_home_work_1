alert('Драсте... Начинаем возводить числа в степень!Для продолжения нажмите - ОК');
	
	
    
function pow() {
  var x = prompt('Введите число: ');
  var n = prompt('Введите степень: ');

  var i=1, y=x;

	while (i<n){
          y=y*x;
          i++;
    }
  return y;
}
var rez = pow();

console.log('Ответ =',rez);

