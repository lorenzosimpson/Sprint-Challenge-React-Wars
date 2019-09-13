# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

    React is a JavaScript library used for building user interfaces. When a site has lots of data that is changing quickly, the DOM is required to update. This becomes an issue when more and more data is changing. React solves the issue using the Virtual DOM. React stores the current state and changes the DOM only where there are differences, which reduces the amount of data that has to be re-rendered.

1. What does it mean to think in react?
    
    Thinking in React is a 5-step process to visualizing an application. Straight from the docs: 
    Step 1: Break The UI Into A Component Hierarchy
    Step 2: Build A Static Version in React (with no interactivity)
    Step 3: Identify The Minimal (but complete) Representation Of UI State
    Step 4: Identify Where Your State Should Live
    Step 5: Add Inverse Data Flow

1. Describe state.
    
    State is an object that determines how components render. State can be thought of using a water and ice analogy - thermal energy determines what matter the state is in (solid vs. liquid).

1. Describe props.

    Props are simply properties that determine how a component renders. In an image component, the source would be a prop. 

1. What are side effects, and how do you sync effects in a React component to state or prop changes?
    
    Side effects are things happening outside of a function scope, including API calls and logging. These effects are synced using a dependency array in the effect hook. This will avoid the effect from firing after any change.