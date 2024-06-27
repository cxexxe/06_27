document.addEventListener('DOMContentLoaded', function() {
    // 언어 메뉴 항목 선택
    var langLinks = document.querySelectorAll('.lang_menu a');

    // 각 언어 링크에 클릭 이벤트 리스너 추가
    langLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            // 기본 이벤트(링크 이동) 방지
            event.preventDefault();

            // 클릭된 링크의 언어 코드 읽기
            var selectedLang = this.getAttribute('data-lang');

            // '언어' 버튼 내의 텍스트 업데이트
            var langButton = document.querySelector('.lang_btn button i');
            langButton.textContent = selectedLang;

            // 언어 변경에 따른 추가 로직 처리
            // 예: 페이지 콘텐츠를 선택된 언어로 변경
        });
    });
});

/* 제품 이미지 선택 */
document.addEventListener("DOMContentLoaded", function() {
    var productListItems = document.querySelectorAll('.swiper_product li');
    var productImage = document.querySelector('.img_box img');
    var selectedProduct = document.querySelector('.swiper_product li.selected');

    // 기본 이미지 설정
    if(selectedProduct) {
        var imgPath = selectedProduct.getAttribute('data-img');
        productImage.src = imgPath;
    }

    productListItems.forEach(function(item) {
        item.addEventListener('click', function() {
            // 이미지 경로 읽기
            var imgPath = this.getAttribute('data-img');
            // img_box의 이미지 변경
            productImage.src = imgPath;

            // 선택된 항목 강조
            productListItems.forEach(function(item) {
                item.classList.remove('selected'); // 모든 항목에서 'selected' 클래스 제거
            });
            this.classList.add('selected'); // 클릭된 항목에 'selected' 클래스 추가
        });
    });
});

/* 제품 카테고리 */
document.addEventListener("DOMContentLoaded", function() {
    var categories = document.querySelectorAll('.p_category ul li');
    var defaultCategory = document.querySelector('.category_01'); // 프리미엄펜 as default
    defaultCategory.classList.add('selected-category');

    categories.forEach(function(category) {
        category.addEventListener('click', function() {
            // Remove the highlight from all categories
            categories.forEach(function(item) {
                item.classList.remove('selected-category');
            });
            
            // Highlight the selected category
            this.classList.add('selected-category');
        });
    });
});

/* 제품 드래그 */
document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.wrapper_ul');
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        slider.classList.add('active');
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.classList.remove('active');
    });
    slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.classList.remove('active');
    });
    slider.addEventListener('mousemove', (e) => {
        if(!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 2; // 스크롤 속도를 조절합니다.
        slider.scrollLeft = scrollLeft - walk;
    });
});

