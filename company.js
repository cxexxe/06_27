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

