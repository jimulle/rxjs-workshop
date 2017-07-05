Because streams are so important to Rx, let's dive into the familiar "button click" event stream.

Click event stream
--a---b-c---d---X---|->

a, b, c, d are emitted values
X is an error
| is the 'completed' signal
---> is the timeline

A stream is a sequence of events ordered in time. It can emit three different things: a value, an error, or a completed signal. The "completed" signal is emitted when the current window or view containing our button is closed.

We define three functions:
the first will execute when a value is emitted
the second when an error is emitted*
the third when the 'completed' signal is emitted*

* it is not uncommon for these to be omitted. 

"Listening" to the stream is called subscribing. The functions are observers. The stream is the subject (or "observable") being observed. This is the Observer Design Pattern.

Creating new click event streams transformed out of the original click event stream:

 - Each stream can have one or more functions attached to it, such as map, filter, scan, etc. When a function, such as clickStream.map(f), is called it returns a new stream. It does not modify the original click stream.

Counter stream: 
clickStream.map(v=>1).scan((acc,v)=>acc+v):

  clickStream: ---c----c--c----c------c-->
               vvvvv map(c becomes 1) vvvv
               ---1----1--1----1------1-->
               vvvvvvvvv scan(+) vvvvvvvvv
counterStream: ---1----2--3----4------5-->

 - counterStream emits the total number of clicks whenever a click happens.

Multiple clicks stream: 
buffer(clickStream.throttle(250)).map(v=>v.length).filter(v=>v>=2)

  clickStream: -c------c--c------c--c-cc------c------>
               vvvvvvvv buffer(throttle(250ms)) vvvvvv
               ------c---------c------------c------c->
                               c            c
                                            c
               vvvvvvv map('get length of list') vvvvv
               ------1---------2------------3------1->
               vvvvvvvvvvv filter(x >= 2) vvvvvvvvvvvv
               ----------------2------------3-------->

 - 1. accumulate clicks in lists, whenever 250 milliseconds of "event silence" has happened (that's what buffer(stream.throttle(250ms)) does)
 - 2. apply map() to each list to get the length of that list
 - 3. use the filter(x >= 2) to remove click lists of length 1
 