let money = 500;
let food = 100;
let eco = 80;
let community = 70;
let year = 1;

function update() {

document.getElementById("money").textContent = money;
document.getElementById("food").textContent = food;
document.getElementById("eco").textContent = eco;
document.getElementById("community").textContent = community;
document.getElementById("year").textContent = year;

}

function log(text){

const box = document.getElementById("events");

box.innerHTML += `<p>${text}</p>`;

box.scrollTop = box.scrollHeight;

}

function nextYear(){

randomEvent();

year++;

if(year > 15){

finishGame();

}

update();

}

function plantCorn(){

money -= 50;
food += 40;
eco -= 5;

log("🌽 Você plantou milho.");

nextYear();

}

function organicFarm(){

money -= 80;
food += 25;
eco += 10;
community += 5;

log("🥬 Produção orgânica implantada.");

nextYear();

}

function reforest(){

money -= 100;
eco += 20;

log("🌳 Área reflorestada.");

nextYear();

}

function solarEnergy(){

money -= 120;
eco += 15;
community += 10;

log("☀️ Painéis solares instalados.");

nextYear();

}

function sellFood(){

let gain = food * 3;

money += gain;

food = 0;

log(`🚚 Produção vendida por ${gain} moedas.`);

nextYear();

}

function randomEvent(){

const events = [

() => {
food += 30;
log("🌧️ Chuvas favoráveis aumentaram a colheita.");
},

() => {
food -= 20;
eco -= 5;
log("☀️ Seca reduziu a produção.");
},

() => {
eco += 10;
community += 5;
log("🐝 Polinizadores retornaram à fazenda.");
},

() => {
money += 100;
log("🏆 Sua fazenda recebeu incentivo ambiental.");
},

() => {
community -= 10;
log("⚠️ Reclamações da comunidade.");
}

];

events[Math.floor(Math.random()*events.length)]();

}

function finishGame(){

let message = "";

if(
eco >= 90 &&
community >= 80 &&
money >= 1500
){
message = "🏆 Lenda da Sustentabilidade!";
}
else if(
eco >= 80
){
message = "🌱 Fazendeiro Sustentável!";
}
else if(
money >= 1500
){
message = "💰 Magnata do Agronegócio!";
}
else{
message = "🚜 Continue evoluindo sua fazenda!";
}

document.getElementById("result").textContent = message;

document
.querySelectorAll("button")
.forEach(btn => btn.disabled = true);

}

update();

log("🌎 Bem-vindo à EcoFazenda: O Desafio da Terra!");
