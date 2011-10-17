
(function ($) {
    
    
    /**
    * Change grid's classes
    */
    Drupal.behaviors.resize = {
        attach: function(context, settings){
        /*$(window).bind('resize', function(){
                
                
                if($('html.range_1').length == 1){
                    
                    $('.view-announcement .field-media').removeClass().addClass('field-media grid_3');
                    $('.view-announcement .title').removeClass().addClass('title grid_3');
                    $('.view-announcement .field-category').removeClass().addClass('field-category grid_3');
                    $('.view-announcement .field-subcategory').removeClass().addClass('field-subcategory grid_3');
                    $('.view-announcement .created').removeClass().addClass('created grid_3');
                   
                ////////// RANGE 2
                } else if($('html.range_2').length == 1){
                    
                   /* $('.view-announcement .field-media').removeClass().addClass('field-media grid_2');
                    $('.view-announcement .title').removeClass().addClass('title grid_4');
                    $('.view-announcement .field-category').removeClass().addClass('field-category grid_4');
                    $('.view-announcement .field-subcategory').removeClass().addClass('field-subcategory grid_4');
                    $('.view-announcement .created').removeClass().addClass('created grid_4');*/
                    
                    
        ////////// RANGE 3
        /* } else if($('html.range_3').length == 1){
                    
                    $('.view-announcement .field-media').removeClass().addClass('field-media grid_3');
                    $('.view-announcement .field-media').removeClass().addClass('field-media grid_3');
                    $('.view-announcement .title').removeClass().addClass('title grid_3');
                    $('.view-announcement .field-category').removeClass().addClass('field-category grid_3');
                    $('.view-announcement .field-subcategory').removeClass().addClass('field-subcategory grid_3');
                    $('.view-announcement .created').removeClass().addClass('created grid_3');
                }
                
                });
            $(window).trigger('resize');*/
        }
    };
    
    
    /**
    * Breadcrumb add string 'in' + remove class inline in main-menu
    */
   
    Drupal.behaviors.general = {
        attach: function(context, settings){
          
            $('#main-menu').removeClass('inline');
          
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
                $('.views-row').each(function(){
                        $(this).css('padding-top', '0');
                        $('.title',this).css({
                            'margin-top': '6px', 
                            'margin-bottom': '15px'
                        });
                    });
                if($('.range_0').length!=0){
                    $('.views-row').each(function(){
                        var offsetTop = $('.title',this).height() + 152 + 21;
                        $(this).css({'padding-top': $('.title',this).height()+20});
                        $('.title',this).css({
                            'margin-top': offsetTop*-1, 
                            'margin-bottom': offsetTop-$('.title',this).height()
                        });
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
                
                    $('#sidebar-first').removeClass().addClass('column sidebar grid_8');
                
                    $('#block-block-5').addClass('hidden');
                    $('#block-block-6').addClass('hidden');
                    $('#block-block-7').addClass('hidden');
                
                    $('#content').removeClass().addClass('column grid_4');
                    
                    $('.view-announcement .title').removeClass('grid_3').addClass('grid_4');
                
                    $('.view-announcement .field-media').addClass('hidden');
                    $('.view-announcement .field-price').addClass('hidden');
                    $('.view-announcement .field-category').addClass('hidden');
                    $('.view-announcement .field-subcategory').addClass('hidden');
                    $('.view-announcement .created').addClass('hidden');
                    $('.view-announcement .pager').addClass('hidden');
                    
                    largerView = true;
                
                } else {
                    $('#sidebar-first').removeClass().addClass('column sidebar grid_4');
                
                    $('#block-block-5').removeClass('hidden');
                    $('#block-block-6').removeClass('hidden');
                    $('#block-block-7').removeClass('hidden');
                
                    $('#content').removeClass().addClass('column grid_8');
                    
                    $('.view-announcement .title').removeClass('grid_4').addClass('grid_3');
                
                    $('.view-announcement .field-media').removeClass('hidden');
                    $('.view-announcement .field-price').removeClass('hidden');
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