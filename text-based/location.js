// JavaScript code for the logic
function showLocation() {
	var input = parseInt(document.getElementById('coordinate').value);
	var output = document.getElementById('location');
	console.log(input);
	if (Number.isInteger(input)){
		output.innerHTML = 'AGV is now in ' + input;
	}else{
		output.innerHTML = 'False Input';
	}
	
	
}

function displayTuple() {
    let tupleStr = document.getElementById('tupleInput').value;
    let tuple = JSON.parse(tupleStr);
	var output = document.getElementById('tu');
	if (tuple[0] < 10 && tuple[1]< 10){
		output.innerHTML = "("+ tuple[0] + ","+ tuple[1] + ") is in bound";
	}else{
		output.innerHTML = "AGV out of bound";
	}

}