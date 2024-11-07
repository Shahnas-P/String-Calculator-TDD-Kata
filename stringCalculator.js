 
 const add  = (number)=>{
    //Return zero for empty string
if(number ==='')return 0
let sum = 0;
    //Split numbers by delimiters
const numArray= number.split(/[;\n,//]/)
let negativeNumbers = []
numArray.forEach((element)=>{
    // Convert string to number
    const num1 = parseInt(element)
   if(num1 <0){
    // Collect negative numbers
    negativeNumbers.push(num1)
   }else if(num1 >=0){
    // Add positive numbers to the sum
        sum+=num1
    }
    })
      // If there are negative numbers, throw an error with all negative numbers in the message
    if(negativeNumbers.length >0){
        throw new Error(`negative numbers not allowed: ${negativeNumbers.join(', ')}`)
    }
    console.log(sum);
    // Return the sum
return sum

}
// Pass any number here
add('3,3,6')
export default add