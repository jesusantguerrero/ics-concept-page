const template = '<div class="imformation Window"><h2>%title%<h2></di>';
const key = 'AIzaSyBxbo8jtHUlXtuOnG1wT-YbWtISWVACm4g';
const places = ['La romana'];
const placeholders = {
  title: '%title%'
};

const defaultConfig = {
  element: document.getElementById('map'),
  image: './assets/img/marcador.png',
  template,
  key,
  placeholders,
  places
};


const mainMap = {
  init(config) {
    if (config) {
      this.config = config;
    } else {
      this.config = defaultConfig;
      this.config.element = document.getElementById('map');
    }

    this.map = new google.maps.Map(this.config.element, {
      scrollwheel: true,
      controls: false,
      streetViewControl: false,
      zoom: 13,
      zoomControlOptions: {
        position: google.maps.ControlPosition.RIGHT_CENTER
      }
    });

    this.service = new google.maps.places.PlacesService(this.map);
    this.markers = [];
    this.infoWindows = [];
    window.mapBounds = new google.maps.LatLngBounds();
    this.count = 0;
    this.searchPlace(places);
    this.setCenter(null, true);
  },

  callback(results) {
    mainMap.setMarker(results[0]);
  },

  setMarker(place) {
    const self = this;

    const newLocation = {
      id: this.count += 1,
      lat: place.geometry.location.lat(),
      lng: place.geometry.location.lng(),
      icon: place.icon,
      name: place.name,
      realName: place.formatted_address,
      pictures: []
    };

    const bounds = window.mapBounds;
    //  Information window
    const contentString = template.replace(placeholders.title, 'ICS Services');
    const informationWindow = new google.maps.InfoWindow({
      content: contentString
    });

    //  the markers
    const marker = new google.maps.Marker({
      icon: self.config.image,
      map: self.map,
      position: place.geometry.location,
      title: newLocation.name,
      animation: google.maps.Animation.BOUNCE
    });

    marker.addListener('click', () => {
      informationWindow.open(self.map, marker);
    });

    self.markers.push(marker);

    bounds.extend(new google.maps.LatLng(newLocation.lat, newLocation.lng));
    // fit the map to the new marker
    self.map.fitBounds(bounds);
    // center the map
    self.map.setCenter(bounds.getCenter());
  },

  searchPlace(place) {
    this.service.textSearch({
      query: place
    }, this.callback);
  },

  stopMarkers() {
    this.markers.forEach((marker) => {
      marker.setAnimation(google.maps.Animation.DROP);
    });
  },

  setCenter(coords, isZoom) {
    if (coords) this.map.panTo(coords);
    if (isZoom) this.map.setZoom(15);
  }

};

export default mainMap;
