
app.controller('homeController', ['$scope', '$rootScope', '$http', homeController]);

function homeController($scope, $rootScope, $http){
  $.stellar({
      //responsive: true,
      //horizontalOffset: 0,
      //verticalOffset: 0,
      horizontalScrolling: false,
      parallaxBackgrounds: true,
      //verticalOffset: 0,
      //responsive: true
  });

  if (jQuery('.tp-banner').length) {
    jQuery('.tp-banner').show().revolution(
      {
        dottedOverlay: "none",
        delay: 6000,
        startwidth: 1170,
        startheight: 900,
        maxheight:600,

        navigationType: "bullet",
        navigationArrows: "none",
        navigationStyle: "round",

        touchenabled: "on",
        onHoverStop: "off",

        parallax: "scroll",
        parallaxBgFreeze: "on",
        parallaxLevels: [10, 7, 4, 3, 2, 5, 4, 3, 2, 1],
        parallaxDisableOnMobile: "on",

        swipe_velocity: 0.7,
        swipe_min_touches: 1,
        swipe_max_touches: 1,
        drag_block_vertical: false,


        keyboardNavigation: "on",

        navigationHAlign: "center",
        navigationVAlign: "bottom",
        navigationHOffset: 0,
        navigationVOffset: 20,

        shadow: 0,
        fullWidth: "on",
        fullScreen: "on",

        stopLoop: "off",
        stopAfterLoops: -1,
        stopAtSlide: -1,

        shuffle: "off",

        autoHeight: "off",
        forceFullWidth: "off",


        hideThumbsOnMobile: "off",
        hideNavDelayOnMobile: 1500,
        hideBulletsOnMobile: "off",
        hideArrowsOnMobile: "off",
        hideThumbsUnderResolution: 0,

        hideSliderAtLimit: 0,
        hideCaptionAtLimit: 0,
        hideAllCaptionAtLimit: 0,
        startWithSlide: 0
      });
    }

  }
