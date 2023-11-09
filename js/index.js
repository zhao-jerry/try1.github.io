// JavaScript Document
	var a=0;
    images = new Array;
	images[0] = new Image();
	images[0].src="images/1.jpg";
	images[1] = new Image();
	images[1].src ="images/2.jpg";
	images[2] = new Image();
	images[2].src = "images/3.jpg";
	
	href=new Array;
		href[0]=new String();
		href[0]="test1.html"
		href[1]=new String();
		href[1]="test2.html"
		href[2]=new String();
		href[2]="test3.html"
		
	var imgnum = images.length-1;
	
	function swapPic(){
		a++;
		if(a>imgnum)a=a%(imgnum+1);
		if(a<0)a=images.length;
        document.randimg.src = images[a].src
		//document.href.href ="www.baidu.com";
		setTimeout('swapPic()',8000);
	}
	
	function skip()
	{
		if(a==0)
		{
			window.location.href="http://www.cnsoftnews.com/news/202006/82498.html";
		}else if(a==1)
		{
			window.location.href="http://www.cnsoftnews.com/news/202006/82497.html";
		}else if(a==2)
		{
			window.location.href="http://www.cnsoftnews.com/news/202006/82498.html";
		}
		
	}

	function nextPicture(){
		a++;
		if(a>imgnum)
			a=a%(imgnum+1);
		document.randimg.src = images[a].src	
	}
	
	function beforePicture(){
		a--;
		if(a<0)
			a=images.length;
		document.randimg.src = images[a].src	
	}

function change()
{
	var obj = document.getElementById("web").value;  //定位id
	window.location.href=obj; 
}



