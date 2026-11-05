import { css, html, LitElement } from 'lit';
import { property, state } from 'lit/decorators.js';
import { base } from '../../shared/styles';
import { onView, style, localizedString } from '../../shared/salla';

type St = { emoji?: string; title?: unknown; text?: unknown };
/** "How it's made / how to order" steps joined by a line that draws in on view. */
export default class SardProcess extends LitElement {
  @property({ type: Object }) config?: { title?: unknown; subtitle?: unknown; steps?: St[]; color?: string };
  @state() private seen = false;
  static styles = [base, css`
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
  firstUpdated() { onView(this, () => (this.seen = true), 0.3); }
  render() {
    const c = this.config ?? {}; const steps = (c.steps ?? []).filter((s) => localizedString(s.title)).slice(0, 6);
    return html`<div class="wrap ${this.seen ? 'seen' : ''}" style=${style(c.color)}><div style="text-align:center"><span class="eyebrow">🪡 كيف نصنعها</span><h2 class="title">${localizedString(c.title) || 'من الفكرة لين باب بيتك'}</h2>${localizedString(c.subtitle) ? html`<p class="sub">${localizedString(c.subtitle)}</p>` : ''}</div>
      <div class="row" style="--n:${steps.length || 1}"><div class="ln"><i></i></div>
        ${steps.map((s, i) => html`<div class="st" style="transition-delay:${0.25 * i}s"><div class="ic">${s.emoji || '✦'}<small>${i + 1}</small></div><div><b>${localizedString(s.title)}</b>${localizedString(s.text) ? html`<p>${localizedString(s.text)}</p>` : ''}</div></div>`)}</div></div>`;
  }
}
