function initMap() {
    // Map Options - Centered on Dhaka
    const mapOptions = {
        center: { lat: 23.78023077354449, lng: 90.41779046886273 }, // Dhaka Latitude and Longitude 23.78023077354449, 90.41978894100318
        zoom: 16, // Zoom level to focus on Dhaka
    };

    // Create the Map
    const map = new google.maps.Map(document.getElementById("map"), mapOptions);

   
    const toiletIcon = {
        url: "toilets.png", 
        scaledSize: new google.maps.Size(40, 40), 
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(20, 40), 
    };

    // Array of Locations with Titles
    const locations = [
        { position: { lat: 23.775018825625157, lng: 90.42206054716549 }, title: "South Badda" }, // South Badda
        { position: { lat: 23.77924896954964, lng: 90.4235032247171 }, title: "Merul Badda" }, // Merul Badda
        { position: { lat: 23.783058305314867, lng: 90.41582137856555 }, title: "Gulshan" },     // Gulshan
    ];

    
    locations.forEach(location => {
        new google.maps.Marker({
            position: location.position,
            map: map,
            title: location.title, 
            icon: toiletIcon, 
        });
    });
}

// Load the map when the window loads
window.onload = initMap;
