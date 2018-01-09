  require([
    "esri/basemaps",
    "esri/map",
    "dojo/domReady!"
  ], function (esriBasemaps, Map){
    esriBasemaps.delorme = {
      baseMapLayers: [{url: "https://services.arcgisonline.com/ArcGIS/rest/services/Specialty/DeLorme_World_Base_Map/MapServer"}
      ],
      thumbnailUrl: "https://www.example.com/images/thumbnail_2014-11-25_61051.png",
      title: "Delorme"
    };

    var map = new Map("map", {
      basemap: "delorme",
      center: [-111.879655861, 40.571338776], // long, lat
      zoom: 13,
      sliderStyle: "small"
    });
});