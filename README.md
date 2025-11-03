# GreenRoots Community Garden Website

## Student Information
- **Name:** Lujia Xiao  
- **Student Number:** ST10484117  
- **Course:** WEDE5020  
- **Lecturer:** Kincade Garanganga  

---

## Links
- **GitHub Repository:** [https://github.com/ST10484117/WED-Part1.git](https://github.com/ST10484117/WED-Part1.git)  

---

## Project Overview
GreenRoots Community Garden is a non-profit organization founded in 2015, aimed at promoting urban agriculture, environmental awareness, and sustainable living in Cape Town.  

This project demonstrates a **fully responsive, modern, and accessible one-page website** built using HTML and CSS. The website includes sections for:  
- Home  
- About Us  
- Upcoming Events  
- Volunteer & Donate  
- Contact  

It features a clean layout, Flexbox-based responsive design, and subtle hover animations for interactivity.

---

## Website Goals and Objectives
- Increase online visibility and attract new volunteers and donors  
- Promote events and workshops  
- Provide educational resources on sustainable living  
- Improve communication with the community  
- Deliver a modern, responsive, and accessible website layout

---

## Key Features and Functionality
- **Homepage:** Highlights mission and vision with banner image and introductory text  
- **About Us Section:** Information about the organization and team  
- **Events Section:** Calendar of upcoming workshops and activities  
- **Volunteer & Donate Section:** Instructions to participate and email contact  
- **Contact Section:** Contact details and map location  
- **Responsive Design:** Flexbox layout with alternating sections, stacking on tablets and mobile  
- **Interactive Elements:** Subtle hover animations for images, navigation links, and sections

---

## Timeline and Milestones
- **Week 1:** Research and planning  
- **Week 2–3:** Design and development  
- **Week 4:** Testing and revisions  
- **Week 5:** Launch  

---

## Part 1 & Part 2 Details
This submission includes:  
- Website proposal (Word/PDF)  
- Updated HTML (`index.html`) with semantic elements `<main>`, `<section>`, `<header>`, `<footer>`  
- External CSS (`style.css`) implementing Flexbox, responsive design, and hover effects  
- Screenshot evidence for desktop, tablet, and mobile views  
- Updated README.md documenting changes and references  

---

## Sitemap
- `index.html` (One-page website with sections: Home, About, Events, Volunteer/Donate, Contact)  

> **Note:** All content is on a single page; previous separate HTML pages have been consolidated for Part 2.

---

## Changelog

| Date       | Version | Changes / Improvements |
|------------|---------|-----------------------|
| 2025-09-29 | v1.0    | Initial release: homepage, about, events, volunteer, contact pages. Navigation menu and README.md added. |
| 2025-09-30 | v1.1    | Semantic improvements: `<main>`, `<section>`, `<header>`, `<footer>` |
| 2025-09-30 | v1.2    | Fixed image filenames, added descriptive alt text, meta description for SEO |
| 2025-09-30 | v1.3    | Added external CSS, Flexbox layout, alternating sections, box shadows |
| 2025-09-30 | v1.4    | Implemented responsive design with media queries for tablets and mobile |
| 2025-09-30 | v1.5    | Added subtle hover effects: image zoom, navigation link scaling, section background tint |

---

## Screenshots

### Desktop View
![Desktop View]

<img width="1889" height="1030" alt="Screenshot 2025-09-29 113336" src="https://github.com/user-attachments/assets/c46bbd06-906a-45a3-b9e4-81f54c8ef8b1" />
<img width="1897" height="936" alt="Screenshot 2025-09-29 113540" src="https://github.com/user-attachments/assets/5b33bf7c-cc6b-4886-ad86-fc3b92f12e90" />
<img width="1882" height="950" alt="Screenshot 2025-09-29 113558" src="https://github.com/user-attachments/assets/58950ea9-c243-48f6-bb34-202e85494113" />
<img width="1919" height="1030" alt="Screenshot 2025-09-29 113612" src="https://github.com/user-attachments/assets/900b6f48-1258-472a-9d37-7a356374db42" />
<img width="1903" height="1026" alt="Screenshot 2025-09-29 113631" src="https://github.com/user-attachments/assets/c91b2e04-91fd-459f-98c5-9d4270069e74" />

---

## Technologies Used
- HTML5  
- CSS3 (Flexbox, Responsive Design)  
- Semantic HTML  
- Accessibility features (aria-label, alt text)  
- CSS hover animations  

---

What changed (old ➜ new)
Structure & Pages

Old: Single one-page site (index.html) with only HTML/CSS.

New: Multi-file site with progressive enhancement:

index.html (main one-pager, now with JS features)

enquiry.html & contact.html (separate forms per rubric)

script.js (tabs, gallery lightbox, events search/sort, Leaflet map)

form.js (client-side validation + error messages + AJAX-style submit preview)

style.css (modern design system + image containment)

robots.txt and sitemap.xml (SEO)

Visual Design

Old: Basic green theme, alternating sections.

New: Modern non-profit look:

Sticky blur nav, announcement bar, hero with stats, card-based programs & events

Consistent aspect-ratios and object-fit: cover so images never overflow or jump

CTA band, partners row, refined footer with newsletter (fake submit)

Interactivity (JS)

Old: None.

New:

Tabs (Mission / Values / Team)

Events list with search + sort (dynamic render)

Gallery lightbox (click to enlarge)

Leaflet map (real interactive map, no API key)

Accordion (optional; retained pattern), mobile nav toggle

Forms (meets rubric 4.1)

enquiry.html and contact.html each have:

Client-side validation (email, required, phone pattern)

Error handling (inline messages)

AJAX-style submission (no backend needed): compiles a JSON “email preview” in a <pre> block to demonstrate how data would be sent.

Different purposes: enquiry = services/sponsor/volunteer; contact = general message.

SEO

Meta description, canonical (if you keep it), semantic headings

robots.txt and sitemap.xml

Clean internal linking in header/footer

Accessibility & Mobile

Skip link, labelled controls, aria on tabs/lightbox, responsive grids, never any sideways scroll.

## References
1. [MDN Web Docs - HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)  
2. [MDN Web Docs - CSS Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)  
3. [W3Schools - Responsive Web Design](https://www.w3schools.com/css/css_rwd_intro.asp)  
4. Online gardening and sustainability resources  
5. Project brief and class resources provided by HCMAWD1_G1-3_VCGPSD_2025  

---

## How to View
1. Clone or download the repository  
2. Ensure `index.html`, `style.css`, and all images are in the same folder  
3. Open `index.html` in a browser  
4. Test responsiveness on desktop, tablet, and mobile
