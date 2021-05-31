require([
    'esri/Map',
    'esri/views/MapView',
    'esri/tasks/Locator',
    'esri/Graphic',
    'esri/layers/GraphicsLayer'
], function(Map, MapView, Locator, Graphic, GraphicsLayer) {


    map = new Map("mapDiv", {
        center: { lng: -114.063910, lat: 51.034607 },
        zoom: 11,
        basemap: "national-geographic"
      });

    var CalgaryDelimeters = [
        { lng: -114.016732, lat: 51.156405 },
        { lng: -113.921833, lat: 51.156405 },
        { lng: -113.921833, lat: 51.053043 },
        { lng: -113.945813, lat: 51.052520 },
        { lng: -113.958416, lat: 51.054420 },
        { lng: -113.983610, lat: 51.052182 },
        { lng: -114.004677, lat: 51.044268 },
        { lng: -114.017878, lat: 51.048991 },
        { lng: -114.031980, lat: 51.048054 },
        { lng: -114.063774, lat: 51.055225 },
        { lng: -114.063774, lat: 51.109663 },
        { lng: -114.072601, lat: 51.125042 },
        { lng: -114.071399, lat: 51.140587 },
        { lng: -114.063788, lat: 51.146722 },
        { lng: -114.071643, lat: 51.160638 },
        { lng: -114.070706, lat: 51.180202 },
        { lng: -114.050658, lat: 51.197864 }
        ];

// Construct the polygon.
var CalgaryPolygon = new MapView.Polygon ({
    paths: CalgaryDelimeters,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 3,
    fillColor: '#FF0000',
    fillOpacity: 0.35
});

// Draw the polygon on the desired map instance
CalgaryPolygon.setMap(MapView);

    var graphicsLayer = new GraphicsLayer();
    map.add(graphicsLayer);
    var polygon = {
        type: 'polygon',
        rings: [
            [-114.063774, 51.055225],
            [-114.063774, 51.109663],
            [-114.072601, 51.125042],
            [-114.071399, 51.140587],
            [-114.063788, 51.146722],
            [-114.071643, 51.160638],
            [-114.118270, 51.157869],
            [-114.195214, 51.162471],
            [-114.212036, 51.169479],
            [-114.257563, 51.154298],
            [-114.257563, 51.111050],
            [-114.283826, 51.116654],
            [-114.289443, 51.089420],
            [-114.230134, 51.072667],
            [-114.212270, 51.074856],
            [-114.160171, 51.062284],
            [-114.125705, 51.048404],
            [-114.114984, 51.045949]
        ]
    };
    var simpleFillSymbol = {
        type: 'simple-fill',
        color: [227, 139, 79, 0],
        outline: {
            color: [0, 0, 0],
            width: 1
        }
    };
    var polygonGraphic = new Graphic({
        geometry: polygon,
        symbol: simpleFillSymbol
    });
    graphicsLayer.add(polygonGraphic);

    var graphicsLayer = new GraphicsLayer();
    map.add(graphicsLayer);
    var polygon = {
        type: 'polygon',
        rings: [
            [-114.225193, 51.016207],
            [-114.150008, 50.994646],
            [-114.148994, 50.934391],
            [-114.124590, 50.892739],
            [-114.097499, 50.891245],
            [-114.095692, 50.878210],
            [-114.053801, 50.876194],
            [-114.058512, 50.895212],
            [-114.071635, 50.921371],
            [-114.067564, 50.932700],
            [-114.071778, 50.994757],
            [-114.061106, 51.023482],
            [-114.063774, 51.055225],
            [-114.114984, 51.045949],
            [-114.125705, 51.048404],
            [-114.160171, 51.062284],
            [-114.212270, 51.074856],
            [-114.230134, 51.072667],
            [-114.289443, 51.089420]
        ]
    };
    var simpleFillSymbol = {
        type: 'simple-fill',
        color: [227, 139, 79, 0],
        outline: {
            color: [0, 0, 0],
            width: 1
        }
    };
    var polygonGraphic = new Graphic({
        geometry: polygon,
        symbol: simpleFillSymbol
    });
    graphicsLayer.add(polygonGraphic);

    var graphicsLayer = new GraphicsLayer();
    map.add(graphicsLayer);
    var polygon = {
        type: 'polygon',
        rings: [
            [-113.921833, 51.053043],
            [-113.920409, 51.037297],
            [-113.954634, 51.027668],
            [-113.954555, 51.008368],
            [-113.932443, 50.983422],
            [-113.904876, 50.982705],
            [-113.914271, 50.948878],
            [-113.907484, 50.895296],
            [-113.957829, 50.873437],
            [-114.015988, 50.845813],
            [-114.053801, 50.876194],
            [-114.058512, 50.895212],
            [-114.071635, 50.921371],
            [-114.067564, 50.932700],
            [-114.071778, 50.994757],
            [-114.061106, 51.023482],
            [-114.063774, 51.055225],
            [-114.063774, 51.055225],
            [-114.031980, 51.048054],
            [-114.017878, 51.048991],
            [-114.004677, 51.044268],
            [-113.983610, 51.052182],
            [-113.958416, 51.054420],
            [-113.945813, 51.052520]
        ]
    };
    var simpleFillSymbol = {
        type: 'simple-fill',
        color: [227, 139, 79, 0],
        outline: {
            color: [0, 0, 0],
            width: 1
        }
    };
    var polygonGraphic = new Graphic({
        geometry: polygon,
        symbol: simpleFillSymbol
    });
    graphicsLayer.add(polygonGraphic);


    var places = ['Coffee shop', 'Grocery', 'School', 'College', 'Gas station', 'Food', 'Hotel', 'Parks and Outdoors'];

    var select = document.createElement('select', '');
    select.setAttribute('class', 'esri-widget esri-select');
    select.setAttribute('style', 'width: 175px; font-family: Arial; font-size: 1em');
    places.forEach(function(p) {
        var option = document.createElement('option');
        option.value = p;
        option.innerHTML = p;
        select.appendChild(option);
    });

    view.ui.add(select, 'top-right');

    var locator = new Locator({
        url: 'http://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer'
    });

    // Find places and add them to the map
    function findPlaces(category, pt) {
        locator.addressToLocations({
                location: pt,
                categories: [category],
                maxLocations: 50,
                outFields: ['Place_addr', 'PlaceName']
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
                                type: 'simple-marker',
                                color: '#0D98BA',
                                size: '12px',
                                outline: {
                                    color: '#000000',
                                    width: '2px'
                                }
                            },
                            popupTemplate: {
                                title: '{PlaceName}',
                                content: '{Place_addr}'
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
    view.on('click', function(event) {
        view.hitTest(event.screenPoint)
            .then(function(response) {
                if (response.results.length < 2) { // If graphic is not clicked, find places 
                    findPlaces(select.options[select.selectedIndex].text, event.mapPoint);
                }
            })
    });
        //close the dialog when the mouse leaves the highlight graphic
        graphicsLayer.on("load", function(){
            graphicsLayer.enableMouseEvents();
            graphicsLayer.on("mouse-out", closeDialog);
      
          });
      
          //listen for when the onMouseOver event fires on the countiesGraphicsLayer
          //when fired, create a new graphic with the geometry from the event.graphic and add it to the maps graphics layer
          graphicsLayer.on("mouse-over", function(evt){
            var t = "<b>${NAME}</b><hr><b>2000 Population: </b>${POP2000:NumberFormat}<br>"
              + "<b>2000 Population per Sq. Mi.: </b>${POP00_SQMI:NumberFormat}<br>"
              + "<b>2007 Population: </b>${POP2007:NumberFormat}<br>"
              + "<b>2007 Population per Sq. Mi.: </b>${POP07_SQMI:NumberFormat}";
      
            var content = esriLang.substitute(evt.graphic.attributes,t);
            var highlightGraphic = new Graphic(evt.graphic.geometry,highlightSymbol);
            graphicsLayer.add(highlightGraphic);
      
            dialog.setContent(content);
      
            domStyle.set(dialog.domNode, "opacity", 0.85);
            dijitPopup.open({
              popup: dialog,
              x: evt.pageX,
              y: evt.pageY
            });
          });
      
          function closeDialog() {
            graphicsLayer.clear();
            dijitPopup.close(dialog);
          }      
});
