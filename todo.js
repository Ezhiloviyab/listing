const box=document.getElementById("inputbox");
const listed=document.getElementById("listing");

function addtask(){
    if(box.value===''){
        alert('you must add some task!');

    }
    else{

    
let li=document.createElement("li");
li.innerHTML=box.value;
listed.appendChild(li);
let span=document.createElement("span");
span.innerHTML="\u00d7";
li.appendChild(span);
inputbox.value="";
    }
}
listed.addEventListener("click",function(added){
    if (added.target.tagName==="LI"){
        added.target.classlist.toggle("check");
    }
    else if(added.target.tagName==="SPAN") {
        added.target.parentElement.remove();
    }

},false);