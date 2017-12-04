# router5-react-redux
Bootstrapped using [Universal Create React App](https://github.com/leanjscom/universal-create-react-app)

## Purpose
Demonstrate router5 in an isomorphic React app, with Redux.

## Key router5-related features
* Transition-blocking async data loading, via middleware.

  The resulting data becomes part props.route.data. It can be mapped to the props via the HOC withData, which handles lifecycle functions as well.
  
* Simplified child route rendering, with child routes being added to the props of their parents, ```props.childRoute```.

  This is similar to how react-router handles child routes via ```props.children```
  
* Transition-blocking lazy loading components, via middleware.

## Gotchas
One thing, regarding async data: Because the data is applied to the route object, it will be lost when the route changes in any way. This means, if you navigate between children, the parent - although it still requires the data - will lose the data from props. To handle this, you can either add the data to the state, and handle updates to it via componentWillReceiveProps, or you can use the HOC withData, which handles it for you.
