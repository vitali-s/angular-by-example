# Directives and Pipes

## ngIf

ngIf directive:
```
<div *ngIf="mediaItem.watchedOn">Watched on {{ mediaItem.watchedOn }}</div>
```

'*' - is a syntax sugar for <ng-template ../>

the same result could be achieved:
```
<ng-template [ngIf]="mediaItem.watchedOn">
    <div>Watched on {{ mediaItem.watchedOn }}</div>
</ng-template>
```

## ngFor

## ngClass

```
[ngClass]="{ 'medium-movies': mediaItem.medium === 'Movies', 'medium-series': mediaItem.medium === 'Series'}"

```

## Custom Directive

# Pipes

'|' - pipe expression operator, for example format date:
```
<div>Watched on {{ mediaItem.watchedOn | date }}</div>
```

## References

Attribute directive: https://angular.io/guide/attribute-directives