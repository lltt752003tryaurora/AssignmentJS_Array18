var mang_SN = [];
//Thêm phần tử
/*
+input: lấy giá trị phần tử cần thêm
+process: sử dụng hàm push để đẩy dữ liệu vào mảng
+output: cho user biết đã push vào hay chưa
*/
document.getElementById("themPhanTu").onclick = function () {
  var pt_moi = document.getElementById("soNguyen").value * 1;
  mang_SN.push(pt_moi);
  document.getElementById("hienthi").innerHTML = `
    Đã thêm phần tử ${pt_moi} vào mảng đang xét.
    `;
};

//Hiển thị mảng
/*
+input: lấy thông tin dữ liệu của các phần tử trong mảng 
+process: dùng vòng for duyệt qua từng phần tử trong mảng để xuất
+output: xuất ra dữ liệu của mảng bao gồm những phần tử nào
*/
document.getElementById("hienThiMang").onclick = function () {
  var content = "";
  for (var i = 0; i < mang_SN.length; i++) {
    content += mang_SN[i] + ",";
  }
  // xóa kí tự cuối cùng
  var kqua = content.slice(0,-1)
  console.log(kqua);
  document.getElementById("hienthi").innerHTML = `
    Mảng: ${kqua}
    `;
};

//Xóa hết các phần tử trong mảng
/*
+input: lấy dữ liệu các phần tử trong mảng
+process: dùng hàm splice để xóa hết tất cả các phần tử trong mảng hiện có
+output: thông báo đã xóa hay chưa cho user
*/
document.getElementById("xoahet").onclick = function () {
  if (mang_SN.length > 0) {
    mang_SN.splice(0, mang_SN.length);
    document.getElementById(
      "hienthi"
    ).innerHTML = `Mảng đã được xóa hết các phần tử.`;
  } else {
    document.getElementById(
      "hienthi"
    ).innerHTML = `Bạn chưa thêm phần tử nào vào mảng.`;
  }
};

// Tính tổng các số dương
/*
+input: lấy dữ liệu từng phần tử trong mảng
+process: tạo 1 biến sum để hứng giá trị + vào từng phần tử khi duyệt mảng
+output: đưa ra tổng các số dương
*/
document.getElementById("tinhc1").onclick = function () {
  var sum = 0;
  var len = mang_SN.length;
  for (var i = 0; i < len; i++) {
    if (mang_SN[i] > 0) sum += mang_SN[i];
  }
  document.getElementById("xuatc1").innerHTML = `
    Tổng các số nguyên dương trong mảng là: ${sum};
    `;
};

// Đếm số dương
/*
+input: lấy dữ liệu từng phần tử trong mảng
+process: tạo 1 biến tạm dựa vào điều kiện dương và duyệt mảng để tăng biến tạm lên
+output: xuất ra kết quả đếm số dươngs
*/
document.getElementById("tinhc2").onclick = function () {
  var dem = 0;
  var len = mang_SN.length;
  for (var i = 0; i < len; i++) {
    if (mang_SN[i] > 0) dem++;
  }
  document.getElementById("xuatc2").innerHTML = `
    Số lượng số dương trong mảng là: ${dem};
    `;
};

// Tìm số nhỏ nhất
/*
+input: lấy dữ liệu từng phần tử trong mảng
+process: duyệt qua từng phần tử trong mảng rồi so sáng với 1 biến minVal được gán trước
+output: xuất ra số nhỏ nhất cần tìm
*/
document.getElementById("tinhc3").onclick = function () {
  var minVal = mang_SN[0];
  for (var i = 0; i < mang_SN.length; i++) {
    if (mang_SN[i] < minVal) minVal = mang_SN[i];
  }
  document.getElementById("xuatc3").innerHTML = `
    Số nhỏ nhất trong mảng là: ${minVal}
    `;
};

// Tìm số dương nhỏ nhất
/*
+input: lấy dữ liệu từng phần tử trong mảng
+process: duyệt qua từng phần tử của mảng với điệu số dương, dùng một biến minVal để lưu lại giá trị đầu, sau khi duyệt so sánh thì gán lại giá trị mới
+output: xuất ra số dương nhỏ nhất
*/
document.getElementById("tinhc4").onclick = function () {
  var minVal = mang_SN[0];
  for (var i = 0; i < mang_SN.length; i++) {
    if (mang_SN[i] < minVal && mang_SN[i] > 0) minVal = mang_SN[i];
  }
  document.getElementById("xuatc4").innerHTML = `
    Số dương nhỏ nhất trong mảng là: ${minVal}
    `;AAAAAA
};

//Tìm số chẵn cuối cùng
/*
+input: lấy dữ liệu từng phần tử trong mảng
+process: duyệt qua tugnwf phần tử xét điều kiện chẵn, gán cho giá trị cuối cùng thỏa mãn
+output: xuất ra số chẵn cuối cùng
*/
document.getElementById("tinhc5").onclick = function () {
  var sochanCC = -1;
  for (var i = 0; i < mang_SN.length; i++) {
    if (mang_SN[i] % 2 == 0) sochanCC = mang_SN[i];
  }
  if (sochanCC != -1) {
    document.getElementById("xuatc5").innerHTML = `
    Số chẵn cuối cùng của mảng là: ${sochanCC}
    `;
  } else {
    document.getElementById("xuatc5").innerHTML = `
    Mảng không có số chẵn nào.
    `;
  }
};

