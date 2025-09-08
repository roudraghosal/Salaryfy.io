# Salaryfy.io - Financial Awareness & Empowerment Platform

![Salaryfy.io](https://via.placeholder.com/800x400/0ea5e9/ffffff?text=Salaryfy.io)

> **Note**: Replace the placeholder image above with actual screenshots once deployed.

## 📋 Overview

Salaryfy.io is a comprehensive financial awareness and empowerment platform designed to help individuals understand their salary structure, optimize their taxes, and build wealth through education. Built with modern web technologies, it provides interactive tools and educational resources for better financial decision-making.

## ✨ Features

### 🧮 Salary Breakdown Calculator
- **Interactive Calculator**: Input gross salary and get detailed breakdowns
- **Visual Charts**: Pie chart visualization using Chart.js
- **Comprehensive Analysis**: Basic salary, HRA, allowances, and deductions
- **Tax Calculations**: Automatic income tax calculation based on current slabs
- **Export Functionality**: Download salary breakdown reports (coming soon)

### 🛡️ Tax Information Center
- **Tax Slabs 2024-25**: Complete income tax slab information
- **Deduction Guide**: Detailed information on 80C, 80D, and other deductions
- **Tax Regime Comparison**: Old vs New tax regime analysis
- **Quick Tax Calculator**: Instant tax calculation tool
- **Interactive Interface**: Tabbed navigation for easy access

### 📚 Financial Education Center
- **Comprehensive Articles**: 6+ in-depth financial guides
- **Category Filtering**: Savings, Investments, Insurance, Budgeting
- **Difficulty Levels**: Beginner, Intermediate, and Advanced content
- **Topics Covered**:
  - Emergency Fund Building
  - SIP vs Lump Sum Investments
  - 50/30/20 Budgeting Rule
  - Insurance Types and Planning
  - Compound Interest Mastery
  - Credit Score Building

### 🎨 User Experience
- **Responsive Design**: Works perfectly on all devices
- **Modern UI**: Clean, professional interface with Tailwind CSS
- **Smooth Animations**: Framer Motion for enhanced user experience
- **Dark/Light Theme**: Coming soon
- **Accessibility**: WCAG compliant design

## 🛠️ Technology Stack

### Frontend
- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Chart.js**: Data visualization
- **Lucide React**: Modern icon library

### Development Tools
- **ESLint**: Code linting
- **PostCSS**: CSS processing
- **Autoprefixer**: CSS vendor prefixes

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/salaryfy-io.git
   cd salaryfy-io
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm run start
```

## 📁 Project Structure

```
salaryfy-io/
├── .github/
│   └── copilot-instructions.md
├── src/
│   ├── app/
│   │   ├── financial-education/
│   │   │   └── page.tsx
│   │   ├── salary-breakdown/
│   │   │   └── page.tsx
│   │   ├── tax-info/
│   │   │   └── page.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── Footer.tsx
│       └── Navbar.tsx
├── public/
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

## 🎯 Key Components

### Navbar
- Responsive navigation with mobile menu
- Smooth animations with Framer Motion
- Active link highlighting

### Salary Calculator
- Real-time calculations
- Interactive pie chart visualization
- Detailed breakdown tables
- Indian salary structure compliant

### Tax Information
- Tabbed interface for different sections
- Interactive tax calculator
- Comprehensive deduction information
- Tax regime comparison tool

### Financial Education
- Article filtering by category
- Full-screen article reading experience
- Progress tracking (coming soon)
- Newsletter subscription

### Footer
- Social media links
- Resource links
- Contact information
- Professional branding

## 🎨 Design System

### Colors
- **Primary**: Blue shades (#0ea5e9 to #0c4a6e)
- **Secondary**: Gray shades for text and backgrounds
- **Success**: Green for positive actions
- **Warning**: Yellow/Orange for important information
- **Error**: Red for errors and negative values

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Bold, hierarchical sizing
- **Body**: Readable line heights and spacing

### Components
- **Cards**: Consistent shadow and border radius
- **Buttons**: Hover effects and loading states
- **Forms**: Focus states and validation styling

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px
- **Large Desktop**: > 1280px

## 🔧 Configuration

### Tailwind CSS
Custom configuration includes:
- Extended color palette
- Custom animations
- Component classes
- Responsive utilities

### Next.js
- App Router configuration
- TypeScript setup
- Image optimization
- Performance optimization

## 📈 Performance Optimizations

- **Next.js Image Component**: Automatic image optimization
- **Code Splitting**: Automatic by Next.js
- **Tree Shaking**: Removes unused code
- **Lazy Loading**: Components load on demand
- **Efficient Animations**: Hardware-accelerated with Framer Motion

## 🧪 Testing (Coming Soon)

- **Unit Tests**: Jest + React Testing Library
- **Integration Tests**: Cypress
- **Performance Testing**: Lighthouse CI
- **Accessibility Testing**: axe-core

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect repository to Vercel
3. Automatic deployments on push

### Netlify
1. Build the project: `npm run build`
2. Deploy the `out` folder
3. Configure redirects for SPA

### Docker
```dockerfile
# Coming soon - Docker configuration
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **Your Name** - *Initial work* - [YourGitHub](https://github.com/yourusername)

## 🙏 Acknowledgments

- Icons by [Lucide](https://lucide.dev/)
- Charts by [Chart.js](https://www.chartjs.org/)
- Animations by [Framer Motion](https://www.framer.com/motion/)
- Styling by [Tailwind CSS](https://tailwindcss.com/)
- Framework by [Next.js](https://nextjs.org/)

## 📞 Contact & Support

- **Email**: contact@salaryfy.io
- **Website**: [https://salaryfy.io](https://salaryfy.io)
- **GitHub Issues**: [Report bugs](https://github.com/yourusername/salaryfy-io/issues)

## 🗺️ Roadmap

### Phase 1 (Current)
- ✅ Basic salary calculator
- ✅ Tax information center
- ✅ Financial education articles
- ✅ Responsive design

### Phase 2 (Coming Soon)
- 🔄 User authentication
- 🔄 Save calculations
- 🔄 Advanced investment calculators
- 🔄 Dark/light theme toggle

### Phase 3 (Future)
- 📋 Personal finance dashboard
- 📊 Goal tracking
- 📈 Portfolio analysis
- 🤖 AI-powered recommendations

---

**Built with ❤️ for financial empowerment**

*Last updated: September 2025*
