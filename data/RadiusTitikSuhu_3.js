var suhu_dht22_titik1 = "";
var suhu_dht22_titik2 = "";
var suhu_dht22_titik3 = "";

var kelembaban_dht22_titik1 = "...";
var kelembaban_dht22_titik2 = "...";
var kelembaban_dht22_titik3 = "...";

function fetchData() {
  var apiUrl =
    "https://api.thingspeak.com/channels/2787496/feeds/last.json?timezone=Asia%2FJakarta&api_key=ZZS5RP2LDSXXWPLN";

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log("Response JSON:", data);

      suhu_dht22_titik1 = parseFloat(data.field4).toFixed(2);
      kelembaban_dht22_titik1 = parseFloat(data.field3).toFixed(2);

    })
    .catch((error) => console.error("Error fetching data:", error));

    var apiUrl2 =
    "https://api.thingspeak.com/channels/2789709/feeds/last.json?timezone=Asia%2FJakarta&api_key=8141S2J55Y1XNT5G";

  fetch(apiUrl2)
    .then((response) => response.json())
    .then((data) => {
      console.log("Response JSON:", data);

      suhu_dht22_titik2 = parseFloat(data.field4).toFixed(2);
      kelembaban_dht22_titik2 = parseFloat(data.field3).toFixed(2);

    })
    .catch((error) => console.error("Error fetching data:", error));

  var apiUrl3 =
    "https://api.thingspeak.com/channels/2790380/feeds/last.json?timezone=Asia%2FJakarta&api_key=MV0HEWPA894CJ5P3";

  fetch(apiUrl3)
    .then((response2) => response2.json())
    .then((data2) => {
      console.log("Response JSON:", data2);

      suhu_dht22_titik3 = parseFloat(data2.field4).toFixed(2);
      kelembaban_dht22_titik3 = parseFloat(data2.field3).toFixed(2);
    })
    .catch((error) => console.error("Error fetching data:", error));
}

setInterval(fetchData, 5000);

