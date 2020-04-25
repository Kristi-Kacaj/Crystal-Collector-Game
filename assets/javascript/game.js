$(document).ready(function () {

    //generates random number between 19-120
    let ranNumber = Math.floor(Math.random()*102+19);
    $("#numToGet").text(ranNumber);

    //each variable generates random number between 1-12
    let blue = Math.floor(Math.random()*12+1);
    let green = Math.floor(Math.random()*12+1);
    let red = Math.floor(Math.random()*12+1);
    let yellow = Math.floor(Math.random()*12+1);

    //global variables
    let wins = 0;
    let losses = 0;
    let totalScore = 0;

    $("#wins").text(wins);
    $("#losses").text(losses);
    $("#total").text(totalScore);

    $(".crystal").on("click",function(){
        console.log(this.id)
        let color = ($(this).attr("id"))
        switch (color) {
            case "blue":
                $("#total").text(totalScore);
                totalScore+= blue;
                break;
            case "green":
                $("#total").text(totalScore);
                totalScore+= green;
                break;  
            case "red":
                $("#total").text(totalScore);
                totalScore+= red;
                break;
            case "yellow":
                $("#total").text(totalScore);
                totalScore+= yellow;
                break;
        }

        if (totalScore === ranNumber) {
            wins++;
            $("#wins").text(wins);
            reset ();
            console.log("You win!")
        } else if (totalScore >ranNumber){
            losses++;
            $("#losses").text(losses);
            reset ();
           console.log("You lost!")
        }
        console.log(totalScore)

        function reset(){
            ranNumber = Math.floor(Math.random()*102+19);
            console.log(ranNumber)
            $("#numToGet").text(ranNumber);
            blue = Math.floor(Math.random()*12+1);
            green = Math.floor(Math.random()*12+1);
            red = Math.floor(Math.random()*12+1);
            yellow = Math.floor(Math.random()*12+1);
            totalScore= 0;
            $('#total').text(totalScore);
        } 

    })


})
