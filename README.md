# blaze-demo

I'm trying to follow meteor's blaze tutorial from ![This link](https://blaze-tutorial.meteor.com/simple-todos/)

Found the following mistakes in their tutorial:
*   Section 1.4, line 5 of code example (imports/ui/App.js)
    ```
    import { Template } from 'meteor/templating';
    
    import './App.html';
    
    Template.app.helpers({  //should be Template.body.helpers({
    tasks: [
        { text: 'This is task 1' },
        { text: 'This is task 2' },
        { text: 'This is task 3' },
    ],
    });
    ```
*   Section 2.1, file ```link.js``` doesn't exist.