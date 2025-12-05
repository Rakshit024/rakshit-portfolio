# Deployment Guide - Vercel

This guide will help you deploy your portfolio website to Vercel.

## Prerequisites

- GitHub account
- Vercel account (free tier available)
- Your portfolio code pushed to GitHub

## Step-by-Step Deployment

### Step 1: Prepare Your Code

1. Make sure all your code is in the `frontend` folder
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Ready for Vercel deployment"
   git push origin main
   ```

### Step 2: Deploy via Vercel Dashboard

1. **Go to Vercel**: Visit [vercel.com](https://vercel.com) and sign in
2. **Import Project**: Click "Add New Project"
3. **Select Repository**: Choose your GitHub repository
4. **Configure Project**:
   - **Framework Preset**: Vite
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
5. **Deploy**: Click "Deploy"

### Step 3: Verify Deployment

1. Wait for build to complete (usually 1-2 minutes)
2. Visit your deployment URL (provided by Vercel)
3. Test all features:
   - Dark mode toggle
   - Contact form
   - Navigation
   - Responsive design

## Custom Domain (Optional)

1. Go to your project settings on Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

## Environment Variables

Currently, no environment variables are needed for this frontend-only deployment.

## Automatic Deployments

Vercel automatically deploys:
- Every push to `main` branch → Production
- Pull requests → Preview deployments

## Troubleshooting

### Build Fails

- Check build logs in Vercel dashboard
- Ensure `package.json` has correct scripts
- Verify all dependencies are listed

### 404 Errors on Routes

- The `vercel.json` file handles this with rewrites
- Ensure `vercel.json` is in the `frontend` folder

### Assets Not Loading

- Check that `public` folder is in `frontend` directory
- Verify asset paths are relative

## Performance Tips

- Images: Use optimized formats (WebP)
- Code splitting: Already handled by Vite
- Caching: Vercel handles automatically

## Support

For Vercel-specific issues, check:
- [Vercel Documentation](https://vercel.com/docs)
- [Vercel Community](https://github.com/vercel/vercel/discussions)

