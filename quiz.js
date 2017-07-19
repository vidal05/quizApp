var i = 0;
var answers = [];
var correct = 0;
var test_words = {};

document.getElementById("start_quiz").addEventListener("click", startQuiz);
document.getElementById("submit_answer").addEventListener("click", submitAnswer);

//function to open a file
function openFile(event) {
	var input = event.target;
	
	var reader = new FileReader();
	reader.onload = function(){
		var text = reader.result;
		var lines = text.split(/[\r\n]+/g);
		for(var lnNum=0; lnNum < lines.length -1;lnNum++){
			words = lines[lnNum].split('\t');
			test_words[words[0]] = words[1];
		}
	};
	reader.readAsText(input.files[0]);	
};

function startQuiz(event){
	document.getElementById("word").innerHTML = Object.keys(test_words)[i];
	setTimeout(function(){submitAnswer()},10000); //when using setTimeout(submitAnswer(),10000), it triggers immediatly, why?????
	i++;
};

function submitAnswer(){
	alert("ff");
	if( i >= Object.keys(test_words).length){
		answer = document.getElementById("answer").value;
		answers.push(answer);
		document.getElementById("answer").value = "";
		document.getElementById("word").innerHTML = "Quiz is over!!";
		for(var j=0; j<answers.length; j++){
			if(answers[j]==test_words[Object.keys(test_words)[j]]){
				correct++;
			}
		}
		var score = (correct / Object.keys(test_words).length)*100;
		document.getElementById("score").innerHTML = "Your score is: "+ score;
		return;
	}
	answer = document.getElementById("answer").value;
	answers.push(answer);
	document.getElementById("answer").value = "";
	document.getElementById("word").innerHTML = Object.keys(test_words)[i];
	i++;
};
