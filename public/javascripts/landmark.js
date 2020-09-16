require([
    'esri/Map',
    'esri/views/MapView',
    'esri/Graphic',
    'esri/layers/GraphicsLayer'
], function(Map, MapView, BasemapToggle, BasemapGallery, Graphic, GraphicsLayer) {

    var map = new Map({
        basemap: 'dark-gray'
    });

    var view = new MapView({
        container: 'viewDiv',
        map: map,
        center: [153.068085, -27.454992],
        zoom: 12
    });

    var graphicsLayer = new GraphicsLayer();
    map.add(graphicsLayer);

    var polyline = {
        type: "polyline",
        paths: [
            [153.027390, -27.474386],
            [153.022201, -27.471860],
            [153.025692, -27.476223],
            [153.030100, -27.479328],
            [153.031572, -27.476894],
            [153.030565, -27.468535]
        ]
    };

    var polylineGraphic = new Graphic({
        geometry: polyline,
        symbol: simpleLineSymbol
    })

    graphicsLayer.add(polylineGraphic);

});


require([
    "esri/Map",
    "esri/views/MapView",
    "esri/Graphic",
    "esri/layers/GraphicsLayer"
], function(Map, MapView, Graphic, GraphicsLayer) {

    var map = new Map({
        basemap: "dark-gray"
    });

    var view = new MapView({
        container: "viewDiv",
        map: map,
        center: [153.032577, -27.471188],
        zoom: 14
    });

    var graphicsLayer = new GraphicsLayer();
    map.add(graphicsLayer);

    var simpleLineSymbol = {
        type: "simple-line",
        color: [226, 119, 40],
        width: 6
    };

    var polyline = {
        type: "polyline",
        paths: [
            [153.019683, -27.473073],
            [153.022201, -27.471860],
            [153.025692, -27.476223],
            [153.030100, -27.479328],
            [153.031572, -27.476894],
            [153.030565, -27.468535],
            [153.032660, -27.462834],
            [153.037637, -27.462409],
            [153.042185, -27.473859],
        ]
    };

    var polylineGraphic = new Graphic({
        geometry: polyline,
        symbol: simpleLineSymbol
    })
    graphicsLayer.add(polylineGraphic);

    // create and add the layer
    var mil = new esri.layers.MapImageLayer();
    map.addLayer(mil);

    // create an add the actual image
    var mi = new esri.layers.MapImage({
        'extent': { 'xmin': 153.026578, 'ymin': -27.466270, 'xmax': 153.035635, 'ymax': -27.472217 },
        'href': 'https://images.app.goo.gl/qfr2D3nbrCewnrQg8'
    });
    mil.addImage(mi);
});