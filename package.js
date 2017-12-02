Package.describe({
  summary: "the last carousel you'll ever need",
  name:    "markovchainz:slick",
  version: "1.8.1",
  git:     "https://github.com/markovchainz/meteor-slick"
});

Package.onUse(function(api) {
  
  api.versionsFrom("METEOR@0.9.3.1");
  
  api.use('jquery', 'client');
  
  api.addFiles([
    "vendor/slick/ajax-loader.gif",
    "vendor/slick/fonts/slick.eot",
    "vendor/slick/fonts/slick.svg",
    "vendor/slick/fonts/slick.ttf",
    "vendor/slick/fonts/slick.woff"
  ], "client", { isAsset: true });
  
  api.addFiles([
    "vendor/slick/slick.css",
    "vendor/slick/slick.js"
  ], "client");
  
});

