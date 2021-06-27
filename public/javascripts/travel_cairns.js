require([
    'esri/Map',
    'esri/views/MapView',
    'esri/Graphic',
    'esri/layers/GraphicsLayer'
], function(Map, MapView, Graphic, GraphicsLayer) {

    var map = new Map({
        basemap: 'satellite'
    });
    var view = new MapView({
        container: 'viewDiv',
        map: map,
        center: [145.773, -16.920],
        zoom: 15
    });

    var graphicsLayer = new GraphicsLayer();
    map.add(graphicsLayer);
    var polygon = {
        type: 'polygon',
        rings: [
            [145.776, -16.919],
            [145.781, -16.917],
            [145.783, -16.917],
            [145.779, -16.930],
            [145.769, -16.922],
            [145.766, -16.918],
            [145.771, -16.914],
        ]
    };

    var simpleFillSymbol = {
        type: 'simple-fill',
        color: [1, 165, 90, 0],
        outline: {
            color: [255, 0, 0],
            width: 5
        }
    };

    var polygonGraphic = new Graphic({
        geometry: polygon,
        symbol: simpleFillSymbol
    });
    graphicsLayer.add(polygonGraphic);
});


//Image slides
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}