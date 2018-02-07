function check(form) {
    if(form.userId.value == "12345") {
        window.open('uploadt1.html')
        window.close()

    }
    else if (form.userId.value == "123456") {
      window.open('indez.html')
    }
    else {
        alert("user not authorized")
    }
}
