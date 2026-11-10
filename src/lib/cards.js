// The 22 Major Arcana.
export const cards = [
  { n: '0', name: 'The Fool', kw: ['beginnings', 'trust', 'leap'],
    up: 'A fresh start calls. Step forward with open eyes and an open heart; the risk is small beside the gift of beginning.',
    rev: 'Recklessness or hesitation. You may be ignoring a warning, or letting fear keep you at the cliff edge.' },
  { n: 'I', name: 'The Magician', kw: ['will', 'skill', 'manifestation'],
    up: 'You hold every tool you need. Focus your intent and act; ideas become real when you direct them.',
    rev: 'Scattered energy or misused talent. Check for manipulation, including self-deception.' },
  { n: 'II', name: 'The High Priestess', kw: ['intuition', 'mystery', 'stillness'],
    up: 'Listen inward. Answers arrive quietly through dreams, instinct, and what remains unspoken.',
    rev: 'You are ignoring your inner voice, or secrets are clouding the picture. Seek stillness.' },
  { n: 'III', name: 'The Empress', kw: ['abundance', 'nurture', 'creation'],
    up: 'Fertile ground. Creativity, comfort and care flourish; tend what you love and it will grow.',
    rev: 'Neglect of self or others, creative block, or smothering. Return to your roots and rest.' },
  { n: 'IV', name: 'The Emperor', kw: ['structure', 'authority', 'stability'],
    up: 'Build foundations. Order, discipline and clear boundaries give your ambitions a solid throne.',
    rev: 'Rigidity or domination, or a lack of control. Balance strength with flexibility.' },
  { n: 'V', name: 'The Hierophant', kw: ['tradition', 'teaching', 'belief'],
    up: 'Wisdom passed down. Learn from a mentor or institution, or honor a ritual that gives life shape.',
    rev: 'Question the rules. Dogma may be confining you; it is time to find your own way of believing.' },
  { n: 'VI', name: 'The Lovers', kw: ['union', 'choice', 'alignment'],
    up: 'A meaningful bond or a choice that reflects your values. Choose with your whole heart.',
    rev: 'Disharmony, misaligned values, or a hard choice avoided. Reconcile what you say with what you do.' },
  { n: 'VII', name: 'The Chariot', kw: ['drive', 'victory', 'discipline'],
    up: 'Momentum is yours. Hold the reins of opposing forces and press on with confident resolve.',
    rev: 'Loss of direction or force without focus. Slow down, regain command, and pick a heading.' },
  { n: 'VIII', name: 'Strength', kw: ['courage', 'patience', 'compassion'],
    up: 'True power is gentle. Meet fear with calm and compassion, and the wild thing within will follow.',
    rev: 'Self-doubt or raw impulse. Rebuild your confidence by being kind to yourself first.' },
  { n: 'IX', name: 'The Hermit', kw: ['solitude', 'insight', 'guidance'],
    up: 'Withdraw to find clarity. Your lantern lights only the next step, and that is enough.',
    rev: 'Isolation or refusal to look within. Reach out, or stop running from your own company.' },
  { n: 'X', name: 'Wheel of Fortune', kw: ['cycles', 'fate', 'change'],
    up: 'The wheel turns in your favor. Change, luck and turning points arrive; ride them with grace.',
    rev: 'A setback or resistance to change. The cycle will turn again; learn what this low point teaches.' },
  { n: 'XI', name: 'Justice', kw: ['truth', 'fairness', 'cause and effect'],
    up: 'Truth and accountability. Decisions are weighed fairly, and your actions return to you.',
    rev: 'Dishonesty, bias, or avoided consequences. Look at the situation as it truly is.' },
  { n: 'XII', name: 'The Hanged Man', kw: ['surrender', 'pause', 'new view'],
    up: 'Suspend your striving. By letting go and seeing from another angle, you gain what effort could not.',
    rev: 'Stalling for its own sake, or needless sacrifice. Decide what you are really waiting for.' },
  { n: 'XIII', name: 'Death', kw: ['endings', 'transformation', 'release'],
    up: 'An ending that clears the way. Rarely literal, it marks a chapter closing so another can open.',
    rev: 'Clinging to what is finished. Resistance only prolongs the change that is already underway.' },
  { n: 'XIV', name: 'Temperance', kw: ['balance', 'moderation', 'patience'],
    up: 'Blend opposites with care. Moderation and patience bring harmony and a quiet healing.',
    rev: 'Excess or imbalance. Something in your life needs recalibrating before it spills over.' },
  { n: 'XV', name: 'The Devil', kw: ['bondage', 'desire', 'shadow'],
    up: 'Notice what binds you: habit, craving, or fear. The chains are looser than they appear.',
    rev: 'Liberation begins. You are breaking free, or finally naming the thing that held you.' },
  { n: 'XVI', name: 'The Tower', kw: ['upheaval', 'revelation', 'collapse'],
    up: 'A sudden shake-up topples false structures. It hurts, and it frees you to rebuild on truth.',
    rev: 'Disaster averted or delayed, or fear of necessary change. Avoiding the shock may extend it.' },
  { n: 'XVII', name: 'The Star', kw: ['hope', 'renewal', 'serenity'],
    up: 'Hope returns after the storm. Be open, be healed, and trust the guiding light above you.',
    rev: 'Discouragement or lost faith. The light has not gone; it needs patient, gentle attention.' },
  { n: 'XVIII', name: 'The Moon', kw: ['illusion', 'dreams', 'uncertainty'],
    up: 'Things are not as they seem. Move carefully through confusion and trust your instincts over appearances.',
    rev: 'Fog begins to lift. Hidden fears or secrets surface, and clarity is within reach.' },
  { n: 'XIX', name: 'The Sun', kw: ['joy', 'success', 'vitality'],
    up: 'Warmth, clarity and success. Enjoy what is going well; your light is easy to see now.',
    rev: 'Dimmed joy or delayed success. Optimism is still available; do not let a cloud convince you otherwise.' },
  { n: 'XX', name: 'Judgement', kw: ['calling', 'reckoning', 'rebirth'],
    up: 'A call to rise. Reflect honestly, forgive, and answer the summons toward your fuller self.',
    rev: 'Self-doubt or ignoring the call. Avoiding reflection keeps you from the renewal on offer.' },
  { n: 'XXI', name: 'The World', kw: ['completion', 'wholeness', 'arrival'],
    up: 'A cycle completes. You have arrived, integrated and whole, ready to begin a wider circle.',
    rev: 'Nearly there but unfinished. Close the last loop before you move on.' }
];

