# 🎬 DubLab AI - Premium Multi-Page Video Dubbing SaaS Platform

DubLab AI is an industrial-grade, production-ready AI Video Dubbing and Voice Cloning SaaS platform designed to break language barriers with flawless realism. The system features a smart multi-language routing engine that seamlessly switches workloads between **Chatterbox TTS** and high-scale regional engines like **Dubverse API**.

---

## 🚀 Key Features (15-Stage Modular Infrastructure)

- **Smart Language Routing:** Automatically routes translation tasks to Chatterbox for its 22 native languages and safely hands off regional or complex Indian dialects to Dubverse/Fish Audio.
- **Premium Multi-Page UI:** Built with Next.js App Router and Tailwind CSS featuring modern dark mode designs, interactive progress bars, and custom layouts.
- **Instant Voice Cloning Lab:** Train high-fidelity neural voice speaker models natively from a short audio reference file.
- **Secure Referral Program:** A growth hacking viral loop system that rewards users with 1 free credit after 5 successful unique signups. Includes database lock parameters to prevent double-claiming.
- **Production-Ready Billing Architecture:** Complete structural webhooks and placeholders ready to plug in Stripe or Razorpay API keys seamlessly.
- **Admin Control Panel:** Master root dashboard to monitor real-time node latency, manage server status, and adjust referral campaign parameters globally.

---

## 📁 Repository Structure

```text
dublab-ai-saas/
├── backend/
│   ├── controllers/      # Business logic (Routing, Billing, Referral Lock)
│   ├── middleware/       # Multer security rules (50MB multimedia file limit)
│   ├── routes/           # Clean API route registrations
│   ├── .env              # Local secret environment keys (Kept hidden)
│   └── server.js         # Unified Express execution core engine
└── frontend/             
    └── app/              # Next.js Monolithic SaaS dashboard environment
```

---

## 🛠️ Installation & Setup

### 1. Backend Server Setup
Go to the backend directory, install packages, and spin up the express server node:
```bash
cd backend
npm install
node server.js
```

### 2. Frontend SaaS Interface
Go to the frontend directory, install local workspace packages, and run the development environment:
```bash
cd ../frontend
npm install
npm run dev
```

Open `http://localhost:3000` to launch the live DubLab AI studio workspace interface.

---

## 🔒 Security & Optimization Guidelines
- **Local File Safety:** The backend strictly uses automated file cleanup modules (`fs.unlinkSync`) to instantly purge uploaded content after voice synthesis to avoid edge server storage overflows.
- **Zero Fake APIs:** All endpoint architectures are designed with integration-ready fetch/axios pipelines. Swap placeholders inside the `.env` file to take the application live into consumer markets immediately.
