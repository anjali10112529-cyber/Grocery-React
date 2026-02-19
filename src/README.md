# Navbar Component (Vegist Store)

This README documents the **Navbar** implementation used in the Vegist Store project.  
The Navbar is built with **React** and **Bootstrap 5**, and includes responsive behavior, dropdown menus, and a mega menu layout.

---

## 📦 Dependencies
- **React** (v17+ or v18+)
- **Bootstrap 5** (CSS + JS)
- **Font Awesome** (for icons)

Make sure you have Bootstrap and Font Awesome included in your project:

```bash
npm install bootstrap @fortawesome/fontawesome-free

In your index.js or App.js:
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';

The Navbar contains:

Logo (left-aligned)

Toggle button (hamburger menu, visible on md and below)

Collapsible nav links (HOME, SHOP, COLLECTION, BLOG, PAGES, BUY VEGIST)

Mega menu dropdowns for SHOP and COLLECTION

Social icons (search, user, wishlist, cart) visible only on md and above