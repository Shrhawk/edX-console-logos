/**
* Created by Shrhawk
* https://github.com/Shrhawk
* Thanks for console.image
* https://github.com/adriancooney/console.image
*/
(function(console) {
  "use strict";
  var edx_logo_red = 'color: rgba(187,38,105, 0.9);font-size: 53px;font-weight: bolder;font-family: "Microsoft sans serif", "sans-serif", "Arial";line-height: 60%;';
  var edx_logo_grey = 'color: rgba(140,143,146, 0.7);font-size: 65px;font-weight: bold;margin-left: -13px;font-family: "Courier New", "Courier", monospace;line-height: 60%;';
  var edx_logo_blue = 'color: rgba(0,165,236, 0.8);font-size: 70px;font-weight: bold;margin-left: -10px;font-family: "Courier New", "Courier", monospace;line-height: 60%;' ;
  var edx_open_blue = 'color: rgba(0,165,236, 1);font-size: 41px;margin-right: -13px;font-family: "Microsoft sans serif", "sans-serif", "Arial";' ;
  var edx_powered_by_light_grey = 'color: rgb(214,215,216); font-size: 19px;font-weight: lighter;';
  var is_firefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
  var defaults = {
    type: 'auto',
    edx_logo_text: 'Want to contribute to edX-platform ? Visit at https://github.com/edx/edx-platform',
    edx_logo_url: 'https://d37djvu3ytnwxt.cloudfront.net/static/images/edx-theme/edx-header-logo.517a627deaad.png',
    open_edx_logo_text: 'POWERED BY OPEN edX',
    open_edx_logo_url: 'https://files.edx.org/openedx-logos/edx-openedx-logo-tag.png',
    log_text: false,
    open_edx_only: false
  };

  console.edx_logo = function(settings, text) {
    var settings = settings || defaults;
    var text = text || defaults.edx_logo_text;
    var log_text = settings.log_text == true ? true : defaults.log_text;
    switch (settings.type) {
      case 'auto':
      // Firefox does not support url tag
      if (is_firefox){
        //css version
        console.log('%ce%cd%cX', edx_logo_red, edx_logo_grey, edx_logo_blue);
      }else{
        //image version
        console.image(settings.url || defaults.edx_logo_url, settings.scale || 1, log_text, text);
        log_text = false;
      }
      break;
      case 'css':
      console.log('%ce%cd%cX', edx_logo_red, edx_logo_grey, edx_logo_blue);
      break;
      case 'image':
      if (is_firefox){
        console.log('Image not supported on Firefox yet.');
      }
      console.image(settings.url || defaults.edx_logo_url, settings.scale || 1, log_text, text);
      log_text = false;
      break;
      case 'smalltext':
      console.log('        _ __  __\n  _   _| |\\ \\/ /\n/ -_) _` | >  < \n\\___\\__,_|/_/\\_\\');
      break;
      case 'bigtext':
      console.log('          ___  __\n  ___  __| \\ \\/ /\n / _ \\/ _` |\\  / \n|  __/ (_| |/  \\ \n \\___|\\__,_/_/\\_\\');
      break;
      default:
      console.log('Invalid type argument Options are image, css, bigtext, smalltext');
      break;
    }
    log_text_console(log_text, text)
    return '';
  };

  console.open_edx_logo = function(settings, text) {
    var settings = settings || defaults;
    var text = text || defaults.open_edx_logo_text;
    var log_text = settings.log_text == true ? true : defaults.log_text;
    var open_edx_only = settings.open_edx_only == true ? true: defaults.open_edx_only;
    switch (settings.type || defaults.type) {
      case 'auto':
      if (is_firefox){
        //css version
        if(open_edx_only){
          console.log('%cOPEN %ce%cd%cX', edx_open_blue, edx_logo_red, edx_logo_grey, edx_logo_blue);
        }else{
          console.log('%cPOWERED BY \n%cOPEN %ce%cd%cX', edx_powered_by_light_grey, edx_open_blue, edx_logo_red, edx_logo_grey, edx_logo_blue);
        }
      }else{
        //image version
        console.image(settings.url || defaults.open_edx_logo_url, settings.scale || 0.7, log_text, text);
        log_text = false;
      }
      break;
      case 'css':
      if(open_edx_only){
        console.log('%cOPEN %ce%cd%cX', edx_open_blue, edx_logo_red, edx_logo_grey, edx_logo_blue);
      }else{
        console.log('%cPOWERED BY \n%cOPEN %ce%cd%cX', edx_powered_by_light_grey, edx_open_blue, edx_logo_red, edx_logo_grey, edx_logo_blue);
      }
      break;
      case 'image':
      if (is_firefox){
        console.log('Image not supported on Firefox yet.');
      }
      console.image(settings.url || defaults.open_edx_logo_url, settings.scale || 0.7, log_text, text);
      log_text = false;
      break;
      case 'smalltext':
      if(open_edx_only){
        console.log('  ___  ___ ___ _  _          ___  __\n / _ \\| _ \\ __| \\| |  ___ __| \\ \\/ /\n| (_) |  _/ _|| .` | / -_) _` |>  < \n \\___/|_| |___|_|\\_| \\___\\__,_/_/\\_\\');
      }else{
        console.log(' POWERED BY                        \n  ___  ___ ___ _  _          ___  __\n / _ \\| _ \\ __| \\| |  ___ __| \\ \\/ /\n| (_) |  _/ _|| .` | / -_) _` |>  < \n \\___/|_| |___|_|\\_| \\___\\__,_/_/\\_\\');
      }

      break;
      case 'bigtext':
      if(open_edx_only){
        console.log('  ___  ____  _____ _   _            ___  __\n / _ \\|  _ \\| ____| \\ | |   ___  __| \\ \\/ /\n| | | | |_) |  _| |  \\| |  / _ \\/ _` |\\  / \n| |_| |  __/| |___| |\\  | |  __/ (_| |/  \\ \n \\___/|_|   |_____|_| \\_|  \\___|\\__,_/_/\\_\\');
      }else{
        console.log(' POWERED BY                                \n  ___  ____  _____ _   _            ___  __\n / _ \\|  _ \\| ____| \\ | |   ___  __| \\ \\/ /\n| | | | |_) |  _| |  \\| |  / _ \\/ _` |\\  / \n| |_| |  __/| |___| |\\  | |  __/ (_| |/  \\ \n \\___/|_|   |_____|_| \\_|  \\___|\\__,_/_/\\_\\');
      }
      break;
      default:
      console.log('Invalid type argument Options are image, css, bigtext, smalltext');
      break;
    }
    log_text_console(log_text, text)
    return '';
  };
  /**
  * @param  {bool} log_text  Show output to console
  * @param  {string} text Text to show on console
  */
  function log_text_console(log_text, text) {
    if (log_text){
      console.log(text);
    }
  }
  /**
  * @param  {int} width  The height of the box
  * @param  {int} height The width of the box
  * @return {object}     {string, css
  */
  function getBox(width, height) {
    return {
      string: "+",
      style: "font-size: 1px; padding: " + Math.floor(height/2) + "px " + Math.floor(width/2) + "px; line-height: " + height + "px;"
    }
  }
  console.image = function(url, scale, log_text, text) {
    scale = scale || 1;
    var img = new Image();

    img.onload = function() {
      var dim = getBox(this.width * scale, this.height * scale);
      console.log("%c" + dim.string, dim.style + "background: url(" + url + "); background-size: " + (this.width * scale) + "px " + (this.height * scale) + "px; color: transparent;background-repeat: no-repeat;");
      log_text_console(log_text, text);
    };

    img.src = url;
  };
})(console);
