const Rx = require('rxjs');

/* behavior subject emits most recent value to new subscriptions */
let userSubject = new Rx.BehaviorSubject();

/* billyballou will have username logged */
userSubject.next( { username: 'billyballou@test.com', id: '555' } );

/* jrulle will have both username and id logged */
userSubject.subscribe(
    (user) => { console.log( 'username: ' + user.username ); }
);
userSubject.next( { username: 'jrulle', id: '123' } );

/* test-user will have both username and user id logged */
userSubject.subscribe(
    (user) => { console.log( 'user id: ' + user.id ); }
);
userSubject.next( { username: 'test-user', id: '454' } );

/* end the behavior subject stream */
userSubject.complete();