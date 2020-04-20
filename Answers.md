1. What problem does the context API help solve?

    It offers a lightweight and native alternative to Redux. Also provides a less complex component state management to replace prop
    drilling.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    Actions: carry paylods of data from the applixation to the store.

    Reducers: Reducers decide what the action wants to do and then updates the applications state accordingly.

    Store: Acts as the 'central nervous system' of the application that alllows all components to access its data.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

    Application is global and accessable by all components without prop drilling. Component state is local;ized and only available to
    that component.

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    Thunk works as a middleware that allows you to write and return a function instead of an action.

5. What is your favorite state management system you've learned and this sprint? Please explain why!

    Although Content API is smaller and 'easier to use I think I prefer Redux. I had a hard time grasping the concept so I did extra
    research and learned a lot more which seemed to help solidify the concepts in my brain.
