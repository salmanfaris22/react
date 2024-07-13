// function abc(cb){
//     return new Promise((res,rej)=>{
//         res("sugalle")
//         cb()
//        })
// }

// function abcd(cb){
//     return new Promise((res,rej)=>{
//         res(`s : `)
//         cb()
//        })
// }

// function a(){
//    return new Promise((res,rej)=>{
//     res("s")
//    })
// }





// async function news(){
//    try{
//      const res = await abc()
//      const res2 = await abcd()
//      const  res3 = await a(res2)
     
//      console.log(res,res2,res3);
//    }catch{
//    console.log("erroe");
//    }
// }
// news()


// const result = confirm('Are you sure?');
// console.log(result); // true/false\













const p1 = new Promise((res,rej)=>{
    res("start")
})
const p2 = new Promise((res,rej)=>{
    res("goine")
})
const p3 = new Promise((res,rej)=>{
    rej("finishing")
})
const p4 = new Promise((res,rej)=>{
    res("ending")
})


const pro = Promise.allSettled([p1,p2,p3,p4])
.then((data)=>{
    console.log(data);
})




