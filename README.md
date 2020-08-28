# Readme // notes from the course

I used Bable for the first time to use JSX. Below is a definition along with other things I wanted to note or remember.
Babel is a free and open-source JavaScript trans-compiler that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript that can be run by older JavaScript engines. Babel is a popular tool for using the newest features of the JavaScript programming language.

- babel is how we take advantage of ecma script 5 and take advantage of JSX
- converted ECMA script 6 to 5, so it was more compatible with browsers

## JSX

JSX it is a syntax extension to JavaScript, use with React to describe what the UI should look like. JSX produces React "elements". It is not HTML.

- React Styling
- blurred separation of concerns
- style within component
- bugs easy to locate
- self contained component

## Definitions

DOM - Document Object Model
Refractor - is the process of restructuring existing computer code - changing the factoring - without changing its external behavior
Class Components - classes provide a much simpler and clearer syntax to create object and deal with inheritance
CDN - Content Delivery Network is a system of distributed servers (networks) that delivers webpages and other web content to a user based on the geographical locations of the user, the origin of the webpage and a content delivery server
Objects - a value type consisting of key/value pairs. Anything that isn't a primitive (string, number, boolean, null, undefined, symbol) is an object
Name Changes

- variables --> properties
- functions --> methods
- Object Literal Notation {};
  object.property = value
  var car = {wheels: 4, color: 'red'}
  car.wheels = 4
  car.color = red
- Bracket Notation
  object['property'] = value
  car['wheels'] = 4

- use ES6 if you use "this" and lifecycle methods

Components - let you split the UI into independent, reusable pieces, and think about each piece in isolation. Conceptually components are like JS functions. They accept arbitrary inputs (called props) and return React elements describing what should appear on the screen
Props - How components talk to each other. Passing data from parent (top) to child (down). Used when you use immutable data (read only/not changing).

## Functional Programming

JS can handle higher order functions, a higher order function takes another function as an argument, or that returns a function as a result
Pure Function. Benefit is knowing what you are to get.
Pitfalls: sometimes you get far more than you ask for.

- gives the same input, will always return the same output
- produce no side effects
- relies on no external state
  Map/Filter/Reduce
  Filter: array.filter(function(currentValue), {return true;})

impure function --> Math.random() which gives you a new random number between 0 and 1 every time you run it
Map - creates a new array with the results of calling a provided function on every element of an array

## CSS

Link tag should be in header of the HTML to link the CSS file

- class won't work as a name in JSX but className does, but due to some bugs, className should be used

## React Events

Handling events with React elements is very similar to handling events on DOM elements. There are some syntactic differences:

- React events are named using camelCase rather than lowercase
- With JSX you pass a function as the event handler, rather than a string
  Event Handler: a function that should run whenever an event occurs

Naming Convention:

1. Begin with "on" or "handle"
2. Name the DOM element
3. Describe the expected action

# This & Bind

In most cases, the value of <b>"this"</b> is determined by how a function is called. It can't be set by assignment during execution, and it may be different each time the function is called. ES5 introduced the <b>bind</b> method to set the value of a function's "this" regardless of how it's called. Bind Creates a new function that will have "this" set to the first parameter passed to bind().

## Tips

Stateless Function Components

- Use these when you do not need additional features of class components

## License & Copyright

Omar Mussehl
© 2020 GitHub, Inc.
