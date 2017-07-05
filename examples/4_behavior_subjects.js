const Rx = require('rxjs');

/* behavior subject emits most recent value to new subscriptions */
let userSubject = new Rx.BehaviorSubject();

/* add a new user to the stream */
userSubject.next( { username: 'billyballou@test.com', id: '555' } );

/* first subscription to userSubject */
userSubject.subscribe(
    (user) => { console.log( 'username 1: ' + user.username ); }
);

/* jrulle will have username logged by first subscriptions */
userSubject.next( { username: 'jrulle', id: '123' } );

/* second subscription to userSubject */
userSubject.subscribe(
    (user) => { console.log( 'username 2: ' + user.username ); }
);

/* test-user will be lodded by both subscriptions */
userSubject.next( { username: 'test-user', id: '454' } );

/* end the behavior subject stream */
userSubject.complete();