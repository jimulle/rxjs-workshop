const Rx = require('rxjs');
const fs = require('fs');
let result;

// cover using observables alongside existing code that leverages callbacks or promises
//   bindCallback
const existsObservable = Rx.Observable.bindCallback(fs.exists);
result = existsObservable('./file.txt');
// cold observable (will not start emitting values until subscribed to)
result.subscribe(x => console.log(x));

//   bindNodeCallback
const readFileAsObservable = Rx.Observable.bindNodeCallback(fs.readFile);
result = readFileAsObservable('./file.txt', 'utf8');
// cold observable (will not start emitting values until subscribed to)
result.subscribe(x => console.log(x));

//   fromPromise
const promiseAsObservable = Rx.Observable.fromPromise(
  new Promise(function (resolve, reject) { resolve('resolved promise'); })
);
promiseAsObservable.subscribe(x => console.log(x));