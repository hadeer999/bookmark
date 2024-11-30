var bookMark=document.getElementById('bookMark');
var webSite=document.getElementById('webSite');
var dataDisblay=document.getElementById('dataDisblay')
var webMark=[];

if(localStorage.getItem('links')!=null){
    webMark=JSON.parse(localStorage.getItem('links'))
    display()
}

function add(){
    if(Validation(bookMark) &&Validation(webSite)){
 var webLinks={
    id:Date.now(),
    bMark : bookMark.value,
    wMark :  webSite.value,
 }
 webMark.push(webLinks)
 localStorage.setItem('links',JSON.stringify(webMark))
 clear()
 display()
    }
}

function display(){
    var box=''
    for(i=1;i<webMark.length;i++){
box+=`
<tr>
<td>${i}</td>
<td>${webMark[i].bMark}</td>
<td><a><button onclick= "${webMark[i].wMark}" class=" btn text-white btn-success ">Visit <i class="fa-solid fa-eye"></i></button></a></td>
<td>   <button onclick="delet(${i})" class="btn text-white   bg-danger">delet <i class="fa-solid fa-trash"></i></button></td>
</td>

</tr>
`
    }
    dataDisblay.innerHTML=box
    
}





function delet(index)
{
  webMark.splice(index,1)
  localStorage.setItem('product', JSON.stringify(webMark))
    display()
}

function Validation(input)
{  

var valid  = {
    bookMark:/^[a-zA-Z]+/g,
    webSite:/((http|https):\/\/)?([\w-]+\.)+[\w-]+(\/[\w .\/?%&=]*)?/gm,
    
  }
 
    if(valid[input.id].test(input.value) )
   {
      input.classList.add('is-valid')
      input.classList.remove('is-invalid')
      input.nextElementSibling.classList.replace('d-block','d-none') 
      return true   
   }
   else{
    input.classList.add('is-invalid')
    input.classList.remove('is-valid')
    input.nextElementSibling.classList.replace('d-none','d-block')
    return false
   }
  
}


function clear(){
bookMark.value=null;
webSite.value=null;
}
