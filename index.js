var finalScore = 0;
$(document).ready(function ()
{
    $('form').submit(function () { return false; });
    $("#resultMessage").html("<p>" + "Your score is: " +finalScore + "</p>");
    $("#scoremessage").html("<p>" + "Start Play!" +"</p>");
});
function subtractone()
{
    finalScore = finalScore - 1;
    $("#resultMessage").html("<p>" + "Your score is: " + finalScore + "</p>");
    if (finalScore == "-1"||finalScore == "-2"||finalScore == "-3"){
    $("#scoremessage").html("<p>" + "Try again for a perfect score! " +"</p>");
    }
    if (finalScore == "0"){
    $("#scoremessage").html("<p>" + "Try!!" +"</p>");
    }
}
function addone()
{
    finalScore = finalScore + 1;
    $("#resultMessage").html("<p>" + "Your score is: " + finalScore + "</p>");
    if (finalScore == "-1"||finalScore == "-2"||finalScore == "-3"){
    $("#scoremessage").html("<p>" + "Uh Oh! Try again? " +"</p>");
    }
    if (finalScore == "1"||finalScore == "2"){
    $("#scoremessage").html("<p>" + "Try again for a perfect score! " +"</p>");
    }
    if (finalScore == "3"){
    $("#scoremessage").html("<p>" + "Amazing!" +"</p>");
    }
    if (finalScore == "0"){
    $("#scoremessage").html("<p>" + "Try!" +"</p>");
    }
}
function hideshow1()
{
         $("#submit-btn1").hide();
         $("#submit-btn2").hide();
};
function hideshow2()
{
         $("#submit-btn3").hide();
         $("#submit-btn4").hide();
};
function hideshow3()
{
         $("#submit-btn5").hide();
         $("#submit-btn6").hide();
};
