import { LitElement } from 'lit';
LitElement.registerSallaComponent = function (n) { if (!customElements.get(n)) customElements.define(n, this); };
await import('../dist/sard-story.js');
await import('../dist/sard-timeline.js');
await import('../dist/sard-founder.js');
await import('../dist/sard-values.js');
await import('../dist/sard-process.js');
window.__ready = true;