// Đổi chỗ
/*
+input: lấy dữ liệu từng phần tử trong mảng
+process: xét trường hợp nhập sai vị trí và trường hợp dúng vị trí, đúng thì dùng thuất toán đổi chỗ 
+output: đưa ra mảng sau khi đổi chỗ
*/
document.getElementById("tinhc6").onclick = function () {
    var v1 = document.getElementById("c6vt1").value * 1;
    var v2 = document.getElementById("c6vt2").value * 1;
    var len = mang_SN.length;
    if (len == 0) {
        document.getElementById("xuatc6").innerHTML = `
        Mảng chưa được khởi tạo. Xin hãy nhập mảng.
        `
        return;
    }
    if (v1 < 0 || v1 >= len || v2 < 0 || v2 >= len) {
        document.getElementById("xuatc6").innerHTML = `
        Bạn đã nhập sai vị trí. Xin hãy nhập lại.
        `
        return;
    } else {
        var temp = 0;
        temp = mang_SN[v1];
        mang_SN[v1] = mang_SN[v2];
        mang_SN[v2] = temp;
        var content = "";
        for (var i = 0; i < len; i++) {
            content += mang_SN[i] + "  ";
        }
        document.getElementById("xuatc6").innerHTML = `
        Mảng sau khi được đổi vị trí là: ${content}
        `   
    }
}

// Sắp xếp tăng dần
/*
+input: lấy dữ liệu từng phần tử trong mảng
+process: dùng hàm sort để sắp xếp tăng dần
+output: xuất ra mảng sau khi sắp xếp 
*/
document.getElementById("tinhc7").onclick = function () {
    var len = mang_SN.length;
    // for (var i = 0; i < len-1; i++) {
    //     for (var j =i+1; j < len; j++) {
    //         if (mang_SN[i] > mang_SN[j]) {
    //             let temp = mang_SN[i];
    //             mang_SN[i] = mang_SN[j];
    //             mang_SN[j] = temp;
    //         }
    //     }
    // }
    var sx_mang = mang_SN.sort(function(a,b) {
      return a - b;
    });
    sx_mang = sx_mang.join(',');
    document.getElementById("xuatc7").innerHTML = `
    Mảng sau khi sắp xếp tăng dần là: ${sx_mang}
    `
}

// Kiểm tra số nguyên tố 
/*
+input: lấy dữ liệu 1 biến
+process: xét 2 TH, TH duyệt mảng thì ta sẽ xem coi nó có chia hết các ước của nó trước không, nếu có thì false, ko thì return về true
+output: xuất ra dạng boolean kiểm tra SNT
*/

function KiemTraSNT (bien) {
    if (bien < 2) return false;
    else {
        for (var i = 2; i <= Math.sqrt(bien); i++) {
            if (bien % i == 0) return false;
        }
    }
    return true;
}

//Tìm số nguyên tố đầu tiên 
/*
+input: lấy dữ liệu từ mảng 
+process: dùng hàm để tìm ra số nguyên tố đầu tiên trong mảng
+output: xuất ra kết quả số nguyên tố đầu tiên
*/
function TimSNT_DauTien () {
    var len = mang_SN.length;
    for (var i = 0; i < len; i++) {
        if (KiemTraSNT(mang_SN[i]) == true) {
            return mang_SN[i];
        }
    }
    return -1;
}

document.getElementById("tinhc8").onclick = function () {
    if (TimSNT_DauTien() != -1){
        document.getElementById("xuatc8").innerHTML = `
        Số nguyên tố đầu tiên trong mảng là: ${TimSNT_DauTien()}.
        `
    } else {
        document.getElementById("xuatc8").innerHTML = `
        Mảng không có số nguyên tố nào.
        `
    }
}

//Đếm số lượng số nguyên
/*
+input: lấy dữ liệu từ mảng
+process: cho 1 biến tạm dem để tăng giá trị khi duyệt mảng gặp đúng điều kiện là số nguyên
+output: xuất ra số lượng số nguyên
*/
document.getElementById("tinhc9").onclick = function () {
    var dem = 0;
    for (var i = 0; i < mang_SN.length; i++) {
        if (Number.isInteger(mang_SN[i]) == true) dem++;
    }
    document.getElementById("xuatc9").innerHTML = `
        Số số nguyên có trong mảng là: ${dem}
    `
}

//So sánh số lượng số âm và dương 
/*
+input: lấy dữ liệu từ mảng 
+process: cho 2 biến tạm để lưu giữ số lượng âm và dương khi duyệt mảng thì sẽ gặp đúng điều kiện sẽ tăng các biến lên phù hợp, sau đó so sánh 2 biến để đưa ra kết quả đúng
+output: thông báo người dùng phép so sánh giữa 2 số lượng
*/
document.getElementById("tinhc10").onclick = function () {
    var demA = 0;
    var demD = 0;
    for (var i = 0; i < mang_SN.length; i++) {
        if (mang_SN[i] < 0) demA++;
        if (mang_SN[i] > 0) demD++;
    }
    if (demA > demD) {
        document.getElementById("xuatc10").innerHTML = `
        Số lượng số âm lớn hơn số dương (${demA} > ${demD})
        `
    } else if (demA == demD) {
        document.getElementById("xuatc10").innerHTML = `
        Số lượng số âm bằng số dương (${demA} = ${demD})
        `
    } else {
        document.getElementById("xuatc10").innerHTML = `
        Số lượng số âm nhỏ hơn số dương (${demA} < ${demD})
        `
    }
}


// function findHighestAndLowest(array){
//   var len =  array.length;
//   var maxVal = array[0];
//   var maxIndex = 0;
//   var minVal = array[0];
//   var minIndex = 0;
//   for (var i = 1; i < len;i++) {
//       if (maxVal < array[i]) {
//           maxVal = array[i];
//           maxIndex = i;
//       }
//       if (minVal > array[i]){
//            minVal = array[i];
//            minIndex = i;
//       }
//   }
//   return `{ highest: { value: ${maxVal}, index: ${maxIndex} }, lowest: { value: ${minVal}, index: ${minIndex} } }`;
// }