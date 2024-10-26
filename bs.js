var input = document.getElementById('inputid');
var button = document.getElementById('buttid');
var text = document.getElementById('textiid');

button.onclick = function(){
    text.innerHTML = input.value;
}
var text = 'the best school Digital School';
var result = text.search('Digital School');
document.getElementById('result1').innerHTML = result;

var text = 'the best school Digital School';
var result = text.replace( 'Digital School','Another schoool');
document.getElementById('result2').innerHTML = result;


var text2 = 'abcdef';
var regex = RegExp('abc');
document.getElementById('result3').innerHTML = regex.test(text2);



var text3 = 'my school is the best';
var regex = /o/g;
document.getElementById('result4').innerHTML = text3.match(regex);


var text4 = 'digital school is the best school';
var regex = /[abc]/g;
document.getElementById('result5').innerHTML = text.match(regex);


var text5 = 'Digital school is on top 5 ';
var regex  = /[0-9]/g;
document.getElementById('result6').innerHTML = text5.match(regex);

var text6 = "100 percent of jkehej 99"
var regex = /\s/g;
document.getElementById('result7').innerHTML = text6.match(regex);