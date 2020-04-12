function validation(){
	var v=document.gender.value;
	if (v=MALE) {
		document.getElementId('r').innerHTML="Male";
	} else {
	document.getElementId('r').innerHTML="Female";
	}

}