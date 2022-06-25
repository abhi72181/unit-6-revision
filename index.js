
async function main(){
  let value=document.querySelector("#throttle").value
  let data=await fetch(`https://meanbuybackend.herokuapp.com/mensWatches?q=${value}`)
  data=await data.json()
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

function throttling(fn,delay){
   setTimeout(()=>{
      fn()
   },delay)
}