var json_RadiusTitikSuhu_3 = {
  type: "FeatureCollection",
  name: "RadiusTitikSuhu_3",
  crs: { type: "name", properties: { name: "urn:ogc:def:crs:OGC:1.3:CRS84" } },
  features: [
    {
      type: "Feature",
      properties: {
        NAMOBJ: "Titik 1",
        REMARK: "Permukiman dan Tempat Kegiatan",
        HubDist: 0.07074,
        path: "C:\\Users\\sield\\Documents\\1. MyFile\\1. Kampus\\2. Maroon\\Asprak S5\\SIG\\Bahan Praktik\\P12\\Result\\Titik Pemantauan 1.shp",
        Suhu: suhu_dht22_titik1,
        Kelembaban: 10,
        xcoord: 106.77247,
        ycoord: -6.65425,
        Foto: "Foto/1.jpeg",
      },
      geometry: {
        type: "MultiPolygon",
        coordinates: [
          [
            [
              [106.790558683304596, -6.654185072512108],
              [106.789693750543861, -6.659776325583104],
              [106.787143087254748, -6.664826683356292],
              [106.783156323032841, -6.66884176784676],
              [106.778123694173587, -6.671428526107421],
              [106.772537850786819, -6.672333715922747],
              [106.766945624610685, -6.671468707321484],
              [106.76189448195494, -6.66891816737327],
              [106.757878910791064, -6.664931774648398],
              [106.755291998881134, -6.659899773546738],
              [106.754386949682342, -6.654314763521945],
              [106.755252305331013, -6.64872346775321],
              [106.757803298808653, -6.643673207158932],
              [106.761790174398868, -6.639658322605],
              [106.766822653267269, -6.63707179066954],
              [106.772408142595424, -6.636166767119545],
              [106.777999945883565, -6.63703181841854],
              [106.783050758350782, -6.639582261187814],
              [106.787066218146435, -6.643568453976139],
              [106.789653280047261, -6.648600228752616],
              [106.790558683304596, -6.654185072512108],
            ],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: {
        NAMOBJ: "Titik 2",
        REMARK: "Permukiman dan Tempat Kegiatan",
        HubDist: 3.05695,
        path: "C:\\Users\\sield\\Documents\\1. MyFile\\1. Kampus\\2. Maroon\\Asprak S5\\SIG\\Bahan Praktik\\P12\\Result\\Titik Pemantauan 2.shp",
        Suhu: suhu_dht22_titik2,
        Kelembaban: 10,
        xcoord: 106.82422,
        ycoord: -6.56017,
        Foto: "Foto/2.jpeg",
      },
      geometry: {
        type: "MultiPolygon",
        coordinates: [
          [
            [
              [106.842301367309616, -6.560105135879731],
              [106.841436915428872, -6.565696295204517],
              [106.838887072572675, -6.570746661395312],
              [106.834901388160276, -6.574761856240686],
              [106.829869992338843, -6.57734881640128],
              [106.824285413659865, -6.578254279964139],
              [106.81869435912067, -6.57738958985835],
              [106.813644179678249, -6.574839381420201],
              [106.809629268884862, -6.570853300171946],
              [106.807042650310265, -6.565821559613962],
              [106.806137499558091, -6.560236733630234],
              [106.80700236964762, -6.554645527688177],
              [106.809552541754769, -6.549595254470116],
              [106.81353834069759, -6.54558025667507],
              [106.818569592582151, -6.542993522375876],
              [106.824153823835928, -6.542088227214102],
              [106.829744460166253, -6.542952963937156],
              [106.834794310357736, -6.545503079402544],
              [106.838809106620758, -6.549488963600457],
              [106.84139586913227, -6.554520478297062],
              [106.842301367309616, -6.560105135879731],
            ],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: {
        NAMOBJ: "Titik 3",
        REMARK: "Permukiman dan Tempat Kegiatan",
        HubDist: 3.46877,
        path: "C:\\Users\\sield\\Documents\\1. MyFile\\1. Kampus\\2. Maroon\\Asprak S5\\SIG\\Bahan Praktik\\P12\\Result\\Titik Pemantauan 3.shp",
        Suhu: suhu_dht22_titik3,
        Kelembaban: 10,
        xcoord: 106.75323,
        ycoord: -6.55848,
        Foto: "Foto/3.jpeg",
      },
      geometry: {
        type: "MultiPolygon",
        coordinates: [
          [
            [
              [106.771312287402068, -6.558413842046659],
              [106.770447007277667, -6.564005095397959],
              [106.767896353116868, -6.569055293657168],
              [106.763909954270389, -6.573070074684867],
              [106.758878011451728, -6.575656415649713],
              [106.753293107264426, -6.576561115617357],
              [106.74770198075845, -6.57569559285673],
              [106.742651989733986, -6.573144564803572],
              [106.738637508784194, -6.569157757576046],
              [106.736051518770125, -6.564125455737661],
              [106.735147133259517, -6.558540287746938],
              [106.736012830175042, -6.55294899195548],
              [106.738563809958677, -6.54789888924739],
              [106.74255031888282, -6.543884305264819],
              [106.74758211418802, -6.541298187574575],
              [106.753166669615879, -6.540393651827689],
              [106.758757379330675, -6.541259217028465],
              [106.763807044732303, -6.543810149530474],
              [106.767821415604487, -6.547796759712861],
              [106.770407553132046, -6.552828838276665],
              [106.771312287402068, -6.558413842046659],
            ],
          ],
        ],
      },
    },
  ],
};

function updateGeoJSON() {
  json_RadiusTitikSuhu_3.features[0].properties.Suhu = suhu_dht22_titik1;
  json_RadiusTitikSuhu_3.features[1].properties.Suhu = suhu_dht22_titik2;
  json_RadiusTitikSuhu_3.features[2].properties.Suhu = suhu_dht22_titik3;

  json_RadiusTitikSuhu_3.features[0].properties.Kelembaban = kelembaban_dht22_titik1;
  json_RadiusTitikSuhu_3.features[1].properties.Kelembaban = kelembaban_dht22_titik2;
  json_RadiusTitikSuhu_3.features[2].properties.Kelembaban = kelembaban_dht22_titik3;
}

function logJson() {
  updateGeoJSON();
  console.log("===============d=================");
  console.log(json_RadiusTitikSuhu_3.features[0].properties.Suhu);
  console.log("===========================a=====");
}

setInterval(logJson, 5000);
