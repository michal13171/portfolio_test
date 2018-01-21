'use strict';
var prev = document.querySelector('.previous_slider');
var next = document.querySelector('.next_slider');
next.addEventListener('click', skills(), false);

function skills() {
    var lists = ['img/1 (1).jpeg', 'img/1 (2).jpeg', 'img/1 (3).jpeg'];
    var Image1 = document.createElement('div');
    Image1.src = lists;
    var elem = document.querySelector('.slider_technology').appendChild(Image1);
    var apppedm = [];
    for (var i = 0; i < lists.length; i++) {
        apppedm[i] = new Image();
        apppedm[i].src = lists[i];
        elem.innerHTML = '<img src="' + apppedm[i] + '"/>';
        console.log(lists[i]);
        console.log(apppedm[i]);
        console.log(elem);
    }
}