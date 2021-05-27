$(".mountain1").click(function(){
    $(".mountain2").removeClass("active");
    $(".s").removeClass("active");
    $(" .mountain1").addClass("active");
     $(".r").addClass("active");
    
});
$(".mountain2").click(function(){
    $(".mountain1").removeClass("active");
    $(" .r").removeClass("active");
    $(".mountain2").addClass("active");
    $(".s").addClass("active");
    
});




// w3 schools Reference for this perticular section
var acc = document.getElementsByClassName("drop-down");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
