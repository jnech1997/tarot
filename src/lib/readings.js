// Readings by area of life (love, work and money, personal growth) for every card,
// plus card-specific symbols for the Minor Arcana (the Major Arcana symbols live in lore.js).
// Symbols use the same "symbol=meaning" format as lore.js.

export const areas = {
  // ---- Major Arcana ----
  'The Fool': {
    love: 'A new romance or a fresh start in an old one. Be open and playful, but keep your eyes open too.',
    work: 'A new job, project or venture. Take the chance, and do the basic homework before you jump.',
    growth: 'You are invited to try something with no guarantee. Trust yourself enough to begin.' },
  'The Magician': {
    love: 'Attraction and clear intent. Say what you want; if single, take the first step.',
    work: 'You have the skills and resources. Pitch the idea, start the business, make the case.',
    growth: 'Your attention is your power. Choose one aim and direct your energy to it.' },
  'The High Priestess': {
    love: 'Something is unspoken. Let the connection unfold and trust what your instinct notices.',
    work: 'Not all the facts are known yet. Keep your counsel and wait before you sign or announce.',
    growth: 'Make time for silence, dreams or journaling. Your inner knowing has an answer.' },
  'The Empress': {
    love: 'Affection, sensuality and care. A relationship deepens; sometimes a sign of pregnancy or family.',
    work: 'Creative projects thrive and investments grow. Nurture the work rather than force it.',
    growth: 'Look after your body and senses. Rest, good food and beauty are not luxuries now.' },
  'The Emperor': {
    love: 'A stable, committed partner, or a need for clearer boundaries and roles.',
    work: 'Structure, leadership and plans. Take charge, or work well with the authority above you.',
    growth: 'Discipline creates freedom. Set rules for yourself that you will actually keep.' },
  'The Hierophant': {
    love: 'Commitment and shared values; often marriage or a traditional relationship.',
    work: 'Institutions, training and mentors. Follow the established path or learn its rules first.',
    growth: 'Study a tradition or find a teacher. Then decide which beliefs are truly yours.' },
  'The Lovers': {
    love: 'A deep bond, a soulmate connection or an important choice between partners.',
    work: 'A partnership or a choice that must match your values, not only your ambitions.',
    growth: 'Align what you say with what you do. Choose wholeheartedly.' },
  'The Chariot': {
    love: 'Pursue the person or the goal with confidence. Couples must pull in the same direction.',
    work: 'Drive and focus win. A promotion, a competition or a move forward through determination.',
    growth: 'Hold opposing parts of yourself together. Willpower guides them toward one goal.' },
  'Strength': {
    love: 'Patience and gentleness tame tension. Love grows through kindness, not control.',
    work: 'Quiet confidence persuades better than force. Handle difficult people with calm.',
    growth: 'Be kind to your fears and urges. Courage here is soft and steady.' },
  'The Hermit': {
    love: 'Time alone, or a relationship that needs space. Know yourself before you look for another.',
    work: 'Deep focus, research or a mentor role. Step back from the noise to find direction.',
    growth: 'Withdraw and reflect. Your own light is enough for the next step.' },
  'Wheel of Fortune': {
    love: 'A fated meeting or a turning point. Circumstances shift, often in your favour.',
    work: 'Luck and change. New opportunities appear; adapt quickly to the turn.',
    growth: 'Life moves in cycles. Accept what changes and learn the pattern behind it.' },
  'Justice': {
    love: 'Fairness and honesty between partners. Sometimes a legal matter, such as a divorce or contract.',
    work: 'Contracts, legal decisions and fair outcomes. Act with integrity and keep good records.',
    growth: 'You reap what you sow. Take responsibility for your part.' },
  'The Hanged Man': {
    love: 'A pause. See your partner or situation from a new angle before you push for an answer.',
    work: 'Projects stall. Use the wait to rethink the approach rather than struggle.',
    growth: 'Surrender control for now. A new perspective is worth more than effort.' },
  'Death': {
    love: 'A relationship ends or transforms into something new. Let the old form go.',
    work: 'A job or phase ends. Clear space for the next thing; change is already underway.',
    growth: 'Release an old identity or habit. Endings make room to grow.' },
  'Temperance': {
    love: 'Balance, patience and compromise. Love is healed through moderation and give-and-take.',
    work: 'Steady, measured progress. Combine skills or people to find the middle way.',
    growth: 'Avoid extremes. Healing comes through patience and small adjustments.' },
  'The Devil': {
    love: 'Strong attraction, obsession or an unhealthy bond. Ask what keeps you there.',
    work: 'Feeling trapped by money or a job. Notice where you have more choice than you think.',
    growth: 'Name the habit or fear that controls you. Naming it loosens the chain.' },
  'The Tower': {
    love: 'A sudden revelation or break. Painful, but it removes what was built on false ground.',
    work: 'Sudden change: a layoff, a collapse, a shock. Rebuild on something more honest.',
    growth: 'An illusion falls apart. Let the truth stand, even if it shakes you.' },
  'The Star': {
    love: 'Healing and renewed hope. Open your heart again after hurt.',
    work: 'Inspiration and a hopeful outlook. Your vision attracts support.',
    growth: 'Trust in the future. Rest, recover and let yourself be guided.' },
  'The Moon': {
    love: 'Uncertainty, mixed signals or hidden feelings. Do not assume; ask.',
    work: 'Confusion or incomplete information. Verify before you act, and watch for deception.',
    growth: 'Face your fears and dreams. What frightens you in the dark is often smaller in the light.' },
  'The Sun': {
    love: 'Happiness, warmth and openness. A joyful relationship or a positive new start.',
    work: 'Success and recognition. Projects shine; your confidence is justified.',
    growth: 'Enjoy life simply. Let yourself be seen as you are.' },
  'Judgement': {
    love: 'A second chance or an honest reckoning. Decide what this relationship means to you.',
    work: 'A calling or an important decision. Review your path and answer what summons you.',
    growth: 'Forgive the past and rise. A new version of you is ready.' },
  'The World': {
    love: 'Fulfilment and a sense of completeness. A relationship reaches a happy milestone.',
    work: 'A project or career goal completes. Celebrate, then look to the next horizon; often travel.',
    growth: 'You have integrated a long lesson. Enjoy the wholeness before the next cycle.' },

  // ---- Wands ----
  'Ace of Wands': {
    sym: ['Hand from a cloud=a gift offered from beyond yourself', 'Sprouting leaves on the wand=living, growing energy', 'Castle on a far hill=a goal worth reaching'],
    love: 'Sudden attraction or renewed passion. Act on the spark.',
    work: 'A new idea, project or job offer with real energy behind it. Start now.',
    growth: 'Inspiration is here. Give it a first concrete step today.' },
  'Two of Wands': {
    sym: ['Globe in his hand=the world as possibility', 'Castle battlements=a secure place he may leave', 'Rose and lily cross=desire balanced with pure intent'],
    love: 'Deciding whether to commit or explore. Think about the long-term future together.',
    work: 'Planning growth: expansion, travel or a career move. Make the plan concrete.',
    growth: 'Look beyond the walls you know. Decide where you want to go.' },
  'Three of Wands': {
    sym: ['Ships at sea=ventures sent out, returns awaited', 'Figure seen from behind=looking ahead, beyond the present', 'Three planted wands=a secure base to launch from'],
    love: 'A relationship grows, or a long-distance connection. Look forward together.',
    work: 'Early results arrive. Trade, export or expansion opportunities open up.',
    growth: 'Your efforts are paying off. Widen your view and keep going.' },
  'Four of Wands': {
    sym: ['Garland between four wands=celebration and welcome', 'Dancers holding bouquets=shared joy', 'Castle behind=home and community'],
    love: 'Engagement, wedding, moving in together or a happy homecoming.',
    work: 'A milestone or team celebration. A stable, happy workplace.',
    growth: 'Pause to celebrate what you have built. Gratitude strengthens the foundation.' },
  'Five of Wands': {
    sym: ['Five youths sparring=competition and rivalry', 'Wands clashing at angles=no shared direction', 'Different clothing=different points of view'],
    love: 'Bickering or competing priorities. Fight about the issue, not each other.',
    work: 'Competition, office politics or a brainstorm with many egos. Find the shared goal.',
    growth: 'Conflict can sharpen you. Ask what the friction is teaching.' },
  'Six of Wands': {
    sym: ['Laurel wreath=victory', 'Rider on a white horse=success and confidence', 'Crowd on foot=public recognition and support'],
    love: 'Pride in your relationship, or a confident pursuit that succeeds.',
    work: 'Recognition, promotion or public praise. Accept credit graciously.',
    growth: 'Celebrate your win without letting it define your worth.' },
  'Seven of Wands': {
    sym: ['High ground=advantage of position', 'Mismatched shoes=hasty preparation and improvisation', 'Six wands rising from below=challengers'],
    love: 'Defending your relationship from outside pressure, or standing up for your needs.',
    work: 'Competitors or critics test you. Hold your position with conviction.',
    growth: 'Stand for what you believe, even when it is uncomfortable.' },
  'Eight of Wands': {
    sym: ['Eight wands in flight=speed and messages', 'Open sky with no figures=nothing in the way', 'River and hill below=distance covered quickly'],
    love: 'Things move fast: messages, sudden attraction, a whirlwind connection.',
    work: 'Rapid progress, travel or a flood of emails. Respond promptly.',
    growth: 'Momentum is with you. Ride it, but aim before you throw.' },
  'Nine of Wands': {
    sym: ['Bandaged head=past wounds', 'Wall of wands behind him=defences built up', 'Wary sideways glance=vigilance'],
    love: 'Guarded after past hurt. Trust slowly, but do not shut everyone out.',
    work: 'Nearly at the finish but worn down. Persist; one more push.',
    growth: 'Your resilience is real. Rest where you can, and keep going.' },
  'Ten of Wands': {
    sym: ['Bent figure=overload', 'Wands blocking his view=cannot see the way ahead', 'Town in the distance=the goal is close'],
    love: 'One partner carries too much. Share the load or it will break.',
    work: 'Overwork and too many responsibilities. Delegate, drop or renegotiate.',
    growth: 'Ask what you carry out of habit or guilt. Put some of it down.' },
  'Page of Wands': {
    sym: ['Desert and pyramids=unexplored territory', 'Salamanders on his tunic=fire and transformation', 'Gazing at the wand=fascination with an idea'],
    love: 'Flirtation and excitement. A playful new interest.',
    work: 'A new idea, course or opportunity to explore. Be curious.',
    growth: 'Say yes to an adventure. Learn by trying.' },
  'Knight of Wands': {
    sym: ['Rearing horse=impetuous energy', 'Salamanders on his tunic=fire and passion', 'Pyramids behind=adventure and travel'],
    love: 'Passionate and exciting, but maybe not lasting. Enjoy it with open eyes.',
    work: 'Bold moves, travel or a fast launch. Check the details you are skipping.',
    growth: 'Follow your passion, and finish what you start.' },
  'Queen of Wands': {
    sym: ['Sunflower=warmth and joy', 'Black cat=intuition and independence', 'Lions on the throne=courage'],
    love: 'Confident and attractive. Be warm and direct about what you want.',
    work: 'A charismatic leader or a role that needs presence. Take the stage.',
    growth: 'Own your light. Confidence is attractive when it includes others.' },
  'King of Wands': {
    sym: ['Salamander biting its tail=endless drive', 'Lions and salamanders on the throne=fiery authority', 'Leaning forward=ready to act'],
    love: 'A passionate, committed partner, or taking the lead in love.',
    work: 'Entrepreneurship and vision. Lead the project and inspire the team.',
    growth: 'Turn vision into action. Lead by example.' },

  // ---- Cups ----
  'Ace of Cups': {
    sym: ['Five streams overflowing=the five senses filled with feeling', 'Dove with a wafer=spirit and grace', 'Water lilies=emotional openness'],
    love: 'New love, deep feeling or a reconciliation. Open your heart.',
    work: 'Work that you love, or a creative project with emotional meaning.',
    growth: 'Let yourself feel fully. Compassion begins with you.' },
  'Two of Cups': {
    sym: ['Exchanging cups=mutual giving', 'Caduceus=healing and balance', 'Winged lion head=passion lifted by spirit'],
    love: 'Mutual attraction, partnership or commitment. A strong one-to-one bond.',
    work: 'A good business partnership or agreement. Collaborate as equals.',
    growth: 'Healthy relationships mirror you back. Give and receive in equal measure.' },
  'Three of Cups': {
    sym: ['Raised cups=celebration', 'Three women dancing=friendship', 'Harvest fruit=abundance shared'],
    love: 'Celebrations, a fun social phase, or friends who support the relationship.',
    work: 'Team success and good morale. Celebrate together.',
    growth: 'Lean on your friends. Joy is better shared.' },
  'Four of Cups': {
    sym: ['Crossed arms=closed off', 'Cup offered from a cloud=an offer not yet noticed', 'Tree=withdrawal and contemplation'],
    love: 'Boredom or emotional distance. Notice what is being offered.',
    work: 'Apathy or dissatisfaction. Look again at an opportunity you ignored.',
    growth: 'Reflection is good; dwelling is not. Look up.' },
  'Five of Cups': {
    sym: ['Black cloak=grief', 'Spilled cups=loss', 'Two standing cups=what remains', 'Bridge=a way back'],
    love: 'Disappointment, regret or a breakup. Grieve, then notice who is still there.',
    work: 'A setback or loss. Learn from it and salvage what remains.',
    growth: 'Allow sadness without making it your home.' },
  'Six of Cups': {
    sym: ['Child offering flowers=innocent kindness', 'Old village=the past and home', 'Guard walking away=the safety of childhood'],
    love: 'An old flame, childhood sweetheart or tender nostalgia.',
    work: 'Returning to old skills or a past employer. Kindness and cooperation help.',
    growth: 'Heal your inner child. Take comfort from good memories.' },
  'Seven of Cups': {
    sym: ['Cups of visions: castle, jewels, wreath, dragon=temptations and fantasies', 'Figure in silhouette=the dreamer', 'Clouds=illusion'],
    love: 'Many options or idealised fantasies. See people as they are.',
    work: 'Too many ideas, none chosen. Pick one and test it in the real world.',
    growth: 'Daydreams are useful only if you act on one.' },
  'Eight of Cups': {
    sym: ['Figure walking away=leaving', 'Stacked cups with a gap=something missing', 'Eclipsed moon=a transition, a night journey'],
    love: 'Walking away from a relationship that no longer fulfils you.',
    work: 'Leaving a job for something more meaningful.',
    growth: 'Seek deeper meaning. It is brave to leave what is merely comfortable.' },
  'Nine of Cups': {
    sym: ['Satisfied figure with crossed arms=contentment', 'Row of cups=wishes fulfilled', 'Blue cloth=what lies behind the display'],
    love: 'Happiness and satisfaction. A wish in love may come true.',
    work: 'Success and material comfort. Enjoy the reward.',
    growth: 'Gratitude multiplies contentment.' },
  'Ten of Cups': {
    sym: ['Rainbow of cups=blessing', 'Family with arms raised=joy shared', 'Home in the distance=stability'],
    love: 'Lasting happiness, family harmony, a fulfilling partnership.',
    work: 'Work-life balance and a supportive team that feels like family.',
    growth: 'Build a life around what truly matters to you.' },
  'Page of Cups': {
    sym: ['Fish in the cup=a surprising idea or feeling', 'Waves behind=emotion', 'Flowered tunic=a gentle nature'],
    love: 'A sweet message, a crush or a new romantic beginning.',
    work: 'Creative inspiration or an unexpected offer. Follow your intuition.',
    growth: 'Be playful with your feelings and imagination.' },
  'Knight of Cups': {
    sym: ['White horse walking=a calm, gentle approach', 'Winged helmet=imagination', 'River ahead=emotion to be crossed'],
    love: 'Romance, a proposal or an idealistic lover.',
    work: 'A creative offer or work that follows your heart. Check the facts too.',
    growth: 'Follow your heart, and make sure your feet are on the ground.' },
  'Queen of Cups': {
    sym: ['Ornate closed cup=feelings kept deep and private', 'Throne at the shoreline=between feeling and reason', 'Cherubs=imagination'],
    love: 'Deep empathy and emotional security. A caring partner.',
    work: 'Caring professions, counselling or creative roles. Lead with empathy.',
    growth: 'Trust your intuition and protect your emotional boundaries.' },
  'King of Cups': {
    sym: ['Throne floating on rough sea=calm amid turbulence', 'Fish amulet=creativity', 'Ship and leaping fish=emotion active in the world'],
    love: 'A mature, emotionally steady partner.',
    work: 'Diplomatic leadership. Stay calm under pressure.',
    growth: 'Master your emotions without denying them.' },

  // ---- Swords ----
  'Ace of Swords': {
    sym: ['Crowned sword=victory of a clear mind', 'Olive and palm branches=mercy and severity', 'Barren mountains=the challenge ahead'],
    love: 'Honest talk clears the air. Truth over illusion.',
    work: 'A breakthrough idea or decision. Cut to the core of the problem.',
    growth: 'Clarity arrives. Speak your truth.' },
  'Two of Swords': {
    sym: ['Blindfold=refusing to see', 'Crossed swords=stalemate and defence', 'Moon and sea behind=intuition and emotion held back'],
    love: 'Avoiding a decision or a hard conversation. Remove the blindfold.',
    work: 'Stuck between options. Gather information and choose.',
    growth: 'Avoiding a choice is itself a choice.' },
  'Three of Swords': {
    sym: ['Heart pierced by three swords=heartbreak', 'Storm clouds and rain=grief', 'Three swords=a painful truth'],
    love: 'Heartbreak, betrayal or painful words. Let it hurt so it can heal.',
    work: 'A rejection or harsh criticism. Learn from it; do not let it define you.',
    growth: 'Grief is part of healing. Feel it honestly.' },
  'Four of Swords': {
    sym: ['Figure lying on a tomb=rest', 'Stained-glass window=sanctuary', 'Sword beneath him=one held in reserve'],
    love: 'Time apart or a rest from conflict. Recover before you decide.',
    work: 'Burnout warning. Take leave or slow down.',
    growth: 'Rest is productive. Recharge your mind.' },
  'Five of Swords': {
    sym: ['Figure gathering swords=a hollow victory', 'Figures walking away=defeat and alienation', 'Ragged clouds=the aftermath of conflict'],
    love: 'A fight someone won, but the relationship lost. Pick your battles.',
    work: 'Unfair competition or a win at too high a cost.',
    growth: 'Ask whether being right is worth being alone.' },
  'Six of Swords': {
    sym: ['Boat=a passage', 'Rough water behind, calm ahead=moving toward peace', 'Hooded passengers=grief carried along'],
    love: 'Moving on from a difficult relationship toward calmer times.',
    work: 'A transition or relocation. Things improve slowly.',
    growth: 'Leave the trouble behind, even if you carry some sadness.' },
  'Seven of Swords': {
    sym: ['Figure sneaking away=stealth', 'Two swords left behind=an incomplete plan', 'Camp in the background=what is left behind'],
    love: 'Secrets or dishonesty. Check what is hidden, including from yourself.',
    work: 'Strategy and discretion, or someone cutting corners. Protect your interests.',
    growth: 'Ask whether you are being clever or avoiding something.' },
  'Eight of Swords': {
    sym: ['Bound and blindfolded=self-imposed limits', 'Swords loosely around her=she could walk out', 'Distant castle=help and authority far away'],
    love: 'Feeling trapped. You have more choice than you think.',
    work: 'Stuck by your own beliefs. Look for the exit you have overlooked.',
    growth: 'Challenge the thought that keeps you stuck.' },
  'Nine of Swords': {
    sym: ['Head in hands=anguish', 'Black background=night thoughts', 'Quilt of roses and zodiac signs=comfort that is near'],
    love: 'Anxiety and overthinking about the relationship. Talk it through.',
    work: 'Stress and sleepless worry. Seek support.',
    growth: 'Your fears are louder than reality. Share them.' },
  'Ten of Swords': {
    sym: ['Swords in the back=a final defeat', 'Dawn on the horizon=a new day', 'Calm water=peace after the storm'],
    love: 'A painful ending. It is over; healing begins from here.',
    work: 'Rock bottom: a job loss or failure. Only up from here.',
    growth: 'Accept the ending fully, then rise.' },
  'Page of Swords': {
    sym: ['Wind-swept hair and clouds=changeable thoughts', 'Raised sword=alertness', 'Hilly ground=a lookout point'],
    love: 'Curious but guarded. Watch for gossip; ask direct questions.',
    work: 'New ideas, research or learning. Stay alert and speak up.',
    growth: 'Curiosity is your strength. Gather facts before you judge.' },
  'Knight of Swords': {
    sym: ['Charging horse=speed', 'Wind-blown trees=haste', 'Raised sword=determination'],
    love: 'Fast-moving or blunt in love. Slow down and listen.',
    work: 'Ambitious and driven. Charge ahead with a clear plan, and watch for tactlessness.',
    growth: 'Act on your convictions, but think about who you leave behind.' },
  'Queen of Swords': {
    sym: ['Raised open hand=openness to truth', 'Upright sword=clarity', 'Butterflies=transformation', 'Single bird=a clear perspective'],
    love: 'Independent and honest. Set clear boundaries.',
    work: 'Clear communication and sharp judgement. Be direct and fair.',
    growth: 'Speak truth with compassion.' },
  'King of Swords': {
    sym: ['Upright sword=judgement', 'Butterflies and sylphs=intellect', 'Still trees=steadiness'],
    love: 'Logic over emotion. Communicate honestly and fairly.',
    work: 'Authority, expertise or legal matters. Decide on the evidence.',
    growth: 'Use your mind to serve the truth.' },

  // ---- Pentacles ----
  'Ace of Pentacles': {
    sym: ['Hand holding a coin=a material gift', 'Garden path=growth', 'Hedge archway=a gateway to opportunity'],
    love: 'A stable, grounded new relationship, or a practical step together.',
    work: 'A job offer, investment or new income. A solid opportunity.',
    growth: 'Plant seeds for long-term security.' },
  'Two of Pentacles': {
    sym: ['Infinity loop=endless balancing', 'Ships on the waves=ups and downs', 'Dancing figure=flexibility'],
    love: 'Balancing love with other priorities. Stay flexible.',
    work: 'Juggling tasks or money. Prioritise.',
    growth: 'Balance is a movement, not a fixed state.' },
  'Three of Pentacles': {
    sym: ['Cathedral arch=craft and structure', 'Monk and architect=collaboration', 'Sculptor on a bench=skill'],
    love: 'Building a relationship together. Shared goals.',
    work: 'Teamwork and recognition of your skills.',
    growth: 'Learn from others and contribute your craft.' },
  'Four of Pentacles': {
    sym: ['Coin clutched to the chest=holding on', 'Coins under his feet=security', 'City behind=distance from others'],
    love: 'Possessiveness or emotional guardedness. Loosen your grip.',
    work: 'Saving money and protecting resources. Do not miss growth from fear.',
    growth: 'Security is good; control is costly.' },
  'Five of Pentacles': {
    sym: ['Snow=hardship', 'Lit church window=help that is near', 'Crutches and bandages=suffering'],
    love: 'Feeling left out in the cold. Reach out for support.',
    work: 'Financial difficulty or job loss. Ask for help.',
    growth: 'You are not alone, even if it feels that way.' },
  'Six of Pentacles': {
    sym: ['Scales=fairness', 'Coins given away=generosity', 'Kneeling beggars=dependence'],
    love: 'Give and take. Check the balance of power.',
    work: 'Fair pay, a bonus, a loan or charity. Give and receive with grace.',
    growth: 'Generosity flows both ways.' },
  'Seven of Pentacles': {
    sym: ['Leaning on a hoe=a pause in the work', 'Bush heavy with coins=an investment growing', 'Thoughtful gaze=assessment'],
    love: 'Is this relationship worth the effort? Assess honestly.',
    work: 'Long-term investment. Be patient for results.',
    growth: 'Growth takes time. Review, then keep tending.' },
  'Eight of Pentacles': {
    sym: ['Workbench=craft', 'Coins hung on a post=work completed', 'Distant town=focus away from distraction'],
    love: 'Working on the relationship with dedication.',
    work: 'Skill-building, apprenticeship and diligent work.',
    growth: 'Mastery comes from practice.' },
  'Nine of Pentacles': {
    sym: ['Hooded falcon=disciplined desire', 'Vineyard=abundance', 'Snail=slow, steady progress'],
    love: 'Independent and content; you choose love, you do not need it.',
    work: 'Financial independence and the reward of hard work.',
    growth: 'Enjoy your self-sufficiency.' },
  'Ten of Pentacles': {
    sym: ['Old man with dogs=legacy and loyalty', 'Family group=generations', 'Archway=a threshold', 'Coats of arms=heritage'],
    love: 'Long-term commitment, family and marriage.',
    work: 'Lasting wealth, family business or inheritance.',
    growth: 'Build something that lasts beyond you.' },
  'Page of Pentacles': {
    sym: ['Gazing at a coin=study and focus', 'Ploughed field=preparation', 'Trees=growth to come'],
    love: 'A slow, sincere start. Steady intentions.',
    work: 'A new course, job or practical plan. Study.',
    growth: 'Learn something practical and apply it.' },
  'Knight of Pentacles': {
    sym: ['Horse standing still=steadiness', 'Ploughed field=patience', 'Dark horse=earth and reliability'],
    love: 'A reliable, loyal partner. Slow but sure.',
    work: 'Methodical progress. Dependable effort wins.',
    growth: 'Consistency beats intensity.' },
  'Queen of Pentacles': {
    sym: ['Rabbit=fertility', 'Roses and garden=abundance', 'Goat head on the throne=practicality'],
    love: 'A nurturing, practical partner who makes a home.',
    work: 'Work-life balance and resourceful management.',
    growth: 'Care for your body and home; it supports everything else.' },
  'King of Pentacles': {
    sym: ['Grapes and vines=prosperity', 'Bull heads on the throne=steady strength', 'Castle behind=achievement'],
    love: 'A generous, stable provider.',
    work: 'Business success and wise financial leadership.',
    growth: 'Use your success to support others.' }
};

