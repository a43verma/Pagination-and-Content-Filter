const students = document.querySelectorAll('li');
const studentAmount = students.length;
let currentPageNumber = 0;
console.log(currentPageNumber);

function showPage () {
  $('.student-item').hide();
  for (let i = 0; i < studentAmount; i ++) {
    if (i < (currentPageNumber * 10) + 10 && i >= (currentPageNumber *10)) {
      $(students[i]).show();
    }
  }
}

function createButtons () {
  const totalPages = Math.floor(studentAmount/10);
  const page = document.querySelector('.page');
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
  currentPageNumber = $target.text();
  showPage();
})
