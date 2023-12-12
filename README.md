# README for Zodiac Compatibility Test Project

## Introduction
Welcome to the "Zodiac Compatibility Test" project! This interactive web application lets users check their zodiac compatibility with others in a fun and engaging way.

## Features
- **Compatibility Test**: Users can select their zodiac sign to find out which signs they are most and least compatible with.
- **Direct Compatibility Check**: Allows users to select two zodiac signs and directly check their compatibility.
- **Theme Switch**: A light and dark mode toggle for user convenience.
- **Responsive Design**: The application is built using Bootstrap, ensuring a responsive layout on various devices.

### Main Components
1. **Event Listeners**: The script sets up event listeners that trigger functions when certain actions occur in the browser. For instance, it listens for changes in the zodiac sign selections and the theme switch toggle.

2. **Compatibility Logic**: The core of this application lies in its ability to determine zodiac compatibility. This is implemented through a predefined object called `compatibility`, which maps each zodiac sign to its most, also, and least compatible signs.

3. **Dynamic Content Update**: The script dynamically updates the content of the webpage based on user interactions, such as selecting zodiac signs or toggling the theme.

### Key Functions
1. **`checkCompatibility()`**: This function is triggered when a user selects a zodiac sign in the "Compatibility Test" tab. It retrieves the user's selected sign and updates the compatibility results accordingly.

2. **`displayResults(category, sign)`**: It's a helper function used by `checkCompatibility()` to update the text and images for the compatibility results. It takes the category (most, also, or less compatible) and the selected zodiac sign as parameters.

3. **`checkDirectCompatibility()`**: Used in the "Direct Compatibility" tab, this function checks the compatibility between two selected zodiac signs. It determines if the chosen signs are highly compatible, compatible, or less compatible, and updates the display accordingly.

4. **Theme Toggle**: The theme switch event listener changes the webpage's theme (light or dark) based on the user's preference. This is a nice touch for enhancing user experience.

### Debugging and Validation
- The script includes a `console.log` statement within `checkDirectCompatibility()` for debugging purposes. This logs the compatibility results to the console, which can be useful during development and troubleshooting.

### Interactivity and User Feedback
- The script makes the web application interactive by providing real-time feedback. When a user selects a zodiac sign, the compatibility results are immediately displayed without needing to reload the page.

### Conclusion
The JavaScript code in this project effectively combines event handling, DOM manipulation, and conditional logic to create an engaging and responsive user experience. It's a good example of how JavaScript can be used to add interactivity and dynamic content to a web page.

## Technologies Used
- HTML5
- CSS3 (with Bootstrap 4.3.1)
- JavaScript
- FontAwesome for icons

## Setup and Installation
To get started with this project, follow these steps:
1. Clone the repository.
2. Open the `index.html` file in a web browser.
3. No additional installation is required, as the project uses CDN links for Bootstrap and FontAwesome.

## Usage
- Select your zodiac sign in the "Compatibility Test" tab to see compatibility results.
- Use the "Direct Compatibility" tab to compare two zodiac signs directly.
- Switch between light and dark mode using the theme toggle at the top.

## Compatibility Logic
The compatibility logic is defined in `compatibility.js`. Zodiac signs are categorized into 'most compatible', 'also compatible', and 'less compatible' groups based on common astrological beliefs.

## Contributing
Contributions to enhance this project are welcome. Feel free to fork the repo and submit pull requests.

## License
This project is open-source and available under the [MIT License](LICENSE.md).

## Acknowledgments
- Bootstrap for the responsive framework.
- FontAwesome for the icons used in the theme switch.

## Contact
Created by [Igor](https://github.com/igordinuzzi) - feel free to contact me!

