## What is in this section? 

* Pass data
* raise and handle events
* Multiple components in sync
* Functional components
* `Lifecycle hooks


* using this.props.children to do content projection(or slots concept)
* Using $something to access elements/components in dev console
* The component that owns a piece of the state, should be the one modifying it

* Controlled components doesnt have local state, gets data via props and raises events

Lifecycle hooks
* allows us to hook into lifecycle of a component
* no lifecycle hooks in functional components

Mounting Phase
    constructor -- called once, right place to initialize properties, call super(props)
    render
    componentDidMount -- after component is rendered in dom, place to make ajax calls and setstate

Update Phase
    render
    componentDidUpdate

Unmounting Phase
    componentWillUnmount