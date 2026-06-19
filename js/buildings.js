map.on('style.load',()=>{

const layers =
map.getStyle().layers;

let labelLayerId;

for(const layer of layers){

if(
layer.type === 'symbol' &&
layer.layout['text-field']
){

labelLayerId = layer.id;
break;

}

}

map.addLayer({

id:'3d-buildings',

source:'openmaptiles',

'source-layer':'building',

type:'fill-extrusion',

minzoom:15,

paint:{

'fill-extrusion-color':'#00ffff',

'fill-extrusion-height':[
'get',
'height'
],

'fill-extrusion-base':[
'get',
'min_height'
],

'fill-extrusion-opacity':0.75

}

},labelLayerId);

});
