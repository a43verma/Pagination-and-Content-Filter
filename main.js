const newUl = document.createElement('ul');
let totalPages = Math.ceil($('.student-item').length/10);
allStudents = $('.student-item').length;

// let totalPages = Math.ceil(studentAmount/10);

// Display students based on page numbers
function showPage (pageNumber, numberOfStudents) {
  $('.student-item').hide();
  for (let i = 0; i < numberOfStudents; i ++) {
    if (i < ((pageNumber - 1) * 10) + 10 && i >= ((pageNumber - 1) * 10)) {
      $('.student-item').eq(i).show();
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
  showPage(pageNumber, allStudents);
})

$('.page-header').append('<input type="text" class="student-search" id="myInput" onkeyup="searchNames()" placeholder="Search by names...">');

showPage(1, allStudents);

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
