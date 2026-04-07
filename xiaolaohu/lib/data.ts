export type Category = {
  slug: string;
  nameZh: string;
  nameEn: string;
  descriptionZh: string;
  descriptionEn: string;
  icon: string;
  color: string;
};

export type Article = {
  slug: string;
  category: string;
  titleZh: string;
  titleEn: string;
  excerptZh: string;
  excerptEn: string;
  contentZh: string;
  contentEn: string;
  author: string;
  date: string;
  readTimeZh: string;
  readTimeEn: string;
  tags: string[];
};

export const categories: Category[] = [
  {
    slug: "育儿经",
    nameZh: "育儿经",
    nameEn: "Parenting Tips",
    descriptionZh: "实用育儿经验与技巧",
    descriptionEn: "Practical parenting experience and tips",
    icon: "👶",
    color: "bg-orange-50 text-orange-700 border-orange-200",
  },
  {
    slug: "成长记录",
    nameZh: "成长记录",
    nameEn: "Growth Journal",
    descriptionZh: "记录小老虎的成长点滴",
    descriptionEn: "Milestones and memories of little tiger",
    icon: "📸",
    color: "bg-yellow-50 text-yellow-700 border-yellow-200",
  },
  {
    slug: "亲子活动",
    nameZh: "亲子活动",
    nameEn: "Family Activities",
    descriptionZh: "好玩有趣的亲子互动游戏",
    descriptionEn: "Fun activities and games for families",
    icon: "🎮",
    color: "bg-green-50 text-green-700 border-green-200",
  },
  {
    slug: "健康宝贝",
    nameZh: "健康宝贝",
    nameEn: "Baby Health",
    descriptionZh: "宝宝健康护理与常见问题",
    descriptionEn: "Baby health care and common questions",
    icon: "🏥",
    color: "bg-blue-50 text-blue-700 border-blue-200",
  },
  {
    slug: "美食营养",
    nameZh: "美食营养",
    nameEn: "Nutrition",
    descriptionZh: "宝宝辅食与营养搭配",
    descriptionEn: "Baby food and nutrition guide",
    icon: "🥗",
    color: "bg-purple-50 text-purple-700 border-purple-200",
  },
];

