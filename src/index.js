module.exports = function toReadable (number) {
    // let num_arr = [];
  let readable = [];
  let str = String(number).length;
  if (str==1) {
    readable = numToString(number);
  } else if ((number % 10) == 0 || (Math.floor(number/10) == 1)) {
    readable = numToString(number);
  } return readable;
}

function numToString(num) {
  let stringNum;
  if (num==1) {
    stringNum = 'one';
  } else if (num==2) {
    stringNum = 'two';
  } else if (num==3) {
    stringNum = 'three';
  } else if (num==4) {
    stringNum = 'four';
  } else if (num==5) {
    stringNum = 'five';
  } else if (num==6) {
    stringNum = 'six';
  } else if (num==7) {
    stringNum = 'seven';
  } else if (num==8) {
    stringNum = 'eight';
  } else if (num==9) {
    stringNum = 'nine';
  } else if (num==0) {
    stringNum = 'zero';
  } else if (num==10) {
    stringNum = 'ten';
  } else if (num==11) {
    stringNum = 'eleven';
  } else if (num==12) {
    stringNum = 'twelve';
  } else if (num==13) {
    stringNum = 'thirteen';
  } else if (num==14) {
    stringNum = 'fourteen';
  } else if (num==15) {
    stringNum = 'fifteen';
  } else if (num==16) {
    stringNum = 'sixteen';
  } else if (num==17) {
    stringNum = 'seventeen';
  } else if (num==18) {
    stringNum = 'eighteen';
  } else if (num==19) {
    stringNum = 'nineteen';
  } else if (num==20) {
    stringNum = 'twenty';
  } else if (num==30) {
    stringNum = 'thirty';
  } else if (num==40) {
    stringNum = 'forty';
  } else if (num==50) {
    stringNum = 'fifty';
  } else if (num==60) {
    stringNum = 'sixty';
  } else if (num==70) {
    stringNum = 'seventy';
  } else if (num==80) {
    stringNum = 'eighty';
  } else if (num==90) {
    stringNum = 'ninety';
  } return stringNum;
}
