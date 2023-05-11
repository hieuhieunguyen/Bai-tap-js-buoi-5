var ketQua = document.getElementById('ket-qua');

function tinhTienChiuThue(money) {
    if(money <= 0) {
        alert('Số tiền thu nhập không hợp lệ! Vui lòng điền lại.');
    } else if(money <= 60e+6 && money > 0) {
        return money * 0.05;
    } else if(money > 60e+6 && money <= 120e+6) {
        return money * 0.1;
    } else if(money > 120e+6 && money <= 210e+6) {
        return money * 0.15;
    } else if(money > 210e+6 && money <= 384e+6) {
        return money * 0.2;
    } else if(money > 384e+6 && money <= 624e+6) {
        return money * 0.25;
    } else if(money > 624e+6 && money <= 960e+6) {
        return money * 0.3;
    } else {
        return money * 0.35;
    }
};  

function tinhTienThue() {
    var hoTen = document.getElementById('ho-ten').value; 
    var thuNhapNam = document.getElementById('thu-nhap-nam').value * 1;
    var soNguoiPhuThuoc = document.getElementById('so-nguoi-phu-thuoc').value * 1;
    var thuNhapChiuThue = thuNhapNam - (4e+6) - (soNguoiPhuThuoc * 1.6e+6);

    // hiển thị sang VN đồng
    var soTienChiuThue = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(tinhTienChiuThue(thuNhapChiuThue));
    
    if(thuNhapChiuThue > 0) {
        ketQua.innerHTML = `Họ tên: ${hoTen}, Tiền thuế thu nhập cá nhân: ${soTienChiuThue}`;
    };
};




