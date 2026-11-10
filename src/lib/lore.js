import { areas } from './readings.js';

// Symbolism and fuller meanings. Each major entry: pairs "symbol=meaning", last item is the deeper reading.
const M = [
  ['White sun=clarity and a hopeful day', 'White rose=purity, innocent desire', 'Small dog=loyal instinct warning of the edge', 'Cliff edge=the unknown, a leap of faith', 'The Fool begins at the point before experience. He is not foolish so much as trusting; his eyes on the sky show faith ahead of caution. The card asks which leap you are ready to take.'],
  ['Infinity sign=unlimited potential', 'Table of wand, cup, sword, pentacle=all four suits as tools', 'One hand up, one down=as above, so below', 'The Magician channels the divine into the world. Everything he needs is already on the table; what he adds is attention and will. The card asks what you could create if you stopped waiting for permission.'],
  ['Pillars B and J=duality, opposites held in balance', 'Crescent moon at her feet=intuition and cycles', 'Pomegranate veil=the hidden, fertile mystery', 'She guards the threshold between the known and the unknown. Her knowledge is felt rather than argued. The card invites you to hold a question in stillness and trust what rises on its own.'],
  ['Crown of twelve stars=the cycle of the year', 'Ripe wheat=abundance and harvest', 'Heart shield with Venus sign=love and creative bounty', 'The Empress is the living earth in human form: pleasure, fertility and the creative power that grows what it nurtures. The card asks what you are tending, and whether you let yourself receive.'],
  ['Stone throne with ram heads=Aries, will and command', 'Orb and ankh scepter=dominion and life', 'Barren mountains=enduring, stern order', 'The Emperor builds order from will. His throne is carved stone, made to last, and his armor shows that authority carries duty. The card asks where firm structure would serve you.'],
  ['Two acolytes=those who learn a tradition', 'Crossed keys=access to conscious and hidden knowledge', 'Triple crown and cross=three worlds: body, mind, spirit', 'The Hierophant is the keeper of shared belief and the teacher who explains it. The card points to learning within a tradition, and to asking whether its rules still fit you.'],
  ['Angel above=blessing and a choice made with awareness', 'Tree of Knowledge with serpent=temptation, awakening', 'Tree of Life with twelve flames=passion and vitality', 'The Lovers is as much about choice as romance. Two people stand open before a higher presence, and each choice shows what they value. The card asks you to choose in line with your truth.'],
  ['Black and white sphinxes=opposing forces under one will', 'No reins=control by will, not force', 'Starry canopy=guidance from above', 'The Chariot is triumph won through discipline. The driver keeps opposing pulls moving in one direction by focus alone. The card asks where you need to unite your drives and commit.'],
  ['Infinity sign above her=endless inner power', 'Hand on the lion\'s jaws=compassion mastering instinct', 'White robe and flowers=purity of purpose', 'Strength is the quiet courage of patience and gentleness. She does not force the lion; she calms it. The card asks you to meet your fear with kindness rather than a fight.'],
  ['Lantern with six-pointed star=wisdom lighting one step at a time', 'Staff=authority earned by experience', 'Snowy summit=solitude and the heights of insight', 'The Hermit has climbed alone to see clearly, and now lifts a light for others. The card suggests withdrawing from noise to hear your own judgement.'],
  ['Sphinx on top=stability amid change', 'Snake descending, Anubis rising=falling and rising together', 'Winged creatures in the corners=steady witnesses to the turning', 'The Wheel shows that every state is temporary. What rises will fall and what falls will rise. The card asks you to move with the cycle and to find your center while it turns.'],
  ['Upright sword=clear, decisive truth', 'Scales=weighing each side fairly', 'Pillars and purple veil=the law and what stands behind it', 'Justice is cause and effect made plain. Nothing is hidden from her scales, and what you have done returns to you. The card asks for honesty, fair dealing and accountability.'],
  ['Living T-shaped tree=life continuing through sacrifice', 'Halo=insight gained by surrender', 'Legs crossed like a figure four=balance and stability in suspension', 'The Hanged Man hangs willingly, and his calm face shows it. By giving up control he sees what striving hid. The card asks you to pause and take the opposite view.'],
  ['Skeleton in black armor=change that spares no one', 'White rose banner=purity and renewal', 'Sun rising between two towers=a new day after the ending', 'Death is transformation, not a literal end. The rider is unstoppable, yet the sun rises behind him. The card asks what is already finished and what you must release to move on.'],
  ['Angel with one foot in water and one on land=bridging mind and body', 'Water poured between cups=blending and steady flow', 'Path to a golden crown=a goal worth patient travel', 'Temperance is the art of the right mixture. Nothing is rushed and nothing is forced. The card asks you to blend your opposing parts into something balanced and lasting.'],
  ['Chained naked pair=bondage to habit or desire', 'Loose chains=the bonds could be removed', 'Inverted pentagram=matter ruling over spirit', 'The Devil is what you give power to: appetite, fear, or an unhealthy bond. The chains hang loosely, so the card also shows that you are freer than you feel.'],
  ['Lightning=sudden revelation', 'Crown knocked off=false authority falling', 'Figures falling=leaving a collapsed structure', 'The Tower strikes what was built on false ground. It is jarring, and it clears the way for something honest. The card asks which structure in your life is no longer sound.'],
  ['Large eight-pointed star=hope and guidance', 'Water poured on land and pool=giving to body and unconscious alike', 'Kneeling, unclothed woman=openness and vulnerability', 'The Star follows the Tower: stillness and quiet renewal after upheaval. She pours out without holding back and is refilled. The card asks you to trust that healing is underway.'],
  ['Dog and wolf=tamed and wild instinct', 'Crayfish rising from the pool=the deep unconscious stirring', 'Winding path between towers=a road through uncertainty', 'The Moon is the landscape of dreams and half-seen things. Light is faint and shapes deceive. The card asks you to walk forward carefully and to question your fears.'],
  ['Child on a white horse=innocence and joy', 'Sunflowers=vitality turned toward the light', 'Red banner=life force and vigor', 'The Sun is the clearest, warmest card in the deck. Nothing is hidden and there is simple gladness in being alive. The card asks you to enjoy what is working and to let yourself be seen.'],
  ['Angel with trumpet=the call to rise', 'Figures rising from coffins=rebirth and release', 'Arms raised=acceptance and awakening', 'Judgement is a reckoning followed by renewal. You review what you have lived, forgive it and answer a higher call. The card asks what you are being summoned toward.'],
  ['Laurel wreath=victory and completion', 'Four figures in the corners=the elements united', 'Dancer holding two wands=mastery of opposing forces', 'The World closes the journey with the whole in view. The dancer moves freely inside the wreath because everything has been integrated. The card marks arrival and the start of a wider circle.']
];
const S = {
  wands: { sym: ['Budding wood=growth and living creative energy', 'Desert and heat=ambition tested by effort'], deep: 'In the suit of Wands this plays out through the spark you act on and the effort you invest.' },
  cups: { sym: ['Overflowing cup=feeling offered, received or spilled', 'Water=emotion and the unconscious'], deep: 'In the suit of Cups this plays out through how you feel and how you connect with others.' },
  swords: { sym: ['Blade=the mind: sharp, double-edged, cutting through illusion', 'Clouds and sky=the realm of thought'], deep: 'In the suit of Swords this plays out through what you think, say and decide.' },
  pentacles: { sym: ['Coin with five-pointed star=the body and the material world', 'Gardens, walls and workshops=work and what you build'], deep: 'In the suit of Pentacles this plays out through your work, resources and daily practice.' }
};
const R = {
  Ace: 'An Ace is a hand reaching from a cloud, offering the pure element of the suit: an open gift you can accept or ignore.',
  Two: 'Twos pair opposites: a decision or alliance in which both sides must be weighed before you move.',
  Three: 'Threes are the first complete shape: the energy has joined with others and begins to show results.',
  Four: 'Fours form a square, a structure: the energy is held in place, which can mean security or being stuck.',
  Five: 'Fives break the square. Disruption, competition or loss enters, and growth depends on how you respond.',
  Six: 'Sixes recover from the crisis of the fives: help is given or received and you move toward calmer water.',
  Seven: 'Sevens ask for a pause and a test of faith: how much will you commit now that the early rush has passed?',
  Eight: 'Eights are movement and mastery: either a rapid acceleration or patient practice carried out with skill.',
  Nine: 'Nines are almost the finish: you have gathered the suit\'s lessons and rely on your own resilience for the last stretch.',
  Ten: 'Tens are the full cycle, whether a joyful fulfilment or a load grown too heavy; an ending here prepares the next Ace.',
  Page: 'Pages are messengers and students: you meet this energy with curiosity and are still learning to use it.',
  Knight: 'Knights are the energy in motion: committed to a quest, sometimes too fast and sometimes too slow.',
  Queen: 'Queens hold the suit\'s energy within: mature, receptive and expressed through presence and intuition.',
  King: 'Kings direct the suit\'s energy outward: experienced, in command and responsible for what they rule.'
};
export function lore(c) {
  if (c.arcana === 'major') {
    const m = M[c.major];
    return { sym: m.slice(0, -1).map((x) => x.split('=')), deep: m[m.length - 1] };
  }
  const s = S[c.suit.key];
  // Card-specific scene symbols first, then the symbols shared by the whole suit.
  return { sym: [...areas[c.name].sym, ...s.sym].map((x) => x.split('=')), deep: `${R[c.rank.name]} ${s.deep}` };
}
