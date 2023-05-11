var ketQua = document.getElementById('ket-qua');

function tinhTienDien() {
    var hoTen = document.getElementById('ho-ten').value;
    var soKw = document.getElementById('so-kw').value * 1;
    if(soKw <= 0) {
        alert('Số kw không hợp lệ! Vui lòng nhập lại số kw.');
    } else if(soKw <= 50) {
        var result = soKw * 500;
    } else if(soKw > 50, soKw <=100) {
        var result = 50*500 + (soKw - 50) * 650;
    } else if(soKw > 100, soKw <= 200) {
        var result = 50*500 + 50*650 + (soKw - 100)*850;
    } else if(soKw > 200, soKw <= 350) {
        var result = 50*500 + 50*650 + 100*850 + (soKw - 200)*1100;
    } else {
        var result = 50*500 + 50*650 + 100*850 + 150*1100 + (soKw - 350)*1300;
    };

    // hiển thị sang VN đồng
    var tongTien = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(result);

    if(soKw > 0) {
        ketQua.innerHTML = `Họ tên: ${hoTen}; Tiền điện: ${tongTien}`;
    }
};

