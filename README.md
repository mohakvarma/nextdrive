# NextDrive

A modern, refined cloud storage platform.

## Features

- 🎨 Modern and polished user interface
- 🌓 Light and dark mode support
- 📁 Intuitive file and folder management
- 🔍 Quick search functionality
- 📱 Responsive design for all devices
- 🔒 Secure authentication

## Tech Stack

This project leverages:

- [Next.js](https://nextjs.org) - React framework for production
- [TypeScript](https://www.typescriptlang.org) - Type safety
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- [NextAuth.js](https://next-auth.js.org) - Authentication
- [Prisma](https://prisma.io) - Database ORM
- [Drizzle](https://orm.drizzle.team) - TypeScript ORM
- [tRPC](https://trpc.io) - End-to-end typesafe APIs
- [shadcn/ui](https://ui.shadcn.com) - Re-usable UI components

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/nextdrive.git
```

2. Install dependencies:
```bash
pnpm install
```

3. Create a `.env` file based on `.env.example`:
```bash
cp .env.example .env
```

4. Set up your database and update the connection string in `.env`

5. Run database migrations:
```bash
pnpm prisma migrate dev
```

6. Start the development server:
```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
nextdrive/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/         # Next.js pages
│   ├── server/        # API routes and procedures
│   ├── styles/        # Global styles and Tailwind config
│   └── utils/         # Utility functions and helpers
├── prisma/            # Database schema and migrations
└── public/           # Static files
```

## Development

### Commands

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm format` - Format code with Prettier

## Deployment

This project can be deployed on any platform that supports Next.js applications:

- [Vercel](https://vercel.com/docs/frameworks/nextjs)
- [Netlify](https://docs.netlify.com/frameworks/next-js/overview/)
- [Docker](https://github.com/vercel/next.js/tree/canary/examples/with-docker)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [shadcn/ui](https://ui.shadcn.com) - For beautiful UI components
- [Lucide Icons](https://lucide.dev) - For the icon set