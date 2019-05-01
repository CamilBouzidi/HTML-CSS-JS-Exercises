var num=0;
	var counterAll=0;
	var counterEven=0;
	var counterOdd=0;
	
	num = Number(prompt("Please enter a number. When you are done, leave the space empty and press \"OK\".",""));
	
	while ((num!="")&&(num!=null)){
		if ((num>0)){
			counterAll++;
			if(num%2==1){
				counterOdd++;
			}
			else if (num%2==0){
				counterEven++;
			}
		}
		num = prompt("Please enter a number. When you are done, leave the space empty and press \"OK\".","");
	}
	if (num==null){
		num=0;
		counterAll=0;
		counterEven=0;
		counterOdd=0;
}
document.getElementById("all").innerHTML = "You have entered: " + counterAll + " valid numbers.";
document.getElementById("odd").innerHTML = "You have entered: " + counterOdd + " odd numbers.";
document.getElementById("even").innerHTML = "You have entered: " + counterEven + " even numbers.";