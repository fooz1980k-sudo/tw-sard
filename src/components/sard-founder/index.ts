import { css, html, LitElement } from 'lit';
import { property, state } from 'lit/decorators.js';
import { base } from '../../shared/styles';
import { onView, style, txt } from '../../shared/salla';

/** Founder's note: portrait, a quote that writes itself word by word, and a signature. */
export default class SardFounder extends LitElement {
  @property({ type: Object }) config?: { image?: string; quote?: unknown; name?: unknown; role?: unknown; color?: string };
  @state() private seen = false;
  static styles = [base, css`
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
  firstUpdated() { onView(this, () => (this.seen = true), 0.35); }
  render() {
    const c = this.config ?? {}; const words = (txt(c.quote) || 'كل قطعة نرسلها تحمل جزء منا.').split(/\s+/);
    return html`<div class="wrap" style=${style(c.color)}><div class="box dark ${this.seen ? 'seen' : ''}">
      ${c.image ? html`<div class="ph"><img src=${c.image} alt=${txt(c.name)} loading="lazy" /></div>` : html`<span></span>`}
      <div><span class="qm" aria-hidden="true">“</span><q>${words.map((w, i) => html`<span style="transition-delay:${i * 0.05}s">${w} </span>`)}</q>
        ${txt(c.name) ? html`<div class="sig" aria-hidden="true">${txt(c.name)}</div><div class="nm">${txt(c.name)}</div>` : ''}${txt(c.role) ? html`<div class="rl">${txt(c.role)}</div>` : ''}</div></div></div>`;
  }
}
