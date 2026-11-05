import { css as f, LitElement as m, html as s } from "lit";
import { property as x, state as u } from "lit/decorators.js";
const h = f`
  :host { display: block; --tf-accent: var(--tf-custom, var(--color-primary, #c9a45c)); --tf-ink: #0f0c18; --tf-ivory: #f6f1e7; --tf-mut: #a59bc2;
    --tf-gold: linear-gradient(135deg, #f5d68a, #c9a45c 55%, #9a7634); font-family: inherit; direction: inherit; }
  :host([hidden]) { display: none; }
  *, *::before, *::after { box-sizing: border-box; }
  .wrap { max-width: 1240px; margin: 0 auto; padding: clamp(28px, 5vw, 64px) clamp(16px, 4vw, 32px); }
  .eyebrow { display: inline-block; letter-spacing: .28em; font-size: 12px; text-transform: uppercase; color: var(--tf-accent); margin-bottom: 10px; }
  h2.title { margin: 0 0 8px; font-size: clamp(24px, 3.4vw, 40px); line-height: 1.25; font-weight: 800; }
  .sub { margin: 0 0 28px; opacity: .7; font-size: clamp(14px, 1.6vw, 17px); line-height: 1.8; }
  .btn { display: inline-flex; align-items: center; gap: 8px; border: 0; cursor: pointer; text-decoration: none; font: inherit; font-weight: 700;
    padding: 13px 26px; border-radius: 999px; background: var(--tf-accent); color: #fff; transition: transform .25s, box-shadow .25s; }
  .btn:hover { transform: translateY(-2px); box-shadow: 0 14px 30px -12px var(--tf-accent); }
  .btn.ghost { background: transparent; color: inherit; border: 1px solid currentColor; }
  .dark { background: radial-gradient(1000px 500px at 85% -10%, #2c1d55 0, transparent 60%), #0f0c18; color: var(--tf-ivory); }
  .skel { background: linear-gradient(90deg, #8881 0, #8882 50%, #8881 100%); background-size: 200% 100%; animation: sk 1.4s infinite; border-radius: 14px; }
  @keyframes sk { to { background-position: -200% 0; } }
  @media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation: none !important; transition: none !important; } }
`, l = () => window.Salla, b = () => {
  var e, t, r, i, n;
  try {
    const o = ((t = (e = l()) == null ? void 0 : e.lang) == null ? void 0 : t.locale) ?? ((n = (i = (r = l()) == null ? void 0 : r.config) == null ? void 0 : i.get) == null ? void 0 : n.call(i, "user.language_code"));
    if (typeof o == "string" && o) return o.slice(0, 2);
  } catch {
  }
  return (document.documentElement.lang || "ar").slice(0, 2);
}, a = (e) => {
  if (e == null) return "";
  if (typeof e == "string") {
    const t = e.trim();
    if (t.startsWith("{") && t.endsWith("}"))
      try {
        return a(JSON.parse(t));
      } catch {
      }
    return e;
  }
  if (typeof e == "number" || typeof e == "boolean") return String(e);
  if (typeof e == "object") {
    const t = e, r = t[b()] ?? t.ar ?? t.en ?? Object.values(t).find((i) => typeof i == "string" && i);
    return typeof r == "string" ? r : "";
  }
  return "";
};
function y(e, t, r = 0.25) {
  if (!("IntersectionObserver" in window)) {
    t();
    return;
  }
  const i = new IntersectionObserver((n) => {
    n.some((o) => o.isIntersecting) && (i.disconnect(), t());
  }, { threshold: r });
  i.observe(e);
}
const v = (e) => e ? `--tf-custom:${e}` : "";
var w = Object.defineProperty, g = (e, t, r, i) => {
  for (var n = void 0, o = e.length - 1, d; o >= 0; o--)
    (d = e[o]) && (n = d(t, r, n) || n);
  return n && w(t, r, n), n;
};
const c = class c extends m {
  constructor() {
    super(...arguments), this.seen = !1;
  }
  firstUpdated() {
    y(this, () => this.seen = !0, 0.35);
  }
  render() {
    const t = this.config ?? {}, r = (a(t.quote) || "كل قطعة نرسلها تحمل جزء منا.").split(/\s+/);
    return s`<div class="wrap" style=${v(t.color)}><div class="box dark ${this.seen ? "seen" : ""}">
      ${t.image ? s`<div class="ph"><img src=${t.image} alt=${a(t.name)} loading="lazy" /></div>` : s`<span></span>`}
      <div><span class="qm" aria-hidden="true">“</span><q>${r.map((i, n) => s`<span style="transition-delay:${n * 0.05}s">${i} </span>`)}</q>
        ${a(t.name) ? s`<div class="sig" aria-hidden="true">${a(t.name)}</div><div class="nm">${a(t.name)}</div>` : ""}${a(t.role) ? s`<div class="rl">${a(t.role)}</div>` : ""}</div></div></div>`;
  }
};
c.styles = [h, f`
    .box { display: grid; grid-template-columns: 300px 1fr; gap: clamp(24px, 5vw, 70px); align-items: center; padding: clamp(28px, 5vw, 64px); border-radius: 30px; position: relative; overflow: hidden; }
    @media (max-width: 760px) { .box { grid-template-columns: 1fr; text-align: center; } .ph { margin: 0 auto; } }
    .ph { width: min(300px, 70vw); aspect-ratio: 4/5; border-radius: 160px 160px 24px 24px; overflow: hidden; border: 1px solid #ffffff2a; padding: 8px; }
    .ph img { width: 100%; height: 100%; object-fit: cover; border-radius: 150px 150px 18px 18px; filter: grayscale(.25); }
    .qm { font-size: 120px; line-height: .6; color: var(--tf-accent); font-family: Georgia, serif; height: 50px; display: block; }
    q { quotes: none; display: block; font-size: clamp(19px, 2.6vw, 30px); line-height: 1.75; font-weight: 500; }
    q span { opacity: .08; transition: opacity .6s; } .seen q span { opacity: 1; }
    .sig { margin-top: 26px; font-family: 'Brush Script MT', 'Segoe Script', cursive; font-size: 34px; color: var(--tf-accent); }
    .nm { font-weight: 800; } .rl { opacity: .6; font-size: 14px; }
  `];
let p = c;
g([
  x({ type: Object })
], p.prototype, "config");
g([
  u()
], p.prototype, "seen");
typeof p < "u" && p.registerSallaComponent("salla-sard-founder");
export {
  p as default
};
