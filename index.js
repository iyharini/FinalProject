var finalScore = 0;
$(document).ready(function ()
{

    $('form').submit(function () { return false; });
    $("#resultMessage").html("<p>" + finalScore + "</p>");
});
function subtractone()
{
    finalScore = finalScore - 1;
    $("#resultMessage").html("<p>" + finalScore + "</p>");
}
function addone()
{
    finalScore = finalScore + 1;
    $("#resultMessage").html("<p>" + finalScore + "</p>");
}
