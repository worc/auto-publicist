import energy from 'motifs/energy';
import genre from 'motifs/genre';
import quirk from 'motifs/quirk';
import protagonist from 'motifs/protagonist';
import plot from 'motifs/plot';
import action from 'motifs/action';
import conflict from 'motifs/conflict';

export default () => `
  This ${energy.next().value} ${genre.next().value} is about a/an ${quirk.next().value} ${protagonist.next().value} ${plot.next().value} to ${action.next().value} their ${conflict.next().value} 
`;
