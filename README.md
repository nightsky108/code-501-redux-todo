#  Yet another todo app

Just having fun with React + Redux

## Model View Controller:
* Model: Data layer
<- ->
* Controller->: User interaction with data
<- ->
* View: User view

## Flux Arch.
* Store: Where data is located
->
* View: Render via props
->
* Reducers: Callback functions called by user view to change state

---

An action in Redux is a JSON with a name:, and a payload which describes what happened.

---
Components: Hold smart components
Containers: Hold dumb components
Actions: Actions made against state
Reducers: Dispatch actions

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](http://standardjs.com)