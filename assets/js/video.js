if(typeof window.demo === 'undefined') {
  window.demo = {};
}

window.demo.video = {
  DOM: {
    $playLink: null
  },

  init: function() {
    if($('.video-container a').length > 0) {
      window.demo.video.DOM.$playLink = $('.video-container a');
      window.demo.video.DOM.$playLink.click(window.demo.video.Events.playVimeo);
    }
  },

  Events: {
    playVimeo: function(e) {
      e.preventDefault();
      var $container = $(this).parent(),
          videoUrl = $(this).attr('href'),
          videoId = videoUrl.split('.com/')[1];

      if(videoUrl.indexOf('vimeo') !== -1) {
        // Vimeo video
        videoId = videoId.split('?')[0];
        $container.html('<iframe src="//player.vimeo.com/video/' + videoId + '?autoplay=1" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>');
      } else {
        // YouTube video
        videoId = videoId.split('v=')[1];
        $container.html('<iframe src="//www.youtube.com/embed/' + videoId + '?autoplay=1" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>');
      }
    }
  }
};

$(document).ready(window.demo.video.init);