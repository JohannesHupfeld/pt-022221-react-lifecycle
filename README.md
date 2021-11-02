# React - Lifecycle Methods

## Questions to Ask Youself
- Why have a lifecycle?
- What is this taking the place of in vanilla JS?

## Lifecycle Diagram
- http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

## 3 Phases
https://reactjs.org/docs/react-component.html

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