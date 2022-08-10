$(document).ready(function () {
    $(".reply").click(function (e) { 
        event.preventDefault();
        $(".editor, .card-show").toggleClass("d-none");
    });
    $(".cancel").click(function (e) { 
        event.preventDefault();
        $(".editor, .card-show").toggleClass("d-none");
    });

    // $(".expand-more").click(function (e) { 
    //     event.preventDefault();
    //     $(".button-show, .expand-less, .expand-more").toggleClass("d-none");
    // });
    // $(".expand-less").click(function (e) { 
    //     event.preventDefault();
    //     $(".button-show, .expand-less, .expand-more").toggleClass("d-none");
    // });

});

