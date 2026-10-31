import { css as d, LitElement as x, html as p } from "lit";
import { property as g, state as m } from "lit/decorators.js";
const h = d`
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
`, a = (t) => String(t && typeof t == "object" ? t[(document.documentElement.lang || "ar").slice(0, 2)] ?? t.ar ?? "" : t ?? "");
function b(t, e, r = 0.25) {
  if (!("IntersectionObserver" in window)) {
    e();
    return;
  }
  const n = new IntersectionObserver((i) => {
    i.some((s) => s.isIntersecting) && (n.disconnect(), e());
  }, { threshold: r });
  n.observe(t);
}
const u = (t) => t ? `--tf-custom:${t}` : "";
var v = Object.defineProperty, f = (t, e, r, n) => {
  for (var i = void 0, s = t.length - 1, c; s >= 0; s--)
    (c = t[s]) && (i = c(e, r, i) || i);
  return i && v(e, r, i), i;
};
const l = class l extends x {
  constructor() {
    super(...arguments), this.seen = !1;
  }
  firstUpdated() {
    b(this, () => this.seen = !0, 0.3);
  }
  render() {
    const e = this.config ?? {}, r = (e.steps ?? []).filter((n) => a(n.title)).slice(0, 6);
    return p`<div class="wrap ${this.seen ? "seen" : ""}" style=${u(e.color)}><div style="text-align:center"><span class="eyebrow">🪡 كيف نصنعها</span><h2 class="title">${a(e.title) || "من الفكرة لين باب بيتك"}</h2>${a(e.subtitle) ? p`<p class="sub">${a(e.subtitle)}</p>` : ""}</div>
      <div class="row" style="--n:${r.length || 1}"><div class="ln"><i></i></div>
        ${r.map((n, i) => p`<div class="st" style="transition-delay:${0.25 * i}s"><div class="ic">${n.emoji || "✦"}<small>${i + 1}</small></div><div><b>${a(n.title)}</b>${a(n.text) ? p`<p>${a(n.text)}</p>` : ""}</div></div>`)}</div></div>`;
  }
};
l.styles = [h, d`
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
let o = l;
f([
  g({ type: Object })
], o.prototype, "config");
f([
  m()
], o.prototype, "seen");
typeof o < "u" && o.registerSallaComponent("salla-sard-process");
export {
  o as default
};
