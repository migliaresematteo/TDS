if (window.innerWidth > 768) {
    var imageleft = document.getElementsByClassName('parallaxleft');
    new simpleParallax(imageleft, {
      orientation: 'left',
      overflow: true
    });
  } else {
    var imageleft = document.getElementsByClassName('parallaxleft');
    var instance = new simpleParallax(imageleft);
    instance.destroy();
  }
  