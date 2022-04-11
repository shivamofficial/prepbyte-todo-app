// page 1
const addList = document.getElementById("addlist")

const cards = document.getElementById("cards")
// page 2
const taskbody = document.getElementById("taskbody")
const listText = document.getElementById("listtext")
const listBtn = document.getElementById("listbtn")



// page 3
const itembtn=document.getElementById("itembtn")
const itembtn2=document.getElementById("itembtn2")
const itembody=document.getElementById("itembody")
const itembody2=document.getElementById("itembody2")
const itemText=document.getElementById("itemtext")
const itemText2=document.getElementById("itemtext2")

//JavaScript classList // classlist tell the class present in the tag ..want to add class use div.classlist.add('abc)
// remove these classes use div.classlist.remove('abc)
//To replace an existing CSS class with a new one, you use the replace() method:



addList.addEventListener("click", () => {
  taskbody.classList.add("mainbodyshow");

})



// page2 evenets
window.addEventListener('click', e =>
  e.target == taskbody ? taskbody.classList.remove('mainbodyshow') : false
);
// 2nd page
listBtn.addEventListener("click", () => {
 
  
  
 
  itembody.classList.add("listbodyshow")
  taskbody.classList.remove('mainbodyshow')
})

// 3rd page
  itembtn.addEventListener("click",()=>{

 
  

  itembody.classList.remove("listbodyshow")
  // card
  var card = document.createElement("div")
  card.classList.add("card")
  cards.appendChild(card)



  // cardHeader
  const cardHeader = document.createElement("div")
  cardHeader.classList.add("cardHeader")
  cardHeader.id = "cardHeader"
  cardHeader.innerHTML =
   `<i class="fas fa-plus-circle lastIcon" id=${generate()} style="font-size:23px" ></i>
   <p> ${listText.value}</p> 
   <i  id=${generate()} class="fas fa-trash-alt  trash "></i>`
  card.appendChild(cardHeader)
  // cardBody 
  const cardBody = document.createElement("div")
  cardBody.classList.add("cardBody")
  card.appendChild(cardBody)
  // hr
  const hr = document.createElement("hr")
  cardBody.appendChild(hr)
  // task
  const task = document.createElement("p")
  task.classList.add("cTask")
  
  cardBody.appendChild(task)
  // pending task
  const ptask = document.createElement("div")
  ptask.classList.add("pendingTask")
  ptask.id = "pendingtas"
  
  
  ptask.innerHTML = `
  <i class="far fa-square pendingIcon" id=${generate()}></i>
                        <p class="scratch" >${itemText.value}</p>`
  card.appendChild(ptask)
  itemText.value=""
  listText.value=""
  
  
 
  })
  function generate(){
    return Math.random()*12
  }

//   const pendingIcon=document.querySelectorAll(".pendingIcon")
// pendingIcon.forEach(item=>{
//   item.addEventListener("click",()=>{
//     console.log("kk");
//     const parent=item.parentNode
//     const child=parent.querySelector(".scratch")
//     child.style.color="red"
//   })
// })



// scratch todo
cards.addEventListener("click",scratchTodo)

function scratchTodo(e)
{
const item=e.target;
if(item.classList.contains("pendingIcon"))
{
const id= item.id
const newid=document.getElementById(id)
newid.parentNode.classList.toggle("me")

}
}


// adding tasks


window.addEventListener("click",(e)=>{
if(e.target.classList.contains("lastIcon"))
{
  
  
  itembody2.classList.add("listbodyshow2")
  
   parentNode= e.target.parentNode.parentNode 
}
})
itembtn2.addEventListener("click",()=>{
  itembody2.classList.remove("listbodyshow2")
  

  
  const ptask = document.createElement("div")
  ptask.classList.add("pendingTask")
  ptask.id = "pendingtas"
  
  ptask.innerHTML = `
  <i class="far fa-square pendingIcon" id=${generate()}></i>
                        <p class="scratch" >${itemtext2.value}</p>
                        
                       
  `

  parentNode.appendChild(ptask)
  itemtext2.value=""
})





// delete todo


window.addEventListener("click",(e)=>{
  if(e.target.classList.contains("trash"))
  {
    const parentNode= e.target.parentNode.parentNode
    parentNode.remove()
  }
})
