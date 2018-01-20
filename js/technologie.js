    (function () {
        function skills() {
            this._prev = $('.previous_slider');
            this._next = document.querySelector('.next_slider');
            this._result();
        }
        skills.prototype._result = function () {
            this._next.addEventListener('click', this._nextslide.bind(this), false);
        };
        skills.prototype._arrayImg = function () {
            this._lists = new Array();
            this._lists[1] = new Image();
            this._lists[1].src = 'img/1 (1).jpeg';
            this._lists[2] = new Image();
            this._lists[2].src = 'img/1 (2).jpeg';
            this._lists[3] = new Image();
            this._lists[3].src = 'img/1 (3).jpeg';
        };
        skills.prototype._create = function () {
            this._arrayImg();
            this._Image = document.createElement('div');
            this._Image.src = this._lists;
            this._elem = document.querySelector('.slider_technology').appendChild(this._Image);
        };
        skills.prototype._nextslide = function () {
            this._create();
            this._apppedm = [];
            for (var i = 0; i < this._lists.length; i++) {
                this._apppedm[i] = new Image();
                this._apppedm[i].src = this._lists[i];
                this._newList = this._lists.length;
                this._elem.innerHTML = '<img src="' + this._lists[this._newList] + '"/>';
                console.log(this._newList);
                console.log(this._lists[this._newList]);
                console.log(this._lists[this._newList]);
                console.log(this._elem);
            }
            //this._elem.innerHTML = '<img src="' + this._lists[i] + '"/>';
            // console.log(this._elem);
        };
        new skills();
    })();