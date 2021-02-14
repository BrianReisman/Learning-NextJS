Learning NextJS

Notes:
- NextJS runs on NodeJS so wherever you deploy needs to be able to handle Node

## styling
- No import needed.
- Inside your JSX add an HTML <style></style> tag.
- To the opening tag at the prop 'jsx' without a value.
- In between the tags use {} to escape from JSX land
- Inside the {} use backticks `` (just like stlyed-components) to also wrap all of your styling code.
- Everything that follows is 1. in JS and 2. can be written like any other CSS.

## custom error handling
- add a file titled "_error.js" to the pages folder


## getInitialProps Lifecycle hook
- a method that recieves context passed to it. Big object, inspect in NextJS docs.
- is a static method
- can be async as well
- must return an object
- makes sure props are recieved (or resolved if fetched async ) before rendering.
- can be added to functional components by adding a method to the function (since js functions are objects) called .getInitialProps and using as in class components. Example in Auth > index.js