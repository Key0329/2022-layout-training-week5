$(document).ready(function () {
    $(".reply").click(function (e) { 
        event.preventDefault();
        // console.log("click");
        $(".editor").toggleClass("d-none");
        $(".card-show").toggleClass("d-none");
    });
    $(".cancel").click(function (e) { 
        event.preventDefault();
        // console.log("click");
        $(".editor").toggleClass("d-none");
        $(".card-show").toggleClass("d-none");
    });

    $(".expand-more").click(function (e) { 
        event.preventDefault();
        // console.log("click");
        $(".button-show").removeClass("d-none");
        $(".expand-less").removeClass("d-none");
        $(".expand-more").addClass("d-none");
    });
    $(".expand-less").click(function (e) { 
        event.preventDefault();
        // console.log("click");
        $(".button-show").addClass("d-none");
        $(".expand-less").addClass("d-none");
        $(".expand-more").removeClass("d-none");
    });

});

