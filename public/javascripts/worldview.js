require([
    "esri/Map",
    "esri/views/MapView",
    "esri/widgets/BasemapToggle",
    "esri/widgets/BasemapGallery",
    "esri/Graphic",
    "esri/layers/GraphicsLayer"
], function(Map, MapView, BasemapToggle, BasemapGallery, Graphic, GraphicsLayer) {

    var map = new Map({
        basemap: "streets"
    });

    var view = new MapView({
        container: "viewDiv",
        map: map,
        center: [153.068085, -27.454992],
        zoom: 12
    });

    var graphicsLayer = new GraphicsLayer();
    map.add(graphicsLayer);

    var polygon = {
        type: "polygon",
        rings: [
            [-113.910954, 51.176148],
            [-113.910954, 50.865474],
            [-114.137833, 50.865474],
            [-114.137833, 50.992233],
            [-114.236128, 50.992233],
            [-114.236128, 51.176148]
        ]
    };

    var simpleFillSymbol = {
        type: "simple-fill",
        color: [227, 139, 79, 0],
        outline: {
            color: [25, 55, 255],
            width: 3
        }
    };

    var polygonGraphic = new Graphic({
        geometry: polygon,
        symbol: simpleFillSymbol
    });

    graphicsLayer.add(polygonGraphic);

    var basemapGallery = new BasemapGallery({
        view: view,
        source: {
            portal: {
                url: "http://www.arcgis.com",
                useVectorBasemaps: true,
            },
        }
    });

    view.ui.add(basemapGallery, "top-right");
});