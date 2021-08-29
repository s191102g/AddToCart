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

function succes(){
    var tt = sessionStorage.getItem("user");
    var u = JSON.parse(tt);
    var infor = '';
    infor += ' <span>Họ Tên: <em>'+ u[0]  +'</em></span> <br> '+
   ' <span>Địa Chỉ: <em>'+ u[1]  +'</em></span> <br>'+
   '<span>Số Điện Thoại: <em>'+ u[2]  +'</em></span> <br>'+
   ' <span>Email: <em>'+ u[3]  +'</em></span>';
     
    document.querySelector('.infor-user').innerHTML= infor;
}
succes();