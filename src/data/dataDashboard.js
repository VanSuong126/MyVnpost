export const dataService = [
  {
    id: 1,
    title: 'Tạo đơn hàng',
    type: 'single',
    linkIcon: require('~assets/images/image_service/TaoDonHang.png'),
    color: '#CD6600',
    nameNavigation: 'CreateOrder',
  },
  {
    id: 2,
    title: 'Quản lý đơn hàng',
    type: 'modal',
    linkIcon: [
      require('~assets/images/image_service/DonHangNhap.png'),
      require('~assets/images/image_service/TaoDonHang.png'),
      require('~assets/images/image_service/TaoDonHang.png'),
    ],
    color: '#B7B7B7',
    inclution: [
      {
        id: 2.1,
        title: 'Đơn hàng nháp',
        type: 'single',
        linkIcon: require('~assets/images/image_service/DonHangNhap.png'),
        color: '#0000EE',
        nameNavigation: 'DonHangNhap',
      },
      {
        id: 2.2,
        title: 'Đơn hàng trong ngày',
        type: 'single',
        linkIcon: require('~assets/images/image_service/TaoDonHang.png'),
        color: '#6959CD',
        nameNavigation: 'DonHangTrongNgay',
      },
      {
        id: 2.3,
        title: 'Danh sách đơn hàng',
        type: 'single',
        linkIcon: require('~assets/images/image_service/DanhSachDonHang.png'),
        color: '#00BFFF',
        nameNavigation: 'DanhSachDonHang',
      },
    ],
  },
  {
    id: 3,
    title: 'Quản lý thống kê',
    type: 'modal',
    linkIcon: [
      require('~assets/images/image_service/BaoCaoThongKe.png'),
      require('~assets/images/image_service/ThongKePhatHoan.png'),
      require('~assets/images/image_service/ThongKeTienTra.png'),
    ],
    color: '#B7B7B7',
    inclution: [
      {
        id: 3.1,
        title: 'Báo cáo thống kê',
        type: 'single',
        linkIcon: require('~assets/images/image_service/BaoCaoThongKe.png'),
        color: '#97FFFF',
        nameNavigation: 'BaoCaoThongKe',
      },
      {
        id: 3.2,
        title: 'Thống kê phát hoàn',
        type: 'single',
        linkIcon: require('~assets/images/image_service/ThongKePhatHoan.png'),
        color: '#0000BB',
        nameNavigation: 'ThongKePhatHoan',
      },
      {
        id: 3.3,
        title: 'Thống kê tiền trả',
        type: 'single',
        linkIcon: require('~assets/images/image_service/ThongKeTienTra.png'),
        color: '#339900',
        nameNavigation: 'ThongKeTienTra',
      },
    ],
  },
  {
    id: 4,
    title: 'Định vị bưu gửi',
    type: 'single',
    linkIcon: require('~assets/images/image_service/DinhViBuuGui.png'),
    color: 'orange',
    nameNavigation: 'DinhViBuuGui',
  },
  {
    id: 5,
    title: 'Danh sách người nhận',
    type: 'single',
    linkIcon: require('~assets/images/image_service/DanhSachNguoiNhan.png'),
    color: 'green',
    nameNavigation: 'DanhSachNguoiNhan',
  },
  {
    id: 6,
    title: 'Danh sách đặt báo',
    type: 'single',
    linkIcon: require('~assets/images/image_service/DanhSachDatBao.png'),
    color: '#205AA7',
    nameNavigation: 'DanhSachDatBao',
  },
  {
    id: 7,
    title: 'Đơn hàng nhận',
    type: 'single',
    linkIcon: require('~assets/images/image_service/DonHangNhan.png'),
    color: 'orange',
    nameNavigation: 'DonHangNhan',
  },
  {
    id: 8,
    title: 'Tickets',
    type: 'single',
    linkIcon: require('~assets/images/image_service/Tickets.png'),
    color: 'darkblue',
    nameNavigation: 'Tickets',
  },
  {
    id: 9,
    title: 'Tra cứu bưu cục',
    type: 'single',
    linkIcon: require('~assets/images/image_service/TraCuuBuuCuc.png'),
    color: '#FFCC99',
    nameNavigation: 'TraCuuBuuCuc',
  },
  {
    id: 10,
    title: 'Bảng giá',
    type: 'single',
    linkIcon: require('~assets/images/image_service/BangGia.png'),
    color: '#00F5FF',
    nameNavigation: 'BangGia',
  },
  {
    id: 11,
    title: 'Hỏi đáp',
    type: 'single',
    linkIcon: require('~assets/images/image_service/HoiDap.png'),
    color: 'violet',
    nameNavigation: 'HoiDap',
  },
  {
    id: 12,
    title: 'Tính cước thử',
    type: 'single',
    linkIcon: require('~assets/images/image_service/TinhCuocThu.png'),
    color: '#9ACD32',
    nameNavigation: 'TinhCuocThu',
  },
  {
    id: 13,
    title: 'Thông tin ứng dụng',
    type: 'single',
    linkIcon: require('~assets/images/image_service/ThongTinUngDung.png'),
    color: '#006600',
    nameNavigation: 'ThongTinUngDung',
  },
  {
    id: 14,
    title: 'Tạo lô hàng',
    type: 'single',
    linkIcon: require('~assets/images/image_service/TaoLoHang.png'),
    color: '#330099',
    nameNavigation: 'TaoLoHang',
  },
];

export const dataSlider = [
  {
    title: 'Tra cứu bưu cục',
    illustration: 'https://i.imgur.com/UYiroysl.jpg',
  },
  {
    title: 'Tính thử cước',
    illustration: 'https://i.imgur.com/UPrs1EWl.jpg',
  },
  {
    title: 'Thêm người vào danh sách đen',
    illustration: 'https://i.imgur.com/MABUbpDl.jpg',
  },
  {
    title:
      'Thông báo về vệc điều chỉnh phụ phí xăng dầu dịch vụ chuyển phát EMS',
    illustration: 'https://i.imgur.com/KZsmUi2l.jpg',
  },
  {
    title: 'Quản lý danh bạ người dùng',
    illustration: 'https://i.imgur.com/2nCt3Sbl.jpg',
  },
];

// data Float Action
export const actions = [
  {
    text: "Tạo đơn hàng",
    icon: require('~assets/images/image_service/TaoDonHang.png'),
    name: "bt_room",
    color: "violet",
    position: 1
  },
  {
    
    text: "Tổng đài hỗ trợ",
    icon: require('~assets/images/image_service/ThongTinUngDung.png'),
    name: "bt_accessibility",
    color: "#0099FF",
    position: 2
  },
  {
    text: "Chat",
    icon: require('~assets/images/image_service/ThongTinUngDung.png'),
    name: "bt_language",
    color:"#00FF00",
    position: 3
  },
  
];
