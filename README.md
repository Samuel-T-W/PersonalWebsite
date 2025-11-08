# PersonalWebsite

A modern, fluid personal portfolio website showcasing work experience, projects, and personal interests.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Smooth Animations**: Fluid transitions and scroll-based animations
- **GitHub Integration**: Automatically fetches and displays your latest GitHub projects
- **Multi-Section Layout**:
  - Home: Personal introduction and overview
  - Experience: Professional work history with timeline visualization
  - Projects: GitHub projects showcase with live data
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

In `script.js`, update the GitHub username on line 76:
```javascript
const username = 'Samuel-T-W';  // Change this to your GitHub username
```

### Update VSCO Link

The VSCO gallery link is already set to `https://vsco.co/memoir-mosaics/gallery`. To change it, edit the link in the Interests section of `index.html`.

## Technologies Used

- HTML5
- CSS3 (with CSS Grid and Flexbox)
- Vanilla JavaScript
- GitHub API
- Google Fonts (Inter)

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

## License

Feel free to use this template for your own personal website!
