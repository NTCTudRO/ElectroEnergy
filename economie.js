let energyDecoded, kWh=0.5, suma=0;
function decodeParamsAndShow() {
    const urlParams = new URLSearchParams(window.location.search);
    const usageEncoded = urlParams.get("usage")
    energyDecoded = JSON.parse(atob(usageEncoded));
}

decodeParamsAndShow();

function functie_economie(){
    const space = ' ';
    energyDecoded.forEach(element => {
        const div = document.createElement("div")
        const name = document.createElement("span");
        name.textContent = 'Appliance: ' + element.name + space + ' | ';
        const standbyConsume = document.createElement("span");
        standbyConsume.textContent = 'Consume standby: ' + element.standbyConsume + ' W' + space;
        suma=suma+element.standbyConsume*(24-element.runningTime);
        div.appendChild(name)
        div.appendChild(standbyConsume)
        document.getElementById("demo_1").appendChild(div)
    });
    suma=suma/1000;
    let roundedSuma=parseFloat(suma).toFixed(2);
    document.getElementById("demo_2").innerHTML="Total standby consumption per month is: " + roundedSuma*30 + " kW";
    document.getElementById("demo_3").innerHTML="How much money you can save per month is: " + roundedSuma*30*kWh + " lei";
}
