function make_avg(arr){
  // console.log(arr);
  let sum=0;
  for(const num1 of arr){
    sum=sum+num1;
  }

  const num= arr.length;
  const ans=sum/num;
  return ans;
}

const ans= make_avg([10,20,30,40,50]);
console.log(ans);
