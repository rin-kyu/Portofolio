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