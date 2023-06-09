var mang_SN = [];
//Thêm phần tử
document.getElementById("themPhanTu").onclick = function () {
  var pt_moi = document.getElementById("soNguyen").value * 1;
  mang_SN.push(pt_moi);
  document.getElementById("hienthi").innerHTML = `
    Đã thêm phần tử ${pt_moi} vào mảng đang xét.
    `;
};

//Hiển thị mảng
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
    var sx_mang = mang_SN.sort();
    sx_mang = sx_mang.join(',');
    document.getElementById("xuatc7").innerHTML = `
    Mảng sau khi sắp xếp tăng dần là: ${sx_mang}
    `
}

// Kiểm tra số nguyên tố 

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
function TimSNT_DauTien () {
    var len = mang_SN.length;
    debugger
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
document.getElementById("tinhc9").onclick = function () {
    var dem = 0;
    for (var i = 0; i < mang_SN.length; i++) {
        if (Number.isInteger(mang_SN[i]) == true) dem++;
    }
    document.getElementById("xuatc9").innerHTML = `
        Số số nguyên có trong mảng là: ${dem}
    `
}

//So sáng số lượng số âm và dương 
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
