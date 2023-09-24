let showMoreBtnAtCount = 3;
let sidebarlistItmes = document.querySelectorAll(".nav-item");
let showMore = false;
if (sidebarlistItmes.length - 1 > showMoreBtnAtCount) {
  sidebarlistItmes.forEach((itm, index) => {
    if (index > showMoreBtnAtCount - 1) itm.style.display = "none";
  });
}

function myFunctionShowing(target) {
  if (!showMore) {
    showMore = true;
    target.innerText = "- نمایش کمتر";
    sidebarlistItmes.forEach((itm, index) => {
      if (index > showMoreBtnAtCount - 1) {
        itm.style.visibility = "visible";
        itm.style.display = "block";
      }
    });
  } else {
    showMore = false;
    target.innerText = "+ نمایش بیشتر";
    sidebarlistItmes.forEach((itm, index) => {
      if (index > showMoreBtnAtCount - 1) {
        // itm.style.visibility = "hidden" ;
        itm.style.display = "none";
      }
    });
  }
}
// function myFunction() {
//   var x = document.getElementById("myLinks");
//   if (x.style.display === "block") {
//     x.style.display = "none";
//   } else {
//     x.style.display = "block";
//   }
// }

function openNav() {
  //document.querySelector(".overlay").style.transform = "translateY(0%)";
  document.querySelector(".sidebar-desktop").style.transform = "translateY(0%)";
}

function closeNav() {
  //document.querySelector(".overlay").style.transform = "translateY(100%)";
  document.querySelector(".sidebar-desktop").style.transform =
    "translateY(100%)";
}

// 3dot
// let matn = document.querySelector("body > div:nth-child(3) > div > div.col-12.col-md-3.sidebar-desktop > div > div:nth-child(8) > p");
let matn = document.querySelector(".text-sidebar3");
matn.innerText = matn.innerText.substring(0, 20) + "...";

// for list
$(function () {
  $(".list-group-item").on("click", function () {
    $(".glyphicon", this)
      .toggleClass("glyphicon-chevron-right")
      .toggleClass("glyphicon-chevron-down");
  });
});

//for deleting filters
function deleteFilter(target) {
  target.parentElement.remove();
}

// for sidebarlist with dropdowns
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".sidebar .nav-link").forEach(function (element) {
    element.addEventListener("click", function (e) {
      let nextEl = element.nextElementSibling;
      let parentEl = element.parentElement;

      if (nextEl) {
        e.preventDefault();
        let mycollapse = new bootstrap.Collapse(nextEl);

        if (nextEl.classList.contains("show")) {
          mycollapse.hide();
        } else {
          mycollapse.show();
          // find other submenus with class=show
          var opened_submenu =
            parentEl.parentElement.querySelector(".submenu.show");
          // if it exists, then close all of them
          if (opened_submenu) {
            new bootstrap.Collapse(opened_submenu);
          }
        }
      }
    }); // addEventListener
  }); // forEach
});

// function openNav(element) {

//   element.style.transform = " rotate(-90deg)";

// }

// function closeNav() {
//   //document.querySelector(".overlay").style.transform = "translateY(100%)";
//   element.style.transform = " rotate(90deg)";

//   console.log("Close sidebar!");
// }
