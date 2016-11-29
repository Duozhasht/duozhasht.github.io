function onInit() {
  var whoamiInterval = setInterval(whoamiFunction, 2000);

  function whoamiFunction() {
    var element = document.getElementById('whoami');
    var whoamiArray = ['Software Developer', 'Master Student', 'Craftsman', 'All Around Guy', 'Web Developer'];
    var index = whoamiArray.indexOf(element.innerHTML);
    (index == whoamiArray.length - 1) ? (clearInterval(whoamiInterval)) : index++
    element.innerHTML = whoamiArray[index];
  }

}
onInit();

$(document).ready(function() {
  $('#contrast').on('click', function() {
  	var obj = $(':root');
    var colorA = $('body').css('color');
    var colorB = $('body').css('background-color');
    console.log(colorA);
    console.log(colorB);
    console.log(obj);
    $(':root').css(`--light-color`, 'var(--blue)');
    $(':root').css(`--dark-color`, 'var(--bege)');
  });
})
