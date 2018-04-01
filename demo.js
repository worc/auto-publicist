import AutoPublicist from 'AutoPublicist';
import Bamboozle from 'bamboozle';

const pitch = document.getElementById('pitch');
const bam = new Bamboozle(({message}) => {
  pitch.textContent = message;
}, AutoPublicist(), {
  characters: [
      '▀▁▂▃▄▅▆▇█▉▊▋▌▍▎', // U+258x
      '▐░▒▓▔▕▖▗▘▙▚▛▜▝▞▟', // U+259x
    ].join(''),
  exclude: '. '
});

bam.reveal(1000);
