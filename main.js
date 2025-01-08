function toggleDetail(e) {
    const target = $(e.target)

    if ($(target).hasClass("active")) {
        $(target).html("More info").removeClass("active")
    } else {
        $(target).html("Less info").addClass("active")
    }

    const item = $(target).parents(".about-exp-items")
    const detail = $(item).children(".about-exp-detail")

    $(detail).slideToggle()
}

function onFormSubmit(e) {
    e.preventDefault()
    const email = $("#inp_email")
    const subject = $("#inp_subject")
    const messege = $("#inp_messege")

    if (!$(email).val()) {
        alert("Email is required")
    } else if (!$(subject).val()) {
        alert("Subject is required")
    } else if (!$(messege).val()) {
        alert("Messege is required")
    } else {
        alert("Form submited")
        $(email).val("")
        $(subject).val("")
        $(messege).val("")
    }
}