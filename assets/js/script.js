$(function () {
  // fade out page after link click
  $("body.fade a").click(function (e) {
    e.preventDefault();
    var link = $(this).attr("href");
    $("body.fade").addClass("out");
    setTimeout(function () {
      window.location.href = link;
    }, 1500);
  });

  // fadeee out CURRENT page after link click
  $("body.fadeee a").click(function (e) {
    e.preventDefault();
    var link = $(this).attr("href");
    $("body.fadeee").addClass("out");
    setTimeout(function () {
      window.location.href = link;
    }, 1500);
  });

  // NEW START
  // NEW START
  // NEW START

  // LOW LINKS, SCROLL TO TOP

  $("a.button, a.low-link").click(function () {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // HOME -> CLICK ANYWHERE TO ENTER

  $("a.enter").click(function (e) {
    e.preventDefault();
    $("nav#primary a").removeClass("current");
    $("body.home .content.home").addClass("hidden");
    $("a.enter").fadeOut();
    setTimeout(function () {
      $(".content.hidden.about").removeClass("goodbye");
    }, 500);
    setTimeout(function () {
      $("body.home .content.home").addClass("goodbye");
      $("body").removeClass("home");
      $("body").addClass("about");
      $("nav#primary a.about-link").addClass("current");
    }, 1500);
  });

  // ANY PAGE -> BACK TO HOME

  $("a.home-link").click(function () {
    $("body").removeClass("about");
    $("body").removeClass("method");
    $("body").removeClass("app");
    $("body").removeClass("people");
    $("body").removeClass("transmissions");
    $("body").removeClass("transmission-one");
    $("body").removeClass("transmission-two");
    $("body").removeClass("transmission-three");
    $("body").removeClass("receptions");
    $("body").addClass("home");
    $(".content.about").addClass("hidden");
    $(".content.method").addClass("hidden");
    $(".content.app").addClass("hidden");
    $(".content.people").addClass("hidden");
    $(".content.transmissions").addClass("hidden");
    $(".content.transmission-one").addClass("hidden");
    $(".content.transmission-two").addClass("hidden");
    $(".content.transmission-three").addClass("hidden");
    $(".content.receptions").addClass("hidden");
    // individual transmission --> home
    $("nav#transmissions").removeClass("show");
    $(".content.transmission-one").addClass("hidden");
    $(".content.transmission-two").addClass("hidden");
    $(".content.transmission-three").addClass("hidden");
    setTimeout(function () {
      // $(".content.method").addClass("goodbye");
      $("body.home .content.home").removeClass("goodbye");
      // individual transmission --> home
      $("nav#transmissions").addClass("hide");
      $("nav#primary").show();
      $("figure.pp").show();
    }, 500);
    setTimeout(function () {
      $("body.home .content.home").removeClass("hidden");
      $(".content.about").addClass("goodbye");
      $(".content.method").addClass("goodbye");
      $(".content.app").addClass("goodbye");
      $(".content.people").addClass("goodbye");
      $(".content.transmissions").addClass("goodbye");
      $(".content.transmission-one").addClass("hidden");
      $(".content.transmission-two").addClass("hidden");
      $(".content.transmission-three").addClass("hidden");
      $(".content.receptions").addClass("goodbye");
      $("a.enter").fadeIn();
      // individual transmission --> home
      $("figure.pp").removeClass("hidden");
      $("nav#primary").removeClass("hide");
    }, 1500);
  });

  // ANY PAGE -> ABOUT

  $("a.about-link").click(function (e) {
    e.preventDefault();
    $("body").removeClass("method");
    $("body").removeClass("app");
    $("body").removeClass("people");
    $("body").removeClass("transmissions");
    $("body").removeClass("receptions");
    $(".content.method").addClass("hidden");
    $(".content.app").addClass("hidden");
    $(".content.people").addClass("hidden");
    $(".content.transmissions").addClass("hidden");
    $(".content.receptions").addClass("hidden");
    $("nav#primary a.method-link").removeClass("current");
    $("nav#primary a.app-link").removeClass("current");
    $("nav#primary a.people-link").removeClass("current");
    $("nav#primary a.transmissions-link").removeClass("current");
    $("nav#primary a.receptions-link").removeClass("current");
    $("nav#primary a.about-link").addClass("current");
    setTimeout(function () {
      $(".content.about").addClass("hidden");
      $(".content.about").removeClass("goodbye");
      $(".content.method").addClass("hidden");
      $(".content.method").addClass("goodbye");
      $(".content.app").addClass("hidden");
      $(".content.app").addClass("goodbye");
      $(".content.people").addClass("hidden");
      $(".content.people").addClass("goodbye");
      $(".content.transmissions").addClass("hidden");
      $(".content.transmissions").addClass("goodbye");
      $(".content.receptions").addClass("hidden");
      $(".content.receptions").addClass("goodbye");
    }, 500);
    setTimeout(function () {
      $("body").addClass("about");
      $(".content.about").removeClass("hidden");
    }, 1500);
  });

  // ANY PAGE -> METHOD

  $("a.method-link").click(function (e) {
    e.preventDefault();
    $("body").removeClass("about");
    $("body").removeClass("app");
    $("body").removeClass("people");
    $("body").removeClass("transmissions");
    $("body").removeClass("receptions");
    $(".content.about").addClass("hidden");
    $(".content.app").addClass("hidden");
    $(".content.people").addClass("hidden");
    $(".content.transmissions").addClass("hidden");
    $(".content.receptions").addClass("hidden");
    $("nav#primary a.about-link").removeClass("current");
    $("nav#primary a.app-link").removeClass("current");
    $("nav#primary a.people-link").removeClass("current");
    $("nav#primary a.transmissions-link").removeClass("current");
    $("nav#primary a.receptions-link").removeClass("current");
    $("nav#primary a.method-link").addClass("current");
    setTimeout(function () {
      $(".content.method").addClass("hidden");
      $(".content.method").removeClass("goodbye");
      $(".content.about").addClass("goodbye");
      $(".content.app").addClass("goodbye");
      $(".content.people").addClass("goodbye");
      $(".content.transmissions").addClass("goodbye");
      $(".content.receptions").addClass("goodbye");
    }, 500);
    setTimeout(function () {
      $("body").addClass("method");
      $(".content.method").removeClass("hidden");
    }, 1500);
  });

  // ANY PAGE -> APP

  $("a.app-link").click(function (e) {
    e.preventDefault();
    $("body").removeClass("about");
    $("body").removeClass("method");
    $("body").removeClass("people");
    $("body").removeClass("transmissions");
    $("body").removeClass("receptions");
    $(".content.about").addClass("hidden");
    $(".content.method").addClass("hidden");
    $(".content.people").addClass("hidden");
    $(".content.transmissions").addClass("hidden");
    $(".content.receptions").addClass("hidden");
    $("nav#primary a.about-link").removeClass("current");
    $("nav#primary a.method-link").removeClass("current");
    $("nav#primary a.people-link").removeClass("current");
    $("nav#primary a.transmissions-link").removeClass("current");
    $("nav#primary a.receptions-link").removeClass("current");
    $("nav#primary a.app-link").addClass("current");
    setTimeout(function () {
      $(".content.about").addClass("hidden");
      $(".content.about").addClass("goodbye");
      $(".content.method").addClass("hidden");
      $(".content.method").addClass("goodbye");
      $(".content.people").addClass("hidden");
      $(".content.people").addClass("goodbye");
      $(".content.transmissions").addClass("hidden");
      $(".content.transmissions").addClass("goodbye");
      $(".content.receptions").addClass("hidden");
      $(".content.receptions").addClass("goodbye");
      $(".content.app").removeClass("goodbye");
    }, 500);
    setTimeout(function () {
      $("body").addClass("app");
      $(".content.app").removeClass("hidden");
    }, 1500);
  });

  // ANY PAGE -> PEOPLE

  $("a.people-link").click(function (e) {
    e.preventDefault();
    $("body").removeClass("about");
    $("body").removeClass("method");
    $("body").removeClass("app");
    $("body").removeClass("transmissions");
    $("body").removeClass("receptions");
    $(".content.about").addClass("hidden");
    $(".content.method").addClass("hidden");
    $(".content.app").addClass("hidden");
    $(".content.transmissions").addClass("hidden");
    $(".content.receptions").addClass("hidden");
    $("nav#primary a.about-link").removeClass("current");
    $("nav#primary a.method-link").removeClass("current");
    $("nav#primary a.app-link").removeClass("current");
    $("nav#primary a.transmissions-link").removeClass("current");
    $("nav#primary a.receptions-link").removeClass("current");
    $("nav#primary a.people-link").addClass("current");
    setTimeout(function () {
      $(".content.about").addClass("hidden");
      $(".content.about").addClass("goodbye");
      $(".content.method").addClass("hidden");
      $(".content.method").addClass("goodbye");
      $(".content.app").addClass("hidden");
      $(".content.app").addClass("goodbye");
      $(".content.transmissions").addClass("hidden");
      $(".content.transmissions").addClass("goodbye");
      $(".content.receptions").addClass("hidden");
      $(".content.receptions").addClass("goodbye");
      $(".content.people").removeClass("goodbye");
    }, 500);
    setTimeout(function () {
      $("body").addClass("people");
      $(".content.people").removeClass("hidden");
    }, 1500);
  });

  // ANY PAGE -> TRANSMISSIONS

  $("a.transmissions-link").click(function (e) {
    e.preventDefault();
    $("body").removeClass("about");
    $("body").removeClass("method");
    $("body").removeClass("app");
    $("body").removeClass("people");
    $("body").removeClass("transmission-one");
    $("body").removeClass("transmission-two");
    $("body").removeClass("transmission-three");
    $("body").removeClass("receptions");
    $(".content.about").addClass("hidden");
    $(".content.method").addClass("hidden");
    $(".content.app").addClass("hidden");
    $(".content.people").addClass("hidden");
    $(".content.transmission-one").addClass("hidden");
    $(".content.transmission-two").addClass("hidden");
    $(".content.transmission-three").addClass("hidden");
    $(".content.receptions").addClass("hidden");
    $("nav#primary a.about-link").removeClass("current");
    $("nav#primary a.method-link").removeClass("current");
    $("nav#primary a.app-link").removeClass("current");
    $("nav#primary a.people-link").removeClass("current");
    $("nav#primary a.receptions-link").removeClass("current");
    $("nav#primary a.transmissions-link").addClass("current");
    // individual transmission --> transmissions
    $("nav#transmissions").removeClass("show");
    $(".content.transmission-one").addClass("hidden");
    $(".content.transmission-two").addClass("hidden");
    $(".content.transmission-three").addClass("hidden");
    setTimeout(function () {
      $(".content.about").addClass("hidden");
      $(".content.about").addClass("goodbye");
      $(".content.method").addClass("hidden");
      $(".content.method").addClass("goodbye");
      $(".content.app").addClass("hidden");
      $(".content.app").addClass("goodbye");
      $(".content.people").addClass("hidden");
      $(".content.people").addClass("goodbye");
      $(".content.receptions").addClass("hidden");
      $(".content.receptions").addClass("goodbye");
      $(".content.transmission-one").addClass("hidden");
      $(".content.transmission-one").addClass("goodbye");
      $(".content.transmission-two").addClass("hidden");
      $(".content.transmission-two").addClass("goodbye");
      $(".content.transmission-three").addClass("hidden");
      $(".content.transmission-three").addClass("goodbye");
      $(".content.transmissions").removeClass("goodbye");
      // individual transmission --> transmissions
      $("nav#transmissions").addClass("hide");
      $("nav#primary").show();
      $("figure.pp").show();
    }, 500);
    setTimeout(function () {
      $("body").addClass("transmissions");
      // individual transmission --> transmissions
      $("figure.pp").removeClass("hidden");
      $("nav#primary").removeClass("hide");
    }, 1500);
  });

  // TRANSMISSIONS -> TRANSMISSION 1

  $("a.transmission-one").click(function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    $("body").removeClass("transmissions");
    $(".content.transmissions").addClass("hidden");
    $("nav#primary").addClass("hide");
    $("figure.pp").addClass("hidden");
    setTimeout(function () {
      $("nav#transmissions").removeClass("hide");
      $(".content.transmissions").addClass("hidden");
      $(".content.transmissions").addClass("goodbye");
      $(".content.transmission-one").removeClass("goodbye");
      $("figure.pp").hide();
      $("nav#primary").hide();
    }, 500);
    setTimeout(function () {
      $("body").addClass("transmission-one");
      $(".content.transmission-one").removeClass("hidden");
      $("nav#transmissions").addClass("show");
    }, 1500);
  });

  // TRANSMISSIONS -> TRANSMISSION 2

  $("a.transmission-two").click(function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    $("body").removeClass("transmissions");
    $(".content.transmissions").addClass("hidden");
    $("nav#primary").addClass("hide");
    $("figure.pp").addClass("hidden");
    setTimeout(function () {
      $("nav#transmissions").removeClass("hide");
      $(".content.transmissions").addClass("hidden");
      $(".content.transmissions").addClass("goodbye");
      $(".content.transmission-two").removeClass("goodbye");
      $("figure.pp").hide();
      $("nav#primary").hide();
    }, 500);
    setTimeout(function () {
      $("body").addClass("transmission-two");
      $(".content.transmission-two").removeClass("hidden");
      $("nav#transmissions").addClass("show");
    }, 1500);
  });

  // TRANSMISSIONS -> TRANSMISSION 3

  $("a.transmission-three").click(function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    $("body").removeClass("transmissions");
    $(".content.transmissions").addClass("hidden");
    $("nav#primary").addClass("hide");
    $("figure.pp").addClass("hidden");
    setTimeout(function () {
      $("nav#transmissions").removeClass("hide");
      $(".content.transmissions").addClass("hidden");
      $(".content.transmissions").addClass("goodbye");
      $(".content.transmission-three").removeClass("goodbye");
      $("figure.pp").hide();
      $("nav#primary").hide();
    }, 500);
    setTimeout(function () {
      $("body").addClass("transmission-three");
      $(".content.transmission-three").removeClass("hidden");
      $("nav#transmissions").addClass("show");
    }, 1500);
  });

  // ANY PAGE -> RECEPTIONS

  $("a.receptions-link").click(function (e) {
    e.preventDefault();
    $("body").removeClass("about");
    $("body").removeClass("method");
    $("body").removeClass("app");
    $("body").removeClass("transmissions");
    $("body").removeClass("people");
    $(".content.about").addClass("hidden");
    $(".content.method").addClass("hidden");
    $(".content.app").addClass("hidden");
    $(".content.transmissions").addClass("hidden");
    $(".content.people").addClass("hidden");
    $("nav#primary a.about-link").removeClass("current");
    $("nav#primary a.method-link").removeClass("current");
    $("nav#primary a.app-link").removeClass("current");
    $("nav#primary a.transmissions-link").removeClass("current");
    $("nav#primary a.people-link").removeClass("current");
    $("nav#primary a.receptions-link").addClass("current");
    setTimeout(function () {
      $(".content.about").addClass("hidden");
      $(".content.about").addClass("goodbye");
      $(".content.method").addClass("hidden");
      $(".content.method").addClass("goodbye");
      $(".content.app").addClass("hidden");
      $(".content.app").addClass("goodbye");
      $(".content.transmissions").addClass("hidden");
      $(".content.transmissions").addClass("goodbye");
      $(".content.people").addClass("hidden");
      $(".content.people").addClass("goodbye");
      $(".content.receptions").removeClass("goodbye");
    }, 500);
    setTimeout(function () {
      $("body").addClass("receptions");
      $(".content.receptions").removeClass("hidden");
    }, 1500);
  });

  // ping slideshow

  $(".next").click(function () {
    showNextPing();
    console.log("next ping!!!");
  });

  $(".prev").click(function () {
    showPrevPing();
    console.log("prev ping!!!");
  });

  const pings = document.querySelectorAll(".ping-slideshow div.ping");
  let currentIndex = 0;

  function showPing(index) {
    pings.forEach((ping, i) => {
      ping.classList.toggle("active", i === index);
    });
  }

  function showNextPing() {
    currentIndex = (currentIndex + 1) % pings.length;
    showPing(currentIndex);
  }

  function showPrevPing() {
    currentIndex = (currentIndex - 1 + pings.length) % pings.length;
    showPing(currentIndex);
  }

  showPing(currentIndex);

  // stamp rotator

  const stamps = document.querySelectorAll(".stamp");

  stamps.forEach((stamp) => {
    const randomRotation = Math.random() * 10 - 5; // Generates a random number between -5 and 5
    stamp.style.transform = `rotate(${randomRotation}deg)`;
  });
});
