document.querySelectorAll("table"); //show 3 table tags
document.querySelectorAll("tr"); //show NodeList[306]
document.querySelectorAll("tr").length; //306
document.querySelectorAll("tr").length - 5 //301
document.querySelectorAll("tr").length - document.querySelectorAll("table").length; //301