// ---- Minor Arcana: 4 suits x 14 ranks ----
export const suits = [
  { key: 'wands', name: 'Wands', element: 'Fire', domain: 'creativity, ambition and drive' },
  { key: 'cups', name: 'Cups', element: 'Water', domain: 'emotion and relationships' },
  { key: 'swords', name: 'Swords', element: 'Air', domain: 'thought, truth and communication' },
  { key: 'pentacles', name: 'Pentacles', element: 'Earth', domain: 'money, work and the body' }
];

export const ranks = [
  { name: 'Ace', kw: ['seed', 'potential', 'gift'] },
  { name: 'Two', kw: ['balance', 'choice', 'partnership'] },
  { name: 'Three', kw: ['growth', 'collaboration', 'first fruits'] },
  { name: 'Four', kw: ['stability', 'rest', 'holding'] },
  { name: 'Five', kw: ['conflict', 'loss', 'challenge'] },
  { name: 'Six', kw: ['harmony', 'passage', 'exchange'] },
  { name: 'Seven', kw: ['assessment', 'perseverance', 'test'] },
  { name: 'Eight', kw: ['movement', 'mastery', 'change'] },
  { name: 'Nine', kw: ['resilience', 'near completion', 'solitude'] },
  { name: 'Ten', kw: ['culmination', 'completion', 'burden'] },
  { name: 'Page', kw: ['curiosity', 'messages', 'learning'] },
  { name: 'Knight', kw: ['pursuit', 'action', 'momentum'] },
  { name: 'Queen', kw: ['inner mastery', 'nurture', 'intuition'] },
  { name: 'King', kw: ['outer mastery', 'authority', 'leadership'] }
];

