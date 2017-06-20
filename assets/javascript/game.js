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

//Initial function 
// 1. to generate a given random number
// 2. to generate random number for 4 crystals
// 3. initial result to 0 and write to it.

function computerReset() {
  	//
  	random = Math.floor(Math.random() * (120 -19) + 19);
  	// console.log('random', random);

	ruby_random = Math.floor(Math.random() * (12 -1) + 1);
	// console.log('random1', ruby_random);
			
	sapphire_random = Math.floor(Math.random() * (12 -1) + 1);
	// console.log('random2', sapphire_random);
				
	topaz_random = Math.floor(Math.random() * (12 -1) + 1);
	// console.log('random3', topaz_random);

	emerald_random = Math.floor(Math.random() * (12 -1) + 1);
	// console.log('random4', emerald_random);	
      
   	
	$("#randomNumber").text(random);  

	result = 0;
	$("#score").html('0');
	
};
//run the initial setup function
computerReset();
//The 4 crystals is waiting for click
$("img").click(function(){
	// console.log($(this));

//if this has class ruby, add the number to result
if ($(this).hasClass('ruby')) {
      result += ruby_random;
      // console.log(this);
      // console.log(result);
  }else if ($(this).hasClass('sapphire')) {
      result += sapphire_random;
      // console.log(this);
  }else if ($(this).hasClass('topaz')) {
      result += topaz_random;
      // console.log(this);
  }else if ($(this).hasClass('emerald')) {
      result += emerald_random;
      // console.log(this);
  }
  // console.log("i am here",result);
  $("#score").html(result);
//If score matches, run intial setup again.
if (result === random) 
	{
	wins++;
	$("#win").html("Wins: " + wins);
	computerReset();
//else if result greater, run initial seutp again.

	} else if (result > random) 
	{
	looses++;
	$("#loss").html("Losses: "+ looses);
	computerReset();
	};


});


});