const container = document.querySelector(".containers");
const edu = document.querySelector(".edu");
let pos = 0;
let current = null;

function limit(pos, begin, end) {
  if (pos <= begin) {
    pos = begin;
  } else if (pos >= end) {
    pos = end;
  } else {
    pos = pos;
  }
  return pos;
}

function show() {
  console.log("on");
  $(".nav_page").css({
    display: "flex",
  });
  $("nav .overlay").css({
    display: "inline-block",
  });
  $("nav .overlay").animate(
    {
      opacity: 0.7,
    },
    500
  );
  $(".containers").css({
    filter: "blur(10px)",
  });
}

function hide() {
  console.log("off");
  $(".nav_page").css({
    display: "none",
  });
  $("nav .overlay").animate(
    {
      opacity: 0,
    },
    500
  );
  $("nav .overlay").css({
    display: "none",
  });
  $(".containers").css({
    filter: "blur(0px)",
  });
  $(".toggler").prop("checked", false);
}

$(document).ready(function () {
  // Mouse Horaizontal Scroll
  $(document).bind("mousewheel", function (e) {
    me = e.originalEvent.wheelDelta / 120;
    // container.scrollLeft -= 100;
    begin = 0;
    end = container.clientWidth;
    console.log(end);
    pos -= me * 100;
    console.log(pos);
    pos = limit(pos, begin, end * 3);
    $(".containers").animate(
      {
        scrollLeft: pos,
      },
      50
    );
  });

  // toggler
  $(".toggler").on("click", function () {
    if ($(".toggler:checked").val() == "on") {
      show();
    } else {
      hide();
    }
  });
  $(".nav_link a").on("click", function () {
    hide();
    current = this.hash;
    current = document.querySelector(current).offsetLeft;
    $(".containers").animate(
      {
        scrollLeft: current,
      },
      800
    );
  });
});
