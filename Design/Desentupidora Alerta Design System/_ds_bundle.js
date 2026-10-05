/* @ds-bundle: {"format":4,"namespace":"DesentupidoraAlertaDesignSystem_e6b749","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"IconButton","sourcePath":"components/actions/IconButton.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"WhatsAppContact","sourcePath":"components/brand/WhatsAppContact.jsx"},{"name":"WhatsAppIcon","sourcePath":"components/brand/WhatsAppIcon.jsx"},{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"CheckList","sourcePath":"components/display/CheckList.jsx"},{"name":"Tag","sourcePath":"components/display/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"TopBar","sourcePath":"components/navigation/TopBar.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"7ad7109ed72d","components/actions/IconButton.jsx":"e559100afe2b","components/brand/Logo.jsx":"c95801e647bb","components/brand/WhatsAppContact.jsx":"f8b6a7dc6e29","components/brand/WhatsAppIcon.jsx":"199c8e2eacfe","components/display/Badge.jsx":"742dff900975","components/display/Card.jsx":"d1fafec7c999","components/display/CheckList.jsx":"0bd7283a281a","components/display/Tag.jsx":"860a445d6341","components/feedback/Dialog.jsx":"6238c769a92f","components/feedback/Toast.jsx":"6a63d510f46b","components/feedback/Tooltip.jsx":"f848dd389af6","components/forms/Checkbox.jsx":"9b137e25f103","components/forms/Input.jsx":"aeb2dc182c14","components/forms/Select.jsx":"b180870e74ce","components/forms/Switch.jsx":"2cefc3fd68ff","components/navigation/NavBar.jsx":"15cecadac942","components/navigation/Tabs.jsx":"feec0f38d227","components/navigation/TopBar.jsx":"feb8a954c581","ui_kits/orcamento/quote-document.jsx":"31da77cc4489","ui_kits/social/post-templates.jsx":"0bf13e18cd6c","ui_kits/social/story-templates.jsx":"f84f9fba7c69","ui_kits/website/site-footer.jsx":"b40f4c5cee5f","ui_kits/website/site-hero.jsx":"b9df70ee1f1c","ui_kits/website/site-services.jsx":"571eefc699a3"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DesentupidoraAlertaDesignSystem_e6b749 = window.DesentupidoraAlertaDesignSystem_e6b749 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
const V = {
  primary: ['var(--brand-primary)', 'var(--white)', 'var(--brand-primary-hover)', 'transparent', 'none'],
  whatsapp: ['var(--cta-whatsapp)', 'var(--white)', 'var(--cta-whatsapp-hover)', 'transparent', 'var(--shadow-cta)'],
  lime: ['var(--brand-accent)', 'var(--forest-900)', 'var(--brand-accent-hover)', 'transparent', 'none'],
  deep: ['var(--brand-deep)', 'var(--white)', 'var(--forest-900)', 'transparent', 'none'],
  outline: ['transparent', 'var(--ink-900)', 'rgba(15,31,26,.06)', 'var(--ink-900)', 'none'],
  'outline-inverse': ['transparent', 'var(--white)', 'rgba(255,255,255,.1)', 'var(--border-on-dark)', 'none'],
  ghost: ['transparent', 'var(--brand-primary)', 'var(--gray-100)', 'transparent', 'none']
};
const S = {
  sm: [36, 16, 14],
  md: [46, 24, 16],
  lg: [56, 30, 19]
};
function Button({
  variant = 'primary',
  size = 'md',
  icon,
  iconRight,
  fullWidth,
  disabled,
  children,
  onClick,
  type = 'button',
  square,
  style
}) {
  const [h, setH] = React.useState(false),
    [p, setP] = React.useState(false);
  const [bg, fg, hb, bd, sh] = V[variant] || V.primary,
    [ht, px, fs] = S[size] || S.md;
  const sq = square ?? variant === 'outline';
  return /*#__PURE__*/React.createElement("button", {
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => {
      setH(false);
      setP(false);
    },
    onMouseDown: () => setP(true),
    onMouseUp: () => setP(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      height: ht,
      padding: `0 ${px}px`,
      width: fullWidth ? '100%' : undefined,
      background: h && !disabled ? hb : bg,
      color: fg,
      border: `1.5px solid ${bd}`,
      borderRadius: sq ? 'var(--radius-xs)' : 'var(--radius-pill)',
      boxShadow: sh,
      fontFamily: 'var(--font-sans)',
      fontWeight: sq ? 500 : 700,
      fontSize: fs,
      textTransform: sq ? 'uppercase' : 'none',
      letterSpacing: sq ? '.02em' : 0,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .45 : 1,
      transform: p && !disabled ? 'scale(.97)' : 'none',
      transition: 'background var(--dur-fast),transform var(--dur-fast)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, icon, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/IconButton.jsx
try { (() => {
const M = {
  primary: ['var(--brand-primary)', 'var(--white)', 'var(--brand-primary-hover)'],
  whatsapp: ['var(--cta-whatsapp)', 'var(--white)', 'var(--cta-whatsapp-hover)'],
  lime: ['var(--brand-accent)', 'var(--forest-900)', 'var(--brand-accent-hover)'],
  deep: ['var(--brand-deep)', 'var(--white)', 'var(--forest-900)'],
  ghost: ['transparent', 'var(--brand-primary)', 'var(--gray-100)']
};
function IconButton({
  icon,
  label,
  variant = 'primary',
  size = 44,
  onClick,
  disabled
}) {
  const [h, setH] = React.useState(false);
  const [bg, fg, hb] = M[variant] || M.primary;
  return /*#__PURE__*/React.createElement("button", {
    "aria-label": label,
    title: label,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      width: size,
      height: size,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: h && !disabled ? hb : bg,
      color: fg,
      border: 'none',
      borderRadius: '50%',
      cursor: 'pointer',
      opacity: disabled ? .45 : 1,
      transition: 'background var(--dur-fast)'
    }
  }, icon);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
const FILES = {
  dark: 'logo-alerta.png',
  light: 'logo-alerta-on-light.png',
  white: 'logo-alerta-white.png',
  symbol: 'symbol-alerta.png',
  'symbol-white': 'symbol-alerta-white.png'
};
function Logo({
  variant = 'dark',
  height = 40,
  base,
  alt = 'Alerta Gestão de Resíduos'
}) {
  const b = base ?? (typeof window !== 'undefined' && window.ALERTA_ASSET_BASE) ?? 'assets/';
  return /*#__PURE__*/React.createElement("img", {
    src: b + FILES[variant],
    alt: alt,
    style: {
      height,
      width: 'auto',
      display: 'block'
    }
  });
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/brand/WhatsAppIcon.jsx
try { (() => {
function WhatsAppIcon({
  size = 20,
  color = 'currentColor'
}) {
  const u = 'url(https://cdn.jsdelivr.net/npm/simple-icons@13.21.0/icons/whatsapp.svg)';
  return /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: 'inline-block',
      width: size,
      height: size,
      background: color,
      WebkitMask: u + ' center/contain no-repeat',
      mask: u + ' center/contain no-repeat',
      flexShrink: 0
    }
  });
}
Object.assign(__ds_scope, { WhatsAppIcon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/WhatsAppIcon.jsx", error: String((e && e.message) || e) }); }

// components/brand/WhatsAppContact.jsx
try { (() => {
function WhatsAppContact({
  number = '98905.1654',
  ddd = '85',
  label = 'whatsapp:',
  tone = 'dark',
  scale = 1
}) {
  const dark = tone === 'dark',
    fg = dark ? 'var(--white)' : 'var(--forest-900)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10 * scale,
      padding: `${12 * scale}px ${18 * scale}px ${10 * scale}px`,
      border: `${2 * scale}px solid ${fg}`,
      borderRadius: 12 * scale,
      color: fg,
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: -11 * scale,
      left: '50%',
      transform: 'translateX(-50%)',
      padding: `0 ${8 * scale}px`,
      background: dark ? 'var(--label-bg,var(--forest-800))' : 'var(--label-bg,var(--white))',
      fontSize: 15 * scale,
      fontWeight: 500,
      lineHeight: 1.2,
      whiteSpace: 'nowrap'
    }
  }, label), /*#__PURE__*/React.createElement(__ds_scope.WhatsAppIcon, {
    size: 30 * scale
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'flex-start',
      fontWeight: 700,
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement("sup", {
    style: {
      fontSize: 13 * scale,
      marginTop: 2 * scale,
      marginRight: 3 * scale
    }
  }, ddd), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 28 * scale,
      letterSpacing: '-.01em'
    }
  }, number)));
}
Object.assign(__ds_scope, { WhatsAppContact });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/WhatsAppContact.jsx", error: String((e && e.message) || e) }); }

// components/display/Badge.jsx
try { (() => {
const T = {
  lime: ['var(--brand-accent)', 'var(--forest-900)', 'transparent'],
  teal: ['var(--brand-primary)', 'var(--white)', 'transparent'],
  deep: ['var(--brand-deep)', 'var(--white)', 'transparent'],
  light: ['var(--lime-100)', 'var(--teal-800)', 'transparent'],
  white: ['var(--white)', 'var(--teal-700)', 'transparent'],
  'outline-inverse': ['transparent', 'var(--white)', 'var(--white)'],
  success: ['var(--success)', 'var(--forest-900)', 'transparent'],
  warning: ['var(--warning)', 'var(--ink-900)', 'transparent'],
  'success-soft': ['var(--success-soft)', 'var(--success-ink)', 'transparent'],
  'warning-soft': ['var(--warning-soft)', 'var(--warning-ink)', 'transparent']
};
function Badge({
  tone = 'lime',
  children,
  icon
}) {
  const [bg, fg, bd] = T[tone] || T.lime;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: 28,
      padding: '0 12px',
      background: bg,
      color: fg,
      border: `1.5px solid ${bd}`,
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 14,
      lineHeight: 1,
      whiteSpace: 'nowrap'
    }
  }, icon, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
function Card({
  title,
  eyebrow,
  icon,
  children,
  tone = 'light',
  footer,
  style
}) {
  const dark = tone === 'dark',
    teal = tone === 'teal';
  const inv = dark || teal;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: dark ? 'var(--surface-inverse)' : teal ? 'var(--surface-teal)' : 'var(--surface-card)',
      color: inv ? 'var(--white)' : 'var(--text-body)',
      border: inv ? 'none' : '1px solid var(--border-default)',
      borderRadius: 'var(--radius-lg)',
      padding: 28,
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      boxShadow: inv ? 'none' : 'var(--shadow-sm)',
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 52,
      height: 52,
      borderRadius: '50%',
      background: inv ? 'var(--brand-accent)' : 'var(--lime-100)',
      color: inv ? 'var(--forest-900)' : 'var(--teal-700)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, icon), eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 13,
      letterSpacing: 'var(--ls-wide)',
      textTransform: 'uppercase',
      color: inv ? 'var(--lime-500)' : 'var(--teal-600)'
    }
  }, eyebrow), title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: 24,
      lineHeight: 1.1,
      letterSpacing: '-.01em',
      color: inv ? 'var(--white)' : 'var(--teal-700)'
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 16,
      lineHeight: 1.45,
      color: inv ? 'var(--text-on-dark-muted)' : 'var(--text-muted)'
    }
  }, children), footer);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/CheckList.jsx
try { (() => {
function CheckList({
  items = [],
  tone = 'dark',
  size = 18
}) {
  const fg = tone === 'dark' ? 'var(--white)' : 'var(--text-strong)';
  return /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: size * .5
    }
  }, items.map(t => /*#__PURE__*/React.createElement("li", {
    key: t,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: size * .55,
      fontFamily: 'var(--font-sans)',
      fontWeight: 500,
      fontSize: size,
      color: fg
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: size * 1.2,
      height: size * 1.2,
      borderRadius: size * .25,
      background: 'var(--brand-accent)',
      color: 'var(--forest-900)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: size * .32,
      height: size * .6,
      border: 'solid currentColor',
      borderWidth: `0 ${size * .14}px ${size * .14}px 0`,
      transform: 'rotate(45deg) translate(-8%,-8%)'
    }
  })), t)));
}
Object.assign(__ds_scope, { CheckList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/CheckList.jsx", error: String((e && e.message) || e) }); }

// components/display/Tag.jsx
try { (() => {
function Tag({
  children,
  selected,
  onClick
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      height: 34,
      padding: '0 16px',
      borderRadius: 'var(--radius-pill)',
      border: `1.5px solid ${selected ? 'var(--teal-700)' : 'var(--border-default)'}`,
      background: selected ? 'var(--teal-700)' : 'var(--white)',
      color: selected ? 'var(--white)' : 'var(--text-body)',
      fontFamily: 'var(--font-sans)',
      fontWeight: 500,
      fontSize: 14,
      cursor: onClick ? 'pointer' : 'default'
    }
  }, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open,
  title,
  children,
  onClose,
  actions
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(14,46,37,.6)',
      backdropFilter: 'blur(4px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 100,
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: '100%',
      maxWidth: 440,
      background: 'var(--white)',
      borderRadius: 'var(--radius-lg)',
      padding: 28,
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      boxShadow: 'var(--shadow-lg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: 26,
      lineHeight: 1.1,
      color: 'var(--teal-700)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 16,
      lineHeight: 1.45,
      color: 'var(--text-body)'
    }
  }, children), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      justifyContent: 'flex-end',
      marginTop: 8
    }
  }, actions)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function Toast({
  tone = 'success',
  children,
  icon
}) {
  const c = {
    success: 'var(--lime-500)',
    danger: 'var(--danger)',
    info: 'var(--teal-300)',
    warning: 'var(--amber-500)'
  }[tone];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      padding: '12px 18px',
      background: 'var(--forest-800)',
      color: 'var(--white)',
      borderRadius: 'var(--radius-pill)',
      boxShadow: 'var(--shadow-md)',
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      fontWeight: 500
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: c,
      flexShrink: 0
    }
  }), icon, children);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  text,
  children
}) {
  const [o, setO] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", {
    onMouseEnter: () => setO(true),
    onMouseLeave: () => setO(false),
    style: {
      position: 'relative',
      display: 'inline-flex'
    }
  }, children, o && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      bottom: 'calc(100% + 8px)',
      left: '50%',
      transform: 'translateX(-50%)',
      whiteSpace: 'nowrap',
      padding: '6px 12px',
      background: 'var(--forest-900)',
      color: 'var(--white)',
      borderRadius: 'var(--radius-sm)',
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontWeight: 500,
      pointerEvents: 'none'
    }
  }, text));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked,
  onChange,
  radio
}) {
  return /*#__PURE__*/React.createElement("label", {
    onClick: () => onChange && onChange(!checked),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 22,
      borderRadius: radio ? '50%' : 6,
      border: `1.5px solid ${checked ? 'var(--teal-700)' : 'var(--gray-300)'}`,
      background: checked && !radio ? 'var(--teal-700)' : 'var(--white)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, checked && (radio ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: 'var(--teal-700)'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 11,
      border: 'solid var(--lime-500)',
      borderWidth: '0 2.5px 2.5px 0',
      transform: 'rotate(45deg) translate(-1px,-1px)'
    }
  }))), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  label,
  hint,
  error,
  icon,
  value,
  onChange,
  placeholder,
  type = 'text'
}) {
  const [f, setF] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-sans)'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      height: 48,
      padding: '0 16px',
      background: 'var(--white)',
      borderRadius: 'var(--radius-sm)',
      border: `1.5px solid ${error ? 'var(--danger)' : f ? 'var(--teal-700)' : 'var(--border-default)'}`,
      boxShadow: f ? 'var(--focus-ring)' : 'none',
      color: 'var(--text-muted)'
    }
  }, icon, /*#__PURE__*/React.createElement("input", {
    type: type,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    onFocus: () => setF(true),
    onBlur: () => setF(false),
    style: {
      flex: 1,
      border: 'none',
      outline: 'none',
      fontFamily: 'inherit',
      fontSize: 16,
      color: 'var(--text-strong)',
      background: 'transparent',
      minWidth: 0
    }
  })), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: error ? 'var(--danger)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Select({
  label,
  options = [],
  value,
  onChange,
  placeholder
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-sans)'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("select", {
    value: value,
    onChange: onChange,
    style: {
      height: 48,
      padding: '0 16px',
      background: 'var(--white)',
      borderRadius: 'var(--radius-sm)',
      border: '1.5px solid var(--border-default)',
      fontFamily: 'inherit',
      fontSize: 16,
      color: 'var(--text-strong)'
    }
  }, placeholder && /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder), options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  checked,
  onChange,
  label
}) {
  return /*#__PURE__*/React.createElement("label", {
    onClick: () => onChange && onChange(!checked),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 46,
      height: 26,
      borderRadius: 999,
      background: checked ? 'var(--teal-700)' : 'var(--gray-200)',
      position: 'relative',
      transition: 'background var(--dur-base)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 3,
      left: checked ? 23 : 3,
      width: 20,
      height: 20,
      borderRadius: '50%',
      background: checked ? 'var(--lime-500)' : 'var(--white)',
      boxShadow: 'var(--shadow-sm)',
      transition: 'left var(--dur-base) var(--ease-out)'
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
function NavBar({
  items = ['HOME', 'SOBRE', 'SERVIÇOS', 'COMPLIANCE', 'CONTATO'],
  active = 'HOME',
  onSelect,
  name = 'Alerta Gestão de Resíduos',
  logoBase
}) {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      background: 'var(--teal-700)',
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '0 24px',
      height: 56,
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    variant: "symbol-white",
    height: 40,
    base: logoBase
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--white)',
      fontSize: 20,
      fontWeight: 500,
      letterSpacing: '-.01em',
      whiteSpace: 'nowrap'
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 26
    }
  }, items.map(it => /*#__PURE__*/React.createElement("a", {
    key: it,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onSelect && onSelect(it);
    },
    style: {
      color: 'var(--white)',
      textDecoration: 'none',
      fontSize: 19,
      fontWeight: it === active ? 700 : 400
    }
  }, it))));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  items = [],
  value,
  onChange,
  tone = 'light'
}) {
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4,
      borderBottom: `1px solid ${dark ? 'rgba(255,255,255,.2)' : 'var(--border-default)'}`
    }
  }, items.map(it => {
    const a = it === value;
    return /*#__PURE__*/React.createElement("button", {
      key: it,
      onClick: () => onChange && onChange(it),
      style: {
        padding: '12px 16px',
        marginBottom: -1,
        border: 'none',
        borderBottom: `3px solid ${a ? dark ? 'var(--lime-500)' : 'var(--teal-700)' : 'transparent'}`,
        background: 'none',
        fontFamily: 'var(--font-sans)',
        fontWeight: a ? 700 : 500,
        fontSize: 16,
        textTransform: 'uppercase',
        letterSpacing: '.02em',
        color: dark ? a ? 'var(--white)' : 'var(--text-on-dark-muted)' : a ? 'var(--teal-700)' : 'var(--text-muted)',
        cursor: 'pointer'
      }
    }, it);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/navigation/TopBar.jsx
try { (() => {
function TopBar({
  message = 'ATENDIMENTO EM TODO O CEARÁ',
  action = 'FALAR COM ESPECIALISTA',
  onAction
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--lime-100)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 24,
      padding: '6px 16px',
      flexWrap: 'wrap',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 400,
      color: 'var(--ink-900)'
    }
  }, message), /*#__PURE__*/React.createElement("button", {
    onClick: onAction,
    style: {
      height: 36,
      padding: '0 22px',
      border: '1.5px solid var(--ink-900)',
      borderRadius: 'var(--radius-xs)',
      background: 'transparent',
      fontFamily: 'inherit',
      fontSize: 16,
      color: 'var(--ink-900)',
      cursor: 'pointer'
    }
  }, action));
}
Object.assign(__ds_scope, { TopBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/TopBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/orcamento/quote-document.jsx
try { (() => {
const {
  Logo,
  Badge
} = window.DesentupidoraAlertaDesignSystem_e6b749;
const ITEMS = [['Hidrojateamento de rede de esgoto (até 30 m)', 1, 'serv.', 650], ['Limpeza de caixa de gordura', 2, 'un.', 180], ['Coleta e transporte de efluente — caminhão vácuo 12m³', 1, 'viagem', 890]];
const brl = v => v.toLocaleString('pt-BR', {
  style: 'currency',
  currency: 'BRL'
});
function QuoteDocument({
  cliente = 'Condomínio Exemplo',
  numero = '2026-0412'
}) {
  const total = ITEMS.reduce((s, [, q,, v]) => s + q * v, 0);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 794,
      minHeight: 1123,
      background: '#fff',
      fontFamily: 'var(--font-sans)',
      color: 'var(--text-body)',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: 'var(--shadow-lg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--grain),var(--grad-forest)',
      backgroundBlendMode: 'overlay,normal',
      padding: '36px 48px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    height: 58
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '800 34px var(--font-sans)',
      textTransform: 'uppercase',
      letterSpacing: '-.02em'
    }
  }, "Or\xE7amento"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--lime-400)'
    }
  }, "N\xBA ", numero, " \xB7 05/10/2026"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '36px 48px',
      display: 'flex',
      flexDirection: 'column',
      gap: 28,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 24,
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 12px var(--font-sans)',
      letterSpacing: 'var(--ls-wide)',
      textTransform: 'uppercase',
      color: 'var(--teal-600)',
      marginBottom: 6
    }
  }, "Cliente"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 16,
      color: 'var(--ink-900)'
    }
  }, cliente), /*#__PURE__*/React.createElement("div", null, "Fortaleza \u2014 CE")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 12px var(--font-sans)',
      letterSpacing: 'var(--ls-wide)',
      textTransform: 'uppercase',
      color: 'var(--teal-600)',
      marginBottom: 6
    }
  }, "Validade"), /*#__PURE__*/React.createElement("div", null, "15 dias \xB7 Visita t\xE9cnica realizada"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "light"
  }, "Atendimento 24h")))), /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: 'var(--lime-100)',
      color: 'var(--teal-800)',
      textAlign: 'left'
    }
  }, ['Serviço', 'Qtd.', 'Un.', 'Valor'].map((x, i) => /*#__PURE__*/React.createElement("th", {
    key: x,
    style: {
      padding: '10px 12px',
      fontWeight: 600,
      textAlign: i > 0 ? 'right' : 'left'
    }
  }, x)))), /*#__PURE__*/React.createElement("tbody", null, ITEMS.map(([d, q, u, v]) => /*#__PURE__*/React.createElement("tr", {
    key: d,
    style: {
      borderBottom: '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '12px'
    }
  }, d), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: 12,
      textAlign: 'right'
    }
  }, q), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: 12,
      textAlign: 'right'
    }
  }, u), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: 12,
      textAlign: 'right',
      fontWeight: 600,
      color: 'var(--ink-900)'
    }
  }, brl(q * v)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      alignSelf: 'flex-end',
      background: 'var(--teal-700)',
      color: '#fff',
      borderRadius: 'var(--radius-md)',
      padding: '16px 24px',
      display: 'flex',
      gap: 32,
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      textTransform: 'uppercase',
      letterSpacing: 'var(--ls-wide)'
    }
  }, "Total"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '800 30px var(--font-sans)'
    }
  }, brl(total))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      lineHeight: 1.5,
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--ink-900)'
    }
  }, "Condi\xE7\xF5es:"), " pagamento na conclus\xE3o do servi\xE7o. Garantia sobre os servi\xE7os prestados. Valores podem variar se a visita identificar pontos adicionais.")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--teal-700)',
      color: '#fff',
      padding: '18px 48px',
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("span", null, "\u2078\u2075 98905.1654"), /*#__PURE__*/React.createElement("span", null, "Rua Dr. Humberto Rodrigues, 200 \u2014 Mondubim"), /*#__PURE__*/React.createElement("span", null, "@desentupidoraalerta")));
}
window.QuoteDocument = QuoteDocument;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/orcamento/quote-document.jsx", error: String((e && e.message) || e) }); }

