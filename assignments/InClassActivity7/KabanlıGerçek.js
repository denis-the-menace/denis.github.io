var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) { return document.getElementById(id); };

window.onload = function () {
	$("display_results").onclick = displayResults;
	$("display_scores").onclick = displayScores;
	$("add").onclick = addScore;
	
	$("name").focus();
};

function displayResults()
{
    var average = 0;
    var highScoreIndex = 0;
    for(var i=0;i<scores.length;i++)
    {
        average= (average*(i)+scores[i])/(i+1);
        if(scores[i] > scores[highScoreIndex]) {
            highScoreIndex = i;
        }
    }
    
    var highScoreName = names[highScoreIndex];
    var highScore = scores[highScoreIndex];
    
    document.getElementById("results").innerHTML="<h2> Results </h2><br /> Average score is "+average + "<br \> "
    +"High score = "+ highScoreName + " with a score of " + highScore;
}

function displayScores() {
	document.getElementById("scores").innerHTML="<h2> Scores </h2><br /> ";
    var table = document.getElementById("scores_table");
    table.innerHTML = ""; 
    var header = table.createTHead();
    var row = header.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = "<b>Name</b>";
    cell2.innerHTML = "<b>Score</b>";
    for(var i=0; i<scores.length; i++) {
        var row = table.insertRow(-1);
        var cell1 = row.insertCell(0); 
        var cell2 = row.insertCell(1); 
        cell1.innerHTML = names[i]; 
        cell2.innerHTML = scores[i]; 
    }
}
function addScore(){
	var name = $("name").value;
	var score =  parseFloat($("score").value);
	if(name === "" || isNaN(score) || score < 0 || score > 100) {
        alert("You must enter a name and a valid score");
        return; 
    }
	names.push(name);
	scores.push(score);

	$("name").focus();
}

