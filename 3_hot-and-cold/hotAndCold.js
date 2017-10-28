const Rx = require('rxjs');
let obs;

// Cold Observable
// obs = Rx.Observable
//     .interval(1000)         // emit a value every 1000ms
//     .take(3)                // limit output to 3 items
//     .map(v => Date.now());  // map each value to date.now



// Hot Observable
obs = Rx.Observable
    .interval(1000)         // emit a value every 1000ms
    .take(3)                // limit output to 3 items
    .map(v => Date.now())   // map each value to date.now
    .publish();             // make the observable hot (part 1) -- each subscription will receive the same value
obs.connect();              // make the observable hot (part 2) -- start the observable sequence



// Subscriptions
obs.subscribe(v => console.log("1st subscriber:" + v));
// second subscription delayed by just over a second
setTimeout(() => obs.subscribe(v => console.log("2nd subscriber:" + v)), 1100);