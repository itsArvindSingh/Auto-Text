# Typing Animation Effect

A simple JavaScript typing animation that types and erases words one character at a time, creating a dynamic text effect for websites.

## Features

* Typewriter-style text animation
* Automatic word switching
* Smooth typing and erasing effects
* Lightweight and easy to customize
* Pure HTML, CSS, and JavaScript

🔗 **Live Demo:** [View Website](https://itsArvindSingh.github.io/Auto-Text/)


The animation cycles through multiple words such as:

* Awesome
* Fun
* Cool
* Life
* Famous
* Weird

## Project Structure

```text
project/
│
├── index.html
├── style.css
└── script.js
```

## Usage

Add your words inside the array:

```javascript
const words = [
  "Awesome",
  "Fun",
  "Cool",
  "Life",
  "Famous",
  "Weird"
];
```

Customize typing speed:

```javascript
setTimeout(type, 200);
```

Customize erasing speed:

```javascript
setTimeout(erase, 100);
```

## Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)

## Author

Arvind Singh
