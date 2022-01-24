![Dropit](src/tools/assets/logo-dropit-business.svg)

<h1 align="center">Dropit Exam - Frontend React Hooks Project</h1>
<a  href="https://michael-uzan.github.io/dropit-exam/#/"> Link to Dropit Exam  </a>
<h3 align="left">On this Frontend React Hooks Project you can choose buy products <br/>
  I used Redux to handle Cart and andd buy items. <br/>
  </h3>
  
  <h3/> Features: </h3>
  
  - See details abour the products. 
  - Filter products by name, categories / Sort products
  - Add to cart and buy products.
 
 <h3>Technologies:</h3>
 
 - React Hooks
 - TypeScript with Interface/Models
 - Redux / Redux-Thunk
 - Async Methoeds
 - Routing
 - Styled Components

 <h3 align="left">Languages and Tools:</h3>
<p align="left"> <a href="https://reactjs.org/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a>  <a href="https://git-scm.com/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> </a> <a href="https://www.w3.org/html/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://sass-lang.com" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="sass" width="40" height="40"/> </a> <a href="https://www.typescriptlang.org/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40"/> </a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a>
</p>
 
<h3 align="left">Connect with me:</h3>
<p align="left">
<a href="https://linkedin.com/in/michael-uzan-ab637071" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="michael-uzan-ab637071" height="30" width="40" /></a>
</p>




<p><img align="left" src="https://github-readme-stats.vercel.app/api/top-langs?username=michael-uzan&show_icons=true&locale=en&layout=compact" alt="michael-uzan" /></p>

<p>&nbsp;<img align="center" src="https://github-readme-stats.vercel.app/api?username=michael-uzan&show_icons=true&locale=en" alt="michael-uzan" /></p>

<p><img align="center" src="https://github-readme-streak-stats.herokuapp.com/?user=michael-uzan&" alt="michael-uzan" /></p>

<p align="left"> <img src="https://komarev.com/ghpvc/?username=michael-uzan&label=Profile%20views&color=0e75b6&style=flat" alt="michael-uzan" /> </p>


#### Welcome to Dropit's Frontend Test Instractions

### Disclaimers

* The stack for this task are similar to the ones we're using here at Dropit (React with Typescript) 
* The architecture as well (simple implementation)  
* you can add and modify the given architecture, or implement a different architecture of your choosing

### Guidelines

* Use existing implementation (e.g.: components, libraries, configuration)
* Try to mimic the implemented architecture when adding content
* Keep code clean and organized
* Submit the task via mail or a private repo

## Requirements

* Set up an application state (consistent for a single session)

* #### Catalog page
    * extract the products' categories and render the categories within the filter (see next line)
    * add selector to filter the displayed data by a selected category (filter is done locally)
    * add search input that filter the displayed data by product's name (search is done locally)
    * add sort functionality by any property (sort is done locally)
    * handle add product to cart
    * handle click row (navigate to product page)
    * display the cart icon with a badge counter for the number of items (not products) in the cart
    * display "No Results" for an empty table
      
* #### Product page
    * set up new page and module (use existing configuration)
    * handle page refresh
    * display all product extended data
    * display the cart icon with a badge counter for the number of items (not products) in the cart
    * add and handle back button
      
* #### Cart page
    * set up new page and module (use existing configuration)
    * display products that are in the cart state as a table (image, name, price per unit, quantity, total price)
    * show summary data (number of products, number of items, total price)
    * add input for user's name
    * add a checkout button (disabled when cart or user's name is empty)
    * handle checkout by displaying a successful snackbar/modal with a message
    * add and handle back/close button
