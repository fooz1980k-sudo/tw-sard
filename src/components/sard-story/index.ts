import { css, html, LitElement } from 'lit';
import { property, state } from 'lit/decorators.js';
import { base } from '../../shared/styles';
import { onView, style, localizedString } from '../../shared/salla';

/** Editorial story block: layered images with scroll parallax and a drop-cap paragraph. */
export default class SardStory extends LitElement {
  @property({ type: Object }) config?: { eyebrow?: unknown; title?: unknown; text?: unknown; image?: string; image2?: string; button?: unknown; link?: string; flip?: boolean; color?: string };
  @state() private y = 0;
  @state() private seen = false;
  private raf = 0;
  static styles = [base, css`
    .g { display: grid; grid-template-columns: 1fr 1fr; gap: clamp(28px, 6vw, 90px); align-items: center; } .flip .media { order: 2; }
    @media (max-width: 860px) { .g { grid-template-columns: 1fr; } .flip .media { order: 0; } }
    .media { position: relative; min-height: clamp(360px, 48vw, 600px); }
    .a, .b { position: absolute; border-radius: 26px; overflow: hidden; box-shadow: 0 40px 80px -40px #0008; } .a { inset: 0 18% 12% 0; } .b { width: 46%; aspect-ratio: 3/4; inset-inline-end: 0; bottom: 0; border: 8px solid var(--bgc, #faf7f1); }
    .a img, .b img { width: 100%; height: 115%; object-fit: cover; will-change: transform; }
    .txt > * { opacity: 0; transform: translateY(24px); transition: opacity .9s, transform .9s cubic-bezier(.2,.8,.2,1); } .seen .txt > * { opacity: 1; transform: none; }
    .seen .txt > :nth-child(2) { transition-delay: .12s; } .seen .txt > :nth-child(3) { transition-delay: .24s; } .seen .txt > :nth-child(4) { transition-delay: .36s; }
    h2.title { font-size: clamp(30px, 4.6vw, 56px); line-height: 1.2; }
    .p { font-size: clamp(15px, 1.7vw, 18px); line-height: 2.05; opacity: .8; white-space: pre-line; margin: 0 0 28px; }
    .p { border-inline-start: 3px solid var(--tf-accent); padding-inline-start: 20px; }
  `];
  private onScroll = () => { cancelAnimationFrame(this.raf); this.raf = requestAnimationFrame(() => { const r = this.getBoundingClientRect(); this.y = (r.top + r.height / 2 - innerHeight / 2) / innerHeight; }); };
  connectedCallback() { super.connectedCallback(); addEventListener('scroll', this.onScroll, { passive: true }); }
  disconnectedCallback() { super.disconnectedCallback(); removeEventListener('scroll', this.onScroll); }
  firstUpdated() { onView(this, () => (this.seen = true), 0.2); this.onScroll(); }
  render() {
    const c = this.config ?? {}; const y = Math.max(-1, Math.min(1, this.y));
    return html`<div class="wrap ${this.seen ? 'seen' : ''}" style=${style(c.color)}><div class="g ${c.flip ? 'flip' : ''}">
      <div class="media">${c.image ? html`<div class="a"><img src=${c.image} alt="" loading="lazy" style="transform:translateY(${y * -40}px)" /></div>` : ''}
        ${c.image2 ? html`<div class="b"><img src=${c.image2} alt="" loading="lazy" style="transform:translateY(${y * 50}px)" /></div>` : ''}</div>
      <div class="txt"><span class="eyebrow">${localizedString(c.eyebrow) || 'حكايتنا'}</span><h2 class="title">${localizedString(c.title) || 'بدأنا بفكرة… وصارت تُحفة'}</h2>
        <p class="p">${localizedString(c.text)}</p>${localizedString(c.button) && c.link ? html`<a class="btn ghost" href=${c.link}>${localizedString(c.button)} ←</a>` : html`<span></span>`}</div></div></div>`;
  }
}
