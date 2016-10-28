//Arrays
// var array = new Array();
// array[0] = "Dario";
// array[1] = 2;
// array[2] = function (name) {
// 	console.log("Hello " + name);
// };
// array[3] = {course: "HTML, CSS & JS"};

// console.log(array);

// console.log(array[1])

// array[2](array[0]);

// console.log(array[3].course);

// short hand array cretion
// var names = [

// 	"Dario", 
// 	"Carlo", 
// 	"Pippo"
// ];

// names[100] = "Topolino";

// for(var i = 0; i< names.length; i++){
// 	console.log("Hello " + names[i]);
// };

var names2 = ["qui", "quo", "qua"];

// var myobj = {
// 	name: "pippo",
// 	course: "HTML, CSS & JS",
// 	platform: "coursera"
// };

// for(var prop in myobj) {
// 	console.log(prop + ": " + myobj[prop]);
// };

for(var name in names2){
	console.log("Hello " + names2[name]);
};

names2.greeting = "Hi";

for(var name in names2){
	console.log("Hello " + names2[name]);
};