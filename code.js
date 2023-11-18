var Electrocasnic=[], ConsumElectrocasnic=[], ConsumElectrocasnic_stby=[], Folosire=[]
        var Consum_total=0, Consum_total_stby=0, kWh=0.5, aux=0, c;
        function functie1(){ 
            var aux1=document.getElementById("electroinput").value;
            var aux2=document.getElementById("input2").value;
            var aux3=document.getElementById("input3").value;
            var aux4=document.getElementById("input4").value;
            aux=aux4;
            if(aux2<1)
                alert("Consumption while in use field is too low");
            else
                if(aux3<0)
                    alert("Consumption while in stand-by field is too low");
            else
                if(aux4<0 || aux4>24)
                    alert("Usage per day field is incorrect");
            else{


                Electrocasnic.push({
                    name: aux1,
                    consume: aux2,
                    standbyConsume: aux3,
                    runningTime: aux4

                }); 
                Consum_total=Consum_total+aux2*aux4+aux3*(24-aux4); 
                Consum_total_stby=Consum_total_stby+aux3*(24-aux4); 
                window.location = `ElectroEnergy.html?usage=${usage=btoa(JSON.stringify(Electrocasnic))}`;
            }
            
        }
        function functie2(){ 
            JSON.stringify(Electrocasnic)
            window.location = `ElectroEnergyFactura.html?usage=${usage=btoa(JSON.stringify(Electrocasnic))}`;
        }

        function functie3(){ 
            JSON.stringify(Electrocasnic)
            window.location = `ElectroEnergyEconomie.html?usage=${usage=btoa(JSON.stringify(Electrocasnic))}`;
        }

        const urlParams = new URLSearchParams(window.location.search);
        const usageEncoded = urlParams.get("usage")
        Electrocasnic = JSON.parse(atob(usageEncoded));
