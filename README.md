# Landing Page Project

this is my first project for the egfwd scholarship, I was tasked with adding functionality through javascript to a dummy landing page.  
I did this in two pieces of code:  
- Adding a navigation bar  
- Adding a class that changes dynamically per viewed section

## Adding a navigation bar

this was done by assigning a variable to the navigation bar, then I loop through the document to check for all sections and add them dynamically to the navigation bar.  
I also added an event listener for each element in the navigation bar that sends to a function that scrolls you to the element on the page.  

## Adding a class that changes dynamically per viewed section

this was done by adding an event listener to the whole document that activates every time the user scrolls, checking every section on the page and seeing if it fits on the user screen, if it does, then it applies a class to that specific section, removing it from all other sections.