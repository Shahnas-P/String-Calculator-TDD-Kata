 
 const add  = (number)=>{
if(number ==='')return 0
let sum = 0;
const numArray= number.split(/[;\n,//]/)

numArray.forEach((element)=>{
    const num1 = parseInt(element)
   if(num1 <0){
    throw new Error(`negative numbers not allowed: ${num1}`)
   }else if(num1 >=0){
        sum+=num1
    }
    })
return sum

}
export default add