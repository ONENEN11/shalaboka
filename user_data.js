let u_m = document.getElementById('user_mail');
let u_p = document.getElementById('user_pass');
let btn0 = document.getElementById('btn0');
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
onload = _ =>{
    u_m.focus()
}
u_m.onkeyup = _ =>{
    localStorage.email = u_m.value
}
u_p.onkeyup = _ =>{
    localStorage.pass = u_p.value
}
if(localStorage.length > 0){
    u_m.value = localStorage.email
    u_p.value = localStorage.pass
}
btn1.onmousedown = _ => localStorage.clear()
btn2.onmousedown = _ => history.back()