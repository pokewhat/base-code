let faviconurl = "https://pokewhat.github.io/favicon-pokewhat.png";

var faviconloader = document.createElement("link");
faviconloader.setAttribute("rel", "icon");
faviconloader.setAttribute("href", faviconurl);
document.querySelectorAll("head")[0].append(faviconloader);
function getImage(url) {
  const img = new Image();
  img.addEventListener("load", function() {
    return this;
  });
  img.src = url;
}
var redurl = "https://pokewhat.github.io/pokerby/static/red.png";
var redimage = getImage(redurl);
var redbluelogo = document.createElement("div");
redbluelogo.setAttribute("style", "width: " + redimage.naturalWidth + "px; height: " + redimage.naturalHeight + "px; background-image: url(\"" + redurl + "\");");
document.querySelectorAll("body")[0].append(redbluelogo);
