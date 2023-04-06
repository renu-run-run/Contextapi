# Context Api


The Context API is a feature of React that allows data to be passed down the component tree without the need for props drilling. It provides a way to share data between components that are not directly related to each other, without having to pass the data through every intermediate component.
Context is essentially a global object that can hold any data that needs to be shared across multiple components. It consists of three main parts:

    Context object
    Provider component
    Consumer component

The problem Context API solves Context API solves the problem of props drilling. When props need to be passed through multiple layers of components, it can lead to code that is hard to read, understand, and maintain. Context API provides an elegant solution to this problem by allowing data to be shared directly between components without having to pass it through intermediate components.

## In Context API, you can pass data from a parent component to a child component in several ways. Here are some points on how to do this:

1. Create a context object in the parent component using the createContext method from the React library.

2. Define a state object in the parent component, which contains the data that you want to pass to the child component.

3. Wrap the child component inside the context object using the Provider component.

4. Pass the state object as a value prop to the Provider component.

5. In the child component, use the useContext hook to access the data that was passed from the parent component.

6. You can also pass down functions from the parent component to the child component using the same approach. These functions can be used to update the state in the parent component, which in turn updates the data passed down to the child component.

7. If you need to pass down data from multiple parent components to the same child component, you can use nested Providers. In this case, the child component will have access to all the data provided by its parent components.

8. It's important to note that the data passed down through context is not automatically re-rendered when it changes. To ensure that the child component re-renders when the data changes, you can use the useEffect hook and specify the state object as a dependency.

Overall, the Context API provides a powerful way to pass data between components without having to pass it down through every level of the component tree.
