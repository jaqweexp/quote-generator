/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/



var quotes = [
	{
		quote: "Believe you can and you're halfway there.",
		source: "Theodore Roosevelt",
		year: 1903,
		tags: "politics"


	},
	{
		quote: "To live is the rarest thing in the world. Most people exist, that is all",
		source: "Oscar Wilde",
		tags: "literary"
	},
	{
		quote: "Live as if you were to die tomorrow. Learn as if you were to live forever",
		source: "Mahatma Gandhi"
	},
	{
		quote: "Without music, life would be a mistake.",
		source: "Friedrich Nietzsche",
		citation: "Twilight of the Idols",
		year: 1932,
		tags: "philosophy"
	},
	{
		quote: "Life is what happens to us while we are making other plans.",
		source: "Allen Saunders"
	},
	{
		quote: "I have not failed. I've just found 10,000 ways that won't work.",
		source: "Thomas A. Edison"
	},
	{
		quote: "I may not have gone where I intended to go, but I think I have ended up where I needed to be.",
		source: "Douglas Adams"
	},
	{
		quote: "Outside of a dog, a book is man's best friend. Inside of a dog it's too dark to read.",
		source: "Groucho Marx",
		year: 1952
	},
	{
		quote: "I am enough of an artist to draw freely upon my imagination. Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.",
		source: "Albert Einstein",
		citation: "In his Lab"
	},
	{
		quote: "It is never too late to be what you might have been.",
		source: "George Eliot"
	}

]

//change background color

var R;
var G;
var B;
var newRGB;

function changeBackground(){
	R = Math.floor(Math.random() * 299);
	G = Math.floor(Math.random() * 299);
	B = Math.floor(Math.random() * 299);
	newRGB = R + ',' + G + ',' + B;
	document.body.style.background = 'rgb(' + newRGB + ')';
}

/***
 * `getRandomQuote` function
***/
//get a random number from length of quotes
//


var randomNum;
var chosenQuote;

function getRandomQuote (){
	randomNum = Math.floor(Math.random()*quotes.length);
	chosenQuote = quotes[randomNum];
}



/***
 * `printQuote` function
***/
function printQuote (){

	getRandomQuote();
	quoteAndsourcehtml = '<p class="quote">' + chosenQuote.quote + '</p><p class="source">' + chosenQuote.source;

	if (chosenQuote.citation == null && chosenQuote.year == null && chosenQuote.tags == null){
		quoteAndsourcehtml +=  '</p>';

	}else if(chosenQuote.citation == null && chosenQuote.year == null && chosenQuote.tags !==null){
		quoteAndsourcehtml += '<span class="tags">' + chosenQuote.tags + '</span></p>';

	}else if (chosenQuote.citation == null && chosenQuote.year !== null && chosenQuote.tags == null){
		quoteAndsourcehtml += '<span class="year">' + chosenQuote.year + '</span></p>';

	}else if (chosenQuote.citation == null && chosenQuote.year !== null && chosenQuote.tags !== null){
		quoteAndsourcehtml += '<span class="year">' + chosenQuote.year + '</span><span class = "tags">' + chosenQuote.tags + '</span></p>';

	}else if (chosenQuote.citation !== null && chosenQuote.year == null && chosenQuote.tags == null){
		quoteAndsourcehtml += '<span class="citation">' + chosenQuote.citation + '</span></p>';

	}else if (chosenQuote.citation !== null && chosenQuote.year == null && chosenQuote.tags !== null){
		quoteAndsourcehtml += '<span class="citation">' + chosenQuote.citation + '</span><span class = "tags">' + chosenQuote.tags + '</span></p>';

	}else{
	quoteAndsourcehtml += '<span class="citation">' + chosenQuote.citation + '</span><span class="year">' + chosenQuote.year + '</span></p>';
	}	

//no year, yes tags
	

	document.getElementById('quote-box').innerHTML = quoteAndsourcehtml;
	changeBackground();

} //close function
	



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);

/* quote refresh on interval, sourced from:
 https://stackoverflow.com/questions/4515944/how-to-click-a-browser-button-with-javascript-automatically*/

setInterval(
	function () {
		document.getElementById("load-quote").click();}
		, 3000);


