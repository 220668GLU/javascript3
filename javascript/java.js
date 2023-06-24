var pikachuhealth = 35;
var haunterhealth = 45;

function attack1(){
    if (haunterhealth <= 5){
        document.getElementById("text").innerHTML = "You used Thundershock and did 5 damage.";
        haunterhealth = 0;
        let text = "HP: " + haunterhealth + "/45";
        document.getElementById("health4").innerHTML  = text;
        console.log(text);
        alert("Haunter has fainted. You won!");
        location.reload();
    } else {
        let Thundershock = Math.floor(Math.random() * 5) + 1;
        console.log(Thundershock);
        if (Thundershock == 1){
            document.getElementById("text").innerHTML = "You used Thunderhock and did 0 damage.";
            console.log(text);
            setTimeout(()=> {
                trainerattack();
             }
             ,1000);
        } 
        if (Thundershock == 2){
            document.getElementById("text").innerHTML = "You used Thunderhock and did 0 damage.";
            console.log(text);
            setTimeout(()=> {
                trainerattack();
             }
             ,1000);
        } 
        if (Thundershock == 3){
            document.getElementById("text").innerHTML = "You used Thunderhock and did 0 damage.";
            console.log(text);
            setTimeout(()=> {
                trainerattack();
             }
             ,1000);
        } 
        if (Thundershock == 4){
            document.getElementById("text").innerHTML = "You used Thundershock and did 4 damage.";
            haunterhealth = haunterhealth - 4;
            let text = "HP: " + haunterhealth + "/45";
            document.getElementById("health4").innerHTML  = text;
            console.log(text);
            setTimeout(()=> {
                trainerattack();
             }
             ,1000);
        } 
        if (Thundershock == 5){
            document.getElementById("text").innerHTML = "You used Thundershock and did 5 damage.";
            haunterhealth = haunterhealth - 5;
            let text = "HP: " + haunterhealth + "/45";
            document.getElementById("health4").innerHTML  = text;
            console.log(text);
            setTimeout(()=> {
                trainerattack();
             }
             ,1000);
        } 
        
   
    }
}
function attack2(){
    if (haunterhealth <= 2){
        document.getElementById("text").innerHTML = "You used Quick Attack and did 2 damage.";
        haunterhealth = 0;
        let text = "HP: " + haunterhealth + "/45";
        document.getElementById("health4").innerHTML  = text;
        console.log(text);
        alert("Haunter has fainted. You won!");
        location.reload();
    } else {
        let Quickatt = Math.floor(Math.random() * 5) + 1;
        if (Quickatt == 1){
            document.getElementById("text").innerHTML = "You used Quick Attack and did 1 damage.";
            haunterhealth = haunterhealth - 1;
            let text = "HP: " + haunterhealth + "/45";
            document.getElementById("health4").innerHTML  = text;
            console.log(text);
            setTimeout(()=> {
                trainerattack();
             }
             ,1000);
        } 
        if (Quickatt == 2){
            document.getElementById("text").innerHTML = "You used Quick Attack and did 1 damage.";
            haunterhealth = haunterhealth - 1;
            let text = "HP: " + haunterhealth + "/45";
            document.getElementById("health4").innerHTML  = text;
            console.log(text);
            setTimeout(()=> {
                trainerattack();
             }
             ,1000);
        } 
        if (Quickatt == 3){
            document.getElementById("text").innerHTML = "You used Quick Attack and did 2 damage.";
            haunterhealth = haunterhealth - 2;
            let text = "HP: " + haunterhealth + "/45";
            document.getElementById("health4").innerHTML  = text;
            console.log(text);
            setTimeout(()=> {
                trainerattack();
             }
             ,1000);
        } 
        if (Quickatt == 4){
            document.getElementById("text").innerHTML = "You used Quick Attack and did 2 damage.";
            haunterhealth = haunterhealth - 2;
            let text = "HP: " + haunterhealth + "/45";
            document.getElementById("health4").innerHTML  = text;
            console.log(text);
            setTimeout(()=> {
                trainerattack();
             }
             ,1000);
        } 
        if (Quickatt == 5){
            document.getElementById("text").innerHTML = "You used Quick Attack and did 2 damage.";
            haunterhealth = haunterhealth - 2;
            let text = "HP: " + haunterhealth + "/45";
            document.getElementById("health4").innerHTML  = text;
            console.log(text);
            setTimeout(()=> {
                trainerattack();
             }
             ,1000);
        } 
    }
}   
function attack3(){
    if (haunterhealth <= 4){
        document.getElementById("text").innerHTML = "You used Iron Tail and did 4 damage.";
        haunterhealth = 0;
        let text = "HP: " + haunterhealth + "/45";
        document.getElementById("health4").innerHTML  = text;
        console.log(text);
        alert("Haunter has fainted. You won!");
        location.reload();
    } else {
        let Iron = Math.floor(Math.random() * 5) + 1;
        if (Iron == 1){
            document.getElementById("text").innerHTML = "You used Iron Tail and did 0 damage.";
            console.log(text);
            setTimeout(()=> {
                trainerattack();
             }
             ,1000);
        } 
        if (Iron == 2){
            document.getElementById("text").innerHTML = "You used Iron Tail and did 0 damage.";
            console.log(text);
            setTimeout(()=> {
                trainerattack();
             }
             ,1000);
        } 
        if (Iron == 3){
            document.getElementById("text").innerHTML = "You used Iron Tail and did 2 damage.";
            haunterhealth = haunterhealth - 2;
            let text = "HP: " + haunterhealth + "/45";
            document.getElementById("health4").innerHTML  = text;
            console.log(text);
            setTimeout(()=> {
                trainerattack();
             }
             ,1000);
        } 
        if (Iron == 4){
            document.getElementById("text").innerHTML = "You used Iron Tail and did 3 damage.";
            haunterhealth = haunterhealth - 3;
            let text = "HP: " + haunterhealth + "/45";
            document.getElementById("health4").innerHTML  = text;
            console.log(text);
            setTimeout(()=> {
                trainerattack();
             }
             ,1000);
        } 
        if (Iron == 5){
            document.getElementById("text").innerHTML = "You used Iron Tail and did 4 damage.";
            haunterhealth = haunterhealth - 4;
            let text = "HP: " + haunterhealth + "/45";
            document.getElementById("health4").innerHTML  = text;
            console.log(text);
            setTimeout(()=> {
                trainerattack();
             }
             ,1000);
        } 
    }
}

    function trainerattack(){
        if (pikachuhealth <= 9){
            document.getElementById("text").innerHTML = "The trainer used Shadow Ball and did 9 damage.";
        pikachuhealth = 0;
        let text = "HP: " + pikachuhealth + "/35";
        document.getElementById("health1").innerHTML  = text;
        console.log(text);
        alert("Pikachu has fainted. You Lose!");
        location.reload();
        }
        let number = Math.floor(Math.random() * 3) + 1;
        if (number == 1){
            let Lick = Math.floor(Math.random() * 5) + 1;
            if (Lick == 1){
                document.getElementById("text").innerHTML = "The trainer used Lick and did 1 damage.";
                pikachuhealth = pikachuhealth - 1;
                let text = "HP: " + pikachuhealth + "/35";
                document.getElementById("health1").innerHTML  = text;
                console.log(text);
            } 
            if (Lick == 2){
                document.getElementById("text").innerHTML = "The trainer used Lick and did 1 damage.";
                pikachuhealth = pikachuhealth - 1;
                let text = "HP: " + pikachuhealth + "/35";
                document.getElementById("health1").innerHTML  = text;
                console.log(text);
            } 
            if (Lick == 3){
                document.getElementById("text").innerHTML = "The trainer used Lick and did 1 damage.";
                pikachuhealth = pikachuhealth - 1;
                let text = "HP: " + pikachuhealth + "/35";
                document.getElementById("health1").innerHTML  = text;
                console.log(text);
            } 
            if (Lick == 4){
                document.getElementById("text").innerHTML = "The trainer used Lick and did 2 damage.";
                pikachuhealth = pikachuhealth - 2;
                let text = "HP: " + pikachuhealth + "/35";
                document.getElementById("health1").innerHTML  = text;
                console.log(text);
            } 
            if (Lick == 5){
                document.getElementById("text").innerHTML = "The trainer used Lick and did 3 damage.";
                pikachuhealth = pikachuhealth - 3;
                let text = "HP: " + pikachuhealth + "/35"; 
                document.getElementById("health1").innerHTML  = text;
                console.log(text);
            } 
        } if (number == 2){
            let shadowball = Math.floor(Math.random() * 5) + 1;
            console.log(shadowball);
            if (shadowball == 1){
                document.getElementById("text").innerHTML = "The trainer used Shadow Ball and did 0 damage.";
                console.log(text);
            } 
            if (shadowball == 2){
                document.getElementById("text").innerHTML  = "The trainer used Shadow Ball and did 0 damage.";
                console.log(text);
            } 
            if (shadowball == 3){
                document.getElementById("text").innerHTML  = "The trainer used Shadow Ball and did 0 damage.";
                console.log(text);
            } 
            if (shadowball == 4){
                document.getElementById("text").innerHTML  = "The trainer used Shadow Ball and did 0 damage.";
                console.log(text)
            } 
            if (shadowball == 5){
                document.getElementById("text").innerHTML  = "Critical hit! The trainer used Shadow Ball and did 9 damage.";
                pikachuhealth = pikachuhealth - 9;
                let text = "HP: " + pikachuhealth + "/35"; 
                document.getElementById("health1").innerHTML  = text;
                console.log(text);
            } 
        }
        if (number == 3){
            let sockerpunch = Math.floor(Math.random() * 7) + 1;
            if (sockerpunch == 1){
                document.getElementById("text").innerHTML  = "The trainer used Socker Punch and did 0 damage.";
            } 
            if (sockerpunch == 2){
                document.getElementById("text").innerHTML  = "The trainer used Socker Punch and did 0 damage.";
            } 
            if (sockerpunch == 3){
                document.getElementById("text").innerHTML  = "The trainer used Socker Punch and did 2 damage.";
                pikachuhealth = pikachuhealth - 2;
                let text = "HP: " + pikachuhealth + "/35"; 
                document.getElementById("health1").innerHTML  = text;
            } 
            if (sockerpunch == 4){
                document.getElementById("text").innerHTML  = "The trainer used Socker Punch and did 2 damage.";
                pikachuhealth = pikachuhealth - 2;
                let text = "HP: " + pikachuhealth + "/35";  
                document.getElementById("health1").innerHTML  = text;
            } 
            if (sockerpunch == 5){
                document.getElementById("text").innerHTML  = "The trainer used Socker Punch and did 2 damage.";
                pikachuhealth = pikachuhealth - 2;
                let text = "HP: " + pikachuhealth + "/35"; 
                document.getElementById("health1").innerHTML  = text;
            } 
            
        }
    }