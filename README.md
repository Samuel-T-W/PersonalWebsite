# PersonalWebsite

A modern, fluid personal portfolio website with dark brown & orange theme, showcasing work experience, projects, and personal interests using professional UI libraries.

## Features

- **Dark Theme**: Beautiful dark brown background with warm orange accents
- **Modern UI Libraries**: Built with Bootstrap 5.3, Font Awesome 6.4, and AOS animations
- **Responsive Design**: Fully responsive layout that works on all devices
- **Smooth Animations**: Floating cards, hover effects, and scroll-based animations
- **GitHub Integration**: Automatically fetches and displays your latest GitHub projects with icons
- **Company Logos**: Experience section features company logos via Clearbit API
- **Single-Page Navigation**: Smooth scrolling to all sections
- **Multi-Section Layout**:
  - Home: Personal introduction with gradient text effects
  - Experience: Professional work history with floating cards and company logos
  - Projects: GitHub projects showcase with Font Awesome icons
  - Interests: Personal hobbies including photography (VSCO integration) and fashion

## Quick Start

Simply open `index.html` in your web browser to view the website locally.

For development with live reload, you can use:
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if you have npx)
npx serve
```

Then navigate to `http://localhost:8000` in your browser.

## Customization

### Update Personal Information

Edit `index.html` to customize:
- Your name and introduction in the Home section
- Work experience details in the Experience section
- Personal interests in the Interests section

### Update GitHub Username

In `script.js`, update the GitHub username:
```javascript
const username = 'Samuel-T-W';  // Change this to your GitHub username
```

### Update VSCO Link

The VSCO gallery link is set to `https://vsco.co/memoir-mosaics/gallery`. To change it, edit the link in the Interests section of `index.html`.

### Customize Theme Colors

Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-orange: #ff9f43;
    --dark-orange: #d87b2c;
    --dark-brown: #1a1410;
    /* ... more colors */
}
```

## Technologies Used

- **Bootstrap 5.3**: Modern responsive CSS framework
- **Font Awesome 6.4**: Professional icon library
- **AOS (Animate On Scroll)**: Smooth scroll animations
- **HTML5**: Semantic markup
- **CSS3**: Custom properties, Grid, and Flexbox
- **Vanilla JavaScript**: No jQuery required
- **GitHub API**: Dynamic project fetching
- **Clearbit API**: Company logo integration
- **Google Fonts**: Poppins font family

## Features in Detail

### Experience Cards
- Float on hover with smooth transitions
- Company logos automatically loaded
- Shadow effects for depth
- Responsive skill tags

### Project Cards
- Icons automatically selected based on project name
- Language badges with color coding
- Star and fork counts
- Direct links to GitHub repositories

### Dark Theme
- Warm brown and orange color palette
- Optimized for readability
- Custom scrollbar styling
- Gradient effects on key elements

## Deployment

This website can be deployed to:
- GitHub Pages
- Netlify
- Vercel
- Any static hosting service

For GitHub Pages:
1. Go to your repository Settings
2. Navigate to Pages
3. Select the branch (e.g., `main`) as the source
4. Your site will be published at `https://yourusername.github.io/PersonalWebsite/`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Feel free to use this template for your own personal website!
