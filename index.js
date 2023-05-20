



document.querySelector("#boton").addEventListener('click', function(){

   var score =  Math.floor(Math.random() * 100);
    if (score >= 70){
        document.querySelector("h2").innerHTML="Score: "+score+"%."+" Your love is Enternal!";
    }else if(score >= 31){
        document.querySelector("h2").innerHTML="Score: "+score+"%."+" Your love is okay but!";
    }else if(score <= 30){
        document.querySelector("h2").innerHTML="Score: "+score+"%."+" Break up!";
    }

});
