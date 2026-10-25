import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header class="topbar">
      <a class="brand" href="/" aria-label="Paperwise home">
        <span class="brand-mark" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M7 3.75h7l4 4v12.5H7a2 2 0 0 1-2-2v-12a2.5 2.5 0 0 1 2-2.5Z" stroke="currentColor" stroke-width="1.7" />
            <path d="M14 4v4h4M8.5 12h7M8.5 15.5h7" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" />
          </svg>
        </span>
        <span>paperwise<span class="brand-period">.</span></span>
      </a>
      <span class="topbar-note"><span class="status-dot"></span> A quieter way to prepare</span>
    </header>
  `,
  styles: `
    .topbar { height: 70px; padding: 0 max(24px, calc((100% - 1120px) / 2)); display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid #e3e9e3; background: rgba(255,255,255,.72); }
    .brand { display: inline-flex; align-items: center; gap: 10px; color: #192b27; text-decoration: none; font-size: 18px; font-weight: 700; letter-spacing: 0; }
    .brand-mark { display: grid; place-items: center; width: 34px; height: 34px; border-radius: 9px; color: #fff; background: #17634d; }
    .brand-mark svg { width: 20px; height: 20px; }
    .brand-period { color: #e87960; }
    .topbar-note { display: flex; align-items: center; gap: 8px; color: #6d7d77; font-size: 12px; }
    .status-dot { width: 7px; height: 7px; border-radius: 50%; background: #e87960; }
    @media (max-width: 480px) { .topbar { height: 62px; padding-inline: 16px; } .topbar-note { font-size: 11px; } }
  `,
})
export class AppHeader {}