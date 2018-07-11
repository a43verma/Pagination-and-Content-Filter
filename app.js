const students = document.querySelectorAll('li');
const studentAmount = students.length;
const currentPageNumber = 0;


function showPage () {
  $('.student-item').hide();
  for (let i = 0; i < studentAmount; i ++) {
    if (i < (currentPageNumber * 10) + 10 && i >= (currentPageNumber *10)) {
      $(students[i]).show();
    }
  }
}

showPage();

function appendPageLinks () {
  // determine how many pages for this student list
  const pages = Math.ceil(studentAmount/10);
  // create a page link section

  // "for" every pages
      // add a page link to the page link section
  // remove the old page link section from the site
  // append our new page link section to the site
  // define what happens when you click a link (event listener)
      // Use showPage to display to display the page for the link clicked
      // mark that link as active
}

function createButtons () {
  const pages = Math.ceil(studentAmount / 10);
  const newLinks = "";

  for (let i = 0; i < pages; i ++) {

  }
}


createButtons();
