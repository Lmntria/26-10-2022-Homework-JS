//First Task

// const numbers=[2,3,3,4,4,5,6,-5,-10,-10,-3,-5,-8];

// const uniqueNumbers=[]

// numbers.forEach((num)=>{
//   if (!uniqueNumbers.includes(num)) {
//     uniqueNumbers.push(num)
//   }
// })

// console.log(uniqueNumbers)

//==================================================================


//Second task
// const numbers=[2,3,4,5,6,-5,-10,-3,-5];


// const newnumbers = numbers.filter((number)=>number>0)

// // console.log(newnumbers)
// const squaredArr=[]
// newnumbers.reduce((accum,item)=>{
//   squaredArr.push(item**2)
// },0)

// console.log(squaredArr)

//==================================================================
//second ver2
// const numbers=[2,3,4,5,6,-5,-10,-3,-5];
// const squaredArr=[]
// numbers.reduce((accum,item)=>{
//   if (item>0) {
//     let accum=item**2
//     return squaredArr.push(accum)
//   }
// })
// console.log(squaredArr)

// console.log(newnumbers)

//==================================================================
//Third task

//ver1
// const text="Azerbaycan";
// const splited=text.split('')
// console.log(splited)
// const reverjoin=splited.reverse().join().replaceAll(",","")
// console.log(reverjoin)

//ver2
// const text="Azerbaycan";

// let textempty=""

// for (let i = text.length-1; i >= 0; i--) {
//   textempty+=text[i]
// }
// console.log(textempty)

//==================================================================
