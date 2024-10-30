let body = document.getElementsByTagName('body')
let nav0 = document.getElementById('nav0');
let nav1 = document.getElementById('nav1');
let sd0 = document.getElementById('sd0');
let sd1 = document.getElementById('sd1');
nav0.onclick = _ =>{
    nav0.classList.toggle('nav0');;
    nav1.classList.toggle('nav1s');
    nav1.classList.toggle('nav1h');
    sd0.classList.toggle('sd0');
    sd1.classList.toggle('sd1');
};
nav0.onmouseover = _ =>{
    sd0.style.background = '#fa0';
    sd1.style.background = '#fa0';
};
nav0.onmouseleave = _ =>{
    sd0.style.background = 'white';
    sd1.style.background = 'white';
};
let login = document.getElementById('login');
login.onmousedown = _ => location.pathname = 'shalaboka-v3.2/user_data.html';
let btn0 = document.getElementById('btn0');
btn0.onmousedown = _ => alert('Soldout');
let btn1 = document.getElementById('btn1');
onscroll = _ =>{if(scrollY >= 10){
    btn1.style.display = 'block';
}else{
    btn1.style.display = 'none';
}};
btn1.onmousedown = _ =>{
    scroll({
        top:0,
        behavior:"smooth",
    })
};
