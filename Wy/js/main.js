$(document).ready(function() {
	// Burger Menu JS
	$(".sub-menu-listing").slideUp();
	$(".burger-menu").click(function() {
		$(this).toggleClass("active");
		$(".navigation-menu").slideToggle(700);
    $("body").toggleClass("overflow-hidden");
    $(".bg-blur").toggleClass("active");
	});
	$(".menu-listing > li:nth-child(5) > a").click(function() {
		$(this).parent().parent().toggleClass("active");
		$(".sub-menu-listing").slideToggle();
	});
	// Search JS
	$(".menu-listing > li:nth-child(6) > a").click(function() {
		$(".header-search-field").toggleClass("active");
	});
	// Category View Tab JS
	$(".hides").fadeOut();
  	$(".active").fadeIn();
	$(".category-view-tab-listing > li").click(function() {
		$(".category-view-tab-listing > li").removeClass("active");
		$(this).addClass("active");
		//for each tab content box
    if($(this).attr("id") == "category-view-tab-one")
    {
      $("#category-view-tab-one-content-box").addClass("active").siblings().removeClass("active");
    }
    else if($(this).attr("id") == "category-view-tab-two")
    {
      $("#category-view-tab-two-content-box").addClass("active").siblings().removeClass("active");
    }
    else if($(this).attr("id") == "category-view-tab-three")
    {
      $("#category-view-tab-three-content-box").addClass("active").siblings().removeClass("active");
    }
    else if($(this).attr("id") == "category-view-tab-four")
    {
      $("#category-view-tab-four-content-box").addClass("active").siblings().removeClass("active");
    }
	});
	$(".category-view-tab-listing").on("click", "li", function() {
		var tabsId = $(this).attr("id");
		$(this).addClass("active").siblings().removeClass("active");
    	$("#" + tabsId + "-content-box").fadeIn().siblings().fadeOut();
	});
	// Product View Tab JS
	$(".product-view-tab-listing > li").click(function() {
		$(".product-view-tab-listing > li").removeClass("active");
		$(this).addClass("active");
		//for each tab content box
	    if($(this).attr("id") == "product-view-tab-one")
	    {
	      $("#product-view-tab-one-content-box").addClass("active").siblings().removeClass("active");
	    }
	    else if($(this).attr("id") == "product-view-tab-two")
	    {
	      $("#product-view-tab-two-content-box").addClass("active").siblings().removeClass("active");
	    }
	    else if($(this).attr("id") == "product-view-tab-three")
	    {
	      $("#product-view-tab-three-content-box").addClass("active").siblings().removeClass("active");
	    }
	    else if($(this).attr("id") == "product-view-tab-four")
	    {
	      $("#product-view-tab-four-content-box").addClass("active").siblings().removeClass("active");
	    }
	    else if($(this).attr("id") == "product-view-tab-five")
	    {
	      $("#product-view-tab-five-content-box").addClass("active").siblings().removeClass("active");
	    }
	});
	$(".product-view-tab-listing").on("click", "li", function() {
		var tabsId = $(this).attr("id");
		$(this).addClass("active").siblings().removeClass("active");
    	$("#" + tabsId + "-content-box").fadeIn().siblings().fadeOut();
	});
	// Profile Page JS
	$(".btn-edit-profile").click(function() {
		$(".profile-details-heading").hide();
		$(".edit-profile-details-heading").show();
		$(".account-view-listing > i:nth-child(6)").show();
		$(".account-view-listing > a:nth-child(7)").show();
	});
	$(".edit-profile-cs > li:first-child > a").click(function() {
		$(".profile-details-heading").show();
		$(".edit-profile-details-heading").hide();
		$(".account-view-listing > i:nth-child(6)").hide();
		$(".account-view-listing > a:nth-child(7)").hide();
	});
	// Orders and Returns Page Tab JS
	$(".orders-returns-view-tab-listing > li").click(function() {
		$(".orders-returns-view-tab-listing > li").removeClass("active");
		$(this).addClass("active");
	});
	$(".orders-returns-view-tab-listing").on("click", "li", function() {
		var tabsId = $(this).attr("id");
		$(this).addClass("active").siblings().removeClass("active");
    	$("#" + tabsId + "-content-box").fadeIn().siblings().fadeOut();
	});
	// Favourites Page Tab JS
	$(".favourites-view-tab-listing > li").click(function() {
		$(".favourites-view-tab-listing > li").removeClass("active");
		$(this).addClass("active");
	});
	$(".favourites-view-tab-listing").on("click", "li", function() {
		var tabsId = $(this).attr("id");
		$(this).addClass("active").siblings().removeClass("active");
    	$("#" + tabsId + "-content-box").fadeIn().siblings().fadeOut();
	});
	// Saved Card JS
	$(".box-add-new-card-button > a").click(function() {
		$(".box-saved-cards-details").hide();
		$(".box-add-card-form").show();
	});
	$(".edit-add-new-card-cs > li:first-child > a").click(function() {
		$(".box-add-card-form").hide();
		$(".box-saved-cards-details").show();
	});
	// Saved Address JS
	$(".box-add-new-address-button > a").click(function() {
		$(".box-saved-address-details").hide();
		$(".box-add-address-form").show();
	})
	$(".edit-add-new-address-cs > li:first-child > a").click(function() {
		$(".box-add-address-form").hide();
		$(".box-saved-address-details").show();
	});
	// Cart Page JS
	$(".cart-tab-listing > li").click(function() {
		$(".cart-tab-listing > li").removeClass("active");
		$(this).addClass("active");
	});
	$(".cart-tab-listing").on("click", "li", function() {
		var tabsId = $(this).attr("id");
		$(this).addClass("active").siblings().removeClass("active");
    	$("#" + tabsId + "-content-box").fadeIn().siblings().fadeOut();
	});
	$(".box-cart-addresses").click(function() {
		$(".box-cart-addresses").removeClass("active");
		$(this).addClass("active");
	});
	$(".select-payment-card-listing > li").click(function() {
		$(".select-payment-card-listing > li").removeClass("active");
		$(this).addClass("active");
	});
	$(".select-payment-card-listing").on("click", "li", function() {
		var tabsId = $(this).attr("id");
		$(this).addClass("active").siblings().removeClass("active");
    	$("#" + tabsId + "-content-box").fadeIn().siblings().fadeOut();
	});
});