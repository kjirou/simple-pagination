/*
 * Returns pagination result
 *
 * @param {number} totalCount    - Number of items that will be paginated
 * @param {number} perPage       - Number of items per page
 * @param {number} specifiedPage - Page number you wanted to get, it is started by 1
 */
module.exports = function paginate(totalCount, perPage, specifiedPage) {

  var pageCount = Math.ceil(totalCount / perPage);
  var firstPage = (pageCount > 0) ? 1 : null;
  var lastPage = (pageCount > 0) ? pageCount : null;

  var currentPage = null,
    isFirstPage = null,
    isLastPage = null,
    previousPage = null,
    nextPage = null,
    fromCount = null,
    toCount = null;

  if (pageCount > 0) {
    currentPage = Math.max(Math.min(specifiedPage, lastPage), firstPage);
    isFirstPage = currentPage === firstPage;
    isLastPage = currentPage === lastPage;
    previousPage = (currentPage > firstPage) ? currentPage - 1 : null;
    nextPage = (currentPage < lastPage) ? currentPage + 1 : null;
    fromCount = perPage * (currentPage - 1) + 1;
    toCount = Math.min(perPage * currentPage, totalCount);
  }

  return {
    totalCount: totalCount,
    perPage: perPage,
    specifiedPage: specifiedPage,
    pageCount: pageCount,
    firstPage: firstPage,
    lastPage: lastPage,
    currentPage: currentPage,
    isFirstPage: isFirstPage,
    isLastPage: isLastPage,
    previousPage: previousPage,
    nextPage: nextPage,
    fromCount: fromCount,
    toCount: toCount
  };
};
