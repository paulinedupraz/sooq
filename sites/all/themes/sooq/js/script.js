
/**
 * Change grid's classes
 */

(function ($) {
    Drupal.behaviors.open_sankore_system = {
        attach: function(context, settings){
            $(window).bind('resize', function(){
                
                var sidebar = $('.sidebar').attr('class');
                    sidebar = sidebar.split(' ');
                    
                var announcementMedia = $('.view-announcement .field-media').attr('class');
                    announcementMedia = announcementMedia.split(' ');
                    
                  ////////// RANGE 1
                if($('html.range_1').length == 1){
                    
                    $('#content').removeClass().addClass('grid_8');
                    
                    for(var i in sidebar){
                        if(sidebar[i].substr(0, 5) == 'grid_'){
                            $('.sidebar').removeClass(sidebar[i]).addClass('grid_4');
                        }
                    }
                    
                    for(var j in announcementMedia){
                        if(announcementMedia[j].substr(0, 5) == 'grid_'){
                            $('.view-announcement .field-media').removeClass(announcementMedia[j]).addClass('grid_2');
                        }
                    }
                    
                   
                  ////////// RANGE 2
                } else if($('html.range_2').length == 1){
                    
                    $('#content').removeClass().addClass('grid_8');
                    
                    for(var i in sidebar){
                        if(sidebar[i].substr(0, 5) == 'grid_'){
                            $('.sidebar').removeClass(sidebar[i]).addClass('grid_4');
                        }
                    }
                    
                    for(var j in announcementMedia){
                        if(announcementMedia[j].substr(0, 5) == 'grid_'){
                            $('.view-announcement .field-media').removeClass(announcementMedia[j]).addClass('grid_2');
                        }
                    }
                    
                    
                  ////////// RANGE 3
                } else if($('html.range_3').length == 1){
                    
                    $('#content').removeClass().addClass('grid_9');
                    
                    for(var i in sidebar){
                        if(sidebar[i].substr(0, 5) == 'grid_'){
                            $('.sidebar').removeClass(sidebar[i]).addClass('grid_3');
                        }   
                    }
                    
                    for(var j in announcementMedia){
                        if(announcementMedia[j].substr(0, 5) == 'grid_'){
                            $('.view-announcement .field-media').removeClass(announcementMedia[j]).addClass('grid_3');
                        }
                    }
                }
                
            });
            $(window).trigger('resize');
        }
    };
}(jQuery));