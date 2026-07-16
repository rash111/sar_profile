# Sarath Chandar — Product Management Case Study Portfolio

A pristine, high-contrast, fully responsive portfolio tailored for senior product recruiters. Engineered with React 18, TypeScript, Tailwind CSS, and Framer Motion. 

---

## 🌟 Visual & Functional Enhancements for Recruiters

* **Optimized Readability**: High-contrast slate typography paired with generous line height and whitespace to guarantee maximum eye comfort for senior recruiters.
* **No Broken Links / High-Fidelity PDF Viewer**: Clicking "View High-Fi PDF" launches an immersive, page-by-page in-app simulation of the case studies, displaying full corporate headers, confidential seals, and structured layout grids.
* **Modular Codebase**: Clean split between state definitions, interactive components, and global custom styling parameters.

---

## 🚀 How to Export Your Project to GitHub

You can easily export this fully built project directly to your personal GitHub account from the **Google AI Studio** interface:

1. Locate the **Settings** or **Project Options** menu on the top-right corner of the Google AI Studio screen.
2. Click on the **Export to GitHub** option.
3. Authorize Google AI Studio to connect with your personal GitHub account if prompted.
4. Select whether you want to create a new **Private** or **Public** repository, name it (e.g., `sarath-pm-portfolio`), and click **Export**.
5. Once complete, your repository will be live on GitHub, fully populated with this exact production-ready codebase!

*Alternatively, you can select "Download ZIP" from the same menu to download the folder and run `git init && git push` manually.*

---

## 🌐 How to Publish to Your Own Custom Domain

You can host this Single-Page Application (SPA) completely for free and link your own custom domain (e.g., `www.sarathpm.com`) in under 5 minutes. 

### Step 1: Choose a Hosting Platform (Vercel is Recommended)
Vercel is the official host for Vite/React applications.
1. Go to [Vercel](https://vercel.com/) and sign up with your **GitHub** account.
2. Click **Add New** → **Project**.
3. Import your newly exported repository (e.g., `sarath-pm-portfolio`).
4. Keep the default settings (Vercel automatically detects Vite and React).
5. Click **Deploy**. Within 30 seconds, your portfolio will be live on a secure `https://...vercel.app` URL!

### Step 2: Connect Your Custom Domain
Once deployed on Vercel:
1. Inside your Vercel Dashboard, go to your project → **Settings** → **Domains**.
2. Type in your custom domain (e.g., `sarathpm.com` or `portfolio.sarathpm.com`) and click **Add**.
3. Vercel will show you the exact **DNS configuration records** to add:
   * **For Apex Domain (`sarathpm.com`)**: Add an **A record** in your domain registrar pointing to Vercel's IP (`76.76.21.21`).
   * **For Subdomain (`www.sarathpm.com`)**: Add a **CNAME record** pointing to `cname.vercel-dns.com`.
4. Go to your domain registrar (GoDaddy, Namecheap, Squarespace, etc.), open your DNS settings, and paste these values.
5. Within a few minutes, Vercel will automatically provision a free SSL certificate, and your portfolio will be fully active on your custom domain!

---

## 🛠️ Local Development Guide

If you wish to run or modify this project on your local computer:

1. **Install Node.js**: Ensure you have Node.js (version 18+) installed.
2. **Install Dependencies**: Run `npm install` in the project root.
3. **Launch Dev Server**: Run `npm run dev`. This launches a hot-reloading server on `http://localhost:3000`.
4. **Compile Production Build**: Run `npm run build` to verify the production bundle.
