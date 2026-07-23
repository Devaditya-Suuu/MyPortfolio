import { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
const ArrowIcon = ({ className = '' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M7 17L17 7" />
    <path d="M7 7h10v10" />
  </svg>
);

const CardNav = ({
  logo,
  logoAlt = 'Logo',
  items,
  className = '',
  ease = 'power3.out',
  baseColor = '#fff',
  menuColor,
  buttonBgColor,
  buttonTextColor
}) => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const navRef = useRef(null);
  const cardsRef = useRef([]);
  const tlRef = useRef(null);

  const calculateHeight = () => {
    const navEl = navRef.current;
    if (!navEl) return 320;

    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (isMobile) {
      const contentEl = navEl.querySelector('.card-nav-content');
      if (contentEl) {
        const wasVisible = contentEl.style.visibility;
        const wasPointerEvents = contentEl.style.pointerEvents;
        const wasPosition = contentEl.style.position;
        const wasHeight = contentEl.style.height;

        contentEl.style.visibility = 'visible';
        contentEl.style.pointerEvents = 'auto';
        contentEl.style.position = 'static';
        contentEl.style.height = 'auto';

        contentEl.offsetHeight;

        const topBar = 64;
        const padding = 24;
        const contentHeight = contentEl.scrollHeight;

        contentEl.style.visibility = wasVisible;
        contentEl.style.pointerEvents = wasPointerEvents;
        contentEl.style.position = wasPosition;
        contentEl.style.height = wasHeight;

        return topBar + contentHeight + padding;
      }
    }
    return 320;
  };

  const createTimeline = () => {
    const navEl = navRef.current;
    if (!navEl) return null;

    gsap.set(navEl, { height: 64, overflow: 'hidden' });
    gsap.set(cardsRef.current, { y: 50, opacity: 0 });

    const tl = gsap.timeline({ paused: true });

    tl.to(navEl, {
      height: calculateHeight,
      duration: 0.4,
      ease
    });

    tl.to(cardsRef.current, { y: 0, opacity: 1, duration: 0.4, ease, stagger: 0.08 }, '-=0.1');

    return tl;
  };

  useLayoutEffect(() => {
    const tl = createTimeline();
    tlRef.current = tl;

    return () => {
      tl?.kill();
      tlRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ease, items]);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (!tlRef.current) return;

      if (isExpanded) {
        const newHeight = calculateHeight();
        gsap.set(navRef.current, { height: newHeight });

        tlRef.current.kill();
        const newTl = createTimeline();
        if (newTl) {
          newTl.progress(1);
          tlRef.current = newTl;
        }
      } else {
        tlRef.current.kill();
        const newTl = createTimeline();
        if (newTl) {
          tlRef.current = newTl;
        }
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isExpanded]);

  const toggleMenu = () => {
    const tl = tlRef.current;
    if (!tl) return;
    if (!isExpanded) {
      setIsHamburgerOpen(true);
      setIsExpanded(true);
      tl.play(0);
    } else {
      setIsHamburgerOpen(false);
      tl.eventCallback('onReverseComplete', () => setIsExpanded(false));
      tl.reverse();
    }
  };

  const setCardRef = i => el => {
    if (el) cardsRef.current[i] = el;
  };


  const handleResumeView = () => {
    // window.open("./resume.pdf", "_blank")
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Devaditya_Borah_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <div
      className={`card-nav-container absolute left-1/2 -translate-x-1/2 w-[min(1120px,92vw)] z-99 top-4 md:top-6 ${className}`}
    >
      <nav
        ref={navRef}
        className={`card-nav ${isExpanded ? 'open' : ''} block h-16 p-0 rounded-3xl shadow-[0_30px_80px_rgba(0,0,0,0.35)] relative overflow-hidden will-change-[height] border border-white/10 backdrop-blur-xl`}
        style={{
          backgroundColor: baseColor,
          backgroundImage: 'linear-gradient(180deg, rgba(255,255,255,0.12), rgba(255,255,255,0.04))'
        }}
      >
        <div className="card-nav-top absolute inset-x-0 top-0 h-16 flex items-center justify-between px-3 md:px-4 z-2">
          <div
            className={`hamburger-menu ${isHamburgerOpen ? 'open' : ''} group h-full flex flex-col items-center justify-center cursor-pointer gap-1.5 order-2 md:order-0`}
            onClick={toggleMenu}
            onKeyDown={e => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleMenu();
              }
            }}
            role="button"
            aria-label={isExpanded ? 'Close menu' : 'Open menu'}
            aria-expanded={isExpanded}
            tabIndex={0}
            style={{ color: menuColor || '#fff' }}
          >
            <div
              className={`hamburger-line h-0.5 w-7.5 bg-current transition-[transform,opacity,margin] duration-300 ease-linear origin-[50%_50%] ${isHamburgerOpen ? 'translate-y-1 rotate-45' : ''
                } group-hover:opacity-75`}
            />
            <div
              className={`hamburger-line h-0.5 w-7.5 bg-current transition-[transform,opacity,margin] duration-300 ease-linear origin-[50%_50%] ${isHamburgerOpen ? '-translate-y-1 -rotate-45' : ''
                } group-hover:opacity-75`}
            />
          </div>

          <div className="logo-container flex items-center md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 order-1 md:order-0">
            <img src={logo} alt={logoAlt} className="logo h-7 md:h-9" />
          </div>

          <button
            type="button"
            className="card-nav-cta-button inline-flex border border-white/10 rounded-[0.85rem] px-5 items-center h-11.5 font-medium cursor-pointer transition-colors duration-300 shadow-lg"
            style={{ backgroundColor: buttonBgColor, color: buttonTextColor }}
            onClick={handleResumeView}
          >
            Resume
          </button>
        </div>

        <div
          className={`card-nav-content absolute left-0 right-0 top-[64px] bottom-0 p-3 md:p-4 grid gap-3 md:grid-cols-3 z-1 ${isExpanded ? 'visible pointer-events-auto' : 'invisible pointer-events-none'
            }`}
          aria-hidden={!isExpanded}
        >
          {(items || []).slice(0, 3).map((item, idx) => (
            <div
              key={`${item.label}-${idx}`}
              className="nav-card select-none relative flex min-w-0 flex-col justify-between gap-4 overflow-hidden rounded-[1.5rem] border border-white/10 p-5 md:p-6 min-h-[210px] md:min-h-[240px] shadow-[0_20px_40px_rgba(0,0,0,0.18)]"
              ref={setCardRef(idx)}
              style={{
                backgroundColor: item.bgColor,
                color: item.textColor,
                backgroundImage: 'linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))'
              }}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="nav-card-label font-semibold tracking-[-0.04em] text-[1.6rem] md:text-[2rem] leading-none">
                  {item.label}
                </div>
                <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[0.65rem] uppercase tracking-[0.2em] text-white/60">
                  0{idx + 1}
                </span>
              </div>
              <div className="nav-card-links mt-auto flex flex-col gap-2">
                {item.links?.map((lnk, i) => (
                  <a
                    key={`${lnk.label}-${i}`}
                    className="nav-card-link inline-flex items-center justify-between gap-3 rounded-full border border-white/10 bg-white/5 px-3.5 py-2 text-[0.9rem] no-underline cursor-pointer transition-all duration-300 hover:bg-white/10 hover:translate-x-0.5"
                    href={lnk.href}
                    aria-label={lnk.ariaLabel}
                  >
                    <span>{lnk.label}</span>
                    <ArrowIcon className="nav-card-link-icon h-4 w-4 shrink-0 opacity-80" />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default CardNav;
