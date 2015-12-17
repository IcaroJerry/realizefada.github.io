google.maps.event.addDomListener(window, 'load', initMap);

function initMap() {

  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -12.775912, lng: -38.917032},
    scrollwheel: false,
    zoom: 18
  });

  // Create a marker and set its position.
  var marker = new google.maps.Marker({
    map: map,
    position: {lat: -12.775912, lng: -38.917032},
    title: 'Mãos de Fada - ateliê'
  });
}