# Components

Angular provides number of decorators. Decorator defined as:
```
@Component()
```

Component behaves as a directive.

## Define application module

Define NgModule:
```
import { NgModule } from '@angular/core';

@NgModule({
    imports: [], // other modules that you may need in the module
    declarations: [], // makes components, directives and pipes available for the module
    bootstrap: [] // used for root module, entry point for code
})
```

Use browser module:
```
import { BrowserModule } from '@angular/platform-browser';

... imports: [BrowserModule] ...
```

Make app component available in this module:
```
import { AppComponent } from './app.component';

... declarations: [ AppComponent ] ...

// and add to bootstrap

... bootstrap: [ AppComponent ] ...
```

## Create Component

```
import { Component } from '@angular/core';

@Component() 
export class AppComponent {
    selector: 'app-root',
    templateUrl: './app.component.html',
}
```

## Create bootstrapping module

```
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch(err => console.log(err));
```

## Template Syntax

Supports:
* Interpolation
* Binding
* Expressions
* Condition templating
* Template variables
* Template expression operators

Reference: https://angular.io/guide/template-syntax

### Interpolation

```
<h1>{{ 10 + 5 }}</h1>
```

### Data binding

```
<h2 [textContent]="name"></h2>
<h2 textContent="{{ name }}"></h2>

```

### Event binding

```
<a (click)="onDelete()">
```