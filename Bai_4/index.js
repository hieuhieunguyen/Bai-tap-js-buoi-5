var ketQua = document.getElementById('ket-qua');

var xetKieuKhachHang = document.getElementById('loai-khach-hang');
// xét loại khách hàng để hiển thị khối số kết nối
xetKieuKhachHang.onchange = function() {
    if(xetKieuKhachHang.value === 'company') {
       document.getElementById('ket-noi-block').classList.replace('d-none', 'd-block');
    } else {
        document.getElementById('ket-noi-block').classList.replace('d-block', 'd-none');
    }
}

// 
function xuLyTinhTien(khachHang) {
    var soKenhCaoCap = document.getElementById('so-kenh-cao-cap').value;
    var soKetNoi = document.getElementById('so-ket-noi').value;
    if(khachHang === 'user') {
        var result = soKenhCaoCap*7.5 + 4.5 + 20.5;
        return result;
    } else if(khachHang === 'company') {
        if(soKetNoi <= 10 && soKetNoi > 0) {
            var result = soKenhCaoCap*50 + 15 + 75;
            return result;
        } else {
            var soKetNoiThem = soKetNoi - 10;
            var result = soKenhCaoCap*50 + 15 + 75 + soKetNoiThem*5;
            return result;
        }
    } else {
        alert('Vui lòng chọn loại khách hàng!');
    };
};

function tinhTienCap() {
    var loaiKhachHang = document.getElementById('loai-khach-hang').value;
    var maKhachHang = document.getElementById('ma-khach-hang').value;
    var soKenhCaoCap = document.getElementById('so-kenh-cao-cap').value;

    var tongTien = xuLyTinhTien(loaiKhachHang);
    var tongTienBangDolars = new Intl.NumberFormat({ currency: 'USD', style: 'currency'} ,'de-DE').format(tongTien);

    if(loaiKhachHang != '') {
        ketQua.innerHTML = `Mã khách hàng: ${maKhachHang}; Tiền cáp: $ ${tongTienBangDolars}`;
    };
};