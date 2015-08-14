$(function(){
  (function() {
    var hashs = ['#?hash1', '#?hash2', '#?hash3'];
    var toLoadHtml = 'html/' + hashs[0].replace(/#\?/g, '') + '.html';

    //通常
    var hash = window.location.hash;
    changeAjaxPageforHash(hash, hashs);

    // hashChange
    window.onhashchange = function(){
      hash = window.location.hash;
      changeAjaxPageforHash(hash, hashs);
    };

    //click時
    $('.menu .menu-l').click(function(e){
      hash = $(this).children('a').attr('href');
      changeAjaxPageforHash(hash, hashs);
    });

    function changeAjaxPageforHash(hash, hashs){
      if(hash){
        // console.log(hash);
        for ( i_hash of hashs) {
          if(hash === i_hash){
            toLoadHtml = 'html/' + hash.replace(/#\?/g, '') + '.html';
          }
        }
      }
      $.ajax({
        url: toLoadHtml,
        dataType: 'html',
        // chache: true
      })
      .done(function(data) {
        console.log("success");
        $('.wrapper').html(data);
      })
      .fail(function() {
        console.log("error");
        $('.wrapper').html(
          '<p>Error, not Found File.</p>'
        )
        .css('color', red);
      })
    }
  })();
});
