'use strict';
$(document).ready(function () {
    var audioplayer = document.getElementById('player');
    var volume = document.querySelector('.volume');
    var play = document.querySelector('.play_pause');
    var progressBar = $('.progressbar');
    var defaultprogressbar = document.querySelector('.defaultprogressbar'); //$('.defaultprogressbar').slider();
    var sizeBar = 150;
    var duration = document.querySelector('.currentTime');
    var currentTime = document.querySelector('.fullTime');
    play.addEventListener('click', audio, false);
    volume.addEventListener('click', muteUnmute, false);

    function audio() {
        if (audioplayer.paused) {
            audioplayer.play();
            play.innerHTML = '<img src="img/ic_play_circle_outline_black_48dp.png"/>';
            time = setInterval(updateTime, 500);
            console.log(time);
        }
        else {
            audioplayer.pause();
            play.innerHTML = '<img src="img/ic_pause_circle_outline_black_48dp.png"/>';
            window.clearInterval(time);
        }
    }

    function muteUnmute(e) {
        e.preventDefault();
        if (audioplayer.muted === true) {
            audioplayer.muted = false;
            volume.innerHTML = '<img src="img/ic_volume_down_black_48dp.png"/>';
        }
        else {
            audioplayer.muted = true;
            volume.innerHTML = '<img src="img/ic_volume_mute_black_48dp.png"/>';
        }
    }
    audioplayer.addEventListener('loadedmetadata', time, false);

    function time() {
        var minutes = parseInt(audioplayer.duration / 60);
        var seconds = parseInt(audioplayer.duration % 60);
        duration.innerHTML = minutes + ' : ' + seconds;
        console.log(duration);
    }

    function updateTime() {
        if (audioplayer.ended) {
            currentTime.innerHTML = "0.00";
            console.log(currentTime);
            defaultprogressbar.width = "0px";
            window.clearInterval(time);
        }
        else {
            var playMinutes = parseInt(audioplayer.currentTime / 60);
            var playSecundes = parseInt(audioplayer.currentTime % 60);
            var size = parseInt(audioplayer.currentTime * sizeBar / audioplayer.duration);
            // defaultprogressbar.width = size + "px";
            var str = "px";
            defaultprogressbar.innerHTML = defaultprogressbar.width = size; // '<div style=".size. +str"></div>';
            currentTime.innerHTML = playMinutes + ' : ' + playSecundes;
            console.log(defaultprogressbar);
            console.log(size);
        }
    }
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