/**
 * Created by Shrhawk
 * https://github.com/Shrhawk
 */
(function(console) {
    "use strict";
    var ffSupport, isFF, isIE, isOpera, isSafari, operaSupport, safariSupport, isChrome, chromeSupport;
    var edx_logo_red = 'color: rgba(187,38,105, 1);font-size: 52px;font-weight: bold;font-family: sans-serif, Arial;line-height: 60%;';
    var edx_logo_grey = 'color: rgba(111,113,116, 0.8);font-size: 63px;font-weight: bold;margin-left: -11px;font-family: "Courier New", Courier;line-height: 60%;';
    var edx_logo_blue = 'color: rgba(2, 149, 222, 0.7);font-size: 68px;font-weight: bold;margin-left: -10px;font-family: "Courier New", Courier;line-height: 60%;';
    var edx_open_blue = 'color: rgb(39,164,221);font-size:37px;margin-right:-10px;font-family: sans-serif, Arial;';
    var edx_powered_by_light_grey = 'color: rgb(150,150,150); font-size:16px;font-weight:lighter;font-family: sans-serif, Arial;';
    var edx_blue_registered = 'color: rgba(2, 149, 222, 0.7);font-size: 16px;font-weight:bold;font-family: "Courier New", Courier;line-height: 60%;';
    var defaults = {
        type: 'auto',
        edx_logo_text: 'Want to contribute to edX-platform ? Visit at https://github.com/edx/edx-platform',
        edx_logo_url: 'https://www.edx.org/sites/default/files/theme/edx-logo-header.png',
        open_edx_logo_text: 'POWERED BY OPEN edX',
        open_edx_logo_powered_url: 'https://files.edx.org/openedx-logos/edx-openedx-logo-tag.png',
        open_edx_logo_url: 'https://open.edx.org/sites/all/themes/edx_open/logo.png',
        log_text: false,
        open_edx_only: false
    };

    isSafari = function() {
        return /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
    };

    isOpera = function() {
        return /OPR/.test(navigator.userAgent) && /Opera/.test(navigator.vendor);
    };

    isFF = function() {
        return /Firefox/.test(navigator.userAgent);
    };

    isChrome = function() {
        return /Chrom(e|ium)/.test(navigator.userAgent);
    }

    isIE = function() {
        return /MSIE/.test(navigator.userAgent);
    };

    safariSupport = function() {
        var m;
        m = navigator.userAgent.match(/AppleWebKit\/(\d+)\.(\d+)(\.|\+|\s)/);
        if (!m) {
            return false;
        }
        return 537.38 <= parseInt(m[1], 10) + (parseInt(m[2], 10) / 100);
    };

    operaSupport = function() {
        var m;
        m = navigator.userAgent.match(/OPR\/(\d+)\./);
        if (!m) {
            return false;
        }
        return 15 <= parseInt(m[1], 10);
    };

    ffSupport = function() {
        return window.console.firebug || window.console.exception;
    };

    chromeSupport = function() {
        var m = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
        return 26 < (m ? parseInt(m[2], 10) : 0);
    }

    function style_supported() {
        var style_supported = false;
        if ((isFF() && ffSupport()) || (isOpera() && operaSupport()) || (isSafari() && safariSupport()) || (isChrome() && chromeSupport())) {
            style_supported = true;
        }
        return style_supported;
    }

    function auto_type(case_type) {
        var is_style_supported = style_supported();
        if (is_style_supported) {
            if ((case_type == 'auto' || case_type == 'image') && isFF()) {
                case_type = 'css';
            } else if (case_type == 'auto') {
                case_type == 'image'
            }
        } else {
            if (case_type == 'auto' || case_type == 'image') {
                case_type = 'smalltext';
            }
        }
        return case_type;
    }

    function get_edx_logo_text(text_type) {
        var smalltext = '        _ __  __\n  _   _| |\\ \\/ /\n/ -_) _` | >  < \n\\___\\__,_|/_/\\_\\';
        var bigtext = '          ___  __\n  ___  __| \\ \\/ /\n / _ \\/ _` |\\  / \n|  __/ (_| |/  \\ \n \\___|\\__,_/_/\\_\\';
        if (isSafari()) {
            smalltext = '        _ __  __\n  _  _| | \\ \\ / /\n/ -_) . |  > < \n\\__\\__|/_/\\_\\';
            bigtext = '             ___  __\n  ___  __| \\  \\/  /\n / _ \\/ _` |  \\   / \n|  __/ (_| |  /   \\ \n \\__|\\__,_/_/ \\_\\';
        }
        var text = smalltext;
        if (text_type == 'bigtext') {
            text = bigtext;
        }
        return text;
    }

    console.edx_logo = function(settings, text) {
        var settings = settings || defaults;
        var text = text || defaults.edx_logo_text;
        var log_text = settings.log_text == true ? true : defaults.log_text;
        var text_color = settings.text_color || 'edx_black';
        switch (auto_type(settings.type)) {
            case 'css':
                console.log('%ce%cd%cX', edx_logo_red, edx_logo_grey, edx_logo_blue);
                break;
            case 'image':
                console.image(settings.url || defaults.edx_logo_url, settings.scale || 1, log_text, text, text_color);
                log_text = false;
                break;
            case 'smalltext':
                console.log(get_edx_logo_text('smalltext'));
                break;
            case 'bigtext':
                console.log(get_edx_logo_text('bigtext'));
                break;
            default:
                break;
        }
        log_text_console(log_text, text, text_color);
        return '';
    };

    function get_open_edx_logo_text(text_type, open_edx_only) {
        var smalltext = '  ___  ___ ___ _  _          ___  __®\n / _ \\| _ \\ __| \\| |  ___ __| \\ \\/ /\n| (_) |  _/ _|| .` | / -_) _` |>  < \n \\___/|_| |___|_|\\_| \\___\\__,_/_/\\_\\';
        var smalltext_powered = ' POWERED BY                        \n  ___  ___ ___ _  _          ___  __®\n / _ \\| _ \\ __| \\| |  ___ __| \\ \\/ /\n| (_) |  _/ _|| .` | / -_) _` |>  < \n \\___/|_| |___|_|\\_| \\___\\__,_/_/\\_\\';

        var bigtext = '  ___  ____  _____ _   _            ___  __®\n / _ \\|  _ \\| ____| \\ | |   ___  __| \\ \\/ /\n| | | | |_) |  _| |  \\| |  / _ \\/ _` |\\  / \n| |_| |  __/| |___| |\\  | |  __/ (_| |/  \\ \n \\___/|_|   |_____|_| \\_|  \\___|\\__,_/_/\\_\\';
        var bigtext_powered = ' POWERED BY                                \n  ___  ____  _____ _   _            ___  __®\n / _ \\|  _ \\| ____| \\ | |   ___  __| \\ \\/ /\n| | | | |_) |  _| |  \\| |  / _ \\/ _` |\\  / \n| |_| |  __/| |___| |\\  | |  __/ (_| |/  \\ \n \\___/|_|   |_____|_| \\_|  \\___|\\__,_/_/\\_\\';

        if (isSafari()) {
            smalltext = '  ___  __ ___ _  __           __  __®\n / _  \\| _  \\ __| \\|   |  ___ __|\\ \\/ /\n| (_)  |   _/ .._|. | .` | / -_) _` |>  < \n \\___/|_| |___|_| \\_| \\__\\_,_/_/\\_\\';
            smalltext_powered = ' POWERED BY                        \n  ___  __ ___ _  __           __  __®\n / _  \\| _  \\ __| \\|   |  ___ __|\\ \\/ /\n| (_)  |   _/ .._|. | .` | / -_) _` |>  < \n \\___/|_| |___|_| \\_| \\__\\_,_/_/\\_\\';

            bigtext = '  ___  ____  ______  _               __  __®\n / _  \\|  _   \\ | ___.| \\ |  |   ___  __| \\ \\/ /\n| |  |  |  | _)   |  _|  .| .\\|  |  / _ \\/ _` |  \\  / \n| |_|  |  _..../ | |__..|  | \\ |  | __/ (_| |  /  \\ \n \\__/|_|        |____|_| \\_|  \\__|\\_,_/._/\\_\\';

            bigtext_powered = ' POWERED BY                                \n  ___  ____  ______  _               __  __®\n / _  \\|  _   \\ | ___.| \\ |  |   ___  __| \\ \\/ /\n| |  |  |  | _)   |  _|  .| .\\|  |  / _ \\/ _` |  \\  / \n| |_|  |  _..../ | |__..|  | \\ |  | __/ (_| |  /  \\ \n \\__/|_|        |____|_| \\_|  \\__|\\_,_/._/\\_\\';
        }
        var text = '';
        if (text_type == 'bigtext' && open_edx_only == true) {
            text = bigtext_powered;
        } else if (text_type == 'bigtext') {
            text = bigtext;
        }

        if (text_type == 'smalltext' && open_edx_only == true) {
            text = smalltext_powered;
        } else if (text_type == 'smalltext') {
            text = smalltext;
        }

        return text;
    }
    console.open_edx_logo = function(settings, text) {
        var settings = settings || defaults;
        var text = text || defaults.open_edx_logo_text;
        var log_text = settings.log_text == true ? true : defaults.log_text;
        var open_edx_only = settings.open_edx_only == true ? true : defaults.open_edx_only;
        var text_color = settings.text_color || 'edx_black';
        switch (auto_type(settings.type)) {
            case 'css':
                if (open_edx_only) {
                    console.log('%c                    ®\n%cOPEN %ce%cd%cX', edx_blue_registered, edx_open_blue, edx_logo_red, edx_logo_grey, edx_logo_blue);
                } else {
                    console.log('%cPOWERED BY%c         ®\n%cOPEN %ce%cd%cX', edx_powered_by_light_grey, edx_blue_registered, edx_open_blue, edx_logo_red, edx_logo_grey, edx_logo_blue);
                }
                break;
            case 'image':
                if (open_edx_only == true) {
                    console.image(settings.url || defaults.open_edx_logo_url, settings.scale || 0.5, log_text, text, text_color);
                } else {
                    console.image(settings.url || defaults.open_edx_logo_powered_url, settings.scale || 0.5, log_text, text, text_color);
                }
                log_text = false;
                break;
            case 'smalltext':
                console.log(get_open_edx_logo_text('smalltext', open_edx_only));
                break;
            case 'bigtext':
                console.log(get_open_edx_logo_text('bigtext', open_edx_only));
                break;
            default:
                break;
        }
        log_text_console(log_text, text, text_color);
        return '';
    };
    /**
     * @param  {bool} log_text  Show output to console
     * @param  {string} text Text to show on console
     */
    function log_text_console(log_text, text, color) {
        var color_list = {
            'edx_black': 'black',
            'edx_blue': '#0075b4',
            'edx_red': '#b83868'
        };
        var colored = color_list[color] || color;
        if (log_text) {
            if (style_supported() && colored) {
                console.log('%c' + text, 'color:' + colored);
            } else {
                console.log(text);
            }
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
            style: "font-size: 1px; padding: " + Math.floor(height / 2) + "px " + Math.floor(width / 2) + "px; line-height: " + height + "px;"
        }
    }
    console.image = function(url, scale, log_text, text, color) {
        scale = scale || 1;
        var img = new Image();

        img.onload = function() {
            var dim = getBox(this.width * scale, this.height * scale);
            console.log("%c" + dim.string, dim.style + "background: none, url(" + url + "); background-size: " + (this.width * scale) + "px " + (this.height * scale) + "px; color: transparent;background-repeat: no-repeat;");
            log_text_console(log_text, text, color);
        };
        img.src = url;
    };
})(console);