import { css as d, LitElement as g, html as p } from "lit";
import { property as m } from "lit/decorators.js";
const x = d`
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
`, f = () => window.Salla, b = () => {
  var e, t, n, r, i;
  try {
    const a = ((t = (e = f()) == null ? void 0 : e.lang) == null ? void 0 : t.locale) ?? ((i = (r = (n = f()) == null ? void 0 : n.config) == null ? void 0 : r.get) == null ? void 0 : i.call(r, "user.language_code"));
    if (typeof a == "string" && a) return a.slice(0, 2);
  } catch {
  }
  return (document.documentElement.lang || "ar").slice(0, 2);
}, o = (e) => {
  if (e == null) return "";
  if (typeof e == "string") {
    const t = e.trim();
    if (t.startsWith("{") && t.endsWith("}"))
      try {
        return o(JSON.parse(t));
      } catch {
      }
    return e;
  }
  if (typeof e == "number" || typeof e == "boolean") return String(e);
  if (typeof e == "object") {
    const t = e, n = t[b()] ?? t.ar ?? t.en ?? Object.values(t).find((r) => typeof r == "string" && r);
    return typeof n == "string" ? n : "";
  }
  return "";
}, u = (e) => e ? `--tf-custom:${e}` : "";
var y = Object.defineProperty, h = (e, t, n, r) => {
  for (var i = void 0, a = e.length - 1, l; a >= 0; a--)
    (l = e[a]) && (i = l(t, n, i) || i);
  return i && y(t, n, i), i;
};
const c = class c extends g {
  mv(t) {
    const n = t.currentTarget, r = n.getBoundingClientRect();
    n.style.setProperty("--mx", `${t.clientX - r.left}px`), n.style.setProperty("--my", `${t.clientY - r.top}px`);
  }
  render() {
    const t = this.config ?? {}, n = (t.items ?? []).filter((r) => o(r.title));
    return p`<div class="${t.dark ? "dark dk" : ""}"><div class="wrap" style=${u(t.color)}><span class="eyebrow">💎 قيمنا</span><h2 class="title">${o(t.title) || "اللي يميزنا"}</h2>${o(t.subtitle) ? p`<p class="sub">${o(t.subtitle)}</p>` : ""}
      <div class="grid">${n.map((r, i) => p`<div class="v" @pointermove=${this.mv}><span class="n">${String(i + 1).padStart(2, "0")}</span><span class="e">${r.emoji || "✦"}</span><b>${o(r.title)}</b>${o(r.text) ? p`<p>${o(r.text)}</p>` : ""}</div>`)}</div></div></div>`;
  }
};
c.styles = [x, d`
    .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; }
    .v { position: relative; padding: 30px 26px; border-radius: 24px; background: #fff; border: 1px solid #0000000f; overflow: hidden; transition: transform .4s, box-shadow .4s; }
    .dk .v { background: #ffffff08; border-color: #ffffff14; }
    .v::before { content: ''; position: absolute; inset: 0; background: radial-gradient(300px circle at var(--mx, 50%) var(--my, 0%), color-mix(in srgb, var(--tf-accent) 22%, transparent), transparent 60%); opacity: 0; transition: opacity .4s; }
    .v:hover { transform: translateY(-6px); box-shadow: 0 30px 50px -30px #0006; } .v:hover::before { opacity: 1; }
    .n { position: absolute; top: 18px; inset-inline-end: 22px; font-size: 52px; font-weight: 800; opacity: .07; }
    .e { font-size: 34px; display: block; margin-bottom: 14px; } b { font-size: 19px; display: block; margin-bottom: 8px; position: relative; } p { margin: 0; opacity: .7; line-height: 1.85; position: relative; }
  `];
let s = c;
h([
  m({ type: Object })
], s.prototype, "config");
typeof s < "u" && s.registerSallaComponent("salla-sard-values");
export {
  s as default
};
