'use strict';

var app = app || {};

(function(module) {
  const indexController = {};

  indexController.index = () => {
    $('#about').hide();
    $('#home').show();
    $('#scholarships').hide();
    $('#programs').hide();
    $('#contact').hide();

    
  };
  module.indexController = indexController;
})(app);