// Reversed readings by area of life: [love, work, growth].
const R = {
  'The Fool': ['You are rushing in without looking, or holding back out of fear. Ask whether the risk is brave or careless, then act.', 'A plan that skips the basics, or a start you keep postponing. Do the homework, then commit.', 'Fear or carelessness is steering you. Find a courage that keeps its eyes open.'],
  'The Magician': ['Charm without substance, mixed signals or someone playing games. Look at what they do, not what they say.', 'Talent wasted or used for a scheme. Clever shortcuts may backfire; focus your effort honestly.', 'You are scattered or fooling yourself. Gather your tools and choose one aim.'],
  'The High Priestess': ['Secrets between you, or you are ignoring your gut about someone. Listen to what you already sense.', 'Hidden agendas or missing information at work. Keep your plans private until you know more.', 'You have lost touch with your intuition. Turn down the noise and listen again.'],
  'The Empress': ['Smothering, neglect or dependency. Care for yourself as well as for the other person.', 'A creative block, or work that drains you without reward. Step back and nurture the project.', 'You neglect your body and needs. Return to rest, food and simple pleasures.'],
  'The Emperor': ['Control, rigidity or a cold partner, or no stability at all. Structure should protect, not dominate.', 'A domineering boss, or chaos with no leadership. Bring order without becoming a tyrant.', 'Too much control, or too little self-discipline. Find an authority over yourself that is fair.'],
  'The Hierophant': ['An unconventional relationship, or rules from family or culture that no longer fit. Define commitment in your own terms.', 'You are breaking with convention or clashing with an institution. Understand the system before you rebel against it.', 'Question beliefs you inherited but never chose. Keep the ones that are truly yours.'],
  'The Lovers': ['Imbalance, temptation or values that no longer match. Talk honestly before the gap widens.', 'A partnership out of alignment, or a choice made only for money. Revisit the terms.', 'Inner conflict between what you want and what you value. Reconcile the two before you choose.'],
  'The Chariot': ['You pull in different directions, or one of you forces the outcome. Agree on where you are going.', 'Lost focus, stalled momentum or aggressive tactics. Regain control of the plan before you push harder.', 'Willpower without direction wears you out. Choose a heading first.'],
  'Strength': ['Insecurity, jealousy or temper strains the bond. Rebuild trust with patience and gentleness.', 'Self-doubt holds you back from a role you can handle. Your calm competence is still there.', 'Inner doubt or raw impulse is in charge. Be patient and kind with yourself.'],
  'The Hermit': ['Loneliness, or one partner withdraws. Space is healthy; shutting the other person out is not.', 'Isolation at work, or refusing advice. Ask for input instead of going it alone.', 'Too much solitude, or avoiding reflection altogether. Find a balance between the two.'],
  'Wheel of Fortune': ['A bad patch, or resistance to a change in the relationship. Ride it out; the wheel turns again.', 'Setbacks, bad timing or forces beyond your control. Hold steady and prepare for the next upturn.', 'You feel at the mercy of events. Focus on what you can influence.'],
  'Justice': ['Unfairness, dishonesty or avoided accountability in the relationship. Name what is out of balance.', 'An unfair outcome, a biased decision or a legal complication. Check the details and the paperwork.', 'You are avoiding responsibility, or judging yourself too harshly. Look at your part honestly and fairly.'],
  'The Hanged Man': ['Stalling, or sacrificing too much for the other person. Decide what you are really waiting for.', 'Delays with no purpose, or a project that will not move. Make a decision and act.', 'You resist a pause you need, or you are stuck in one. Either let go or move.'],
  'Death': ['Holding on to a relationship, or a version of it, that has already ended. Let it go so something new can grow.', 'You resist a change at work that is already happening. Adapt instead of fighting it.', 'Fear of change keeps you stuck in an old identity. Release what is finished.'],
  'Temperance': ['Excess, imbalance or a refusal to compromise. One of you gives far more than the other.', 'Overwork, clashing priorities or rushing results. Recalibrate before something spills over.', 'You swing between extremes. Find moderation again, one small adjustment at a time.'],
  'The Devil': ['Breaking free from an unhealthy or obsessive bond. Reclaim your power and your choices.', 'Leaving a trap: debt, a toxic job or a bad habit. Keep going; the chains are already loosening.', 'Liberation has begun. Name what held you so it cannot catch you again.'],
  'The Tower': ['An inevitable break is being postponed, or a crisis narrowly missed. Avoiding the truth may only delay it.', 'Fear of change delays a necessary shake-up. Address the weak foundation before it collapses.', 'Resisting the truth prolongs the pain. Let the false structure fall.'],
  'The Star': ['Lost hope or cynicism about love after being hurt. Healing needs patience, not proof.', 'Discouragement or a lack of inspiration. Reconnect with why you started.', 'Your faith is low. Small acts of hope and self-care rebuild it.'],
  'The Moon': ['The truth comes out and confusion lifts. You can now see the relationship more clearly.', 'Hidden information surfaces, or a deception is exposed. Clarity returns, so decide on facts.', 'Fears are released and anxiety eases. You see your situation as it really is.'],
  'The Sun': ['Joy is dimmed by stress or doubt, but it is not gone. Look for the warmth that is still there.', 'Success is delayed, or confidence turns into overconfidence. Stay positive and realistic.', 'Your playful side feels blocked. Make deliberate space for joy.'],
  'Judgement': ['Self-doubt, or refusing to learn from past relationships. Be honest about the pattern.', 'You ignore a calling or avoid an important decision. The chance will not wait forever.', 'Harsh self-judgement keeps you from moving on. Forgive yourself and answer the call.'],
  'The World': ['Something feels incomplete or unresolved. Close the loop before you move to the next stage.', 'A delay before completion, or loose ends at work. Finish what is still open.', 'You look for shortcuts to the end. Complete the lesson; there is no way around it.'],
  'Ace of Wands': ['A spark that fades, or attraction with mismatched timing. Do not force a flame that will not catch.', 'A delayed start, lost motivation or an idea with no plan. Find the first small step.', 'Creative block or low energy. Look for what genuinely excites you again.'],
  'Two of Wands': ['Fear of committing to a shared future, or one person ready to go while the other stays. Talk about the long-term plan.', 'Poor planning, or fear of the unknown keeps you in a safe but limited role.', 'You play it too safe. Ask what you would do if you were less afraid.'],
  'Three of Wands': ['Delays, distance or disappointment in plans together. Adjust expectations without giving up.', 'Expansion stalls or returns come in slowly. Revise the plan and check your assumptions.', 'Your vision is too narrow, or you look back instead of ahead. Widen the view.'],
  'Four of Wands': ['Tension at home, or a celebration postponed or cancelled. Tend the mood, not only the plans.', 'Instability or a lack of support in the team. Rebuild the shared foundation.', 'You do not feel at home where you are. Find or build your community.'],
  'Five of Wands': ['Avoiding conflict that needs airing, or a truce after a long argument. Make peace real, not just quiet.', 'Conflict resolved, or avoided at a cost to the work. Address the real disagreement.', 'Inner conflict between competing goals. Find the common ground inside yourself.'],
  'Six of Wands': ['Insecurity, or a need for constant validation from a partner. Your worth does not depend on applause.', 'Recognition does not come, or it comes for the wrong things. Keep doing good work regardless.', 'Pride or self-doubt distorts how you see your success. Stay humble and steady.'],
  'Seven of Wands': ['Giving in to outside pressure, or tired of defending the relationship. Decide what is worth protecting.', 'Overwhelmed by competition or criticism. Choose your battles instead of fighting all of them.', 'Exhaustion from always being on guard. Some challenges can be let go.'],
  'Eight of Wands': ['Mixed signals, delayed replies or a romance moving too fast. Slow down and communicate clearly.', 'Delays, cancelled plans, or chaos from moving too fast. Wait for the path to clear before you push.', 'Your energy is scattered. Slow down and aim before you act.'],
  'Nine of Wands': ['Paranoia or walls built so high that no one can reach you. Lower your guard with someone who has earned it.', 'Burnout just before the finish line. Rest briefly, then complete the last stretch.', 'You are worn out from defending yourself. Rest, and drop the fights that are already over.'],
  'Ten of Wands': ['One of you finally puts down a burden, or refuses to and the relationship strains. Share the load.', 'Delegating at last, or collapsing under too much work. Ask for help before you break.', 'Let go of what is not yours to carry. Guilt is not a reason to keep it.'],
  'Page of Wands': ['A fickle crush or passion that burns out quickly. Enjoy it, but do not build on it yet.', 'Many ideas, none of them started. Pick one and give it real follow-through.', 'Restless and unsure where to begin. Start small and learn as you go.'],
  'Knight of Wands': ['Impulsive or fleeting passion, or a partner who leaves as fast as they arrived. Look for consistency.', 'Haste, recklessness and unfinished projects. Slow down enough to do it properly.', 'Anger or restlessness drives you. Channel the fire into something you will finish.'],
  'Queen of Wands': ['Jealousy, insecurity or a need to be the centre of attention. Reclaim your confidence instead of controlling the other person.', 'Demanding or overstretched leadership. Delegate and stop trying to do everything yourself.', 'Your confidence has slipped. Remember what you are good at.'],
  'King of Wands': ['Domineering, impulsive or quick-tempered in love. Passion needs patience to last.', 'Arrogant or impatient leadership, or big plans with no follow-through. Listen to your team.', 'Vision without patience burns out. Let others help you carry it.'],
  'Ace of Cups': ['Emotional blocks, unrequited feelings or love that is offered but not received. Allow yourself to feel first.', 'Work that leaves you unfulfilled, or creativity that will not flow. Find the part that still matters to you.', 'You repress your feelings. Let them out somewhere safe.'],
  'Two of Cups': ['Imbalance, separation or a broken bond. Talk honestly about what each of you needs.', 'A partnership or agreement in conflict. Clarify terms before resentment builds.', 'Love for yourself comes first. Repair your relationship with yourself.'],
  'Three of Cups': ['A third party, gossip or a friend group that interferes. Protect the relationship from outside noise.', 'Team conflict, cliques or celebrations that hide problems. Address what is not being said.', 'Too much partying, or too little real connection. Look for friendship with depth.'],
  'Four of Cups': ['Waking up from apathy. You are ready to notice love that is offered and say yes again.', 'You see new opportunities you missed before. Act on one while it is still open.', 'You are ready to engage with life again. Let curiosity lead.'],
  'Five of Cups': ['Moving on after heartbreak. Forgiveness, for them or for yourself, lets you love again.', 'Recovering from a loss or setback. Salvage what you can and build from it.', 'Acceptance arrives. You can grieve and still turn toward what remains.'],
  'Six of Cups': ['Stuck in the past, or idealising an ex. Compare your partner with the present, not a memory.', 'Clinging to how things used to be done. Bring the old skills forward instead.', 'Nostalgia keeps you from growing. Honour the past and let it go.'],
  'Seven of Cups': ['Clarity about what you really want in love. The fantasies fade and the real choice is clear.', 'You choose a focus at last. Commit to one option and test it.', 'Illusions fade. You see what is possible and what is wishful thinking.'],
  'Eight of Cups': ['Fear of leaving keeps you in a relationship that no longer fulfils you, or you drift without purpose. Decide.', 'You stay too long in a job out of fear, or leave without a direction. Know what you are walking toward.', 'Decide whether to stay or go, then do it fully.'],
  'Nine of Cups': ['Unfulfilled wishes or a relationship that looks good but feels empty. Ask what you truly want.', 'Success that feels hollow, or rewards you thought would satisfy and did not. Re-examine your goals.', 'Smugness or disappointment. Look at what really makes you content.'],
  'Ten of Cups': ['Family conflict, or a perfect image that hides cracks. Reconnect with each other honestly.', 'A disconnected team or a workplace that has lost its harmony. Rebuild trust.', 'Your idea of happiness may not be your own. Redefine it.'],
  'Page of Cups': ['Emotional immaturity, or a crush that goes nowhere. Do not let insecurity stop you from feeling.', 'Creative block or ideas you dismiss too quickly. Give your imagination room.', 'You feel insecure about your feelings. Treat them with curiosity, not judgement.'],
  'Knight of Cups': ['Moodiness, false promises or a romantic who disappears. Look for steady actions, not grand gestures.', 'Unrealistic plans, or an offer that sounds better than it is. Check the facts.', 'Your dreams have drifted from reality. Ground them in a first practical step.'],
  'Queen of Cups': ['Codependency or emotional overwhelm. You cannot pour from an empty cup.', 'Burnout from caring for others at work. Set boundaries.', 'You absorb everyone else\'s feelings. Look after your own first.'],
  'King of Cups': ['Emotional manipulation, coldness or moodiness. Feelings are being used or hidden.', 'Volatile leadership, or decisions driven by mood. Steady yourself before you lead others.', 'You suppress your emotions until they spill over. Acknowledge them early.'],
  'Ace of Swords': ['Confusion, harsh words or a truth used as a weapon. Wait until your head is clear before you speak.', 'Unclear goals or a bad decision made too fast. Gather facts first.', 'Your thoughts are clouded. Rest and reflect before you decide.'],
  'Two of Swords': ['Information comes out and the stalemate breaks. The decision you avoided is now in front of you.', 'Overwhelmed by information and options. Pick the most important factor and decide.', 'Indecision ends, even if the choice is uncomfortable.'],
  'Three of Swords': ['Recovery from heartbreak begins. You release sorrow and forgive, slowly.', 'You bounce back from criticism or rejection. Use what was true in it.', 'Release the pain you have carried. Healing is underway.'],
  'Four of Swords': ['Restlessness after a break. It is time to re-engage with the relationship.', 'Burnout from refusing rest, or returning to work after recovery. Pace yourself.', 'You cannot rest forever, and you cannot skip rest either. Find the rhythm.'],
  'Five of Swords': ['Making amends after a fight, or holding a grudge that hurts you both. Choose reconciliation.', 'Reconciliation after workplace conflict, or a lingering resentment. Clear the air.', 'Let go of the need to win. Peace is worth more.'],
  'Six of Swords': ['You cannot move on, or old baggage comes along into a new relationship. Finish the crossing.', 'A transition stalls, or you resist a necessary move. Keep going.', 'You carry the past with you. Leave some of it on the shore.'],
  'Seven of Swords': ['A secret comes out, or a guilty conscience speaks up. Honesty is needed now.', 'A deception or shortcut is exposed. Come clean before it gets worse.', 'Your conscience is trying to tell you something. Listen.'],
  'Eight of Swords': ['You free yourself from a limiting relationship or a fearful mindset. Step out.', 'You break free from constraints at work. See the exit you missed before.', 'A new perspective releases you. Take the first step out.'],
  'Nine of Swords': ['Hope returns after worry. Face the fear and talk it through with your partner.', 'Anxiety about work eases, or you finally ask for help. Things look smaller in daylight.', 'The night is ending. Face your fear and let it shrink.'],
  'Ten of Swords': ['Recovery after a painful ending. Slowly, you rise and open up again.', 'Rebuilding after failure or job loss. The worst is behind you.', 'You survived what felt final. Rise slowly and gently.'],
  'Page of Swords': ['Gossip, sharp words or spying on a partner. Ask direct questions instead.', 'All talk and no action, or ideas shared too early. Think before you speak.', 'Your mind is restless and scattered. Focus on one question.'],
  'Knight of Swords': ['Aggression, carelessness or saying hurtful things in a rush. Slow down and listen.', 'Reckless haste, or pushing an argument too hard. You can win the race and still lose the point.', 'You charge ahead without thinking. Slow down and consider the effects.'],
  'Queen of Swords': ['Coldness, bitterness or cruel words after hurt. Let honesty be kind.', 'Harsh criticism or icy communication. Clarity works better with compassion.', 'Past pain has sharpened your edges. Let your mind be kind as well.'],
  'King of Swords': ['Manipulation, coldness or using logic to dominate. Fairness matters more than winning.', 'Abuse of authority or rigid judgement. Use your power fairly.', 'You hide behind reason. Let feeling inform your judgement.'],
  'Ace of Pentacles': ['A missed opportunity in love, or a relationship without a solid base. Build trust step by step.', 'A lost opportunity, poor planning or a deal that falls through. Check the ground before you plant.', 'Your foundations are shaky. Fix the basics first.'],
  'Two of Pentacles': ['Neglecting the relationship while you juggle everything else. Make time.', 'Overcommitted and dropping balls. Simplify what you are carrying.', 'You try to balance too much. Let something go.'],
  'Three of Pentacles': ['Not working together, or different visions for the future. Agree on the plan.', 'Poor teamwork, unclear roles or work that is not valued. Clarify responsibilities.', 'You do not ask for help. Collaboration would make the work better.'],
  'Four of Pentacles': ['Letting go of control, or swinging into reckless spending. Find a healthy middle.', 'Financial insecurity, or loosening a grip that was too tight. Balance saving and spending.', 'You loosen your grip. Make sure you do not drop everything.'],
  'Five of Pentacles': ['Recovery after hard times together. Support returns.', 'Financial recovery begins. Things slowly improve.', 'You come in from the cold. Accept the help offered.'],
  'Six of Pentacles': ['A one-sided relationship, or love given with strings attached. Notice who holds the power.', 'Debt, unfair pay or an unequal exchange. Renegotiate.', 'Giving to be needed, or taking without giving back. Restore the balance.'],
  'Seven of Pentacles': ['Impatience with slow progress, or effort that is not returned. Decide whether to keep investing.', 'Poor return on investment. Redirect your energy where it will grow.', 'You want results now. Ask whether this is worth your time.'],
  'Eight of Pentacles': ['Neglecting the relationship for work. Give it the same care you give your craft.', 'Perfectionism, or work that has gone dull and routine. Remember why you started.', 'Practice without purpose. Reconnect with the meaning of the work.'],
  'Nine of Pentacles': ['Dependency, or overworking so you have no time for love. Value your independence and your bonds.', 'A financial setback, or reliance on others for security. Rebuild your own base.', 'You doubt your own worth. Value what you have earned.'],
  'Ten of Pentacles': ['Family conflict over money, or pressure from tradition. Protect the relationship from it.', 'An inheritance, family business or legacy at risk. Protect what matters for the future.', 'You question the legacy you were given. Decide what to keep.'],
  'Page of Pentacles': ['Procrastination or a lack of commitment in love. Show up consistently.', 'Lack of focus or a plan never started. Take the first practical step.', 'Plans without action stay plans. Start small today.'],
  'Knight of Pentacles': ['A partner stuck in routine, or boredom setting in. Try something new together.', 'Stagnation, laziness or perfectionism slows the work. Move, even a little.', 'Your routine has become a rut. Change one habit.'],
  'Queen of Pentacles': ['Self-neglect, or smothering the people you care for. Balance giving and receiving.', 'Work-life imbalance. Home or work is taking everything.', 'You care for everyone but yourself. Turn that care inward.'],
  'King of Pentacles': ['Greed, materialism or control through money. Love is not a transaction.', 'Stubbornness about money, or status over substance. Stay open to advice.', 'Wealth is a tool, not an identity. Remember what it is for.']
};
for (const [name, [love, work, growth]] of Object.entries(R)) areas[name].rev = { love, work, growth };
