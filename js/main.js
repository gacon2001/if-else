//!BÀI TẬP CƠ BẢN
//!BÀI 1:
document.getElementById("btnsx").onclick= function () {
    var a = Number(document.getElementById("sothunhat").value);
    var b = Number(document.getElementById("sothuhai").value);
    var c = Number(document.getElementById("sothuba").value);
    console.log(a,b ,c);

    if (a>b && a>c && b>c){
        document.getElementById("txtsx").innerHTML=a + ">" + b + ">" + c;
    }else if (a>b && a>c && c>b){
        document.getElementById("txtsx").innerHTML=a + ">" + c + ">" + b;
    }else if (a>b && c>a && c>b){
        document.getElementById("txtsx").innerHTML=c + ">" + a + ">" + b;
    }else if (b>a && b>c && a>c){
        document.getElementById("txtsx").innerHTML=b + ">" + a + ">" + c;
    }else if (b>a && b>c && c>a){
        document.getElementById("txtsx").innerHTML=b + ">" + c + ">" + a;
    }else if (b>a && c>b && c>a){
        document.getElementById("txtsx").innerHTML=c + ">" + b + ">" + a;
    }
}

//!BÀI 2:
document.getElementById("chao").onclick= function () {
    const selectValue = document.getElementById("select").value;
    console.log(selectValue);
    if(selectValue === "bo"){
        document.getElementById("txtchao").innerHTML="Xin chào Bố";
    }else if(selectValue === "me"){
        document.getElementById("txtchao").innerHTML="Xin chào Mẹ";
    }else if(selectValue === "anh"){
        document.getElementById("txtchao").innerHTML="Xin chào Anh trai";
    }else if(selectValue === "em"){
        document.getElementById("txtchao").innerHTML="Xin chào Em gái";
    }
}

//!BÀI 3: 
document.getElementById("btndem").onclick= function(){
    var num1= document.getElementById("so1").value;
    var num2= document.getElementById("so2").value;
    var num3= document.getElementById("so3").value;
    console.log(num1, num2, num3);

    if(num1%2==0 && num2%2==0 && num3%2==0){
        console.log("Có 3 số chẵn");
        document.getElementById("txtdem").innerHTML= "Có 3 số chẵn";
    }else if(num1%2==1 && num2%2==1 && num3%2==1){
        console.log("có 3 số lẻ");
        document.getElementById("txtdem").innerHTML= "Có 3 số lẻ";
    }else if(num1%2==1 && num2%2==0 && num3%2==0){
        console.log("Có 2 số chẵn và 1 số lẻ");
        document.getElementById("txtdem").innerHTML= "Có 2 số chẵn và 1 số lẻ";
    }else if(num2%2==1 && num1%2==0 && num3%2==0){
        console.log("Có 2 số chẵn và 1 số lẻ");
        document.getElementById("txtdem").innerHTML= "Có 2 số chẵn và 1 số lẻ";
    }else if(num3%2==1 && num1%2==0 && num2%2==0){
        console.log("Có 2 số chẵn và 1 số lẻ");
        document.getElementById("txtdem").innerHTML= "Có 2 số chẵn và 1 số lẻ";
    }else if(num1%2==0 && num2%2==1 && num3%2==1){
        console.log("Có 1 số chẵn và 2 số lẻ");
        document.getElementById("txtdem").innerHTML= "Có 1 số chẵn và 2 số lẻ";
    }else if(num2%2==0 && num1%2==1 && num3 %2==1){
        console.log("Có 1 số chẵn và 2 số lẻ");
        document.getElementById("txtdem").innerHTML= "Có 1 số chẵn và 2 số lẻ"; 
    }else if(num3%2==0 && num1%2==1 && num2%2==1){
        console.log("Có 1 số chẵn và 2 số lẻ");
        document.getElementById("txtdem").innerHTML= "Có 1 số chẵn và 2 số lẻ";
    }
}

//!BÀI 4:
document.getElementById("btndoan").onclick= function () {
    var canh1 = document.getElementById("canh1").value;
    var canh2 = document.getElementById("canh2").value;
    var canh3 = document.getElementById("canh3").value;
    console.log(canh1, canh2, canh3);

    if(canh1 == canh2 && canh2 == canh3){
        console.log("là tam giác đều");
        document.getElementById("txtdoan").innerHTML= "là tam giác đều";
    }else if(canh1 == canh2 || canh2 == canh3 || canh1 == canh3){
        console.log("là tam giác cân");
        document.getElementById("txtdoan").innerHTML= "là tam giác cân";
    }else if(canh1**2==canh2**2+canh3**2){
        console.log("là tam giác vuông");
        document.getElementById("txtdoan").innerHTML= "là tam giác vuông";
    }else if(Math.pow(canh2, 2)==Math.pow(canh1, 2)+canh3**2){
        console.log("là tam giác vuông");
        document.getElementById("txtdoan").innerHTML= "là tam giác vuông";
    }else if(canh3**2==canh2**2+canh1**2){
        console.log("là tam giác vuông");
        document.getElementById("txtdoan").innerHTML= "là tam giác vuông";
    }else{
        console.log("tam giác bình thường");
        document.getElementById("txtdoan").innerHTML="là tam giác bình thường";
    }
}
