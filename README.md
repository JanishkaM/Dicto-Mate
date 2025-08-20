# Dicto-Mate

Dicto-Mate is a web application designed to make practicing dictations easy and efficient. It allows users to create custom "dictos" (word lists), save words, and practice by having the website read the words aloud one by one. This is especially useful for language learners, students, and anyone looking to improve their spelling or listening skills.

## Features

- **Create Dictos:** Users can create their own dictos (word lists) and add words to them.
- **Save Words:** Easily add and manage words in each dicto.
- **Practice Mode:** Select a dicto and have the website read each word aloud, helping users practice dictation.
- **Modern UI:** Built with Bootstrap 5 for a clean and responsive interface.
- **Offline Support:** Includes a service worker for offline usage.

## Project Structure

- `index.html` - Home page
- `dicto.html` - Main dicto management and practice interface
- `dictionary.html` - Dictionary and word management
- `practice.html` - Practice dictation interface
- `contact.html` - Contact page
- `assets/` - Contains CSS, JS, and image assets
  - `bootstrap-5.3.0/` - Bootstrap framework files
  - `css/main.css` - Custom styles
  - `js/` - JavaScript files for app logic
    - `dicto.js` - Dicto management and practice logic
    - `dictionary.js` - Dictionary features
    - `main.js` - General app logic
    - `practice.js` - Practice mode logic
  - `img/` - Images and icons
- `manifest.json` - PWA manifest for installability
- `sw.js` - Service worker for offline support

## Getting Started

1. Clone the repository:
   ```sh
   git clone https://github.com/JanishkaM/Dicto-Mate.git
   ```
2. Open `index.html` in your browser to start using Dicto-Mate.

## Usage

- **Create a Dicto:** Go to the dicto page, create a new dicto, and add words.
- **Practice:** Select a dicto and start the practice mode. The website will read each word aloud for you to write down.
- **Dictionary:** Manage your words and look up meanings.


## Technologies Used

- HTML5, CSS3, JavaScript
- Bootstrap 5
- Service Worker (for offline support)
- No database is used; all data is stored locally in the browser using localStorage.

## License

This project is licensed under the MIT License.

## Author

Created by JanishkaM.
