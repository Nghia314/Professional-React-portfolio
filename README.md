# Professional-React-portfolio
## Description
- This portfolio is create by using react, contain Most of my impressive work.

## Table Of Contents
- Description
- Table Of Contents
- Technology Used 
- Result
- Code Snippet
- License

## Technology Used
- React and Javascript

## Result
Deployed link - https://nghia314.github.io/Professional-React-portfolio/#resume

Github link - https://github.com/Nghia314/Professional-React-portfolio

## Code Snippet
The Following Code Snippet is showing how render a page in case of whatever button user click on it will return that page.
```
const renderPage = () => {
    switch (currentPage) {
      case "About":
        return <About />;
      case "Portfolio":
        return <Portfolio />;
      case "Contact":
        return <Contact />;
      case "Resume":
        return <Resume />;

      default:
        return <About />;
    }
  };
```

## License
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)