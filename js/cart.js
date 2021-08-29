function showCartToPay(){
    var c = sessionStorage.getItem("cartStorage");
    var cart = JSON.parse(c);
    var infor = '';
    var sum = 0;
    for (let i = 0; i < cart.length; i++) {
        let sum1 = cart[i][2] * cart[i][3];
        sum += sum1;
        infor += '<tr id="tr-main">' +
            '<th>'+ (i + 1 )+'</th>' +
            '<th><img src="'+ cart[i][0]+'" alt=""></th>' +
            '<th>'+ cart[i][1]+'</th>' +
            '<th>'+ cart[i][2]+'$</th>' +
            ' <th>'+ cart[i][3]+'</th>' +
            '<th>'+ sum1 +'$</th>' +
            '</tr>';
    }
    infor +=' <tr id="tr-bt">'+
        '<td colspan="5">Tổng</td>'+
        ' <td>'+
                '<div>'+ sum +'$</div>'+
        '  </td>'+
        '</tr>';
     
    document.getElementById('mycartT').innerHTML = infor;
}
showCartToPay();

function pay(){
    var tt = document.querySelector('.infor').children;
    var name = tt[0].children[2].value;
    var lct = tt[1].children[2].value;
    var phone = tt[2].children[2].value;
    var email = tt[3].children[2].value;
    
    var user = new Array(name,lct,phone,email);
    sessionStorage.setItem("user",JSON.stringify(user));
  
    window.location.assign("succes.html");
}