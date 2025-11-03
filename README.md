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
## 🧾 What Has Changed (From Old Design to New)

### 🎨 Visual Design
| Old | New |
|-----|-----|
| Basic static green layout with alternating sections | Modern **non-profit theme** using soft white backgrounds, subtle gradients, and clean green highlights |
| Limited spacing and small text | **Larger typography**, better hierarchy with headings and color contrast |
| Repeated image scaling issues | **Fixed image containment** using `aspect-ratio` + `object-fit` for consistent visuals |
| Flat color header/footer | Gradient **hero banner**, **announcement bar**, and **card-style sections** |
| Minimal hover states | Subtle **hover animations**, shadows, and smooth transitions |

### 🧱 Layout & Structure
| Old | New |
|-----|-----|
| Single-page only (`index.html`) | Multi-page project (`index.html`, `enquiry.html`, `contact.html`) |
| Basic flexbox layout | Responsive **CSS grid layout** with max-width container |
| No stats, tabs, or interactivity | Added **hero stats**, **About tabs**, **cards**, **CTA bands**, **partners row** |
| Navigation links only anchor jumps | **Sticky nav with mobile toggle + blur background** |

### 🌈 Color Palette Update
| Element | Old Color | New Color |
|----------|------------|------------|
| Primary Green | `#2e7d32` | `#16a34a` (vivid modern green) |
| Secondary Green | `#388e3c` | `#22c55e` (fresh bright tone) |
| Background | `#f4f4f4` | `#ffffff` / `#f6f8fb` (soft neutral white) |
| Text | `#333333` | `#0b1324` (clean dark ink tone) |
| Accent | none | Gradient buttons, shadows, rounded cards |

---

## 🎯 Learning Outcomes (Part 3)
✅ Implement **JavaScript interactivity**  
✅ Apply **SEO best practices**  
✅ Build **validated HTML forms with JS + AJAX preview**  
✅ Use **GitHub commits** with changelog and README updates  

---

## ✨ Features Overview

### 🧩 Interactive Elements
- Sticky nav with mobile menu toggle  
- Tabs (Mission / Values / Team) under About section  
- Dynamic Events list (search + sort via JS)  
- Image Gallery with Lightbox preview  
- Interactive Map (Leaflet + OpenStreetMap)  
- Announcement bar + animated hero stats  

### 📝 Forms
- `enquiry.html` – Volunteer / Sponsor / Workshop / Produce requests  
- `contact.html` – General queries / partnerships / media requests  
- Client-side **JS validation** (email, phone, required fields)  
- Inline **error messages**  
- **AJAX-style submission preview** (fake email output for grading)

### 🔍 SEO & Accessibility
- `robots.txt` + `sitemap.xml` for indexing  
- Meta description, canonical link, semantic headings  
- Descriptive image alt text  
- ARIA attributes for accessibility  
- Mobile-first layout, no sideways scroll  

---

## 🧱 Project Structure
```bash
/
├─ index.html
├─ enquiry.html
├─ contact.html
├─ style.css
├─ script.js        # navigation, tabs, events, lightbox, map, newsletter
├─ form.js          # validation + AJAX simulation
├─ robots.txt
├─ sitemap.xml
└─ images/
   ├─ banner.jpg
   ├─ about-team.jpg
   ├─ home-garden.jpg
   ├─ event.jpg
   └─ donate.jpg

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
