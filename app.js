let allStudents = document.querySelectorAll('li');
const studentAmount = allStudents.length;
const page = document.querySelector('.page');
let totalPages = Math.ceil(studentAmount/10);
let currentPageNumber = 0;

function showPage () {
  $('.student-item').hide();
  for (let i = 0; i < studentAmount; i ++) {
    if (i < (currentPageNumber * 10) + 10 && i >= (currentPageNumber * 10)) {
      $(allStudents[i]).show();
    }
  }
}

function createButtons () {
  const newPagesDiv = document.createElement('div');
  $(newPagesDiv).addClass('pagination');
  page.appendChild(newPagesDiv);
  $('.pagination').append("<button id='link1' class='active'>1</button>")
  for (let i = 2; i <= totalPages; i ++) {
    $('.pagination').append("<button id='link" + i + "'>" + i + "</button>");
  }
}

showPage();
createButtons();

$('button').on('click', function(event){
  let $target = $(event.target);
  $('button').removeClass('active');
  $target.addClass('active');
  currentPageNumber = $target.text() - 1;
  showPage();
})

$('.page-header').append('<input type="text" class="student-search" id="myInput" onkeyup="searchNames()" placeholder="Search by names...">');

function searchNames () {
  const input = $('#myInput').val().toUpperCase();
  $('button').hide();
  $('.student-details h3').each(function (index) {
    let name = $(this).text().toUpperCase();
    let student = $(this).closest('.student-item');
    if (name.indexOf(input) > -1) {
      student.show();
    } else {
      student.hide();
    }
  })
}
