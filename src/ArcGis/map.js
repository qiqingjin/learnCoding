      require(["dojo/dom",
      "dojo/dom-attr",
      "dojo/_base/array",
      "esri/Color",
      "dojo/number",
      "dojo/parser",
      "dijit/registry",

      "esri/config",
      "esri/map",
      "esri/graphic",
      "esri/tasks/GeometryService",
      "esri/tasks/BufferParameters",
      "esri/toolbars/draw",
      "esri/symbols/SimpleMarkerSymbol",
      "esri/symbols/SimpleLineSymbol",
      "esri/symbols/SimpleFillSymbol",
      "esri/symbols/Font",
      "esri/symbols/TextSymbol",
      "esri/graphicsUtils",

      "dijit/layout/BorderContainer",
      "dijit/layout/ContentPane"
  ], function(dom, domAttr, array, Color, number, parser, registry, esriConfig, Map, Graphic, GeometryService, BufferParameters, Draw,
              SimpleMarkerSymbol, SimpleLineSymbol, SimpleFillSymbol, Font, TextSymbol, graphicsUtils) {

    var map, toolbar, geometryService;
    
    parser.parse();

    // create the map control
    map = new Map("mapDiv", {
      basemap: "streets",
      center: [-117.215, 34.05],
      zoom: 13,
      showAttribution: false
    });

    // configure the proxy url for the application
    esriConfig.defaults.io.proxyUrl = "/proxy/";
    esriConfig.defaults.io.alwaysUseProxy = false;

    // create a toolbar for the map
    toolbar = new Draw(map);
    toolbar.on("draw-end", addToMap);

    // activate a drawing tool when a button is clicked
    registry.byId("polygon").on("click", function() {
      toolbar.activate(Draw.POLYGON);
      map.hideZoomSlider();
    });
    registry.byId("freehand").on("click", function() {
      toolbar.activate(Draw.FREEHAND_POLYGON);
      map.hideZoomSlider();
    });
    registry.byId("clear").on("click", function() {
      map.graphics.clear();
    });

    geometryService = new GeometryService("https://utility.arcgisonline.com/ArcGIS/rest/services/Geometry/GeometryServer");

    function addToMap(evtObj) {
      map.graphics.clear();
      var geometry = evtObj.geometry;
      // add the drawn graphic to the map
      var symbol = new SimpleFillSymbol(
        SimpleFillSymbol.STYLE_SOLID,
        new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID, new Color([0, 0, 0]), 2),
        new Color([0, 0, 255, 0.5]));
      var graphic = new Graphic(geometry, symbol);
      map.graphics.add(graphic);

      var geometries = graphicsUtils.getGeometries(map.graphics);
      console.log('---------', geometries);

      // simplify polygon so it can be used in the get label points request
      geometryService.simplify([geometry], getLabelPoints);
    }

    function getLabelPoints(geometries) {
      if (geometries[0].rings.length > 0) {
        geometryService.labelPoints(geometries, function(labelPoints) { // callback
          toolbar.deactivate();
          map.showZoomSlider();

          var font = new Font("20px", Font.STYLE_NORMAL, Font.VARIANT_NORMAL, Font.WEIGHT_BOLDER);
          array.forEach(labelPoints, function(labelPoint) {
            // create a text symbol
            var textSymbol = new TextSymbol(
              "X: " + number.format(labelPoint.x) + ", Y: " + number.format(labelPoint.y),
              font, new Color([0, 0, 0]));

            var labelPointGraphic = new Graphic(labelPoint, textSymbol);

            // add the label point graphic to the map
            map.graphics.add(labelPointGraphic);
          });
        });
      } else {
        alert("Invalid Polygon - must have at least 3 points");
      }
    }
  });