let inputs = document.getElementById("input");
let text=document.querySelector(".text");
function Add(){
       if(inputs.value=="")
       {
        alert("Please Enter the task")
}
else{
    let li=document.createElement("ul");
    li.innerHTML=`${inputs.value}<i class="fa-solid fa-trash"></i>`;
    text.appendChild(li);
    inputs.value="";
    li.querySelector("i").addEventListener("click",remove)
   function remove() {
    li.remove();
   }
}
}
