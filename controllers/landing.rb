require 'sinatra'
require 'useragent'
require 'pony'
require 'conekta'
require 'i18n'
require './controllers/assets_helper'


get "/" do 
  erb :"index", :layout => :"layouts/app"
end