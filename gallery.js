/**
 * Created by Artes on 18/10/2016.
 */
window.onload = function() {
    var container = document.getElementById('image-container');

    var modal = document.getElementById('modal');
    var modalImage = modal.getElementsByTagName('img')[0];

    var images = [];

    var current = 0;

    for (var x = 0; x < 12; x++) {
        images[x] = document.createElement('img');
        images[x].src = "images/gallery" + (x+1) + ".jpg";
        images[x].onclick = function() {
            var currentNum = "";
            console.log(this.src);

            for (var y = 0; y < this.src.length; y++) {

                var start = 0;

                for (var a = 0; a < this.src.length; a++) {
                    if (this.src[a] == "/") {
                        start = a;
                    }
                }

                for (var z = 0; z < "0123456789".length; z++) {
                    if (this.src[y+start] == "0123456789"[z]) {
                        currentNum += this.src[y+start];
                    }
                }
            }
            current = parseInt(currentNum)-1;
            console.log(current);
            modal.style.display = 'block';
            modalImage.src = this.src;
            if (this.height > this.width) {
                modalImage.className = 'zoom-height';
            } else {
                modalImage.className = "zoom-width";
            }
        };
        var imageDiv = document.createElement('div');
        imageDiv.className = "image-box";
		imageDiv.style.backgroundImage = "url(images/gallery" + (x+1) + ".jpg)";
        imageDiv.appendChild(images[x]);
        container.appendChild(imageDiv);
    }

    var close = document.getElementById('close');
    close.onclick = function() {
        modal.style.display = "none";
		modalImage.className ="";
        modalImage.style.maxHeight = '';
    };

    var leftarrow = document.getElementById('left-arrow');
    var rightarrow = document.getElementById('right-arrow');

    leftarrow.onclick = function() {
        if (current > 0) {
            current--;
            modalImage.src = "images/gallery" + (current+1) + ".jpg";
        }
    };
    rightarrow.onclick = function() {
        console.log(images.length);
        if (current < images.length - 1) {
            current++;
            modalImage.src = "images/gallery" + (current+1) + ".jpg";
        }
    };


};