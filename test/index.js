var assert = require('assert');

var paginate = require('../index');


describe('simple-pagination module', function() {

  it('should be', function() {
    assert.deepEqual(paginate(25, 10, 1), {
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
    });

    assert.deepEqual(paginate(25, 10, 2), {
      totalCount: 25,
      perPage: 10,
      specifiedPage: 2,
      pageCount: 3,
      firstPage: 1,
      lastPage: 3,
      currentPage: 2,
      isFirstPage: false,
      isLastPage: false,
      previousPage: 1,
      nextPage: 3,
      fromCount: 11,
      toCount: 20
    });

    assert.deepEqual(paginate(25, 10, 3), {
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
    });
  });

  it('should be correct if items are evenly divisible by the number of pages', function() {
    assert.deepEqual(paginate(10, 5, 1), {
      totalCount: 10,
      perPage: 5,
      specifiedPage: 1,
      pageCount: 2,
      firstPage: 1,
      lastPage: 2,
      currentPage: 1,
      isFirstPage: true,
      isLastPage: false,
      previousPage: null,
      nextPage: 2,
      fromCount: 1,
      toCount: 5
    });

    assert.deepEqual(paginate(10, 5, 2), {
      totalCount: 10,
      perPage: 5,
      specifiedPage: 2,
      pageCount: 2,
      firstPage: 1,
      lastPage: 2,
      currentPage: 2,
      isFirstPage: false,
      isLastPage: true,
      previousPage: 1,
      nextPage: null,
      fromCount: 6,
      toCount: 10
    });
  });

  it('should results be mostly null in the case of pageCount=0', function() {
    assert.deepEqual(paginate(0, 1, 1), {
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
    });
  });

  it('should be omitted if pages are out of range', function() {
    assert.deepEqual(paginate(25, 10, 0), {
      totalCount: 25,
      perPage: 10,
      specifiedPage: 0,
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
    });

    assert.deepEqual(paginate(25, 10, 4), {
      totalCount: 25,
      perPage: 10,
      specifiedPage: 4,
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
    });
  });
});
