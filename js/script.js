'use strict';
$(document).ready(function () {
    //audio
    (function () {
        function audio() {
            this._audioplayer = document.getElementById('player');
            this._volume = document.querySelector('.volume');
            this._play = document.querySelector('.play_pause');
            this._progressBar = $('.progressbar').slider();
            this._Assignplay();
            this._AssignVol();
            this._time();
            this._updateTime();
        }
        audio.prototype._Assignplay = function () {
            $('.play_pause').click('click', this._play_orStop.bind(this), false);
        };
        audio.prototype._AssignVol = function () {
            this._volume.addEventListener('click', this._muteUnmute.bind(this), false);
        };
        audio.prototype._play_orStop = function () {
            if (this._audioplayer.paused || this._audioplayer.ended) {
                this._audioplayer.play();
                this._play.innerHTML = '<img src="img/ic_play_circle_outline_black_48dp.png"/>';
                window.clearInterval(this._update);
            }
            else {
                this._audioplayer.pause();
                this._play.innerHTML = '<img src="img/ic_pause_circle_outline_black_48dp.png"/>';
                this._update = setInterval(this._updateTime, 500);
                console.log(this._update);
            }
        };
        audio.prototype._muteUnmute = function (e) {
            e.preventDefault();
            if (this._audioplayer.muted === true) {
                this._audioplayer.muted = false;
                this._volume.innerHTML = '<img src="img/ic_volume_down_black_48dp.png"/>';
            }
            else {
                this._audioplayer.muted = true;
                this._volume.innerHTML = '<img src="img/ic_volume_mute_black_48dp.png"/>';
            }
        };
        audio.prototype._time = function () {
            this._audioplayer = new Audio();
            this._audioplayer.src = "img/muzmo_ru_Eisbrecher_2017_-_Rot_Wie_Die_Liebe_47622946.mp3";
            this._audioplayer.addEventListener('loadedmetadata', function () {
                this._minutes = parseInt(this.duration / 60);
                this._seconds = parseInt(this.duration % 60);
                this._duration = document.querySelector('.currentTime');
                this._duration.innerHTML = this._minutes + ' : ' + this._seconds;
                console.log(this._duration);
            });
        };
        audio.prototype._updateTime = function () {
            this._audioplayer = new Audio();
            this._audioplayer.src = "img/muzmo_ru_Eisbrecher_2017_-_Rot_Wie_Die_Liebe_47622946.mp3";
            if (!this._audioplayer.ended) {
                this._update = setInterval(this._updateTime, 500)
                this._playMinutes = parseInt(this._audioplayer.currentTime / 60);
                this._playSecundes = parseInt(this._audioplayer.currentTime % 60);
                this._currentTime = document.querySelector('.fullTime');
                this._currentTime.innerHTML = this._playMinutes + ' : ' + this._playSecundes;
                console.log(this._currentTime);
                console.log(this._playSecundes);
            }
            else {
                this._currentTime = 0.00;
                console.log(this._currentTime);
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
        slideshow.prototype._createelements = function ($elem, $number) {
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
});