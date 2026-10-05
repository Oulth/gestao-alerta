# Desentupidora Alerta — Design System

**Alerta Gestão de Resíduos** (antiga Desentupidora Alerta), Fortaleza/CE. ~20 anos em desentupimento, hidrojateamento, limpa fossa, transporte de efluentes/cargas perigosas e coleta de óleo lubrificante usado. Frota própria de caminhões vácuo de 8m³ a 20m³. Atende residências, comércios, condomínios e indústrias em Fortaleza e todo o Ceará. Fundada por Paulo Roberto e Luciana Marinho.

Contato: WhatsApp ⁸⁵ 98905.1654 · Rua Doutor Humberto Rodrigues, 200 — Mondubim, Fortaleza/CE · @desentupidoraalerta.

## Sources
- Instagram: https://www.instagram.com/desentupidoraalerta/ (not directly readable; user supplied screenshots → `assets/reference/instagram-grid-*.png`)
- Site: https://www.desentupidoraalerta.com.br/ (screenshot → `assets/reference/site-home.png`)
- Logo: user-supplied screenshot, cut out to transparent PNGs in `assets/`.
- No Figma, codebase or font files were provided.

## Surfaces
1. **Instagram feed + stories** (main channel) → `ui_kits/social/`
2. **Website** → `ui_kits/website/`
3. **Orçamento (PDF)** → `ui_kits/orcamento/` (proposal — no real sample seen)
4. **Sistema de Gestão Operacional & Financeira (ERP Web App)** → `index.html` e [`FINANCEIRO.md`](file:///C:/Users/Agape%20Ti/Documents/Visual%20Studio/Gestao%20Alerta/Design/Desentupidora%20Alerta%20Design%20System/FINANCEIRO.md)


## CONTENT FUNDAMENTALS
- **Language:** Brazilian Portuguese, informal-confident. "A gente resolve na hora." "Nosso caminhão na porta." Speaks as **nós/a gente** to **você**.
- **Headlines:** short, declarative, problem → certainty, often ending with a period for punch: "FOSSA CHEIA NÃO AVISA." "ENTUPIMENTO NÃO VOLTA." "20 ANOS RESOLVENDO O QUE NINGUÉM QUER VER." Questions open service posts: "Ralo entupido?" "Entupiu?"
- **Casing:** service punchlines in ALL CAPS; softer/editorial copy in sentence case with bold emphasis ("Duas décadas **protegendo o meio ambiente**, por meio do nosso trabalho.").
- **Body:** one or two concrete sentences with proof points — capacity (20m³), "rastreável", "ambientalmente correto", "alta pressão", "limpeza técnica".
- **Sign-off:** always the WhatsApp number in the outlined "whatsapp: ⁸⁵98905.1654" block; DDD superscript, dot separator.
- **Humor:** memes and trends ("A I.A VAI ME SUBSTITUIR", "Você é bom de matemática?") with real staff; emoji appear only inside meme posts (🚽 + 🚛 = 😌) — never in service/brand copy.
- **Calendar:** religious holidays and commemorative dates (Nossa Senhora da Assunção, Corpus Christi, Dia dos Pais, 7 de Setembro) with warm, respectful copy; holiday closure notices.
- **Sustainability vocabulary:** "gestão de resíduos", "compromisso ambiental", "impacto positivo", "compliance".
- Legacy name "Desentupidora e Limpa Fossas" (red 3D logo) still appears in nostalgia posts only.

## VISUAL FOUNDATIONS
- **Color:** green family only. Deep forest `--forest-800` and teal `--teal-700` grounds; lime `--lime-500` accent (logo rings/drop, highlights, checkmarks); pale lime `--lime-100` strips; bright leaf green for meme/high-energy posts; WhatsApp green for CTAs. Amber `--amber-500` is a rare campaign color (20 anos). No red except legacy logo. **Official anchors:** Verde Abeto `#08736C` (`--teal-700`, primary: nav, primary buttons, headings), Verde Claro `#A3CF5B` (`--lime-500`, success: concluído/PAGO, positive revenue/margin), Laranja Dourada `#EB9C18` (`--amber-500`, warning: pendências, A VENCER, alertas). Other steps derived. Surfaces: off-white page (`--offwhite`) with white cards, subtle 1px border + soft shadow.
- **Type:** one geometric sans (Outfit, substitute) carries everything: ExtraBold caps with tight tracking (-0.02/-0.035em, lh ~0.9) for punchlines; light 300 with wide tracking (+0.05em) and bold runs for editorial lines; teal uppercase for site section heads. A monoline **script** ("anos") and brush scripts appear only in anniversary/holiday lockups.
- **Backgrounds:** forest/teal fields with soft radial teal glows in corners + **film grain** (`--grad-forest`, `--grad-teal`, `--grain`). Very thin lime **arcs** (huge circles cropped off-canvas) echo the logo rings. Full-bleed real photography (staff in green/lime uniforms, trucks, clients) is ~half the feed. Light posts use lime or cream with organic wave shapes.
- **Imagery:** warm, natural daylight, real people from the team, no stock look; product cut-outs (ralo, caminhão) on teal for service posts.
- **Corner radii:** CTAs are full pills; site top-bar button is square-ish (4px); panels/cards ~22px; holiday notice card ~28px at 1080 scale; symbol tile rounded square outline.
- **Cards:** solid teal/forest panels on lime, or white with 1px border + very soft shadow. No colored left borders.
- **Borders:** 1.5–2px outlines in white (on dark) or ink (on lime) — e.g. WhatsApp contact block, top-bar button.
- **Shadows:** minimal; WhatsApp pill has a green glow (`--shadow-cta`). Otherwise flat.
- **Hover/press:** darker shade of the same color (teal-700→800, whatsapp→leaf-600); press scales to 0.97. Transitions 120–220ms ease-out; no bounces.
- **Transparency/blur:** only modal scrim (forest 60% + 4px blur) and translucent lime arcs.
- **Layout:** centered compositions; logo top-center on posts, WhatsApp block bottom-center. Site: lime top bar → sticky teal nav → full-width hero (~375px) → centered CTA → centered section heading. Floating WhatsApp button bottom-right.

## ICONOGRAPHY
- Source uses few icons: WhatsApp glyph (always beside the number), white location/Instagram glyphs in footers, lime square checkmarks, circular arrow buttons, "Deslize >" swipe hints. No icon font found.
- **Substitution (flagged):** [Lucide](https://lucide.dev) via CDN, stroke 2, for general icons; WhatsApp glyph from Simple Icons CDN via `WhatsAppIcon`. Lime check bullets are CSS (`CheckList`).
- Emoji only inside meme posts. Unicode: superscript DDD (⁸⁵), ❝ quote marks.

## Fonts (substitutions — please send real files)
- **Outfit** (Google Fonts) for the brand sans — closest match to site/post type.
- **Sacramento** (Google Fonts) for the "20 anos" script.

## Index
- `styles.css` — imports `tokens/{fonts,colors,typography,spacing,effects}.css`
- `assets/` — `logo-alerta.png` (on dark), `logo-alerta-on-light.png`, `logo-alerta-white.png`, `symbol-alerta.png`, `symbol-alerta-white.png`, `logo-alerta-avatar.png`, `reference/` screenshots
- `guidelines/` — specimen cards (Colors, Type, Spacing, Brand)
- `components/` — React primitives
- `ui_kits/website/`, `ui_kits/social/` (index + stories), `ui_kits/orcamento/`, `ui_kits/financeiro/`
- `SKILL.md`
- `FINANCEIRO.md` — Especificação completa de design & arquitetura do ERP financeiro

## Components
- actions: **Button**, **IconButton**
- brand: **Logo**, **WhatsAppIcon**, **WhatsAppContact**
- display: **Badge**, **Tag**, **Card**, **CheckList**
- forms: **Input**, **Select**, **Checkbox**, **Switch**
- navigation: **TopBar**, **NavBar**, **Tabs**
- feedback: **Dialog**, **Toast**, **Tooltip**

No component library existed in the sources; TopBar, NavBar, WhatsAppContact, CheckList and Logo are lifted from the site/posts; the form/feedback set is a standard addition sized for quote forms. `Logo` resolves images from `window.ALERTA_ASSET_BASE` (or `base` prop).
