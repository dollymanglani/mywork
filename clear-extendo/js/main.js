$(function() {
  // Switch JS
  $(".light-dark-switch-input").change(function() {
    if($(this).prop('checked')) {
      $("body").addClass("active");
    } else {
      $("body").removeClass("active");
    }
  });
});