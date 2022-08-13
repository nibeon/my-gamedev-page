$(document).ready(function() {
    $('#link-itch').hover(function(){
        var el = $(this);
      el.data('orig', el.attr('src'));
      el.attr('src', el.data('img2'));
    }, function(){
      $(this).attr('src', $(this).data('orig'));
    });
});