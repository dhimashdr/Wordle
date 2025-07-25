const wordBtn = document.getElementById('wordBtn')
const input = document.getElementById('wordInput')
const resultText = document.getElementById('result')
const health = document.getElementById('health')
const message = document.getElementById('message')
const resetBtn = document.getElementById('resetBtn')
const resetBtn1 = document.getElementById('resetBtn1')
const menang = document.getElementById('menang')
const kalah = document.getElementById('kalah')
const correctSum = document.getElementById('correctSum')
const wrongSum = document.getElementById('wrongSum')

let healthPoint = 6
let correctTimes = 0
let wrongTimes = 0

const fiveLetterWords = [
    'about', 'above', 'abuse', 'actor', 'acute', 'admit', 'adopt', 'adult',
    'after', 'again', 'agent', 'agree', 'ahead', 'alarm', 'album', 'alert',
    'alien', 'alike', 'alive', 'allow', 'alone', 'along', 'aloud', 'alpha',
    'alter', 'among', 'anger', 'angle', 'angry', 'apart', 'apple', 'apply',
    'argue', 'arise', 'aroma', 'array', 'aside', 'asset', 'audio', 'audit',
    'avoid', 'await', 'awake', 'award', 'aware', 'badly', 'baker', 'basic',
    'basis', 'beach', 'begin', 'being', 'below', 'bench', 'birth', 'black',
    'blade', 'blame', 'blank', 'blast', 'blend', 'bless', 'blind', 'block',
    'blood', 'board', 'boost', 'brain', 'brand', 'brave', 'bread', 'break',
    'breed', 'brick', 'brief', 'bring', 'broad', 'brown', 'brush', 'build',
    'bunch', 'buyer', 'cable', 'catch', 'cause', 'chain', 'chair', 'chart',
    'chase', 'cheap', 'check', 'chest', 'chief', 'child', 'chose', 'civic',
    'civil', 'claim', 'class', 'clean', 'clear', 'click', 'climb', 'clock',
    'close', 'cloth', 'cloud', 'coach', 'coast', 'color', 'comic', 'could',
    'count', 'court', 'cover', 'craft', 'crane', 'crash', 'crazy', 'cream',
    'credit', 'crime', 'cross', 'crowd', 'crown', 'crush', 'curve', 'cycle',
    'daily', 'dance', 'death', 'debut', 'delay', 'depth', 'dirty', 'doubt',
    'dozen', 'draft', 'drama', 'drawn', 'dream', 'dress', 'drill', 'drink',
    'drive', 'drove', 'dying', 'eager', 'early', 'earth', 'eight', 'elbow',
    'elder', 'elect', 'elite', 'empty', 'enemy', 'enjoy', 'enter', 'entry',
    'equal', 'error', 'essay', 'event', 'every', 'exact', 'excel', 'exist',
    'extra', 'faith', 'false', 'fault', 'favor', 'fence', 'fever', 'fewer',
    'fiber', 'field', 'fifth', 'fifty', 'fight', 'final', 'first', 'fixed',
    'flame', 'flash', 'fleet', 'flesh', 'float', 'floor', 'flour', 'fluid',
    'focus', 'force', 'forth', 'forty', 'forum', 'found', 'frame', 'frank',
    'fraud', 'fresh', 'front', 'fruit', 'fully', 'funny', 'giant', 'given',
    'glass', 'globe', 'glory', 'grade', 'grain', 'grand', 'grant', 'grape',
    'graph', 'grasp', 'grass', 'great', 'green', 'greet', 'grill', 'gross',
    'group', 'grown', 'guard', 'guess', 'guest', 'guide', 'habit', 'happy',
    'harry', 'harsh', 'heart', 'heavy', 'hence', 'honey', 'honor', 'horse',
    'hotel', 'house', 'human', 'humor', 'hurry', 'ideal', 'image', 'imply',
    'index', 'inner', 'input', 'issue', 'joint', 'jolly', 'judge', 'juice',
    'knife', 'knock', 'known', 'label', 'labor', 'large', 'laser', 'later',
    'laugh', 'layer', 'learn', 'lease', 'least', 'leave', 'legal', 'level',
    'light', 'limit', 'local', 'logic', 'loose', 'lover', 'lower', 'loyal',
    'lucky', 'lunch', 'lying', 'magic', 'major', 'maker', 'marry', 'match',
    'maybe', 'mayor', 'media', 'metal', 'meter', 'might', 'minor', 'minus',
    'mixed', 'model', 'money', 'month', 'moral', 'motor', 'mount', 'mouse',
    'mouth', 'movie', 'music', 'naive', 'nerve', 'never', 'newly', 'night',
    'noise', 'north', 'novel', 'nurse', 'occur', 'ocean', 'offer', 'often',
    'onion', 'opera', 'order', 'other', 'ought', 'owner', 'paint', 'panel',
    'paper', 'party', 'paste', 'patch', 'pause', 'peace', 'phase', 'phone',
    'photo', 'piano', 'piece', 'pilot', 'pitch', 'place', 'plain', 'plane',
    'plant', 'plate', 'point', 'pound', 'power', 'press', 'price', 'pride',
    'prime', 'print', 'prior', 'prize', 'proof', 'proud', 'prove', 'pulse',
    'pupil', 'queen', 'query', 'quest', 'quick', 'quiet', 'quite', 'quote',
    'radio', 'raise', 'range', 'rapid', 'ratio', 'reach', 'react', 'ready',
    'refer', 'relax', 'reply', 'right', 'rival', 'river', 'robot', 'rough',
    'round', 'route', 'royal', 'ruler', 'rural', 'salad', 'salon', 'sauce',
    'scale', 'scare', 'scene', 'scent', 'scope', 'score', 'sense', 'serve',
    'seven', 'shade', 'shake', 'shall', 'shape', 'share', 'sharp', 'sheet',
    'shelf', 'shell', 'shift', 'shine', 'shirt', 'shock', 'shoot', 'shore',
    'short', 'shout', 'shown', 'sight', 'silly', 'since', 'skill', 'sleep',
    'slice', 'slide', 'slope', 'small', 'smart', 'smell', 'smile', 'smoke',
    'solid', 'solve', 'sorry', 'sound', 'south', 'space', 'spare', 'speak',
    'speed', 'spend', 'spent', 'split', 'sport', 'staff', 'stage', 'stair',
    'stake', 'stand', 'start', 'state', 'steak', 'steal', 'steam', 'steel',
    'stick', 'still', 'stock', 'stone', 'stood', 'store', 'storm', 'story',
    'straw', 'strip', 'stuck', 'study', 'stuff', 'style', 'sugar', 'suite',
    'sunny', 'sweet', 'swing', 'table', 'taste', 'teach', 'tense', 'thank',
    'theft', 'their', 'theme', 'there', 'these', 'thick', 'thief', 'thing',
    'think', 'third', 'those', 'three', 'throw', 'thumb', 'tight', 'timer',
    'tired', 'title', 'today', 'tooth', 'topic', 'total', 'touch', 'tough',
    'tower', 'toxic', 'trace', 'track', 'trade', 'trail', 'train', 'treat',
    'trend', 'trial', 'tribe', 'trick', 'troop', 'truck', 'truly', 'trust',
    'truth', 'twice', 'twist', 'uncle', 'under', 'union', 'unite', 'unity',
    'until', 'upper', 'urban', 'usage', 'usual', 'valid', 'value', 'video',
    'virus', 'visit', 'vital', 'voice', 'voter', 'waste', 'watch', 'water',
    'weary', 'weigh', 'weird', 'whale', 'wheat', 'wheel', 'where', 'which',
    'while', 'white', 'whole', 'whose', 'woman', 'world', 'worry', 'worse',
    'worst', 'worth', 'would', 'wound', 'write', 'wrong', 'wrote', 'yield',
    'young', 'youth'
];

