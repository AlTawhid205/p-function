function count_zero(binary){
  let count =0;
  for(const ch of binary){
    if(ch === "1"){
      count++;
    }
  }
  return count;
}
console.log(count_zero("1111000001010101"));