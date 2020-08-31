const $ = require('jquery');

console.log("salve1");

$(".hiddenHamb").click(
    function(){
      $(".hiddenMenuResp").fadeIn("slow");

    }
  )

  $(".close").click(
    function(){
      $(".hiddenMenuResp").fadeOut("slow");
    }
  )
