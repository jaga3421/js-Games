$(document).ready(function(){

	var hit = 'X',
	counter = 0,
	i=0,j=0;
	playerOne= new Array(),
	playerTwo= new Array();

	winCom = [
		[0,1,2],
		[3,4,5],
		[6,7,8],
		[0,3,6],
		[1,4,7],
		[2,5,8],
		[0,4,8],
		[2,4,6]
	];

	$('section#game > div').click(function(){

		if(($(this).children().html()==''))
		{
			$(this).children().html(hit); //Writing the X or O and changin for next hit
			(hit=='X')?hit='O':hit='X';
			$('section#players > div').toggleClass('inactive'); //For showing the player
			counter++;

			outcome = ($(this).index());
			(counter%2==0)?playerTwo[i++]=outcome:playerOne[j++]=outcome;
			if(counter>=5) 
			{
				(counter%2==0)?player=playerTwo:player=playerOne;
				len = player.length;
				for(k=0;k<winCom.length;k++)
				{
					if(isSubset(winCom[k],player))
					{
						(counter%2==0)?alert("Player 2 Wins"):alert("Player 1 Wins");
						playerOne = new Array();
						playerTwo = new Array();
						reset();
						counter = 0;
						break;
					}
				}
			}
		}
	$('#clear').click(function(){
		reset();
		hit = 'X';
		counter = 0;
		playerOne = new Array();
		playerTwo = new Array();
	})

	});

});

function reset() {
	$('section#game > div > span').empty();
	if($('.playerOne').hasClass('inactive')) 
	{
		$('section#players > div').toggleClass('inactive');
	}
}



function isSubset(winCom,player){
	match=0;
	sublength = winCom.length;
	suplength = player.length;

	for(i=0;i<suplength;i++)
	{
		for(j=0;j<sublength;j++)
		{
			if(winCom[j]==player[i])
				match++;
		}		

	}
	if(match==3)
		return true; 
	else
		return false;
}
