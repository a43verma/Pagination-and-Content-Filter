const newUl = document.createElement('ul');
let totalPages = Math.ceil($('.student-item').length/10);
allStudents = $('.student-item').length;
$listOfStudents = $('.student-item');

// Attaches a search bar
$('.page-header').append('<input type="text" class="student-search" id="myInput" onkeyup="searchNames()" placeholder="Search by names...">');

// Display students based on page numbers
function showPage (pageNumber, numberOfStudents, listOfStudents) {
  $('.student-item').hide();
  for (let i = 0; i < numberOfStudents; i ++) {
    if (i < ((pageNumber - 1) * 10) + 10 && i >= ((pageNumber - 1) * 10)) {
      $(listOfStudents).eq(i).show();
    }
  }
}

// Creates the initial section for the links to go
function createPagination () {
  $(newUl).addClass('pagination');
  $('.page').append(newUl);
}

// Creates a link with a page number
function createLink (i) {
  let newLi = document.createElement('li');
  let newLink = document.createElement('a');
  $(newLi).addClass('links');
  $(newLink).text('' + i + '');
  $(newLi).append(newLink);
  $('.pagination').append(newLi);
}

// Repeats the createLink function depending on the number of pages
function allLinks (amount) {
  for (let i = 1; i <= amount; i ++) {
    createLink(i);
  }
}

// Removes the links for pagination
function removeLinks () {
  $('.links').remove();
}

// Search function that goes through the name and returns results
function searchNames () {
  let $input = $('#myInput').val().toUpperCase();
  // Removes the previous links
  removeLinks();

  // Removes the error message
  $('.error').remove();

  // Hides all the students on the page
  $('.student-item').hide();

  // goes through each student item and determines if the input from the search is found
  $('.student-item h3').each(function (index) {
    if ($(this).text().toUpperCase().indexOf($input) > -1 ) {
      // this class is used to create the new pagination with only found results
      $(this).closest('.student-item').addClass('found');
    } else {
      // removes the found class from every other list item
      $(this).closest('.student-item').removeClass('found');
    }
  });

  // gives an error message if no results are found
  if ($('.found').length === 0) {
    $('.page').append('<h1 class="error">Sorry, your search has returned 0 results</h1>');
  }

  // re-does the pagination on the page using the new criteria
  allLinks(Math.ceil($('.found').length/10));
  showPage(1, $('.found').length, $('.found'));
}

// calls on the functions to get the initial page setup
createPagination();
allLinks(totalPages);
showPage(1, allStudents, $listOfStudents);

// Gives the links the ability to go through the student list
$('.pagination li a').on('click', function(event){
  let $target = $(event.target);
  let pageNumber = $target.text();
  showPage(pageNumber, allStudents, $listOfStudents);
})
