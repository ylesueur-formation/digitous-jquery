$("input").keyup(function() {
    // this = $("input") dans notre cas.
    if ($("input").val().length > 5) {
        $("input").addClass("is-valid");
        if ($(this).hasClass("is-invalid")) {
            $(this).removeClass("is-invalid")
        }
    } else {
        $("input").addClass("is-invalid");
        if ($("input").hasClass("valid")) {
            $("input").removeClass("valid")
        }
    }
})