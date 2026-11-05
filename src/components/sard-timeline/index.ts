import { css, html, LitElement } from 'lit';
import { property, state } from 'lit/decorators.js';
import { base } from '../../shared/styles';
import { style, localizedString } from '../../shared/salla';

type M = { year?: unknown; title?: unknown; text?: unknown; image?: string };
/** Milestones timeline: the line draws itself as you scroll and each stop lights up. */
export default class SardTimeline extends LitElement {
  @property({ type: Object }) config?: { title?: unknown; subtitle?: unknown; items?: M[]; color?: string };
  @state() private prog = 0;
  @state() private lit = new Set<number>();
  private io?: IntersectionObserver;
  static styles = [base, css`
    .tl { position: relative; padding-block: 10px; }
    .ln, .fl { position: absolute; top: 0; bottom: 0; inset-inline-start: 50%; width: 2px; margin-inline-start: -1px; background: #0000001a; } .fl { bottom: auto; background: var(--tf-gold); }
    .it { position: relative; display: grid; grid-template-columns: 1fr 64px 1fr; align-items: center; margin: 26px 0; }
    .it:nth-child(odd of .it) .cd { grid-column: 1; text-align: end; } .it:nth-child(even of .it) .cd { grid-column: 3; }
    .dot { grid-column: 2; grid-row: 1; justify-self: center; width: 18px; height: 18px; border-radius: 50%; background: #fff; border: 2px solid #0000002a; transition: .5s; z-index: 1; }
    .on .dot { background: var(--tf-accent); border-color: var(--tf-accent); box-shadow: 0 0 0 8px color-mix(in srgb, var(--tf-accent) 20%, transparent); }
    .cd { grid-row: 1; opacity: .25; transform: translateY(20px); transition: .8s cubic-bezier(.2,.8,.2,1); } .on .cd { opacity: 1; transform: none; }
    .yr { font-size: clamp(30px, 4vw, 48px); font-weight: 800; background: var(--tf-gold); -webkit-background-clip: text; background-clip: text; color: transparent; line-height: 1.1; }
    .cd b { display: block; font-size: 19px; margin: 4px 0; } .cd p { margin: 0; opacity: .7; line-height: 1.8; } .cd img { width: 100%; max-width: 320px; border-radius: 18px; margin-top: 12px; aspect-ratio: 16/10; object-fit: cover; }
    @media (max-width: 720px) { .ln, .fl { inset-inline-start: 14px; } .it { grid-template-columns: 30px 1fr; } .dot { grid-column: 1; justify-self: start; margin-inline-start: 5px; } .it .cd { grid-column: 2 !important; text-align: start !important; } }
  `];
  private onScroll = () => { const r = this.renderRoot.querySelector('.tl')?.getBoundingClientRect(); if (r) this.prog = Math.max(0, Math.min(1, (innerHeight * 0.6 - r.top) / r.height)); };
  connectedCallback() { super.connectedCallback(); addEventListener('scroll', this.onScroll, { passive: true }); }
  disconnectedCallback() { super.disconnectedCallback(); removeEventListener('scroll', this.onScroll); this.io?.disconnect(); }
  updated() {
    this.io?.disconnect();
    this.io = new IntersectionObserver((es) => { const s = new Set(this.lit); es.forEach((e) => e.isIntersecting && s.add(Number((e.target as HTMLElement).dataset.i))); if (s.size !== this.lit.size) this.lit = s; }, { rootMargin: '0px 0px -12% 0px' });
    this.renderRoot.querySelectorAll('.it').forEach((el) => this.io!.observe(el)); this.onScroll();
  }
  render() {
    const c = this.config ?? {}; const items = (c.items ?? []).filter((i) => localizedString(i.title) || localizedString(i.year));
    return html`<div class="wrap" style=${style(c.color)}><div style="text-align:center"><span class="eyebrow">🕰️ رحلتنا</span><h2 class="title">${localizedString(c.title) || 'محطات صنعتنا'}</h2>${localizedString(c.subtitle) ? html`<p class="sub">${localizedString(c.subtitle)}</p>` : ''}</div>
      <div class="tl"><div class="ln"></div><div class="fl" style="height:${this.prog * 100}%"></div>
        ${items.map((m, i) => html`<div class="it ${this.lit.has(i) ? 'on' : ''}" data-i=${i}><span class="dot"></span><div class="cd"><div class="yr">${localizedString(m.year)}</div><b>${localizedString(m.title)}</b>${localizedString(m.text) ? html`<p>${localizedString(m.text)}</p>` : ''}${m.image ? html`<img src=${m.image} alt="" loading="lazy" />` : ''}</div></div>`)}</div></div>`;
  }
}
