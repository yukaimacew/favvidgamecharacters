(function ($) {
  

  $(window).on('load hashchange', function(){
    
    // First hide all content regions, then show the content-region specified in the URL hash 
    $('.content-region').hide();
    
    // Remove any active classes on the main-menu
    $('.main-menu a').removeClass('active');
    var region = location.hash.toString() || $('.main-menu a:first').attr('href');
    var bkimg = region.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '');
    console.log(bkimg);

    
    // Now show the region specified in the URL hash
    $(region).show();

    if(bkimg = "mirage"){
      document.body.style.backgroundImage = "url('mirage.jpg')";
    } else if (bkimg = "soraka){
      document.body.style.backgroundImage = "url('soraka.jpg')";
    } else if (bkimg = "bidoof){
      document.body.style.backgroundImage = "url('bidoof.jpg')";
    } 
               
    // Highlight the menu link associated with this region by adding the .active CSS class
    $('.main-menu a[href="'+ region +'"]').addClass('active'); 
  });
  
})(jQuery);
