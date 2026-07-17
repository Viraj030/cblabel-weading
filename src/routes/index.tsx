import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, useRef } from "react";
import {
  Mail,
  MapPin,
  Phone,
  Instagram,
  Facebook,
  Youtube,
  Sparkles,
  Gift,
  Gem,
  HeartHandshake,
  PackageOpen,
  Quote,
  ChevronDown,
  ArrowRight,
  Plus,
  Minus,
  Send,
  ClipboardList,
  ArrowUpRight,
  Menu,
  X,
  Palette,
  PenTool,
  Eye,
  Printer,
  Truck,
  Plane,
  Calendar,
  Heart,
  Play,
} from "lucide-react";

import logoAsset from "@/assets/chatterbox-logo.png.asset.json";
import heroAsset from "@/assets/wedding-hero.png.asset.json";

import journeyInvitation from "@/assets/journey-invitation.jpg";
import journeyArrival from "@/assets/journey-arrival.jpg";
import journeyHotel from "@/assets/journey-hotel.jpg";
import journeyEvents from "@/assets/journey-events.jpg";
import journeyGifts from "@/assets/journey-gifts.jpg";
import journeyFarewell from "@/assets/journey-farewell.jpg";

import collectionRoyal from "@/assets/Royal Indian.png";
import collectionFloral from "@/assets/Floral.png";
import collectionMinimal from "@/assets/Minimal.png";
import collectionTropical from "@/assets/Beach.jpg";
import collectionIllustrated from "@/assets/IllustratedCoupleStory.png";

import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

export const Route = createFileRoute("/")({
  component: Landing,
});

