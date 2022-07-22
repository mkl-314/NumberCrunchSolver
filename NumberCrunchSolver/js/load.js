loadScript('/js/Solver.js');
loadScript('/js/Equations.js');
loadScript('/js/Types.js');
loadScript('/js/NumberCrunch.js');
loadScript('/js/Storage.js');
loadScript('/js/Extensions.js');

function loadScript(url) {
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    head.appendChild(script);
}