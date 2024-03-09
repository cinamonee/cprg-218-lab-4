var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

const currentDate = new Date();
const CinnamonCatCafe = "CinnamonCatCafe"
const year = currentDate.getFullYear();
const result = `${year} ${CinnamonCatCafe}`
 document.getElementById("copyRightYearCinnamonCatCafe").outerHTML = result
