## Implementation Array App

## Avialble Scripts
In the project directory, you can run:

### `npm run test`
Runs the whole test files that we have

### `npm run imp`
Runs the Find duplicate App

### `npm run dupl`
Runs the Implementation Array App

### `npm run word`
Runs Words length App

### `npm run zeroes`
Runs zeroes to the end of Array App



## Find duplicate App

The main idea of an app is that we have two types of array:

1. There are numbers 1 to n, only one number is
   duplicate(repeated two times), the other numbers are unique.
   That is, there are n+1 elements in the array.
   e.g. [1,2,3,6,5,4,1]


2. There are numbers 1 to n, only one number is
   unique, the other numbers are repeated two times.
   That is, there are 2*n-1 elements in the array.
   e.g. [1,2,3,1,2,3,4]

And determine the type of the array, if it is the first type, we return the duplicate; if it is second type, we return the unique.

Note:
+ All numbers are positive integers that from 1 to n;
+ The length of array always more than 5;

## Implementation Array App

The main idea of an app is to implement an object (class) that mimics the array object, but should not actually be an Array. You are otherwise free to choose your own implementation.
You can find several files in ImplementingTheArrayObject folder with different ways of solution.


The object named List and have the methods push, pop, shift, unshift, filter, sort, findDuplicate, removeDuplicate, sameWithArr and flat defined on its prototype. Each of these methods can behave exactly as their Array counterpart does.
The List constructor take an arbitrary number of arguments as initial values for your list.
Furthermore, our list have a length property that dynamically changes as your list changes.



## Words length App

The main idea of an app to split string into separate words that include charachters from different languages

List of languages supported by the application u can find in languages.js:

+ LAT - latin
+ RUS - russian
+ BLR - belarusian
+ BGR - bulgarian
+ ESP - spanish
+ ITA - italian
+ DEU - dutch
+ NOR - norwegian
+ POL - polish
+ ROU - romanian
+ SRB - serbian
+ UKR - ukrainian
+ FRA - french
+ SWE - swedish



## Zeroes to the end App

The main idea of an app is that we have an array:

1. We should put all zeroes to the end of array and return it.


2. If their no zeroes in array we should return message: "no zeros found".