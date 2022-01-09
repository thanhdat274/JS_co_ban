function kiemtra() {
    var masv = document.getElementById("masv");
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var GT = document.getElementsByName("GT");
    var sothich = document.getElementsByClassName("sothich");
    var quoctich = document.getElementById("quoctich");
    var note = document.getElementById("note");

    var error1 = document.getElementById("error1");
    var error2 = document.getElementById("error2");
    var error3 = document.getElementById("error3");
    var error4 = document.getElementById("error4");
    var error5 = document.getElementById("error5");
    var error6 = document.getElementById("error6");
    var error7 = document.getElementById("error7");

    // kiểm tra mã sinh viên
    if (masv.value.length == 0) {
        masv.style.border = "1px solid red";
        error1.innerHTML = "Mã sinh viên không được để trống!";
        return false;
    } else {
        masv.style.border = "none";
        error1.innerHTML = "";
    }
    // kiểm tra họ tên
    if (name.value.length == 0) {
        name.style.border = "1px solid red";
        error2.innerHTML = "Họ tên không được để trống!";
        return false;
    } else {
        name.style.innerHTML = "none";
        error2.innerHTML = "";
    }
    // kiểm tra gmail
    if (email.value.length == 0) {
        name.style.border = "1px solid red";
        error3.innerHTML = "Email không được để trống!";
        return false;

    } else {
        email.style.innerHTML = "none";
        error3.innerHTML = "";
    }
    // kiểm tra giới tính
    if (GT[0].checked !== true & GT[1].checked !== true) {
        error4.innerHTML = "Bạn chưa chọn giới tính!";
        return false;
    } else {
        error4.innerHTML = "";
    }
    // kiểm tra sở thích
    var st = 0;
    for (var i = 0; i < sothich.length; i++) {
        if (sothich[i].checked == true) {
            st++;
        }
    }
    if (st == 0) {
        error5.innerHTML = "Bạn phải chọn ít nhất 1 sở thích!";
        return false;
    } else {
        error5.innerHTML = "";
    }
    // kiểm tra quốc tịch
    if (quoctich.value == 0) {
        error6.innerHTML = "Bạn chưa chọn quốc tịch";
        return false;
    } else {
        error6.innerHTML = "";
    }
    // ghi chú tối đa 200 ký tự: 
    if (note.value.length > 200) {
        note.style.border = "1px solid red";
        error7.innerHTML = "Bạn chỉ nhập được tối đa 200 kí tự!";
        return false;
    } else {
        error7.innerHTML = "";
    }
}