// Upright and reversed text for each minor card, in rank order (Ace to King).
const text = {
  wands: [
    ['A spark of inspiration is offered. Grab the idea while it is hot and give it a first step.', 'The spark is there but will not catch. Delay, doubt or poor timing is smothering a good idea.'],
    ['You hold the world in your hand and look outward. Plan the bigger move and choose a direction.', 'Fear of the unknown keeps you at home. A plan stays on paper because you will not commit.'],
    ['Your ships are on the horizon. Early efforts pay off and the view ahead widens.', 'Plans are slow to arrive. Check what is holding things up before you blame the tide.'],
    ['A celebration of something built. Enjoy the homecoming, the milestone and the people who share it.', 'Tension at home or a celebration cut short. The foundation is fine; the mood needs care.'],
    ['Competing voices and scrappy rivalry. The friction can sharpen you if no one plays to win at all costs.', 'You avoid conflict, or the squabbling finally ends. Look for common ground.'],
    ['Victory and recognition. Ride proudly; others see what you have achieved.', 'Success goes unnoticed, or pride runs ahead of results. Stay humble and keep going.'],
    ['You hold the high ground against challengers. Stand firm for what you believe in.', 'You feel overwhelmed and worn down by defending. Choose which battles are worth it.'],
    ['Things move fast. News arrives, plans accelerate and the way is clear.', 'Delays, frustration or rushing in the wrong direction. Wait for the path to clear.'],
    ['Wounded but still standing. One last push is needed; your persistence will carry you.', 'You are exhausted and suspicious of everyone. Rest before you collapse, and lower your guard a little.'],
    ['You carry too much. Success has become a burden; see what you can delegate or drop.', 'You finally put the load down, or refuse to. Ask for help before it breaks you.'],
    ['An eager messenger of new ideas. Explore with enthusiasm and try something new.', 'Restless energy with no plan. Ideas start and stop; give one of them some follow-through.'],
    ['Bold, charming and in a hurry. Chase the adventure with passion and confidence.', 'Impulsive, scattered or quick to anger. Speed without direction leaves things half done.'],
    ['Warm, confident and magnetic. Lead with courage and let your determination inspire others.', 'Jealousy, insecurity or demanding behaviour. Reclaim your confidence instead of controlling others.'],
    ['A visionary leader who turns ideas into action. Take charge of the big picture.', 'Impatience, arrogance or harsh expectations. Leadership needs listening as much as vision.']
  ],
  cups: [
    ['Love and feeling overflow. Open your heart to a new relationship, compassion or creative joy.', 'Emotions held back or poured out without care. Allow yourself to feel before you give.'],
    ['A meeting of hearts. Mutual attraction, partnership or a reconciliation built on respect.', 'Imbalance in a bond, or a broken connection. Talk honestly about what each of you needs.'],
    ['Friendship, celebration and community. Raise a glass with the people who lift you.', 'Too much partying, gossip, or a third person in the way. Protect the friendships that matter.'],
    ['Apathy and contemplation. You ignore what is offered while you sulk over what is missing.', 'You wake from boredom and notice what is in front of you. Say yes to something new.'],
    ['Grief over what is spilled. Mourn it, then turn around: two cups still stand behind you.', 'Acceptance and moving on. Forgiveness lets you pick up what remains.'],
    ['Nostalgia and innocent kindness. Old memories or childhood friends bring comfort.', 'Living in the past. Look forward instead of romanticising what has gone.'],
    ['Many choices and daydreams. Not every vision is real; choose with care.', 'Clarity returns and you make a choice. Illusions fade and your priorities firm up.'],
    ['You walk away from something that no longer fulfils you. Leaving takes courage.', 'Fear of change, or drifting without purpose. Decide whether you are leaving or staying.'],
    ['Wishes granted. Contentment and emotional satisfaction; enjoy it.', 'Smugness, or a wish that did not satisfy. Look at what you truly want, not what you think you want.'],
    ['Harmony at home and lasting happiness. Love in its full and settled form.', 'Disconnection in a family or a picture-perfect image that hides cracks. Reconnect with each other.'],
    ['A tender message or an unexpected feeling. Stay open to intuition and creative surprise.', 'Emotional immaturity or a creative block. Do not let insecurity stop you from feeling.'],
    ['A romantic, following the heart. An offer, an invitation or a gesture of love.', 'Moodiness, unrealistic dreams or a promise that is not kept. Check that your heart is grounded.'],
    ['Compassionate, calm and emotionally secure. Trust your intuition and care for others.', 'Martyrdom or emotional overwhelm. Look after yourself before you look after others.'],
    ['Emotional balance and wise counsel. Stay calm in rough water and guide with kindness.', 'Emotions suppressed or used to manipulate. Steady yourself before you steer others.']
  ],
  swords: [
    ['A breakthrough of clarity. Cut through confusion and speak the truth plainly.', 'Clouded judgement or harsh words. Wait until your head is clear before you strike.'],
    ['A stalemate. You block out the choice to avoid pain, but it will not resolve itself.', 'The blindfold slips. Information or emotion overwhelms the deadlock; decide.'],
    ['Heartbreak, grief or painful truth. Let the hurt be real so that it can heal.', 'Recovery begins. You release sorrow and forgive, slowly.'],
    ['Rest and recovery. Retreat, sleep or meditate before the next challenge.', 'Restlessness or burnout. You cannot rest forever, and you cannot skip rest either.'],
    ['A hollow victory. Winning at any cost leaves you alone; ask if the fight was worth it.', 'Making amends after conflict, or carrying a grudge. Let it go.'],
    ['A transition to calmer waters. You leave trouble behind, even if you carry some sorrow.', 'You resist change, or old baggage stops the passage. Finish the crossing.'],
    ['Strategy, stealth or getting away with something. Check whether you deceive others or yourself.', 'A secret comes out, or a conscience speaks up. Come clean.'],
    ['You feel trapped by your own thoughts. The bindings are looser than they appear.', 'You free yourself from limiting beliefs. Take the first step out.'],
    ['Anxiety and sleepless worry. Most fears are worse in the dark; talk to someone.', 'Hope returns, or you finally face the fear. The night is ending.'],
    ['A painful ending, a rock-bottom moment. It cannot get worse, so the only way now is up.', 'Recovery and survival. You rise slowly from a defeat you thought was final.'],
    ['Curious, alert and full of questions. Gather the facts and speak up.', 'Gossip, hasty words or all talk and no action. Think before you speak.'],
    ['Fast, focused and determined. Charge ahead with your argument or your plan.', 'Reckless haste or aggression. You can win the race and still lose the point.'],
    ['Clear-sighted and independent. Honest boundaries and direct communication serve you.', 'Coldness, bitterness or cruel words. Let your sharp mind be kind as well.'],
    ['Intellectual authority and fair judgement. Lead with logic and truth.', 'Manipulation, tyranny or rigid thinking. Use power fairly.']
  ],
  pentacles: [
    ['A new financial or practical opportunity. Plant the seed: a job, an investment, a healthy habit.', 'A missed opportunity or poor planning. Check the ground before you plant.'],
    ['Juggling priorities. Stay flexible and keep your balance through changing demands.', 'Overcommitment and dropped balls. Simplify what you are carrying.'],
    ['Teamwork and skilled collaboration. Your craft is recognised; build together.', 'Poor teamwork or work that is not valued. Clarify roles and standards.'],
    ['Security, saving and holding on. Protect what you have, but do not grip too tightly.', 'Greed, or spending without care. Find a middle path between control and chaos.'],
    ['Hardship, worry or feeling left out in the cold. Help is nearer than you think; ask.', 'Recovery from hard times. Things begin to improve.'],
    ['Generosity and fair exchange. Give or receive help with grace.', 'Strings attached, or debts and imbalance. Notice who holds the power in the exchange.'],
    ['Patience and long-term view. Your investment is growing; assess and wait.', 'Impatience or effort without reward. Decide where to put your energy.'],
    ['Diligent practice and craftsmanship. Repetition is building real skill.', 'Perfectionism, or work that has gone dull. Remember why you started.'],
    ['Self-sufficiency and earned comfort. Enjoy what your discipline has built.', 'Overwork, or a reliance on others for security. Value your own independence.'],
    ['Lasting wealth, family and legacy. Build for the long term.', 'Family disputes over money, or a legacy at risk. Protect what matters for the future.'],
    ['A student of practical things. Learn a skill, start a plan, take a first step.', 'Procrastination or lack of focus. A plan with no action stays a plan.'],
    ['Steady, reliable and hard-working. Slow progress is still progress.', 'Stuck in routine, laziness or perfectionism. Move, even a little.'],
    ['Nurturing, practical and generous. Create comfort for yourself and others.', 'Self-neglect, or caring too much about appearance. Balance work and home.'],
    ['Abundance, security and practical leadership. Your success is grounded and lasting.', 'Greed, stubbornness or obsession with status. Wealth is a tool, not an identity.']
  ]
};

const minor = suits.flatMap((suit) =>
  ranks.map((rank, i) => ({
    arcana: 'minor', suit, rank, name: `${rank.name} of ${suit.name}`,
    kw: [...rank.kw.slice(0, 2), suit.element.toLowerCase()],
    up: text[suit.key][i][0],
    rev: text[suit.key][i][1]
  }))
);

// The full 78-card deck. `major` is the index into the Major Arcana (0-21), used by lore.js.
export const deck = [...cards.map((c, major) => ({ ...c, arcana: 'major', major })), ...minor].map((c, i) => ({ ...c, id: i }));
