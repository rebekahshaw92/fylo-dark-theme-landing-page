# Frontend Mentor - Fylo dark theme landing page solution

This is a solution to the [Fylo dark theme landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/fylo-dark-theme-landing-page-5ca5f2d21e82137ec91a50fd). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

#### Desktop

![desktop](images/desktop.png)

#### Mobile

![mobile](images/mobile.png)

### Links

- Solution URL: [ Solution](https://github.com/rebekahshaw92//fylo-dark-theme-landing-page)
- Live Site URL: [Live Site](https://rebekahshaw92.github.io//fylo-dark-theme-landing-page/)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Sass
- JavaScript
- Bootstrap 5
- Mobile-first workflow

### What I Learned

While doing this project I learned how to add an svg to code rather than adding it as an image, this allowed me to be able to change the colour on hover. 

```html
   <svg class="linkIcon" width="16" height="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <defs>
            <circle id="b" cx="6" cy="6" r="6"/>
            <filter x="-25%" y="-25%" width="150%" height="150%" filterUnits="objectBoundingBox" id="a">
              <feOffset in="SourceAlpha" result="shadowOffsetOuter1"/>
              <feGaussianBlur stdDeviation="1" in="shadowOffsetOuter1" result="shadowBlurOuter1"/>
              <feColorMatrix values="0 0 0 0 0.384313725 0 0 0 0 0.878431373 0 0 0 0 0.850980392 0 0 0 0.811141304 0" in="shadowBlurOuter1"/>
            </filter>
          </defs>
          
          <g fill="none" fill-rule="evenodd"><g transform="translate(2 2)"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#62E0D9" xlink:href="#b"/></g>
          <path d="M8.582 6l-.363.35 1.452 1.4H5.333v.5h4.338L8.22 9.65l.363.35 2.074-2z" fill="#1B2330"/>
        </g>
        </svg>

```

```css
 svg > svg > g > g > use { 
        fill: white;
      } 
```

### Continued Development

I would like to continued working both with Bootstrap 5.

### Userful Resources 

- [Bootstrap](https://getbootstrap.com) - This site helped me learn all I needed to know about Bootstrap.


## Author

- Website - [Rebekah Shaw](https://www.rebekahshaw.com)
- Frontend Mentor - [@rebekahshaw92](https://www.frontendmentor.io/profile/rebekahshaw92)
- Twitter - [@x_beckyboo_x](https://www.twitter.com/x_beckyboo_x)