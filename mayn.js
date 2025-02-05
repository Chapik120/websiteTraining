const send = document.querySelector(".btnSend");
const message = document.querySelector(".message");
const github = document.querySelector(".github");
const dribbble = document.querySelector(".dribbble");
const google = document.querySelector(".google");
const namee = document.querySelector("#name");
const email = document.querySelector("#email");

send.addEventListener('click', ()=>{
    if(name.value === "" || email.value === ""){
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