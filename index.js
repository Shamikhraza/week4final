var names = new Array();
names[0]= "Sam";
names[1]= "John";
names[2]= "Joe";
names[3]= "Kite";
names[4]= "Jackie";
names[5]= "Kyle";
names[6]= "Larry";
names[7]= "Taylor";
names[8]= "Roman";
names[9]= "Joy";

// console.log(names);


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}