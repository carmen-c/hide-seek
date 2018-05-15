var bedroom = document.getElementById("bedroom"),
    bathroom = document.getElementById("bathroom"),
    apartment = document.getElementById("apartment"),
    dialog = document.getElementById("dialog"),
    play = document.getElementById("playgame");

var cantFind = ["Nope, not here.", "I should look somewhere else.", "Where could you be?", "Entity not found.", "I dont see em anywhere!", "Now's not a good time to fool around."];
var hidingPlaces = ["bepaintingL", "beshelfL", "betableL", "beplantL", "bebedL", "berugL", "kisinkL", "kicontainerL", "kipizzaboxL", "kipizzaplateL", "kiplantshelfL", "kiplantL", "kiplatesL", "kiovenL", "kifridgeL", "bawindowL", "basinkL", "bacounterL", "bashelfL", "batoiletL", "babathL", "barugL", "enrugL", "enwindowL", "enshelfL", "endrawersL", "enplantL", "enchair1", "enchair2"];
var hidingSpot = "";

$(document).ready(function() {
   pickHidingSpot(); 
});

apartment.addEventListener("load", function() {
    var ap = apartment.contentDocument;
    
    ap.getElementById("kifridgeL").addEventListener("click", function() {
        check(this.id); 
     });
    ap.getElementById("kiovenL").addEventListener("click", function() {
        check(this.id); 
     });
    ap.getElementById("kiplantL").addEventListener("click", function() {
        check(this.id); 
     });
     ap.getElementById("kiplatesL").addEventListener("click", function() {
        check(this.id); 
     });
    ap.getElementById("kiplantshelfL").addEventListener("click", function() {
        check(this.id); 
     });
    ap.getElementById("kipizzaplateL").addEventListener("click", function() {
        check(this.id); 
     });
    ap.getElementById("kipizzaboxL").addEventListener("click", function() {
        check(this.id); 
     });
    ap.getElementById("kicontainerL").addEventListener("click", function() {
        check(this.id); 
     });
    
    ap.getElementById("kisinkL").addEventListener("click", function() {
        check(this.id); 
     });
    
    ap.getElementById("listarsL").addEventListener("click", function() {
        check(this.id);
    });
    
    ap.getElementById("litopshelfL").addEventListener("click", function() {
        check(this.id);
    });
   
    ap.getElementById("limiddleshelfL").addEventListener("click", function() {
        check(this.id);
    });
    
    ap.getElementById("libottomshelfL").addEventListener("click", function() {
        check(this.id);
    });
    
    ap.getElementById("licouchL").addEventListener("click", function() {
        check(this.id);
    });
    
    ap.getElementById("liplantL").addEventListener("click", function() {
        check(this.id);
    });
    
    ap.getElementById("lidrawerL").addEventListener("click", function() {
        check(this.id);
    });
    
    ap.getElementById("litvL").addEventListener("click", function() {
        check(this.id);
    });
    
    ap.getElementById("lirugL").addEventListener("click", function() {
        check(this.id);
    });
    
    ap.getElementById("liroomL").addEventListener("click", function() {
        check(this.id);
    });
    
    ap.getElementById("enchair1L").addEventListener("click", function() {
        check(this.id);
    });
    
    ap.getElementById("enchair2L").addEventListener("click", function() {
        check(this.id);
    });
    
    ap.getElementById("enhairbandL").addEventListener("click", function() {
        check(this.id);
    });
    
    ap.getElementById("enplantL").addEventListener("click", function() {
        check(this.id);
    });
    
    ap.getElementById("endrawersL").addEventListener("click", function() {
        check(this.id);
    });
    
    ap.getElementById("enshelfL").addEventListener("click", function() {
        check(this.id);
    });
    
    ap.getElementById("enwindowL").addEventListener("click", function() {
        check(this.id);
    });
    
    ap.getElementById("enrugL").addEventListener("click", function() {
        check(this.id);
    });
    
    ap.getElementById("endoorL").addEventListener("click", function() {
        showChat("I shouldn't go outside right now."); 
    });
    
    ap.getElementById("kibathdoorL").addEventListener("click", function() {
        $("#bathroomDiv").css({display: "block"});
        $("#apartmentDiv").css({display: "none"});
        
    });
    
    ap.getElementById("kibeddoorL").addEventListener("click", function() {
        $("#bedroomDiv").css({display: "block"});
        $("#apartmentDiv").css({display: "none"});
    });
});

