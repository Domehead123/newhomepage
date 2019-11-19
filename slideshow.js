

$( document ).ready(function() {

var slideNumber = $("#slideNumber").text();

var currentSlide = "#" + slideNumber;

var numberOfSlides = document.getElementsByClassName("mySlidesMain").length;

var numberOfSlidesString = numberOfSlides.toString();

$("#numberOfSlides").text(numberOfSlidesString);


$(".mySlidesMain").css("display", "none");

$(currentSlide).css("display", "flex");



changeSlides();

function changeSlides(){

setTimeout(function(){

   slideNumber = $("#slideNumber").text();
  slideNumber = parseInt(slideNumber, 10);
  hideSlide(currentSlide, slideNumber);
  

  
    if (slideNumber == numberOfSlides)
    {slideNumber = 1;}
    else {slideNumber = slideNumber +1;}
    
    
    showSlide(currentSlide, slideNumber);  
   
   changeSlides();

}, 10000);
}

$("#nextButton").click(function(){
  
   slideNumber = $("#slideNumber").text();
  slideNumber = parseInt(slideNumber, 10);
  hideSlide(currentSlide, slideNumber);
  

  
    if (slideNumber == numberOfSlides)
    {slideNumber = 1;}
    else {slideNumber = slideNumber +1;}
    
    
    showSlide(currentSlide, slideNumber);  
   

  
  
  
  });
  
  
  $("#previousButton").click(function(){
  
 slideNumber = $("#slideNumber").text();
  slideNumber = parseInt(slideNumber, 10);
  
 hideSlide(currentSlide, slideNumber);
  
       if (slideNumber == 1)
    {slideNumber = numberOfSlides;}
    else {slideNumber = slideNumber -1;}
  
   showSlide(currentSlide, slideNumber); 
 
  

  
  });
  
  
 function hideSlide(currentSlide, slideNumber){
 
 ;
  currentSlide = "#" + slideNumber;
  $(currentSlide).css("display", "none");


  }
  
 
   function showSlide(currentSlide, slideNumber){
  currentSlide = "#" + slideNumber;
  
  $(currentSlide).css("display", "flex");
  
  slideNumber =  slideNumber.toString();
  
  $("#slideNumber").text(slideNumber);
  }


});

