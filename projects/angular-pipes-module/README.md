# angular-pipes-module

This library contains reusable Angular pipes for sorting and filtering.

## Pipes

* filterObjects - Filters out any object where none of its properties contain the passed in search string ```filterObjects(input: object[], query: string)```
* sortObjects - Sort objects either accending or decending by comparing one of the object's properites ```sortObjects(input: object[], field: string, desc = false)```

## Usage Example

```html
<tr *ngFor="let user of users | filterObjects:searchString | sortObjects:sortType:sortReverse">
```
