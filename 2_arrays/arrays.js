const Rx = require('rxjs');

// basic mapping example
// Rx.Observable
//     .from( [ 1, 3, 6, 10 ] )
//     .map( num => num + 2 )
//     .toArray()
//     .subscribe( num_arr => console.log( num_arr ) );

// map/filter/reduce then map one last time
// Rx.Observable
//     .from( [0,1,2,3,4,5,6,7,8,9] )
//     .map(x=>x+1)
//     .filter(x=>x%3==0 || x%5==0)
//     .reduce((a,b)=>{return a+b;})
//     .map(x=>x+100)
//     .subscribe(
//         value => console.log( value )
//     );

// map/filter/reduce then map one last time (same as above, just logging each step)
const logit = (x,s) => { console.log(s + ' ' + x); };
Rx.Observable
    .from( [0,1,2,3,4,5,6,7,8,9] )
    .map(x=>x+1)
    .do(x=>logit(x,'-'))
    .filter(x=>x%3==0 || x%5==0)
    .do(x=>logit(x,'*'))
    .reduce((a,b)=>{return a+b;})
    .do(x=>logit(x,'+'))
    .map(x=>x+100)
    .subscribe(
        value => console.log( value )
    );