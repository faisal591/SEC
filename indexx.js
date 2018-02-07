function check(form) {
    if(form.userName.value == "faisal" && form.userId.value == "12345") {
        window.open('index1.html')
        window.close()

    }
    else if (form.userName.value == "naser" && form.userId.value == "123456") {
      window.open('indez.html')
    }
    else {
        alert("Error Password or Username")
    }
}
