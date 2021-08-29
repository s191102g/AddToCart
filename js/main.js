document.querySelector(".show").style.display = "none";

var cart = new Array();

function showCart() {
    var x = document.querySelector(".show");
    if (x.style.display == "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
    
    showMycart();
}


function add(x) {

    var check = x.parentElement.children;
    var img = check[0].children[0].src;
    var name = check[1].children[0].innerText;
    var price = check[2].children[0].children[0].innerText;
    var num = parseInt(check[2].children[1].children[0].value) ;
    var sp = new Array(img, name, price, num);
    
    // check num
    var cn = 0
    for (let i = 0;i < cart.length; i++) {
      if(cart[i][1] == name){
          cn =1;
          num += cart[i][3];
          cart[i][3] = num;
          break;
      }
       
    }

    if(cn == 0){
        cart.push(sp);
    }
    
    showCount();
    // save in strorage
    sessionStorage.setItem("cartStorage",JSON.stringify(cart));
}

function showCount() {
    document.getElementById('count').innerHTML = cart.length;
}



function showMycart() {
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
            ' <td>'+
            '<button onclick="deletePRD(this)">Xóa</button>'+
    '  </td>'+
            '</tr>';
    }
    infor +=' <tr id="tr-bt">'+
        '<td colspan="5">Tổng</td>'+
        ' <td >'+
                '<div>'+ sum +'$</div>'+
        '  </td>'+
        ' <td>'+
        '<button onclick="deleteAll(this)">Xóa Hết</button>'+
'  </td>'+
        '</tr>';
     
    document.getElementById('mycart').innerHTML = infor;
  
}
function deletePRD(x){
     var tr = x.parentElement.parentElement;
     var nameDL = tr.children[2].innerText;
     alert("Bạn muốn xóa sản phẩm "+ nameDL)
     tr.remove();
     
    //  delete in array
    for (let i = 0; i < cart.length; i++) {
        if(cart[i][1]==nameDL){
            cart.splice(i,1);
        }
    }
    showMycart();
    sessionStorage.setItem("cartStorage",JSON.stringify(cart));
}
function deleteAll(){
    cart=[];
    showMycart();
    sessionStorage.setItem("cartStorage",JSON.stringify(cart));
}

