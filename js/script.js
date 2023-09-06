$("#closer").click(function(){
    $("#lay-out").hide();
  });
$("#closer").click(function(){
    $("#bar").hide();
  });
$("#closer").click(function(){
    $("#closer").hide();
  });
  $("#opener").click(function(){
    $("#lay-out").show();
  });
$("#opener").click(function(){
    $("#bar").show();
  });
$("#opener").click(function(){
    $("#closer").show();
  });
  $(document).ready(function() {

    function checkWidth() {
       var windowWidth = $(window).width();
       if (windowWidth >= 900) {
           $("#bar").hide();
           $("#closer").hide();
           $("#lay-out").hide();
       }
    }
    checkWidth();
   
    $(window).resize(checkWidth);
   });
   function gettoknowus() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  function MakeMoneywithUs() {
    var x = document.getElementById("myDIV1");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  function PaymentProducts() {
    var x = document.getElementById("myDIV2");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  function LetUsHelpYou() {
    var x = document.getElementById("myDIV3");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }