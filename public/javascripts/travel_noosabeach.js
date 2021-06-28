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
        center: [153.09, -26.40],
        zoom: 13
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