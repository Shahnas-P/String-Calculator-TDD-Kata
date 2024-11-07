 
 const add  = (number)=>{
if(number ==='')return 0
let sum = 0;
const numArray= number.split(',')
numArray.forEach((element)=>sum+=parseInt(element))
return sum
}
export default add