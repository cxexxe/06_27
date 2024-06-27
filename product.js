/* 언어 변경 */
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

/* small -> big */
// 문서가 로드되면 실행될 함수를 정의합니다.
document.addEventListener('DOMContentLoaded', function() {
  // 클래스 이름이 'small'인 모든 요소를 찾아서 변수에 저장합니다.
  var smallImages = document.querySelectorAll('.small');

  // 찾은 small 이미지들에 대해 반복문을 실행합니다.
  smallImages.forEach(function(smallImage) {
      // 각 small 이미지에 클릭 이벤트 리스너를 추가합니다.
      smallImage.addEventListener('click', function() {
          // 클릭된 이미지의 'src' 속성 값을 가져옵니다.
          var newSrc = this.src;
          
          // 클래스 이름이 'big'인 요소의 'src' 속성을 업데이트합니다.
          document.querySelector('.big').src = newSrc;
      });
  });
});

/* 이미지 누르면 색 변화 */
document.addEventListener('DOMContentLoaded', function () {
  // 스몰 이미지들에 대한 클릭 이벤트 리스너 추가
  document.querySelectorAll('.small').forEach(function(img) {
    img.addEventListener('click', function() {
      // 클릭된 이미지의 src 속성 값에 따라 색상 이름과 배경색 변경
      const src = img.getAttribute('src');
      const colorText = document.querySelector('.color p');
      const circles = document.querySelectorAll('.color ul li');

      // 모든 circle의 테두리를 초기화
      circles.forEach(circle => {
        circle.style.outline = 'none';
      });

      if (src.includes('블루')) {
        colorText.textContent = '# Blue Violet';
        circles[0].style.backgroundColor = '#B5C6E4'; // circle01
        circles[1].style.backgroundColor = '#FBC9A8'; // circle02
        circles[2].style.backgroundColor = '#84939A'; // circle03
        circles[0].style.outline = '2px solid black'; // circle01에 테두리 추가
      } else if (src.includes('로즈')) {
        colorText.textContent = '# Rose Gold';
        circles[0].style.backgroundColor = '#B5C6E4'; // circle01
        circles[1].style.backgroundColor = '#FBC9A8'; // circle02
        circles[2].style.backgroundColor = '#84939A'; // circle03
        circles[1].style.outline = '2px solid black'; // circle02에 테두리 추가
      } else if (src.includes('실버')) {
        colorText.textContent = '# Silver Gray';
        circles[0].style.backgroundColor = '#B5C6E4'; // circle01
        circles[1].style.backgroundColor = '#FBC9A8'; // circle02
        circles[2].style.backgroundColor = '#84939A'; // circle03
        circles[2].style.outline = '2px solid black'; // circle03에 테두리 추가
      }
    });
  });
});
