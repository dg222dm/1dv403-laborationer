/*
 * Created by Damian on 2015-01-07.
 */

//Explain the Why -- Not the How -- of Your Program

"use strict";

var desktop = {

    init: function () {

        desktop.test = document.getElementById("gallery");
        desktop.listener = function () {
          desktop.createWindow();

        };

        desktop.test.addEventListener("click", desktop.listener, false);
    },

    deleteWindow: function () {
        var test  = document.getElementById("Window");
        test.parentElement.removeChild(test);
    },

    getArray: function () {

        var object = new XMLHttpRequest();
        object.open("GET", "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/", true);
        object.send(null);
        return object;

    },

    createWindow: function () {

        desktop.test.removeEventListener("click", desktop.listener, false);
        desktop.desktopBackground = document.getElementById("desk");
        desktop.windowFrame = document.createElement("div");
        desktop.windowHeader = document.createElement("div");
        desktop.windowFooter = document.createElement("div");
        desktop.content = document.createElement("div");
        desktop.windowFrame.id = "Window";
        desktop.closeImg = document.createElement("img");
        var loaderImg = document.createElement("img");
        desktop.headerIcon = document.createElement("img");
        desktop.windowHeader.innerHTML = "Gallery";

        desktop.closeImg.addEventListener("click", function () {

            desktop.test.addEventListener("click", desktop.listener, false);
            desktop.deleteWindow();

        });

        loaderImg.className = "LoaderImg";
        desktop.headerIcon.className = "HeaderIcon";
        desktop.closeImg.className = "CloseIcon";
        desktop.windowFrame.className = "WindowFrame";
        desktop.windowHeader.className = "WindowHeader";
        desktop.windowFooter.className = "WindowFooter";
        desktop.content.className = "WindowContent";
        desktop.headerIcon.setAttribute("src", "img/gallery.png");
        desktop.closeImg.setAttribute("src", "img/close.png");
        loaderImg.setAttribute("src", "img/loader.gif");

        desktop.windowHeader.appendChild(desktop.headerIcon);
        desktop.windowFrame.appendChild(desktop.windowHeader);
        desktop.windowFrame.appendChild(desktop.content);
        desktop.windowFrame.appendChild(desktop.windowFooter);
        desktop.windowFooter.appendChild(loaderImg);
        desktop.desktopBackground.appendChild(desktop.windowFrame);
        desktop.windowHeader.appendChild(desktop.closeImg);

        var requestObject = desktop.getArray();
        //console.log(requestObject);

        requestObject.onreadystatechange = function () {

            var imgObject;
            var i;
            var imageBox;
            var aTag;
            var img;
            var maxHeight = 0;
            var maxWidth = 0;

            if (requestObject.readyState === 4 && requestObject.status === 200) {

                loaderImg.parentElement.removeChild(loaderImg);
                imgObject = JSON.parse(requestObject.responseText);
                console.log(typeof(imgObject));

                for (i = 0; i < imgObject.length; i += 1) {

                    if (maxHeight < imgObject[i].thumbHeight) {
                        maxHeight = imgObject[i].thumbHeight;
                    }

                    if (maxWidth < imgObject[i].thumbWidth) {
                        maxWidth = imgObject[i].thumbWidth;
                    }

                }

                for (i = 0; i < imgObject.length; i += 1) {

                    aTag = document.createElement("a");
                    img = document.createElement("img");
                    imageBox = document.createElement("div");
                    imageBox.style.height = maxHeight;
                    imageBox.style.width = maxWidth;
                    imageBox.setAttribute("style", "height:" + maxHeight + "px; width:" + maxWidth + "px;");
                    imageBox.className = "imageBox";
                    aTag.href = "#href";
                    img.src = imgObject[i].thumbURL;
                    aTag.appendChild(img);
                    imageBox.appendChild(aTag);
                    desktop.content.appendChild(imageBox);
                    aTag.url = imgObject[i].URL;

                    aTag.addEventListener("click", desktop.setBackground);

                }
            }
        }

    },

    setBackground: function () {

        desktop.desktopBackground.style.backgroundImage = "url(" + this.url + ")";
        //console.log(this);
    }
};
window.onload = desktop.init;