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
            url: "masjid-al-nabawi.png", // Icon for masjids
            scaledSize: new google.maps.Size(30, 30),
        },
        publicWashroom: {
            url: "restroom.png", // Icon for public washrooms
            scaledSize: new google.maps.Size(30, 30),
        },
        hospital: {
            url: "medicine.png", // Icon for hotels
            scaledSize: new google.maps.Size(25, 25),
        },
        hotel: {
            url: "alhambra_6367957.png", // Icon for hotels
            scaledSize: new google.maps.Size(20, 20),
        },
        corporate: {
            url: "monitoring.png", // Icon for hotels
            scaledSize: new google.maps.Size(25, 25),
        },

        
        
    };

    // Array of Locations with Categories
    const locations = [
        // Category: Restaurants
        { position: { lat: 23.783058305314867, lng: 90.41582137856555 }, title: "Gulshan", category: "restaurant" },
        { position: { lat: 23.777681595496105, lng: 90.41677109817356 }, title: "North End Coffee Roasters", category: "restaurant" },
        { position: { lat: 23.776998299738526, lng: 90.41675407523476 }, title: "Tabaq Coffee", category: "restaurant" },
        { position: { lat: 23.782024787371103, lng: 90.41605880315487 }, title: "Smith’s Caffe Regalo", category: "restaurant" },
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
        // Gulshan - 2
        { "position": { "lat": 23.79358651381416, "lng": 90.41809351128923 }, "title": "Soi 71", "category": "restaurant" },
        { "position": { "lat": 23.789879212077633, "lng": 90.41665324289878 }, "title": "Manzo Restaurant Dhaka", "category": "restaurant" },
        { "position": { "lat": 23.787556991315526, "lng": 90.41854675004083 }, "title": "The New Gulshan Plaza Restaurant(near g1)", "category": "restaurant" },
        { "position": { "lat": 23.79519981563981, "lng": 90.41335095683324 }, "title": "Sultan’s Dine Gulshan Branch", "category": "restaurant" },
        { "position": { "lat": 23.804447145311553, "lng": 90.41299715606941 }, "title": "Gloria Jeans Coffe’s", "category": "restaurant" },
        { "position": { "lat": 23.80395848586066, "lng": 90.41341264467361 }, "title": "Sparrows", "category": "restaurant" },
        { "position": { "lat": 23.80314567030348, "lng": 90.40909908358925 }, "title": "Hotel Aristocrat in Restaurant", "category": "restaurant" },
        { "position": { "lat": 23.80396554122153, "lng": 90.40933949092879 }, "title": "The Flourist", "category": "restaurant" },
        { "position": { "lat": 23.804078120173596, "lng": 90.40872003879157 }, "title": "Property ARK", "category": "restaurant" },
        { "position": { "lat": 23.804691014223348, "lng": 90.4070217270649 }, "title": "Han She Ltd. (near g2 border)", "category": "restaurant" },
        { "position": { "lat": 23.80359683009919, "lng": 90.40743261992255 }, "title": "Trading Business Need Confirmation", "category": "restaurant" },
        { "position": { "lat": 23.800744215935627, "lng": 90.4118512596256 }, "title": "Butlers Chocolate Café", "category": "restaurant" },
        { "position": { "lat": 23.80043723582455, "lng": 90.41160304239406 }, "title": "KHANA KHAZANA by Master Chef Sanjeev Kapoor", "category": "restaurant" },
        { "position": { "lat": 23.795421132052628, "lng": 90.41327386824554 }, "title": "Sultan's Dine Gulshan Branch", "category": "restaurant" },
        { "position": { "lat": 23.797401696367803, "lng": 90.41048508553708 }, "title": "Goong The Castle", "category": "restaurant" },
        { "position": { "lat": 23.79699685786267, "lng": 90.41053410109174 }, "title": "Umai", "category": "restaurant" },
        { "position": { "lat": 23.796406961188072, "lng": 90.41035538374211 }, "title": "VIP Shaad Fuska & Chatpoti", "category": "restaurant" },
        { "position": { "lat": 23.795875861282273, "lng": 90.41643086931502 }, "title": "Stallo Fried Chicken", "category": "restaurant" },
        { "position": { "lat": 23.796127044676943, "lng": 90.41742234614796 }, "title": "Bistro-E", "category": "restaurant" },
        { "position": { "lat": 23.795875362509424, "lng": 90.41705754304672 }, "title": "KSA ALBAIK INTERNATIONAL - Gulshan 2, Dhaka", "category": "restaurant" },
        { "position": { "lat": 23.795752923987703, "lng": 90.41495302928911 }, "title": "Chef's Table - Gulshan 2", "category": "restaurant" },
        { "position": { "lat": 23.79572160413576, "lng": 90.41508460778037 }, "title": "C House Milano, Bangladesh", "category": "restaurant" },
        { "position": { "lat": 23.79576752841341, "lng": 90.41487179261452 }, "title": "Domino's Pizza Chef’s Table Gulshan-2", "category": "restaurant" },
        { "position": { "lat": 23.79592214247865, "lng": 90.4149831042841 }, "title": "Greens & Seeds", "category": "restaurant" },
        { "position": { "lat": 23.795953766473716, "lng": 90.41492824071612 }, "title": "Comptoirs Richard", "category": "restaurant" },
        { "position": { "lat": 23.79598269476011, "lng": 90.41495600976288 }, "title": "Crisp!", "category": "restaurant" },
        { "position": { "lat": 23.79596445389074, "lng": 90.41506047250262 }, "title": "Tabaq Coffee", "category": "restaurant" },
        { "position": { "lat": 23.796077547241815, "lng": 90.41484038306596 }, "title": "Tarka Express", "category": "restaurant" },
        { "position": { "lat": 23.79566849205385, "lng": 90.41495001712062 }, "title": "Mitsuo", "category": "restaurant" },
        { "position": { "lat": 23.795585379279498, "lng": 90.41471568302651 }, "title": "PastaMania Bangladesh", "category": "restaurant" },
        { "position": { "lat": 23.795518206965774, "lng": 90.41411115887263 }, "title": "CP", "category": "restaurant" },
        { "position": { "lat": 23.7937401963561, "lng": 90.41431533164597 }, "title": "Kingfisher Restaurant & Bar", "category": "restaurant" },
        { "position": { "lat": 23.793559087698043, "lng": 90.41431250215514 }, "title": "Kacchi Bhai - Gulshan", "category": "restaurant" },
        { "position": { "lat": 23.793393565295354, "lng": 90.41464775695536 }, "title": "Seasonal Tastes", "category": "restaurant" },
        { "position": { "lat": 23.79276480207014, "lng": 90.4142507072119 }, "title": "El Toro Mexican Restaurant", "category": "restaurant" },
        { "position": { "lat": 23.79336333318502, "lng": 90.41053814019767 }, "title": "PEYALA", "category": "restaurant" },
        { "position": { "lat": 23.78874639434494, "lng": 90.416087584588 }, "title": "Raw Canvas Restaurant & Bar", "category": "restaurant" },
        { "position": { "lat": 23.789479586066417, "lng": 90.41483730264683 }, "title": "Arsalan's Kitchen", "category": "restaurant" },
        { "position": { "lat": 23.788211614040286, "lng": 90.41444409996832 }, "title": "China Town BBQ", "category": "restaurant" },
        { "position": { "lat": 23.788248933786125, "lng": 90.41837903976673 }, "title": "The Coffee Bean & Tea Leaf", "category": "restaurant" },
        { "position": { "lat": 23.793779349771366, "lng": 90.4184365612626 }, "title": "Ajo Idea Space", "category": "restaurant" },
        { "position": { "lat": 23.79313484810021, "lng": 90.41920093339624 }, "title": "Uppercrust Boulangerie & Patisserie", "category": "restaurant" },
        { "position": { "lat": 23.793780564895957, "lng": 90.41966424763396 }, "title": "German Club", "category": "restaurant" },
        { "position": { "lat": 23.788120096847642, "lng": 90.41842296673458 }, "title": "The Coffee Bean & Tea Leaf", "category": "restaurant" },
        { "position": { "lat": 23.78801873282529, "lng": 90.41686117249255 }, "title": "Panda Dumplings-PD", "category": "restaurant" },
        { "position": { "lat": 23.788102009916166, "lng": 90.41701231654723 }, "title": "Pizzawala Gulshan", "category": "restaurant" },
        { "position": { "lat": 23.788357982803817, "lng": 90.41908730234746 }, "title": "Da One Cafe", "category": "restaurant" },
        { "position": { "lat": 23.788575427901748, "lng": 90.42061734499883 }, "title": "Izumi Japanese Kitchen", "category": "restaurant" },
        { "position": { "lat": 23.78881757457963, "lng": 90.42050134773854 }, "title": "Shaw's Steakhouse", "category": "restaurant" },
        { "position": { "lat": 23.789735404413182, "lng": 90.4193293772235 }, "title": "TAKUMI Japanese Restaurant", "category": "restaurant" },
        { "position": { "lat": 23.791092874242313, "lng": 90.4214963498518 }, "title": "Le Bistro", "category": "restaurant" },
        { "position": { "lat": 23.788364564708733, "lng": 90.41910341834856 }, "title": "Da One Cafe", "category": "restaurant" },
        { "position": { "lat": 23.793750335595977, "lng": 90.4184511325198 }, "title": "Ajo Idea Space", "category": "restaurant" },
        { "position": { "lat": 23.793327806075805, "lng": 90.41822790131559 }, "title": "China Garden Restaurant", "category": "restaurant" },
        { "position": { "lat": 23.79472088968816, "lng": 90.41934510000142 }, "title": "Sky Pool Restaurant", "category": "restaurant" },
        //GULSHAN 2- HOTELS AND CLUBS
        { position: { lat: 23.796481728716653, lng: 90.41516104696979 }, title: "Hotel Bengal Blueberry", category: "hotel" },
        { position: { lat: 23.805163719806806, lng: 90.41361942863907 }, title: "The Royal Paradise", category: "hotel" },
        { position: { lat: 23.803950510236024, lng: 90.41467361818528 }, title: "The Capital Recreation Club", category: "hotel" },
        { position: { lat: 23.803872812373527, lng: 90.41150385518857 }, title: "Gulshan North Club", category: "hotel" },
        { position: { lat: 23.80247908722538, lng: 90.41000891144166 }, title: "American Club, Dhaka", category: "hotel" },
        { position: { lat: 23.80390665490867, lng: 90.41175005748048 }, title: "Nav Court", category: "hotel" },
        { position: { lat: 23.803059559662337, lng: 90.408862293761 }, title: "Hotel Aristocrat Inn Ltd", category: "hotel" },
        { position: { lat: 23.803266858018613, lng: 90.40889217493714 }, title: "Hotel Lake Gulshan", category: "hotel" },
        { position: { lat: 23.803328766092154, lng: 90.40858317694604 }, title: "Hotel Park View Ltd", category: "hotel" },
        { position: { lat: 23.802059046877794, lng: 90.40854270727851 }, title: "Hotel Lake Castle", category: "hotel" },
        { position: { lat: 23.797061465162944, lng: 90.41149553155151 }, title: "THE WAY Dhaka", category: "hotel" },
        { position: { lat: 23.796857452789745, lng: 90.41053928941625 }, title: "Quality Inn", category: "hotel" },
        { position: { lat: 23.79690679161057, lng: 90.41572273958182 }, title: "The Midori by Lakeshore", category: "hotel" },
        { position: { lat: 23.796357026033203, lng: 90.41518323122875 }, title: "Hotel Bengal Blueberry", category: "hotel" },
        { position: { lat: 23.79575109874911, lng: 90.41520445886108 }, title: "Maya Eco Apartment Service", category: "hotel" },
        { position: { lat: 23.795844389314613, lng: 90.41492598525626 }, title: "Utshob Gulshan", category: "hotel" },
        { position: { lat: 23.79462672886902, lng: 90.41394989635126 }, title: "Crowne Plaza Dhaka Gulshan, an IHG Hotel", category: "hotel" },
        { position: { lat: 23.793383152566605, lng: 90.4147163585114 }, title: "The Westin Dhaka", category: "hotel" },
        { position: { lat: 23.792988024835186, lng: 90.4144758264515 }, title: "Unique South Park", category: "hotel" },
        { position: { lat: 23.79447539445092, lng: 90.41074784933637 }, title: "Gulshan Club Limited", category: "hotel" },
        { position: { lat: 23.78919746973867, lng: 90.41457631611013 }, title: "Green Goose Guest House", category: "hotel" },
        { position: { lat: 23.791514301268144, lng: 90.41707772372274 }, title: "Gulshan Youth Club", category: "hotel" },
        { position: { lat: 23.792690829307965, lng: 90.41647232587152 }, title: "Nordic Club", category: "hotel" },
        { position: { lat: 23.793173080343877, lng: 90.416453300084 }, title: "Gawsia Kajoli Lodging", category: "hotel" },
        { position: { lat: 23.793071658884166, lng: 90.41628105617983 }, title: "루시하우스 Guest House", category: "hotel" },
        { position: { lat: 23.788842117819563, lng: 90.42047519620132 }, title: "Rosewood Residence", category: "hotel" },
        { position: { lat: 23.788266036690022, lng: 90.42093821114145 }, title: "Coventina Lake Suites", category: "hotel" },
        { position: { lat: 23.78959819122847, lng: 90.42056613366994 }, title: "Aara Hospitality Services Limited", category: "hotel" },
        { position: { lat: 23.79228924963543, lng: 90.41982458012549 }, title: "Green Leaf Apartments Lodging", category: "hotel" },
        //MOHAKHALI RESTAURANTS
        { position: { lat: 23.779822633153547, lng: 90.40712018301991 }, title: "Chillox Mohakhali", category: "restaurant" },
        { position: { lat: 23.78066725697602, lng: 90.4033383047507 }, title: "Malancha Restaurant", category: "restaurant" },
        { position: { lat: 23.779954689531984, lng: 90.40652031941109 }, title: "FRYPAN", category: "restaurant" },
        { position: { lat: 23.779822633153547, lng: 90.40712018301991 }, title: "Chillox Mohakhali", category: "restaurant" },
        { position: { lat: 23.78066725697602, lng: 90.4033383047507 }, title: "Malancha Restaurant", category: "restaurant" },
        { position: { lat: 23.779954689531984, lng: 90.40652031941109 }, title: "FRYPAN", category: "restaurant" },
        //corporate area- mohakhali
        { position: { lat: 23.780570786211516, lng: 90.40301216503661 }, title: "Janata Bank", category: "corporate" },
        //masjids -mohakhali
        { position: { lat: 23.77382471431158, lng: 90.40159499625838 }, title: "Mohakhali Bus Terminal Masjid", category: "masjid" },
        { position: { lat: 23.775609622822262, lng: 90.40176435638595 }, title: "Mohakhali Dakkhin Para Jame Masjid", category: "masjid" },
        { position: { lat: 23.775783566196456, lng: 90.40459913886635 }, title: "Chowdhurypara Jame Masjid", category: "masjid" },
        { position: { lat: 23.77534221491396, lng: 90.40534787507004 }, title: "সংক্রামক ব্যাধি হাসপাতাল জামে মসজিদ", category: "masjid" },
        { position: { lat: 23.78072742424383, lng: 90.40906034668085 }, title: "Masjid-e-Gausul Azam", category: "masjid" },
        { position: { lat: 23.775048564472183, lng: 90.41147675895856 }, title: "Niketan Central Masjid", category: "masjid" },

        //hostpital -mohakhali 
        { position: { lat: 23.776318549055826, lng: 90.41156139142262 }, title: "National Gastroliver Institute & Hospital", category: "hospital" },
        { position: { lat: 23.776157448100072, lng: 90.40583365994542 }, title: "Infectious Diseases Hospital, Mohakhali", category: "hospital" },
        { position: { lat: 23.776244945623667, lng: 90.3998384374194 }, title: "International Centre for Diarrhoeal Disease Research, Bangladesh (ICDDR,B)", category: "hospital" },
        { position: { lat: 23.77667814934301, lng: 90.39911372879273 }, title: "মহাখালী কলেরা হসপিটাল", category: "hospital" },
        { position: { lat: 23.77723543190039, lng: 90.39941536413677 }, title: "Sahic - সাহিক হসপিটাল (নাক, কান, গলা - ENT)", category: "hospital" },
        
        

                



    
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
        
        { position: { lat: 23.781948564579743, lng: 90.41638578405669 }, title: "Gulshan Medicare", category: "hospital" },
        
    ];

    // Create counters for categories
    let categoryCounters = {
        restaurant: 0,
        shoppingMall: 0,
        hotel: 0,
        freespace: 0,
        masjid: 0,
        publicWashroom: 0,
        hospital :0,
        corporate:0,
        
    };


    // Update the category counters on the page
    function updateCategoryCounters() {
        document.getElementById("restaurantCount").innerText = `Restaurants: ${categoryCounters.restaurant}`;
        document.getElementById("hospitalCount").innerText = `Hospitals: ${categoryCounters.hospital}`;
        document.getElementById("freespaceCount").innerText = `Free Spaces: ${categoryCounters.freespace}`;
        document.getElementById("masjidCount").innerText = `Masjids: ${categoryCounters.masjid}`;
        document.getElementById("shoppingMallCount").innerText = `Shopping Malls: ${categoryCounters.shoppingMall}`;
        document.getElementById("publicWashroomCount").innerText = `Public Washrooms: ${categoryCounters.publicWashroom}`;
        document.getElementById("hotelCount").innerText = `Hotels and Clubs: ${categoryCounters.hotel}`;
        document.getElementById("corporateCount").innerText = `Corporate Area: ${categoryCounters.corporate}`;
    }

    // Create markers and attach InfoWindows
    locations.forEach(location => {
        const marker = new google.maps.Marker({
            position: location.position,
            map: map,
            title: location.title,
            icon: icons[location.category], // Assign icon based on category
        });

        // Increment the counter for the relevant category
        if (categoryCounters[location.category] !== undefined) {
            categoryCounters[location.category]++;
        }

        // Update the counters whenever a new marker is added
        updateCategoryCounters();

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
