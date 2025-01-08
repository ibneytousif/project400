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
            scaledSize: new google.maps.Size(20, 20),
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
        // Category: Restaurants
        { position: { lat: 23.788640582379717, lng: 90.42058596966801 }, title: "IZUMI Japanese Kitchen", category: "restaurant" },
        { position: { lat: 23.780759520101675, lng: 90.41842097589713 }, title: "The Kaffeehaus Gulshan", category: "restaurant" },
        { position: { lat: 23.781846005380995, lng: 90.41760491708095 }, title: "Cafe Mango", category: "restaurant" },
        { position: { lat: 23.78205952149916, lng: 90.4170677205276 }, title: "tastebud (Needs Confirmation)", category: "restaurant" },
        { position: { lat: 23.7819496847338, lng: 90.41691215240273 }, title: "BREAD & Beyond - Gulshan S/A (Needs Confirmation)", category: "restaurant" },
        { position: { lat: 23.781815303313646, lng: 90.41694836222491 }, title: "Sweets of Bengal (Needs Confirmation)", category: "restaurant" },
        { position: { lat: 23.781818891390916, lng: 90.41736727246213 }, title: "Yum Cha District", category: "restaurant" },
        { position: { lat: 23.784491902672034, lng: 90.41853122413511 }, title: "Tulip Oasis Restaurant And Banquet Hall", category: "restaurant" },
        { position: { lat: 23.78501930839126, lng: 90.41955017416889 }, title: "Koreana Restaurant", category: "restaurant" },
        { position: { lat: 23.785545062093284, lng: 90.41870181062328 }, title: "Pizza Roma", category: "restaurant" },
        { position: { lat: 23.78565980458892, lng: 90.41862872042668 }, title: "Bene Bistro", category: "restaurant" },
        { position: { lat: 23.788333594551247, lng: 90.41909382339065 }, title: "Da one Cafe", category: "restaurant" },
        { position: { lat: 23.788081996130966, lng: 90.41841607799398 }, title: "The Coffee Bean & Tea Leaf", category: "restaurant" },
        { position: { lat: 23.782649551153156, lng: 90.41690580547208 }, title: "Dhaka New Hall (Needs Confirmation)", category: "restaurant" },
        { position: { lat: 23.783781043405792, lng: 90.41710663587203 }, title: "Pizza Inn Gulshan 1", category: "restaurant" },
        { position: { lat: 23.783970114080933, lng: 90.41725513726907 }, title: "Pizza Italiana", category: "restaurant" },
        { position: { lat: 23.78496729165155, lng: 90.41718594494982 }, title: "Raater Kabab 3 (Needs Confirmation)", category: "restaurant" },
        { position: { lat: 23.785741687750374, lng: 90.41732905250252 }, title: "Aandaaz", category: "restaurant" },
        { position: { lat: 23.785750032232222, lng: 90.4173172629156 }, title: "Happiness Cafe", category: "restaurant" },
        { position: { lat: 23.78757706773768, lng: 90.41659053489262 }, title: "Talent Chef (Needs Confirmation)", category: "restaurant" },
        { position: { lat: 23.786823774715835, lng: 90.41633376298445 }, title: "Bismillah Kacchi House (Needs Confirmation)", category: "restaurant" },
        { position: { lat: 23.782347771920332, lng: 90.41584817955018 }, title: "Happy tea", category: "restaurant" },
        { position: { lat: 23.782360837869085, lng: 90.4153083135403 }, title: "湘菜馆", category: "restaurant" },
        { position: { lat: 23.786067592543866, lng: 90.416754683833 }, title: "Al-Amar Lebanese Cuisine", category: "restaurant" },
        { position: { lat: 23.786117293650626, lng: 90.41676541266803 }, title: "Bella Italia", category: "restaurant" },
        { position: { lat: 23.783607086316763, lng: 90.41617590934383 }, title: "Tasty Treat Gulshan-2 (Needs Confirmation)", category: "restaurant" },
        { position: { lat: 23.783551248189422, lng: 90.41617792100062 }, title: "Fry Bucket (Needs Confirmation)", category: "restaurant" },
        { position: { lat: 23.78349234200833, lng: 90.41644815355815 }, title: "Hongbao", category: "restaurant" },
        { position: { lat: 23.783403369079608, lng: 90.41623827070035 }, title: "Crimson Cup Coffee", category: "restaurant" },
        { position: { lat: 23.783266696720663, lng: 90.41624674115985 }, title: "Second Cup Coffee", category: "restaurant" },
        { position: { lat: 23.783170360345473, lng: 90.41626350496686 }, title: "Bosphorus", category: "restaurant" },
        { position: { lat: 23.782165525333102, lng: 90.41649588132934 }, title: "Taqueria Lola", category: "restaurant" },
        { position: { lat: 23.781988804818507, lng: 90.41632019663723 }, title: "NORTH END coffee roasters LK Tower 2 (Gender Neutral Toilets)", category: "restaurant" },
        { position: { lat: 23.781170454777378, lng: 90.41642344872291 }, title: "Tehari Ghor (Needs Confirmation)", category: "restaurant" },
        { position: { lat: 23.78113609221191, lng: 90.41644960026115 }, title: "Bismillah Hanif Biryani and Restaurant (Needs Confirmation)", category: "restaurant" },
        { position: { lat: 23.780961824778174, lng: 90.41621691862615 }, title: "Break Time (Needs Confirmation)", category: "restaurant" },
        { position: { lat: 23.780666568193013, lng: 90.41576615793973 }, title: "Nawab Chatga", category: "restaurant" },
        { position: { lat: 23.780445664974927, lng: 90.41579432113474 }, title: "Mollika Snacks", category: "restaurant" },
        { position: { lat: 23.780582657159982, lng: 90.41598702147475 }, title: "Gulshan Darbar Restaurant (Needs Confirmation)", category: "restaurant" },
        { position: { lat: 23.78095374319618, lng: 90.41553669646626 }, title: "CocoJoy, Banani (Needs Confirmation)", category: "restaurant" },
        { position: { lat: 23.781443694439982, lng: 90.41577650065369 }, title: "C House Cafe (Needs Confirmation)", category: "restaurant" },
        { position: { lat: 23.781462102914535, lng: 90.41590591724031 }, title: "Khalifa’s Restaurant", category: "restaurant" },
        { position: { lat: 23.78191801864455, lng: 90.41605142707998 }, title: "A&W Restaurants Bangladesh", category: "restaurant" },
        { position: { lat: 23.78193704066546, lng: 90.41601588781008 }, title: "Khao San", category: "restaurant" },
        { position: { lat: 23.782024787371103, lng: 90.41605880315487 }, title: "Smith’s Caffe Regalo", category: "restaurant" },
    

        // Category: Shopping Malls
        { position: { lat: 23.772896076537897, lng: 90.41620338526414 }, title: "Police Plaza Concord Restaurant", category: "shoppingMall" },
        { position: { lat: 23.776930591065636, lng: 90.41601512104735 }, title: "Unimart Gulshan 1", category: "shoppingMall" },
        { position: { lat: 23.780604439786103, lng: 90.41628072989106 }, title: "Shopping complex Mosque", category: "shoppingMall" },
        
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
