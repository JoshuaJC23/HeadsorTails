
var headsCount = 0;
var tailsCount = 0;

$(document).ready(function(){
    $("#heads").hide();
    $("#tails").hide();
    
    $("#coin").click(function(){
        
        var random = Math.floor(Math.random() * 2);
        console.log(random);
        $("#heads").show();
        $("#tails").show();
        
        if(random == 0){
            $("#coin-spot").html($("<img src = '/assets/images/Heads.jpg' width = 300 height = 300>"));
            headsCount++;
            $("#headsCount").text(headsCount);
        }
        
        if(random == 1) {
            $("#coin-spot").html($("<img src = '/assets/images/Tails.jpg' width=300 height=300>"));
            tailsCount++;
            $("#tailsCount").text(tailsCount);
        };

    });
});