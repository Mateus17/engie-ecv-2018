/*
Reference: http://jsfiddle.net/BB3JK/47/
*/

var data = [
  {
    renault: {
      zoe: {
        nom: "Zoé",
        image: "./images/zoe.jpg",
        prix: "23 200",
        autonomie: "400",
        capacite: "41",
        puissance: "43",
        prises: "Type 2",
        lien: "https://www.renault.fr/vehicules/vehicules-electriques/zoe.html"
      },
      master: {
        nom: "Master ZE",
        image: "./images/master.jpg",
        prix: "45 700",
        autonomie: "120",
        capacite: "33",
        puissance: "n/a",
        prises: "Type 2",
        lien:
          "https://www.renault.fr/vehicules/vehicules-electriques/master-ze.html"
      }
    },
    nissan: {
      leaf_nouveau: {
        nom: "Leaf 2018",
        image: "./images/leaf.jpg",
        prix: "29 300",
        autonomie: "378",
        capacite: "40",
        puissance: "50",
        prises: "Type 2 CHAdeMO",
        lien: "https://www.nissan.fr/vehicules/neufs/leaf.html"
      }
    },
    tesla: {
      model_3: {
        nom: "Model 3",
        image: "./images/model3.jpg",
        prix: "35 000",
        autonomie: "500",
        capacite: "75",
        puissance: "125",
        prises: "Type 2",
        lien: "https://www.tesla.com/fr_FR/model3"
      }
    }
  }
];

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
    $(this).removeClass("errorActive");

    //console.log("ok");
    /* if (
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
    } */

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

    if (
      $(this)
        .parent()
        .prev()
        .prev()[0] === $("#marque-1")[0]
    ) {
      $("#compare-1").attr("data-brand", $(this).attr("rel"));
    }

    if (
      $(this)
        .parent()
        .prev()
        .prev()[0] === $("#marque-2")[0]
    ) {
      $("#compare-2").attr("data-brand", $(this).attr("rel"));
    }

    if (
      $(this)
        .parent()
        .prev()
        .prev()[0] === $("#modele-1")[0]
    ) {
      $("#compare-1").attr("data-modele", $(this).attr("rel"));
    }

    if (
      $(this)
        .parent()
        .prev()
        .prev()[0] === $("#modele-2")[0]
    ) {
      $("#compare-2").attr("data-modele", $(this).attr("rel"));
    }

    if (
      $(this)
        .parent()
        .prev()
        .prev()[0] === $("#type-1")[0]
    ) {
      $("#compare-1").attr("data-type", $(this).attr("rel"));
    }

    if (
      $(this)
        .parent()
        .prev()
        .prev()[0] === $("#type-2")[0]
    ) {
      $("#compare-2").attr("data-type", $(this).attr("rel"));
    }

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

var errorCompare = {
  "marque-1": null,
  "modele-1": null,
  "type-1": null,
  "marque-2": null,
  "modele-2": null,
  "type-2": null
};

var $image1 = $("#image1");
var $nom1Vehicule1 = $("#nom1 .vehicule-1");
var $nom1Vehicule2 = $("#nom1 .vehicule-2");
var $prix1 = $("#prix1 .col-right");
var $autonomie1 = $("#autonomie1 .col-right");
var $capacite1 = $("#capacite1 .col-right");
var $puissance1 = $("#puissance1 .col-right");
var $priseType1 = $("#priseType1 .col-right");
var $link1 = $(".vs-1 .see-more-link a");

var $image2 = $("#image2");
var $nom2 = $("#nom2");
var $prix2 = $("#prix2 .col-right");
var $autonomie2 = $("#autonomie2 .col-right");
var $capacite2 = $("#capacite2 .col-right");
var $puissance2 = $("#puissance2 .col-right");
var $priseType2 = $("#priseType2 .col-right");
var $link2 = $(".vs-2 .see-more-link a");

function generateContent(marque1, modele1, marque2, modele2) {
  /* Block 1 */
  $image1.attr("src", data[0][marque1][modele1].image);

  $nom1Vehicule1.html(`${marque1} ${data[0][marque1][modele1].nom}`);
  $nom1Vehicule2.html(`${marque2} ${data[0][marque2][modele2].nom}`);
  $prix1.html(`À partir de ${data[0][marque1][modele1].prix} €`);
  $autonomie1.html(`${data[0][marque1][modele1].autonomie} km`);
  $capacite1.html(`${data[0][marque1][modele1].capacite} kWh`);
  $puissance1.html(`${data[0][marque1][modele1].puissance} kW`);
  $priseType1.html(data[0][marque1][modele1].prises);

  $link1.attr("href", data[0][marque1][modele1].lien);

  /* Block 2 */
  $image2.attr("src", data[0][marque2][modele2].image);

  $nom2.html(`${marque2} ${data[0][marque2][modele2].nom}`);
  $prix2.html(`À partir de ${data[0][marque2][modele2].prix} €`);
  $autonomie2.html(`${data[0][marque2][modele2].autonomie} km`);
  $capacite2.html(`${data[0][marque2][modele2].capacite} kWh`);
  $puissance2.html(`${data[0][marque2][modele2].puissance} kW`);
  $priseType2.html(data[0][marque2][modele2].prises);

  $link2.attr("href", data[0][marque2][modele2].lien);
}

$(".compare-run").click(function() {
  errorCompare["marque-1"] = $("#marque-1")[0].value === "hide" ? true : null;
  errorCompare["modele-1"] = $("#modele-1")[0].value === "hide" ? true : null;
  errorCompare["type-1"] = $("#type-1")[0].value === "hide" ? true : null;
  errorCompare["marque-2"] = $("#marque-2")[0].value === "hide" ? true : null;
  errorCompare["modele-2"] = $("#modele-2")[0].value === "hide" ? true : null;
  errorCompare["type-2"] = $("#type-2")[0].value === "hide" ? true : null;

  Object.entries(errorCompare).forEach(([key, value]) => {
    if (value === true) {
      //console.log($(`#${key}`));
      $(`#${key}`)
        .next(".select-styled")
        .addClass("errorActive");

      /* setTimeout(function() {
        $(`#${key}`)
          .next(".select-styled")
          .removeClass("errorActive");
      }, 2500); */
    }
  });

  if (
    $("#compare-1").attr("data-brand") !== "" &&
    $("#compare-1").attr("data-modele") !== "" &&
    $("#compare-2").attr("data-brand") !== "" &&
    $("#compare-2").attr("data-modele") !== "" &&
    $("#compare-1").attr("data-type") !== "" &&
    $("#compare-2").attr("data-type") !== ""
  ) {
    $("main, .details").hide();

    generateContent(
      $("#compare-1").attr("data-brand"),
      $("#compare-1").attr("data-modele"),
      $("#compare-2").attr("data-brand"),
      $("#compare-2").attr("data-modele")
    );
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

    // Reset errorCompare
    errorCompare = {
      marque1: null,
      modele1: null,
      type1: null,
      marque2: null,
      modele2: null,
      type2: null
    };
  }
});

$(".vehicule-1").click(function() {
  $(".vs-1").addClass("active");
});

$(".vehicule-2").click(function() {
  $(".vs-1").removeClass("active");
});
