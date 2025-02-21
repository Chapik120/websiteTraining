const send = document.querySelector(".btnSend");
const message = document.querySelector(".message");
const github = document.querySelector(".github");
const dribbble = document.querySelector(".dribbble");
const google = document.querySelector(".google");
const namee = document.querySelector("#name");
const email = document.querySelector("#email");
const backBtn = document.querySelector(".back");
const nextBtn = document.querySelector(".next");
const photosDiv = document.querySelector(".photos");
const leftImg = document.querySelector(".side:first-child img");
const centerImg = document.querySelector(".central img");
const rightImg = document.querySelector(".side:last-child img");
const slideContainer = document.querySelector(".photos");

send.addEventListener('click', ()=>{
    if(namee.value === "" || email.value === ""){
        alert('Заполните все поля!')
    } else {
    console.log("Имя отправителя", namee.value );
    console.log("Почта отправителя", email.value );
    console.log("Сообщение", message.value);
    alert('Письмо отправлено!');
    }
});

github.addEventListener('click', ()=>{
    window.open('https://github.com/Chapik120', '_blank');
})

google.addEventListener('click', ()=>{
    window.open('https://www.google.ru', '_blank');
})

dribbble.addEventListener('click', ()=>{
    window.location.href = "dribbble.html";
})

const images = [
    "photos/derevo_oblaka_sneg_1368438_1600x900.jpg",
    "photos/aston_martin_avtomobil_gonka_1367828_1600x900.jpg",
    "photos/barbaris_iagody_makro_1368085_1600x900.jpg",
    "photos/gory_solntse_derevia_1367811_1600x900.jpg",
    "photos/leopardovaia_raduzhnaia_ptitsa_ptitsa_dikaia_priroda_1368563_1600x900.jpg",
    "photos/more_okean_volny_1368109_1600x900.jpg",
    "photos/ozero_derevia_zakat_1367434_1600x900.jpg",
    "photos/pertsy_chili_ostryj_1367526_1600x900.jpg",
    "photos/skvorets_ptitsa_dikaia_priroda_1368221_1600x900.jpg",
    "photos/stulia_tribuna_zheltyj_1367998_1600x900.jpg",
    "photos/tsvety_prud_solntse_1367627_1600x900.jpg",
    "photos/vatochnik_klubnenosnyj_tsvety_lepestki_1368141_1600x900.jpg",
    "photos/zdaniia_shpili_otrazhenie_1368163_1600x900.jpg"
];

let currentIndex = 1;


function updateSlider() {
    
    const leftIndex = (currentIndex - 1 + images.length) % images.length;
    const rightIndex = (currentIndex + 1) % images.length;

    leftImg.src = images[leftIndex];
    centerImg.src = images[currentIndex];
    rightImg.src = images[rightIndex];

}

backBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateSlider();
});

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider();
});

updateSlider();