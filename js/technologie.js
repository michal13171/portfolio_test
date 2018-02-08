'use strict';
<<<<<<< HEAD

$(function () {
    $('.slider_technology').slick({
        dots: true,
        arrows:true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 22
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});
=======
var prev = document.querySelector('.previous_slider');
var next = document.querySelector('.next_slider');
next.addEventListener('click', skills, true);

function skills() {
    var lists = ['img/1 (1).jpeg', 'img/1 (2).jpeg', 'img/1 (3).jpeg'];
    var Image1 = document.createElement('div');
    Image1.src = lists;
    var elem = document.querySelector('.slider_technology').appendChild(Image1);
    var apppedm = [];
    for (var i = 0; i < lists.length; i++) {
        apppedm[i] = new Image();
        apppedm[i].src = lists[i];
        var one = Math.floor(lists.length) ;
        elem.innerHTML =   apppedm[lists.src] ;
        console.log(lists[i].src);
        console.log(apppedm[i].src);
        console.log(elem);
        console.log(elem.innerHTML = '<img src="' + lists[i] + '"/>');
    }

}
>>>>>>> 10c2bee431a15cf0c64c8489f8380d6f10e255f6
