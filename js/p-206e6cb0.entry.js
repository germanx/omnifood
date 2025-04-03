import { r as o, h as i, H as t, c as n } from './p-6f4eae92.js';
import { i as r, g as s, b as e } from './p-27972752.js';
const c = (o) => {
    if (1 === o.nodeType) {
      if ('script' === o.nodeName.toLowerCase()) return !1;
      for (let i = 0; i < o.attributes.length; i++) {
        const t = o.attributes[i].value;
        if (r(t) && 0 === t.toLowerCase().indexOf('on')) return !1;
      }
      for (let i = 0; i < o.childNodes.length; i++)
        if (!c(o.childNodes[i])) return !1;
    }
    return !0;
  },
  a = new Map(),
  l = new Map(),
  h = class {
    constructor(i) {
      o(this, i),
        (this.isVisible = !1),
        (this.mode = d()),
        (this.lazy = !1),
        (this.sanitize = !0);
    }
    connectedCallback() {
      this.waitUntilVisible(this.el, '50px', () => {
        (this.isVisible = !0), this.loadIcon();
      });
    }
    disconnectedCallback() {
      this.io && (this.io.disconnect(), (this.io = void 0));
    }
    waitUntilVisible(o, i, t) {
      if (
        this.lazy &&
        'undefined' != typeof window &&
        window.IntersectionObserver
      ) {
        const n = (this.io = new window.IntersectionObserver(
          (o) => {
            o[0].isIntersecting && (n.disconnect(), (this.io = void 0), t());
          },
          { rootMargin: i }
        ));
        n.observe(o);
      } else t();
    }
    loadIcon() {
      if (this.isVisible) {
        const o = s(this);
        o &&
          (a.has(o)
            ? (this.svgContent = a.get(o))
            : ((o, i) => {
                let t = l.get(o);
                if (!t) {
                  if (
                    'undefined' == typeof fetch ||
                    'undefined' == typeof document
                  )
                    return a.set(o, ''), Promise.resolve();
                  (t = fetch(o).then((t) => {
                    if (t.ok)
                      return t.text().then((t) => {
                        t &&
                          !1 !== i &&
                          (t = ((o) => {
                            const i = document.createElement('div');
                            i.innerHTML = o;
                            for (let n = i.childNodes.length - 1; n >= 0; n--)
                              'svg' !==
                                i.childNodes[n].nodeName.toLowerCase() &&
                                i.removeChild(i.childNodes[n]);
                            const t = i.firstElementChild;
                            if (t && 'svg' === t.nodeName.toLowerCase()) {
                              const o = t.getAttribute('class') || '';
                              if (
                                (t.setAttribute(
                                  'class',
                                  (o + ' s-ion-icon').trim()
                                ),
                                c(t))
                              )
                                return i.innerHTML;
                            }
                            return '';
                          })(t)),
                          a.set(o, t || '');
                      });
                    a.set(o, '');
                  })),
                    l.set(o, t);
                }
                return t;
              })(o, this.sanitize).then(() => (this.svgContent = a.get(o))));
      }
      if (!this.ariaLabel && 'true' !== this.ariaHidden) {
        const o = e(this.name, this.icon, this.mode, this.ios, this.md);
        o && (this.ariaLabel = o.replace(/\-/g, ' '));
      }
    }
    render() {
      const o = this.mode || 'md',
        n =
          this.flipRtl ||
          (this.ariaLabel &&
            (this.ariaLabel.indexOf('arrow') > -1 ||
              this.ariaLabel.indexOf('chevron') > -1) &&
            !1 !== this.flipRtl);
      return i(
        t,
        {
          role: 'img',
          class: Object.assign(Object.assign({ [o]: !0 }, f(this.color)), {
            ['icon-' + this.size]: !!this.size,
            'flip-rtl': !!n && 'rtl' === this.el.ownerDocument.dir,
          }),
        },
        i(
          'div',
          this.svgContent
            ? { class: 'icon-inner', innerHTML: this.svgContent }
            : { class: 'icon-inner' }
        )
      );
    }
    static get assetsDirs() {
      return ['svg'];
    }
    get el() {
      return n(this);
    }
    static get watchers() {
      return { name: ['loadIcon'], src: ['loadIcon'], icon: ['loadIcon'] };
    }
  },
  d = () =>
    ('undefined' != typeof document &&
      document.documentElement.getAttribute('mode')) ||
    'md',
  f = (o) => (o ? { 'ion-color': !0, ['ion-color-' + o]: !0 } : null);
h.style =
  ':host{display:inline-block;width:1em;height:1em;contain:strict;fill:currentColor;-webkit-box-sizing:content-box !important;box-sizing:content-box !important}:host .ionicon{stroke:currentColor}.ionicon-fill-none{fill:none}.ionicon-stroke-width{stroke-width:32px;stroke-width:var(--ionicon-stroke-width, 32px)}.icon-inner,.ionicon,svg{display:block;height:100%;width:100%}:host(.flip-rtl) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}:host(.icon-small){font-size:18px !important}:host(.icon-large){font-size:32px !important}:host(.ion-color){color:var(--ion-color-base) !important}:host(.ion-color-primary){--ion-color-base:var(--ion-color-primary, #3880ff)}:host(.ion-color-secondary){--ion-color-base:var(--ion-color-secondary, #0cd1e8)}:host(.ion-color-tertiary){--ion-color-base:var(--ion-color-tertiary, #f4a942)}:host(.ion-color-success){--ion-color-base:var(--ion-color-success, #10dc60)}:host(.ion-color-warning){--ion-color-base:var(--ion-color-warning, #ffce00)}:host(.ion-color-danger){--ion-color-base:var(--ion-color-danger, #f14141)}:host(.ion-color-light){--ion-color-base:var(--ion-color-light, #f4f5f8)}:host(.ion-color-medium){--ion-color-base:var(--ion-color-medium, #989aa2)}:host(.ion-color-dark){--ion-color-base:var(--ion-color-dark, #222428)}';
export { h as ion_icon };
