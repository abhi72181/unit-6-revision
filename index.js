const myThrottle=(fn,delay)=>{
  let flag=true;
  
  return function(){
    // let context=this              if arguments are passed in main(arguments)
    // let args=arguments
    if(flag){
      // fn.apply(context,args)   if arguments are passed then instead fn() write fn.apply(context,args)
      fn()
      flag=false
      setTimeout(()=>{
        flag=true
      },delay)
    }
  }
    
  
 
}


const betterExpensive=myThrottle(main,6000)
let btn=document.querySelector("#throttles").addEventListener("click",betterExpensive)


// const newFun = myThrottle(main,1000)



// function thro(fn,delay){
//    setTimeout(()=>{
//     fn()
//    },delay)
// }

// let count=0
// let thro
// function thro(){

//  console.log(delay)
// }
async function main(){
  let setvalue=document.querySelector("#inputThrottle").value
  console.log(setvalue,"value")
  let data=await fetch(`https://meanbuybackend.herokuapp.com/mensWatches?q=${setvalue}`)
  data=await data.json()
  console.log(data,"data")
  appendData(data)
}

function appendData(data){
  let productDiv=document.querySelector("#products")
    productDiv.textContent=""
    data.map((e)=>{
        let mainDiv=document.createElement("div")
        let image=document.createElement("img")
        image.src=e.image
        let title=document.createElement("p")
        title.textContent=e.name
        mainDiv.append(image,title)

   
        productDiv.append(mainDiv)
})
}

// function throttling(fn,delay){
//    setTimeout(()=>{
//       fn()
//    },delay)
// }