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
    $("#scoremessage").html("<p>" + "Well. This is embarrassing. For you. " +"</p>");
}
function addone()
{
    finalScore = finalScore + 1;
    $("#resultMessage").html("<p>" + "Your score is: " + finalScore + "</p>");
    $("#scoremessage").html("<p>" + " You're not so bad'! "+"</p>");
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
function openMariemodal()
{
console.log("Hiyaa!");
};
