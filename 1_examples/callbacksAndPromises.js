const Rx = require('rxjs');

// cover using observables alongside existing code that leverages callbacks or promises
//   bindCallback
var getJSONAsObservable = Rx.Observable.bindCallback(jQuery.getJSON);
var result = getJSONAsObservable('/my/url');
result.subscribe(x => console.log(x), e => console.error(e));
// or
someFunction((a, b, c) => {
  console.log(a); // 5
  console.log(b); // 'some string'
  console.log(c); // {someProperty: 'someValue'}
});
const boundSomeFunction = Rx.Observable.bindCallback(someFunction);
boundSomeFunction.subscribe(values => {
  console.log(values) // [5, 'some string', {someProperty: 'someValue'}]
});

//   bindNodeCallback
import * as fs from 'fs';
var readFileAsObservable = Rx.Observable.bindNodeCallback(fs.readFile);
var result = readFileAsObservable('./roadNames.txt', 'utf8');
result.subscribe(x => console.log(x), e => console.error(e));
// or
someFunction((err, a, b) => {
  console.log(err); // null
  console.log(a); // 5
  console.log(b); // "some string"
});
var boundSomeFunction = Rx.Observable.bindNodeCallback(someFunction);
boundSomeFunction()
.subscribe(value => {
  console.log(value); // [5, "some string"]
});

//   fromPromise
var result = Rx.Observable.fromPromise(fetch('http://myserver.com/'));
result.subscribe(x => console.log(x), e => console.error(e));

//   fromEvent
var clicks = Rx.Observable.fromEvent(document, 'click');
clicks.subscribe(x => console.log(x));
    // Results in:
    // MouseEvent object logged to console everytime a click
    // occurs on the document.