'use strict';
$(document).ready(function () {
    //audio
    (function () {
        function audio() {
            this._audioplayer = $('#player');
            this._volume = $('.volume');
            //  this._play = document.querySelector('.play_pause');;
            this._progressBar = $('.progressbar').slider();
            this._Assignplay();
        }
        audio.prototype._Assignplay = function () {
            $('.play_pause').click('click', this._play_orStop.bind(this), false);
        };
        audio.prototype._play_orStop = function () {
            if (this._audioplayer.paused || this._audioplayer.ended) {
                this._audioplayer.get(0).play();
            }
            else {
                this._audioplayer.pause();
            }
        };
        new audio();
    })();
    // slider
    (function () {
        function slideshow($button) {
            this._button = document.querySelector('.click_slider');
            this._click_result();
        }
        slideshow.prototype._click_result = function () {
            this._button.addEventListener('click', this._proporties.bind(this), false);
        }
        slideshow.prototype._random = function ($arrayimg, $parent) {
            this._arrayimg = ['img/1 (1).jpeg', 'img/1 (2).jpeg', 'img/1 (3).jpeg'];
            this._parent = Math.floor(Math.random() * this._arrayimg.length);
        }
        slideshow.prototype._createelements = function ($elem, $number, ) {
            this._number = document.createElement('div');
            this._number.src = this._parent;
            this._elem = document.querySelector('.slides').appendChild(this._number);
        }
        slideshow.prototype._proporties = function ($apppedm, $newImage) {
            this._random();
            this._createelements();
            this._apppedm = [];
            for (var i = 0; i < this._arrayimg.length; i++) {
                this._apppedm[i] = new Image();
                this._apppedm[i].src = this._arrayimg[i].src;
            }
            this._newImage = Math.floor(Math.random() * this._arrayimg.length);
            this._elem.innerHTML = '<img src="' + this._arrayimg[this._newImage] + '"/>';
        }
        new slideshow();
    })();
    (function () {
        function skills() {
            this._prev = $('.previous_slider');
            this._next = $('.next_slider');
            this._result();
        }
        skills.prototype._result = function () {
            this._next.addEventListener('click', this._nextslide.bind(this), true);
        };
        skills.prototype._nextslide = function () {
            this._lists = ['img/1 (1).jpeg', 'img/1 (2).jpeg', 'img/1 (3).jpeg'];
            this._number = document.createElement('div');
            this._number.src = this._parent;
            this._elem = document.querySelector('.slider_technology').appendChild(this._number);
            for (var i = 0; i < this._arrayimg.length; i++) {
                this._apppedm[i] = new Image();
                this._apppedm[i].src = this._arrayimg[i].src;
                this._elem.innerHTML = '<img src="' + this._apppedm[i] + '"/>';
            }
        };
        new skills();
    })();
});