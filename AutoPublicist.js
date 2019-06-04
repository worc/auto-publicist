import energy from './motifs/energy';
import genre from './motifs/genre';
import quirk from './motifs/quirk';
import protagonist from './motifs/protagonist';
import plot from './motifs/plot';
import action from './motifs/action';
import conflict from './motifs/conflict';

export default () => {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  const nextQuirk = quirk.next().value
  const indefinite = vowels.includes(nextQuirk.slice(0, 1)) ? 'an' : 'a'
  return `This ${energy.next().value} ${genre.next().value} is about ${indefinite} ${nextQuirk} ${protagonist.next().value} ${plot.next().value} to ${action.next().value} their ${conflict.next().value}`
}
