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
        center: [134.818553, -25.003148],
        zoom: 5
    });

    var graphicsLayer = new GraphicsLayer();
    map.add(graphicsLayer);

    var point = {
        type: 'point',
        longitude: 153.011304,
        latitude: -27.498225
    };

    var simpleMarkerSymbol = {
        type: 'simple-marker',
        color: [226, 119, 40],
        outline: {
            color: [0, 0, 0],
            width: 1
        }
    };

    var pointGraphic = new Graphic({
        geometry: point,
        symbol: simpleMarkerSymbol
    });

    graphicsLayer.add(pointGraphic);

    var graphicsLayer = new GraphicsLayer();
    map.add(graphicsLayer);

    var point = {
        type: 'point',
        longitude: 153.046078,
        latitude: -27.448952
    };

    var simpleMarkerSymbol = {
        type: 'simple-marker',
        color: [0, 0, 255],
        outline: {
            color: [0, 0, 0],
            width: 1
        }
    };

    var pointGraphic = new Graphic({
        geometry: point,
        symbol: simpleMarkerSymbol
    });

    graphicsLayer.add(pointGraphic);

    var graphicsLayer = new GraphicsLayer();
    map.add(graphicsLayer);

    var point = {
        type: 'point',
        longitude: 153.040534,
        latitude: -27.468472
    };

    var simpleMarkerSymbol = {
        type: 'simple-marker',
        color: [0, 255, 255],
        outline: {
            color: [0, 0, 0],
            width: 1
        }
    };

    var pointGraphic = new Graphic({
        geometry: point,
        symbol: simpleMarkerSymbol
    });

    graphicsLayer.add(pointGraphic);

    var graphicsLayer = new GraphicsLayer();
    map.add(graphicsLayer);

    var point = {
        type: 'point',
        longitude: 153.016727,
        latitude: -27.479074
    };

    var simpleMarkerSymbol = {
        type: 'simple-marker',
        color: [255, 255, 0],
        outline: {
            color: [0, 0, 0],
            width: 1
        }
    };

    var pointGraphic = new Graphic({
        geometry: point,
        symbol: simpleMarkerSymbol
    });

    graphicsLayer.add(pointGraphic);

    var graphicsLayer = new GraphicsLayer();
    map.add(graphicsLayer);

    var point = {
        type: 'point',
        longitude: 152.942534,
        latitude: -27.472042
    };

    var simpleMarkerSymbol = {
        type: 'simple-marker',
        color: [0, 204, 0],
        outline: {
            color: [0, 0, 0],
            width: 1
        }
    };

    var pointGraphic = new Graphic({
        geometry: point,
        symbol: simpleMarkerSymbol
    });

    graphicsLayer.add(pointGraphic);

    var graphicsLayer = new GraphicsLayer();
    map.add(graphicsLayer);

    var point = {
        type: 'point',
        longitude: 153.084262,
        latitude: -27.322634
    };

    var simpleMarkerSymbol = {
        type: 'simple-marker',
        color: [255, 102, 178],
        outline: {
            color: [0, 0, 0],
            width: 1
        }
    };

    var pointGraphic = new Graphic({
        geometry: point,
        symbol: simpleMarkerSymbol
    });

    graphicsLayer.add(pointGraphic);

    var graphicsLayer = new GraphicsLayer();
    map.add(graphicsLayer);

    var point = {
        type: 'point',
        longitude: 153.029935,
        latitude: -27.475852
    };

    var simpleMarkerSymbol = {
        type: 'simple-marker',
        color: [154, 241, 178],
        outline: {
            color: [0, 0, 0],
            width: 1
        }
    };

    var pointGraphic = new Graphic({
        geometry: point,
        symbol: simpleMarkerSymbol
    });

    graphicsLayer.add(pointGraphic);

    var graphicsLayer = new GraphicsLayer();
    map.add(graphicsLayer);

    var point = {
        type: 'point',
        longitude: 145.756078,
        latitude: -16.903997
    };

    var simpleMarkerSymbol = {
        type: 'simple-marker',
        color: [200, 200, 150],
        outline: {
            color: [0, 0, 0],
            width: 1
        }
    };

    var pointGraphic = new Graphic({
        geometry: point,
        symbol: simpleMarkerSymbol
    });

    graphicsLayer.add(pointGraphic);

    var graphicsLayer = new GraphicsLayer();
    map.add(graphicsLayer);

    var point = {
        type: 'point',
        longitude: 151.215297,
        latitude: -33.856784
    };

    var simpleMarkerSymbol = {
        type: 'simple-marker',
        color: [100, 100, 250],
        outline: {
            color: [0, 0, 0],
            width: 1
        }
    };

    var pointGraphic = new Graphic({
        geometry: point,
        symbol: simpleMarkerSymbol
    });

    graphicsLayer.add(pointGraphic);

    var graphicsLayer = new GraphicsLayer();
    map.add(graphicsLayer);

    var point = {
        type: 'point',
        longitude: 153.416667,
        latitude: -28.000000
    };

    var simpleMarkerSymbol = {
        type: 'simple-marker',
        color: [255, 51, 51],
        outline: {
            color: [0, 0, 0],
            width: 1
        }
    };

    var pointGraphic = new Graphic({
        geometry: point,
        symbol: simpleMarkerSymbol
    });

    graphicsLayer.add(pointGraphic);


});