const NAV = [
  { label: "Collections", href: "#collections" },
  { label: "Shop By Need", href: "#shop-by-need" },
  { label: "Our Process", href: "#process" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQs", href: "#faqs" },
];

const JOURNEY = [
  { title: "Invitation", copy: "The first whisper of your story.", img: journeyInvitation },
  { title: "Guest Arrival", copy: "Wedding passports & luggage tags.", img: journeyArrival },
  { title: "Hotel Stay", copy: "Room keys, hangers & welcomes.", img: journeyHotel },
  { title: "Wedding Events", copy: "Signage, itineraries & menus.", img: journeyEvents },
  { title: "Gifts & Giveaways", copy: "Tags, envelopes & keepsakes.", img: journeyGifts },
  { title: "Farewell", copy: "A last, loving goodbye.", img: journeyFarewell },
];

const NEEDS = [
  {
    title: "Gifts & Giveaways",
    copy: "Gift tags, money envelopes, cash boxes, thank you tags & stickers.",
    img: journeyGifts,
  },
  {
    title: "Guest Arrival",
    copy: "Wedding passports, luggage tags & itinerary cards.",
    img: journeyArrival,
  },
  {
    title: "Announcements & Signage",
    copy: "Welcome signs, tent cards, standees & airport placards.",
    img: journeyEvents,
  },
  {
    title: "Fun & Games",
    copy: "Playing cards, casino vouchers & tambola tickets.",
    img: gallery5,
  },
  {
    title: "Room Stationery",
    copy: "Key cards, door hangers & itinerary cards.",
    img: journeyHotel,
  },
  {
    title: "Ritual Stationery",
    copy: "Ritual cards & petal cones for every ceremony.",
    img: gallery6,
  },
];

const COLLECTIONS = [
  { title: "Barefoot Brunch", tag: "Coastal • Tropical Chic", img: collectionTropical },
  { title: "Floral Reverie", tag: "Garden • Pastel Chic", img: collectionFloral },
  { title: "An Illustrated Love", tag: "Storybook • Pastel Chic", img: collectionIllustrated },
  { title: "Royal Elegance", tag: "Heritage", img: collectionRoyal },
  { title: "Minimal Luxe", tag: "Editorial", img: collectionMinimal },
];

const WHY = [
  { icon: Sparkles, title: "Bespoke\nDesigns", copy: "Designed around your story." },
  { icon: PackageOpen, title: "Complete Wedding\nCollection", copy: "Everything your celebration needs." },
  { icon: Gem, title: "Premium\nMaterials", copy: "Luxury finishes you'll love." },
  { icon: HeartHandshake, title: "Thoughtful\nPersonalisation", copy: "Every detail made uniquely yours." },
  { icon: Gift, title: "Beyond\nInvitations", copy: "Stationery, keepsakes & wedding essentials." },
];

const PROCESS = [
  {
    icon: ClipboardList,
    title: "Share Your Requirements",
    copy: "Tell us your wedding dates, guest count, events, ideas and inspiration.",
  },
  {
    icon: Palette,
    title: "Choose Your Style",
    copy: "Browse our collection or share your Pinterest board.",
  },
  {
    icon: PenTool,
    title: "Design & Personalisation",
    copy: "We personalise your stationery with names, colours, monograms and event details.",
  },
  {
    icon: Eye,
    title: "Review & Approve",
    copy: "Receive a digital proof, request revisions, approve final artwork.",
  },
  {
    icon: Printer,
    title: "Printing & Finishing",
    copy: "Professionally printed using premium materials and luxury finishes.",
  },
  {
    icon: Truck,
    title: "Packed & Delivered",
    copy: "Securely packed and delivered to your doorstep.",
  },
];

const GALLERY = [
  { img: gallery1, span: "row-span-2" },
  { img: gallery2, span: "" },
  { img: gallery3, span: "" },
  { img: gallery4, span: "row-span-2" },
  { img: gallery5, span: "" },
  { img: gallery6, span: "row-span-2" },
];

const TESTIMONIALS = [
  {
    quote:
      "From the invitations to the welcome sign and room tags, everything looked like it belonged together. Our guests kept asking us who designed our stationery. It made our wedding feel so personal.",
    author: "Riya & Kunal",
  },
  {
    quote:
      "The quality was beautiful and every little detail was finished so neatly. The team was patient with our revisions and made the entire process effortless. We couldn't have asked for better wedding stationery.",
    author: "Aditi & Arjun",
  },
  {
    quote:
      "We wanted something elegant but different from the usual designs. Chatterbox Weddings understood our vision perfectly and created stationery that truly reflected our celebration.",
    author: "Mehak & Rohan",
  },
  {
    quote:
      "Every piece felt thoughtfully crafted—from the invitations to the smallest signage. It added a beautiful, cohesive touch to our wedding and received countless compliments from our guests.",
    author: "Sneha & Yash",
  },
  {
    quote:
      "The attention to detail was exceptional. Beautiful printing, premium finishes and a smooth experience from design to delivery. We would recommend Chatterbox Weddings without hesitation.",
    author: "Isha & Dev",
  },
];

const FAQS = [
  { q: "How do I place an order?", a: "You can place your order directly through our website or get in touch with us on WhatsApp. Once we understand your requirements, we'll guide you through the design, approval and production process." },
  { q: "Is an advance payment required?", a: "Yes. We require an advance payment to confirm your booking and reserve time for your project. Production begins only after the advance has been received." },
  { q: "Can I personalise my wedding stationery?", a: "Absolutely! All our wedding stationery is personalised with your names, wedding details and chosen theme. Depending on the product, you can also customise colours, fonts, wording and design elements." },
  { q: "Are your prices fixed?", a: "Our listed prices are starting prices. The final cost depends on factors such as quantity, paper selection, printing finish, embellishments, personalisation and custom design requirements." },
  { q: "What information do I need to provide?", a: "Before we begin designing, we'll need your wedding details including names, event schedule, venue information, spellings, preferred wording, design references and any inspiration you'd like us to follow." },
  { q: "Can I request changes after the design is created?", a: "Yes. Minor revisions are included during the design process. Significant design changes or multiple revision rounds after approval may incur additional charges." },
  { q: "Will I receive a proof before printing?", a: "Yes. A digital proof will be shared for your review before printing. We request you to carefully check all names, dates, spellings and event details, as the approved proof will be used for production." },
  { q: "Will the printed colours match the digital proof?", a: "Printed colours may vary slightly from what you see on your screen due to differences in monitors, paper textures and printing processes. Such minor variations are normal and unavoidable." },
  { q: "What is your cancellation and refund policy?", a: "As each order is custom-made, cancellations after the design process has begun may attract cancellation charges. Refunds, if applicable, will depend on the stage of the project at the time of cancellation." },
  { q: "Do you provide editable or source files?", a: "No. We provide print-ready artwork for the products ordered. Editable or source files are not included." },
  { q: "When will my order be processed?", a: "Your project will be scheduled once your order is confirmed, the advance payment is received, and all required content and references have been shared." },
  { q: "How long will my order take?", a: "Timelines vary depending on the products ordered, level of customisation and quantity. We'll share an estimated production and delivery schedule once your order is confirmed." },
  { q: "Do you ship across India?", a: "Yes. We deliver wedding stationery across India. Shipping timelines vary depending on your location and the size of the order." },
  { q: "Do you only design wedding invitations?", a: "No. We create a complete range of coordinated wedding stationery including invitations, welcome signs, itineraries, room tags, door hangers, menus, place cards, favour tags, thank you cards, envelopes, gift packaging and more." },
  { q: "Can you match my wedding theme or décor?", a: "Yes. If you share your décor mood board, colour palette or venue inspiration, we'll create stationery that complements your wedding style." },
];

function Landing() {
  const [scrolled, setScrolled] = useState(false);
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [showAllFaqs, setShowAllFaqs] = useState(false);
  const [collectionIdx, setCollectionIdx] = useState(0);
  const [journeyIdx, setJourneyIdx] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const collectionCarouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setInterval(
      () => setCollectionIdx((i) => (i + 1) % COLLECTIONS.length),
      4000
    );
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const el = collectionCarouselRef.current;
    if (el && el.children[collectionIdx]) {
      const card = el.children[collectionIdx] as HTMLElement;
      // scroll so card is at the left, minus a little padding
      el.scrollTo({
        left: card.offsetLeft - el.offsetLeft - 20,
        behavior: "smooth",
      });
    }
  }, [collectionIdx]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const t = setInterval(
      () => setTestimonialIdx((i) => (i + 1) % TESTIMONIALS.length),
      6000,
    );
    return () => clearInterval(t);
  }, []);

  const goGallery = () => {
    const el = document.getElementById("gallery");
    el?.scrollIntoView({ behavior: "smooth" });
  };
  const goConsult = () => {
    const el = document.getElementById("consultation");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAVBAR */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled
          ? "bg-white/85 backdrop-blur-xl shadow-soft"
          : "bg-transparent"
          }`}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-3 md:px-10 md:py-4">
          <a href="#top" className="flex items-center gap-2 shrink-0">
            <img
              src="/assets/Chatterbox Weddings Logo.png"
              alt="Chatterbox Weddings"
              className="h-20 w-20 md:h-22 md:w-22 rounded-full object-cover"
            />
          </a>

          <nav className="hidden lg:flex items-center gap-9 text-[0.82rem] font-medium tracking-wide text-charcoal/80">
            {NAV.map((n) => (
              <a
                key={n.label}
                href={n.href}
                className="relative py-2 transition-colors hover:text-primary after:absolute after:left-0 after:bottom-0 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={goConsult}
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2.5 md:px-6 md:py-3 text-[0.7rem] md:text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground shadow-luxe transition-all hover:scale-[1.03] hover:shadow-[0_20px_40px_-15px_oklch(0.62_0.29_0/0.55)]"
            >
              <span className="hidden sm:inline">Book </span>Consultation
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-1.5 text-charcoal hover:bg-charcoal/5 rounded-full transition-colors"
            >
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-md border-t border-border/40 p-5 flex flex-col gap-4 lg:hidden">
            {NAV.map((n) => (
              <a
                key={n.label}
                href={n.href}
                onClick={() => setMenuOpen(false)}
                className="text-[0.95rem] font-medium text-charcoal/80 hover:text-primary transition-colors py-2 border-b border-border/40 last:border-0"
              >
                {n.label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden pt-24 md:pt-28">
        <div className="mx-auto max-w-[1400px] px-4 md:px-8">
          <div className="relative rounded-[28px] md:rounded-[40px] overflow-hidden shadow-luxe">
            <img
              src="/assets/Wedding-Banner.png"
              alt="Bespoke Wedding Stationery — Designed Around Your Story"
              className="w-full h-[65vh] lg:h-auto object-cover block"
            />
            <div className="pointer-events-none hidden lg:block absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />

            <div className="hidden lg:flex absolute bottom-10 left-10 gap-3">
              <button
                onClick={goConsult}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.22em] text-primary-foreground shadow-luxe transition-all hover:scale-[1.03]"
              >
                Book Consultation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={goGallery}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/70 bg-white/10 backdrop-blur px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.22em] text-white transition-all hover:bg-white hover:text-charcoal"
              >
                Browse Gallery
              </button>
            </div>
          </div>

          <div className="mt-6 flex lg:hidden flex-col sm:flex-row gap-3 px-2">
            <button
              onClick={goConsult}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.22em] text-primary-foreground shadow-luxe transition-all hover:scale-[1.03]"
            >
              Book Consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={goGallery}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border/70 bg-white px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.22em] text-charcoal transition-all hover:border-primary hover:text-primary"
            >
              Browse Gallery
            </button>
          </div>
        </div>

        {/* marquee ribbon */}
        <div className="mt-10 md:mt-14 border-y border-border/70 py-4 overflow-hidden">
          <div className="flex whitespace-nowrap animate-[marquee_40s_linear_infinite]">
            {[...Array(2)].map((_, r) => (
              <div key={r} className="flex items-center gap-14 pr-14 text-[0.72rem] uppercase tracking-[0.35em] text-charcoal/60">
                {[
                  "Bespoke Design Studio",
                  "◆",
                  "Delivered India & Worldwide",
                  "◆",
                  "10–12 Day Turnaround",
                  "◆",
                  "Premium Papers & Foiling",
                  "◆",
                  "Trusted by 500+ Couples",
                  "◆",
                ].map((t, i) => (
                  <span key={`${r}-${i}`} className="shrink-0">{t}</span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* SECTION 1 — JOURNEY */}
      <section id="journey" className="relative py-16 md:py-24 overflow-hidden">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="flex flex-col xl:flex-row gap-12 lg:gap-16 items-center xl:items-start">

            {/* Left side: Content */}
            <div className="w-full xl:w-2/5 flex flex-col pt-4">
              <span className="flex items-center gap-2 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#FF007F] mb-4">
                Imagine Your Wedding <Heart className="h-3 w-3 fill-[#FF007F]" />
              </span>
              <h2 className="font-serif text-4xl md:text-[3.2rem] leading-[1.1] text-charcoal max-w-[420px]">
                Every moment. Every detail. Beautifully connected.
              </h2>
              <p className="mt-6 text-[1.05rem] leading-relaxed text-charcoal/80 max-w-md">
                We create a complete stationery experience that flows with your celebration — from the first impression to the last goodbye.
              </p>

              <div className="mt-10">
                <button className="group inline-flex items-center justify-between gap-6 rounded-full bg-[#FF007F] pl-8 pr-1.5 py-1.5 text-[0.75rem] font-bold uppercase tracking-[0.15em] text-white shadow-luxe transition-transform hover:scale-105">
                  Watch the full experience
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white text-[#FF007F]">
                    <Play className="h-4 w-4 ml-0.5 fill-current" />
                  </div>
                </button>
                <div className="mt-6 flex items-center gap-4 text-charcoal/70">
                  <ArrowRight className="h-5 w-5 text-[#FF007F]" strokeWidth={1} />
                  <span className="text-[0.8rem] max-w-[180px] leading-snug text-muted-foreground">
                    Play to see how we bring your wedding story to life
                  </span>
                </div>
              </div>
            </div>

            {/* Right side: Cards */}
            <div className="w-full xl:w-3/5">
              <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 md:gap-6 pb-12 pt-4 px-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                {JOURNEY.map((item, i) => {
                  const icons = [Mail, Plane, Calendar, Gift, HeartHandshake];
                  const Icon = icons[i] || Heart;
                  return (
                    <div key={i} className="relative shrink-0 w-[200px] md:w-[250px] snap-center flex flex-col items-center">
                      <div className="relative w-full aspect-[3/4] rounded-[24px] overflow-hidden shadow-md group cursor-pointer border border-white/50">
                        <img
                          src={item.img}
                          alt={item.title}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        {/* Overlay for "video" vibe */}
                        <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-500" />
                      </div>

                      {/* Icon overlaying the bottom of the image */}
                      <div className="relative -mt-7 grid h-14 w-14 place-items-center rounded-full bg-white border-[3px] border-[#FFF5F8] text-[#FF007F] shadow-sm z-10">
                        {/* Subtle glow behind the icon */}
                        <div className="absolute inset-0 rounded-full bg-[#FF007F]/10" />
                        <Icon className="h-[1.1rem] w-[1.1rem] relative z-10" strokeWidth={1.5} />
                      </div>

                      <h3 className="mt-3 font-serif text-[1.1rem] text-charcoal text-center">{item.title}</h3>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2 — SHOP BY NEED (image tiles, no cards) */}
      <section id="shop-by-need" className="relative py-16 md:py-24 bg-gradient-to-b from-[#F9F6F0] to-[#FFE6F2]">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <SectionHead
            eyebrow="Shop By Need"
            title="Everything For A Perfectly Planned Celebration"
            copy="Curated collections thoughtfully designed for every moment of your wedding journey."
          />

          <div className="mt-14 grid gap-5 md:gap-7 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {NEEDS.map((n) => (
              <button
                key={n.title}
                onClick={goGallery}
                className="group relative block text-left overflow-hidden rounded-[20px]"
              >
                <div className="relative aspect-[5/6] overflow-hidden">
                  <img
                    src={n.img}
                    alt={n.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 md:p-7 text-white">
                    <h3 className="text-2xl md:text-[1.65rem] leading-tight">{n.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/85 max-w-xs">{n.copy}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-white">
                      View in gallery
                      <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1.5" />
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — COLLECTIONS */}
      <section id="collections" className="py-16 md:py-24">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <SectionHead
            eyebrow="Signature Collections"
            title="A Design To Match Your Story"
            copy="From heritage-inspired royalty to breezy destination minimalism — a curated set of design languages, ready to be made yours."
          />

          <div
            ref={collectionCarouselRef}
            className="mt-14 flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {COLLECTIONS.map((c) => (
              <button
                key={c.title}
                onClick={goGallery}
                className="group shrink-0 snap-center w-[85vw] sm:w-[320px] md:w-[360px] text-left bg-white rounded-[24px] p-4 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-border/40 hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] transition-all duration-500"
              >
                <div className="relative overflow-hidden rounded-[16px] aspect-[4/5] mb-5 bg-muted">
                  <img
                    src={c.img}
                    alt={c.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-105"
                  />
                </div>
                <div className="flex items-end justify-between px-1 pb-1">
                  <div>
                    <h3 className="text-[1.35rem] md:text-[1.5rem] leading-tight text-charcoal">{c.title}</h3>
                    <p className="mt-2 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                      {c.tag}
                    </p>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border/70 text-charcoal/60 transition-colors group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary shrink-0">
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-6 flex justify-center gap-2">
            {COLLECTIONS.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to collection ${i + 1}`}
                onClick={() => setCollectionIdx(i)}
                className={`h-1.5 rounded-full transition-all duration-500 ${i === collectionIdx ? "w-10 bg-primary" : "w-2 bg-primary/25"
                  }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — WHY (sleek, icon-first, no cards) */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-[#F9F6F0] to-[#FFE6F2]">
        <div className="mx-auto max-w-[1300px] px-5 md:px-10">
          <SectionHead
            eyebrow="Why Couples Love Chatterbox"
            title={
              <>
                Crafted With Care,<br />Delivered With Love
              </>
            }
          />

          <div className="mt-14 grid gap-y-12 gap-x-6 grid-cols-2 lg:grid-cols-5">
            {WHY.map((w) => {
              const Icon = w.icon;
              return (
                <div key={w.title} className="group text-center px-2">
                  <div className="relative mx-auto h-16 w-16">
                    <span className="absolute inset-0 rounded-full border border-primary/25 transition-transform duration-500 group-hover:scale-110" />
                    <span className="absolute inset-2 rounded-full border border-primary/15" />
                    <span className="absolute inset-0 grid place-items-center text-primary">
                      <Icon className="h-6 w-6" strokeWidth={1.25} />
                    </span>
                  </div>
                  <div className="mx-auto mt-5 h-px w-8 bg-primary/30" />
                  <h4 className="mt-4 text-lg md:text-xl text-charcoal leading-tight whitespace-pre-line">{w.title}</h4>
                  <p className="mt-1 text-[0.85rem] text-muted-foreground">{w.copy}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 5 — PROCESS (horizontal timeline) */}
      {/* SECTION 6 — GALLERY (Editorial masonry) */}
      <section id="gallery" className="py-16 md:py-24">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <SectionHead
            eyebrow="Real Weddings"
            title="A Glimpse Of Our Beautiful Celebrations"
            copy="Peek into moments crafted for real couples across India and beyond."
          />

          <div className="mt-14 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[180px] md:auto-rows-[240px]">
            {GALLERY.map((g, i) => (
              <button
                key={i}
                onClick={goGallery}
                className={`group relative overflow-hidden rounded-[20px] transition-all duration-500 ${g.span}`}
              >
                <img
                  src={g.img}
                  alt={`Real wedding ${i + 1}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — PROCESS (now placed below gallery) */}
      <section id="process" className="py-16 md:py-24">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <SectionHead
            eyebrow="Your Wedding Stationery Journey"
            title="Simple, Seamless & Delightful"
            copy="A calm, personal process — designed to keep you inspired at every step."
          />

          <div className="relative mt-16 md:mt-24">
            {/* Horizontal connecting line (Desktop) */}
            <div className="hidden lg:block absolute top-8 left-[8.33%] right-[8.33%] h-[2px] bg-gradient-to-r from-primary/10 via-primary/30 to-primary/10" />

            {/* Vertical connecting line (Mobile) */}
            <div className="lg:hidden absolute left-8 top-8 bottom-8 w-[2px] bg-gradient-to-b from-primary/10 via-primary/30 to-primary/10" />

            <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-2 relative z-10">
              {PROCESS.map((p, i) => {
                const Icon = p.icon;
                return (
                  <div key={p.title} className="relative flex lg:flex-col items-start lg:items-center gap-6 lg:gap-4 lg:w-1/6 px-1 lg:px-2 group">
                    <div className="shrink-0 relative flex items-center justify-center">
                      {/* Ping animation for the glowing and disappearing effect */}
                      <div
                        className="absolute inset-0 rounded-full bg-primary/40 animate-ping"
                        style={{ animationDuration: '3s' }}
                      />
                      {/* Static soft outer halo */}
                      <div className="absolute -inset-3 rounded-full" />

                      <div className="grid h-16 w-16 place-items-center rounded-full bg-white text-primary shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] group-hover:scale-110 transition-transform duration-300 relative z-10">
                        <Icon className="h-6 w-6" strokeWidth={1.5} />
                      </div>
                    </div>
                    <div className="text-left lg:text-center pt-2 lg:pt-0">
                      <span className="block eyebrow text-primary">Step {String(i + 1).padStart(2, "0")}</span>
                      <h3 className="mt-2 text-[1.05rem] font-medium leading-tight text-charcoal">{p.title}</h3>
                      <p className="mt-2 text-[0.78rem] leading-relaxed text-muted-foreground">{p.copy}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 — TESTIMONIALS (Horizontal scroll or simple grid) */}
      <section id="testimonials" className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-[#F9F6F0] to-[#FFE6F2]">
        <div className="mx-auto max-w-[1300px] px-5 md:px-10">
          <div className="text-center">
            <span className="eyebrow">Client Love</span>
            <h2 className="mt-4 text-3xl md:text-5xl leading-tight text-charcoal">
              Stories From Our Happy Couples
            </h2>
          </div>

          <div className="mt-14 overflow-hidden">
            <div
              className="flex transition-transform duration-[900ms] ease-out"
              style={{ transform: `translateX(calc(-${testimonialIdx} * (100% / 3)))` }}
            >
              {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
                <div key={i} className="shrink-0 w-full md:w-1/2 lg:w-1/3 px-3 md:px-4">
                  <figure className="h-full rounded-[24px] bg-background/80 backdrop-blur border border-border/60 p-8 md:p-9">
                    <Quote className="h-8 w-8 text-primary/40" strokeWidth={1.2} />
                    <blockquote className="mt-5 text-[1.05rem] md:text-lg leading-relaxed italic text-charcoal">
                      “{t.quote}”
                    </blockquote>
                    <figcaption className="mt-6 flex items-center gap-3">
                      <span className="h-px w-8 bg-primary/40" />
                      <span className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-primary">
                        {t.author}
                      </span>
                    </figcaption>
                    <div className="mt-3 flex gap-0.5 text-primary text-sm">
                      {"★★★★★".split("").map((s, k) => <span key={k}>{s}</span>)}
                    </div>
                  </figure>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 flex justify-center gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                aria-label={`Show testimonial ${i + 1}`}
                onClick={() => setTestimonialIdx(i)}
                className={`h-1.5 rounded-full transition-all duration-500 ${i === testimonialIdx ? "w-10 bg-primary" : "w-2 bg-primary/25"
                  }`}
              />
            ))}
          </div>
        </div>
      </section>


      {/* SECTION 8 — FAQ */}
      <section id="faqs" className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-5 md:px-10">
          <SectionHead
            eyebrow="Frequently Asked"
            title="Everything You'd Like To Know"
          />

          <div className="mt-14 flex flex-col gap-4 items-stretch">
            {FAQS.slice(0, showAllFaqs ? FAQS.length : 5).map((f, i) => {
              const open = openFaq === i;
              return (
                <div
                  key={i}
                  className={`rounded-[32px] bg-white transition-all duration-300 border ${open ? "border-[#FF007F] shadow-sm" : "border-border/60 hover:border-border"
                    }`}
                >
                  <button
                    onClick={() => setOpenFaq(open ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 md:px-8 py-5 md:py-6 text-left"
                  >
                    <span className="text-lg md:text-[1.1rem] leading-tight text-charcoal">{f.q}</span>
                    <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition-all ${open ? "bg-[#FF007F] text-white rotate-180" : "bg-[#FFE6F2] text-charcoal"
                      }`}>
                      {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </span>
                  </button>
                  <div className={`grid transition-all duration-500 ease-out ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                    <div className="overflow-hidden">
                      <p className="pb-6 md:pb-8 px-6 md:px-8 pt-2 text-sm md:text-[0.95rem] leading-relaxed text-charcoal/70">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {FAQS.length > 5 && (
            <div className="mt-10 text-center">
              <button
                onClick={() => setShowAllFaqs(!showAllFaqs)}
                className="group inline-flex items-center gap-2 rounded-full border border-border/70 bg-white px-7 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-charcoal shadow-sm transition-all hover:border-primary hover:text-primary"
              >
                {showAllFaqs ? "Read Less" : "Read More"}
                {showAllFaqs ? (
                  <Minus className="h-3.5 w-3.5" />
                ) : (
                  <Plus className="h-3.5 w-3.5" />
                )}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* SECTION 9 — CONSULTATION */}
      <section
        id="consultation"
        className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-[#F9F6F0] to-[#FFE6F2]"
      >
        <div className="relative mx-auto grid max-w-[1400px] gap-14 lg:gap-20 px-5 md:px-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">

          {/* LEFT */}
          <div className="flex flex-col pt-4">
            <div className="max-w-xl">
              <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#FF007F] mb-4 block">LET'S TALK</span>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl lg:text-[4rem] leading-[1.05] text-charcoal">
                Let's create<br />something<br /><span className="text-[#FF007F]">beautiful</span> together.
              </h2>
              <p className="mt-6 max-w-sm text-[0.95rem] leading-relaxed text-charcoal/80">
                Share a few details about your celebration and our design team will get back
                to you with ideas thoughtfully matched to your story.
              </p>

              <div className="mt-12 space-y-6">
                <ContactRow icon={Phone} label="Phone" value="+91 99672 85448" />
                <ContactRow icon={Mail} label="Email" value="shrishti@chatterboxlabels.com" />
                <ContactRow icon={MapPin} label="Studio" value="Monday – Saturday · 10:00 – 18:00" />
              </div>
            </div>
          </div>

          {/* RIGHT — form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you! We'll be in touch shortly.");
            }}
          >
            <div className="rounded-[32px] bg-white p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-border/50">
              <h3 className="font-serif text-2xl md:text-[1.75rem] text-charcoal">
                Book Your Wedding Consultation
              </h3>
              <p className="mt-2 text-[0.9rem] text-charcoal/70">
                Tell us about your celebration.
              </p>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <Field label="YOUR NAME*" name="name" required />
                <Field label="EMAIL ADDRESS*" name="email" type="email" required />
                <Field label="PHONE NUMBER*" name="phone" type="tel" required />
                <Field label="WEDDING LOCATION*" name="location" required />
                <Field label="WEDDING DATE" name="date" type="date" />
                <Field label="NUMBER OF GUESTS (APPROX.)" name="guests" type="number" />
                <div className="sm:col-span-2">
                  <Field
                    label="TELL US BRIEFLY WHAT YOU'RE LOOKING FOR"
                    name="message"
                    textarea
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#FF007F] px-8 py-4 text-[0.8rem] font-bold uppercase tracking-[0.15em] text-white transition-transform hover:scale-[1.02] shadow-md"
              >
                BOOK CONSULTATION
                <Send className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border/40">
        {/* <div className="mx-auto flex max-w-[1400px] flex-col items-center gap-6 px-6 py-8 md:flex-row md:justify-between md:gap-6">
          <div className="flex items-center gap-3">
            <img
              src="/assets/Chatterbox Weddings Logo.png"
              alt="Chatterbox Weddings"
              className="h-20 w-20 rounded-full object-cover"
            />
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-[0.78rem] font-medium text-charcoal/70">
            {NAV.map((n) => (
              <a key={n.label} href={n.href} className="transition-colors hover:text-primary">
                {n.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {[Instagram, Facebook, Youtube].map((I, i) => (
              <a
                key={i}
                href="#"
                className="grid h-10 w-10 place-items-center rounded-full border border-border text-charcoal/70 transition-all hover:border-primary hover:text-primary"
                aria-label="Social link"
              >
                <I className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div> */}
        <div className="border-t border-border/70 py-5 text-center text-[0.72rem] tracking-[0.2em] uppercase text-muted-foreground">
          © {new Date().getFullYear()} Chatterbox Weddings · Bespoke Wedding Stationery
        </div>
      </footer>
    </div>
  );
}

/* ————— helpers ————— */

function SectionHead({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: React.ReactNode;
  copy?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="mt-4 text-3xl md:text-5xl leading-[1.08] text-charcoal">
        {title}
      </h2>
      {copy ? (
        <p className="mx-auto mt-5 max-w-xl text-[0.95rem] leading-relaxed text-muted-foreground">
          {copy}
        </p>
      ) : null}
    </div>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Phone;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-5">
      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white text-[#FF007F] shadow-sm border border-border/40">
        <Icon className="h-4 w-4" strokeWidth={1.5} />
      </div>
      <div className="min-w-0 pt-0.5">
        <div className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#FF007F]">
          {label}
        </div>
        <div className="mt-1 text-[0.95rem] text-charcoal truncate">{value}</div>
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  textarea,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  textarea?: boolean;
}) {
  const shared =
    "w-full rounded-full border border-border/60 bg-white px-6 py-[0.8rem] text-[0.75rem] font-bold uppercase tracking-[0.05em] text-charcoal placeholder-muted-foreground/60 transition-all focus:border-[#FF007F] focus:outline-none focus:ring-1 focus:ring-[#FF007F]";
  const textareaClass = "w-full rounded-3xl border border-border/60 bg-white px-6 py-4 text-[0.75rem] font-bold uppercase tracking-[0.05em] text-charcoal placeholder-muted-foreground/60 transition-all focus:border-[#FF007F] focus:outline-none focus:ring-1 focus:ring-[#FF007F] resize-none";

  return (
    <div className="relative block">
      {textarea ? (
        <textarea
          name={name}
          required={required}
          rows={4}
          placeholder={label}
          className={textareaClass}
        />
      ) : (
        <input
          name={name}
          type={type}
          required={required}
          placeholder={label}
          className={shared}
        />
      )}
    </div>
  );
}
