const html     = document.querySelector('html');
const nav     = document.querySelector('#nav');
const navBtn  = document.querySelector('#nav_all_button');
const navWrap = document.querySelector('#nav_all_wrap');
let inTabScroll = false;

if (nav && navBtn && navWrap) {
  const getSubmenus = () => nav.querySelectorAll(':scope > li > ul');

  const updateNavBgHeight = () => {
    const submenus = getSubmenus();
    let maxHeight = 0;
    submenus.forEach(ul => {
      const h = ul.scrollHeight; 
      if (h > maxHeight) maxHeight = h;
    });
    nav.style.setProperty('--nav-after-height', `${maxHeight}px`);
  };
  let rAF = null;
  const onResize = () => {
    if (rAF) cancelAnimationFrame(rAF);
    rAF = requestAnimationFrame(updateNavBgHeight);
  };
  window.addEventListener('resize', onResize);
  requestAnimationFrame(updateNavBgHeight);

  nav.addEventListener('mouseenter', () => {
    nav.classList.add('is-open');
  });
  nav.addEventListener('mouseleave', () => {
    nav.classList.remove('is-open');
  });

  navBtn.addEventListener('click', () => {
    navBtn.classList.toggle('close');
    navWrap.classList.toggle('show');
    html.classList.toggle('menu_all_open');
    if (!navWrap.classList.contains('show')) {
      document.querySelectorAll('#nav_all_wrap > ul > li.active').forEach(li => {
        li.classList.remove('active');
        const sub = li.querySelector('ul');
        if (sub) {
          sub.style.height = '0';
          sub.style.padding = '0';
          sub.style.visibility = 'hidden';
        }
      });
    }
  });

}


function initMobileNav() {
 const navItems = document.querySelectorAll('#nav_all_wrap > ul > li > a');

  navItems.forEach(a => {
    a.addEventListener('click', e => {
      if (window.innerWidth <= 1100) {
        e.preventDefault();
        const li = a.parentElement;
        const sub = li.querySelector('ul');

        if (li.classList.contains('active')) {
          li.classList.remove('active');
          sub.style.height = sub.scrollHeight + 'px';
          requestAnimationFrame(() => {
            sub.style.height = '0';
          });
          sub.addEventListener(
            'transitionend',
            () => {
              if (!li.classList.contains('active')) sub.style.visibility = 'hidden';
            },
            { once: true }
          );
        } else {
          document
            .querySelectorAll('#nav_all_wrap > ul > li.active')
            .forEach(activeLi => {
              const activeSub = activeLi.querySelector('ul');
              activeLi.classList.remove('active');
              activeSub.style.height = '0';
              activeSub.style.padding = '0';
              activeSub.style.visibility = 'hidden';
            });

          li.classList.add('active');
          sub.style.visibility = 'visible';
          sub.style.height = 'auto';
          const fullHeight = sub.scrollHeight + 'px';
          sub.style.height = '0';
          requestAnimationFrame(() => {
            sub.style.height = fullHeight;
          });

          sub.addEventListener(
            'transitionend',
            () => {
              if (li.classList.contains('active')) {
                sub.style.height = 'auto';
              }
            },
            { once: true }
          );
        }
      }
    });
  });
}
initMobileNav();



document.addEventListener('DOMContentLoaded', function () {
  var btn  = document.getElementById('to_top');
  var wrap = document.getElementById('to_top_wrap');
  if (!btn || !wrap) return;

  function onScroll() {
    var scrollY = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollY > 150) {
      btn.classList.add('is-show');
    } else {
      btn.classList.remove('is-show');
    }

    var wrapRect   = wrap.getBoundingClientRect();
    var wrapTop    = wrapRect.top + scrollY;
    var btnHeight  = btn.offsetHeight || 65;
    var bottomGap  = 100;
    var viewportH  = window.innerHeight;

    var btnBottomPos = scrollY + viewportH - bottomGap; 
    var limitLine    = wrapTop + btnHeight;

    if (btnBottomPos >= limitLine) {
      wrap.classList.add('is-bottom');
    } else {
      wrap.classList.remove('is-bottom');
    }
  }

  window.addEventListener('scroll', onScroll);
  onScroll();

  btn.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});


document.addEventListener("DOMContentLoaded", function () {
  var layout = document.getElementById("layout");
  var header = document.getElementById("header");
  if (!header) return;

  setTimeout(() => {
    header.style.transitionDelay = '0s';
  }, 1500);

  var lastScrollY = window.pageYOffset || document.documentElement.scrollTop;
  var HIDE_OFFSET = 5;

  var isHeaderHovered = false;

  header.addEventListener('mouseenter', function () {
    isHeaderHovered = true;
    header.style.top = '0';
  });

  header.addEventListener('mouseleave', function () {
    isHeaderHovered = false;
  });

  function getHideTop() {
    return (window.innerWidth > 1100) ? -100 : -73;
  }

  let isHiding = false;

  header.addEventListener('transitionend', (e) => {
    if (e.propertyName !== 'top') return;
    if (!isHiding) return;
    header.classList.remove('bg');
    isHiding = false;
  });

  function onScroll() {
    if (inTabScroll) return;
    var currentY = window.pageYOffset || document.documentElement.scrollTop;
    if (!isHeaderHovered && currentY > lastScrollY && currentY > HIDE_OFFSET) {
      isHiding = true;
      header.style.top = getHideTop() + 'px';
      layout.classList.remove('header_visible');
    }
    else {
      isHiding = false;
      header.style.top = '0';
      if (currentY > 0) {
        header.classList.add('bg');
        layout.classList.add('header_visible');
      } else {
        header.classList.remove('bg');
        layout.classList.remove('header_visible');
      }
    }
    lastScrollY = currentY;
  }


  function onResize() {
    var currentY = window.pageYOffset || document.documentElement.scrollTop;
    var hideTop  = getHideTop();

    if (header.style.top !== '' && header.style.top !== '0px') {
      if (!isHeaderHovered && currentY > HIDE_OFFSET) {
        header.style.top = hideTop + 'px';
        if(hideTop === 0){
          layout.classList.add('header_visible');
        }
      } else {
        header.style.top = '0';
      }
    }
  }

  window.addEventListener('scroll', onScroll);
  window.addEventListener('resize', onResize);
});


