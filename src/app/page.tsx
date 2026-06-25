"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { IconCalendarCheck, IconHomeHeart, IconSparkles, IconUserCheck } from "@tabler/icons-react";
import {
  ChevronDown,
  Clock,
  Instagram,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Sparkles,
  Star,
  X,
} from "lucide-react";
import { fallbackContent, type Lang } from "@/data/fallbackContent";
import { combineSetCategories, loadGoogleSheetsContent, type SiteContent } from "@/lib/googleSheets";
import type { CSSProperties, MouseEvent } from "react";

const sectionIds = ["home", "about", "services", "prices", "specialists", "booking", "contacts"];
const mapEmbedUrl = "https://www.google.com/maps?q=Kurzemes%20prospekts%2015b%2C%20Riga%2C%20Latvia&output=embed";
const initialContent = {
  ...fallbackContent,
  priceCategories: combineSetCategories(fallbackContent.priceCategories),
} as SiteContent;
const benefitIcons = [IconUserCheck, IconHomeHeart, IconSparkles, IconCalendarCheck];
const heroBrandImage = "/images/hero/hero-brand.png";
const introSources = {
  mobile: "/EPIL_TON_intro_mobile.html",
  tablet: "/EPIL_TON_intro_tablet.html",
  laptop: "/EPIL_TON_intro_laptop.html",
  desktop: "/EPIL_TON_intro_desktop.html",
};

function localized<T extends Record<Lang, unknown>>(item: T, lang: Lang) {
  return item[lang] as T[Lang];
}

function ImageBlock({
  src,
  alt,
  className = "",
}: {
  src?: string;
  alt: string;
  className?: string;
}) {
  if (!src) {
    return (
      <div className={`image-placeholder is-visible ${className}`} aria-label={alt}>
        <Sparkles size={30} />
      </div>
    );
  }

  return (
    <>
      <img
        className={className}
        src={src}
        alt={alt}
        loading="lazy"
        onError={(event) => {
          event.currentTarget.style.display = "none";
          event.currentTarget.nextElementSibling?.classList.add("is-visible");
        }}
      />
      <div className={`image-placeholder ${className}`} aria-hidden="true">
        <Sparkles size={30} />
      </div>
    </>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M14.4 8.3h2.4V5h-3c-3.1 0-4.8 1.8-4.8 5v2H6.2v3.4H9V22h3.6v-6.6h3l.6-3.4h-3.6v-1.7c0-1.3.5-2 1.8-2Z"
      />
    </svg>
  );
}

