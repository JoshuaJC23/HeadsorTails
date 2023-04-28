var coins = ["/assets/images/Heads.jpg", "/assets/images/Tails.jpg"];

// var flip = document.getElementById("flip").addEventListener("click", function(){
//     alert("clicked");
// });
var headsCount = 0;
var tailsCount = 0;

$(document).ready(function(){
    $("#heads").click(function(){
        headsCount++;
        alert("Heads " + headsCount);
        var imgDiv = $("<img src ='/assets/images/Heads.jpg'>")
        $("#coin-spot").html(imgDiv);
    });

        $("#tails").click(function(){
            tailsCount++;
            alert("Tails " + tailsCount);
            var imgDiv = $("<img src ='/assets/images/Tails.jpg'>")
            $("#coin-spot").html(imgDiv);
    
        // var choice = Math.floor(Math.random()* coins.length);
        // console.log(choice);
        // var newDiv = $("<div>");
        // newDiv.text(choice);
        // $("#coin-spot").html(newDiv);

    //    for(var i = 0; i < coins.length; i++){
    //     var choice = Math.floor(Math.random()* coins.length);
    //     console.log(choice);
    //     var newDiv = $("<div>");
    //     newDiv.text(choice);
    //     $("#coin-spot").html(newDiv);
    //    }

    });
});