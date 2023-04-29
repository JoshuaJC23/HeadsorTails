
var headsCount = 0;
var tailsCount = 0;

$(document).ready(function(){
    $("#coin").click(function(){
        
        var random = Math.floor(Math.random() * 2);
        console.log(random);

        if(random == 0){
            $("#coin-spot").html($("<img src = '/assets/images/Heads.jpg'>"));
        }
        if(random == 1) {
            $("#coin-spot").html($("<img src = '/assets/images/Tails.jpg'>"));
        };

    });
});