document.addEventListener('scroll', function() {
  // Kiểm tra xem đã cuộn xuống chưa
  if (window.scrollY > 0) {
      const container = document.querySelector('.container');
      const hiddenContent = document.querySelector('.hidden-content');

      // Hiển thị phần tử bên dưới
      hiddenContent.style.display = 'block';
      container.style.maxHeight = '200px'; // Thay đổi kích thước container để hiển thị nội dung
      window.removeEventListener('scroll', arguments.callee); // Xóa sự kiện cuộn
  }
});