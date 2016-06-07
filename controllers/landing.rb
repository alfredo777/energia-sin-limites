require 'sinatra'
require 'useragent'
require 'pony'
require 'conekta'
require 'i18n'
require 'sinatra/assetpack'
require './controllers/assets_helper'


  register Sinatra::AssetPack

  assets {
    serve '/assets/js',     from: 'public/assets/js'        # Default
    serve '/assets/css',    from: 'public/assets/css'       # Default
    serve '/assets/images', from: 'public/assets/images'    # Default
    serve '/assets/images', from: 'public/assets/fonts' 

    # The second parameter defines where the compressed version will be served.
    # (Note: that parameter is optional, AssetPack will figure it out.)
    js :app, '/js/app.js', [
      '/js/vendor/**/*.js',
      '/js/lib/**/*.js'
    ]

    css :application, '/css/application.css', [
      '/css/screen.css'
    ]

    js_compression  :jsmin    # :jsmin | :yui | :closure | :uglify
    css_compression :simple   # :simple | :sass | :yui | :sqwish
  }


get "/" do 
  erb :"index", :layout => :"layouts/app"
end

get "/contacto" do 
  erb :"contacto", :layout => :"layouts/app"
end