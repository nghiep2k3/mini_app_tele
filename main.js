document.getElementById("framButton").addEventListener("click", function () {
    const status = document.getElementById("status");
    const coins = document.getElementById("coins");

    // Giả lập bắt đầu khai thác
    status.textContent = "Trạng thái: Đang khai thác...";

    let currentCoins = 0; // Biến lưu số coin hiện tại
    const increment = 0.00001; // Bước tăng
    const targetCoins = 100;

    const interval = setInterval(() => {
        if (currentCoins < targetCoins) {
            currentCoins += increment; // Tăng coin
            coins.textContent = `Số coin của bạn: ${currentCoins.toFixed(4)}`; // Cập nhật giao diện
        } else {
            clearInterval(interval); // Dừng khi đạt 1 đồng
            status.textContent = "Trạng thái: Đã hoàn thành";
        }
    }, 5); // Cập nhật mỗi 5 mili giây
});