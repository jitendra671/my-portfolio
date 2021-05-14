function submit(){
   x=confirm("This is submitted successfully");
mas= document.getElementById("ms");
if(x==true){
   mas.innerText=" submited...";
}
else{
   mas.innerHTML="<font color='red'>cancelled...</font>";
}

}


