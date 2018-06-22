/*
Reference: http://jsfiddle.net/BB3JK/47/
*/

$("select").each(function() {
  var $this = $(this),
    numberOfOptions = $(this).children("option").length;

  $this.addClass("select-hidden");
  $this.wrap('<div class="select"></div>');
  $this.after('<div class="select-styled"></div>');

  var $styledSelect = $this.next("div.select-styled");
  $styledSelect.text(
    $this
      .children("option")
      .eq(0)
      .text()
  );

  var $list = $("<ul />", {
    class: "select-options"
  }).insertAfter($styledSelect);

  for (var i = 0; i < numberOfOptions; i++) {
    $("<li />", {
      text: $this
        .children("option")
        .eq(i)
        .text(),
      rel: $this
        .children("option")
        .eq(i)
        .val()
    }).appendTo($list);
  }

  var $listItems = $list.children("li");

  $styledSelect.click(function(e) {
    e.stopPropagation();
    console.log("ok");
    if (
      $(this).prev()[0] !== $("#modele-1")[0] &&
      $(this).prev()[0] !== $("#modele-2")[0]
    ) {
      if (
        $(this)
          .parent()
          .prev()
          .children(".select-hidden")[0].value === "hide"
      ) {
        console.log(
          $(this)
            .parent()
            .prev()
            .children(".select-hidden")[0].value
        );
        e.preventDefault();
        return;
      }
    }

    //console.log($(this).prev() === $("#modele-1") ? "ok" : "nok");
    $("div.select-styled.active")
      .not(this)
      .each(function() {
        $(this)
          .removeClass("active")
          .next("ul.select-options")
          .hide();
        $(this)
          .parent(".select")
          .removeClass("zindex");
      });
    $(this)
      .toggleClass("active")
      .next("ul.select-options")
      .toggle();
    $(this)
      .parent(".select")
      .toggleClass("zindex");
  });

  $listItems.click(function(e) {
    e.stopPropagation();
    $styledSelect.text($(this).text()).removeClass("active");
    $this.val($(this).attr("rel"));
    $list.hide();
    $(this)
      .parent()
      .parent(".select")
      .removeClass("zindex");
  });

  $(document).click(function() {
    $styledSelect.removeClass("active");
    $styledSelect.parent(".select").removeClass("zindex");
    $list.hide();
  });
});

window.sr = ScrollReveal({ reset: true });
sr.reveal(".offer", { distance: "50px" }, 100);
sr.reveal(".vs", { distance: "50px" });
sr.reveal(".select", { distance: "20px" }, 50);
sr.reveal(".versus");
sr.reveal(".main-header .intro", {}, 100);
sr.reveal("h1");
sr.reveal(".button-versus");
sr.reveal(".versus-see-more");

$(".compare-run").click(function() {
  $(this).addClass("load-compare");
  setTimeout(function() {
    $("main, .details").show();
    $(".compare-run").removeClass("load-compare");
    $("html, body").animate(
      {
        scrollTop: $("main").offset().top
      },
      750
    );
  }, 2500);
});

$(".vehicule-1").click(function() {
  $(".vs-1").addClass("active");
});

$(".vehicule-2").click(function() {
  $(".vs-1").removeClass("active");
});
