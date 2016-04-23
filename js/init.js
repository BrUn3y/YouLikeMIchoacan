(function($){
  $(function(){
  	//var options = [ {selector: '.card', offset: 50, callback: 'Materialize.toast("Hola!", 2500 )' } ]; 
    //Materialize.scrollFire(options);
    $(".button-collapse").sideNav();
  	$('.scrollspy').scrollSpy();
  	$('.materialboxed').materialbox();
  	$('.slider').slider({full_width: true});
    $('.parallax').parallax();
  	$('.collapsible').collapsible({accordion : true});
  	$('.fixed-action-btn').openFAB();
  	$('.fixed-action-btn').closeFAB();
    $('ul.tabs').tabs();    

  }); 
})(jQuery); 
