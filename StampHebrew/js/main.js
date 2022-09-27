$(document).ready(function() {

	// Mobile Sidebar Menu JS
  $(".burger-menu").click(function() {
    // Sidebar JS
    $(".fixed-sidebar").addClass("active");
    // Mobile Burger Menu JS
    $(".hamburger-menu").addClass("active");
    // Body JS
    $("body").addClass("active");
    // Blur JS
    $(".bg-blur").addClass("active");
  });
  $(".bg-blur").click(function() {
    // Sidebar JS
    $(".fixed-sidebar").removeClass("active");
    // Mobile Burger Menu JS
    $(".hamburger-menu").removeClass("active");
    // Body JS
    $("body").removeClass("active");
    // Blur JS
    $(this).removeClass("active");
  });

  $(".stamp-slider").slick({
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    infinite:false,
    autoplaySpeed: 2000,
    rtl: true,
    responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false        
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

  ]
});



  // Custom Dropdown Arrow JS
  $(".select-selected").click(function() {
    $(this).addClass("active");
  });
  $(".select-items div").click(function() {
    $(".select-selected").removeClass("active");
  });

  $(".hides").fadeOut();
  $(".active").fadeIn();


  // First Checkbox PopUp JS
  $(".type-series-listing-one > li input[class='series-type-checkbox-input-one']").click(function() {
    $(this).parent().parent().parent().toggleClass("active");
    $(".popularity-selection > li > a > span.number-of-type").addClass("active");
  });
  // Second Checkbox PopUp JS
  $(".type-series-listing-two > li input[class='series-type-checkbox-input-two']").click(function() {
    $(this).parent().parent().parent().toggleClass("active");
    $(".popularity-selection > li > a > span.number-of-shape").addClass("active");
  });
  // Third Checkbox PopUp JS
  $(".type-series-listing-three > li input[class='series-type-checkbox-input-three']").click(function() {
    $(this).parent().parent().parent().toggleClass("active");
    $(".popularity-selection > li > a > span.number-of-bodytype").addClass("active");
  });
  // Fourth Checkbox PopUp JS
  $(".type-series-listing-four > li input[class='series-type-checkbox-input-four']").click(function() {
    $(this).parent().parent().parent().toggleClass("active");
    $(".popularity-selection > li > a > span.number-of-sealtype").addClass("active");
  });
  // Fourth Checkbox PopUp JS
  $(".type-series-listing-five > li input[class='series-type-checkbox-input-five']").click(function() {
    $(this).parent().parent().parent().toggleClass("active");
    $(".popularity-selection > li > a > span.number-of-linetaxtype").addClass("active");
  });
  // Close PopUp JS
  $(".series-type-tsl-close > a, .clear-filter-apply-listing-one > li:last-child > a, .clear-filter-apply-listing-two > li:last-child > a, .clear-filter-apply-listing-three > li:last-child > a, .clear-filter-apply-listing-four > li:last-child > a, .clear-filter-apply-listing-five > li:last-child > a").click(function() {
    $("body").removeClass("active");
    $(".bg-blur").removeClass("active");
    $(".fixed-type-popup-one").removeClass("active");
    $(".fixed-type-popup-two").removeClass("active");
    $(".fixed-type-popup-three").removeClass("active");
    $(".fixed-type-popup-four").removeClass("active");
    $(".fixed-type-popup-five").removeClass("active");
  });
  var incrementTypeMob = 0;
  var incrementShapeMob = 0;
  var incrementBodyTypeMob = 0;
  var incrementSealTypeMob = 0;
  var incrementLineTaxTypeMob = 0;
  // All Button Clear Filter JS
  $("#liRemoveAllMob").click(function() {
    $("input[class='series-type-checkbox-input-one']").prop("checked", false);
    $("input[class='series-type-checkbox-input-two']").prop("checked", false);
    $("input[class='series-type-checkbox-input-three']").prop("checked", false);
    $("input[class='series-type-checkbox-input-four']").prop("checked", false);
    $("input[class='series-type-checkbox-input-five']").prop("checked", false);
    $(".type-series-listing-one > li input[class='series-type-checkbox-input-one']").parent().parent().parent().removeClass("active");
    $(".type-series-listing-two > li input[class='series-type-checkbox-input-two']").parent().parent().parent().removeClass("active");
    $(".type-series-listing-three > li input[class='series-type-checkbox-input-three']").parent().parent().parent().removeClass("active");
    $(".type-series-listing-four > li input[class='series-type-checkbox-input-four']").parent().parent().parent().removeClass("active");
    $(".type-series-listing-five > li input[class='series-type-checkbox-input-five']").parent().parent().parent().removeClass("active");
    $('.number-of-type').text('(0)');
    $('.number-of-shape').text('(0)');
    $('.number-of-bodytype').text('(0)');
    $('.number-of-sealtype').text('(0)');
    $('.number-of-linetaxtype').text('(0)');
    $(".popularity-selection-mob > li > a > span").removeClass("active");
    incrementTypeMob = 0;
    incrementShapeMob = 0;
    incrementBodyTypeMob = 0;
    incrementSealTypeMob = 0;
    incrementLineTaxTypeMob = 0;
  });
  // Number of Series - One Counting JS 
  $('.series-type-checkbox-input-one').on('click', function() { 
    if (this.checked) {
      incrementTypeMob++;                 
    } else {
      incrementTypeMob--;
    }
    $('.number-of-type').html("(" + incrementTypeMob + ")");      

  });
  // Number of Series - Two Counting JS 
  $('.series-type-checkbox-input-two').on('click', function() { 
    if (this.checked) {
      incrementShapeMob++;                 
    } else {
      incrementShapeMob--;
    }
    $('.number-of-shape').html("(" + incrementShapeMob + ")");             
  });
  // Number of Series - Three Counting JS 
  $('.series-type-checkbox-input-three').on('click', function() { 
    if (this.checked) {
      incrementBodyTypeMob++;                 
    } else {
      incrementBodyTypeMob--;
    }
    $('.number-of-bodytype').html("(" + incrementBodyTypeMob + ")");             
  });
  // Number of Series - Four Counting JS 
  $('.series-type-checkbox-input-four').on('click', function() { 
    if (this.checked) {
      incrementSealTypeMob++;                 
    } else {
      incrementSealTypeMob--;
    }
    $('.number-of-sealtype').html("(" + incrementSealTypeMob + ")");             
  });

  // Number of Series - Five Counting JS 
  $('.series-type-checkbox-input-five').on('click', function() { 
    if (this.checked) {
      incrementLineTaxTypeMob++;                 
    } else {
      incrementLineTaxTypeMob--;
    }
    $('.number-of-linetaxtype').html("(" + incrementLineTaxTypeMob + ")");             
  });
  // First PopUp Clear Filter JS
  $(".clear-filter-apply-listing-one > li:first-child > a").click(function() {
    //$('.number-of-type').html(checkboxCheckedType);
    $("input[class='series-type-checkbox-input-one']").prop("checked", false);
    $(".type-series-listing-one > li input[class='series-type-checkbox-input-one']").parent().parent().parent().removeClass("active");
    $('.number-of-type').text('(0)');
    $(".popularity-selection > li > a > span.number-of-type").removeClass("active");
    incrementTypeMob = 0;
  });
  // Second PopUp Clear Filter JS
  $(".clear-filter-apply-listing-two > li:first-child > a").click(function() {
    $("input[class='series-type-checkbox-input-two']").prop("checked", false);
    $(".type-series-listing-two > li input[class='series-type-checkbox-input-two']").parent().parent().parent().removeClass("active");
    $('.number-of-shape').text('(0)');
    $(".popularity-selection > li > a > span.number-of-shape").removeClass("active");
    incrementShapeMob = 0;
  });
  // Third PopUp Clear Filter JS
  $(".clear-filter-apply-listing-three > li:first-child > a").click(function() {
    $("input[class='series-type-checkbox-input-three']").prop("checked", false);
    $(".type-series-listing-three > li input[class='series-type-checkbox-input-three']").parent().parent().parent().removeClass("active");
    // $('.btn-add-bodytype').text();
    $('.number-of-bodytype').text('(0)');
    $(".popularity-selection > li > a > span.btn-add-bodytype").removeClass("active");
    incrementBodyTypeMob = 0;
  });
  // Fourth PopUp Clear Filter JS
  $(".clear-filter-apply-listing-four > li:first-child > a").click(function() {
    $("input[class='series-type-checkbox-input-four']").prop("checked", false);
    $(".type-series-listing-four > li input[class='series-type-checkbox-input-four']").parent().parent().parent().removeClass("active");
    // $('.btn-add-sealtype').text('0');
    $('.number-of-sealtype').text('(0)');
    $(".popularity-selection > li > a > span.btn-add-sealtype").removeClass("active");
    incrementSealTypeMob = 0;
  });
    // Fifth PopUp Clear Filter JS
    $(".clear-filter-apply-listing-five > li:first-child > a").click(function() {
      $("input[class='series-type-checkbox-input-five']").prop("checked", false);
      $(".type-series-listing-five > li input[class='series-type-checkbox-input-five']").parent().parent().parent().removeClass("active");
    // $('.btn-add-linetaxtype').text('0');
    $('.number-of-linetaxtype').text('(0)');
    $(".popularity-selection > li > a > span.btn-add-linetaxtype").removeClass("active");
    incrementLineTaxTypeMob = 0;
  });
  // First Button PopUp Open JS
  $(".wrapper-btn-add-type").click(function() {
    $("body").addClass("active");
    $(".bg-blur").addClass("active");
    $(".fixed-type-popup-one").addClass("active");
  });
  // Second Button PopUp Open JS
  $(".wrapper-btn-add-shape").click(function() {
    $("body").addClass("active");
    $(".bg-blur").addClass("active");
    $(".fixed-type-popup-two").addClass("active");
  });
  // Third Button PopUp Open JS
  $(".wrapper-btn-add-bodytype").click(function() {
    $("body").addClass("active");
    $(".bg-blur").addClass("active");
    $(".fixed-type-popup-three").addClass("active");
  });
  // Fourth Button PopUp Open JS
  $(".wrapper-btn-add-sealtype").click(function() {
    $("body").addClass("active");
    $(".bg-blur").addClass("active");
    $(".fixed-type-popup-four").addClass("active");
  });

    // Fifth Button PopUp Open JS
    $(".wrapper-btn-add-linetaxtype").click(function() {
      $("body").addClass("active");
      $(".bg-blur").addClass("active");
      $(".fixed-type-popup-five").addClass("active");
    });



    function addRemoveLi(e, liText)
    {
      if (e.checked) {
       $("#topBar").append('<li id=' + "li" + e.id + '><a href="#"><i onclick=removeMe(this) class="fas fa-times btn-clear-type"></i><span class="popularity-txt">' + liText + '</span></a></li>');            
       $('#divEmpty').css("display", "none");
     } else {
       $('#li' + e.id).remove();
     }		


     if ( $('ul#topBar li').length > 1 ) {
      $("#liRemoveAll").css("display", "inline-block");
    }	
    else {
      $("#liRemoveAll").css("display", "none");
    }
  }

  $("#liRemoveAll").on('click', function() { 
      //uncheck all checkboxes
      $("#type1").prop("checked", false); 
      $("#type2").prop("checked", false); 
      $("#type3").prop("checked", false); 
      $("#type4").prop("checked", false); 
      $("#type5").prop("checked", false); 
      $("#type6").prop("checked", false); 

      $("#shape1").prop("checked", false); 
      $("#shape2").prop("checked", false); 
      $("#shape3").prop("checked", false); 
      $("#shape4").prop("checked", false); 
      $("#shape5").prop("checked", false); 
      $("#shape6").prop("checked", false);

      $("#bodyType1").prop("checked", false); 
      $("#bodyType2").prop("checked", false); 
      $("#bodyType3").prop("checked", false); 
      $("#bodyType4").prop("checked", false); 
      $("#bodyType5").prop("checked", false); 
      $("#bodyType6").prop("checked", false); 

      $("#sealType1").prop("checked", false); 
      $("#sealType2").prop("checked", false); 
      $("#sealType3").prop("checked", false); 
      $("#sealType4").prop("checked", false);

      $("#lineTextType1").prop("checked", false); 
      $("#lineTextType2").prop("checked", false); 
      $("#lineTextType3").prop("checked", false); 
      $("#lineTextType4").prop("checked", false);

      $('#divEmpty').css("display", "block");

      //remove all li
      $('#topBar li').each(function() {
        if(this.id != "liRemoveAll")
          this.remove();
        else 
          $("#liRemoveAll").css("display", "none");
      });  
    });

  // Number of types Counting JS
  var checkboxCheckedType = 0;
  $("input[class='type-checkbox-input']").on('click', function() { 
    addRemoveLi(this, $(this).next().next().text().trim());	
  });

  // Clear Filter JS ( Desktop )
  $(".btn-clear-type").click(function() {    
    checkboxCheckedType = 0;
    $("input[class='type-checkbox-input']").prop("checked", false);    
    $('.number-of-type').html(checkboxCheckedType);
  });
  
  // Number of Shape Counting JS
  var checkboxCheckedShape = 0;
  $("input[class='shape-checkbox-input']").on('click', function() { 
   addRemoveLi(this, $(this).next().next().text().trim());            
 });

   // Clear Filter JS ( Desktop )
   $(".btn-clear-shape").click(function() {
    checkboxCheckedShape = 0;
    $("input[class='shape-checkbox-input']").prop("checked", false);
    $('.number-of-shape').html(checkboxCheckedShape);
  });

  // Number of bodytype Counting JS
  var checkboxCheckedBody = 0;
  $("input[class='bodytype-checkbox-input']").on('click', function() { 
   addRemoveLi(this, $(this).next().next().text().trim());          
 });

   // Clear Filter JS ( Desktop )
   $(".btn-clear-bodytype").click(function() {
    //alert();
    checkboxCheckedBody = 0;
    $("input[class='bodytype-checkbox-input']").prop("checked", false);
    $('.number-of-bodytype').html(checkboxCheckedBody);
  });



  // Number of sealtype Counting JS
  var checkboxCheckedSealtype = 0;
  $("input[class='sealtype-checkbox-input']").on('click', function() { 
   addRemoveLi(this, $(this).next().next().text().trim());           
 });

  // Clear Filter JS ( Desktop )
  $(".btn-clear-sealtype").click(function() {
    //alert();
    checkboxCheckedSealtype = 0;
    $("input[class='sealtype-checkbox-input']").prop("checked", false);
    $('.number-of-sealtype').html(checkboxCheckedSealtype);
  });


    // Number of linetaxtype Counting JS
    var checkboxCheckedLinetaxtype = 0;
    $("input[class='linetaxtype-checkbox-input']").on('click', function() {    
      addRemoveLi(this, $(this).next().next().text().trim());
    });

  // Clear Filter JS ( Desktop )
  $(".btn-clear-linetaxtype").click(function() {
    //alert();
    checkboxCheckedLinetaxtype = 0;
    $("input[class='linetaxtype-checkbox-input']").prop("checked", false);
    $('.number-of-linetaxtype').html(checkboxCheckedLinetaxtype);
  });

  
});

function removeMe(e)
{
	var id = $(e).closest('li').attr('id');		
	$('#' + id.substring(2)).prop('checked', false);
	$(e).closest('li').remove();

  //check if this is the last one
  if ( $('ul#topBar li').length == 1 ) {
   $("#liRemoveAll").css("display", "none");
   $('#divEmpty').css("display", "block");
 }     
}