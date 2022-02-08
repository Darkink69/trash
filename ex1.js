"use strict";

function LoadingImages() {
    this.urls = new Set();
    this.listImages = [];

    this.AddItem = function(url) {
        this.urls.add(url);
    }

    this.getTotalItems = function() {
        return this.urls.size;
    }

    this.load = function(callback_progress) {
        for(let url of this.urls) {
            let img = new Image();
            this.listImages.push(img);

            img.onload = callback_progress;
            img.src = url;
        }
    }
}