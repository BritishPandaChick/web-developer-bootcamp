var link = document.querySelector("a");
link.getAttribute("href"); //www.google.com

//change link attribute
link.setAttribute("href", "www.dogs.com");
//<a href="www.dogs.com">I am a link</a>

//To change the image src
var img = document.querySelector("img");
img.setAttribute("src", "corgi.png"); //<img src="corg.png" >

var img1 = document.getElementsByTagName("img")[0]
img1 //shows img tag for img 1
img1.getAttribute("src"); //shows link in img1 src
img.setAttribute("src", "http://www.thatcutesite.com/uploads/2011/06/cute_corgi_mixes.jpg");
//image is updated
var img2 = document.getElementsByTagName("img")[1]
img2.setAttribute("src", "http://www.thatcutesite.com/uploads/2011/06/cute_corgi_mixes.jpg");

var a = document.querySelector("a");
a.setAttribute("href", "http://www.corgis.com");
a //see new link for href attribute
a.textContent = "LINK TO CORGI.COM"
a //href attribute changed to corgis.com and text content changed