const validationWords = [
    'aback', 'abase', 'abate', 'abbey', 'abbot', 'abhor', 'abide', 'abled',
    'abode', 'abort', 'about', 'above', 'abuse', 'abuzz', 'abyss', 'acorn',
    'acrid', 'actor', 'acute', 'adage', 'adapt', 'admit', 'adobe', 'adopt',
    'adore', 'adorn', 'adult', 'aegis', 'affix', 'afire', 'afoot', 'after',
    'again', 'agape', 'agate', 'agent', 'agile', 'aging', 'aglow', 'agony',
    'agree', 'ahead', 'aisle', 'alarm', 'album', 'alert', 'algae', 'alias',
    'alibi', 'alien', 'align', 'alike', 'alive', 'allay', 'alley', 'allot',
    'allow', 'alloy', 'aloft', 'alone', 'along', 'aloud', 'alpha', 'altar',
    'alter', 'amass', 'amaze', 'amber', 'amble', 'amend', 'amiss', 'amity',
    'among', 'ample', 'amply', 'amuse', 'angel', 'anger', 'angle', 'angry',
    'angst', 'anime', 'anion', 'ankle', 'annex', 'annoy', 'annul', 'anode',
    'antic', 'anvil', 'aorta', 'apart', 'aphid', 'aping', 'apnea', 'apple',
    'apply', 'apron', 'aptly', 'arbor', 'ardor', 'areal', 'arena', 'argon',
    'argot', 'argue', 'arise', 'aroma', 'array', 'arrow', 'arson', 'artsy',
    'ascot', 'ashen', 'aside', 'askew', 'assay', 'asset', 'atoll', 'atone',
    'attic', 'audio', 'audit', 'augur', 'aunty', 'avail', 'avert', 'avian',
    'avoid', 'await', 'awake', 'award', 'aware', 'awash', 'awful', 'awoke',
    'axial', 'axiom', 'axion', 'azure', 'bacon', 'badge', 'badly', 'bagel',
    'baggy', 'baker', 'baler', 'balmy', 'banal', 'banjo', 'barge', 'baron',
    'basal', 'basic', 'basil', 'basin', 'basis', 'baste', 'batch', 'bathe',
    'baton', 'bayou', 'beach', 'beady', 'beard', 'beast', 'beech', 'beefy',
    'befit', 'began', 'begat', 'beget', 'begin', 'begun', 'being', 'belch',
    'belie', 'belle', 'belly', 'below', 'bench', 'beret', 'berry', 'berth',
    'beset', 'betel', 'bevel', 'bezel', 'bible', 'bicep', 'biddy', 'bigot',
    'bilge', 'billy', 'binge', 'bingo', 'biome', 'birch', 'birth', 'bison',
    'bitty', 'black', 'blade', 'blame', 'bland', 'blank', 'blare', 'blast',
    'blaze', 'bleak', 'bleat', 'bleed', 'bleep', 'blend', 'bless', 'blimp',
    'blind', 'blink', 'bliss', 'blitz', 'bloat', 'block', 'bloke', 'blond',
    'blood', 'bloom', 'blown', 'bluer', 'bluff', 'blunt', 'blurb', 'blurt',
    'blush', 'board', 'boast', 'bobby', 'boney', 'bongo', 'bonus', 'booby',
    'boost', 'booth', 'booty', 'booze', 'boozy', 'borax', 'bored', 'boron',
    'bosom', 'bossy', 'botch', 'bough', 'boule', 'bound', 'bowel', 'boxer',
    'brace', 'braid', 'brain', 'brake', 'brand', 'brash', 'brass', 'brave',
    'bravo', 'brawl', 'brawn', 'bread', 'break', 'breed', 'briar', 'bribe',
    'brick', 'bride', 'brief', 'brine', 'bring', 'brink', 'briny', 'brisk',
    'broad', 'broil', 'broke', 'brood', 'brook', 'broom', 'broth', 'brown',
    'brunt', 'brush', 'brute', 'buddy', 'budge', 'buggy', 'bugle', 'build',
    'built', 'bulge', 'bulky', 'bully', 'bunch', 'bunny', 'burly', 'burnt',
    'burst', 'bused', 'bushy', 'butch', 'butte', 'buxom', 'buyer', 'bylaw',
    'cabal', 'cabby', 'cabin', 'cable', 'cacao', 'cache', 'cacti', 'caddy',
    'cadet', 'cagey', 'cairn', 'camel', 'cameo', 'canal', 'candy', 'canny',
    'canoe', 'canon', 'caper', 'caput', 'carat', 'cargo', 'carol', 'carry',
    'carve', 'caste', 'catch', 'cater', 'catty', 'caulk', 'cause', 'cavil',
    'cease', 'cedar', 'cello', 'chafe', 'chaff', 'chain', 'chair', 'chalk',
    'champ', 'chant', 'chaos', 'chard', 'charm', 'chart', 'chase', 'chasm',
    'cheap', 'cheat', 'check', 'cheek', 'cheer', 'chess', 'chest', 'chick',
    'chide', 'chief', 'child', 'chili', 'chill', 'chime', 'chimp', 'china',
    'chirp', 'chock', 'choir', 'choke', 'chord', 'chore', 'chose', 'chuck',
    'chump', 'chunk', 'churn', 'chute', 'cider', 'cigar', 'cinch', 'circa',
    'civic', 'civil', 'clack', 'claim', 'clamp', 'clang', 'clank', 'clash',
    'clasp', 'class', 'clean', 'clear', 'cleat', 'cleft', 'clerk', 'click',
    'cliff', 'climb', 'cling', 'clink', 'cloak', 'clock', 'clone', 'close',
    'cloth', 'cloud', 'clout', 'clove', 'clown', 'cluck', 'clued', 'clump',
    'clung', 'coach', 'coast', 'cobra', 'cocoa', 'colon', 'color', 'comet',
    'comfy', 'comic', 'comma', 'conch', 'condo', 'conic', 'copse', 'coral',
    'corer', 'corny', 'couch', 'cough', 'could', 'count', 'coupe', 'court',
    'coven', 'cover', 'covet', 'covey', 'cower', 'coyly', 'crack', 'craft',
    'cramp', 'crane', 'crank', 'crash', 'crass', 'crate', 'crave', 'crawl',
    'craze', 'crazy', 'creak', 'cream', 'credo', 'creed', 'creek', 'creep',
    'creme', 'crepe', 'crept', 'cress', 'crest', 'crick', 'cried', 'crier',
    'crime', 'crimp', 'crisp', 'croak', 'crock', 'crone', 'crony', 'crook',
    'cross', 'croup', 'crowd', 'crown', 'crude', 'cruel', 'crumb', 'crump',
    'crush', 'crust', 'crypt', 'cubic', 'cumin', 'curio', 'curly', 'curry',
    'curse', 'curve', 'curvy', 'cushy', 'cutie', 'cyber', 'cycle', 'cynic',
    'daddy', 'daily', 'dairy', 'daisy', 'dally', 'dance', 'dandy', 'datum',
    'daunt', 'dealt', 'death', 'debar', 'debit', 'debug', 'debut', 'decal',
    'decay', 'decor', 'decoy', 'decry', 'defer', 'deign', 'deity', 'delay',
    'delta', 'delve', 'demon', 'demur', 'denim', 'dense', 'depot', 'depth',
    'derby', 'deter', 'detox', 'deuce', 'devil', 'diary', 'dicey', 'digit',
    'dilly', 'dimly', 'diner', 'dingo', 'dingy', 'diode', 'dirge', 'dirty',
    'disco', 'ditch', 'ditto', 'ditty', 'diver', 'dizzy', 'dodge', 'dodgy',
    'dogma', 'doing', 'dolly', 'donor', 'donut', 'dopey', 'doubt', 'dough',
    'douse', 'dowel', 'downy', 'dowry', 'dozen', 'draft', 'drain', 'drake',
    'drama', 'drank', 'drape', 'drawl', 'drawn', 'dread', 'dream', 'dress',
    'dried', 'drier', 'drift', 'drill', 'drink', 'drive', 'droit', 'droll',
    'drone', 'drool', 'droop', 'dross', 'drove', 'drown', 'druid', 'drunk',
    'dryer', 'dryly', 'duchy', 'dully', 'dummy', 'dumpy', 'dunce', 'dusky',
    'dusty', 'dutch', 'dwarf', 'dwell', 'dwelt', 'dying', 'eager', 'eagle',
    'early', 'earth', 'easel', 'eaten', 'eater', 'ebony', 'eclat', 'edict',
    'edify', 'eerie', 'egret', 'eight', 'eject', 'eking', 'elate', 'elbow',
    'elder', 'elect', 'elegy', 'elfin', 'elide', 'elite', 'elope', 'elude',
    'email', 'embed', 'ember', 'emcee', 'empty', 'enact', 'endow', 'enema',
    'enemy', 'enjoy', 'ennui', 'ensue', 'enter', 'entry', 'envoy', 'epoch',
    'epoxy', 'equal', 'equip', 'erase', 'erect', 'erode', 'error', 'erupt',
    'essay', 'ester', 'ether', 'ethic', 'ethos', 'etude', 'evade', 'event',
    'every', 'evict', 'evoke', 'exact', 'exalt', 'excel', 'exert', 'exile',
    'exist', 'expel', 'extol', 'extra', 'exult', 'eying', 'fable', 'facet',
    'faint', 'fairy', 'faith', 'false', 'fancy', 'fanny', 'farce', 'fatal',
    'fatty', 'fault', 'fauna', 'favor', 'feast', 'fecal', 'feign', 'fella',
    'felon', 'femme', 'femur', 'fence', 'feral', 'ferry', 'fetal', 'fetch',
    'fever', 'fewer', 'fiber', 'ficus', 'field', 'fiend', 'fiery', 'fifth',
    'fifty', 'fight', 'filer', 'filet', 'filly', 'filmy', 'filth', 'final',
    'finch', 'finer', 'first', 'fishy', 'fixed', 'fixer', 'fizzy', 'fjord',
    'flack', 'flail', 'flair', 'flake', 'flaky', 'flame', 'flank', 'flare',
    'flash', 'flask', 'fleck', 'fleet', 'flesh', 'flick', 'flier', 'fling',
    'flint', 'flirt', 'float', 'flock', 'flood', 'floor', 'floss', 'flour',
    'flout', 'flown', 'fluff', 'fluid', 'fluke', 'flume', 'flung', 'flunk',
    'flush', 'flute', 'flyer', 'foamy', 'focal', 'focus', 'foggy', 'foist',
    'folio', 'folly', 'foray', 'force', 'forge', 'forgo', 'forte', 'forth',
    'forty', 'forum', 'found', 'foyer', 'frail', 'frame', 'frank', 'fraud',
    'freak', 'freed', 'freer', 'fresh', 'friar', 'fried', 'frill', 'frisk',
    'fritz', 'frock', 'frond', 'front', 'frost', 'froth', 'frown', 'froze',
    'fruit', 'fudge', 'fugue', 'fully', 'fungi', 'funky', 'funny', 'furor',
    'furry', 'fussy', 'fuzzy', 'gaily', 'gamer', 'gamma', 'gamut', 'gassy',
    'gaudy', 'gauge', 'gaunt', 'gauze', 'gavel', 'gawky', 'gayer', 'gayly',
    'gazer', 'gecko', 'geeky', 'geese', 'genie', 'genre', 'ghost', 'ghoul',
    'giant', 'giddy', 'gipsy', 'girly', 'girth', 'given', 'giver', 'glade',
    'gland', 'glare', 'glass', 'glaze', 'gleam', 'glean', 'glide', 'glint',
    'gloat', 'globe', 'gloom', 'glory', 'gloss', 'glove', 'glyph', 'gnash',
    'gnome', 'godly', 'going', 'golem', 'golly', 'gonad', 'goner', 'goody',
    'gooey', 'goofy', 'goose', 'gorge', 'gouge', 'gourd', 'grace', 'grade',
    'graft', 'grail', 'grain', 'grand', 'grant', 'grape', 'graph', 'grasp',
    'grass', 'grate', 'grave', 'gravy', 'graze', 'great', 'greed', 'green',
    'greet', 'grief', 'grill', 'grime', 'grimy', 'grind', 'gripe', 'groan',
    'groin', 'groom', 'grope', 'gross', 'group', 'grout', 'grove', 'growl',
    'grown', 'gruel', 'gruff', 'grunt', 'guard', 'guava', 'guess', 'guest',
    'guide', 'guild', 'guile', 'guilt', 'guise', 'gulch', 'gully', 'gumbo',
    'gummy', 'guppy', 'gusto', 'gusty', 'gypsy', 'habit', 'hairy', 'halve',
    'handy', 'happy', 'hardy', 'harem', 'harpy', 'harry', 'harsh', 'haste',
    'hasty', 'hatch', 'hater', 'haunt', 'haute', 'haven', 'havoc', 'hazel',
    'heady', 'heard', 'heart', 'heath', 'heave', 'heavy', 'hedge', 'hefty',
    'heist', 'helix', 'hello', 'hence', 'heron', 'hilly', 'hinge', 'hoard',
    'hoary', 'hobby', 'homer', 'honey', 'honor', 'horde', 'horny', 'horse',
    'hotel', 'hotly', 'hound', 'house', 'hovel', 'hover', 'howdy', 'human',
    'humid', 'humor', 'humph', 'humus', 'hunch', 'hunky', 'hurry', 'hushy',
    'hussy', 'hutch', 'hydro', 'hyena', 'hymen', 'hyper', 'icily', 'icing',
    'ideal', 'idiom', 'idiot', 'idler', 'idyll', 'igloo', 'iliac', 'image',
    'imbue', 'impel', 'imply', 'inane', 'inbox', 'incur', 'index', 'inept',
    'inert', 'infer', 'ingot', 'inlay', 'inlet', 'inner', 'input', 'inter',
    'intro', 'ionic', 'irate', 'irony', 'islet', 'issue', 'itchy', 'ivory',
    'jaunt', 'jazzy', 'jelly', 'jerky', 'jetty', 'jewel', 'jiffy', 'joint',
    'joist', 'joker', 'jolly', 'joust', 'judge', 'juice', 'juicy', 'jumbo',
    'jumpy', 'junta', 'junto', 'juror', 'kappa', 'karma', 'kayak', 'kebab',
    'khaki', 'kinky', 'kiosk', 'kitty', 'knack', 'knave', 'knead', 'kneed',
    'kneel', 'knelt', 'knife', 'knock', 'knoll', 'known', 'koala', 'krill',
    'kudos', 'label', 'labor', 'laden', 'ladle', 'lager', 'lance', 'lanky',
    'lapel', 'lapse', 'large', 'larva', 'laser', 'latch', 'later', 'latex',
    'lathe', 'laugh', 'layer', 'leach', 'leafy', 'leaky', 'leant', 'leapt',
    'learn', 'lease', 'leash', 'least', 'leave', 'ledge', 'leech', 'leery',
    'lefty', 'legal', 'leggy', 'lemon', 'lemur', 'leper', 'level', 'lever',
    'libel', 'liege', 'light', 'liken', 'lilac', 'limbo', 'limit', 'linen',
    'liner', 'lingo', 'lipid', 'lithe', 'liver', 'livid', 'llama', 'loamy',
    'loath', 'lobby', 'local', 'locus', 'lodge', 'lofty', 'logic', 'login',
    'loopy', 'loose', 'lorry', 'loser', 'louse', 'lousy', 'lover', 'lower',
    'lowly', 'loyal', 'lucid', 'lucky', 'lucre', 'lumpy', 'lunar', 'lunch',
    'lunge', 'lupus', 'lurch', 'lurid', 'lusty', 'lying', 'lymph', 'lyric',
    'macaw', 'macho', 'macro', 'madam', 'madly', 'mafia', 'magic', 'magma',
    'maize', 'major', 'maker', 'mambo', 'mamma', 'mammy', 'manga', 'mange',
    'mango', 'mangy', 'mania', 'manic', 'manly', 'manor', 'maple', 'march',
    'marry', 'marsh', 'mason', 'masse', 'match', 'matey', 'mauve', 'maxim',
    'maybe', 'mayor', 'mealy', 'meant', 'meaty', 'mecca', 'medal', 'media',
    'medic', 'melee', 'melon', 'mercy', 'merge', 'merit', 'merry', 'metal',
    'meter', 'metro', 'micro', 'midge', 'midst', 'might', 'milky', 'mimic',
    'mince', 'miner', 'minim', 'minor', 'minty', 'minus', 'mirth', 'miser',
    'missy', 'mocha', 'modal', 'model', 'modem', 'mogul', 'moist', 'molar',
    'moldy', 'money', 'month', 'moody', 'moose', 'moral', 'moron', 'morph',
    'mossy', 'motel', 'motif', 'motor', 'motto', 'moult', 'mound', 'mount',
    'mourn', 'mouse', 'mouth', 'mover', 'movie', 'mower', 'mucky', 'mucus',
    'muddy', 'mulch', 'mummy', 'munch', 'mural', 'murky', 'mushy', 'music',
    'musky', 'musty', 'myrrh', 'nadir', 'naive', 'nanny', 'nasal', 'nasty',
    'natal', 'naval', 'needy', 'nerve', 'never', 'newly', 'niche', 'niece',
    'night', 'ninja', 'ninny', 'ninth', 'noble', 'nobly', 'noise', 'noisy',
    'nomad', 'noose', 'north', 'nosey', 'notch', 'novel', 'nudge', 'nurse',
    'nutty', 'nylon', 'nymph', 'oaken', 'obese', 'occur', 'ocean', 'octal',
    'octet', 'odder', 'oddly', 'offal', 'offer', 'often', 'olden', 'older',
    'olive', 'omega', 'onion', 'onset', 'opera', 'opine', 'opium', 'optic',
    'orbit', 'order', 'organ', 'other', 'otter', 'ought', 'ounce', 'outdo',
    'outer', 'outgo', 'ovary', 'ovate', 'overt', 'ovine', 'ovoid', 'owing',
    'owner', 'oxide', 'ozone', 'paddy', 'pagan', 'paint', 'palsy', 'panel',
    'panic', 'pansy', 'papal', 'paper', 'parer', 'parka', 'parry', 'parse',
    'party', 'pasta', 'paste', 'pasty', 'patch', 'patio', 'patsy', 'patty',
    'pause', 'payee', 'payer', 'peace', 'peach', 'pearl', 'pecan', 'pedal',
    'penal', 'pence', 'penne', 'penny', 'perch', 'peril', 'perky', 'pesky',
    'pesto', 'petal', 'phase', 'phone', 'phony', 'photo', 'piano', 'picky',
    'piece', 'piety', 'piggy', 'pilot', 'pinch', 'piney', 'pinky', 'pinto',
    'pious', 'piper', 'pique', 'pitch', 'pithy', 'pivot', 'pixel', 'pixie',
    'pizza', 'place', 'plaid', 'plain', 'plait', 'plane', 'plank', 'plant',
    'plate', 'plaza', 'plead', 'pleat', 'plied', 'plier', 'pluck', 'plumb',
    'plume', 'plump', 'plunk', 'plush', 'poesy', 'point', 'poise', 'poker',
    'pokey', 'polar', 'polka', 'polyp', 'pooch', 'poppy', 'porch', 'poser',
    'posit', 'posse', 'pouch', 'pound', 'pouty', 'power', 'prank', 'prawn',
    'preen', 'press', 'price', 'prick', 'pride', 'pried', 'prime', 'primo',
    'print', 'prior', 'prism', 'privy', 'prize', 'probe', 'prone', 'prong',
    'proof', 'prose', 'proud', 'prove', 'prowl', 'proxy', 'prude', 'prune',
    'psalm', 'pubic', 'pudgy', 'puffy', 'pulpy', 'pulse', 'punch', 'pupal',
    'pupil', 'puppy', 'puree', 'purer', 'purge', 'purse', 'pushy', 'putty',
    'pygmy', 'quack', 'quail', 'quake', 'qualm', 'quark', 'quart', 'quash',
    'quasi', 'queen', 'queer', 'quell', 'query', 'quest', 'queue', 'quick',
    'quiet', 'quill', 'quilt', 'quirk', 'quite', 'quota', 'quote', 'quoth',
    'rabbi', 'rabid', 'racer', 'radar', 'radii', 'radio', 'radon', 'rainy',
    'raise', 'rajah', 'rally', 'ralph', 'ramen', 'ranch', 'randy', 'range',
    'rapid', 'rarer', 'raspy', 'ratio', 'ratty', 'raven', 'rayon', 'razor',
    'reach', 'react', 'ready', 'realm', 'rearm', 'rebar', 'rebel', 'rebus',
    'rebut', 'recap', 'recur', 'recut', 'reedy', 'refer', 'refit', 'regal',
    'rehab', 'reign', 'relax', 'relay', 'relic', 'remit', 'renal', 'renew',
    'repay', 'repel', 'reply', 'rerun', 'reset', 'resin', 'retch', 'retro',
    'retry', 'reuse', 'revel', 'revue', 'rhino', 'rhyme', 'rider', 'ridge',
    'rifle', 'right', 'rigid', 'rigor', 'rinse', 'ripen', 'riper', 'risen',
    'riser', 'risky', 'rival', 'river', 'rivet', 'roach', 'roast', 'robin',
    'robot', 'rocky', 'rodeo', 'roger', 'rogue', 'roomy', 'roost', 'rotor',
    'rouge', 'rough', 'round', 'rouse', 'route', 'rover', 'rowdy', 'rower',
    'royal', 'ruddy', 'ruder', 'rugby', 'ruler', 'rumba', 'rumor', 'rupee',
    'rural', 'rusty', 'sadly', 'safer', 'saint', 'salad', 'sally', 'salon',
    'salsa', 'salty', 'salve', 'salvo', 'sandy', 'saner', 'sappy', 'sassy',
    'satin', 'satyr', 'sauce', 'saucy', 'sauna', 'saute', 'savor', 'savoy',
    'savvy', 'scald', 'scale', 'scalp', 'scaly', 'scamp', 'scant', 'scape',
    'scare', 'scarf', 'scary', 'scene', 'scent', 'scoff', 'scold', 'scone',
    'scoop', 'scoot', 'scope', 'score', 'scorn', 'scour', 'scout', 'scowl',
    'scram', 'scrap', 'scree', 'screw', 'scrub', 'scrum', 'scuba', 'sedan',
    'seedy', 'segue', 'seize', 'senor', 'sense', 'sepia', 'serif', 'serum',
    'serve', 'servo', 'setup', 'seven', 'sever', 'sewer', 'shack', 'shade',
    'shady', 'shaft', 'shake', 'shaky', 'shale', 'shall', 'shalt', 'shame',
    'shank', 'shape', 'shard', 'share', 'shark', 'sharp', 'shave', 'shawl',
    'shear', 'sheen', 'sheep', 'sheer', 'sheet', 'sheik', 'shelf', 'shell',
    'shied', 'shift', 'shine', 'shiny', 'shire', 'shirk', 'shirt', 'shoal',
    'shock', 'shone', 'shook', 'shoot', 'shore', 'shorn', 'short', 'shout',
    'shove', 'shown', 'showy', 'shrew', 'shrub', 'shrug', 'shuck', 'shunt',
    'shush', 'shyly', 'siege', 'sieve', 'sight', 'sigma', 'silky', 'silly',
    'since', 'sinew', 'singe', 'siren', 'sissy', 'sixth', 'sixty', 'skate',
    'skier', 'skiff', 'skill', 'skimp', 'skirt', 'skulk', 'skull', 'skunk',
    'slack', 'slain', 'slang', 'slant', 'slash', 'slate', 'slave', 'sleek',
    'sleep', 'sleet', 'slept', 'slice', 'slick', 'slide', 'slime', 'slimy',
    'sling', 'slink', 'sloop', 'slope', 'slosh', 'sloth', 'slump', 'slung',
    'slunk', 'slurp', 'slush', 'slyly', 'smack', 'small', 'smart', 'smash',
    'smear', 'smell', 'smelt', 'smile', 'smirk', 'smite', 'smith', 'smock',
    'smoke', 'smoky', 'smote', 'snack', 'snail', 'snake', 'snaky', 'snare',
    'snarl', 'sneak', 'sneer', 'snide', 'sniff', 'snipe', 'snoop', 'snore',
    'snort', 'snout', 'snowy', 'snuck', 'snuff', 'soapy', 'sober', 'soggy',
    'solar', 'solid', 'solve', 'sonar', 'sonic', 'sooth', 'sooty', 'sorry',
    'sound', 'south', 'sower', 'space', 'spade', 'spank', 'spare', 'spark',
    'spasm', 'spate', 'spawn', 'speak', 'spear', 'speck', 'speed', 'spell',
    'spelt', 'spend', 'spent', 'sperm', 'spice', 'spicy', 'spied', 'spiel',
    'spike', 'spiky', 'spill', 'spilt', 'spine', 'spiny', 'spire', 'spite',
    'splat', 'split', 'spoil', 'spoke', 'spoof', 'spook', 'spool', 'spoon',
    'spore', 'sport', 'spout', 'spray', 'spree', 'sprig', 'spunk', 'spurn',
    'spurt', 'squad', 'squat', 'squib', 'stack', 'staff', 'stage', 'staid',
    'stain', 'stair', 'stake', 'stale', 'stalk', 'stall', 'stamp', 'stand',
    'stank', 'stare', 'stark', 'start', 'stash', 'state', 'stave', 'stead',
    'steak', 'steal', 'steam', 'steed', 'steel', 'steep', 'steer', 'stein',
    'stern', 'stick', 'stiff', 'still', 'stilt', 'sting', 'stink', 'stint',
    'stock', 'stoic', 'stoke', 'stole', 'stomp', 'stone', 'stony', 'stood',
    'stool', 'stoop', 'store', 'stork', 'storm', 'story', 'stout', 'stove',
    'strap', 'straw', 'stray', 'strip', 'strut', 'stuck', 'study', 'stuff',
    'stump', 'stung', 'stunk', 'stunt', 'style', 'suave', 'sugar', 'suing',
    'suite', 'sulky', 'sully', 'sumac', 'sunny', 'super', 'surer', 'surge',
    'surly', 'sushi', 'swami', 'swamp', 'swarm', 'swash', 'swath', 'swear',
    'sweat', 'sweep', 'sweet', 'swell', 'swept', 'swift', 'swill', 'swine',
    'swing', 'swirl', 'swish', 'swoon', 'swoop', 'sword', 'swore', 'sworn',
    'swung', 'synod', 'syrup', 'tabby', 'table', 'taboo', 'tacit', 'tacky',
    'taffy', 'taint', 'taken', 'taker', 'tally', 'talon', 'tamer', 'tango',
    'tangy', 'taper', 'tapir', 'tardy', 'tarot', 'taste', 'tasty', 'tatty',
    'taunt', 'tawny', 'teach', 'teary', 'tease', 'teddy', 'teeny', 'teeth',
    'tempo', 'tenet', 'tenor', 'tense', 'tenth', 'tepee', 'tepid', 'terra',
    'terse', 'testy', 'thank', 'theft', 'their', 'theme', 'there', 'these',
    'theta', 'thick', 'thief', 'thigh', 'thing', 'think', 'third', 'thong',
    'thorn', 'those', 'three', 'threw', 'throb', 'throw', 'thrum', 'thumb',
    'thump', 'thyme', 'tiara', 'tibia', 'tidal', 'tiger', 'tight', 'tilde',
    'timer', 'timid', 'tinge', 'tipsy', 'tired', 'titan', 'tithe', 'title',
    'toast', 'today', 'toddy', 'token', 'tonal', 'tonga', 'tonic', 'tooth',
    'topaz', 'topic', 'torch', 'torso', 'torus', 'total', 'touch', 'tough',
    'towel', 'tower', 'toxic', 'toxin', 'trace', 'track', 'tract', 'trade',
    'trail', 'train', 'trait', 'tramp', 'trash', 'trawl', 'tread', 'treat',
    'trend', 'triad', 'trial', 'tribe', 'trice', 'trick', 'tried', 'tripe',
    'trite', 'troll', 'troop', 'trope', 'trout', 'trove', 'truce', 'truck',
    'truer', 'truly', 'trump', 'trunk', 'truss', 'trust', 'truth', 'tryst',
    'tubal', 'tuber', 'tulip', 'tulle', 'tumor', 'tunic', 'turbo', 'tutor',
    'twang', 'tweak', 'tweed', 'tweet', 'twice', 'twine', 'twirl', 'twist',
    'twixt', 'tying', 'udder', 'ulcer', 'ultra', 'umbra', 'uncle', 'uncut',
    'under', 'undid', 'undue', 'unfed', 'unfit', 'unify', 'union', 'unite',
    'unity', 'unlit', 'unmet', 'unset', 'untie', 'until', 'unwed', 'unzip',
    'upper', 'upset', 'urban', 'urine', 'usage', 'usher', 'usual', 'usurp',
    'utile', 'utter', 'vague', 'valet', 'valid', 'valor', 'value', 'valve',
    'vapid', 'vapor', 'vault', 'vaunt', 'vegan', 'venom', 'venue', 'verge',
    'verse', 'verso', 'verve', 'vicar', 'video', 'vigil', 'vigor', 'villa',
    'vinyl', 'viola', 'viper', 'viral', 'virus', 'visit', 'visor', 'vista',
    'vital', 'vivid', 'vixen', 'vocal', 'vodka', 'vogue', 'voice', 'voila',
    'vomit', 'voter', 'vouch', 'vowel', 'vying', 'wacky', 'wader', 'wafer',
    'wager', 'wagon', 'waist', 'waive', 'waltz', 'warty', 'waste', 'watch',
    'water', 'waver', 'waxy', 'weary', 'weave', 'wedge', 'weedy', 'weigh',
    'weird', 'welch', 'welsh', 'whack', 'whale', 'wharf', 'wheat', 'wheel',
    'whelp', 'where', 'which', 'whiff', 'while', 'whine', 'whiny', 'whirl',
    'whisk', 'white', 'whole', 'whoop', 'whose', 'widen', 'wider', 'widow',
    'width', 'wield', 'wight', 'willy', 'wimpy', 'wince', 'winch', 'windy',
    'wiser', 'wispy', 'witch', 'witty', 'woken', 'woman', 'women', 'woody',
    'wooer', 'wooly', 'woozy', 'wordy', 'world', 'worry', 'worse', 'worst',
    'worth', 'would', 'wound', 'woven', 'wrack', 'wrath', 'wreak', 'wreck',
    'wrest', 'wring', 'wrist', 'write', 'wrong', 'wrote', 'wrung', 'wryly',
    'yacht', 'yearn', 'yeast', 'yield', 'yodel', 'yokel', 'young', 'youth',
    'zebra', 'zesty', 'zonal'
];

