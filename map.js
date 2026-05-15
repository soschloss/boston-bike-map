// Import Mapbox as an ESM module
import mapboxgl from 'https://cdn.jsdelivr.net/npm/mapbox-gl@2.15.0/+esm';
// Check that Mapbox GL JS is loaded
// console.log('Mapbox GL JS Loaded:', mapboxgl);
// Set your Mapbox access token here
mapboxgl.accessToken = 'pk.eyJ1Ijoic29zY2hsb3NzIiwiYSI6ImNtcDY3N25nOTBqNGoycHByY3k0bG9qaXEifQ.-lW2JykEbqpVwVQg3MEUVg';

// Initialize the map
const map = new mapboxgl.Map({
    container: 'map', // ID of the div where the map will render
    style: 'mapbox://styles/soschloss/cmp68daqf003a01snfw511azf', // Map style
    center: [-71.05788050752196, 42.36052150913043], // [longitude, latitude] , 
    zoom: 12, // Initial zoom level
    minZoom: 5, // Minimum allowed zoom
    maxZoom: 18, // Maximum allowed zoom
});

map.on('load', async () => {
    //code
    map.addSource('boston_route', {
        type: 'geojson',
        data: 'https://bostonopendata-boston.opendata.arcgis.com/datasets/boston::existing-bike-network-2022.geojson',
    });
});