var squares=document.querySelectorAll("#squares");
function newcolor(){
	var a=[];
	for(i=0;i<6;i=i+1)
	{
		var r=Math.floor(Math.random()*256);
		var g=Math.floor(Math.random()*256);
		var b=Math.floor(Math.random()*256);
		a.push("rgb(" + r + ", " + g + ", " + b + ")");
	}
	return a;
}
var arr=[];
var changecolor=document.querySelectorAll("span");
var h1=document.querySelector("h1");
function pickedcolor(){
	var j=Math.floor(Math.random()*6);
	var pcolor=arr[j];
	return pcolor;
}
var askedcolor=document.querySelector("span");
changecolor[1].addEventListener("click",function(){
		arr=newcolor();
		askedcolor.textContent=pickedcolor()
		for(i=0;i<6;i=i+1)
		{
		squares[i].style.backgroundColor=arr[i];
		}
		h1.style.backgroundColor="#061c69s";
		changecolor[2].textContent="";
		changecolor[3].textContent="";
	
})
for(i=0;i<6;i=i+1)
{
	squares[i].addEventListener("click",function(){
		if(this.style.backgroundColor===askedcolor.textContent)
		{
			h1.style.backgroundColor=askedcolor.textContent;
			changecolor[2].textContent="You Got It!!";
			changecolor[3].textContent="";	
			for(var j=0;j<6;j=j+1)
			{	
				squares[j].style.backgroundColor=askedcolor.textContent;
			}
		}
		else
		{
			changecolor[3].textContent="Try Again!";
			this.style.backgroundColor="black";
		}
	})
}
