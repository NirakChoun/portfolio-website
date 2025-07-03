# Choun Chan Nirak's Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, Tailwind CSS, and Three.js.

## 🚀 Features

- **Modern Design**: Clean, minimalist design with beautiful animations
- **3D Elements**: Interactive Three.js animations for a unique visual experience
- **Responsive**: Fully responsive design that works on all devices
- **Performance**: Optimized for speed and SEO
- **Sections**:
  - Hero/Welcome section with animated 3D background
  - Skills section with animated progress bars
  - Projects showcase with hover effects
  - Contact form with social links

## 🛠️ Technologies Used

- **Frontend**: Next.js 15, React, TypeScript
- **Styling**: Tailwind CSS
- **3D Graphics**: Three.js, React Three Fiber, React Three Drei
- **Animations**: Framer Motion
- **Icons**: Lucide React

## 📋 Setup Instructions

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```

3. **Open in Browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Customization

### Adding Your Profile Picture
1. Download your profile picture from Google Drive
2. Add it to the `public` folder as `profile.jpg`
3. Update the Hero component to use your image

### Adding Project Links
Update the projects array in `src/components/Projects.tsx` with your actual GitHub and demo links.

### Updating Contact Information
Update your contact details in `src/components/Contact.tsx`.

## 🚀 Deployment

Deploy to Vercel by connecting your GitHub repository to Vercel for automatic deployments.
