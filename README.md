# edX-console-logos
This plugin shows edX and OPEN edX logos at browser console.
##### edX Logos
[<img src="https://cloud.githubusercontent.com/assets/7054417/9888650/18060670-5bab-11e5-8410-c7ffb5f8ac73.png" alt="edX Logos" height="200px"/>](https://cloud.githubusercontent.com/assets/7054417/9888650/18060670-5bab-11e5-8410-c7ffb5f8ac73.png)
##### OPEN edX Logos
[<img src="https://cloud.githubusercontent.com/assets/7054417/9888651/1841c804-5bab-11e5-8ef6-22d6b1c174a1.png" height="200px" alt="OPEN edX Logos"/>](https://cloud.githubusercontent.com/assets/7054417/9888651/1841c804-5bab-11e5-8ef6-22d6b1c174a1.png)
[<img src="https://cloud.githubusercontent.com/assets/7054417/9888652/1849fa6a-5bab-11e5-9326-c7ccac6d7191.png" height="200px" alt="OPEN edX Logos"/>](https://cloud.githubusercontent.com/assets/7054417/9888652/1849fa6a-5bab-11e5-9326-c7ccac6d7191.png)

## Usage

First, load the plugin:
```html
<script src="edx_logo.js" type="text/javascript"></script>
```
Now the ```edx_logo``` and ```open_edx_logo``` functions are embedded into console object call these function using console.
###Examples
```html
<script type="text/javascript">
console.edx_logo();
console.open_edx_logo();
</script>
```
##Options

- **settings**:
  - **type** Type of logo to show.  
```default: auto```
		1. **auto**: Auto select the type among (image, css, smalltext, bigtext) according to browser compatibility.
		2. **image**: Image version of logo.
		3. **css**: Css versio of logo.
		4. **smalltext**: Text style line version of logo (old browsers).
		5. **bigtext**: Big Text style line version of logo (old browsers).
 - **log_text** Show text message on console.  
```default: false```
 - **url** Image url of logo in case of ```type:image``` or ```type:auto```  
```default (edx_logo)```: <sup>https://d37djvu3ytnwxt.cloudfront.net/static/images/edx-theme/edx-header-logo.517a627deaad.png</sup>  
```default (open_edx_logo)```: <sup>https://files.edx.org/openedx-logos/edx-openedx-logo-tag.png</sup>
 - **scale** Image scale for logo from 0.1 to 1
 - **open_edx_only** For ```open_edx_logo``` only if set ```true``` ignore the ```POWERED BY``` text, work only for css, smalltext, bigtext types  
```default: false```



- **text**  
  Text to show on console along with logo  
```default (edx_logo)```: <sup>Want to contribute to edX-platform ? Visit at https://github.com/edx/edx-platform</sup>  
```default (open_edx_logo)```: <sup>POWERED BY OPEN edX</sup>

## Browser Support
Browser | Image | Css | Smalltext | Bigtext|
---------|---------|---------|---------|---------|
![Chrome](https://raw.github.com/alrra/browser-logos/master/chrome/chrome_48x48.png)|Yes|Yes|Yes|Yes|
![Safari](https://raw.github.com/alrra/browser-logos/master/safari/safari_48x48.png)|Yes|Yes|Yes|Yes|
![Opera](https://raw.github.com/alrra/browser-logos/master/opera/opera_48x48.png)|Yes|Yes|Yes|Yes|
![Firefox (FireBug)](https://raw.github.com/alrra/browser-logos/master/firefox/firefox_48x48.png)|No|V > 39|Yes|Yes|
![Internet Explorer](https://raw.github.com/alrra/browser-logos/master/internet-explorer/internet-explorer_48x48.png)|No|No|Yes|Yes|

## License

(The MIT License)
