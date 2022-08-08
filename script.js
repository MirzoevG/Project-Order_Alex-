let main_section__wrapper_content_box_discription = document.body.querySelector('.main_section__wrapper_content_box_discription');
let left_section_content_text = document.body.querySelector('.left_section_content_text');
let word2 = 'В невидимом для большинства пользователей сети «темном» интернете существуют сотни сайтов, где можно беспрепятственно купить оружие, посмотреть скрытые документы или воспользоваться услугами хакеров. Достаточно установить себе специальный Tor-браузер и зайти на один из таких ресурсов в доменной зоне .onio'
left_section_content_text.textContent = '';

let word = "Будь всегда в курсе !";
main_section__wrapper_content_box_discription.textContent = "";
for(let i = 0; i < word.length; i++){
    setTimeout(()=>{
        main_section__wrapper_content_box_discription.textContent += word[i];
    }, i * 75);
}
for(let i = 0; i < word2.length; i++){
    setTimeout(()=>{
        left_section_content_text.textContent += word2[i];
    }, i * 15);
}

let qr_code_box = document.body.querySelector('.qr_code_box');

qr_code_box.addEventListener('click', ()=>{
    let qr_code_picture_wrapper = document.body.querySelector('.qr_code_picture_wrapper');
    qr_code_picture_wrapper.style.visibility = 'visible';
        for(var i = 0; i <= 10; i++){
            setInterval(()=>{
                qr_code_picture_wrapper.style.opacity = (0.1 * i) + '';
            }, i*50);   
        }
        
});
document.querySelector('.main_section').addEventListener('click', ()=>{
    let qr_code_picture_wrapper = document.body.querySelector('.qr_code_picture_wrapper');
    qr_code_picture_wrapper.style.visibility = 'hidden';
})

document.body.querySelector('.onion_links_nav_wrapper').addEventListener('click', ()=>{
    if(window.scrollY > 300){
        window.scrollBy({
            top: - window.scrollY,
            behavior: "smooth"
        })
    }
    else{
        document.body.querySelector('.wrapper_onion_links').scrollIntoView({behavior: "smooth"});
    }
});

window.addEventListener('scroll', ()=>{
    let onion_links_nav_text = document.body.querySelector('.onion_links_nav_text');
    if(window.scrollY > 100){
        onion_links_nav_text.textContent = "НАВЕРХ";
    }
    else{
        onion_links_nav_text.textContent = "ONION ССЫЛКИ";
    }
})


import * as datGui from "https://cdn.skypack.dev/dat.gui@0.7.7";

const state = {
  fps: 60,
  color: "#0f0",
  charset: "0123456789ABCDEF"
};

const gui = new datGui.GUI();
const fpsCtrl = gui.add(state, "fps").min(1).max(120).step(1);
gui.addColor(state, "color");
gui.add(state, "charset");

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let w, h, p;
const resize = () => {
  w = canvas.width = innerWidth;
  h = canvas.height = innerHeight;

  p = Array(Math.ceil(w / 5)).fill(0);
};
window.addEventListener("resize", resize);
resize();

const random = (items) => items[Math.floor(Math.random() * items.length)];

const draw = () => {
  ctx.fillStyle = "rgba(0,0,0,.05)";
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = state.color;

  for (let i = 0; i < p.length; i++) {
    let v = p[i];
    ctx.fillText(random(state.charset), i * 10, v);
    p[i] = v >= h || v >= 10000 * Math.random() ? 0 : v + 10;
  }
};

let interval = setInterval(draw, 1000 / state.fps);
fpsCtrl.onFinishChange((fps) => {
  console.log(fps);
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(draw, 1000 / fps);
});



let dg = document.body.querySelector('.dg');
dg.style.opacity = '0';
console.log(dg);