var wms_layers = [];

var format_0NE_0 = new ol.format.GeoJSON();
var features_0NE_0 = format_0NE_0.readFeatures(json_0NE_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_0NE_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_0NE_0.addFeatures(features_0NE_0);
var lyr_0NE_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_0NE_0, 
                style: style_0NE_0,
                popuplayertitle: "0NE",
                interactive: true,
                title: '<img src="styles/legend/0NE_0.png" /> 0NE'
            });
var format_School_1 = new ol.format.GeoJSON();
var features_School_1 = format_School_1.readFeatures(json_School_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_School_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_School_1.addFeatures(features_School_1);
var lyr_School_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_School_1, 
                style: style_School_1,
                popuplayertitle: "School",
                interactive: true,
                title: '<img src="styles/legend/School_1.png" /> School'
            });
var format_Road1_2 = new ol.format.GeoJSON();
var features_Road1_2 = format_Road1_2.readFeatures(json_Road1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Road1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Road1_2.addFeatures(features_Road1_2);
var lyr_Road1_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Road1_2, 
                style: style_Road1_2,
                popuplayertitle: "Road1",
                interactive: true,
                title: '<img src="styles/legend/Road1_2.png" /> Road1'
            });
var format_PHC_3 = new ol.format.GeoJSON();
var features_PHC_3 = format_PHC_3.readFeatures(json_PHC_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PHC_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PHC_3.addFeatures(features_PHC_3);
var lyr_PHC_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PHC_3, 
                style: style_PHC_3,
                popuplayertitle: "PHC",
                interactive: true,
                title: '<img src="styles/legend/PHC_3.png" /> PHC'
            });
var format_Location_4 = new ol.format.GeoJSON();
var features_Location_4 = format_Location_4.readFeatures(json_Location_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Location_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Location_4.addFeatures(features_Location_4);
var lyr_Location_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Location_4, 
                style: style_Location_4,
                popuplayertitle: "Location",
                interactive: true,
                title: '<img src="styles/legend/Location_4.png" /> Location'
            });
var format_CommunityHall1_5 = new ol.format.GeoJSON();
var features_CommunityHall1_5 = format_CommunityHall1_5.readFeatures(json_CommunityHall1_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CommunityHall1_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CommunityHall1_5.addFeatures(features_CommunityHall1_5);
var lyr_CommunityHall1_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CommunityHall1_5, 
                style: style_CommunityHall1_5,
                popuplayertitle: "CommunityHall1",
                interactive: true,
                title: '<img src="styles/legend/CommunityHall1_5.png" /> CommunityHall1'
            });
var format_Anganawadi1_6 = new ol.format.GeoJSON();
var features_Anganawadi1_6 = format_Anganawadi1_6.readFeatures(json_Anganawadi1_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Anganawadi1_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Anganawadi1_6.addFeatures(features_Anganawadi1_6);
var lyr_Anganawadi1_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Anganawadi1_6, 
                style: style_Anganawadi1_6,
                popuplayertitle: "Anganawadi1",
                interactive: true,
                title: '<img src="styles/legend/Anganawadi1_6.png" /> Anganawadi1'
            });
var format_Toddy_7 = new ol.format.GeoJSON();
var features_Toddy_7 = format_Toddy_7.readFeatures(json_Toddy_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Toddy_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Toddy_7.addFeatures(features_Toddy_7);
var lyr_Toddy_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Toddy_7, 
                style: style_Toddy_7,
                popuplayertitle: "Toddy",
                interactive: true,
                title: '<img src="styles/legend/Toddy_7.png" /> Toddy'
            });

lyr_0NE_0.setVisible(true);lyr_School_1.setVisible(true);lyr_Road1_2.setVisible(true);lyr_PHC_3.setVisible(true);lyr_Location_4.setVisible(true);lyr_CommunityHall1_5.setVisible(true);lyr_Anganawadi1_6.setVisible(true);lyr_Toddy_7.setVisible(true);
var layersList = [lyr_0NE_0,lyr_School_1,lyr_Road1_2,lyr_PHC_3,lyr_Location_4,lyr_CommunityHall1_5,lyr_Anganawadi1_6,lyr_Toddy_7];
lyr_0NE_0.set('fieldAliases', {'id': 'id', });
lyr_School_1.set('fieldAliases', {'Name': 'Name', 'LULC': 'LULC', 'Name2': 'Name2', 'ANU': 'ANU', });
lyr_Road1_2.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'highway': 'highway', 'waterway': 'waterway', 'aerialway': 'aerialway', 'barrier': 'barrier', 'man_made': 'man_made', 'railway': 'railway', 'z_order': 'z_order', 'other_tags': 'other_tags', });
lyr_PHC_3.set('fieldAliases', {'Name': 'Name', });
lyr_Location_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'name': 'name', 'WARD_NO': 'WARD_NO', 'WARD_NAME': 'WARD_NAME', });
lyr_CommunityHall1_5.set('fieldAliases', {'Name': 'Name', });
lyr_Anganawadi1_6.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Location': 'Location', 'Name1': 'Name1', });
lyr_Toddy_7.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Location': 'Location', });
lyr_0NE_0.set('fieldImages', {'id': 'TextEdit', });
lyr_School_1.set('fieldImages', {'Name': '', 'LULC': '', 'Name2': '', 'ANU': '', });
lyr_Road1_2.set('fieldImages', {'osm_id': '', 'name': '', 'highway': '', 'waterway': '', 'aerialway': '', 'barrier': '', 'man_made': '', 'railway': '', 'z_order': '', 'other_tags': '', });
lyr_PHC_3.set('fieldImages', {'Name': '', });
lyr_Location_4.set('fieldImages', {'OBJECTID': '', 'name': '', 'WARD_NO': '', 'WARD_NAME': '', });
lyr_CommunityHall1_5.set('fieldImages', {'Name': '', });
lyr_Anganawadi1_6.set('fieldImages', {'id': '', 'Name': '', 'Location': '', 'Name1': '', });
lyr_Toddy_7.set('fieldImages', {'id': '', 'Name': '', 'Location': '', });
lyr_0NE_0.set('fieldLabels', {'id': 'no label', });
lyr_School_1.set('fieldLabels', {'Name': 'no label', 'LULC': 'no label', 'Name2': 'no label', 'ANU': 'no label', });
lyr_Road1_2.set('fieldLabels', {'osm_id': 'no label', 'name': 'no label', 'highway': 'no label', 'waterway': 'no label', 'aerialway': 'no label', 'barrier': 'no label', 'man_made': 'no label', 'railway': 'no label', 'z_order': 'no label', 'other_tags': 'no label', });
lyr_PHC_3.set('fieldLabels', {'Name': 'no label', });
lyr_Location_4.set('fieldLabels', {'OBJECTID': 'no label', 'name': 'no label', 'WARD_NO': 'no label', 'WARD_NAME': 'no label', });
lyr_CommunityHall1_5.set('fieldLabels', {'Name': 'no label', });
lyr_Anganawadi1_6.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'Location': 'no label', 'Name1': 'no label', });
lyr_Toddy_7.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'Location': 'no label', });
lyr_Toddy_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});