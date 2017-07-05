const Rx = require('rxjs');

let userSubject = new Rx.Subject();

/* billyballou will not be logged at all */
userSubject.next( { username: 'billyballou@test.com', id: '555' } );

/* jrulle will have username only logged by subscribe 1*/
userSubject.subscribe(
    (user) => { console.log( 'username1: ' + user.username ); }
);
userSubject.next( { username: 'jrulle', id: '123' } );

/* test-user will have username lodded by both subscriptions */
userSubject.subscribe(
    (user) => { console.log( 'username2: ' + user.username ); }
);
userSubject.next( { username: 'test-user', id: '454' } );

/* end the subject stream */
userSubject.complete();