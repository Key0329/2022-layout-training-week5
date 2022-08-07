"use strict";

$(document).ready(function () {
  $(".reply").click(function (e) {
    event.preventDefault(); // console.log("click");

    $(".editor").toggleClass("d-none");
    $(".card-show").toggleClass("d-none");
  });
  $(".cancel").click(function (e) {
    event.preventDefault(); // console.log("click");

    $(".editor").toggleClass("d-none");
    $(".card-show").toggleClass("d-none");
  });
});
//# sourceMappingURL=all.js.map
