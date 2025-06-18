document.addEventListener('DOMContentLoaded', function() {
    // يمكنك إضافة أي تفاعلات JavaScript للصفحة الرئيسية هنا
    console.log('الصفحة الرئيسية جاهزة!');
    
    // مثال: إضافة تأثير عند النقر على أزرار البحث
    const searchButton = document.querySelector('.search button');
    if (searchButton) {
        searchButton.addEventListener('click', function() {
            const searchInput = document.querySelector('.search input');
            alert('بحث عن: ' + searchInput.value);
        });
    }
});