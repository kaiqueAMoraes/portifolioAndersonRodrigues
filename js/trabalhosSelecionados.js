$(function() {

  var div = document.querySelectorAll(".redirecionaAlbumPagina");
  for (var i = 0; i < div.length; i++){

    div[i].addEventListener("click", function() {

      location.href="albumSelecionado.php";
    });
  }

  $.scrollify({
      section : ".sectionAlbum",
      sectionName : "section",
      interstitialSection : "",
      easing: "easeOutExpo",
      scrollSpeed: 1100,
      offset : 0,
      scrollbars: true,
      standardScrollElements: "",
      setHeights: true,
      overflowScroll: true,
      updateHash: true,
      touchScroll:true,
      before:function() {},
      after:function() {},
      afterResize:function() {},
      afterRender:function() {}
    });

    ScrollReveal().reveal('.sectionAlbum', {
    delay: 800,
    duration: 500,
    reset: true
});
});
