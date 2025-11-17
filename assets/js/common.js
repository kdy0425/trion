const html     = document.querySelector('html');
const nav     = document.querySelector('#nav');
const navBtn  = document.querySelector('#nav_all_button');
const navWrap = document.querySelector('#nav_all_wrap');

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
  var header = document.getElementById("header");
  if (!header) return;

  setTimeout(() => {
    header.style.transitionDelay = '0s';
  }, 1500);

  var lastScrollY = window.pageYOffset || document.documentElement.scrollTop;
  var HIDE_OFFSET = 5;

  function getHideTop() {
    return (window.innerWidth > 1100) ? -100 : -73;
  }

  function onScroll() {
    var currentY = window.pageYOffset || document.documentElement.scrollTop;

    if (currentY > lastScrollY && currentY > HIDE_OFFSET) {
      header.style.top = getHideTop() + 'px';
      header.classList.remove('bg');
    } 
    else {
      header.style.top = '0';

      if (currentY > 0) { 
        header.classList.add('bg');
      } else {
        header.classList.remove('bg');
      }
    }

    lastScrollY = currentY;
  }

  function onResize() {
    var currentY = window.pageYOffset || document.documentElement.scrollTop;
    var hideTop  = getHideTop();

    if (header.style.top !== '' && header.style.top !== '0px') {
      if (currentY > HIDE_OFFSET) {
        header.style.top = hideTop + 'px';
      } else {
        header.style.top = '0';
      }
    }
  }

  window.addEventListener('scroll', onScroll);
  window.addEventListener('resize', onResize);
});
