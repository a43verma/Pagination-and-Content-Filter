const newUl = document.createElement('ul');
let totalPages = Math.ceil($('.student-item').length/10);
allStudents = $('.student-item').length;
$listOfStudents = $('.student-item');

// let totalPages = Math.ceil(studentAmount/10);

// Display students based on page numbers
function showPage (pageNumber, numberOfStudents, listOfStudents) {
  $('.student-item').hide();
  for (let i = 0; i < numberOfStudents; i ++) {
    if (i < ((pageNumber - 1) * 10) + 10 && i >= ((pageNumber - 1) * 10)) {
      $(listOfStudents).eq(i).show();
    }
  }
}

function createPagination () {
  $(newUl).addClass('pagination');
  $('.page').append(newUl);
}

function createLink (i) {
  let newLi = document.createElement('li');
  let newLink = document.createElement('a');
  $(newLi).addClass('links');
  $(newLink).text('' + i + '');
  $(newLi).append(newLink);
  $('.pagination').append(newLi);
}

function allLinks (amount) {
  for (let i = 1; i <= amount; i ++) {
    createLink(i);
  }
}

function removeLinks () {
  $('.links').remove();
}

createPagination();
allLinks(totalPages);

$('.pagination li a').on('click', function(event){
  let $target = $(event.target);
  let pageNumber = $target.text();
  showPage(pageNumber, allStudents, $listOfStudents);
})

$('.page-header').append('<input type="text" class="student-search" id="myInput" onkeyup="searchNames()" placeholder="Search by names...">');

showPage(1, allStudents, $listOfStudents);

function searchNames () {
  let $input = $('#myInput').val().toUpperCase();
  removeLinks();
  $('.error').remove();
  $('.student-item').hide();
  $('.student-item h3').each(function (index) {
    if ($(this).text().toUpperCase().indexOf($input) > -1 ) {
      $(this).closest('.student-item').addClass('found');
    } else {
      $(this).closest('.student-item').removeClass('found');
    }
  });
  if ($('.found').length === 0) {
    $('.page').append('<h1 class="error">Sorry, your search has returned 0 results</h1>');
  }
  allLinks(Math.ceil($('.found').length/10));
  showPage(1, $('.found').length, $('.found'));
}

// function searchNames () {
//   const $input = $('#myInput').val().toUpperCase();
//   $('button').hide();
//   let name;
//   let newStudentList = [];
//   for (let i = 0; i < studentAmount; i ++) {
//     name = allStudents[i].querySelector('h3').innerHTML.toUpperCase();
//     if (name.indexOf(input) > -1) {
//       console.log(allStudents[i]);
//       newStudentList.push(allStudents[i]);
//     }
//     if (newStudentList.length = 0) {
//       $('.student-list').text("<h1>No students were found</h1>");
//     }
//     console.log(newStudentList)
//     allStudents = newStudentList;
//     showPage();
//
//     allStudents = document.querySelectorAll('li');
//   }
