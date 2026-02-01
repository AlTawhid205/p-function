function number(num){
  // console.log(num);
  if(num%2===1){
    num=num*2;
    return num;
  }
  return num/2;
}
const num1=number(550);
console.log(num1);