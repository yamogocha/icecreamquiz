// var pokemonArray=['pikachu', 'squirtle', 'charmander']
 // console.log(pokemonArray[0].length)
 // console.log(pokemonArray.reverse())
 // console.log(pokemonArray[0].split('').reverse().join(''))
//  console.log(pokemonArray.sort())

// var numArray=[13, 90, 135]

// console.log(numArray.sort())

//  console.log(pokemonArray[1]+' is '+pokemonArray[1].length+' characters')

//  for(var i=0; i<pokemonArray.length; i++){
//  	console.log(pokemonArray[i]+' is '+pokemonArray[i].length+" characters")
//  }

// var str="string"
// console.log(str.length)

// var bool=false
// console.log(bool.length)

// var num=43434
// console.log(num.length)

// var obj={
// 	make:"toyota",
// 	year: 2013,
// 	driver: "Angel"
// }
// console.log(obj.length)

var questions=[
	{
		question:"What is the most popular ice cream flavor? chocolate or vanilla or butter pecan",
		answer:"vanilla",
		correct:"Vanilla ice cream accounts for about 29% of supermarket sales in the United States. Chocolate ranks second, at 8.9%, and butter pecan comes in third, with 5.3%."
	},
	{
		question:"After the United States, what country consumes the most ice cream? Canada or Denmark or New Zealand",
		answer:"New Zealand",
		correct:"New Zealand ranks second in ice cream consumption. Denmark comes in third, while Canada takes seventh place."
	},
	{
		question:"What flavors are usually in Neapolitan ice cream? orange, lemon, and vanilla or vanilla, chocolate, and strawberry or chocolate, caramel, and vanilla",
		answer:"vanilla, chocolate, and strawberry",
		correct:"Neapolitan ice cream is usually made of stripes of vanilla, chocolate, and strawberry."
	},
	{
		question:"Which of these is NOT a Ben & Jerry's ice cream flavor? Urban Jumble or Blondies Are a Swirl's Best Friend or Licorice of Arabia",
		answer:"Licorice of Arabia",
		correct:"Urban Jumble is a mix of Coconut Almond Fudge Chip and New York Super Fudge Chunk. Blondies Are a Swirl's Best Friend uses chocolate ice cream with blond brownies and fudge swirl."
	},
	{
		question:"About how many licks does it take to finish a single-scoop ice cream cone? 50 or 100 or 250",
		answer:"50",
		correct:"It takes about 50 licks to finish a single-scoop ice cream cone."
	},
	{
		question:"Rocky Road ice cream was created after what historical event? the stock market crash of 1929 or U.S. entry into World War II or U.S. entry into the Vietnam War",
		answer:"the stock market crash of 1929",
		correct:"Edy's Grand Ice Cream created Rocky Road after the stock market crash of October 1929. The company's founders hoped the name would give people something to smile about."
	}
]

//display questions
for(i=0; i<questions.length; i++){
	//put side questions in to variable 
	insideQ=questions[i].question
	//assign and display inside quesitons to HTML
	document.getElementById('question'+[i]).innerHTML=insideQ
}

var correct=0
var incorrect=0
function checkResults(){
	for(i=0; i<questions.length; i++){
		var answer=questions[i].answer
		var guess=document.getElementById('answer'+[i]).value
		var question=document.getElementById('question'+[i])
		if(answer===guess){
			question.className='correct'
			correct++
		}else{
			question.className='incorrect'
			incorrect++
		}
	}
	//showing the correct and incorrect numbers
	document.getElementById('correct').textContent = correct
	document.getElementById('incorrect').textContent = incorrect
}


