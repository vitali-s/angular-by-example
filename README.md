# Introduction

* Angular is build around components (there components dependencies and tree model)
* Application starts with bootstrapping initial parent component

## Components

Component is based on 'Component' class
** has appropriate html template (template syntax for binding and rendering)
** selector defined unique id for component (selector: 'component-id')
** methods and properties

## Directives

* Provides functionality to transform dom
* There are two types:
** Structural - modifies layout by altering elements in DOM
** Attribute - change behaviour or appearance
* Directive should have a selector that will be used to apply directive
* Angular also comes with number of directives out of the box, like:
** ngIf, ngFor, routerLink

## Pipes

Transforms input to output.

## Data binding

* In template:
```
<h1>{{ movie.title }}</h1>
```

## Dependency Injection

Decouple modules dependencies.
```
constructor(formBuilder: FormBuilder) {}
```

## Services

Business logic, which is decoupled from Components

## Data Persistance

working with data:
* custom service for in-memory
* custom data store service for local storage
* using Angular Http (XHR, JSONP)

## Routing

Angular Router Module
* router configuration
* routing links
* router outlets
* routing events

## Getting Started

Angular CLI - tool to create projects, add files, and perform variety of development tasks.

Install CLI globally
```
npm install -g @angular/cli
```

Create new project
```
ng new my-app
```

Server application
```
ng serve --open
```

## References

Quick start: https://angular.io/guide/quickstart
Angular CLI: https://github.com/angular/angular-cli/wiki

## Q&A

how to define styles as Sass?
* https://stackoverflow.com/questions/36220256/angular-cli-sass-options

