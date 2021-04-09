import {Template} from 'meteor/templating';
import { TasksCollection } from "../api/TasksCollection";
import {ReactiveDict} from 'meteor/reactive-dict';
import './App.html';
import "./Task.js";

const HIDE_COMPLETED_STRING = "hideCompleted";

Template.body.helpers({
    tasks() {
        const instance = Template.instance();
        const hideCompleted = instance.state.get(HIDE_COMPLETED_STRING);

        const hideCompletedFilter = {isChecked: {$ne: true}};

        return TasksCollection.find(hideCompleted ? hideCompletedFilter : {}, {sort: {createdAt: -1}}).fetch();
    },
    hideCompleted() {
        return Template.instance().state.get(HIDE_COMPLETED_STRING);
    },
});

Template.body.onCreated(function bodyOnCreated() {
    //create a state on the body element
    this.state = new ReactiveDict();
})

Template.body.events({
    "click #hide-completed-button"(event, instance) {
        const currentHideCompleted = instance.state.get(HIDE_COMPLETED_STRING);
        instance.state.set(HIDE_COMPLETED_STRING, !currentHideCompleted);
    }
});

Template.form.events({
    "submit .task-form"(event) {
        event.preventDefault();

        //get value from form element
        const target = event.target;
        const text = target.text.value;

        //insert a task into the collection
        TasksCollection.insert({
            text,
            createdAt: new Date()
        });

        //clear form
        target.text.value = "";
    }
})