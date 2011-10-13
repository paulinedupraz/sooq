
/**
 * Change grid's classes
 */

(function ($) {
    Drupal.behaviors.resize = {
        attach: function(context, settings){
            $(window).bind('resize', function(){
                
                
                if($('html.range_1').length == 1){
                    
                    $('#content').removeClass().addClass('column grid_8');
                    $('.sidebar').removeClass().addClass('column sidebar grid_4');
                    $('.view-announcement .field-media').removeClass().addClass('field-media grid_3');
                    $('.view-announcement .title').removeClass().addClass('title grid_3');
                    $('.view-announcement .field-category').removeClass().addClass('field-category grid_3');
                    $('.view-announcement .field-subcategory').removeClass().addClass('field-subcategory grid_3');
                    $('.view-announcement .created').removeClass().addClass('created grid_3');
                   
                ////////// RANGE 2
                } else if($('html.range_2').length == 1){
                    
                    $('#content').removeClass().addClass('column grid_8');
                    $('.sidebar').removeClass().addClass('column sidebar grid_4');
                    $('.view-announcement .field-media').removeClass().addClass('field-media grid_2');
                    $('.view-announcement .title').removeClass().addClass('title grid_4');
                    $('.view-announcement .field-category').removeClass().addClass('field-category grid_4');
                    $('.view-announcement .field-subcategory').removeClass().addClass('field-subcategory grid_4');
                    $('.view-announcement .created').removeClass().addClass('created grid_4');
                    
                    
                ////////// RANGE 3
                } else if($('html.range_3').length == 1){
                    
                    $('#content').removeClass().addClass('column grid_9');
                    $('.sidebar').removeClass().addClass('column sidebar grid_3');
                    $('.view-announcement .field-media').removeClass().addClass('field-media grid_3');
                    
                }
                
            });
            $(window).trigger('resize');
        }
    };
    
    Drupal.behaviors.breadcrumb = {
      attach: function(context, settings){
          var subcategory = $('.field-name-field-subcategory');
         if(subcategory.length != 0){
             subcategory.find('.even').append('<span>in</span>');
         }
      }  
    };
}(jQuery));