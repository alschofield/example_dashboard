console.log('connected');

function createHTML (context) {
  $('.element').remove();
  var source = $('#element-template').html();
  var template = Handlebars.compile(source);
  var html = template(context);
  $('body').append(html);
  // $('.iframe-div').addClass('slide-in');
}

function fill(element, color) {
  element.css('background-color', color)
  element.addClass('fill');
}

function createHome () {
  createHTML({is_home: true, header: 'WORLD.', content: 'lipsum orum hadid abud mansla inoto forgu denal bonfudar. menali dos eros kelgaro dun mundusfar. enatio conduslav fortuna umbarisio.', content_2: 'mater forem delos empartionario mant. corus undaserio bearistar gorduner.'})
//   $('.iframe-div').addClass('slide-in');
}

function setColors(background, color) {
  $('.element').css('background-color', background);
  $('body').css('color', color);
  $('i').css('color', color);
  $('.language-button').css('border-color', color);
  $('.language-button').css('color', color);
}

function resetButtons() {
  $('.close-button').off('click');
  $('.back-arrow').off('click');
  $('.twitter-button').off('click');
  $('.linkedin-button').off('click');
  $('.vimeo-button').off('click');
  $('.instagram-button').off('click');
  $('.behance-button').off('click');
  $('.dribbble-button').off('click');

  $('.english').click(function() {
    // translate to english
    $('.english').css('background-color', 'white')
    $('.french').css('background-color', 'transparent')
  });
  $('.french').click(function() {
    $('.french').css('background-color', 'white')
    $('.english').css('background-color', 'transparent')
  });
  $('.close-button').click(function() {
    $('.element').remove();
  });
  $('.back-arrow').click(function() {
    fill($('.back-arrow-primed'), 'white')
    window.setTimeout(createHome, 250);
    window.setTimeout(resetButtons, 250);
    window.setTimeout(setColors, 250, 'white', 'grey');
  });
  $('.twitter-button').click(function() {
    fill($('.twitter-primed'), 'lightskyblue');
    window.setTimeout(createHTML, 250, {Twitter: true, header: 'TWITTER.', content: 'lipsum orum hadid abud mansla inoto forgu denal bonfudar. menali dos eros kelgaro dun mundusfar. enatio conduslav fortuna umbarisio.'})
    window.setTimeout(resetButtons, 250);
    window.setTimeout(setColors, 250, 'lightskyblue', 'white');
    window.setTimeout(function () {
      $('.twitter-button').css('background-color', 'white');
      $('.icon-twitter').css('color', 'lightskyblue');
      $('.twitter-button').off();
    }, 300);
  });
  $('.linkedin-button').click(function() {
    fill($('.linkedin-primed'), 'mediumblue');
    window.setTimeout(createHTML, 250, {LinkedIn: true, header: 'LINKEDIN.', content: 'lipsum orum hadid abud mansla inoto forgu denal bonfudar. menali dos eros kelgaro dun mundusfar. enatio conduslav fortuna umbarisio.'})
    window.setTimeout(resetButtons, 250);
    window.setTimeout(setColors, 250, 'mediumblue', 'white');
    window.setTimeout(function () {
      $('.linkedin-button').css('background-color', 'white');
      $('.icon-linkedin').css('color', 'mediumblue');
      $('.linkedin-button').off();
    }, 300);
  });
  $('.vimeo-button').click(function() {
    fill($('.vimeo-primed'), '#0CB7EB');
    window.setTimeout(createHTML, 250, {Vimeo: true, header: 'VIMEO.', content: 'lipsum orum hadid abud mansla inoto forgu denal bonfudar. menali dos eros kelgaro dun mundusfar. enatio conduslav fortuna umbarisio.'})
    window.setTimeout(resetButtons, 250);
    window.setTimeout(setColors, 250, '#0CB7EB', 'white');
    window.setTimeout(function () {
      $('.vimeo-button').css('background-color', 'white');
      $('.icon-vimeo').css('color', '#0CB7EB');
      $('.vimeo-button').off();
    }, 300);
  });
  $('.instagram-button').click(function() {
    fill($('.instagram-primed'), '#265686');
    window.setTimeout(createHTML, 250, {Instagram: true, header: 'INSTAGRAM.', content: 'lipsum orum hadid abud mansla inoto forgu denal bonfudar. menali dos eros kelgaro dun mundusfar. enatio conduslav fortuna umbarisio.'})
    window.setTimeout(resetButtons, 250);
    window.setTimeout(setColors, 250, ' #265686', 'white');
    window.setTimeout(function () {
      $('.instagram-button').css('background-color', 'white');
      $('.icon-instagram').css('color', '#265686');
      $('.instagram-button').off();
    }, 300);
  });
  $('.behance-button').click(function() {
    fill($('.behance-primed'), '#0072F9');
    window.setTimeout(createHTML, 250, {Behance: true, header: 'BEHANCE.', content: 'lipsum orum hadid abud mansla inoto forgu denal bonfudar. menali dos eros kelgaro dun mundusfar. enatio conduslav fortuna umbarisio.'})
    window.setTimeout(resetButtons, 250);
    window.setTimeout(setColors, 250, '#0072F9', 'white');
    window.setTimeout(function () {
      $('.behance-button').css('background-color', 'white');
      $('.icon-behance').css('color', '#0072F9');
      $('.behance-button').off();
    }, 300);
  });
  $('.dribbble-button').click(function() {
    fill($('.dribbble-primed'), '#E54686');
    window.setTimeout(createHTML, 250, {Dribbble: true, header: 'DRIBBBLE.', content: 'lipsum orum hadid abud mansla inoto forgu denal bonfudar. menali dos eros kelgaro dun mundusfar. enatio conduslav fortuna umbarisio.'})
    window.setTimeout(resetButtons, 250);
    window.setTimeout(setColors, 250, '#E54686', 'white');
    window.setTimeout(function () {
      $('.dribbble-button').css('background-color', 'white');
      $('.icon-dribbble').css('color', '#E54686');
      $('.dribbble-button').off();
    }, 300);
  });
}

$(document).ready(function() {
  createHome();
  resetButtons();
  setColors('white', 'grey');
});