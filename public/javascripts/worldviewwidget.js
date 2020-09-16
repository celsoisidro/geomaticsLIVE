require([
    "esri/Map",
    "esri/views/MapView",
    "esri/tasks/Locator",
    "esri/Graphic",
    "esri/layers/GraphicsLayer"
], function(Map, MapView, Locator, Graphic, GraphicsLayer) {

    var map = new Map({
        basemap: "streets"
    });

    var view = new MapView({
        container: "viewDiv",
        map: map,
        center: [-114.063910, 51.034607],
        zoom: 11
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

    var places = ["Coffee shop", "Grocery", "School", "College", "Gas station", "Food", "Hotel", "Parks and Outdoors"];

    var select = document.createElement("select", "");
    select.setAttribute("class", "esri-widget esri-select");
    select.setAttribute("style", "width: 175px; font-family: Arial; font-size: 1em");
    places.forEach(function(p) {
        var option = document.createElement("option");
        option.value = p;
        option.innerHTML = p;
        select.appendChild(option);
    });

    view.ui.add(select, "top-right");

    var locator = new Locator({
        url: "http://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer"
    });

    // Find places and add them to the map
    function findPlaces(category, pt) {
        locator.addressToLocations({
                location: pt,
                categories: [category],
                maxLocations: 50,
                outFields: ["Place_addr", "PlaceName"]
            })
            .then(function(results) {
                view.popup.close();
                view.graphics.removeAll();
                results.forEach(function(result) {
                    view.graphics.add(
                        new Graphic({
                            attributes: result.attributes,
                            geometry: result.location,
                            symbol: {
                                type: "simple-marker",
                                color: "#000000",
                                size: "12px",
                                outline: {
                                    color: "#ffffff",
                                    width: "2px"
                                }
                            },
                            popupTemplate: {
                                title: "{PlaceName}",
                                content: "{Place_addr}"
                            }
                        }));
                });
            });
    }

    // Search for places in center of map
    findPlaces(select.value, view.center);

    // Listen for category changes and find places
    select.addEventListener('change', function(event) {
        findPlaces(event.target.value, view.center);
    });

    // Listen for mouse clicks and find places
    view.on("click", function(event) {
        view.hitTest(event.screenPoint)
            .then(function(response) {
                if (response.results.length < 2) { // If graphic is not clicked, find places 
                    findPlaces(select.options[select.selectedIndex].text, event.mapPoint);
                }
            })
    });
});