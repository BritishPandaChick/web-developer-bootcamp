$("h1") //shows h1 tag
$("h1").addClass("correct") //adds correct class to h1
$("h1").removeClass("correct") //removes correct class from h1

$("li") //shows 3 li tags
$("li").addClass("wrong"); //adds wrong class to li tags
$("li").removeClass("wrong"); //rmoves wrong class from li tags
$("li").addClass("correct"); //add correct clas to li tags

$("li").toggleClass("correct"); //remove correct class
$("li").toggleClass("correct"); //add correct class
$("li").first().toggleClass("done"); //puts strikethrough on first li
$("li").toggleClass("done"); //toggles each class individually. First removes strike through while second and third li add strike throughs
