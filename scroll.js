/* const spyEls = document.querySelectorAll('section.scroll-spy');
        const controller = new ScrollMagic.Controller();

        spyEls.forEach(function (spyEl) {
            new ScrollMagic
            .Scene({triggerElement: spyEl})
            .setClassToggle(spyEl, 'show')
            .addTo(controller)
        }) */


        document.addEventListener('DOMContentLoaded', function () {
            const spyEls = document.querySelectorAll('.scroll-spy');
            const controller = new ScrollMagic.Controller();
        
            spyEls.forEach(function (spyEl) {
                new ScrollMagic.Scene({
                    triggerElement: spyEl, 
                    triggerHook: 0.8 // 요소가 어느 지점에서 나타나는지 조절
                })
                .setClassToggle(spyEl, 'show')
                .addTo(controller);
            });
        });
