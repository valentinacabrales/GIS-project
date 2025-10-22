var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Neighborhoods_Chicago_1 = new ol.format.GeoJSON();
var features_Neighborhoods_Chicago_1 = format_Neighborhoods_Chicago_1.readFeatures(json_Neighborhoods_Chicago_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Neighborhoods_Chicago_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Neighborhoods_Chicago_1.addFeatures(features_Neighborhoods_Chicago_1);
var lyr_Neighborhoods_Chicago_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Neighborhoods_Chicago_1, 
                style: style_Neighborhoods_Chicago_1,
                popuplayertitle: 'Neighborhoods_Chicago',
                interactive: true,
    title: 'Neighborhoods_Chicago<br />\
    <img src="styles/legend/Neighborhoods_Chicago_1_0.png" /> 0.1 - 1.8<br />\
    <img src="styles/legend/Neighborhoods_Chicago_1_1.png" /> 1.8 - 3.9<br />\
    <img src="styles/legend/Neighborhoods_Chicago_1_2.png" /> 3.9 - 6.6<br />\
    <img src="styles/legend/Neighborhoods_Chicago_1_3.png" /> 6.6 - 9.1<br />\
    <img src="styles/legend/Neighborhoods_Chicago_1_4.png" /> 9.1 - 34.5<br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_Neighborhoods_Chicago_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Neighborhoods_Chicago_1];
lyr_Neighborhoods_Chicago_1.set('fieldAliases', {'pri_neigh': 'pri_neigh', 'sec_neigh': 'sec_neigh', 'shape_area': 'shape_area', 'shape_len': 'shape_len', 'Area_km2': 'Area_km2', });
lyr_Neighborhoods_Chicago_1.set('fieldImages', {'pri_neigh': 'TextEdit', 'sec_neigh': 'TextEdit', 'shape_area': 'TextEdit', 'shape_len': 'TextEdit', 'Area_km2': 'TextEdit', });
lyr_Neighborhoods_Chicago_1.set('fieldLabels', {'pri_neigh': 'inline label - visible with data', 'sec_neigh': 'no label', 'shape_area': 'no label', 'shape_len': 'no label', 'Area_km2': 'no label', });
lyr_Neighborhoods_Chicago_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});