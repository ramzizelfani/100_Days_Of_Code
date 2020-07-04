- Sass: Syntactically Awesome StyleSheets
- allow us to enhance CSS capabilities
- A CSS Preprocessor / Precompiler
- Enhances the functionality of CSS
- Other preprocessors: Less, Stylus...
- Sass Extensions: .scss (recommended) or .sass
- The browser does not read Saas, it must be compiled to normal css before getting rendered to the DOM.
- Many Different types of Sass compilers (cli & gui): e.g. node-sass (npm module), Koala (GUI), VSCode Extensions...
- Sass Pros:
  - Variables / Nesting / Partials/Imports / Functions & Mixins / Conditionals / Inheritance / Operators & Calculations / Color Functions...
- .sass vs .scss:

  - .sass: Indentation, No Curly Braces
  - .scss: Same syntax as css with additional features

- Partials: are scss files will not be compiled and rendered as css yet they gonna be imported using the @import keyword to a non-partial scss file. partials always start with "\_"

- Functions vs Mixins:
  - A Function: A reusable block of code that gets an input and returns an output.
  - A Mixin is a set of styles that you wants to include. Unlike functions, mixins do not return anything.