let randomNumber = Math.floor(Math.random() * fiveLetterWords.length)

health.innerText = healthPoint
correctSum.innerText = correctTimes
wrongSum.innerText = wrongTimes
const result = () => {
    message.innerText = ''
    if(input.value.length < 5){
        message.innerText = "Please input 5 length word"
        return
    } else if(validationWords.includes(input.value.toLowerCase()) === false) {
        message.innerText = "Please input proper word"
        return
    }
    if(healthPoint === 0){
        message.innerText = "You already lose!"
        return
    }
    
    healthPoint -= 1
    health.innerText = healthPoint

    const quiz = fiveLetterWords[randomNumber]
    let benar = 0
    let cekDouble = 0
    for(let i = 0; i < 5; i++){
        for(let j = 0; j < 5; j++){
            if(input.value[i].toLowerCase() === quiz[j] && i === j){
                benar += 1
                document.getElementById(`box${i+1}`).innerHTML += correct(input.value[i])
                cekDouble = 0
                break
            } else if(input.value[i].toLowerCase() === quiz[j] && i !== j){
                cekDouble += 1
            } else if(j === 4 && cekDouble === 0) {
                document.getElementById(`box${i+1}`).innerHTML += wrong(input.value[i])
            }
        }
        if(cekDouble > 0){
            document.getElementById(`box${i+1}`).innerHTML += halfCorrect(input.value[i])
        }
        cekDouble = 0
    }
    input.value = ''
    if(benar === 5){
        menang.style.display = 'flex'
        correctTimes += 1
        correctSum.innerText = correctTimes
        isOver = true
        return
    }
    if(healthPoint === 0){
        kalah.style.display = 'flex'
        let i = 0
        const reveal = () => {
            if(i < 5){
                document.getElementById(`g${i+1}`).innerHTML = answer(quiz[i])
                i++
            }
            setTimeout(reveal, 1)
        }
        setTimeout(reveal, 1)
        wrongTimes += 1
        wrongSum.innerText = wrongTimes
        isOver = true
        return
    }
}

