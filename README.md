# Grace Community Church Website

A stunning, modern church website built with Next.js, TailwindCSS, and Framer Motion.

## Features

- **Live Stream Section** — Embed YouTube/Facebook Live streams for your services
- **Social Media Hub** — Connect all your social platforms (YouTube, Facebook, Instagram, X, TikTok, Spotify)
- **Smooth Animations** — Beautiful scroll-based animations powered by Framer Motion
- **Responsive Design** — Looks amazing on all devices
- **Dark Theme** — Professional, modern dark aesthetic with gold accents
- **Contact Form** — Ready-to-connect contact section
- **Events Calendar** — Showcase upcoming events and services

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production

```bash
npm run build
npm start
```

## Customization

### Update Social Media Links

Edit `src/components/SocialMedia.tsx` — replace the `url` and `handle` fields with your actual social media links.

### Update Live Stream

Edit `src/components/LiveStream.tsx` — replace the YouTube embed URL with your channel's live stream URL:

```
src="https://www.youtube.com/embed/live_stream?channel=YOUR_CHANNEL_ID"
```

### Update Church Info

- **Church name**: Search for "Grace" across components to rename
- **Service times**: Update in `Hero.tsx` and `Events.tsx`
- **Contact info**: Update in `Contact.tsx`
- **Address/Phone/Email**: Update in `Contact.tsx`

## Tech Stack

- **Next.js 14** — React framework
- **TailwindCSS** — Utility-first CSS
- **Framer Motion** — Animations
- **Lucide React** — Icons
- **TypeScript** — Type safety
