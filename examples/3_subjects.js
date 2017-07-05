const Rx = require('rxjs');

let userSubject = new Rx.Subject();

/* billyballou will not be logged at all */
userSubject.next( { username: 'billyballou@test.com', id: '555' } );

/* jrulle will have username only logged */
userSubject.subscribe(
    (user) => { console.log( 'username: ' + user.username ); }
);
userSubject.next( { username: 'jrulle', id: '123' } );

/* test-user will have both username and user id logged */
userSubject.subscribe(
    (user) => { console.log( 'user id: ' + user.id ); }
);
userSubject.next( { username: 'test-user', id: '454' } );

/* end the subject stream */
userSubject.complete();