const meo = [
    {
        id : 1,
        name : "Bánh Thưởng Cho Mèo GimCat Nutri Pockets Dinh Dưỡng",
        img : "/Big-Exercise/img/meo_1.webp",   
        price : "148.000",
        desc : ""
        //desc : "Bánh thưởng cho mèo GimCat Nutri Pockets Dinh Dưỡng với công thức đặc biệt giúp bổ sung các dưỡng chất cần thiết cho mèo, hỗ trợ sức khỏe và tăng cường hệ miễn dịch."
    },
    {
        id : 2,
        name : "Cỏ Mèo, Cỏ Lúa Mì Tươi Trồng Sẵn Cho Mèo",
        img : "/Big-Exercise/img/meo_2.webp",
        price : "36.000",
        desc : ""
        //desc : "Bánh thưởng cho mèo GimCat Nutri Pockets Dinh Dưỡng với công thức đặc biệt giúp bổ sung các dưỡng chất cần thiết cho mèo, hỗ trợ sức khỏe và tăng cường hệ miễn dịch."
    },
    {
        id : 3,
        name : "Hạt Cho Mèo Mọi Lứa Tuổi",
        img : "/Big-Exercise/img/meo_3.webp",
        price : "85.000",
        desc : ""
        //desc : "Bánh thưởng cho mèo GimCat Nutri Pockets Dinh Dưỡng với công thức đặc biệt giúp bổ sung các dưỡng chất cần thiết cho mèo, hỗ trợ sức khỏe và tăng cường hệ miễn dịch."
    },
    {
        id : 4,
        name : "Cỏ Mèo Bạc Hà Catnip Cho Mèo",
        img : "/Big-Exercise/img/meo_4.webp",
        price : "50.000",
        desc : ""
        //desc : "Bánh thưởng cho mèo GimCat Nutri Pockets Dinh Dưỡng với công thức đặc biệt giúp bổ sung các dưỡng chất cần thiết cho mèo, hỗ trợ sức khỏe và tăng cường hệ miễn dịch."
    }
]
const cho = [
    {
        id : 1, 
        name : "Pate Tươi The Pet Cho Chó Biếng Ăn (1kg)",
        img : "/Big-Exercise/img/cho_1.webp",
        price : " 95.000",
        desc : ""
    },
    {
        id : 2, 
        name : "Pate Tươi The Pet Cho Chó con (0.75kg)",
        img : "/Big-Exercise/img/cho_2.webp",
        price : " 105.000",
        desc : ""
    },
    {
        id : 3, 
        name : "Pate Absolute Holistic RawStew Cho Chó (Lon 80g)",
        img : "/Big-Exercise/img/cho_3.webp",
        price : " 30.000",
        desc : ""
    },
]
const giuongnem = [
    {
        id : 1,
        name : "Võng Giường Gỗ Vuông Cho Chó Mèo",
        img : "/Big-Exercise/img/g_1.webp",
        price : " 300.000",
        desc : ""
    },
    {
        id : 2,
        name : "Võng Rời Thay Thế Cho Chó Mèo",
        img : "/Big-Exercise/img/v_1.webp",
        price : " 120.000",
        desc : ""
    },
    {
        id : 3,
        name : "Giường tầng Cho Chó Mèo",
        img : "/Big-Exercise/img/g_2.webp",
        price : " 220.000",
        desc : ""
    },

]
const vatdung = [
    {
        id : 1,
        name : "Cần Câu Mèo Đính Chuông Lông Vũ",
        img : "/Big-Exercise/img/dc_1.webp",
        price : " 60.000",
        desc : ""
    },
    {
        id : 2,
        name : "Bàn Cào Móng Giấy Cho Mèo + Tặng Cỏ Mèo",
        img : "/Big-Exercise/img/dc_2.webp",
        price : " 90.000",
        desc : ""
    },
    {
        id : 3,
        name : "Cây Lăn Mát Xa Cho Mèo Thư Giãn CattyMan",
        img : "/Big-Exercise/img/dc_3.webp",
        price : " 110.000",
        desc : ""
    },
    {
        id : 4,
        name : "ĐỒ CHƠI CHO CHÓ - ĐỒ CHƠI THÚ BÔNG CẮN GẶM CHO CHÓ",
        img : "/Big-Exercise/img/dc_4.jpg",
        price : " 75.000",
        desc : ""
    },
]
window.meo = meo;
window.cho = cho;
window.giuongnem = giuongnem;
window.vatdung = vatdung;
// Hàm thêm giỏ
function themVaoGio(name, price) {
    alert(`Đã thêm vào giỏ: ${name} - ${price.toLocaleString()}000đ`);
}