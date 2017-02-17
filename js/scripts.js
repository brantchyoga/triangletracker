$(document).ready(function() {
  $("form#tri").submit(function(event){
    var side1 = parseFloat($("input#side1").val());
    var side2 = parseFloat($("input#side2").val());
    var side3 = parseFloat($("input#side3").val());
    console.log(side1)
    console.log(side2)
    console.log(side3)
    event.preventDefault();
    if ((side1 === side2) && (side1 === side3)) {
      $("#iso, #correct, #equ, #sca").hide();
      $("#equ").show();
      alert("The sum of the lengths of any two sides of a triangle is less than or equal to the length of the third side");
    } else if ((side1+side2<=side3)||(side1+side3<=side2)||(side2+side3<=side1)) {
      $("#iso, #correct, #equ, #sca").hide();
      $("#correct").show();
    } else if ((side1 === side2) || (side1 === side3) || (side2 === side3)) {
      $("#iso, #correct, #equ, #sca").hide();
      $("#iso").show();
      alert("The sum of the lengths of any two sides of a triangle is less than or equal to the length of the third side");
    } else {
      $("#iso, #correct, #equ, #sca").hide();
      $("#sca").show();
      alert("The sum of the lengths of any two sides of a triangle is less than or equal to the length of the third side");
    }
  });
});
