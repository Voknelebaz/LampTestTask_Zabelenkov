function swap1() {
    document.getElementById("header").style.background = "#435476";
    document.getElementById("main").style.background = "#435476";
    document.getElementById("footer").style.background = "#435476";
    document.getElementById("subscribe").style.background = "#435476";

    document.getElementById("first-title").classList.add('enable');
    document.getElementById("second-title").classList.add('disable');
    document.getElementById("second-title").classList.remove('enable');

    document.getElementById("block__title-fir").classList.add('enable');
    document.getElementById("block__title-sec").classList.add('disable');
    document.getElementById("block__title-sec").classList.remove('enable');

    document.getElementById("footer-title-1").classList.add('enable');
    document.getElementById("footer-title-2").classList.add('disable');
    document.getElementById("footer-title-2").classList.remove('enable');

    document.getElementById("block-image-1").classList.add('enable');
    document.getElementById("block-image-2").classList.add('disable');
    document.getElementById("block-image-2").classList.remove('enable');

    document.getElementById("block-image-3").classList.add('enable');
    document.getElementById("block-image-4").classList.add('disable');
    document.getElementById("block-image-4").classList.remove('enable');
};

function swap2() {
    document.getElementById("header").style.background = "#AB4E3D";
    document.getElementById("main").style.background = "#AB4E3D";
    document.getElementById("footer").style.background = "#AB4E3D";
    document.getElementById("subscribe").style.background = "#AB4E3D";

    document.getElementById("first-title").classList.add('disable');
    document.getElementById("first-title").classList.remove('enable');
    document.getElementById("second-title").classList.add('enable');

    document.getElementById("block__title-fir").classList.add('disable');
    document.getElementById("block__title-fir").classList.remove('enable');
    document.getElementById("block__title-sec").classList.add('enable');

    document.getElementById("footer-title-1").classList.add('disable');
    document.getElementById("footer-title-1").classList.remove('enable');
    document.getElementById("footer-title-2").classList.add('enable');

    document.getElementById("block-image-1").classList.add('disable');
    document.getElementById("block-image-1").classList.remove('enable');
    document.getElementById("block-image-2").classList.add('enable');

    document.getElementById("block-image-3").classList.add('disable');
    document.getElementById("block-image-3").classList.remove('enable');
    document.getElementById("block-image-4").classList.add('enable');
  
}
