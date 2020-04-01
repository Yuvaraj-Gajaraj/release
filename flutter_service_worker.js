'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/assets/AssetManifest.json": "c0d0324ae58e2a6957a84944df2a3371",
"/assets/assets/fonts/Heebo-Bold.ttf": "ede6fdf4ecf8c32c21701823004343f4",
"/assets/assets/fonts/Heebo-Medium.ttf": "6c57263dbdee325394e471a12499e64c",
"/assets/FontManifest.json": "b9ecd7c25714b094b841aa79390bf83b",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/images/airplane.png": "4de8ca33d5532527863e21b892ef4f9b",
"/assets/images/athletics.png": "606a492a01697c86ff61193af97f1c86",
"/assets/images/axis_feature.png": "7d383ec825835cdc2442437948ec0280",
"/assets/images/axis_types.png": "42260cbdd03a50f330aa2aab041c5cda",
"/assets/images/axis_types.svg": "851f3168c0e3bfbb4f2a8ff39b6bae83",
"/assets/images/back.png": "67b2e68c59b6c01c22939944ba697be3",
"/assets/images/ball.png": "d29cb732af2a432c69d58e415ae2c5b4",
"/assets/images/barcode.png": "770b27de2695fdf9f56f6ca88835a479",
"/assets/images/bike.png": "815d5fe99c5f263c698323586d48892d",
"/assets/images/bike_legend.png": "b323d01ce28cd347d5fb8bfbcad61ec8",
"/assets/images/book.png": "f4ca58847383a3378b55ef121220ec4b",
"/assets/images/calendar.png": "e7da9c17d1ee344423042099dfc8c827",
"/assets/images/car.png": "12c754611a32632b77c692412e33e8c3",
"/assets/images/cartesian.svg": "976dccbc17c278839a40b42059687299",
"/assets/images/cartesian_types.png": "e5d22ace312b92e03996b5caa73f7164",
"/assets/images/car_legend.png": "c053e460ca6466b76bf2810ae081203e",
"/assets/images/circle_gauge.png": "56444ed86c91672c6c63822d24f95b33",
"/assets/images/circle_gauge.svg": "a4768fab5634a2f188b1976d2dc537f7",
"/assets/images/circle_series.png": "bbff3b81fdfb74b410f0bc686d76268a",
"/assets/images/circle_series.svg": "12a8fe27b0688e3464878270ec4ae69d",
"/assets/images/close.png": "c7e2a43786925bb1ba25d66f575e4e38",
"/assets/images/code.png": "1b9c82930460d4a666f2db9feb49d6af",
"/assets/images/code.svg": "dbe429c91c6bb26aca877efa89cc27a1",
"/assets/images/cycle_legend.png": "ce3bc98993ed3f1fa1cb9cf9e8f5549a",
"/assets/images/dark_theme_gauge.png": "b02272a02e0dab220efd75e818ca06ff",
"/assets/images/dashline.png": "07855a68e7fb8ec5f07c0b025b75d22b",
"/assets/images/Date_range_picker.png": "3f09aecac805fd6f66aec6b6d9e85b00",
"/assets/images/documentation.png": "66dd8986f40c729bae5c79c3377144dd",
"/assets/images/external.png": "d49f2912e83502c98e20b5dd9da7e7bc",
"/assets/images/fullscreen.png": "e3c4c422d6b10eba388749fe454cb11f",
"/assets/images/funnel.png": "5d3d0b84d0446a2f71bf3c75ba41aee4",
"/assets/images/funnel.svg": "37ddb0f18383c3d8717d02915e477f48",
"/assets/images/golfball.png": "718f272789a1d8179d1474f0e0789c5a",
"/assets/images/golfball2.png": "dcc3e355c239fadf69d861fac9fad0ec",
"/assets/images/golfball3.png": "6bdef200521926e4cc86e6fa80d6d588",
"/assets/images/home.png": "582e4349238d6518d43f4b29f469bde6",
"/assets/images/image_nav_banner.png": "03f48db27424d51b033c2d59a092fff0",
"/assets/images/image_nav_banner_darktheme.png": "ce6aa4634f35ce5db96dead06c958b6b",
"/assets/images/img_JS.png": "68beac803bd5a87ee1b502afc3809a79",
"/assets/images/img_xamarin.png": "4ca17d98df6db44c339acc6681432876",
"/assets/images/img_xamarin_ui.png": "d7753f3efb7863182d9576bffd916201",
"/assets/images/info.png": "d153c08a4b1014edc5d81dd284b32942",
"/assets/images/information.svg": "8d5a8e187ef6fcf98d4050006e92214b",
"/assets/images/legend.png": "c59c099c473fc27089831cfbd68f34a3",
"/assets/images/legend.svg": "c13e245c5f9d1676c54b466b01380b2a",
"/assets/images/live_update.png": "9512f3ca2a55996fe87746663dd535fb",
"/assets/images/live_update.svg": "5fdb2cfdf87b833d3b91dfe1b3b7978e",
"/assets/images/man1.png": "14335fe7cab02cda6863f9cd395d5310",
"/assets/images/man2.png": "d4686f19631e1512c7a6c86a0f28d5f8",
"/assets/images/man3.png": "dfc639c8d4e0cb8186606e9424f25f65",
"/assets/images/menu.png": "95e3c27f6bb0e06c2debaeb0616ee44e",
"/assets/images/open_arrow.png": "558d93ad18859d8ef01dc956cc67e4a4",
"/assets/images/other_features.png": "488324f6b844690f82f84aeb6ea49605",
"/assets/images/other_features.svg": "76162f548df974fd336780dc608f4244",
"/assets/images/pdf/certificate.jpg": "a615006599cc6e253111f9d8cb250eb5",
"/assets/images/pdf/Pdf_Succinctly_img_1.jpg": "c1fcd3c589ea855adc1fc8c4ae06706b",
"/assets/images/pdf/Pdf_Succinctly_img_2.jpg": "988cc8d0d6b41729dabf504b9ded2deb",
"/assets/images/pdf/Pdf_Succinctly_img_3.jpg": "0adce59365166e26012c6e9c704c41a5",
"/assets/images/pdf/Pdf_Succinctly_img_4.jpg": "2dc8691a2c1b2b9ec3e16e04903e131c",
"/assets/images/pdf/Pdf_Succinctly_img_5.jpg": "edcd911d0a250290a244a2f810e72159",
"/assets/images/pdf.png": "26e7f142089d6e1598fa2ef3feb2bae9",
"/assets/images/person.png": "c7ed75c0fc451352ade741e05ad72bc8",
"/assets/images/personal_loan.png": "510d52fff7f5d8695805251e9fa2cca6",
"/assets/images/product.png": "ff5e97be025410ea087ea42ba51ccacd",
"/assets/images/pyramid.png": "d2a194468a6303550e97b65cc2feaa26",
"/assets/images/pyramid.svg": "68c2be39c6afa017bb2ca9f21772dacb",
"/assets/images/range_selector.png": "8808b2b933871fa5c39de6e62613f496",
"/assets/images/range_slider.png": "883635b167755502bfba7893b12c8bdd",
"/assets/images/settings.png": "2e19b744463bba165f82f292ebd6d6f7",
"/assets/images/settings.svg": "ee6d1f0ef77382ee8bea26a4ff4d684c",
"/assets/images/shotput.png": "60ced46648353b7dad9377da6b525288",
"/assets/images/sun.png": "526fb20eca521243a35c378de356c629",
"/assets/images/syncfusion.png": "9636837ed6d3558c53ca89d2f8370778",
"/assets/images/syncfusion_dark.png": "f675093578cced80eab33cad19cbf590",
"/assets/images/truck.png": "35ca7393daf4abf9591ddf2267e61f5e",
"/assets/images/truck_legend.png": "1394a8aad840267c7307ffe28b16871f",
"/assets/images/user_interaction.png": "64bb5e099afb109be06d32932cc12e44",
"/assets/images/user_interaction.svg": "fa2da0b25caa55621745cd2fac57addc",
"/assets/images/whatsnew.png": "5f12c9d22f2c679061ef5d7b4e393b68",
"/assets/lib/sample_details.json": "5040183d03381255d2ee3a4ffe7f73eb",
"/assets/LICENSE": "057b0d9553a21a06a86d25a35f58fb70",
"/assets/packages/timezone/data/2019c.tzf": "c30345419f70b2dfbabac378d8334460",
"/favicon.png": "0ff0e0cdd689c586ae5c1aa7ac7c9dcb",
"/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/index.html": "52a87d4bd281ddbe2e459aea298cc740",
"/main.dart.js": "5e3929291be237b5085e4e10aad3ca0d",
"/manifest.json": "e0ce32893358312172b53c3721868c70"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
