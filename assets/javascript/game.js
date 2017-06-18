$(document).ready(function(){

//create needed global variables

var wins = 0;
var looses = 0;
var result = 0;
var random =0;
var ruby_random=0;
var sapphire_random=0;
var topaz_random =0;
var emerald_random=0;

function computerReset() {
  	//
  	random = Math.floor(Math.random() * (120 -19) + 19);
  	console.log('random', random);

	ruby_random = Math.floor(Math.random() * (12 -1) + 1);
	console.log('random1', ruby_random);
			
	sapphire_random = Math.floor(Math.random() * (12 -1) + 1);
	console.log('random2', sapphire_random);
				
	topaz_random = Math.floor(Math.random() * (12 -1) + 1);
	console.log('random3', topaz_random);

	emerald_random = Math.floor(Math.random() * (12 -1) + 1);
	console.log('random4', emerald_random);	
       // ... we generate a random number
   	
	$("#randomNumber").text(random);  

	result = 0;
	$("#score").html('0');
	
};

computerReset();

$("img").click(function(){
	// console.log($(this));

if ($(this).hasClass('ruby')) {
      result += ruby_random;
      // console.log(result);
  }else if ($(this).hasClass('sapphire')) {
      result += sapphire_random;
  }else if ($(this).hasClass('topaz')) {
      result += topaz_random;
  }else if ($(this).hasClass('emerald')) {
      result += emerald_random;
  }
  console.log("i am here",result);
  $("#score").html(result);

if (result === random) 
{
	wins++;
	$("#win").html("Wins: " + wins);
	// result = 0;
	// computerGenerate();
	computerReset();
} else if (result > random) 
{
	looses++;
	$("#loss").html("Loosses: "+ looses);
	computerReset();
};


});


});