const correct = (char) => {
    return `<div class="bg-green-600 h-10 w-10 rounded-sm flex mx-0.5 my-1"><p class="my-auto mx-auto">${char.toUpperCase()}</p></div>`
}

const halfCorrect = (char) => {
    return `<div class="bg-yellow-500 h-10 w-10 rounded-sm flex mx-0.5 my-1"><p class="my-auto mx-auto">${char.toUpperCase()}</p></div>`
}

const wrong = (char) => {
    return `<div class="bg-red-700 h-10 w-10 rounded-sm flex mx-0.5 my-1"><p class="my-auto mx-auto">${char.toUpperCase()}</p></div>`
}

const answer = (char) => {
    return `<div class="bg-green-600 h-10 w-10 rounded-sm flex"><p class="my-auto mx-auto">${char.toUpperCase()}</p></div>`
}

wordBtn.addEventListener('click', result)

let isOver = false

input.addEventListener('keydown', (e) => {
    if(e.key === 'Enter' && isOver === false){
        result()
    } else if(e.key === 'Enter' && isOver === true) {
        isOver = false
        reset()
    }
})

const reset = () => {
    healthPoint = 6
    health.innerText = healthPoint
    for(let i = 0; i < 5; i++){
        document.getElementById(`box${i+1}`).innerHTML = ''
        document.getElementById(`g${i+1}`).innerHTML = ''
    }
    menang.style.display = 'none'
    kalah.style.display = 'none'
    message.innerText = ''
    randomNumber = Math.floor(Math.random() * fiveLetterWords.length)
}

resetBtn.addEventListener('click', reset)
resetBtn1.addEventListener('click', reset)