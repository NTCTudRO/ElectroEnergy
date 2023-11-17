var Electrocasnic=[], ConsumElectrocasnic=[], ConsumElectrocasnic_stby=[], Folosire=[], i=0, j=0;
        var Consum_total=0, Consum_total_stby=0, kWh=1, aux=0, c;
        function functie1(){ //functie care memoreaza datele introduse si calculeaza consumul total
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
                Electrocasnic[i]=aux1; //memorare electrocasnic
                ConsumElectrocasnic[i]=aux2; //memorare consum electrocasnic cat timp in uz
                ConsumElectrocasnic_stby[i]=aux3; //memorare consum electrocasnic cat timp in standby
                Folosire[i]=aux4; //memorare timp de folosire pe zi
                Consum_total=Consum_total+aux2*aux4+aux3*(24-aux4); //calculare consum total pe zi
                Consum_total_stby=Consum_total_stby+aux3*(24-aux4); //calculare consum total in stby pe zi
                i=i+1;
            }
            
        }
        function functie2(){ //functie care afiseaza toate datele introduse
            let text1="", text2="";
            for(var aux=0; aux<=i-1; aux++)
            {
                text1+=Electrocasnic[aux] + " - " + ConsumElectrocasnic[aux] + " - " + ConsumElectrocasnic_stby[aux] + " - " + Folosire[aux] + "<br>";
            }  
            document.getElementById("demo1").innerHTML=text1;
        }

        function functie3(){ //functie care afiseaza consumul total pe zi
            var Economisire=Consum_total_stby/1000;
            document.getElementById("demo2").innerHTML="Your total consumption per day is: " + Consum_total/1000 + " W<br>" + "How much money you can save per month: " + Economisire*30 + " lei";
        }