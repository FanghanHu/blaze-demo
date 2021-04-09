# blaze-demo

I'm trying to follow meteor's blaze tutorial from [This link](https://blaze-tutorial.meteor.com/simple-todos/)

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
*   Section 2.2 import for ```TasksCollection``` should be ```'../imports/api/TasksCollection'``` in order to match previous sections.
*   At end of Section 6.1:
    ```
    ...

    </header>

    <div class="main">
        {{> form }}

        <div class="filter">
            <button id="hide-completed-button">
                {{#if hideCompleted}}
                        Show All
                {{else}}
                        Hide Completed
                {{/if}}
            </button>
        </div>
    </div> <!-- div.main closed too early, didn't include ... or the task display portion, may cause confusion --> 

    ...
    ```

    continue in 6.3