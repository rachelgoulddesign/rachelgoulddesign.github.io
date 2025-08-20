'use strict';

// function definitions
const rotateScene = function ( event ) {
  rY += event.originalEvent.movementX/2;
  rX -= event.originalEvent.movementY/2;
  $scene.css( 'transform', 'rotateX('+ rX +'deg) rotateY('+ rY +'deg)' );
}

const moveMermaid = function ( event ) {
  let tX = Math.random() *580-230;
  let tY = Math.random() *280-110;
  let tZ = Math.random() *450-260;
  $mermaid.css( '--tX', tX+'px' );
  $mermaid.css( '--tZ', tZ+'px' );
  $mermaidWater.css('--tY', tY+'px');
}

// variable declarations
let $window = $( window );
let $scene = $( '.scene' );

let rX = 0;
let rY = 0;

let $mermaid = $( '.move' );
let $mermaidWater = $('.mermaid')

let $woosh = $('.woosh');

let $click = $('.click');

let $waves = $('.waves');


let $octopus = $('.octopus');
let $jellyfish = $('.jellyfish');
let $clam = $('.clam');
let $coral = $('.coral');
let $fish = $('.fish');

let $top1 = $('.top1');



// script initialisation

$window.on( 'mousedown', function(){
  $window.on( 'mousemove', rotateScene );
} );

$window.on( 'mouseup', function(){
  $window.off( 'mousemove', rotateScene );
} );

$( '.face' ).prop( 'draggable', false );

$mermaid.on( 'mouseover', moveMermaid );



var audio1 = $woosh[0];
$mermaid.mouseenter(function() {
  audio1.play();
});

var audio2 = $click[0];
$octopus.mouseenter(function() {
  audio2.play();
});

$jellyfish.mouseenter(function() {
  audio2.play();
});

$fish.mouseenter(function() {
  audio2.play();
});

$coral.mouseenter(function() {
  audio2.play();
});

$clam.mouseenter(function() {
  audio2.play();
});

var audio3 = $waves[0];
$top1.mouseenter(function() {
  audio3.play();
});