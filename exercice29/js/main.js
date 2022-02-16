$("button").click(function() {
    let len = $("input").val().length;
    console.log(len);
    if (len > 5) {
        $("input").addClass("is-valid");
    } else {
        $("input").addClass("is-invalid");
    }
})