bedroom.addEventListener("load", function() {
    var beSvg = bedroom.contentDocument;
    
    beSvg.getElementById("bepaintingL").addEventListener("click", function() {
        check(this.id);
    });
    
    beSvg.getElementById("beshelfL").addEventListener("click", function() {
        check(this.id);
    });
    
    beSvg.getElementById("betableL").addEventListener("click", function() {
        check(this.id); 
    });
    
    beSvg.getElementById("beplantL").addEventListener("click", function() {
        check(this.id); 
    });
    
    beSvg.getElementById("bebedL").addEventListener("click", function() {
        check(this.id);
    });
    
    beSvg.getElementById("berugL").addEventListener("click", function() {
        check(this.id);
    });
    
    beSvg.getElementById("bedoorL").addEventListener("click", function() {
        $("#apartmentDiv").css({display: "block"});
        $("#bedroomDiv").css({display: "none"});
    });
});

bathroom.addEventListener("load", function() {
    var baSvg = bathroom.contentDocument;
    
    baSvg.getElementById("bawindowL").addEventListener("click", function() {
        check(this.id);
    });
    
    baSvg.getElementById("basinkL").addEventListener("click", function() {
        check(this.id);
    });
    
    baSvg.getElementById("bacounterL").addEventListener("click", function() {
        check(this.id);
    });
    
    baSvg.getElementById("bashelfL").addEventListener("click", function() {
        check(this.id);
    });
    
    baSvg.getElementById("batoiletL").addEventListener("click", function() {
        check(this.id);
    });
    
    baSvg.getElementById("bamirrorL").addEventListener("click", function() {
        showChat("That is me.");
    });
    
    baSvg.getElementById("babathL").addEventListener("click", function() {
        check(this.id);
    });
    
    baSvg.getElementById("barugL").addEventListener("click", function() {
        check(this.id);
    });
    
    baSvg.getElementById("badoorL").addEventListener("click", function() {
        $("#apartmentDiv").css({display: "block"});
        $("#bathroomDiv").css({display: "none"});
    });
});

play.addEventListener("click", function() {
   playgame(); 
});

var timeLeft = 30;
var hideTimer = null;

function playgame() {
    $("#overlay").hide();
    $("#intro").hide();
    $("#bedroomDiv").css({display: "block"});
    
    hideTimer = setInterval(function() {
    document.getElementById("progressBar").value = 30 - --timeLeft;
        if(timeLeft <= 10) {
            $("#timer").css({animation: "shake 0.5s infinite"});
        }
        if(timeLeft <= 0) {
            clearInterval(hideTimer);
            $("#overlay").show();
            $("#intro").show();
            $("#playgame").hide();
            
            $("#bedroomDiv").hide();
            $("#bathroomDiv").hide();
            $("#apartmentDiv").hide();
            
            $("#desc").text("You failed :(");
            $("#progressBar").css({animation: "none"});
        }
    },1000);
}

function pickHidingSpot() {
    rNum = Math.round(Math.random()*(hidingPlaces.length-1));
    hidingSpot = hidingPlaces[rNum];
    console.log(hidingSpot);
}

function check (place) {
    if(place == hidingSpot) {
        console.log("win");
        win();
    } else {
        rMsg = Math.round(Math.random()*(cantFind.length-1));
        showChat(cantFind[rMsg]);
    }
}

function showChat (chatText) {
    dialog.style.display = "block";
    dialog.innerText = chatText;
    
    setTimeout(function() {
            $("#dialog").fadeOut();
        },1000);
}

function win () {
    clearInterval(hideTimer);
    var audio = new Audio('win.mp3');    
    audio.play();
    
    $("#bedroomDiv").hide();
    $("#bathroomDiv").hide();
    $("#apartmentDiv").hide();
    
    $("#overlay").show();
    $("#intro").show();
    $("#intro").html("<img src='hamster.svg'/>");
}
