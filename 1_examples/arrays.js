const Rx = require('rxjs');

// map/filter/reduce then map one last time
Rx.Observable
    .from( [0,1,2,3,4,5,6,7,8,9] )
    .map(x=>x+1)
    .filter(x=>x%3==0 || x%5==0)
    .reduce((a,b)=>{return a+b;})
    .map(x=>x+100)
    .subscribe(
        value => console.log( value )
    );

// create a helper method on arrays to complete the from step for us
Object.defineProperty(
    Array.prototype,
    'rx',
    {
        enumerable: false,
        value: function() { return Rx.Observable.from(this); }
    }
);

// map/filter/reduce then map one last time (same as above, just using our new helper method)
[0,1,2,3,4,5,6,7,8,9].rx()
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

function logit(x,s) { console.log(s + ' ' + x); }