var take= prompt("Enter Date i.e 10-25-22:")

var dat= new Date(take).getTime();
var live = setInterval( function() {
var now = new Date().getTime();

var bw = dat - now;

var days = Math.floor(bw / (1000*60*60*24));
console.log(days)

var hours = Math.floor((bw % (1000*60*60*24)) / (1000 * 60 * 60));
console.log(hours)

var minutes = Math.floor((bw %   (1000 * 60* 60)) / (1000*60));
console.log(minutes)

var seconds = Math.floor((bw %   (1000 * 60)) / (1000));
console.log(seconds)

document.getElementById("demo").innerHTML = days + "day: " + hours+"hours: "+minutes + "m: "+ seconds+"s"


}, 1000)