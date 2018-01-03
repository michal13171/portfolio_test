'use strict';
$(document).ready(function () {
    var audio_player = $(".audio-player");
    var play_button = $('#play');
    var progress_bar = $(".progressbar");
    var time = $("#time");
    var mute_button = $('#mute');
    var volume_bar = $('.volume');
    var player = document.querySelector('.player');
    var duration = 0;
    var volume = 0.75;
    player.onloadedmetadata = function () {
        duration = player.duration;
        progress_bar.progressbar("option", {
            'max': duration
        });
    };
    player.load();
    player.volume = 0.75;
    player.addEventListener("timeupdate", function () {
        progress_bar.progressbar('value', player.currentTime);
        time.text(getTime(player.currentTime));
    }, false);

    function getTime(t) {
        var m = ~~(t / 60)
            , s = ~~(t % 60);
        return (m < 10 ? "0" + m : m) + ':' + (s < 10 ? "0" + s : s);
    }

    function getProgressBarClickInfo(progress_bar, e) {
        var offset = progress_bar.position();
        var x = e.pageX - offset.left; // or e.offsetX (less support, though)
        var y = e.pageY - offset.top; // or e.offsetY
        var max = progress_bar.progressbar("option", "max");
        var value = x * max / progress_bar.width();
        return {
            x: x
            , y: y
            , max: max
            , value: value
        };
    }
    volume_bar.progressbar({
        value: player.volume * 100
    , });
    volume_bar.click(function (e) {
        var info = getProgressBarClickInfo($(this), e);
        volume_bar.progressbar('value', info.value);
        player.volume = info.value / info.max;
    });
    progress_bar.progressbar({
        value: player.currentTime
    , });
    progress_bar.click(function (e) {
        var info = getProgressBarClickInfo($(this), e);
        player.currentTime = player.duration / info.max * info.value;
    });
    play_button.click(function () {
        player[player.paused ? 'play' : 'pause']();
        $(this).toggleClass("fa-play", !player.paused);
        $(this).toggleClass("fa-pause", player.paused);
    });
    mute_button.click(function () {
        if (player.volume == 0) {
            player.volume = volume;
        }
        else {
            volume = player.volume;
            player.volume = 0;
        }
        volume_bar.progressbar('value', player.volume * 100);
        $(this).toggleClass("fa-volume-up", player.volume != 0);
        $(this).toggleClass("fa-volume-off", player.volume == 0);
    });
    // slider
    (function () {
        function slideshow($button) {
            this._button = document.querySelector('.click_slider');
            this._click_result();
        }
        slideshow.prototype._click_result = function () {
            this._button.addEventListener('click', this._proporties.bind(this), false);
        }
        slideshow.prototype._proporties = function ($parent, $elem, $number) {
            const ilosc = 6;
            const max = 42;
            this._parent = document.querySelector('.slides');
            this._elem = document.createElement(this._parent);
            this._elem.textContent = this._number;
            console.log(this._elem);
            this._parent.appendChild(this._elem);
            var pushing = [];
            for (var i = 0; i < ilosc; i++) {
                var los = Math.floor(Math.random() * max + 1);
                if (pushing.indexOf(los) < 0) {
                    pushing.push(los);
                    addElement('img', los);
                }
                else {
                    i--;
                    continue;
                }
                console.log(pushing);
            }
        }
        new slideshow();
    })();
});