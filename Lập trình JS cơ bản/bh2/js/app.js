document.write("Nội dung trong file app js ");

//-- nhập a và b và in ra tổng 2 số

var so_a = prompt("nhập số a: ");
var so_b = prompt("nhập số b: ");

document.write("<br>kiểu dữ liệu số a: " + typeof (so_a));
// chuyển kiểu dữ liệu 
so_a = Number(so_a);
so_b = Number(so_b);


document.write("<br>kiểu dữ liệu số a: " + typeof (so_a));


var tong = so_a + so_b;

document.write("<br> Tổng " + so_a + "+" + so_b + "=" + tong);

var so_ngau_nhien = Math.random();