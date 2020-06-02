function myShow() {
			document.getElementById("lf").style.visibility="visible";
	document.getElementById("lf").style.opacity="1";
}
function vForm() {
	var x = document.forms["lfrom"]["uname"].value;
	var y = document.forms["lfrom"]["pwd"].value;
	if (x == ""){
		documetn.getElementByClassName("buttont3").disabled=true;
		return false;
	}
	
	if (y == ""){
		documetn.getElementByClassName("buttont3").disabled=true;
		return false;
		
	}
}
function CBtn() {
			document.getElementById("lf").style.visibility="none";
	document.getElementById("lf").style.opacity="0";
}

function rBtn() {
	document.getElementById("rcontainer").style.visibility="visible";
	document.getElementById("rcontainer").style.opacity="1"
}
function cBtn2() {
	document.getElementById("rcontainer").style.visibility="hidden";
	document.getElementById("rcontainer").style.opacity="0"

}
function Dropdwn() {
 document.getElementById("dropdwn").style.visibility="visible";
 document.getElementById("dropdwn").style.opacity="1"
}
function Dropdwn2() {
document.getElementById("dropdwn").style.visibility="hidden";
document.getElementById("dropdwn").style.opacity="0"
}
function speedConverter(valNum) {
	valNum = parseFloat(valNum);
	document.getElementById("inputM").value = valNum * 0.621371192;
}