let a=[1,2,3,4,5,6,7];
let sum=0;
function sumOfNum(a){
    for(i=0;i<=a.length-1;i++){
        sum+=a[i];
    }
    if(sum%3==0){
        return true;
    }
    return false;

}
console.log(sumOfNum(a))