export default function Home() {
  const [lang, setLang] = useState<Lang>("ru");
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePrice, setActivePrice] = useState(0);
  const [priceMenuOpen, setPriceMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [content, setContent] = useState<SiteContent>(initialContent);
  const [aboutRevealed, setAboutRevealed] = useState(false);
  const [introMounted, setIntroMounted] = useState(true);
  const [introVisible, setIntroVisible] = useState(true);
  const [introLoaded, setIntroLoaded] = useState(false);
  const [introSrc, setIntroSrc] = useState(introSources.desktop);
  const aboutRef = useRef<HTMLElement>(null);

  const labels = content.labels[lang];
  const hero = content.hero[lang];
  const about = content.about[lang];
  const contacts = content.contacts[lang];
  const activeCategory = content.priceCategories[activePrice];

  const nav = useMemo(
    () =>
      content.nav[lang].map((label, index) => ({
        label,
        href: `#${sectionIds[index]}`,
      })),
    [content.nav, lang],
  );

  const closeMenu = () => setMenuOpen(false);

  const handleAnchorClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("#")) {
      return;
    }

    const target = document.querySelector<HTMLElement>(href);

    if (!target) {
      return;
    }

    event.preventDefault();
    closeMenu();

    const headerOffset = document.querySelector<HTMLElement>(".site-header")?.offsetHeight ?? 0;
    const top = target.getBoundingClientRect().top + window.scrollY - headerOffset - 12;

    window.history.pushState(null, "", href);
    window.scrollTo({
      top: Math.max(0, top),
      behavior: "smooth",
    });
  };

  useEffect(() => {
    let active = true;

    loadGoogleSheetsContent().then((sheetsContent) => {
      if (active) {
        setContent(sheetsContent);
      }
    });

    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    if (activePrice >= content.priceCategories.length) {
      setActivePrice(0);
    }
  }, [activePrice, content.priceCategories.length]);

  useEffect(() => {
    const target = aboutRef.current;
    if (!target) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAboutRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.34 },
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  useEffect(() => {
    if (!introMounted) {
      return;
    }

    const updateIntroSource = () => {
      const width = window.innerWidth;
      const nextSrc =
        width <= 640
          ? introSources.mobile
          : width <= 1024
            ? introSources.tablet
            : width <= 1440
              ? introSources.laptop
              : introSources.desktop;

      setIntroSrc(nextSrc);
    };

    updateIntroSource();
    window.addEventListener("resize", updateIntroSource);

    return () => window.removeEventListener("resize", updateIntroSource);
  }, [introMounted]);

  useEffect(() => {
    if (!introLoaded) {
      return;
    }

    const fadeTimer = window.setTimeout(() => {
      setIntroVisible(false);
    }, 3200);

    const unmountTimer = window.setTimeout(() => {
      setIntroMounted(false);
      document.body.style.overflow = "";
    }, 3900);

    return () => {
      window.clearTimeout(fadeTimer);
      window.clearTimeout(unmountTimer);
    };
  }, [introLoaded]);

  return (
    <main>
      {introMounted ? (
        <div className={`intro-overlay ${introVisible ? "is-visible" : "is-hidden"}`} aria-hidden={!introVisible}>
          <div className="intro-frame">
            <iframe
              src={introSrc}
              title="EPIL_TON intro"
              loading="eager"
              scrolling="no"
              onLoad={() => setIntroLoaded(true)}
            />
          </div>
        </div>
      ) : null}

      <header className="site-header">
        <a
          className={`logo ${content.logo.image_url ? "logo-image" : ""}`}
          href="#home"
          aria-label="EPIL_TON"
          onClick={(event) => handleAnchorClick(event, "#home")}
        >
          {content.logo.image_url ? (
            <img
              src={content.logo.image_url}
              alt=""
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />
          ) : (
            <span>{content.logo.fallback}</span>
          )}
        </a>

        <nav className="desktop-nav" aria-label="Main">
          {nav.map((item) => (
            <a key={item.href} href={item.href} onClick={(event) => handleAnchorClick(event, item.href)}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <div className="lang-switch" aria-label="Language">
            {(["ru", "lv"] as Lang[]).map((code) => (
              <button
                key={code}
                className={lang === code ? "active" : ""}
                onClick={() => setLang(code)}
                type="button"
              >
                {code.toUpperCase()}
              </button>
            ))}
          </div>
          <a className="button small" href="#prices" onClick={(event) => handleAnchorClick(event, "#prices")}>
            {labels.book}
          </a>
          <button className="icon-button mobile-only" onClick={() => setMenuOpen(true)} type="button" aria-label={labels.menu}>
            <Menu size={22} />
          </button>
        </div>

        <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
          <div className="mobile-menu-head">
            <span>{content.brand}</span>
            <button className="icon-button" onClick={() => setMenuOpen(false)} type="button" aria-label={labels.close}>
              <X size={22} />
            </button>
          </div>
          {nav.map((item) => (
            <a key={item.href} href={item.href} onClick={(event) => handleAnchorClick(event, item.href)}>
              {item.label}
            </a>
          ))}
        </div>
      </header>

      <section className="hero section-band" id="home">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">{hero.eyebrow}</p>
            <h1>{hero.title}</h1>
            <h2>{hero.subtitle}</h2>
            <p className="hero-description">{hero.description}</p>
            <div className="tag-row">
              {hero.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <div className="hero-meta">
              <span>
                <MapPin size={18} /> {hero.address}
              </span>
              <span>
                <Star size={18} /> {hero.status}
              </span>
            </div>
            <div className="hero-buttons">
              <a className="button" href="#prices" onClick={(event) => handleAnchorClick(event, "#prices")}>
                {hero.primary}
              </a>
              <a className="button ghost" href="#services" onClick={(event) => handleAnchorClick(event, "#services")}>
                {hero.secondary}
              </a>
            </div>
          </div>
          <div className="hero-media">
            <ImageBlock src={heroBrandImage} alt={content.brand} />
          </div>
        </div>
      </section>

      <section className="section" id="about" ref={aboutRef}>
        <div className="container about-grid">
          <div className="about-media">
            <div className="about-logo-scene" aria-label={content.brand}>
              <img src={content.logo.image_url} alt={content.brand} />
            </div>
          </div>
          <div className={`about-copy ${aboutRevealed ? "is-visible" : ""}`}>
            <p className="eyebrow">{content.brand}</p>
            <h2>{about.title}</h2>
            {about.text.map((paragraph, index) => (
              <p className="soft-text" key={paragraph} style={{ "--reveal-index": index } as CSSProperties}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="section muted" aria-labelledby="benefits-title">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">{labels.benefits}</p>
            <h2 id="benefits-title">{content.benefitsHeading[lang]}</h2>
          </div>
          <div className="benefit-grid">
            {content.benefits.map((benefit, index) => {
              const [title, text] = benefit[lang];
              const BenefitIcon = benefitIcons[index] || IconSparkles;
              return (
                <article className="benefit-card" key={title}>
                  <div className="benefit-card-head">
                    <span className="benefit-icon">
                      <BenefitIcon size={22} stroke={1.7} />
                    </span>
                    <span className="benefit-number">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section" id="services">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">{labels.services}</p>
            <h2>{lang === "ru" ? "Процедуры для красоты и уверенности" : "Procedūras skaistumam un pārliecībai"}</h2>
          </div>
          <div className="service-grid">
            {content.services.map((service) => {
              const item = localized(service, lang) as { title: string; description: string; price: string };
              return (
                <article className="service-card" key={item.title}>
                  <div className="service-image">
                    <ImageBlock src={service.image_url} alt={item.title} />
                  </div>
                  <div className="service-body">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <div className="card-foot">
                      <strong>{item.price}</strong>
                      <a href="#prices" onClick={(event) => handleAnchorClick(event, "#prices")}>
                        {labels.book}
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section muted" id="prices">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">{labels.prices}</p>
            <h2>{lang === "ru" ? "Актуальные услуги и цены" : "Aktuālie pakalpojumi un cenas"}</h2>
          </div>
          <div className="price-shell">
            <button
              className="price-mobile-toggle"
              type="button"
              onClick={() => setPriceMenuOpen((open) => !open)}
              aria-expanded={priceMenuOpen}
              aria-controls="price-categories"
            >
              <span>{lang === "ru" ? "Выберите категорию" : "Izvēlieties kategoriju"}</span>
              <strong>{activeCategory[lang]}</strong>
              <ChevronDown size={20} />
            </button>
            <div className="price-tabs" id="price-categories" role="tablist" aria-label={labels.prices}>
              {content.priceCategories.map((category, index) => (
                <button
                  key={category.ru}
                  className={activePrice === index ? "active" : ""}
                  onClick={() => {
                    setActivePrice(index);
                    setPriceMenuOpen(false);
                  }}
                  type="button"
                  role="tab"
                  aria-selected={activePrice === index}
                >
                  {category[lang]}
                </button>
              ))}
            </div>
            <div className="price-list">
              {activeCategory.items.map((priceItem) => {
                const [ruName, lvName, price, duration, bookingUrl] = priceItem as [
                  string,
                  string,
                  string,
                  string,
                  string?,
                ];
                const isSection = ruName.startsWith("__section__:");
                if (isSection) {
                  return (
                    <div className="price-subheading" key={`${ruName}-${lvName}`}>
                      {lang === "ru" ? ruName.replace("__section__:", "") : lvName.replace("__section__:", "")}
                    </div>
                  );
                }

                return (
                <div className="price-row" key={`${ruName}-${duration}`}>
                  <div>
                    <h3>{lang === "ru" ? ruName : lvName}</h3>
                    <span>
                      <Clock size={16} /> {duration}
                    </span>
                  </div>
                  <strong>{price}</strong>
                  <a className="button tiny" href={bookingUrl || content.links.booking} target="_blank" rel="noreferrer">
                    {labels.book}
                  </a>
                </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="specialists">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">{labels.specialists}</p>
            <h2>{lang === "ru" ? "Мастера студии" : "Studijas meistari"}</h2>
          </div>
          <div className="specialist-grid">
            {content.specialists.map((specialist) => {
              const item = localized(specialist, lang) as { name: string; position: string; description: string };
              const specialistBookingUrl = (specialist as typeof specialist & { booking_url?: string }).booking_url;
              return (
                <article className="specialist-card" key={item.name}>
                  <div className="specialist-photo">
                    <ImageBlock src={specialist.image_url} alt={item.name} />
                  </div>
                  <div>
                    <span>{item.position}</span>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <a href={specialistBookingUrl || content.links.booking} target="_blank" rel="noreferrer">
                      {labels.book}
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section muted" id="booking">
        <div className="container faq-grid">
          <div>
            <p className="eyebrow">{labels.faq}</p>
            <h2>{lang === "ru" ? "Ответы перед визитом" : "Atbildes pirms vizītes"}</h2>
          </div>
          <div className="faq-list">
            {content.faq.map((faq, index) => {
              const [question, answer] = faq[lang];
              const opened = openFaq === index;
              return (
                <article className={`faq-item ${opened ? "open" : ""}`} key={question}>
                  <button type="button" onClick={() => setOpenFaq(opened ? -1 : index)}>
                    {question}
                    <ChevronDown size={20} />
                  </button>
                  <p>{answer}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section contact-section" id="contacts">
        <div className="container contact-grid">
          <div>
            <p className="eyebrow">{contacts.title}</p>
            <h2>{contacts.subtitle}</h2>
            <div className="contact-list">
              <a href={content.links.maps} target="_blank" rel="noreferrer">
                <MapPin /> {content.contacts.address}
              </a>
              <a href={content.links.whatsapp} target="_blank" rel="noreferrer">
                <Phone /> {contacts.phoneLabel}: {content.contacts.phone}
              </a>
              <a href={content.links.instagram} target="_blank" rel="noreferrer">
                <Instagram /> {content.contacts.instagram}
              </a>
            </div>
            <div className="hero-buttons">
              <a className="button" href={content.links.booking} target="_blank" rel="noreferrer">
                {contacts.bookButton}
              </a>
              <a className="button ghost" href={content.links.maps} target="_blank" rel="noreferrer">
                {contacts.mapButton}
              </a>
            </div>
          </div>
          <div className="map-card">
            <iframe
              title="EPIL_TON Google Map"
              src={mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <a className="logo footer-logo" href="#home" onClick={(event) => handleAnchorClick(event, "#home")}>
              <span>{content.brand}</span>
            </a>
            <p>{contacts.footerText}</p>
          </div>
          <div>
            <h3>{labels.menu}</h3>
            {nav.slice(0, 5).map((item) => (
              <a key={item.href} href={item.href} onClick={(event) => handleAnchorClick(event, item.href)}>
                {item.label}
              </a>
            ))}
          </div>
          <div>
            <h3>{labels.services}</h3>
            {content.services.slice(0, 5).map((service) => (
              <a
                key={service[lang].title}
                href="#services"
                onClick={(event) => handleAnchorClick(event, "#services")}
              >
                {service[lang].title}
              </a>
            ))}
          </div>
          <div>
            <h3>{labels.follow}</h3>
            <div className="socials">
              <a href={content.links.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
                <Instagram />
              </a>
              <a href={content.links.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp">
                <MessageCircle />
              </a>
              <a href={content.links.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
                <FacebookIcon />
              </a>
            </div>
          </div>
        </div>
        <div className="container footer-credit">
          <span>Website by</span>
          <a href="https://bynarsia.com" target="_blank" rel="noreferrer">
            bynarsia.com
          </a>
        </div>
      </footer>
    </main>
  );
}
