let cal=document.getElementById('screen');
function input(x){
    cal.value=cal.value+x;
}
function allclear(){
    cal.value=' ';
}
function calc(){
    cal.value=eval(cal.value);
}
let togglebtn=document.querySelector('.togglebtn');
let body=document.querySelector('body');
togglebtn.onclick=function(){
    body.classList.toggle('dark');
}