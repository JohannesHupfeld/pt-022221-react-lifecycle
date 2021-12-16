# React - Lifecycle Methods

## Questions to Ask Youself
- Why have a lifecycle?
  - display something on the DOM while your JS is loading
- What is this taking the place of in vanilla JS?
  - display some data on our basic html page then have a JS file that might fetch some data asynchronously and then append things to the DOM

## Lifecycle Diagram
- http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

## 3 Phases
https://reactjs.org/docs/react-component.html
  - bold = commonly used
  - italics = not commonly used
  - UNSAFE = found in legacy codes
### Mounting
- __constructor()__
- *static getDerivedStateFromProps()*
- UNSAFE_componentWillMount()
- __render()__
- __componentDidMount()__

### Updating
- *static getDerivedStateFromProps()*
- *shouldComponentUpdate()*
- UNSAFE_componentWillUpdate
- UNSAFE_componentWillReceiveProps()
- __render()__
- *getSnapshotBeforeUpdate()*
- __componentDidUpdate()__

### Unmounting
- __componentWillUnmount()__

### Error Handling Methods
- *static getDerivedStateFromErrors()*
- *componentDidCatch()*

## Hooks
https://reactjs.org/docs/hooks-effect.html