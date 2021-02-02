

  var d=new Date();
  document.getElementById("i1task").innerHTML +=`<h4>${d.getDate()}/${d.getMonth()}/${d.getFullYear()}</h4>`;

/*function myFunc(k)
{

var incomplete=document.getElementsByClassName("card");
pos= event.pageY;
console.log(pos);
console.log(incomplete);
console.log(k);
incomplete[k].style.position = 'absolute';
incomplete[k].style.zIndex = 1000;
var top=[];
var left=[];

function moveAt(pageX, pageY) {
    incomplete[k].style.left = pageX - incomplete[k].offsetWidth / 2 + 'px';
    left[k]= pageX - incomplete[k].offsetWidth / 2 ;
    incomplete[k].style.top = pageY - incomplete[k].offsetHeight / 2 + 'px';
    top[k]=pageY - incomplete[k].offsetHeight / 2;
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

document.addEventListener('mousemove', onMouseMove);

incomplete[k].ondragstart = function () {
  return false;
};   
var int=50;

document.onmouseup=function(event)
{
  
   if(event.pageX>window.innerWidth/2)
   {
    
    //incomplete[k].onmouseup = null;
    incomplete[k].style.left=window.innerWidth/2+400+'px';
    document.removeEventListener('mousemove', onMouseMove);
    incomplete[k].onmouseup = null;
    int=int+50;
    //break;

    
    
   }
   else
   {
    incomplete[k].style.left=100+'px';
    incomplete[k].style.top=pos+'px';
    document.removeEventListener('mousemove', onMouseMove);
    incomplete[k].onmouseup = null;
   }
   
};

}
var i=0;
var iTask =[];
*/
function show(todo)
{

}
function allowDrop(ev)
{
  ev.preventDefault();
}
function drag(ev)
{
    console.log("hi");
  ev.dataTransfer.setData("text", ev.target.id);
}
function drop(ev)
{
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  console.log(data);
  ev.target.append(document.getElementById(data));
  
}
var i=0;
function add()
{
  var todo1= document.getElementById("todo").value;
  document.getElementById("todo").value='';
  console.log(todo1);
  //iTask.push(todo1);
  //show(todo1);
  document.getElementById("i1task").innerHTML+=`<div class="card" id="${i}"" draggable="true" ondragstart="drag(event)"><div class="container"><p class="incomplete">=>  ${todo1}</p></div></div>`;
  console.log(i);
  i=i+1;
}


