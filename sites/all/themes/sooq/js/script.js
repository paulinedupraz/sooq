
(function ($) {
    
    
    /**
    * Breadcrumb add string 'in' + remove class inline in main-menu
    */
   
    Drupal.behaviors.general = {
        attach: function(context, settings){
          
            $('#main-menu').removeClass('inline');
            
            $('.field-subcategory').each(function(){
                if($(this).find('.field-content').width()==0){
                    $(this).hide();
                }
            });
            
          
            var subcategory = $('.field-name-field-subcategory');
            if(subcategory.length != 0){
                subcategory.find('.even').append('<span>in</span>');
            }
            
            $('.views-row').each(function(){
                if($('.field-subcategory', this).width() != 0){
                    $('.field-category', this).css('width', 'auto');
                }
            });
            
        }  
    };
    
    
    /**
     * Render Announcement list for mobile
     */
    
    Drupal.behaviors.mobile = {
        attach: function(context, settings){
            $(window).bind('resize', function(){
               
                if($('.range_0').length!=0){
                    $('.views-row').each(function(){
                        var widthImg = 292;
                        var widthContent = $(this).width() - widthImg - 20;
                        if(widthContent > 292){
                            $('.view-announcement').removeClass('clearleft');
                            $(this).find('.title').css('width', widthContent);
                            $(this).find('.created').css('width', widthContent);
                        } else {
                            var offsetTop = $('.title',this).height() + 152 + 21;
                            $(this).css({'padding-top': $('.title',this).height()+20});
                            $('.view-announcement').addClass('clearleft');
                            $(this).find('.title').css({
                                'width': 292,
                                'margin-top': offsetTop*-1,
                                'margin-bottom': offsetTop-$('.title',this).height()
                            });
                            $(this).find('.created').css('width', 292);
                        }
                    });
                }
            });
            $(window).trigger('resize');
        }
    }

    
    /**
    * Show on the map
    */
    
    Drupal.behaviors.showMap = {
        attach: function(context, settings){
            
            var largerView = false;
            
            $('.show-map').click(function(){
                
                if(!largerView){
                    $('.show-map').html('<a href="#" class="show-map">Show the list</a>');
                    
                    $('#sidebar-first').removeClass().addClass('column sidebar grid_8');
                    
                    $('#block-block-4 h2').addClass('hidden');
                    $('#block-block-5').addClass('hidden');
                    $('#block-block-6').addClass('hidden');
                    $('#block-block-7').addClass('hidden');
                
                    $('#content').removeClass().addClass('column grid_4');
                    
                    $('.view-announcement .title').removeClass('grid_3').addClass('grid_4');
                
                    $('.view-announcement .field-media').addClass('hidden');
                    $('.view-announcement .field-category').addClass('hidden');
                    $('.view-announcement .field-subcategory').addClass('hidden');
                    $('.view-announcement .created').addClass('hidden');
                    $('.view-announcement .pager').addClass('hidden');
                    
                    largerView = true;
                
                } else {
                    $('.show-map').html('<a href="#" class="show-map">Show on the map</a>');
                    
                    $('#sidebar-first').removeClass().addClass('column sidebar grid_4');
                
                    $('#block-block-4 h2').removeClass('hidden');
                    $('#block-block-5').removeClass('hidden');
                    $('#block-block-6').removeClass('hidden');
                    $('#block-block-7').removeClass('hidden');
                
                    $('#content').removeClass().addClass('column grid_8');
                    
                    $('.view-announcement .title').removeClass('grid_4').addClass('grid_3');
                
                    $('.view-announcement .field-media').removeClass('hidden');
                    $('.view-announcement .field-category').removeClass('hidden');
                    $('.view-announcement .field-subcategory').removeClass('hidden');
                    $('.view-announcement .created').removeClass('hidden');
                    $('.view-announcement .pager').removeClass('hidden');
                    
                    largerView = false;
                }
                
                return false;
            });
        }  
    };
}(jQuery));