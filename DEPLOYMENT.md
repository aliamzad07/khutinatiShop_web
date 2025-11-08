# 🚀 Firebase Deployment Guide

## Prerequisites

1. Firebase account (https://firebase.google.com)
2. GitHub repository pushed
3. Firebase CLI installed ✅

## Setup Steps

### 1. Create Firebase Project

1. Go to https://console.firebase.google.com
2. Click "Add project"
3. Name it: `khutinati-shop` (or your preferred name)
4. Follow the setup wizard

### 2. Initialize Firebase Hosting (Run in your terminal)

```bash
cd /Users/aatapu/khutinatiShop_web
npx firebase login
npx firebase init hosting
```

**When prompted:**
- Select: Use an existing project
- Choose: khutinati-shop (or your project name)
- Public directory: `dist`
- Single-page app: `Yes`
- Automatic builds with GitHub: `No` (we'll use custom workflow)

### 3. Get Firebase Service Account Key

1. Go to Firebase Console → Project Settings
2. Go to Service Accounts tab
3. Click "Generate New Private Key"
4. Download the JSON file
5. Copy the entire JSON content

### 4. Add GitHub Secrets

Go to your GitHub repository:
https://github.com/aliamzad07/khutinatiShop_web/settings/secrets/actions

Add these secrets:

**Required Secrets:**

1. **FIREBASE_SERVICE_ACCOUNT**
   - Value: Paste the entire JSON from step 3

2. **VITE_API_URL** (optional)
   - Value: Your production backend API URL
   - Example: `https://your-backend.com/api`

### 5. Update Firebase Project ID

If your Firebase project name is different from `khutinati-shop`:

Edit `.firebaserc`:
```json
{
  "projects": {
    "default": "your-actual-firebase-project-id"
  }
}
```

Edit `.github/workflows/deploy.yml`:
```yaml
projectId: your-actual-firebase-project-id
```

### 6. Push to GitHub

```bash
git add .
git commit -m "Add Firebase deployment configuration"
git push origin main
```

**GitHub Actions will automatically:**
- Build your app
- Deploy to Firebase
- Show deployment URL in Actions tab

## Manual Deployment (Optional)

To deploy manually:

```bash
npm run build
npx firebase deploy
```

## Deployment Flow

```
Push to main
    ↓
GitHub Actions triggered
    ↓
Install dependencies
    ↓
Build React app (npm run build)
    ↓
Deploy to Firebase Hosting
    ↓
Live at: https://khutinati-shop.web.app
```

## Auto-Deploy Triggers

✅ Push to `main` branch
✅ Pull Request merged to `main`

## Environment Variables

Production API URL is set via GitHub secret `VITE_API_URL`

To update:
1. Go to GitHub repository settings
2. Secrets and variables → Actions
3. Update `VITE_API_URL`
4. Push a commit to trigger new deployment

## Deployment URL

After first deployment, your app will be available at:
- **Primary**: https://khutinati-shop.web.app
- **Alternate**: https://khutinati-shop.firebaseapp.com

## Monitoring

View deployment status:
- GitHub Actions: https://github.com/aliamzad07/khutinatiShop_web/actions
- Firebase Console: https://console.firebase.google.com

## Troubleshooting

### Build fails in GitHub Actions
- Check build logs in Actions tab
- Verify all dependencies in package.json
- Check environment variables

### Deployment fails
- Verify FIREBASE_SERVICE_ACCOUNT secret is correct
- Check Firebase project permissions
- Ensure project ID matches in .firebaserc

### App not loading after deployment
- Check browser console for errors
- Verify VITE_API_URL points to production backend
- Check Firebase hosting configuration

## Next Steps After First Deploy

1. ✅ Test the deployed site
2. ✅ Update VITE_API_URL with production backend
3. ✅ Configure custom domain (optional)
4. ✅ Set up Firebase Analytics (optional)
5. ✅ Enable Firebase Performance Monitoring (optional)

---

**Ready to deploy!** Follow steps 1-6 above to complete the setup.

