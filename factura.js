let energyDecoded, suma=0, kWh=0.5;
function decodeParamsAndShow() {
    const urlParams = new URLSearchParams(window.location.search);
    const usageEncoded = urlParams.get("usage")
    energyDecoded = JSON.parse(atob(usageEncoded));
}

decodeParamsAndShow();

function functie_factura(){
    const space = ' ';
    energyDecoded.forEach(element => {
        const div = document.createElement("div")
        const name = document.createElement("span");
        name.textContent = 'Appliance: ' + element.name + space + ' | ';
        const consume = document.createElement("span");
        consume.textContent = 'Consume: ' + element.consume + ' W' + space + ' | ';
        const standbyConsume = document.createElement("span");
        standbyConsume.textContent = 'Consume standby: ' + element.standbyConsume + ' W' + space + ' | ';
        const runningTime = document.createElement("span");
        runningTime.textContent = 'Usage time: ' + element.runningTime + ' h';
        suma=suma+element.consume*element.runningTime+element.standbyConsume*(24-element.runningTime);
        div.appendChild(name)
        div.appendChild(consume)
        div.appendChild(standbyConsume)
        div.appendChild(runningTime)
        document.getElementById("demo_1").appendChild(div)
    });
    suma=suma/1000;
    let roundedSuma=parseFloat(suma).toFixed(2);
    document.getElementById("demo_2").innerHTML="Total consume per day is: " + roundedSuma + " kW";
    document.getElementById("demo_3").innerHTML="Total consume per month is: " + roundedSuma*30 + " kW";
    document.getElementById("demo_4").innerHTML="Total payment: " + roundedSuma*30*kWh + " lei";
}
