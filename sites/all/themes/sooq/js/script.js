

var ADAPT_CONFIG = {
    // Where is your CSS?
    //path: Drupal.settings.basePath + Drupal.settings.sooq['pathToTheme'] + '/css/grid12/',
    path: Drupal.settings.basePath+'sites/all/themes/igniter/css/grid12/',

    // false = Only run once, when page first loads.
    // true = Change on window resize and page tilt.
    dynamic: true,

    // Optional callback... myCallback(i, width)
    // callback: callback,

    // First range entry is the minimum.
    // Last range entry is the maximum.
    // Separate ranges by "to" keyword.
    range: [
    '0px    to 760px  = mobile.css',
    '760px  to 980px  = 720.css',
    '980px  to 1280px = 960.css',
    '1280px to 1600px = 1200.css',
    '1600px to 1920px = 1560.css',
    '1940px to 2540px = 1920.css',
    '2540px           = 2520.css'
    ]
};


/**
 * Show grid
 */

(function($) {
  Drupal.behaviors.alphaDebug = {
    attach: function (context) {
      $('body', context).once('alpha-debug', function () {
        $('.alpha-grid-toggle').click(function() {
          $('body').toggleClass('alpha-grid-debug');
          return false;
        });
      });
    }
  };
})(jQuery);
