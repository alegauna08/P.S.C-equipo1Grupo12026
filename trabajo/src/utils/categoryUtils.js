export function getCategoryClass(cat) {
  switch(cat) {
    case 'Alkali Metals':
      return 'family-alkali text-family-alkali';
    case 'Alkaline Earth':
      return 'family-alkaline text-family-alkaline';
    case 'Transition Metals':
      return 'family-transition text-family-transition';
    case 'Lanthanides':
      return 'family-lanthanide text-family-lanthanide';
    case 'Actinides':
      return 'family-actinide text-family-actinide';
    case 'Post-transition Metals':
      return 'family-post-transition text-family-post-transition';
    case 'Metalloids':
      return 'family-metalloid text-family-metalloid';
    case 'Nonmetals':
      return 'family-nonmetal text-family-nonmetal';
    case 'Noble Gases':
      return 'family-noble text-family-noble';
    default:
      return 'bg-surface-variant/20 border-outline-variant/40 text-on-surface-variant';
  }
}

export function getCategoryBgClass(cat) {
  switch(cat) {
    case 'Noble Gases':
      return 'bg-purple-500/10 border-purple-500 text-purple-500';
    case 'Nonmetals':
      return 'bg-emerald-400/10 border-emerald-400 text-emerald-400';
    case 'Alkali Metals':
      return 'bg-yellow-500/10 border-yellow-500 text-yellow-500';
    case 'Lanthanides':
      return 'bg-pink-400/10 border-pink-400 text-pink-400';
    default:
      return 'bg-primary/10 border-primary text-primary';
  }
}
