# simple-pagination

[![npm version](https://badge.fury.io/js/simple-pagination.svg)](http://badge.fury.io/js/simple-pagination)
[![Build Status](https://travis-ci.org/kjirou/simple-pagination.svg?branch=master)](https://travis-ci.org/kjirou/simple-pagination)

Just provides only a simple pagination logic


## Installation

```
npm install --save simple-pagination
```


## API

```js
/*
 * Returns pagination result
 *
 * @param {number} totalCount    - Number of items that will be paginated
 * @param {number} perPage       - Number of items per page
 * @param {number} specifiedPage - Page number you wanted to get, it is started by 1
 */
function paginate(totalCount, perPage, specifiedPage) {
};
```


## Examples

```js
var assert = require('assert');
var paginate = require('simple-pagination');

assert.deepEqual(
  paginate(25, 10, 1), {
    totalCount: 25,
    perPage: 10,
    specifiedPage: 1,
    pageCount: 3,
    firstPage: 1,
    lastPage: 3,
    currentPage: 1,
    isFirstPage: true,
    isLastPage: false,
    previousPage: null,
    nextPage: 2,
    fromCount: 1,
    toCount: 10
  }
);

assert.deepEqual(
  paginate(25, 10, 3), {
    totalCount: 25,
    perPage: 10,
    specifiedPage: 3,
    pageCount: 3,
    firstPage: 1,
    lastPage: 3,
    currentPage: 3,
    isFirstPage: false,
    isLastPage: true,
    previousPage: 2,
    nextPage: null,
    fromCount: 21,
    toCount: 25
  }
);

// Specified page number is out of range
assert.deepEqual(
  paginate(25, 10, 4), {
    totalCount: 25,
    perPage: 10,
    specifiedPage: 4,
    pageCount: 3,
    firstPage: 1,
    lastPage: 3,
    // currentPage is different from specifiedPage
    currentPage: 3,
    isFirstPage: false,
    isLastPage: true,
    previousPage: 2,
    nextPage: null,
    fromCount: 21,
    toCount: 25
  }
);

// If page count is 0, then props are mostly null
assert.deepEqual(
  paginate(0, 1, 1), {
    totalCount: 0,
    perPage: 1,
    specifiedPage: 1,
    pageCount: 0,
    firstPage: null,
    lastPage: null,
    currentPage: null,
    isFirstPage: null,
    isLastPage: null,
    previousPage: null,
    nextPage: null,
    fromCount: null,
    toCount: null
  }
);
```
