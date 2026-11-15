# Rohit's Portfolio

A responsive personal portfolio built with Next.js. It presents an introduction, background, selected projects, and a contact form.

## Features

- Responsive layout with About, Projects, and Contact sections
- Animated role text and section transitions
- Filterable project cards with optional source-code and preview links
- Contact form powered by the Resend email API
- Custom SVG illustrations and project imagery

## Tech stack

- Next.js 15 App Router
- React 19
- Tailwind CSS 4
- Framer Motion
- Resend

## Getting started

### Requirements

- Node.js 18.18 or newer
- npm

### Install and run

```bash
git clone https://github.com/Rohit-gi2/rohit-portfolio.git
cd rohit-portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Contact form configuration

The contact form sends messages through Resend. Create a `.env.local` file in the project root:

```env
RESEND_API_KEY=re_your_api_key
FROM_EMAIL=your_verified_email@example.com
```

`FROM_EMAIL` is used as both the sender and recipient address, so messages are delivered to that inbox. Use a sender address verified with Resend. Keep `.env.local` private; it is ignored by Git.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run lint` | Run ESLint |
| `npm run build` | Create a production build |
| `npm start` | Run the production server |


## Deployment

Deploy with your preferred Next.js host. For production, configure `RESEND_API_KEY` and `FROM_EMAIL` in the host's environment-variable settings before deploying.
