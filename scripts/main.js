(function(){
  'use strict';
  $(document).ready(function(){

    console.log('Welcome to my code');

    var allPanels = $('.accordion-wrap > .accordion-content').hide();
    $('.checkmark').hide();

    $('.accordion-title').on('click', function(e){
      e.preventDefault();
      var $panel = $(this);
      var $tabValue = $(this).attr('data-tab-value');
      var thisContent = '.' + 'accordion-content' + $tabValue;
      var thisCheckmark = $(this).children("div");
      var thisTitle = $(this).children("h3");
      $(this).addClass('panel-selected');
      var checkmarks = $('.checkmark');
      var headings = $('.accordion-heading');
      var contents = $('.accordion-content');
      var thisCheckmark = $(this).children('div');
      var thisTitle = $(this).children('h3');

      //remove selected tab styling from all
      headings.removeClass('js-accordion-title-selected');

      //Add "selected" class to this panel
      $panel.addClass('panel-selected');
      thisCheckmark.addClass('checkmark-visited');
      $('.checkmark-visited').show();

      //slide up all panels except this one
      allPanels.not('.panel-selected').slideUp();
      // if(!(allPanels.hasClass('panel-selected'))){
      //   allPanels.slideUp();
      // }
        thisCheckmark.css('display', 'none');
        thisTitle.addClass('js-accordion-title-selected');
      $(thisContent).slideDown();
    });

  $('.tooltip').hover(function(){
    //get word position
    var tooltipBox = $('.tooltip-box-wrap');
    var offsetLeft = $(this).offset().left - 85;
    var offsetTop = $(this).offset().top - 135;
    var tooltipVal = $(this).attr('data-tooltip-value');
    var tooltipContentClass = '.tooltip' + tooltipVal + '\-content';
    var tooltipContent = $(tooltipContentClass);

    $('.tooltip-box-wrap').removeClass('hidden');
    tooltipContent.removeClass('hidden');
    tooltipBox.offset({top: offsetTop, left: offsetLeft });
  },
  function(){
    var tooltipVal = $(this).attr('data-tooltip-value');
    var tooltipContentClass = '.tooltip' + tooltipVal + '\-content';
    var tooltipContent = $(tooltipContentClass);
    $('.tooltip-box-wrap').addClass('hidden');
    tooltipContent.addClass('hidden');
  });

//Initial values for show and hide
  $('.tab-content').not('.selected-tab').hide();
  //$('.tab-content .selected-tab').show();

  $('.tabs li').on('click', function(){
    //remove .selected-tab from all tabs
    $('.tabs li').removeClass('selected-tab');
    $('.tab-content').removeClass('selected-tab');
    //add .selected-tab to this li and content
    $(this).addClass('selected-tab');
      var tabValue = $(this).attr('data-tab-value');
      var tabContent = $('.tab-content' + tabValue);
      tabContent.addClass('selected-tab');
      console.log(tabContent);
      tabContent.show();
    //hide those not with .selected-tab
    $('.tab-content').not('.selected-tab').hide();



  });

});
})();
