$(document).ready(function () {

  $("#inspires form").submit(function(event) {

    $("#inspires").hide();
  //
  //   var nameInput = $("input#Name").val();
  //   var whereInput = $("select#Where").val();
  //   var whatInput = $('input[name="whatYouLike"]:checked').val();
  //   var budgetInput = $("select#Budget").val();
  //   var ageInput = $("select#Age").val();
  //
  //
  //   $(".Where").text(whereInput);
  //   $(".What").text(whatInput);
  //   $(".Budget").text(budgetInput);
  //   $(".Age").text(ageInput);
  //
  //   $(".result").show();
  //
  //
  //
  // }); //end of click goBack
  // $("button#confirm").click(function() {
  //   $(".result").hide(function() {

      var nameInput = $("input#Name").val();
      $(".Name").text(nameInput);
      var whereInput = $("select#Where").val();
      var whatInput = $('input[name="whatYouLike"]:checked').val();
      var budgetInput = $("select#Budget").val();
      var ageInput = $("select#Age").val();



      if (ageInput === "Below 18 years"){
        $(".error").show();
      }else if ((whereInput === "1") && (whatInput === "1") &&
      (budgetInput === "1")){
       $(".nature").show();
     }else if ((whereInput === "2") && (whatInput === "2") &&
     (budgetInput === "2")) {
       $(".beach").show();
     }else if ((whereInput === "3") && (whatInput === "3") &&
     (budgetInput === "2")) {
       $(".high_history").show();
     }else if ((whereInput === "3") && (whatInput === "3") &&
     (budgetInput === "3")) {
       $(".history").show();
     }else if ((whereInput === "3") && (whatInput === "3"||"2") && (budgetInput === "1")) {
       alert("Your budget is low!!!")
       $(".error").show();
     }else if ((whereInput === "2") && (whatInput === "2") && (budgetInput === "3")) {
       alert("Your budget is low!!!")
       $(".error").show();
     }else if ((whereInput === "1") && (whatInput === "2") &&
     (budgetInput === "2" || "3")) {
       alert("We cannot provide you any options with combination of nature & Realx and Spa !!!")
       $(".error").show();
     }else if ((whereInput === "1") && (whatInput === "3") &&
     (budgetInput === "2" || "3")) {
       alert("We cannot provide you any options with combination of nature & Musuem, Food and culture !!!")
       $(".error").show();
     }else if ((whereInput === "2") && (whatInput === "1") &&
     (budgetInput === "2" || "3")) {
       alert("We cannot provide you any options with combination of Beach & Adventure !!!")
       $(".error").show();
     }else if ((whereInput === "2") && (whatInput === "3") &&
     (budgetInput === "2" || "3")) {
       alert("We cannot provide you any options with combination of Beach & Musuem, Food and culture !!!")
       $(".error").show();
     }else {
       alert("Incorrect input.")
       $(".error").show();
     }

    // }); //end of hide result

  // }); //end of click confirm

  event.preventDefault();
});  //end of submit function
}); //end of document ready
