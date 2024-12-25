function initMap() {
    // Map Options - Centered on Dhaka
    const mapOptions = {
        center: { lat: 23.78023077354449, lng: 90.41779046886273 }, // Dhaka Latitude and Longitude
        zoom: 16, // Zoom level to focus on Dhaka
    };

    // Create the Map
    const map = new google.maps.Map(document.getElementById("map"), mapOptions);

    // Define icons for different categories
    const icons = {
        restaurant: {
            url: "cutlery.png", // Icon for restaurants
            scaledSize: new google.maps.Size(30, 30),
        },
        shoppingMall: {
            url: "placeholder.png", // Icon for shopping malls
            scaledSize: new google.maps.Size(30, 30),
        },
        freespace: {
            url: "biome.png", // Icon for free spaces
            scaledSize: new google.maps.Size(30, 30),
        },
        masjid: {
            url: "masjid-icon.png", // Icon for masjids
            scaledSize: new google.maps.Size(30, 30),
        },
        publicWashroom: {
            url: "restroom.png", // Icon for public washrooms
            scaledSize: new google.maps.Size(30, 30),
        },
        hotel: {
            url: "hotel-icon.png", // Icon for hotels
            scaledSize: new google.maps.Size(30, 30),
        },
    };

    // Array of Locations with Categories
    const locations = [
        // Category: Restaurants
        { position: { lat: 23.783058305314867, lng: 90.41582137856555 }, title: "Gulshan", category: "restaurant" },
        { position: { lat: 23.777681595496105, lng: 90.41677109817356 }, title: "North End Coffee Roasters", category: "restaurant" },
        { position: { lat: 23.776998299738526, lng: 90.41675407523476 }, title: "Tabaq Coffee", category: "restaurant" },
        { position: { lat: 23.77559816266686, lng: 90.41543410056914 }, title: "Baguette Paris", category: "restaurant" },
        { position: { lat: 23.77573163846639, lng: 90.4146590846691 }, title: "Pizza Club", category: "restaurant" },
        { position: { lat: 23.774463080353446, lng: 90.41481598099385 }, title: "Grand Royal Chinese", category: "restaurant" },
        { position: { lat: 23.77452227343127, lng: 90.41599172616031 }, title: "Herfy Bangladesh", category: "restaurant" },
        { position: { lat: 23.779207688610715, lng: 90.4163869763015 }, title: "Gloria Jean's Coffees, Gulshan 1", category: "restaurant" },
        { position: { lat: 23.781599361668412, lng: 90.41770248056916 }, title: "La Diplomat Restaurant & Bar", category: "restaurant" },
        { position: { lat: 23.781601202513773, lng: 90.41750265599501 }, title: "Rose", category: "restaurant" },
        { position: { lat: 23.781348290103836, lng: 90.41744418025861 }, title: "Tokyo Kitchen", category: "restaurant" },
        { position: { lat: 23.78139676578343, lng: 90.41748508394663 }, title: "German Deli (Needs Confirmation)", category: "restaurant" },
        { position: { lat: 23.781353941291115, lng: 90.41731757424233 }, title: "Binni Restaurant", category: "restaurant" },
        { position: { lat: 23.781205314386995, lng: 90.41686673721638 }, title: "Farzi Café Dhaka", category: "restaurant" },
        { position: { lat: 23.78079011949305, lng: 90.41685527295047 }, title: "BASMATI (Needs Confirmation)", category: "restaurant" },
        { position: { lat: 23.780627510369293, lng: 90.4172576043047 }, title: "Cielo Rooftop - Gulshan", category: "restaurant" },
        { position: { lat: 23.78058639784169, lng: 90.41734611720241 }, title: "Fakhruddin Biriyani & Restaurant", category: "restaurant" },
        { position: { lat: 23.780654090674524, lng: 90.41763671165883 }, title: "Tasty Treat (Needs Confirmation)", category: "restaurant" },

        // Category: Shopping Malls
        { position: { lat: 23.772896076537897, lng: 90.41620338526414 }, title: "Police Plaza Concord Restaurant", category: "shoppingMall" },
        { position: { lat: 23.776930591065636, lng: 90.41601512104735 }, title: "Unimart Gulshan 1", category: "shoppingMall" },
        // freeespaceee
        { position: { lat: 23.773696394635916, lng: 90.4152200478557 }, title: "Shahid Dr Fazle Rabbi Park", category: "freespace" },
        // Category: Masjid
        { position: { lat: 23.776522656171924, lng: 90.41619460455549 }, title: "Gulshan Jame Masjid", category: "masjid" },
        // Category: Public Washroom
        { position: { lat: 23.7795253830089, lng: 90.4157102045213 }, title: "Bhumijo Toilet (Cleaned by Domex)", category: "publicWashroom" },
        // Category: Hotels
        { position: { lat: 23.77421078940356, lng: 90.41688414111256 }, title: "Shinepukur Suites", category: "hotel" },
    ];

    // Create markers and attach InfoWindows
    locations.forEach(location => {
        const marker = new google.maps.Marker({
            position: location.position,
            map: map,
            title: location.title,
            icon: icons[location.category], // Assign icon based on category
        });

        // Create an InfoWindow for the marker
        const infoWindow = new google.maps.InfoWindow({
            content: `<div style="font-size:14px;font-weight:bold;">${location.title}</div>`,
        });

        // Open the InfoWindow on hover
        marker.addListener("mouseover", () => {
            infoWindow.open(map, marker);
        });

        // Close the InfoWindow when not hovering
        marker.addListener("mouseout", () => {
            infoWindow.close();
        });
    });
}

// Load the map when the window loads
window.onload = initMap;
