if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

document.addEventListener('DOMContentLoaded', function () {
  var fade = document.querySelector('.main_fade');
  var header = document.querySelector('#header');
  var main_visual = document.querySelector('.main_visual');
 
  window.scrollTo(0, 0);
  header.classList.add('main_show');
  main_visual.classList.add('main_show');
  fade.classList.add('main_show');
  setTimeout(function () {
    main_visual.classList.remove('main_show');
    main_visual.classList.remove('main_ready');
  }, 2800);
});
window.addEventListener('load', function () {
  window.scrollTo(0, 0);
});


document.addEventListener("DOMContentLoaded", function () {
  var mainVisual = document.querySelector(".splide.main_visual");
  if (mainVisual) {
    var mvSplide = new Splide(mainVisual, {
      type: "fade",
      rewind: true,
      speed: 1200,
      autoplay: true,
      interval: 6000,
      pauseOnHover: false,
      pauseOnFocus: false,
      arrows: false,
      pagination: false,
    });

    var mvPaging   = mainVisual.querySelector(".splide_controls .paging");
    var mvPrevBtn  = mainVisual.querySelector(".splide_controls .prev");
    var mvNextBtn  = mainVisual.querySelector(".splide_controls .next");
    var mvPauseBtn = mainVisual.querySelector(".splide_controls .pause");
    var mvPlayBtn  = mainVisual.querySelector(".splide_controls .play");

    function mvCreatePaging() {
      if (!mvPaging) return;
      mvPaging.innerHTML = "";

      var slides = mvSplide.Components.Elements.slides;

      slides.forEach(function (_, index) {
        var btn = document.createElement("button");
        btn.type = "button";
        btn.className = "paging_bullet";
        btn.dataset.index = index;
        btn.textContent = index + 1;

        btn.addEventListener("click", function () {
          mvSplide.go(parseInt(this.dataset.index, 10));
        });

        mvPaging.appendChild(btn);
      });
    }

    function mvUpdatePaging(activeIndex) {
      if (!mvPaging) return;
      var bullets = mvPaging.querySelectorAll(".paging_bullet");
      var current = (typeof activeIndex === "number")
        ? activeIndex
        : mvSplide.index;

      bullets.forEach(function (b, i) {
        b.classList.toggle("is_active", i === current);
      });
    }

    mvSplide.on("mounted", function () {
      mvCreatePaging();
      mvUpdatePaging(mvSplide.index);
    });

    mvSplide.on("moved", function (newIndex) {
      mvUpdatePaging(newIndex);
    });

    if (mvPrevBtn) {
      mvPrevBtn.addEventListener("click", function () {
        mvSplide.go("<");
      });
    }

    if (mvNextBtn) {
      mvNextBtn.addEventListener("click", function () {
        mvSplide.go(">");
      });
    }

    if (mvPauseBtn && mvPlayBtn) {
      mvPauseBtn.addEventListener("click", function () {
        var Auto = mvSplide.Components.Autoplay;
        if (Auto) Auto.pause();
        mvPauseBtn.style.display = "none";
        mvPlayBtn.style.display = "inline-block";
      });

      mvPlayBtn.addEventListener("click", function () {
        var Auto = mvSplide.Components.Autoplay;
        if (Auto) Auto.play();
        mvPlayBtn.style.display = "none";
        mvPauseBtn.style.display = "inline-block";
      });
    }

    mvSplide.mount();
  }
});



