var so_a = prompt("Nhập vào số a: ");
var so_b = prompt("Nhập vào số b: ");
var x;

so_a = Number(so_a);
so_b = Number(so_b);

if( so_a==0){
    if(so_b == 0){
        document.write("<br>phương trình vô số nghiệm");
    }
    if(so_b!=0){
        document.write("phương trình vô nghiệm");
}
}else{
    var x= -so_b/so_a;
    document.write("nghiệm X= " + x);
    }