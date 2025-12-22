# Deployment Guide - jaimansharma.dev

This guide will help you deploy your portfolio to `jaimansharma.dev`.

## Option 1: Vercel (Recommended - Easiest)

Vercel is the recommended platform for Next.js apps and offers free hosting with custom domains.

### Step 1: Prepare Your Code

1. **Initialize Git** (if not already done):
```bash
cd /home/jaimansharma/Desktop/CODE/Website
git init
git add .
git commit -m "Initial commit - Portfolio website"
```

2. **Create a GitHub Repository**:
   - Go to [GitHub](https://github.com) and create a new repository
   - Name it something like `portfolio` or `jaiman-portfolio`
   - Don't initialize with README (you already have one)
   - Copy the repository URL

3. **Push to GitHub**:
```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel

1. **Sign up/Login to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign up with your GitHub account (free)

2. **Import Your Project**:
   - Click "Add New..." → "Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Wait for Build**:
   - Vercel will build and deploy your site
   - You'll get a URL like `your-project.vercel.app`

### Step 3: Configure Custom Domain

1. **In Vercel Dashboard**:
   - Go to your project → Settings → Domains
   - Click "Add Domain"
   - Enter `jaimansharma.dev`
   - Click "Add"

2. **Domain DNS Configuration**:
   
   You need to configure DNS records with your domain registrar (where you bought jaimansharma.dev):
   
   **If using Vercel's nameservers** (easiest):
   - Vercel will show you nameservers (e.g., `ns1.vercel-dns.com`)
   - Go to your domain registrar
   - Update nameservers to Vercel's nameservers
   
   **If using A/CNAME records**:
   - Add a CNAME record:
     - Type: `CNAME`
     - Name: `@` (or root domain)
     - Value: `cname.vercel-dns.com`
   - Or add A records (Vercel will show you the IPs)

3. **Wait for DNS Propagation**:
   - DNS changes can take 24-48 hours (usually much faster)
   - Vercel will show "Valid Configuration" when ready
   - Your site will be live at `jaimansharma.dev` and `www.jaimansharma.dev`

### Step 4: SSL Certificate

- Vercel automatically provides free SSL certificates
- HTTPS will be enabled automatically once DNS is configured

## Option 2: Netlify (Alternative)

If you prefer Netlify:

1. Sign up at [netlify.com](https://netlify.com)
2. Connect your GitHub repository
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
4. Add custom domain in Site settings → Domain management

## Option 3: Self-Hosting (Advanced)

If you want to host on your own server:

1. **Build the production bundle**:
```bash
npm run build
```

2. **Start the production server**:
```bash
npm start
```

3. **Use a reverse proxy** (nginx recommended):
   - Configure nginx to proxy to `localhost:3000`
   - Set up SSL with Let's Encrypt
   - Configure DNS A records to point to your server IP

## Pre-Deployment Checklist

Before deploying, make sure:

- [ ] All content in `lib/content.ts` is correct
- [ ] Resume PDF is in `public/resume.pdf`
- [ ] All links (GitHub, LinkedIn) are correct
- [ ] Test the build locally: `npm run build`
- [ ] Check for any console errors
- [ ] Verify all images/icons load correctly

## Post-Deployment

1. **Test your site**:
   - Visit `jaimansharma.dev`
   - Test all links and navigation
   - Check mobile responsiveness
   - Verify resume download works

2. **Update Content**:
   - Make changes in `lib/content.ts`
   - Push to GitHub
   - Vercel will auto-deploy updates

3. **Analytics** (Optional):
   - Add Vercel Analytics in dashboard
   - Or add Google Analytics if preferred

## Troubleshooting

**Domain not working?**
- Check DNS propagation: [whatsmydns.net](https://www.whatsmydns.net)
- Verify DNS records are correct
- Wait up to 48 hours for full propagation

**Build errors?**
- Check Vercel build logs
- Ensure all dependencies are in `package.json`
- Verify Node.js version compatibility

**Images not loading?**
- Ensure all files are in `public/` directory
- Check file paths are correct (case-sensitive)

## Quick Deploy Command

If you have Vercel CLI installed:
```bash
npm i -g vercel
vercel
```

This will guide you through deployment interactively.

---

**Recommended**: Use Vercel for the easiest deployment experience with automatic SSL, CDN, and zero-configuration setup.