document.addEventListener("DOMContentLoaded", function () {
  var wrapper = document.querySelector(".main_business_slide");
  if (!wrapper) return;

  var textEl = wrapper.querySelector(".splide.business_slide_text");
  var imgEl  = wrapper.querySelector(".splide.business_slide_image");
  if (!textEl || !imgEl) return;

  var controlsWrap = textEl.querySelector(".splide_controls");
  var pagingEl     = controlsWrap ? controlsWrap.querySelector(".paging") : null;
  var barEl        = pagingEl ? pagingEl.querySelector(".bar") : null;
  var prevBtn      = controlsWrap ? controlsWrap.querySelector(".prev") : null;
  var nextBtn      = controlsWrap ? controlsWrap.querySelector(".next") : null;
  var pauseBtn     = controlsWrap ? controlsWrap.querySelector(".pause") : null;
  var playBtn      = controlsWrap ? controlsWrap.querySelector(".play") : null;
  var numberWrap   = controlsWrap ? controlsWrap.querySelector(".number") : null;
  var currentEl    = numberWrap ? numberWrap.querySelector(".current") : null;
  var totalEl      = numberWrap ? numberWrap.querySelector(".total") : null;

  var BREAKPOINT = 1100;
  var isActive = false;
  var textSplide = null;
  var imgSplide  = null;

  function formatNumber(n) {
    return n < 10 ? "0" + n : String(n);
  }

  function updateNumber() {
    if (!textSplide || !currentEl || !totalEl) return;
    var len = textSplide.length;
    var cur = textSplide.index + 1;
    currentEl.textContent = formatNumber(cur);
    totalEl.textContent   = formatNumber(len);
  }

  function resetProgress() {
    if (!barEl) return;
    barEl.style.transition = "none";
    barEl.style.width = "0%";
    void barEl.offsetWidth;
  }

  function startProgress() {
    if (!textSplide || !barEl) return;
    resetProgress();
    var duration = textSplide.options.interval || 6000;
    barEl.style.transition = "width " + duration + "ms linear";
    barEl.style.width = "100%";
  }

  function pauseProgress() {
    if (!barEl) return;
    var parent = barEl.parentElement;
    if (!parent) return;
    var w = barEl.getBoundingClientRect().width;
    var total = parent.getBoundingClientRect().width || 1;
    var percent = (w / total) * 100;
    barEl.style.transition = "none";
    barEl.style.width = percent + "%";
  }

  function initSplidesPC() {
    if (isActive) return;

    textSplide = new Splide(textEl, {
      type: "fade",
      rewind: true,
      perPage: 1,
      speed: 800,
      autoplay: true,
      interval: 6000,
      waitForTransition: true,
      pauseOnHover: false,
      pauseOnFocus: false,
      arrows: false,
      pagination: false,
    });

    imgSplide = new Splide(imgEl, {
      type: "loop",
      perPage: 1,
      speed: 800,
      gap: "62px",
      arrows: false,
      pagination: false,
      keyboard: false,
      drag: true,
      flickPower: 300,
    });

    var isSyncing = false;

    textSplide.on("move", function (newIndex) {
      if (isSyncing) return;
      isSyncing = true;

      imgSplide.go(newIndex);
      updateNumber();
      startProgress();

      isSyncing = false;
    });

    imgSplide.on("move", function () {
      if (isSyncing) return;
      isSyncing = true;

      var Controller = imgSplide.Components.Controller;
      var realIndex = Controller && Controller.getIndex
        ? Controller.getIndex()
        : imgSplide.index;

      textSplide.go(realIndex);
      updateNumber();
      startProgress();

      isSyncing = false;
    });

    textSplide.on("mounted", function () {
      updateNumber();
      startProgress();
    });

    textSplide.on("autoplay:play", function () {
      startProgress();
    });

    textSplide.on("autoplay:pause", function () {
      pauseProgress();
    });

    textSplide.mount();
    imgSplide.mount();

    isActive = true;
  }

  function destroySplides() {
    if (!isActive) return;

    if (textSplide) {
      textSplide.destroy(true);
      textSplide = null;
    }

    if (imgSplide) {
      imgSplide.destroy(true);
      imgSplide = null;
    }

    // 숫자/바 초기화 (원하면 숨기거나 0 세팅)
    if (currentEl) currentEl.textContent = "";
    if (totalEl) totalEl.textContent = "";
    resetProgress();

    isActive = false;
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", function () {
      if (isActive && textSplide) textSplide.go("<");
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", function () {
      if (isActive && textSplide) textSplide.go(">");
    });
  }

  if (pauseBtn && playBtn) {
    pauseBtn.addEventListener("click", function () {
      if (!isActive || !textSplide) return;
      var Auto = textSplide.Components.Autoplay;
      if (Auto) Auto.pause();
      pauseBtn.style.display = "none";
      playBtn.style.display  = "inline-block";
    });

    playBtn.addEventListener("click", function () {
      if (!isActive || !textSplide) return;
      var Auto = textSplide.Components.Autoplay;
      if (Auto) Auto.play();
      playBtn.style.display  = "none";
      pauseBtn.style.display = "inline-block";
    });
  }

  function checkMode() {
    var w = window.innerWidth;

    if (w > BREAKPOINT) {
      initSplidesPC();
    } else {
      destroySplides();
    }
  }

  window.addEventListener("resize", checkMode);
  checkMode();
});

document.addEventListener("DOMContentLoaded", function () {
  var titles = document.querySelectorAll(".main_section .main_title");
  if (!titles.length) return;

  var revealClass = "scroll_reveal";
  var visibleClass = "is_visible";

  titles.forEach(function (title) {
    title.classList.add(revealClass);
  });

  if (typeof IntersectionObserver === "undefined") {
    titles.forEach(function (title) {
      title.classList.add(visibleClass);
    });
    return;
  }

  var observer = new IntersectionObserver(function (entries, obs) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add(visibleClass);
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.7
  });

  titles.forEach(function (title) {
    observer.observe(title);
  });
});