export const articles: Article[] = [
  {
    slug: "first-year-milestones",
    category: "成长记录",
    titleZh: "小老虎的第一年：那些让我泪目的里程碑",
    titleEn: "Little Tiger's First Year: Milestones That Made Me Cry",
    excerptZh: "从第一次翻身到第一步走路，记录下小老虎这一年来每一个让妈妈又哭又笑的瞬间。",
    excerptEn: "From the first rollover to the first steps, documenting every milestone that made this mama both laugh and cry.",
    contentZh: `<h2>第一次翻身（3个月）</h2>
<p>那是一个普通的下午，我把小老虎放在地垫上，转身去拿手机准备拍照，结果一回头——他已经翻过来了！我激动得差点把手机摔了。</p>
<p>翻身是宝宝大运动发展的重要里程碑，通常在3-5个月之间完成。每个宝宝都有自己的节奏，不需要和别人家的宝宝比较。</p>
<h2>第一声"妈妈"（8个月）</h2>
<p>严格来说，那个"妈妈"可能只是无意识的发音，但我愿意把它记录成他叫我的第一声。那天晚上我哭了好久，是幸福的眼泪。</p>
<h2>第一步走路（11个月）</h2>
<p>小老虎比很多宝宝走得早一点。他在客厅里扶着沙发站起来，然后松开手，摇摇晃晃地走了两步，然后坐倒了——但他笑着，我也笑着。</p>
<ul>
<li>第1个月：会追视移动的物体</li>
<li>第3个月：俯趴抬头，翻身</li>
<li>第6个月：独坐片刻，认识妈妈</li>
<li>第9个月：扶站，爬行</li>
<li>第12个月：迈出第一步</li>
</ul>
<p>每一个里程碑都是宝宝努力的结果，也是我们陪伴的见证。</p>`,
    contentEn: `<h2>First Rollover (3 months)</h2>
<p>It was an ordinary afternoon. I set Little Tiger on the play mat, turned to grab my phone to take a photo — and when I turned back, he had already flipped over! I nearly dropped my phone in excitement.</p>
<p>Rolling over is a key gross motor milestone, typically achieved between 3-5 months. Every baby has their own pace — no need to compare with others.</p>
<h2>First "Mama" (8 months)</h2>
<p>Technically, that "mama" might have been just a random babble — but I'm recording it as the first time he called for me. I cried that night, happy tears.</p>
<h2>First Steps (11 months)</h2>
<p>Little Tiger walked a bit earlier than many babies. He pulled himself up against the sofa, let go, took two wobbly steps, then sat down — but he was smiling, and so was I.</p>
<ul>
<li>Month 1: Tracks moving objects with eyes</li>
<li>Month 3: Lifts head during tummy time, rolls over</li>
<li>Month 6: Sits briefly, recognizes mom</li>
<li>Month 9: Pulls to stand, crawls</li>
<li>Month 12: Takes first steps</li>
</ul>
<p>Every milestone is the result of your baby's hard work — and proof of your presence by their side.</p>`,
    author: "鸣鸣妈妈 / MingMing's Mom",
    date: "2025-03-10",
    readTimeZh: "5分钟",
    readTimeEn: "5 min read",
    tags: ["里程碑", "第一年", "成长"],
  },
  {
    slug: "sleep-training-our-story",
    category: "育儿经",
    titleZh: "睡眠训练：我们的血泪史与最终的安宁",
    titleEn: "Sleep Training: Our Tearful Journey to Peaceful Nights",
    excerptZh: "从每晚醒来七八次到整觉到天亮，我们用了三个月。这里是我们的真实经历，没有美化。",
    excerptEn: "From waking 7-8 times a night to sleeping through — it took us three months. Here's our honest story, no sugarcoating.",
    contentZh: `<h2>为什么我们决定做睡眠训练</h2>
<p>小老虎四个月的时候，我已经严重睡眠不足。他每晚醒来七八次，每次都要喂奶才能重新入睡。我知道这不可持续。</p>
<h2>我们尝试的方法</h2>
<p>我们先后尝试了：</p>
<ul>
<li><strong>Fading法（渐进撤退）</strong>：妈妈慢慢从床边移到房间外，每次哄睡时都离宝宝远一点</li>
<li><strong>Pick Up Put Down法</strong>：宝宝哭了就抱起来安抚，安静后放下，如此反复</li>
<li><strong>改善睡眠环境</strong>：遮光窗帘、白噪音机、固定睡前程序</li>
</ul>
<h2>转折点</h2>
<p>第六周，某个周五晚上，小老虎第一次连续睡了五个小时。我从睡梦中醒来，以为出了什么事，飞奔去看他——他睡得香甜，根本不需要我。</p>
<h2>给还在煎熬中的妈妈们</h2>
<p>没有一种方法适合所有孩子。要相信你最了解自己的宝宝。如果你觉得某种方法不适合你们，就换一种。最重要的是：这个阶段会过去的。</p>`,
    contentEn: `<h2>Why We Decided to Sleep Train</h2>
<p>When Little Tiger was four months old, I was severely sleep-deprived. He woke 7-8 times a night, needing to nurse each time to fall back asleep. I knew this wasn't sustainable.</p>
<h2>Methods We Tried</h2>
<ul>
<li><strong>Fading / Chair Method</strong>: Gradually moving further from the crib each night until I was outside the room</li>
<li><strong>Pick Up Put Down</strong>: Picking up when crying, setting down once calm, repeating</li>
<li><strong>Sleep environment</strong>: Blackout curtains, white noise machine, consistent bedtime routine</li>
</ul>
<h2>The Turning Point</h2>
<p>Week six, on a Friday night, Little Tiger slept five consecutive hours for the first time. I woke up in a panic, rushed to check on him — he was sleeping soundly, didn't need me at all.</p>
<h2>To the Moms Still in the Trenches</h2>
<p>No single method works for every child. Trust that you know your baby best. If something doesn't feel right, switch approaches. Most importantly: this phase will pass.</p>`,
    author: "鸣鸣妈妈 / MingMing's Mom",
    date: "2025-03-15",
    readTimeZh: "7分钟",
    readTimeEn: "7 min read",
    tags: ["睡眠训练", "育儿", "新手妈妈"],
  },
  {
    slug: "baby-led-weaning-start",
    category: "美食营养",
    titleZh: "我们的宝宝主导辅食之路：从糊糊到自己拿饭吃",
    titleEn: "Our Baby-Led Weaning Journey: From Purees to Self-Feeding",
    excerptZh: "六个月开始尝试BLW（宝宝主导辅食），经历了满地狼藉、反复尝试，最终养成了不挑食的小老虎。",
    excerptEn: "Starting BLW at six months — through the mess, the refusals, and finally a little tiger who eats almost everything.",
    contentZh: `<h2>什么是宝宝主导辅食（BLW）</h2>
<p>BLW（Baby-Led Weaning）是指从添加辅食开始，就让宝宝自己拿着食物吃，而不是用勺子喂泥状食物。宝宝可以自己探索食物的形状、质地和味道。</p>
<h2>我们的第一口辅食</h2>
<p>小老虎的第一口辅食是蒸熟的西兰花，切成方便他小手抓握的长条形。他先是好奇地看了好久，然后用牙龈咬了一口，吐出来，又捡起来再咬……总之很混乱，但他很开心。</p>
<h2>适合BLW的食物</h2>
<ul>
<li>蔬菜：蒸熟的胡萝卜条、西兰花、南瓜</li>
<li>水果：香蕉段、牛油果</li>
<li>主食：软米饭、意大利面</li>
<li>蛋白质：炒鸡蛋、豆腐</li>
</ul>
<h2>注意事项</h2>
<p>BLW不适合所有家庭，需要家长全程看护，食物要足够软烂，避免呛咳风险。在开始之前，建议学习婴儿急救知识。</p>`,
    contentEn: `<h2>What Is Baby-Led Weaning (BLW)?</h2>
<p>BLW means offering soft finger foods from the start of solids, letting your baby self-feed rather than being spoon-fed purees. Babies explore food's shape, texture, and taste on their own terms.</p>
<h2>Our First Bite</h2>
<p>Little Tiger's first food was steamed broccoli, cut into easy-to-grip florets. He stared at it for a long time, then gummed it, spat it out, picked it back up, and tried again. Chaotic — but he was delighted.</p>
<h2>Great BLW Foods to Start</h2>
<ul>
<li>Vegetables: Steamed carrot sticks, broccoli, butternut squash</li>
<li>Fruits: Banana pieces, avocado slices</li>
<li>Grains: Soft rice, cooked pasta</li>
<li>Protein: Scrambled eggs, soft tofu</li>
</ul>
<h2>Important Cautions</h2>
<p>BLW requires constant adult supervision. Food must be soft enough to squish between fingers. Before starting, learn infant first aid and the difference between gagging (normal) and choking.</p>`,
    author: "鸣鸣妈妈 / MingMing's Mom",
    date: "2025-03-20",
    readTimeZh: "6分钟",
    readTimeEn: "6 min read",
    tags: ["辅食", "BLW", "营养"],
  },
  {
    slug: "rainy-day-activities",
    category: "亲子活动",
    titleZh: "下雨天不出门！10个在家就能玩的亲子活动",
    titleEn: "Stuck Inside? 10 Fun Indoor Activities for Rainy Days",
    excerptZh: "连续下了好几天雨，小老虎在家待不住了。我们一起整理了这些简单易操作的室内亲子游戏。",
    excerptEn: "Several rainy days in a row, and little tiger was bouncing off the walls. Here are the indoor activities that saved us.",
    contentZh: `<h2>感官探索类</h2>
<ul>
<li><strong>水盆玩水</strong>：在澡盆里放少量温水，给宝宝各种容器、漏勺，让他自由探索。准备好换衣服就行。</li>
<li><strong>面粉黏土</strong>：用面粉、盐、水做天然黏土，安全无毒，宝宝可以捏、压、搓。</li>
<li><strong>大米感官箱</strong>：一个大盒子装大米，配上小勺子、量杯，宝宝能玩半天。</li>
</ul>
<h2>运动类</h2>
<ul>
<li><strong>枕头堡垒</strong>：用沙发垫和枕头搭一个城堡，钻进去钻出来。</li>
<li><strong>纸板隧道</strong>：大纸箱剪开连接成隧道，宝宝爬进爬出。</li>
</ul>
<h2>艺术类</h2>
<ul>
<li><strong>手指画</strong>：用食用色素或无毒颜料，让宝宝直接用手画。</li>
<li><strong>贴纸书</strong>：各种主题的贴纸书，锻炼手指精细动作。</li>
</ul>
<h2>认知类</h2>
<ul>
<li><strong>翻翻书</strong>：让宝宝自己翻，讲里面的故事。</li>
<li><strong>配对游戏</strong>：把家里的锅盖和锅配对，找找哪个盖子配哪个锅。</li>
<li><strong>躲猫猫变奏</strong>：把玩具藏在毯子下面，让宝宝找。</li>
</ul>`,
    contentEn: `<h2>Sensory Play</h2>
<ul>
<li><strong>Water play</strong>: A small amount of warm water in the tub with cups, funnels, and spoons. Just prepare a spare outfit.</li>
<li><strong>Homemade play dough</strong>: Flour, salt, and water make a safe, non-toxic dough for squishing and rolling.</li>
<li><strong>Rice sensory bin</strong>: A big container of uncooked rice with spoons and measuring cups — babies can play for 30+ minutes.</li>
</ul>
<h2>Active Play</h2>
<ul>
<li><strong>Pillow fort</strong>: Stack couch cushions and pillows into a fortress. Crawl in, crawl out, repeat.</li>
<li><strong>Cardboard tunnel</strong>: Connect two large boxes into a crawl-through tunnel.</li>
</ul>
<h2>Creative Play</h2>
<ul>
<li><strong>Finger painting</strong>: Use food colouring or non-toxic paint for direct hand-to-paper art.</li>
<li><strong>Sticker books</strong>: Great for fine motor development — peeling and placing stickers.</li>
</ul>
<h2>Cognitive Play</h2>
<ul>
<li><strong>Lift-the-flap books</strong>: Let baby control the pages and tell the story together.</li>
<li><strong>Lid matching</strong>: Match pot lids to pots — surprisingly engaging.</li>
<li><strong>Hide and seek with toys</strong>: Hide a toy under a blanket and let baby find it.</li>
</ul>`,
    author: "鸣鸣妈妈 / MingMing's Mom",
    date: "2025-03-25",
    readTimeZh: "5分钟",
    readTimeEn: "5 min read",
    tags: ["亲子活动", "室内游戏", "感官"],
  },
  {
    slug: "fever-management-baby",
    category: "健康宝贝",
    titleZh: "宝宝发烧不要慌：退烧的正确打开方式",
    titleEn: "Baby Fever: Stay Calm and Do This",
    excerptZh: "小老虎第一次发烧，我慌得不行。后来才知道，大多数发烧其实是身体在正常工作。",
    excerptEn: "Little Tiger's first fever had me in a panic. What I learned: most fevers are actually the body doing its job.",
    contentZh: `<h2>什么温度算发烧？</h2>
<p>肛温38°C以上即为发烧。腋温比肛温低约0.5°C，耳温计和额温计各有误差，建议以肛温为准，或使用腋温+0.5°C换算。</p>
<h2>什么时候需要立刻就医？</h2>
<ul>
<li>3个月以下婴儿，肛温≥38°C</li>
<li>任何年龄，体温超过40°C</li>
<li>发烧伴随皮疹、颈部僵硬、极度嗜睡、呼吸困难</li>
<li>发烧超过48小时</li>
<li>宝宝状态非常差，精神萎靡</li>
</ul>
<h2>物理降温方法</h2>
<p>温水擦浴（不要用冷水或酒精）可以帮助散热。保持室内通风，给宝宝穿轻薄的衣服。多补充水分。</p>
<h2>退烧药使用</h2>
<p>对乙酰氨基酚（泰诺林）适合3个月以上宝宝；布洛芬适合6个月以上。按宝宝体重计算剂量，不要两种药同时用，也不要超量。</p>
<h2>妈妈的经验</h2>
<p>小老虎第一次发烧38.5°C，我们没有用药，就是给他多喂水，穿少一点，开了空调。半天后自己退了。记住，发烧本身不是坏事，是免疫系统在战斗。</p>`,
    contentEn: `<h2>What Temperature Counts as a Fever?</h2>
<p>A rectal temperature of 38°C (100.4°F) or above is a fever. Armpit temperature runs about 0.5°C lower. Rectal is most accurate for babies; add 0.5°C to armpit readings.</p>
<h2>When to Seek Immediate Medical Care</h2>
<ul>
<li>Any baby under 3 months with rectal temp ≥38°C</li>
<li>Temperature above 40°C (104°F) at any age</li>
<li>Fever with rash, stiff neck, extreme lethargy, or breathing difficulty</li>
<li>Fever lasting more than 48 hours</li>
<li>Baby looks very unwell or unusually unresponsive</li>
</ul>
<h2>Physical Cooling</h2>
<p>Lukewarm (not cold) sponging can help. Keep the room ventilated, dress baby lightly, and offer frequent fluids.</p>
<h2>Fever-Reducing Medication</h2>
<p>Acetaminophen (Paracetamol) is safe from 3 months; Ibuprofen from 6 months. Dose by weight, not age. Don't use both at the same time, and never exceed the recommended dose.</p>
<h2>Our Experience</h2>
<p>Little Tiger's first fever hit 38.5°C. We skipped medication, offered extra fluids, dressed him lightly, and turned on the AC. It resolved on its own within half a day. A fever is the immune system fighting — that's a good thing.</p>`,
    author: "鸣鸣妈妈 / MingMing's Mom",
    date: "2025-04-01",
    readTimeZh: "6分钟",
    readTimeEn: "6 min read",
    tags: ["发烧", "健康", "急救知识"],
  },
  {
    slug: "postpartum-recovery-real-talk",
    category: "育儿经",
    titleZh: "产后那些没人告诉你的事",
    titleEn: "What Nobody Tells You About Postpartum Recovery",
    excerptZh: "怀孕十月，然后宝宝出生了——但没有人告诉我，妈妈自己也需要「重生」。",
    excerptEn: "Ten months of pregnancy, then the baby arrives — but nobody told me the mother also needs to be reborn.",
    contentZh: `<h2>身体的变化</h2>
<p>产后的身体和你想象的不一样。不是「生完就好了」，而是一个需要认真对待的恢复过程。脱发、关节松弛、漏尿——这些都是真实存在的，而且持续时间比你想象的更长。</p>
<h2>情绪的过山车</h2>
<p>产后激素骤降，加上睡眠不足，情绪波动是完全正常的。我记得有一次因为宝宝不肯喝奶哭了整整一个下午——哭的是我，不是宝宝。</p>
<p>如果情绪低落持续超过两周，并影响到日常生活，请认真考虑寻求专业帮助。产后抑郁是真实的疾病，不是软弱。</p>
<h2>关于哺乳</h2>
<p>母乳喂养没有你想象的那么「自然」，它是一项需要学习的技能。乳头皲裂、堵奶、乳腺炎……都是很多妈妈经历过的。如果遇到困难，找哺乳顾问（IBCLC）寻求帮助。</p>
<h2>给自己的建议</h2>
<ul>
<li>降低对自己的期待——乱点没关系，饭没做没关系</li>
<li>接受帮助，让家人分担</li>
<li>照顾好自己，才能更好地照顾宝宝</li>
<li>和其他妈妈交流，你不是一个人</li>
</ul>`,
    contentEn: `<h2>Physical Changes</h2>
<p>Your postpartum body isn't what you imagined. Recovery is a serious process that deserves serious attention — not "you'll bounce right back." Hair loss, loose joints, bladder leakage — these are real, and they last longer than anyone warns you.</p>
<h2>The Emotional Rollercoaster</h2>
<p>Hormones plummeting plus sleep deprivation equals extreme emotional swings — completely normal. I remember crying for an entire afternoon because the baby wouldn't latch. The crying was me, not him.</p>
<p>If low mood persists beyond two weeks and affects daily functioning, please seek professional support. Postpartum depression is a real condition, not a weakness.</p>
<h2>About Breastfeeding</h2>
<p>Breastfeeding is not the instinctive, easy thing it's portrayed as — it's a skill that must be learned. Cracked nipples, blocked ducts, mastitis — many mothers go through these. If you're struggling, an IBCLC lactation consultant can genuinely help.</p>
<h2>Advice to Myself (and You)</h2>
<ul>
<li>Lower your expectations — a messy house is fine, skipping cooking is fine</li>
<li>Accept help and let family share the load</li>
<li>Taking care of yourself is taking care of your baby</li>
<li>Talk to other moms — you are not alone</li>
</ul>`,
    author: "鸣鸣妈妈 / MingMing's Mom",
    date: "2025-04-05",
    readTimeZh: "8分钟",
    readTimeEn: "8 min read",
    tags: ["产后恢复", "新手妈妈", "心理健康"],
  },
];

export function getArticlesByCategory(slug: string): Article[] {
  return articles.filter((a) => a.category === slug);
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getFeaturedArticles(count = 6): Article[] {
  return [...articles]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
}
