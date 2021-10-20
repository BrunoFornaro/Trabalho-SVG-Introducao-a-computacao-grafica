var moveSlider = function (slider, direction) {
  var value = slider.value;
  var rectSVG = document.getElementById('rect-svg');
  rectSVG.setAttributeNS(null, direction, value * 4);
}


var time = new Date().getSeconds();
var q = document.getElementById('haste-1');
var imagem = document.getElementById('bike');
imagem.addEventListener('hover', function () {
  q.style.transition = 'all 1s'
  q.style.transform = 'rotate(45deg)';
});

var innerArrow = document.getElementById("haste-1");
innerArrow.setAttribute("transform", "rotate(45)");

function teste() {
  setInterval(function () {
    let novaHora = new Date();
    // getHours trará a hora
    // geMinutes trará os minutos
    // getSeconds trará os segundos
    let hora = novaHora.getHours();
    let minuto = novaHora.getMinutes();
    let segundo = novaHora.getSeconds();
    // Chamamos a função zero para que ela retorne a concatenação
    // com os minutos e segundos
    minuto = zero(minuto);
    segundo = zero(segundo);
    // Com o textContent, iremos inserir as horas, minutos e segundos
    // no nosso elemento HTML
    document.getElementById('hora').textContent = hora + ':' + minuto + ':' + segundo;
  }, 1000)


  function zero(x) {
    if (x < 10) {
      x = '0' + x;
    } return x;
  }
}
/*
var q = document.getElementById('quadrado');
var btn = document.getElementById('btn');
var red = document.getElementById('btn-red');

btn.addEventListener('click', function(){
  q.style.transition = 'all 1s' // aplico transicao para qualquer elemento
  q.style.width= '200px' // mudo a largura do elemento
  q.style.height= '150px' // mudo a altura do elemento
});

red.addEventListener('click', function(){
  q.classList.add('vermelhinho');
});*/