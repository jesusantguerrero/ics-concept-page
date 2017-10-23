const template = '<div class="imformation Window"><h2>%title%<h2></di>';
const key = 'AIzaSyBxbo8jtHUlXtuOnG1wT-YbWtISWVACm4g';
const ICS = { lat: 18.427412, lng: -68.966571 };
const placeholders = {
  title: '%title%'
};

const defaultConfig = {
  element: document.getElementById('map'),
  image: './assets/img/marcador.png',
  template,
  key,
  placeholders,
  places: ICS
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
      center: ICS,
      controls: false,
      streetViewControl: false,
      zoom: 18,
      zoomControlOptions: {
        position: google.maps.ControlPosition.RIGHT_BOTTOM
      }
    });

    this.infoWindows = [];
    this.setMarker(ICS);
  },

  setMarker(place) {
    const self = this;
    const contentString = template.replace(placeholders.title, 'IC Services');
    const informationWindow = new google.maps.InfoWindow({
      content: contentString
    });

    //  the markers
    const marker = new google.maps.Marker({
      icon: self.config.image,
      map: self.map,
      position: place,
      title: 'ICS',
      animation: google.maps.Animation.BOUNCE
    });

    marker.addListener('click', () => {
      informationWindow.open(self.map, marker);
    });
  },

  setCenter(coords, isZoom) {
    if (coords) this.map.panTo(coords);
    if (isZoom) this.map.setZoom(20);
  }

};

export default mainMap;
