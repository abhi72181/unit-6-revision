
var timerId;

let movies_div = document.getElementById("senddata");

async function getSearch(name) {

  movies_div.innerHTML = null;
// console.log(name)
  let response = await fetch(`https://maxfashionbackendclone.herokuapp.com/men`);

  let data = await response.json();

  var data2 = []

   
  data.forEach(dat => {
    const newdata = dat.title.toLowerCase().includes(name)

    if(newdata==true){
        data2.push(dat)
    }


})
return data2

}

async function appenddata(m) {
  if (m === undefined) {
    return false;
  }
 
  m.map((e)=>{
    let p = document.createElement("p");
    p.innerText = e.title;
    let image = document.createElement("img");
    image.src = e.image
    movies_div.append(p,image);
  })
  
}

function main_func(func, delay) {
  // If setTimeout is already scheduled, no need to do anything
  if (timerId) {
    clearTimeout(timerId);
  }

  // Schedule a setTimeout after delay seconds
  timerId = setTimeout(function () {
    func();
  }, delay);
}

async function main() {
  let name = document.getElementById("query").value;
  if(name!==""){
  document.getElementById("senddata").style = 'display: block'

  }

  if (name.length <= 2) {
    return false;
  }

//   console.log("fired");

  let m = await getSearch(name);
  // console.log("m", m)
  appenddata(m);


}

let insideContainer=document.querySelector(".insideBodyContainer")
let count=1
let limit=9
async function getData(count){
    insideContainer.textContent=""
    let data=await fetch(`https://maxfashionbackendclone.herokuapp.com/men?_page=${count}&_limit=9`)
    console.log(data,"data");
    data=await data.json()
   
    limiting(data.length)
    showData(data)
}
getData(count)

function prev(){
    
   
    if(count<=1){
        return
    }
    count--
    getData(count)
}

var pages=0
function limiting(d){
    pages=Math.ceil(d/limit)
    console.log(pages,"pages");
}
function next(){

   

   
   if(count>4){
    return
   }
   count++
//    if(count==pages+1){
// return
//    }
    
  getData(count)
}

function showData(data){
    data.map((e)=>{
       let productDiv=document.createElement("div")
       productDiv.setAttribute("style","border: 1px solid")
      
    
        let productimage=document.createElement("img")
        productimage.src=e.image
        productimage.setAttribute("style","width:100%")
     
        let titleDiv=document.createElement("div")
        let title=document.createElement("p")
        title.textContent=e.title
        title.setAttribute("class","insideTitlediv")
        titleDiv.setAttribute("class","titleDiv")
    
        titleDiv.append(title)
        productDiv.append(productimage,titleDiv)
   
    
        insideContainer.append(productDiv)
    
    })
}