//스크롤 fade
document.addEventListener("DOMContentLoaded", function () {
  var reveals = document.querySelectorAll(".scroll_reveal");
  if (!reveals.length) return;

  var visibleClass = "is_visible";
  if (typeof IntersectionObserver === "undefined") {
    reveals.forEach(function (reveal) {
      reveal.classList.add(visibleClass);
    });
    return;
  }

  var revealCenterObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add(visibleClass);
      }
    });
  }, {
    rootMargin: '-20% 0px',
    threshold: 0
  });

  var revealAnyObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add(visibleClass);
      }
    });
  }, {
    rootMargin: '0px',
    threshold: 0
  });

  var resetObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) {
        entry.target.classList.remove(visibleClass);
      }
    });
  }, {
    rootMargin: '0px',
    threshold: 0
  });

  reveals.forEach(function (reveal) {
    if (reveal.classList.contains('show_center')) {
      revealCenterObserver.observe(reveal);
    } else {
      revealAnyObserver.observe(reveal);
    }
    
    if (!reveal.classList.contains('reveal_once')) {
      resetObserver.observe(reveal);
    }
  });
});


//tab btns sticky
const stickyEl = document.querySelector('.sticky_btns');
const sentinel = document.querySelector('.sticky_sentinel');
if(stickyEl && sentinel){
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (!entry.isIntersecting && entry.boundingClientRect.top < 0) {
        stickyEl.classList.add('is_sticky');
      } else {
        stickyEl.classList.remove('is_sticky');
      }
    },
    { threshold: [0] }
  );
  observer.observe(sentinel);
}
// 모바일탭 nav
document.addEventListener('DOMContentLoaded', () => {
  const mobileTabNav = document.querySelector('.mobile_tab_nav');
  if (!mobileTabNav) return;

  const items = mobileTabNav.querySelectorAll('.item');

  items.forEach(item => {
    const btn = item.querySelector(':scope > a');
    const submenu = item.querySelector(':scope > ul');

    if (!btn || !submenu) return;

    btn.addEventListener('click', (e) => {
      e.preventDefault();

      const isOpen = btn.classList.contains('active');

      items.forEach(other => {
        const otherBtn = other.querySelector(':scope > a');
        const otherUl = other.querySelector(':scope > ul');
        if (otherBtn) otherBtn.classList.remove('active');
        if (otherUl) otherUl.classList.remove('show');
      });

      if (!isOpen) {
        btn.classList.add('active');
        submenu.classList.add('show');
      }
    });
  });

  document.addEventListener('click', (e) => {
    if (mobileTabNav.contains(e.target)) return;
    items.forEach(item => {
      const btn = item.querySelector(':scope > a');
      const submenu = item.querySelector(':scope > ul');
      if (btn) btn.classList.remove('active');
      if (submenu) submenu.classList.remove('show');
    });
  });
});




document.addEventListener("DOMContentLoaded", () => {
  const pcNav = document.querySelector(".tab_wrap_nav.pc");
  const mobileNav = document.querySelector(".tab_wrap_nav_mobile");
  const mobileBtn = mobileNav?.querySelector(":scope > a");
  const mobileList = mobileNav?.querySelector(":scope > ul");
  const mobileItems = mobileList?.querySelectorAll("li > a");
  const pcItems = pcNav?.querySelectorAll(".item > button");
  const contents = document.querySelectorAll(".tab_content");

  if (!pcNav || !mobileNav) return;
  function activateTab(index) {
    pcItems.forEach((btn, i) => {
      btn.classList.toggle("active", i === index);
    });
    mobileItems.forEach((a, i) => {
      a.classList.toggle("active", i === index);
    });
    const activeText = mobileItems[index].textContent.trim();
    mobileBtn.querySelector("span").textContent = activeText;

    contents.forEach((con, i) => {
      con.style.display = i === index ? "block" : "none";
    });
  }

  activateTab(0);

  pcItems.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      activateTab(index);
    });
  });

  mobileBtn.addEventListener("click", (e) => {
    e.preventDefault();
    mobileNav.classList.toggle("active");
  });

  mobileItems.forEach((item, index) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      activateTab(index);
      mobileNav.classList.remove("active");
    });
  });
  document.addEventListener("click", (e) => {
    if (!mobileNav.contains(e.target)) {
      mobileNav.classList.remove("active");
    }
  });
});
