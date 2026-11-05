import { css as f, LitElement as x, html as p } from "lit";
import { property as m, state as h } from "lit/decorators.js";
const u = f`
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
`, d = () => window.Salla, b = () => {
  var e, t, r, i, n;
  try {
    const o = ((t = (e = d()) == null ? void 0 : e.lang) == null ? void 0 : t.locale) ?? ((n = (i = (r = d()) == null ? void 0 : r.config) == null ? void 0 : i.get) == null ? void 0 : n.call(i, "user.language_code"));
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
  for (var n = void 0, o = e.length - 1, c; o >= 0; o--)
    (c = e[o]) && (n = c(t, r, n) || n);
  return n && w(t, r, n), n;
};
const l = class l extends x {
  constructor() {
    super(...arguments), this.seen = !1;
  }
  firstUpdated() {
    y(this, () => this.seen = !0, 0.3);
  }
  render() {
    const t = this.config ?? {}, r = (t.steps ?? []).filter((i) => a(i.title)).slice(0, 6);
    return p`<div class="wrap ${this.seen ? "seen" : ""}" style=${v(t.color)}><div style="text-align:center"><span class="eyebrow">🪡 كيف نصنعها</span><h2 class="title">${a(t.title) || "من الفكرة لين باب بيتك"}</h2>${a(t.subtitle) ? p`<p class="sub">${a(t.subtitle)}</p>` : ""}</div>
      <div class="row" style="--n:${r.length || 1}"><div class="ln"><i></i></div>
        ${r.map((i, n) => p`<div class="st" style="transition-delay:${0.25 * n}s"><div class="ic">${i.emoji || "✦"}<small>${n + 1}</small></div><div><b>${a(i.title)}</b>${a(i.text) ? p`<p>${a(i.text)}</p>` : ""}</div></div>`)}</div></div>`;
  }
};
l.styles = [u, f`
    .row { display: grid; grid-template-columns: repeat(var(--n), 1fr); gap: 18px; position: relative; text-align: center; }
    .ln { position: absolute; top: 40px; inset-inline: calc(50% / var(--n)); height: 2px; background: #00000014; } .ln i { display: block; height: 100%; width: 0; background: var(--tf-gold); transition: width 1.8s cubic-bezier(.2,.8,.2,1); }
    .seen .ln i { width: 100%; }
    .st { position: relative; opacity: 0; transform: translateY(18px); transition: .7s; } .seen .st { opacity: 1; transform: none; }
    .ic { width: 80px; height: 80px; margin: 0 auto 16px; border-radius: 50%; display: grid; place-items: center; font-size: 32px; background: #fff; border: 1px solid #0000001a; box-shadow: 0 16px 34px -20px #0006; position: relative; }
    .ic small { position: absolute; top: -4px; inset-inline-end: -4px; width: 28px; height: 28px; border-radius: 50%; background: var(--tf-accent); color: #fff; font-size: 13px; font-weight: 800; display: grid; place-items: center; }
    b { display: block; font-size: 17px; margin-bottom: 6px; } p { margin: 0 auto; opacity: .7; line-height: 1.8; max-width: 26ch; font-size: 14px; }
    @media (max-width: 760px) { .row { grid-template-columns: 1fr; text-align: start; gap: 22px; } .ln { inset-inline-start: 40px; inset-inline-end: auto; top: 40px; bottom: 40px; width: 2px; height: auto; } .ln i { width: 100% !important; height: 0; transition: height 1.8s; } .seen .ln i { height: 100%; }
      .st { display: grid; grid-template-columns: 80px 1fr; gap: 16px; align-items: center; } .ic { margin: 0; } p { margin: 0; } }
  `];
let s = l;
g([
  m({ type: Object })
], s.prototype, "config");
g([
  h()
], s.prototype, "seen");
typeof s < "u" && s.registerSallaComponent("salla-sard-process");
export {
  s as default
};
