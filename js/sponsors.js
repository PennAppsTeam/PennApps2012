// sponsors go ['name', 'background-color', 'link', 'default-bg-color', 'additonal classes']
var sponsors = [
  ['facebook', '#2B579E', 'http://facebook.com'],
  ['github', 'white', 'http://github.com'],
  ['twitter', 'white', 'http://twitter.com'],
  ['twilio','white', 'http://twilio.com'],
  ['google', 'white', 'http://google.com'],
  ['mongodb', '#3C2919', 'http://mongodb.com'],
  ['a16z', 'white', 'http://a16z.com'],
  ['venmo', 'white', 'http://venmo.com'],
  ['hunch', 'white', 'http://hunch.com'],
  ['microsoft', 'white', 'http://microsoft.com'],
  ['cloudmine', 'white', 'http://cloudmine.me'],
  // ['monetate', 'white', 'http://monetate.com'],
  // ['color', '#93b9b1', 'http://color.com'],
  ['zynga', 'white', 'http://zynga.com'],
  ['tumblr', '#2C4762', 'http://tumblr.com'],
  ['allsponsors', 'white', 'sponsors.html'],
  ['sponsorpennapps', '#B62F2F', 'http://pennapps.com/sponsorship.pdf', '#B62F2F', 'no-opacity']
];
var html = "";
$.each(sponsors, function(index, sponsor) {
  html += "<div "+
    "data-link='"+sponsor[2]+"' "+
    "data-bgcolor='"+sponsor[1]+"' "+
    "data-sponsor='"+sponsor[0]+"' "+
    "data-loadcolor='"+(sponsor[3] || '#515151')+"' "+ //#515151 is the default
    "style='background-image: url(img/"+sponsor[0]+"_white.png)' "+
    "class='sponsor "+sponsor[4]+"'></div>";
});
document.write(html);
$('.sponsor').each(function() {
  $(this).css('background-color', $(this).data('loadcolor'));
});
$('.sponsor').on('click', function() {
  window.open($(this).data('link'));
});
$('.sponsor').on('mouseenter touchstart', function() {
  $(this).css('background-color', $(this).data('bgcolor'));
  $(this).css('background-image', "url(img/"+$(this).data('sponsor')+"_color.png)");
  });
$('.sponsor').on('mouseout touchend', function() {
  $(this).css('background-color', $(this).data('loadcolor'));
  $(this).css('background-image', "url(img/"+$(this).data('sponsor')+"_white.png)");
});
