var btnKetQua = document.getElementById('ket-qua');

function tinhDiemTheoKhuVuc(khuVuc) {
    if(khuVuc == 2) {
        return 2;
    } else if (khuVuc ==1) {
        return 1;
    } else if(khuVuc == 0.5) {
        return 0.5;
    } else {
        return 0;
    }
};

function tinhDiemTheoDoiTuong(doiTuong) {
    if(doiTuong == 2.5) {
        return 2.5;
    } else if (doiTuong == 1.5) {
        return 1.5;
    } else if(doiTuong == 1) {
        return 1;
    } else {
        return 0;
    }
};

function ketQua() {
    var diemChuan = document.getElementById('diem-chuan').value;
    var diemThuNhat = document.getElementById('diem1').value * 1;
    var diemThuHai = document.getElementById('diem2').value * 1;
    var diemThuBa = document.getElementById('diem3').value * 1;
    var diemTong = diemThuNhat + diemThuHai + diemThuBa;
    var khuVuc = document.getElementById('khu-vuc').value;
    var diemTheoKhuVuc = tinhDiemTheoKhuVuc(khuVuc);
    var doiTuong = document.getElementById('doi-tuong').value;
    var diemTheoDoiTuong = tinhDiemTheoDoiTuong(doiTuong);
    var result = diemTong + diemTheoKhuVuc + diemTheoDoiTuong;
    if ((diemThuNhat == 0) || (diemThuHai == 0) || (diemThuBa == 0)) {
        btnKetQua.innerHTML = 'Bạn đã rớt. Do có diểm nhỏ hơn hoặc bằng 0';
    } else if(result >= diemChuan) {
        btnKetQua.innerHTML = `Bạn đã đậu. Tổng điểm của bạn là: ${result}`;
    } else {
        btnKetQua.innerHTML = `Bạn đã rớt. Tổng điểm của bạn là: ${result}`;
    };
};

