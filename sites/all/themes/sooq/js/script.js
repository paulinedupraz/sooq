
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
   
    Drupal.behaviors.breadcrumb = {
        attach: function(context, settings){
          
            $('#main-menu').removeClass('inline');
          
            var subcategory = $('.field-name-field-subcategory');
            if(subcategory.length != 0){
                subcategory.find('.even').append('<span>in</span>');
            }
        }  
    };
    
    /**
    * Show on the map
    */
    
    Drupal.behaviors.showMap = {
        attach: function(context, settings){
            
            var largerView = false;
            
            $('.show-map').click(function(){
                
                if(!largerView){
                
                    $('#sidebar-first').removeClass().addClass('column sidebar grid_8');
                
                    $('#block-block-5').hide();
                    $('#block-block-6').hide();
                    $('#block-block-7').hide();
                
                    $('#content').removeClass().addClass('column grid_4');
                
                    $('#content .field-media').hide();
                    $('#content .field-price').hide();
                    $('#content .field-category').hide();
                    $('#content .field-subcategory').hide();
                    $('#content .created').hide();
                    
                    largerView = true;
                
                } else {
                    $('#sidebar-first').removeClass().addClass('column sidebar grid_4');
                
                    $('#block-block-5').show();
                    $('#block-block-6').show();
                    $('#block-block-7').show();
                
                    $('#content').removeClass().addClass('column grid_8');
                
                    $('#content .field-media').show();
                    $('#content .field-price').show();
                    $('#content .field-category').show();
                    $('#content .field-subcategory').show();
                    $('#content .created').show();
                    
                    largerView = false;
                }
                
                return false;
            });
        }  
    };
}(jQuery));