// ui_kits/social/post-templates.jsx
try { (() => {
const {
  Logo,
  WhatsAppContact,
  CheckList,
  Badge
} = window.DesentupidoraAlertaDesignSystem_e6b749;
const Photo = ({
  label,
  style
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    border: '3px dashed rgba(255,255,255,.45)',
    borderRadius: 16,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'rgba(255,255,255,.7)',
    font: '500 28px var(--font-sans)',
    textAlign: 'center',
    padding: 24,
    ...style
  }
}, label);
const S1080 = {
  width: 1080,
  height: 1080,
  position: 'relative',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  fontFamily: 'var(--font-sans)',
  color: '#fff'
};
function PostFossa({
  h
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...S1080,
      background: 'var(--grain),var(--grad-forest)',
      backgroundBlendMode: 'overlay,normal',
      alignItems: 'center',
      padding: '70px 60px'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    height: 110
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 56,
      font: '800 136px/0.9 var(--font-sans)',
      textTransform: 'uppercase',
      letterSpacing: '-.03em',
      textAlign: 'center'
    }
  }, h || /*#__PURE__*/React.createElement(React.Fragment, null, "Fossa cheia", /*#__PURE__*/React.createElement("br", null), "n\xE3o avisa.")), /*#__PURE__*/React.createElement("div", {
    style: {
      alignSelf: 'stretch',
      display: 'flex',
      gap: 30,
      marginTop: 50,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      flex: 1,
      margin: 0,
      font: '400 38px/1.3 var(--font-sans)'
    }
  }, "Coleta com caminh\xE3o v\xE1cuo de at\xE9 20m\xB3. R\xE1pido, rastre\xE1vel e ambientalmente correto."), /*#__PURE__*/React.createElement(Photo, {
    label: "Foto: caminh\xE3o v\xE1cuo",
    style: {
      flex: 1
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      '--label-bg': '#18473A'
    }
  }, /*#__PURE__*/React.createElement(WhatsAppContact, {
    scale: 2
  })));
}
function PostEntupimento({
  h
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...S1080,
      background: 'var(--grain),var(--grad-teal)',
      backgroundBlendMode: 'overlay,normal',
      alignItems: 'center',
      padding: '70px 20px'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    height: 110
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 60,
      font: '800 152px/0.9 var(--font-sans)',
      textTransform: 'uppercase',
      letterSpacing: '-.035em',
      textAlign: 'center'
    }
  }, h || /*#__PURE__*/React.createElement(React.Fragment, null, "Entupimento", /*#__PURE__*/React.createElement("br", null), "n\xE3o volta.")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '40px 0 0',
      font: '400 46px/1.35 var(--font-sans)',
      textAlign: 'center'
    }
  }, "Hidrojateamento de alta press\xE3o.", /*#__PURE__*/React.createElement("br", null), "Limpeza t\xE9cnica que resolve de vez."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      '--label-bg': '#0D7570'
    }
  }, /*#__PURE__*/React.createElement(WhatsAppContact, {
    scale: 2
  })));
}
function PostRalo({
  h
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...S1080,
      background: 'var(--grain),var(--grad-teal)',
      backgroundBlendMode: 'overlay,normal',
      padding: 80,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    label: "Foto produto: ralo + sif\xE3o",
    style: {
      alignSelf: 'center',
      height: 520
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 50
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      lineHeight: .92
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '800 140px var(--font-sans)',
      letterSpacing: '-.04em'
    }
  }, h || 'Ralo'), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 64px var(--font-sans)'
    }
  }, "entupido?"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 92px/0.95 var(--font-sans)',
      letterSpacing: '-.03em'
    }
  }, "A gente resolve ", /*#__PURE__*/React.createElement("b", {
    style: {
      fontWeight: 800
    }
  }, "na hora."))), /*#__PURE__*/React.createElement("div", {
    style: {
      '--label-bg': '#0F7B76'
    }
  }, /*#__PURE__*/React.createElement(WhatsAppContact, {
    scale: 1.5
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1/3',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement(CheckList, {
    size: 42,
    items: ['Praticidade', 'agilidade', 'e garantia']
  }), /*#__PURE__*/React.createElement(Logo, {
    height: 120
  })));
}
function Post20Anos({
  h
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...S1080,
      background: 'var(--amber-500)',
      padding: '110px 40px',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '800 170px/0.88 var(--font-sans)',
      textTransform: 'uppercase',
      letterSpacing: '-.035em',
      textAlign: 'center'
    }
  }, h || /*#__PURE__*/React.createElement(React.Fragment, null, "20 anos", /*#__PURE__*/React.createElement("br", null), "resolvendo", /*#__PURE__*/React.createElement("br", null), "o que ningu\xE9m", /*#__PURE__*/React.createElement("br", null), "quer ver.")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '40px 0 0',
      font: '400 52px/1.3 var(--font-sans)',
      textAlign: 'center'
    }
  }, "Alerta Gest\xE3o de Res\xEDduos.", /*#__PURE__*/React.createElement("br", null), "Fortaleza e todo o Cear\xE1."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "white",
    height: 120
  })));
}
function PostAviso({
  h
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...S1080,
      background: 'var(--lime-500)',
      color: 'var(--forest-900)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: '90px 110px',
      display: 'flex',
      flexDirection: 'column',
      gap: 50
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 36,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 160,
      height: 160,
      border: '5px solid var(--teal-700)',
      borderRadius: 36,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "symbol",
    height: 70
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 60px/1.1 var(--font-sans)',
      color: 'var(--teal-700)'
    }
  }, h || /*#__PURE__*/React.createElement(React.Fragment, null, "Aviso feriado de", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      background: 'var(--teal-700)',
      color: '#fff',
      padding: '0 10px'
    }
  }, "Nossa Senhora"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      background: 'var(--teal-700)',
      color: '#fff',
      padding: '0 10px'
    }
  }, "da Assun\xE7\xE3o")))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--teal-700)',
      color: '#fff',
      borderRadius: 56,
      padding: '56px 60px',
      display: 'flex',
      gap: 36,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 80,
      height: 80,
      borderRadius: '50%',
      background: 'var(--lime-500)',
      color: 'var(--teal-700)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Ic, {
    n: "arrow-right",
    s: 48,
    w: 3
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: '400 34px/1.4 var(--font-sans)'
    }
  }, "Devido ao feriado, ", /*#__PURE__*/React.createElement("b", null, "n\xE3o funcionaremos neste s\xE1bado (15/08)"), ". ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--lime-400)'
    }
  }, "Retornaremos \xE0s nossas atividades na ", /*#__PURE__*/React.createElement("b", null, "segunda-feira, dia 17/08.")))), /*#__PURE__*/React.createElement("div", {
    style: {
      alignSelf: 'center',
      background: 'var(--lime-100)',
      color: 'var(--teal-700)',
      borderRadius: 999,
      padding: '14px 56px',
      font: '500 34px var(--font-sans)'
    }
  }, "Bom Feriado!")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--teal-700)',
      padding: '34px 60px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 20,
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    height: 80
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 60,
      font: '400 26px var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\u2078\u2075 98905.1654"), /*#__PURE__*/React.createElement("span", null, "Fortaleza e Regi\xE3o Metropolitana"), /*#__PURE__*/React.createElement("span", null, "@alertadesentupidora"))));
}
function PostMeme({
  h
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...S1080,
      background: 'var(--grad-leaf)',
      padding: '90px 80px',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      alignSelf: 'flex-start',
      font: '700 68px/1.15 var(--font-sans)',
      textTransform: 'uppercase'
    }
  }, h || /*#__PURE__*/React.createElement(React.Fragment, null, "\u201CVoc\xEA \xE9 bom de", /*#__PURE__*/React.createElement("br", null), "matem\xE1tica?\u201D")), /*#__PURE__*/React.createElement("div", {
    style: {
      alignSelf: 'flex-start',
      font: '700 56px var(--font-sans)',
      marginTop: 30
    }
  }, "EU:"), /*#__PURE__*/React.createElement(Photo, {
    label: "Ilustra\xE7\xE3o/emoji do meme",
    style: {
      width: '90%',
      height: 240,
      marginTop: 30
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      textAlign: 'center',
      font: '600 38px/1.35 var(--font-sans)',
      textTransform: 'uppercase',
      color: 'var(--lime-200)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#fff'
    }
  }, "Entupiu?"), /*#__PURE__*/React.createElement("br", null), "Nosso caminh\xE3o na porta.", /*#__PURE__*/React.createElement("br", null), "A conta fecha r\xE1pido", /*#__PURE__*/React.createElement("br", null), "quando a gente chega."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 30
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    height: 100
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      '--label-bg': '#14A853'
    }
  }, /*#__PURE__*/React.createElement(WhatsAppContact, {
    scale: 1.2
  }))));
}
window.PostTemplates = {
  PostFossa,
  PostEntupimento,
  PostRalo,
  Post20Anos,
  PostAviso,
  PostMeme
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/social/post-templates.jsx", error: String((e && e.message) || e) }); }

// ui_kits/social/story-templates.jsx
try { (() => {
const {
  Logo,
  WhatsAppContact,
  CheckList,
  Badge,
  Button,
  WhatsAppIcon
} = window.DesentupidoraAlertaDesignSystem_e6b749;
const Photo = ({
  label,
  style
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    border: '3px dashed rgba(255,255,255,.45)',
    borderRadius: 16,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'rgba(255,255,255,.7)',
    font: '500 28px var(--font-sans)',
    textAlign: 'center',
    padding: 24,
    ...style
  }
}, label);
const SS = {
  width: 1080,
  height: 1920,
  position: 'relative',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  fontFamily: 'var(--font-sans)',
  color: '#fff',
  padding: '160px 80px 200px'
};
function StoryServico() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...SS,
      background: 'var(--grain),var(--grad-forest)',
      backgroundBlendMode: 'overlay,normal'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      width: 1400,
      height: 1400,
      borderRadius: '50%',
      border: '2px solid rgba(166,216,90,.35)',
      left: -900,
      top: -300
    }
  }), /*#__PURE__*/React.createElement(Logo, {
    height: 120
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 90,
      font: '800 170px/0.9 var(--font-sans)',
      textTransform: 'uppercase',
      letterSpacing: '-.035em',
      textAlign: 'center'
    }
  }, "Limpa", /*#__PURE__*/React.createElement("br", null), "fossa", /*#__PURE__*/React.createElement("br", null), "hoje."), /*#__PURE__*/React.createElement(Photo, {
    label: "Foto: equipe / caminh\xE3o",
    style: {
      width: '100%',
      flex: 1,
      margin: '70px 0'
    }
  }), /*#__PURE__*/React.createElement(CheckList, {
    size: 52,
    items: ['Caminhão vácuo até 20m³', 'Rastreável', 'Ambientalmente correto']
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 70,
      '--label-bg': '#17463A'
    }
  }, /*#__PURE__*/React.createElement(WhatsAppContact, {
    scale: 2.2
  })));
}
function StoryPergunta() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...SS,
      background: 'var(--grain),var(--grad-teal)',
      backgroundBlendMode: 'overlay,normal',
      justifyContent: 'center',
      gap: 60
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '800 64px var(--font-sans)',
      color: 'var(--lime-500)'
    }
  }, "\u275D"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 110px/1.02 var(--font-sans)',
      letterSpacing: '-.02em',
      textAlign: 'center'
    }
  }, "A maioria das pessoas nunca parou pra pensar nisso\u2026"), /*#__PURE__*/React.createElement("div", {
    style: {
      transform: 'scale(2.4)',
      margin: '50px 0'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "white"
  }, "Leia a legenda")), /*#__PURE__*/React.createElement(Button, {
    variant: "whatsapp",
    size: "lg",
    icon: /*#__PURE__*/React.createElement(WhatsAppIcon, {
      size: 56
    }),
    style: {
      height: 140,
      fontSize: 52,
      padding: '0 70px'
    }
  }, "Atendimento via WhatsApp"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 150
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    height: 110
  })));
}
function StoryAviso() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...SS,
      background: 'var(--lime-500)',
      color: 'var(--teal-700)',
      justifyContent: 'center',
      gap: 80
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 240,
      height: 240,
      border: '7px solid var(--teal-700)',
      borderRadius: 52,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "symbol",
    height: 100
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 104px/1.1 var(--font-sans)',
      textAlign: 'center'
    }
  }, "Hor\xE1rio de", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      background: 'var(--teal-700)',
      color: '#fff',
      padding: '0 16px'
    }
  }, "fim de ano")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--teal-700)',
      color: '#fff',
      borderRadius: 70,
      padding: '80px 70px',
      font: '400 52px/1.4 var(--font-sans)',
      textAlign: 'center'
    }
  }, "Atendimento de emerg\xEAncia ", /*#__PURE__*/React.createElement("b", null, "24h"), " mantido.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--lime-400)'
    }
  }, "Escrit\xF3rio retorna dia ", /*#__PURE__*/React.createElement("b", null, "02/01"), ".")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--lime-100)',
      borderRadius: 999,
      padding: '24px 80px',
      font: '500 52px var(--font-sans)'
    }
  }, "Boas festas!"));
}
window.StoryTemplates = {
  StoryServico,
  StoryPergunta,
  StoryAviso
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/social/story-templates.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/site-footer.jsx
try { (() => {
const {
  Logo,
  WhatsAppContact
} = window.DesentupidoraAlertaDesignSystem_e6b749;
function SiteFooter() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--teal-700)',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '48px 24px',
      display: 'flex',
      gap: 40,
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "white",
    height: 48
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      fontSize: 15
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Ic, {
    n: "map-pin",
    s: 16,
    c: "var(--lime-500)"
  }), "Rua Doutor Humberto Rodrigues, 200 \u2014 Mondubim, Fortaleza/CE"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Ic, {
    n: "globe",
    s: 16,
    c: "var(--lime-500)"
  }), "www.alertadesentupidora.com.br"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Ic, {
    n: "instagram",
    s: 16,
    c: "var(--lime-500)"
  }), "@desentupidoraalerta")), /*#__PURE__*/React.createElement("div", {
    style: {
      '--label-bg': 'var(--teal-700)'
    }
  }, /*#__PURE__*/React.createElement(WhatsAppContact, null))));
}
window.SiteFooter = SiteFooter;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/site-footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/site-hero.jsx
try { (() => {
const {
  Logo
} = window.DesentupidoraAlertaDesignSystem_e6b749;
const Arc = ({
  style
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    position: 'absolute',
    width: 700,
    height: 700,
    borderRadius: '50%',
    border: '1px solid rgba(166,216,90,.35)',
    ...style
  }
});
function SiteHero() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      height: 374,
      background: 'var(--grain),var(--grad-forest)',
      backgroundBlendMode: 'overlay,normal',
      overflow: 'hidden',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement(Arc, {
    style: {
      left: -160,
      top: -160
    }
  }), /*#__PURE__*/React.createElement(Arc, {
    style: {
      right: -160,
      top: -160
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 1600,
      margin: '0 auto',
      height: '100%',
      display: 'grid',
      gridTemplateColumns: '1fr auto 1fr',
      alignItems: 'center',
      padding: '0 7%',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: '300 21px/1.52 var(--font-sans)',
      letterSpacing: '.05em',
      justifySelf: 'end',
      maxWidth: 260,
      marginTop: -60
    }
  }, "Duas d\xE9cadas ", /*#__PURE__*/React.createElement("b", {
    style: {
      fontWeight: 700
    }
  }, "protegendo o meio ambiente,"), " por meio do nosso trabalho."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 10,
      marginTop: -50
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      color: 'var(--lime-500)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '800 128px/1 var(--font-sans)',
      WebkitTextStroke: '5px var(--lime-500)',
      color: 'transparent',
      letterSpacing: '-.04em'
    }
  }, "20"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 96px/1 var(--font-script)',
      marginLeft: -6
    }
  }, "anos")), /*#__PURE__*/React.createElement(Logo, {
    height: 56
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: '300 21px/1.52 var(--font-sans)',
      letterSpacing: '.05em',
      maxWidth: 300,
      marginTop: -60
    }
  }, "Gest\xE3o de res\xEDduos e transporte de efluentes ", /*#__PURE__*/React.createElement("b", {
    style: {
      fontWeight: 700
    }
  }, "com responsabilidade e compromisso ambiental."))));
}
window.SiteHero = SiteHero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/site-hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/site-services.jsx
try { (() => {
const {
  Button,
  Card,
  WhatsAppIcon
} = window.DesentupidoraAlertaDesignSystem_e6b749;
const SVC = [['droplets', 'Desentupimento', 'Redes de esgoto, caixas de gordura, ralos e colunas.'], ['waves', 'Hidrojateamento', 'Alta pressão. Limpeza técnica que resolve de vez.'], ['truck', 'Limpa fossa', 'Caminhão vácuo de até 20m³, rastreável.'], ['container', 'Transporte de efluentes', 'Cargas perigosas com segurança e licença.'], ['recycle', 'Óleo lubrificante usado', 'Coleta e transporte para rerrefino.'], ['building-2', 'Contratos', 'Manutenção preventiva para indústrias e condomínios.']];
function SiteServices({
  onWhats
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: '#fff',
      padding: '120px 24px 96px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "whatsapp",
    size: "lg",
    icon: /*#__PURE__*/React.createElement(WhatsAppIcon, {
      size: 22
    }),
    onClick: onWhats
  }, "Falar com Especialista")), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '96px 0 40px',
      textAlign: 'center',
      font: '700 44px var(--font-sans)',
      textTransform: 'uppercase',
      color: 'var(--teal-700)',
      letterSpacing: '.01em'
    }
  }, "Nossos servi\xE7os"), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
      gap: 20
    }
  }, SVC.map(([i, t, d]) => /*#__PURE__*/React.createElement(Card, {
    key: t,
    icon: /*#__PURE__*/React.createElement(Ic, {
      n: i,
      s: 24
    }),
    title: t
  }, d))), /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: 'center',
      color: 'var(--text-muted)',
      fontSize: 13,
      marginTop: 24
    }
  }, "Grade de servi\xE7os abaixo da dobra n\xE3o foi vista nos prints \u2014 layout proposto."));
}
window.SiteServices = SiteServices;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/site-services.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.WhatsAppContact = __ds_scope.WhatsAppContact;

__ds_ns.WhatsAppIcon = __ds_scope.WhatsAppIcon;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.CheckList = __ds_scope.CheckList;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.TopBar = __ds_scope.TopBar;

})();
