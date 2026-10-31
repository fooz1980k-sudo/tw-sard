import { css, html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { base } from '../../shared/styles';
import { style, txt } from '../../shared/salla';

type V = { emoji?: string; title?: unknown; text?: unknown };
/** Brand values grid with a light that follows the cursor across each card. */
export default class SardValues extends LitElement {
  @property({ type: Object }) config?: { title?: unknown; subtitle?: unknown; items?: V[]; dark?: boolean; color?: string };
  static styles = [base, css`
    .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; }
    .v { position: relative; padding: 30px 26px; border-radius: 24px; background: #fff; border: 1px solid #0000000f; overflow: hidden; transition: transform .4s, box-shadow .4s; }
    .dk .v { background: #ffffff08; border-color: #ffffff14; }
    .v::before { content: ''; position: absolute; inset: 0; background: radial-gradient(300px circle at var(--mx, 50%) var(--my, 0%), color-mix(in srgb, var(--tf-accent) 22%, transparent), transparent 60%); opacity: 0; transition: opacity .4s; }
    .v:hover { transform: translateY(-6px); box-shadow: 0 30px 50px -30px #0006; } .v:hover::before { opacity: 1; }
    .n { position: absolute; top: 18px; inset-inline-end: 22px; font-size: 52px; font-weight: 800; opacity: .07; }
    .e { font-size: 34px; display: block; margin-bottom: 14px; } b { font-size: 19px; display: block; margin-bottom: 8px; position: relative; } p { margin: 0; opacity: .7; line-height: 1.85; position: relative; }
  `];
  private mv(e: PointerEvent) { const el = e.currentTarget as HTMLElement; const r = el.getBoundingClientRect(); el.style.setProperty('--mx', `${e.clientX - r.left}px`); el.style.setProperty('--my', `${e.clientY - r.top}px`); }
  render() {
    const c = this.config ?? {}; const items = (c.items ?? []).filter((i) => txt(i.title));
    return html`<div class="${c.dark ? 'dark dk' : ''}"><div class="wrap" style=${style(c.color)}><span class="eyebrow">💎 قيمنا</span><h2 class="title">${txt(c.title) || 'اللي يميزنا'}</h2>${txt(c.subtitle) ? html`<p class="sub">${txt(c.subtitle)}</p>` : ''}
      <div class="grid">${items.map((v, i) => html`<div class="v" @pointermove=${this.mv}><span class="n">${String(i + 1).padStart(2, '0')}</span><span class="e">${v.emoji || '✦'}</span><b>${txt(v.title)}</b>${txt(v.text) ? html`<p>${txt(v.text)}</p>` : ''}</div>`)}</div></div></div>`;
  }
}
