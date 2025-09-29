# Incogniton

This repository contains the front-end assets for an affiliate review website. A responsive dark-themed stylesheet `styles.css` has been added to the project root.

## Usage

1. Include the stylesheet in your HTML (example `index.html`):

```html
<link rel="stylesheet" href="./styles.css">
```

2. The stylesheet imports Google Fonts (Poppins and Roboto) using an `@import` at the top of the file. If you prefer, you can include the fonts directly in your HTML head for slightly better performance:

```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="./styles.css">
```

## Requirements coverage

- Global dark theme, Google Fonts, and centered container: Done.
- Sticky header with translucent background and backdrop-filter: Done.
- Language dropdown styles: Done.
- Comparison table with alternating rows and highlighted "Multilogin" column: Done.
- CTA section with gradient button and hover scale effect: Done.
- Responsive media queries (horizontal scroll for medium, card-based layout on small): Done; for card layout, the table cells should use `data-label` attributes in the HTML to show labels on mobile.

## Notes

- The CSS file uses `backdrop-filter` which may require vendor support on some browsers. For best results, test in modern Chromium-based browsers and Safari.
- To enable the card-based mobile table, ensure your table `td` elements include `data-label` attributes matching the header text (the README examples or your templates can be adapted accordingly).

## Affiliate promo

- Mã giảm giá 50%: **ADBNEW50**
- Link affiliate: https://multilogin.com/#a_aid=ADB

Ví dụ: click vào nút "Mua ngay — Dùng mã ADBNEW50" trên trang để mở trang Multilogin qua đường link affiliate của chúng tôi và áp dụng mã giảm giá.

## Local preview

To preview the site locally, you can run a lightweight static server from this folder.

Using Python 3 (built-in):

```powershell
python -m http.server 8000
# then open http://localhost:8000 in your browser
```

Using Node (install http-server globally):

```powershell
npm install -g http-server; http-server -p 8000
# then open http://localhost:8000
```

Open the URL in a modern browser to confirm the header, CTA, and comparison table render correctly.