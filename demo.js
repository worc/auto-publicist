import AutoPublicist from './AutoPublicist.js';
import Bamboozle from 'bamboozle';

const pitch = document.getElementById('pitch');
const bam = new Bamboozle(({message}) => {
  pitch.textContent = message;
}, AutoPublicist(), {
  characters: [
      '▀▁▂▃▄▅▆▇█▉▊▋▌▍▎', // U+258x
      '▐░▒▓▔▕▖▗▘▙▚▛▜▝▞▟', // U+259x
    ].join(''),
  exclude: '. ',
  frequency: 20
});

bam.start();
bam.reveal(750, 750);
