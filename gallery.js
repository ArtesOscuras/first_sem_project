/**
 * Created by Artes on 18/10/2016.
 */
window.onload = function() {
    var container = document.getElementById('image-container');

    var modal = document.getElementById('modal');
    var modalImage = modal.getElementsByTagName('img')[0];

    var images = [];

    for (var x = 0; x < 4; x++) {
        images[x] = document.createElement('img');
        images[x].src = "images/gallery" + (x+1) + ".jpg";
        images[x].onclick = function() {
            modal.style.display = 'block';
            modalImage.src = this.src;
        };
        var imageDiv = document.createElement('div');
        imageDiv.className = "image-box";
        imageDiv.appendChild(images[x]);
        container.appendChild(imageDiv);
    }

    var close = document.getElementById('close');
    close.onclick = function() {
        modal.style.display = "none";
    }
};