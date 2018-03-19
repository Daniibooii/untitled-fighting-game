//  This function will cycle through the gifs inside of the carousel and set each image source to a still image.  After setting all of the GIFs to a still image, the GIF that was clicked is set to an animated image.
  animateGifs: function () {
      $(".gif").on('click', function () {
          console.log("id = " + $(this).attr('id'));
          for (i = 0; i < 10; i++) {
              $(".gif-" + i).attr('src', GifTastic.stillGifs[i]);
          };
          //  Using the ID of the image to correspond to the associated index within the animatedGifs array.
          $(this).attr('src', GifTastic.animatedGifs[$(this).attr('id')]);
      });
  },
};
