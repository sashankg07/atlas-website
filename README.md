# AI News Hub

A modern, responsive news aggregator focused on artificial intelligence developments, built with Next.js and TypeScript.

## 🚀 Features

- **Modern UI**: Clean, responsive design built with Tailwind CSS
- **AI News Focus**: Curated content specifically about artificial intelligence
- **Static Generation**: Fast loading with Next.js static export
- **Automated Content**: Daily GPT API refresh for fresh news content
- **TypeScript**: Full type safety throughout the application

## 📋 Prerequisites

- Node.js 18 or higher
- npm or yarn
- OpenAI API key (for automated content generation)

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/ai-news-hub.git
cd ai-news-hub
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Add your OpenAI API key to `.env.local`:
```
OPENAI_API_KEY=your_openai_api_key_here
```

4. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 🏗️ Build and Deployment

### Local Build
```bash
npm run build
```

### Production Deployment
The application is configured for static export and can be deployed to any static hosting service.

## 🔄 GitHub Workflows

This project includes three automated workflows:

### 1. Deploy and Build (`deploy.yml`)
- **Triggers**: Push to main/master branch, pull requests
- **Actions**:
  - Runs linting and builds the application
  - Deploys to GitHub Pages on main/master branch
  - Creates deployment status

### 2. Daily GPT API Refresh (`daily-refresh.yml`)
- **Triggers**: Daily at 6:00 AM UTC, manual dispatch
- **Actions**:
  - Fetches fresh AI news content using GPT-4
  - Updates `src/data/mockData.ts` with new articles
  - Commits and pushes changes
  - Creates a summary issue

### 3. CI (`ci.yml`)
- **Triggers**: Pull requests, pushes to main/master
- **Actions**:
  - Runs linting
  - Builds the application
  - Uploads build artifacts

## 🔧 Setup for GitHub Actions

### Required Secrets

1. **OPENAI_API_KEY**: Your OpenAI API key for the daily refresh workflow
   - Go to your repository settings
   - Navigate to Secrets and variables → Actions
   - Add a new secret named `OPENAI_API_KEY`
   - Enter your OpenAI API key

### GitHub Pages Setup

1. Enable GitHub Pages in your repository settings
2. Set the source to "GitHub Actions"
3. The deploy workflow will automatically build and deploy your site

## 📁 Project Structure

```
ai-news-hub/
├── .github/workflows/     # GitHub Actions workflows
├── public/               # Static assets
├── scripts/              # Utility scripts
├── src/
│   ├── app/             # Next.js app directory
│   ├── components/      # React components
│   └── data/           # Data files and types
├── package.json
└── README.md
```

## 🎨 Customization

### Adding New Components
1. Create your component in `src/components/`
2. Import and use it in your pages
3. Follow the existing TypeScript patterns

### Modifying the Daily Refresh
1. Edit `scripts/refresh-gpt-data.js`
2. Modify the prompt or data structure as needed
3. The workflow will automatically use your changes

### Styling
- The project uses Tailwind CSS for styling
- Custom styles can be added to `src/app/globals.css`
- Component-specific styles should be added using Tailwind classes

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues:

1. Check the [Issues](https://github.com/yourusername/ai-news-hub/issues) page
2. Create a new issue with detailed information
3. Include steps to reproduce the problem

## 🔮 Future Enhancements

- [ ] Add real-time news API integration
- [ ] Implement user authentication
- [ ] Add news categories and filtering
- [ ] Create a mobile app version
- [ ] Add social sharing features
- [ ] Implement newsletter functionality

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS 