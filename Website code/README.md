# ☀️ Grid Master — Advanced Solar Designing, Installation & Integration System

![Grid Master Banner](https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&q=80&w=1200)

[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.1.6-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

**Grid Master** is a modern, high-performance web platform for solar systems engineering, rooftop 3D designing, equipment price cataloging, and turnkey installation & grid integration. Designed for both **Home (Residential)** and **Building (Commercial)** solar purpose requirements.

---

## 🚀 Key Features & Capabilities

### 1. 🏠 Dual Scope: Home vs Building Purpose
- **Home / Residential Solar**: 5 kW to 20 kW hybrid setups, 100% electricity bill offsets, and silent lithium battery backup banks.
- **Building / Commercial Purpose**: 50 kW to 2+ MW commercial rooftop BIPV (Building-Integrated Photovoltaics), high-voltage transformer hooks, ballasted racking, and peak demand shaving.

### 2. 👨‍🔬 Certified Engineering Roster (5 Specialists)
- **GANDHAMANENI GOUTHAM** — **Head Engineer** (*Solar Designing Engineer & Electrical Engineer*)
  - 📞 Direct Phone: `+91 7200745180`
  - ✉️ Email: `goutham4518@gmail.com`
  - 🎓 Credentials: M.Tech Electrical Engineering, NABCEP Solar Master, IEEE Member
- **Ashish Kumar** — **Solar Designer Engineer**
  - ✉️ Email: `snazzy5566@gmail.com`
  - 📐 Specialization: 3D Roof Modeling, Single Line Diagrams (SLD), String Sizing, PVsyst Simulation
- **Priya Sharma** — *Renewable Integration Engineer & Battery Systems Lead*
- **Marcus Vance** — *Field Installation Lead Engineer & Master Electrician*
- **Ananya Patel** — *Photovoltaic Performance Forecasting & Economic ROI Engineer*

### 3. 💳 Interactive 3D Digital Visiting Card
- Flippable 3D card for Head Engineer **GANDHAMANENI GOUTHAM**.
- **Save vCard (.vcf)** button to export complete contact details directly to phone/desktop address books.
- Copy contact credentials, view M.Tech engineering badges, and scan QR code preview.

### 4. 🛒 Hardware Catalog with Transparent Pricing
- Open component store featuring real prices for Tier-1 solar hardware:
  - **AeroUltra 550W N-Type TOPCon Panel**: `$260 / panel`
  - **Bifacial Titan 670W Commercial Panel**: `$340 / panel`
  - **GridMaster Smart Hybrid Inverter 10kW**: `$1,450 / unit`
  - **Microinverter IQ8 Pro 4-Pack**: `$680 / pack`
  - **PowerVault LiFePO4 Battery 15.2 kWh**: `$3,800 / pack`
  - **Industrial Commercial Battery Bank 50 kWh**: `$12,500`
  - **Dual-Axis Solar Tracker Racking**: `$890 / set`
  - **Aerodynamic Ballasted Rooftop Racks**: `$420 / rack`
  - **Bi-Directional Smart Net Meter Kit**: `$240 / unit`
  - **Rapid Shutdown Switch**: `$290`
- Category filtering (*Panels, Inverters, Batteries, Mounting, Accessories*) and live custom system quote builder.

### 5. 📐 Designing Samples & CAD Blueprint Viewer
- Interactive case study portfolio for residential homes and commercial buildings.
- **Inspect CAD Blueprint Modal**: Displays 3D ray-tracing shading maps, string sizing, MPPT efficiency ratings, and official engineering sign-off seals by **GANDHAMANENI GOUTHAM** and **Ashish Kumar**.

### 6. 🧮 System Sizing Calculator & Booking Engine
- Select purpose (**Home** or **Building**), input rooftop area (sq ft) and monthly electric bill.
- Instantly calculates required capacity (kW), monthly generation (kWh), 25-year cumulative savings, payback period, and itemized cost breakdown.
- Direct booking submission with scheduled audit dates, time slots, and interactive booking reference receipts.

---

## 💻 Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS, Glassmorphism UI, PostCSS, Autoprefixer
- **Icons**: Lucide React
- **Typography**: Inter & Fira Code (Google Fonts)
- **Deployment**: Vercel / Netlify / Cloudflare Pages ready

---

## 🛠️ Getting Started (Local Setup)

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (v18 or higher) installed on your machine.

### Installation Steps

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/grid-master-solar.git
   cd grid-master-solar
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start Development Server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your browser.

4. **Build for Production**:
   ```bash
   npm run build
   ```
   The production build will be generated in the `dist/` directory.

---

## 🌐 Deploying to Vercel or Netlify

### Deploy on Vercel (Recommended)
1. Push your code to GitHub.
2. Go to [Vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Select framework preset as **Vite**.
5. Click **"Deploy"**.

### Deploy on Netlify
1. Drag and drop the `dist/` folder after running `npm run build` directly into Netlify, or connect your GitHub repository.

### Connecting a Custom Domain (`www.gridmaster.com`)
1. In Vercel or Netlify project settings, go to **Domains** → **Add Custom Domain**.
2. Add `www.gridmaster.com`.
3. Add CNAME record pointing `www` to `cname.vercel-dns.com` (or Netlify target).

---

## 📁 Project Structure

```
grid-master-solar/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── data/
│   │   └── solarData.js         # Company info, team roster, equipment catalog, design samples
│   └── components/
│       ├── Navbar.jsx           # Top header navigation & quick actions
│       ├── Hero.jsx             # Hero banner with primary CTAs
│       ├── VisitingCard.jsx     # 3D flippable digital visiting card for Head Engineer
│       ├── Services.jsx         # Home & Building solar service capabilities
│       ├── DesignSamples.jsx    # Blueprint portfolio & CAD inspection modal
│       ├── EquipmentCatalog.jsx # Equipment store & transparent pricing
│       ├── SolarCalculator.jsx  # Interactive system sizing & ROI engine
│       ├── Team.jsx             # Employee list with initial badges
│       ├── BookingModal.jsx     # Turnkey consultation booking modal
│       ├── Testimonials.jsx     # Customer reviews & FAQ accordion
│       └── Footer.jsx           # Footer links & company credentials
```

---

## 👤 Contacts & Leadership

- **Company**: Grid Master Solar Systems
- **Head Engineer**: GANDHAMANENI GOUTHAM (*Solar Designing Engineer & Electrical Engineer*)
  - 📞 Phone: `+91 7200745180`
  - ✉️ Email: `goutham4518@gmail.com`
- **Solar Designer Engineer**: Ashish Kumar
  - ✉️ Email: `snazzy5566@gmail.com`
- **Headquarters**: Solar Tech Park, Suite 402, Clean Energy Corridor, Hyderabad

---

© 2026 Grid Master Solar Systems. All rights reserved.
