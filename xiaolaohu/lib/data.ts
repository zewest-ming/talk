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
    descriptionZh: "记录小老虎的成长点滴与发育里程碑",
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
    descriptionZh: "宝宝健康护理与常见问题解答",
    descriptionEn: "Baby health care and common questions",
    icon: "🏥",
    color: "bg-blue-50 text-blue-700 border-blue-200",
  },
  {
    slug: "美食营养",
    nameZh: "美食营养",
    nameEn: "Nutrition",
    descriptionZh: "宝宝辅食、营养搭配与饮食指南",
    descriptionEn: "Baby food and nutrition guide",
    icon: "🥗",
    color: "bg-purple-50 text-purple-700 border-purple-200",
  },
  {
    slug: "孕育新生",
    nameZh: "孕育新生",
    nameEn: "Pregnancy & Newborn",
    descriptionZh: "孕期指南、新生儿护理与产后恢复",
    descriptionEn: "Pregnancy guide, newborn care and postpartum recovery",
    icon: "🤰",
    color: "bg-pink-50 text-pink-700 border-pink-200",
  },
  {
    slug: "安全防护",
    nameZh: "安全防护",
    nameEn: "Child Safety",
    descriptionZh: "家居安全、户外防护与意外预防",
    descriptionEn: "Home safety, outdoor protection and accident prevention",
    icon: "🛡️",
    color: "bg-red-50 text-red-700 border-red-200",
  },
  {
    slug: "生活随笔",
    nameZh: "生活随笔",
    nameEn: "Life Notes",
    descriptionZh: "生活观察、个人感悟与社会思考",
    descriptionEn: "Life observations, personal reflections and social commentary",
    icon: "✍️",
    color: "bg-indigo-50 text-indigo-700 border-indigo-200",
  },
  {
    slug: "科技AI",
    nameZh: "科技AI",
    nameEn: "Tech & AI",
    descriptionZh: "人工智能、数码科技与未来趋势",
    descriptionEn: "Artificial intelligence, technology and future trends",
    icon: "🤖",
    color: "bg-cyan-50 text-cyan-700 border-cyan-200",
  },
  {
    slug: "文化娱乐",
    nameZh: "文化娱乐",
    nameEn: "Culture & Entertainment",
    descriptionZh: "影视品评、历史人文与文化随笔",
    descriptionEn: "Film reviews, history and cultural essays",
    icon: "🎭",
    color: "bg-amber-50 text-amber-700 border-amber-200",
  },
];

export const articles: Article[] = [
  // ── 原创文章 ──────────────────────────────────────────
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
<ul>
<li><strong>Fading法（渐进撤退）</strong>：妈妈慢慢从床边移到房间外，每次哄睡时都离宝宝远一点</li>
<li><strong>Pick Up Put Down法</strong>：宝宝哭了就抱起来安抚，安静后放下，如此反复</li>
<li><strong>改善睡眠环境</strong>：遮光窗帘、白噪音机、固定睡前程序</li>
</ul>
<h2>转折点</h2>
<p>第六周，某个周五晚上，小老虎第一次连续睡了五个小时。我从睡梦中醒来，以为出了什么事，飞奔去看他——他睡得香甜，根本不需要我。</p>
<h2>给还在煎熬中的妈妈们</h2>
<p>没有一种方法适合所有孩子。要相信你最了解自己的宝宝。最重要的是：这个阶段会过去的。</p>`,
    contentEn: `<h2>Why We Decided to Sleep Train</h2>
<p>When Little Tiger was four months old, I was severely sleep-deprived. He woke 7-8 times a night, needing to nurse each time to fall back asleep.</p>
<ul>
<li><strong>Fading / Chair Method</strong>: Gradually moving further from the crib each night</li>
<li><strong>Pick Up Put Down</strong>: Picking up when crying, setting down once calm, repeating</li>
<li><strong>Sleep environment</strong>: Blackout curtains, white noise machine, consistent bedtime routine</li>
</ul>
<h2>The Turning Point</h2>
<p>Week six, Little Tiger slept five consecutive hours for the first time. I woke in a panic — he was sleeping soundly, didn't need me at all.</p>
<h2>To the Moms Still in the Trenches</h2>
<p>No single method works for every child. Trust that you know your baby best. This phase will pass.</p>`,
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
    excerptZh: "六个月开始尝试BLW，经历了满地狼藉、反复尝试，最终养成了不挑食的小老虎。",
    excerptEn: "Starting BLW at six months — through the mess, the refusals, and finally a little tiger who eats almost everything.",
    contentZh: `<h2>什么是宝宝主导辅食（BLW）</h2>
<p>BLW让宝宝从一开始就自己拿着食物吃，而不是用勺子喂泥状食物，让宝宝自己探索食物的形状、质地和味道。</p>
<h2>我们的第一口辅食</h2>
<p>小老虎的第一口辅食是蒸熟的西兰花。他先是好奇地看了好久，然后用牙龈咬了一口，吐出来，又捡起来再咬……总之很混乱，但他很开心。</p>
<h2>适合BLW的食物</h2>
<ul>
<li>蔬菜：蒸熟的胡萝卜条、西兰花、南瓜</li>
<li>水果：香蕉段、牛油果</li>
<li>主食：软米饭、意大利面</li>
<li>蛋白质：炒鸡蛋、豆腐</li>
</ul>
<p>BLW需要家长全程看护，食物要足够软烂，开始前建议学习婴儿急救知识。</p>`,
    contentEn: `<h2>What Is Baby-Led Weaning (BLW)?</h2>
<p>BLW means offering soft finger foods from the start, letting your baby self-feed rather than being spoon-fed purees.</p>
<h2>Our First Bite</h2>
<p>Little Tiger's first food was steamed broccoli. He stared at it, gummed it, spat it out, picked it back up, and tried again. Chaotic — but he was delighted.</p>
<h2>Great BLW Foods to Start</h2>
<ul>
<li>Vegetables: Steamed carrot sticks, broccoli, butternut squash</li>
<li>Fruits: Banana pieces, avocado slices</li>
<li>Grains: Soft rice, cooked pasta</li>
<li>Protein: Scrambled eggs, soft tofu</li>
</ul>
<p>BLW requires constant adult supervision. Learn infant first aid before starting solids.</p>`,
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
    excerptZh: "连续下了好几天雨，小老虎在家待不住了。我们整理了这些简单易操作的室内亲子游戏。",
    excerptEn: "Several rainy days in a row, and little tiger was bouncing off the walls. Here are the indoor activities that saved us.",
    contentZh: `<h2>感官探索类</h2>
<ul>
<li><strong>水盆玩水</strong>：在澡盆里放少量温水，给宝宝各种容器，让他自由探索。</li>
<li><strong>面粉黏土</strong>：用面粉、盐、水做天然黏土，安全无毒。</li>
<li><strong>大米感官箱</strong>：一个大盒子装大米，配上小勺子、量杯，宝宝能玩半天。</li>
</ul>
<h2>运动类</h2>
<ul>
<li><strong>枕头堡垒</strong>：用沙发垫和枕头搭一个城堡。</li>
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
<li><strong>配对游戏</strong>：把家里的锅盖和锅配对。</li>
<li><strong>躲猫猫变奏</strong>：把玩具藏在毯子下面，让宝宝找。</li>
</ul>`,
    contentEn: `<h2>Sensory Play</h2>
<ul>
<li><strong>Water play</strong>: A small amount of warm water in the tub with cups and spoons.</li>
<li><strong>Homemade play dough</strong>: Flour, salt, and water — safe and non-toxic.</li>
<li><strong>Rice sensory bin</strong>: A big container of uncooked rice with measuring cups.</li>
</ul>
<h2>Active Play</h2>
<ul>
<li><strong>Pillow fort</strong>: Stack couch cushions and pillows into a fortress.</li>
<li><strong>Cardboard tunnel</strong>: Connect two large boxes into a crawl-through tunnel.</li>
</ul>
<h2>Creative Play</h2>
<ul>
<li><strong>Finger painting</strong>: Use food colouring or non-toxic paint.</li>
<li><strong>Sticker books</strong>: Great for fine motor development.</li>
</ul>
<h2>Cognitive Play</h2>
<ul>
<li><strong>Lift-the-flap books</strong>: Let baby control the pages.</li>
<li><strong>Lid matching</strong>: Match pot lids to pots.</li>
<li><strong>Hide and seek with toys</strong>: Hide a toy under a blanket.</li>
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
<p>肛温38°C以上即为发烧。腋温比肛温低约0.5°C，以肛温为准。</p>
<h2>什么时候需要立刻就医？</h2>
<ul>
<li>3个月以下婴儿，肛温≥38°C</li>
<li>任何年龄，体温超过40°C</li>
<li>发烧伴随皮疹、颈部僵硬、极度嗜睡、呼吸困难</li>
<li>发烧超过48小时</li>
</ul>
<h2>物理降温方法</h2>
<p>温水擦浴可以帮助散热，保持室内通风，给宝宝穿轻薄的衣服，多补充水分。</p>
<h2>退烧药使用</h2>
<p>对乙酰氨基酚适合3个月以上宝宝；布洛芬适合6个月以上。按宝宝体重计算剂量，不要超量。</p>
<p>记住，发烧本身不是坏事，是免疫系统在战斗。</p>`,
    contentEn: `<h2>What Temperature Counts as a Fever?</h2>
<p>A rectal temperature of 38°C (100.4°F) or above is a fever. Rectal is most accurate for babies.</p>
<h2>When to Seek Immediate Medical Care</h2>
<ul>
<li>Any baby under 3 months with rectal temp ≥38°C</li>
<li>Temperature above 40°C (104°F) at any age</li>
<li>Fever with rash, stiff neck, extreme lethargy, or breathing difficulty</li>
<li>Fever lasting more than 48 hours</li>
</ul>
<h2>Physical Cooling</h2>
<p>Lukewarm sponging can help. Keep the room ventilated, dress baby lightly, and offer frequent fluids.</p>
<h2>Fever-Reducing Medication</h2>
<p>Acetaminophen is safe from 3 months; Ibuprofen from 6 months. Dose by weight. A fever is the immune system fighting — that's a good thing.</p>`,
    author: "鸣鸣妈妈 / MingMing's Mom",
    date: "2025-04-01",
    readTimeZh: "6分钟",
    readTimeEn: "6 min read",
    tags: ["发烧", "健康", "急救知识"],
  },
  {
    slug: "postpartum-recovery-real-talk",
    category: "孕育新生",
    titleZh: "产后那些没人告诉你的事",
    titleEn: "What Nobody Tells You About Postpartum Recovery",
    excerptZh: "怀孕十月，然后宝宝出生了——但没有人告诉我，妈妈自己也需要「重生」。",
    excerptEn: "Ten months of pregnancy, then the baby arrives — but nobody told me the mother also needs to be reborn.",
    contentZh: `<h2>身体的变化</h2>
<p>产后的身体和你想象的不一样。脱发、关节松弛、漏尿——这些都是真实存在的，而且持续时间比你想象的更长。</p>
<h2>情绪的过山车</h2>
<p>产后激素骤降，加上睡眠不足，情绪波动是完全正常的。如果情绪低落持续超过两周，请认真考虑寻求专业帮助。产后抑郁是真实的疾病，不是软弱。</p>
<h2>关于哺乳</h2>
<p>母乳喂养没有你想象的那么「自然」，它是一项需要学习的技能。乳头皲裂、堵奶、乳腺炎……如果遇到困难，找哺乳顾问（IBCLC）寻求帮助。</p>
<h2>给自己的建议</h2>
<ul>
<li>降低对自己的期待——乱点没关系，饭没做没关系</li>
<li>接受帮助，让家人分担</li>
<li>照顾好自己，才能更好地照顾宝宝</li>
</ul>`,
    contentEn: `<h2>Physical Changes</h2>
<p>Your postpartum body isn't what you imagined. Hair loss, loose joints, bladder leakage — these are real, and they last longer than anyone warns you.</p>
<h2>The Emotional Rollercoaster</h2>
<p>Hormones plummeting plus sleep deprivation equals extreme emotional swings. If low mood persists beyond two weeks, seek professional support. Postpartum depression is a real condition, not a weakness.</p>
<h2>About Breastfeeding</h2>
<p>Breastfeeding is not instinctive — it's a skill that must be learned. If you're struggling, an IBCLC lactation consultant can genuinely help.</p>
<h2>Advice to Yourself</h2>
<ul>
<li>Lower your expectations — a messy house is fine</li>
<li>Accept help and let family share the load</li>
<li>Taking care of yourself is taking care of your baby</li>
</ul>`,
    author: "鸣鸣妈妈 / MingMing's Mom",
    date: "2025-04-05",
    readTimeZh: "8分钟",
    readTimeEn: "8 min read",
    tags: ["产后恢复", "新手妈妈", "心理健康"],
  },

  // ── 来自 HealthyKids ──────────────────────────────────
  {
    slug: "fever-in-babies-when-to-worry",
    category: "健康宝贝",
    titleZh: "宝宝发烧：何时担心，何时等待",
    titleEn: "Fever in Babies: When to Worry and When to Wait",
    excerptZh: "并非每次发烧都需要跑急诊。学会读懂宝宝体温、什么才是危险的发烧，以及什么时候该打电话给儿科医生。",
    excerptEn: "Not every fever requires a trip to the ER. Learn how to read your baby's temperature, what counts as a dangerous fever, and when to call your pediatrician.",
    contentZh: `<h2>多少度算发烧？</h2>
<p>发烧一般定义为肛温100.4°F（38°C）以上。3个月以下的婴儿一旦发烧，即属于医疗紧急情况，应立刻联系医生。</p>
<h2>如何准确量体温</h2>
<p>3个月以下婴儿，肛温计最准确。数字体温计安全快速。耳温计和额温计可用于较大婴儿，但对新生儿精确度较低。</p>
<h2>需要立刻就医的情况</h2>
<ul>
<li>婴儿不足3个月且有任何发烧</li>
<li>任何年龄体温超过104°F（40°C）</li>
<li>宝宝极度难以唤醒</li>
<li>出现颈部僵硬、皮疹或呼吸困难</li>
<li>发烧持续超过2天</li>
</ul>
<h2>轻微发烧的居家护理</h2>
<p>对于3个月以上、轻微发烧（100.4–102°F）的宝宝，通常可以在家护理。保持水分、穿轻薄衣物。给退烧药前请先咨询医生。</p>
<h2>宝宝发烧的常见原因</h2>
<p>大多数婴儿发烧是病毒感染（如感冒流感）引起的。较少见的细菌感染（如耳朵感染、尿路感染）则需要抗生素。</p>
<h2>总结</h2>
<p>相信你的直觉。如果宝宝除了发烧还有其他不适，或有什么感觉「不对劲」，务必联系儿科医生。</p>`,
    contentEn: `<h2>What Temperature Is Considered a Fever?</h2>
<p>A fever is generally defined as a rectal temperature of 100.4°F (38°C) or higher. For babies under 3 months old, any fever is a medical emergency and you should call your doctor immediately.</p>
<h2>How to Take Your Baby's Temperature Accurately</h2>
<p>For infants under 3 months, a rectal thermometer gives the most accurate reading. Ear and forehead thermometers can be used for older babies but may be less accurate for newborns.</p>
<h2>When to Call the Doctor Immediately</h2>
<ul>
<li>Baby is under 3 months old with any fever</li>
<li>Temperature is above 104°F (40°C) at any age</li>
<li>Baby is unusually difficult to wake</li>
<li>Baby has a stiff neck, rash, or difficulty breathing</li>
<li>Fever lasts more than 2 days</li>
</ul>
<h2>Home Care for Mild Fevers</h2>
<p>For babies older than 3 months with a mild fever, you can often manage at home. Keep them hydrated, dress them lightly, and offer extra nursing or bottle feeds. Ask your doctor before giving any fever-reducing medication.</p>
<h2>What Causes Fevers in Babies?</h2>
<p>Most fevers in babies are caused by viral infections like the common cold or flu. Less commonly, bacterial infections such as ear infections or urinary tract infections can cause fevers and require antibiotic treatment.</p>
<h2>The Bottom Line</h2>
<p>Trust your instincts. If your baby seems unwell beyond just a high temperature, or if something feels "off," always contact your pediatrician.</p>`,
    author: "Dr. Sarah Mitchell, MD",
    date: "2026-03-20",
    readTimeZh: "5分钟",
    readTimeEn: "5 min read",
    tags: ["发烧", "新生儿", "宝宝健康", "儿科"],
  },
  {
    slug: "common-baby-rashes-guide",
    category: "健康宝贝",
    titleZh: "父母必知的宝宝常见皮疹指南",
    titleEn: "A Parent's Guide to Common Baby Rashes",
    excerptZh: "宝宝皮肤娇嫩，皮疹很常见。学会识别尿布疹、湿疹、痱子等常见皮肤问题，以及如何应对。",
    excerptEn: "Baby skin is sensitive and rashes are common. Here's how to identify diaper rash, eczema, heat rash, and other common skin conditions — and what to do about them.",
    contentZh: `<h2>尿布疹</h2>
<p>尿布疹是婴儿最常见的皮肤刺激之一，表现为尿布区域皮肤发红、发炎。最好的处理方式是保持该区域清洁干燥，使用氧化锌隔离霜，并让皮肤透气。</p>
<h2>婴儿湿疹</h2>
<p>湿疹（特应性皮炎）会导致皮肤干燥、瘙痒、红斑。婴儿期常见于脸颊和头皮，大一点的宝宝则多见于手臂和腿部。使用无香料保湿霜，避免刺激性肥皂，严重时请就医。</p>
<h2>痱子（热疹）</h2>
<p>宝宝过热时出现的小红疙瘩或水疱。移至凉爽环境，去除多余衣物，避免使用可能堵塞毛孔的厚重乳霜。</p>
<h2>乳痂（脂溢性皮炎）</h2>
<p>头皮上出现黄色、硬质或鳞状斑块。虽然看起来吓人，但乳痂是无害的，通常会自行消退。轻柔洗发和软刷有所帮助。</p>
<h2>何时就医</h2>
<p>如果皮疹伴随发烧、快速扩散、出现水疱或脓液，或居家护理几天后没有改善，应寻求医疗帮助。</p>`,
    contentEn: `<h2>Diaper Rash</h2>
<p>Diaper rash is one of the most common skin irritations in babies. It appears as red, inflamed skin in the diaper area. The best treatment is keeping the area clean and dry, using a zinc oxide barrier cream, and giving the skin time to air out.</p>
<h2>Baby Eczema</h2>
<p>Eczema (atopic dermatitis) causes dry, itchy, red patches. It often appears on cheeks and the scalp in infants. Use fragrance-free moisturizers, avoid harsh soaps, and consult a doctor if it's severe.</p>
<h2>Heat Rash (Prickly Heat)</h2>
<p>Tiny red bumps or blisters appearing when a baby overheats. Move to a cooler environment, remove excess clothing, and avoid heavy creams that can block pores.</p>
<h2>Cradle Cap</h2>
<p>Yellowish, crusty or scaly patches on the scalp. While it looks alarming, cradle cap is harmless and usually clears up on its own. Gentle shampooing and soft brushing can help.</p>
<h2>When to See a Doctor</h2>
<p>Seek medical attention if the rash is accompanied by fever, spreads rapidly, has blisters or pus, or doesn't improve after a few days of home care.</p>`,
    author: "Emma Clarke, RN",
    date: "2026-03-15",
    readTimeZh: "6分钟",
    readTimeEn: "6 min read",
    tags: ["皮疹", "湿疹", "尿布疹", "皮肤护理"],
  },
  {
    slug: "baby-sleep-safety-complete-guide",
    category: "健康宝贝",
    titleZh: "婴儿安全睡眠完全指南：父母必须知道的一切",
    titleEn: "Safe Sleep for Babies: Everything Parents Need to Know",
    excerptZh: "遵守安全睡眠指南可大幅降低婴儿猝死综合征（SIDS）风险。学习ABC原则、最安全的睡姿，以及哪些东西不能放进婴儿床。",
    excerptEn: "Following safe sleep guidelines dramatically reduces the risk of SIDS. Learn the ABC rule, the safest sleep positions, and what to keep out of the crib.",
    contentZh: `<h2>安全睡眠的ABC原则</h2>
<p>美国儿科学会建议：<strong>A</strong>lone（单独）、<strong>B</strong>ack（仰睡）、<strong>C</strong>rib（婴儿床）。永远让宝宝仰躺在坚实平坦的睡眠表面。</p>
<h2>同房 vs. 同床</h2>
<p>同房睡眠（宝宝在父母房间但睡独立床位）建议至少在前6个月，理想情况下持续第一年。同床睡会显著增加SIDS风险，不推荐。</p>
<h2>婴儿床里应该放什么</h2>
<p>只放硬质床垫加合身床单。不放枕头、床围、毯子、毛绒玩具或楔形垫。睡袋是松散毯子的安全替代品。</p>
<h2>睡眠环境建议</h2>
<ul>
<li>室温保持在68–72°F（20–22°C）</li>
<li>睡眠时使用安抚奶嘴（母乳喂养建立后再引入）</li>
<li>避免过热——摸宝宝颈背来判断</li>
<li>不使用睡眠定位器或楔形枕</li>
</ul>
<h2>何时可以放宽规则？</h2>
<p>当宝宝能稳定地从仰卧翻到俯卧再翻回来（通常约6个月），可以允许他们自己找到睡姿。但仍应让他们仰卧入睡。</p>`,
    contentEn: `<h2>The ABCs of Safe Sleep</h2>
<p>The American Academy of Pediatrics recommends: <strong>A</strong>lone, on their <strong>B</strong>ack, in a <strong>C</strong>rib. Always place your baby on their back on a firm, flat sleep surface in their own crib or bassinet.</p>
<h2>Room Sharing vs. Bed Sharing</h2>
<p>Room sharing (baby sleeps in your room but on a separate surface) is recommended for at least the first 6 months and ideally the first year. Bed sharing significantly increases SIDS risk and is not recommended.</p>
<h2>What Belongs in the Crib</h2>
<p>Only a firm mattress with a fitted sheet. No pillows, bumper pads, blankets, stuffed animals, or wedges. A wearable blanket (sleep sack) is a safe alternative to loose blankets.</p>
<h2>Sleep Environment Tips</h2>
<ul>
<li>Keep room temperature between 68–72°F (20–22°C)</li>
<li>Use a pacifier at sleep time (after breastfeeding is established)</li>
<li>Avoid overheating — feel the back of the neck to check</li>
</ul>
<h2>When Can the Rules Relax?</h2>
<p>Once your baby can consistently roll from back to front and back again (usually around 6 months), you can allow them to find their own sleep position. But continue to place them on their back initially.</p>`,
    author: "Dr. James Patel, Pediatrician",
    date: "2026-03-10",
    readTimeZh: "7分钟",
    readTimeEn: "7 min read",
    tags: ["安全睡眠", "婴儿猝死", "新生儿", "婴儿床"],
  },
  {
    slug: "toddler-tantrums-calm-strategies",
    category: "育儿经",
    titleZh: "幼儿发脾气：8个真正有效的安抚策略",
    titleEn: "Toddler Tantrums: 8 Calm-Down Strategies That Actually Work",
    excerptZh: "发脾气是幼儿发育的正常现象——但这并不意味着应对起来容易。这些循证策略帮助你和孩子一起度过崩溃时刻。",
    excerptEn: "Tantrums are a normal part of toddler development — but that doesn't make them easy. These evidence-based strategies will help you and your child get through them.",
    contentZh: `<h2>为什么幼儿会发脾气</h2>
<p>幼儿发脾气高峰在1–3岁，因为他们情绪强烈，但语言能力和冲动控制都还有限。理解这一点是有效回应的第一步。</p>
<h2>8个真正有效的策略</h2>
<h3>1. 首先让自己保持冷静</h3>
<p>你的冷静是会传染的。在回应前先深呼吸。孩子会跟着大人共同调节情绪。</p>
<h3>2. 崩溃中途不要讲道理</h3>
<p>等风暴过去再说。幼儿情绪爆发时，大脑逻辑区域无法正常工作，此时讲道理几乎无效。</p>
<h3>3. 承认他的感受</h3>
<p>说「我看到你很沮丧」而不是「别哭了」。给情绪命名能帮助孩子更快地处理它。</p>
<h3>4. 给出选择</h3>
<p>给出有限的可接受选项：「你想先穿鞋还是先穿外套？」这能恢复孩子的掌控感。</p>
<h3>5. 对较小的幼儿使用转移注意力</h3>
<p>对2岁以下的孩子，一个新奇的事物可以快速降低情绪。</p>
<h3>6. 温和地坚守边界</h3>
<p>不要为了避免发脾气而妥协。这会让孩子认为发脾气是有效的。保持温和但坚定。</p>
<h3>7. 设立平静角</h3>
<p>一个有软玩具和书的舒适角落——不是惩罚，而是让孩子可以平复情绪的安全空间。</p>
<h3>8. 事后好好连接</h3>
<p>发脾气结束后，给个拥抱，简单说一下发生了什么，以及下次可以怎么做。</p>`,
    contentEn: `<h2>Why Toddlers Have Tantrums</h2>
<p>Tantrums peak between ages 1–3 because toddlers have big emotions but limited language and impulse control. Understanding this is the first step to responding effectively.</p>
<h2>8 Strategies That Work</h2>
<h3>1. Stay Calm Yourself</h3>
<p>Your calm is contagious. Take a deep breath before responding. Children co-regulate with adults, so your composure helps them regulate faster.</p>
<h3>2. Don't Negotiate During the Meltdown</h3>
<p>Wait until the storm passes. Reasoning with a toddler mid-tantrum rarely works because they can't access the logical part of their brain when emotionally flooded.</p>
<h3>3. Acknowledge the Feeling</h3>
<p>Say "I can see you're really frustrated" rather than "stop crying." Naming emotions helps children process them faster.</p>
<h3>4. Offer Choices</h3>
<p>Give limited, acceptable choices: "Do you want to put on your shoes or your jacket first?" This restores a sense of control.</p>
<h3>5. Use Distraction for Younger Toddlers</h3>
<p>For children under 2, a quick distraction with something novel can de-escalate quickly.</p>
<h3>6. Hold the Boundary (Gently)</h3>
<p>Don't give in to avoid the tantrum. This teaches that tantrums are effective. Stay kind but firm.</p>
<h3>7. Create a Calm-Down Spot</h3>
<p>A cozy corner with soft toys and books — not as punishment, but as a safe space to decompress.</p>
<h3>8. Connect After</h3>
<p>After the tantrum, offer a hug and a brief, simple explanation of what happened and what they can do next time.</p>`,
    author: "Lisa Tanner, Child Psychologist",
    date: "2026-03-18",
    readTimeZh: "6分钟",
    readTimeEn: "6 min read",
    tags: ["发脾气", "幼儿", "行为", "情绪调节"],
  },
  {
    slug: "screen-time-kids-guidelines",
    category: "育儿经",
    titleZh: "孩子的屏幕时间：各年龄段最新指南",
    titleEn: "Screen Time for Kids: Updated Guidelines for Every Age",
    excerptZh: "屏幕时间多少算太多？什么才算优质内容？最新儿科研究对孩子和数字设备的说法。",
    excerptEn: "How much screen time is too much? What counts as quality content? Here's what the latest pediatric research says about children and digital devices.",
    contentZh: `<h2>各年龄段屏幕时间建议</h2>
<ul>
<li><strong>18个月以下：</strong>除视频通话外，避免使用屏幕</li>
<li><strong>18–24个月：</strong>仅限优质内容，并与孩子一起观看</li>
<li><strong>2–5岁：</strong>每天限制1小时优质内容</li>
<li><strong>6岁及以上：</strong>保持时间和内容的一致限制；优先保证睡眠、活动和面对面交流</li>
</ul>
<h2>并非所有屏幕时间都一样</h2>
<p>被动消费（看YouTube）与互动式教育类应用不同，与视频通话祖父母也不同。内容和情境与时间一样重要。</p>
<h2>屏幕时间成为问题的信号</h2>
<ul>
<li>拿走设备时大发脾气</li>
<li>偷偷玩屏幕</li>
<li>对其他活动失去兴趣</li>
<li>睡眠问题</li>
</ul>
<h2>健康使用屏幕的建议</h2>
<p>设立无技术区域（卧室、餐桌）。使用家长控制功能，尽可能一起观看。以身作则——孩子也注意到你的手机习惯。</p>`,
    contentEn: `<h2>Current Screen Time Guidelines by Age</h2>
<ul>
<li><strong>Under 18 months:</strong> Avoid screen use except video chatting with family</li>
<li><strong>18–24 months:</strong> High-quality programming only, watch together</li>
<li><strong>2–5 years:</strong> Limit to 1 hour per day of quality content</li>
<li><strong>6 years and older:</strong> Consistent limits on time and type; prioritize sleep, activity, and face time</li>
</ul>
<h2>Not All Screen Time Is Equal</h2>
<p>Passive consumption (watching YouTube) is different from interactive or educational apps, and from video calling grandparents. Context and content matter as much as time.</p>
<h2>Signs Screen Time Is Becoming a Problem</h2>
<ul>
<li>Meltdowns when devices are taken away</li>
<li>Sneaking screen time</li>
<li>Losing interest in other activities</li>
<li>Sleep problems</li>
</ul>
<h2>Tips for Healthy Screen Habits</h2>
<p>Create tech-free zones (bedrooms, dinner table). Use parental controls and co-view when possible. Model the behavior you want — your kids notice your phone habits too.</p>`,
    author: "Dr. Rachel Foster, Developmental Pediatrician",
    date: "2026-03-12",
    readTimeZh: "5分钟",
    readTimeEn: "5 min read",
    tags: ["屏幕时间", "数字健康", "幼儿", "科技"],
  },
  {
    slug: "starting-solids-6-month-guide",
    category: "美食营养",
    titleZh: "6个月开始添加辅食：分步骤指南",
    titleEn: "Starting Solids at 6 Months: A Step-by-Step Guide",
    excerptZh: "准备给宝宝引入固体食物了吗？了解就绪信号、从哪些食物开始、应避免什么，以及如何处理过敏。",
    excerptEn: "Ready to introduce your baby to solid foods? Learn the signs of readiness, which foods to start with, what to avoid, and how to handle allergies.",
    contentZh: `<h2>宝宝准备好吃辅食的信号</h2>
<ul>
<li>只需少量支撑就能坐稳、头部保持平衡</li>
<li>对你的食物表现出兴趣</li>
<li>舌推反射已消失</li>
<li>大约6个月大（不早于4个月）</li>
</ul>
<h2>第一批辅食选择</h2>
<p>传统上从单一成分的泥状食物开始：红薯泥、南瓜泥、豌豆泥、梨泥或香蕉泥。宝宝主导辅食（软质手指食物）也是越来越受欢迎的选择。</p>
<h2>第一年内需避免的食物</h2>
<ul>
<li>蜂蜜（肉毒杆菌风险）</li>
<li>牛奶作为主要饮品（食物中的乳制品可以）</li>
<li>盐和添加糖</li>
<li>呛噎风险食物：整颗葡萄、生胡萝卜、坚果</li>
</ul>
<h2>引入常见过敏原</h2>
<p>当前指南建议早期（约6个月）引入花生、鸡蛋等过敏原，以降低过敏风险。每次引入一种新食物，等待3天后再引入另一种。</p>
<h2>宝宝应该吃多少？</h2>
<p>6个月时，固体食物是母乳或配方奶的补充——不是替代。从每天一次1–2汤匙开始，随宝宝兴趣逐渐增加。</p>`,
    contentEn: `<h2>Signs Your Baby Is Ready for Solids</h2>
<ul>
<li>Sits up with minimal support and holds head steady</li>
<li>Shows interest in your food</li>
<li>Has lost the tongue-thrust reflex</li>
<li>Around 6 months old (not before 4 months)</li>
</ul>
<h2>First Foods to Try</h2>
<p>Single-ingredient purees are traditional starters: sweet potato, butternut squash, peas, pears, or bananas. Baby-led weaning (soft finger foods) is also an increasingly popular option.</p>
<h2>Foods to Avoid in the First Year</h2>
<ul>
<li>Honey (botulism risk)</li>
<li>Cow's milk as a main drink (dairy in food is fine)</li>
<li>Salt and added sugar</li>
<li>Choking hazards: whole grapes, raw carrots, nuts</li>
</ul>
<h2>Introducing Common Allergens</h2>
<p>Current guidelines recommend introducing peanuts, eggs, and other allergens early (around 6 months) to reduce allergy risk. Introduce one at a time and wait 3 days before adding another new food.</p>
<h2>How Much Should My Baby Eat?</h2>
<p>At 6 months, solid food is complementary to breast milk or formula — not a replacement. Start with 1–2 tablespoons once a day and gradually increase as your baby shows interest.</p>`,
    author: "Amy Chen, Registered Dietitian",
    date: "2026-03-22",
    readTimeZh: "7分钟",
    readTimeEn: "7 min read",
    tags: ["辅食", "宝宝喂养", "营养", "断奶"],
  },
  {
    slug: "healthy-snacks-toddlers",
    category: "美食营养",
    titleZh: "幼儿超爱的20种健康零食",
    titleEn: "20 Healthy Snack Ideas Toddlers Actually Love",
    excerptZh: "让幼儿吃健康零食可能感觉不可能完成。这20个想法营养丰富、简单易做，还深受幼儿欢迎。",
    excerptEn: "Getting toddlers to eat healthy snacks can feel impossible. These 20 ideas are nutritious, easy to prepare, and toddler-approved.",
    contentZh: `<h2>零食对幼儿为何重要</h2>
<p>幼儿胃容量小、能量需求高。每天2–3次健康零食有助于维持血糖水平，并为成长和大脑发育提供关键营养素。</p>
<h2>20种幼儿认可的健康零食</h2>
<ol>
<li>香蕉片配杏仁酱</li>
<li>全谷物饼干配鹰嘴豆泥</li>
<li>希腊酸奶配浆果</li>
<li>软奶酪块配葡萄（对半切）</li>
<li>清蒸西兰花配轻味酱料</li>
<li>牛油果片配面包</li>
<li>白煮蛋（切四块）</li>
<li>燕麦片配切丁苹果</li>
<li>烤红薯条（软烂）</li>
<li>菠菜香蕉牛奶奶昔</li>
<li>米饼配奶油芝士</li>
<li>毛豆（去壳）</li>
<li>黄瓜条配酸奶酱</li>
<li>迷你芝士墨西哥卷饼</li>
<li>芒果片</li>
<li>豌豆（新鲜或解冻冷冻豌豆）</li>
<li>迷你玛芬（香蕉或西葫芦口味）</li>
<li>芝士蔬菜蛋卷条</li>
<li>白干酪配桃丁</li>
<li>奇亚籽布丁配水果</li>
</ol>
<h2>零食成功的小贴士</h2>
<p>保持固定零食时间，在正餐前2小时提供零食以保留饥饿感，始终坐下来一起吃零食以避免呛噎风险。</p>`,
    contentEn: `<h2>Why Snacks Matter for Toddlers</h2>
<p>Toddlers have small stomachs and high energy needs. 2–3 healthy snacks per day help maintain blood sugar levels and provide key nutrients for growth and brain development.</p>
<h2>20 Toddler-Approved Healthy Snacks</h2>
<ol>
<li>Sliced banana with almond butter</li>
<li>Whole-grain crackers with hummus</li>
<li>Greek yogurt with berries</li>
<li>Soft cheese cubes with grapes (halved)</li>
<li>Steamed broccoli florets with mild dip</li>
<li>Avocado slices on toast</li>
<li>Hard-boiled egg (quartered)</li>
<li>Oatmeal with diced apple</li>
<li>Sweet potato wedges (baked, soft)</li>
<li>Smoothie with spinach, banana, and milk</li>
<li>Rice cakes with cream cheese</li>
<li>Edamame (shelled)</li>
<li>Cucumber sticks with tzatziki</li>
<li>Mini quesadilla with cheese</li>
<li>Sliced mango</li>
<li>Peas (fresh or thawed frozen)</li>
<li>Mini muffins (banana or zucchini)</li>
<li>Cheese and veggie omelet strips</li>
<li>Cottage cheese with diced peach</li>
<li>Chia pudding with fruit</li>
</ol>
<h2>Tips for Snack Success</h2>
<p>Keep snack times consistent, offer snacks 2 hours before meals so hunger cues are preserved, and always sit together for snacks to avoid choking risks.</p>`,
    author: "Amy Chen, Registered Dietitian",
    date: "2026-03-08",
    readTimeZh: "4分钟",
    readTimeEn: "4 min read",
    tags: ["零食", "幼儿饮食", "营养", "食谱"],
  },
  {
    slug: "speech-development-milestones-0-3",
    category: "成长记录",
    titleZh: "语言发育里程碑：0–3岁完整时间表",
    titleEn: "Speech & Language Milestones: Ages 0–3 Years",
    excerptZh: "宝宝应该什么时候说第一个字？幼儿什么时候开始组句子？这里有清晰的语言里程碑时间表和需要注意的预警信号。",
    excerptEn: "When should your baby say their first word? When do toddlers start putting sentences together? Here's a clear timeline of speech milestones and red flags to watch for.",
    contentZh: `<h2>为什么语言里程碑很重要</h2>
<p>早期发现语言迟缓，可以在语言发育最关键的窗口期进行干预。大多数语言障碍对早期治疗反应良好。</p>
<h2>里程碑时间表</h2>
<h3>0–6个月</h3>
<ul>
<li>对声音和声音有反应</li>
<li>发出咕咕声和咯咯声</li>
<li>不同需求有不同的哭声</li>
</ul>
<h3>6–12个月</h3>
<ul>
<li>咿呀学语（"baba"、"dada"、"mama"）</li>
<li>对自己的名字有反应</li>
<li>理解"不"和简单指令</li>
<li>12个月时说1–2个词</li>
</ul>
<h3>12–18个月</h3>
<ul>
<li>词汇量5–20个词</li>
<li>指向物体和图片</li>
<li>能遵循简单的两步指令</li>
</ul>
<h3>18–24个月</h3>
<ul>
<li>词汇量50个词以上</li>
<li>开始组合两个词（"要奶奶"）</li>
<li>陌生人能理解约50%的话语</li>
</ul>
<h3>2–3岁</h3>
<ul>
<li>使用3–4个词的句子</li>
<li>词汇量200–1000个词</li>
<li>陌生人能理解75%以上的话语</li>
</ul>
<h2>需要就医的预警信号</h2>
<ul>
<li>12个月仍不会咿呀学语</li>
<li>16个月仍没有说词语</li>
<li>24个月仍不会组合两个词</li>
<li>任何时候出现语言技能退步</li>
</ul>`,
    contentEn: `<h2>Why Speech Milestones Matter</h2>
<p>Early identification of speech delays allows for intervention during the most critical window for language development. Most speech and language disorders respond very well to early therapy.</p>
<h2>Milestone Timeline</h2>
<h3>0–6 Months</h3>
<ul>
<li>Responds to voices and sounds</li>
<li>Makes cooing and gurgling sounds</li>
<li>Cries differently for different needs</li>
</ul>
<h3>6–12 Months</h3>
<ul>
<li>Babbles ("baba", "dada", "mama")</li>
<li>Responds to their name</li>
<li>Understands "no" and simple instructions</li>
<li>Says 1–2 words by 12 months</li>
</ul>
<h3>12–18 Months</h3>
<ul>
<li>Vocabulary of 5–20 words</li>
<li>Points to objects and pictures</li>
<li>Follows simple two-step instructions</li>
</ul>
<h3>18–24 Months</h3>
<ul>
<li>50+ word vocabulary</li>
<li>Begins combining two words</li>
<li>Strangers can understand about 50% of speech</li>
</ul>
<h3>2–3 Years</h3>
<ul>
<li>Uses 3–4 word sentences</li>
<li>Vocabulary of 200–1000 words</li>
<li>Strangers can understand 75%+ of speech</li>
</ul>
<h2>Red Flags to Discuss with Your Doctor</h2>
<ul>
<li>No babbling by 12 months</li>
<li>No words by 16 months</li>
<li>No two-word phrases by 24 months</li>
<li>Any loss of previously acquired language skills</li>
</ul>`,
    author: "Dr. Nina Walsh, Speech-Language Pathologist",
    date: "2026-03-17",
    readTimeZh: "8分钟",
    readTimeEn: "8 min read",
    tags: ["语言发育", "里程碑", "成长"],
  },
  {
    slug: "newborn-care-first-week",
    category: "孕育新生",
    titleZh: "新生儿护理：在第一周存活并茁壮成长",
    titleEn: "Newborn Care: Surviving (and Thriving) in the First Week",
    excerptZh: "新生儿的第一周美好、疲惫又令人不知所措。这是关于喂养、睡眠、脐带护理和何时就医的实用指南。",
    excerptEn: "The first week with a newborn is beautiful, exhausting, and overwhelming. Here's your practical guide to feeding, sleeping, umbilical cord care, and knowing when to call the doctor.",
    contentZh: `<h2>喂养新生儿</h2>
<p>新生儿每2–3小时需要喂一次——每天8–12次。注意饥饿信号：觅食、吸吮小手、头部左右转动。哭是较晚出现的饥饿信号。</p>
<h2>正常的睡眠时间</h2>
<p>新生儿每天睡16–17小时，以2–4小时为一段。他们还不知道白天和晚上的区别。白天让他们接触自然光，夜晚保持安静和昏暗。</p>
<h2>脐带护理</h2>
<p>保持脐带残端干净干燥。把尿布折到脐带以下，避免摩擦。残端会在1–3周内自然脱落。如果根部出现发红、肿胀或分泌物，请联系医生。</p>
<h2>新生儿外观：什么是正常的</h2>
<ul>
<li>皮肤斑驳、脱皮——正常</li>
<li>偶尔斜眼——正常（通常4个月左右自愈）</li>
<li>黄疸（皮肤黄色调）——常见，但需密切观察</li>
<li>头顶软斑——正常，这是囟门</li>
</ul>
<h2>何时就医</h2>
<ul>
<li>体温超过100.4°F（38°C）</li>
<li>出生第4天后每天尿湿尿布少于6块</li>
<li>黄疸扩散到肚脐以下</li>
<li>无法叫醒喂奶</li>
</ul>`,
    contentEn: `<h2>Feeding Your Newborn</h2>
<p>Newborns need to feed every 2–3 hours — that's 8–12 times per day. Watch for hunger cues: rooting, sucking on hands, turning head side to side. Crying is a late hunger cue.</p>
<h2>How Much Sleep Is Normal?</h2>
<p>Newborns sleep 16–17 hours per day in short stretches of 2–4 hours. They don't yet know the difference between day and night. Expose them to natural light during the day and keep nights calm and dark.</p>
<h2>Umbilical Cord Care</h2>
<p>Keep the stump clean and dry. Fold diapers below the cord to avoid rubbing. The stump will dry out and fall off within 1–3 weeks. Call your doctor if you see redness, swelling, or discharge around the base.</p>
<h2>Newborn Appearance: What's Normal</h2>
<ul>
<li>Blotchy skin and peeling — normal</li>
<li>Crossed eyes occasionally — normal (usually resolves by 4 months)</li>
<li>Jaundice (yellow tint to skin) — common, but monitor closely</li>
<li>Soft spots on the head — normal, these are the fontanelles</li>
</ul>
<h2>When to Call the Doctor</h2>
<ul>
<li>Temperature above 100.4°F (38°C)</li>
<li>Fewer than 6 wet diapers per day after day 4</li>
<li>Yellow or jaundiced skin spreading below the belly button</li>
<li>Not waking to feed</li>
</ul>`,
    author: "Dr. Olivia Barnes, OB-GYN",
    date: "2026-03-25",
    readTimeZh: "8分钟",
    readTimeEn: "8 min read",
    tags: ["新生儿", "第一周", "产后", "宝宝护理"],
  },
  {
    slug: "childproofing-home-room-by-room",
    category: "安全防护",
    titleZh: "宝宝防护：按房间逐一检查您的家",
    titleEn: "Childproofing Your Home: A Room-by-Room Checklist",
    excerptZh: "在宝宝开始爬行和走路之前，是时候做好防护工作了。这份全面的清单涵盖家中每一个房间。",
    excerptEn: "Before your baby starts crawling and walking, it's time to childproof. This comprehensive checklist covers every room in your house.",
    contentZh: `<h2>何时开始防护</h2>
<p>在宝宝开始爬行之前——通常约6个月大。一次性完成比宝宝已经动起来后再手忙脚乱容易得多。</p>
<h2>客厅</h2>
<ul>
<li>将重型家具（书架、电视）固定在墙上</li>
<li>用护角保护茶几的锐角</li>
<li>将电线收好或用线缆整理盒处理</li>
<li>用坚固的防护栏封住壁炉</li>
</ul>
<h2>厨房</h2>
<ul>
<li>锁住下方橱柜，尤其是存放清洁用品的柜子</li>
<li>使用炉灶旋钮保护盖</li>
<li>将刀具和锋利工具放置在够不到的地方</li>
<li>不要把热液体放在桌子或柜台边缘</li>
</ul>
<h2>浴室</h2>
<ul>
<li>不要在浴缸里留有积水</li>
<li>浴缸内使用防滑垫</li>
<li>将所有药物和洗漱用品锁好</li>
<li>将热水器调至120°F（49°C）或更低</li>
</ul>
<h2>卧室</h2>
<ul>
<li>确保婴儿床符合当前安全标准</li>
<li>将百叶窗绳索放在够不到的地方</li>
<li>从婴儿床中取出可能引起窒息的物品</li>
</ul>
<h2>楼梯和走廊</h2>
<ul>
<li>在所有楼梯的顶部和底部安装安全门</li>
<li>确保栏杆间隙不超过4英寸（约10厘米）</li>
</ul>
<h2>总体建议</h2>
<p>双膝跪地，从宝宝的视角看世界——你会发现站立时注意不到的危险。</p>`,
    contentEn: `<h2>When to Start Childproofing</h2>
<p>Start before your baby begins crawling — typically around 6 months. It's easier to do it all at once than to scramble when they're already mobile.</p>
<h2>Living Room</h2>
<ul>
<li>Secure heavy furniture (bookshelves, TVs) to walls</li>
<li>Cover sharp corners on coffee tables</li>
<li>Keep cords out of reach or use cord shorteners</li>
<li>Block fireplace access with a sturdy gate</li>
</ul>
<h2>Kitchen</h2>
<ul>
<li>Lock lower cabinets, especially those with cleaning supplies</li>
<li>Use stove knob covers</li>
<li>Keep knives and sharp tools out of reach</li>
<li>Never leave hot liquids near table edges</li>
</ul>
<h2>Bathroom</h2>
<ul>
<li>Never leave standing water in the tub</li>
<li>Use non-slip mats in the bath</li>
<li>Lock all medications and toiletries away</li>
<li>Set water heater to 120°F (49°C) or lower</li>
</ul>
<h2>Bedroom</h2>
<ul>
<li>Ensure crib meets current safety standards</li>
<li>Keep cords from blinds out of reach</li>
<li>Remove items from crib that could cause suffocation</li>
</ul>
<h2>Stairs and Hallways</h2>
<ul>
<li>Install safety gates at top and bottom of all stairs</li>
<li>Ensure banisters have gaps no wider than 4 inches</li>
</ul>
<h2>General Tips</h2>
<p>Get down on your hands and knees to see the world from your baby's perspective — you'll spot hazards you'd never notice from standing height.</p>`,
    author: "Tom Bradley, Child Safety Specialist",
    date: "2026-03-05",
    readTimeZh: "6分钟",
    readTimeEn: "6 min read",
    tags: ["家居防护", "安全", "宝宝防护"],
  },
  {
    slug: "baby-vaccination-schedule",
    category: "健康宝贝",
    titleZh: "婴儿疫苗接种时间表：从出生到12个月",
    titleEn: "Baby Vaccination Schedule: What to Expect from Birth to 12 Months",
    excerptZh: "疫苗是保护宝宝最重要的事情之一。这里是具体的推荐疫苗和接种时间，以及如何应对接种后的反应。",
    excerptEn: "Vaccinations are one of the most important things you can do to protect your baby. Here's exactly which vaccines are recommended and when, with tips on managing post-shot reactions.",
    contentZh: `<h2>第一年疫苗为何重要</h2>
<p>婴儿从母体获得一些免疫力，但这种免疫力很快消退。疫苗训练免疫系统在接触特定疾病之前就学会如何对抗它们。第一年是最脆弱的时期，因此接种计划前期密集。</p>
<h2>推荐接种时间表（出生至12个月）</h2>
<ul>
<li><strong>出生时：</strong>乙肝疫苗（第1剂）</li>
<li><strong>2个月：</strong>百白破、Hib、脊灰、肺炎球菌、轮状病毒、乙肝（第2剂）</li>
<li><strong>4个月：</strong>百白破、Hib、脊灰、肺炎球菌、轮状病毒</li>
<li><strong>6个月：</strong>百白破、Hib、肺炎球菌、轮状病毒、乙肝（第3剂）、流感（每年）</li>
<li><strong>12个月：</strong>麻腮风、水痘、甲肝（第1剂）、肺炎球菌加强针</li>
</ul>
<h2>常见反应及处理</h2>
<p>轻微反应是正常的，表明免疫系统在响应。包括注射部位酸痛、低烧和烦躁。可以在注射部位敷凉湿布，并咨询医生关于婴儿对乙酰氨基酚的适当剂量。</p>
<h2>严重反应：何时就医</h2>
<ul>
<li>高烧超过104°F（40°C）</li>
<li>连续哭闹超过3小时</li>
<li>抽搐</li>
<li>极度嗜睡或难以唤醒</li>
<li>荨麻疹、面部肿胀或呼吸困难（立刻就急诊）</li>
</ul>`,
    contentEn: `<h2>Why Vaccines Matter in the First Year</h2>
<p>Babies are born with some immunity passed from their mothers, but it fades quickly. Vaccines train the immune system to fight specific diseases before your baby is exposed to them.</p>
<h2>The Recommended Schedule (Birth to 12 Months)</h2>
<ul>
<li><strong>Birth:</strong> Hepatitis B (dose 1)</li>
<li><strong>2 months:</strong> DTaP, Hib, IPV, PCV15, RV, Hepatitis B (dose 2)</li>
<li><strong>4 months:</strong> DTaP, Hib, IPV, PCV15, RV</li>
<li><strong>6 months:</strong> DTaP, Hib, PCV15, RV, Hepatitis B (dose 3), Influenza (yearly)</li>
<li><strong>12 months:</strong> MMR, Varicella, Hepatitis A (dose 1), PCV15 booster</li>
</ul>
<h2>Common Reactions and How to Manage Them</h2>
<p>Mild reactions are normal and a sign the immune system is responding. These include soreness at the injection site, low-grade fever, and fussiness.</p>
<h2>Serious Reactions: When to Call the Doctor</h2>
<ul>
<li>High fever above 104°F (40°C)</li>
<li>Non-stop crying for more than 3 hours</li>
<li>Seizures or convulsions</li>
<li>Extreme drowsiness or difficulty waking</li>
<li>Hives, swelling of the face, or difficulty breathing (seek emergency care immediately)</li>
</ul>`,
    author: "Dr. James Patel, Pediatrician",
    date: "2026-01-14",
    readTimeZh: "6分钟",
    readTimeEn: "6 min read",
    tags: ["疫苗", "免疫接种", "宝宝健康", "新生儿"],
  },
  {
    slug: "teething-symptoms-and-relief",
    category: "健康宝贝",
    titleZh: "长牙：症状、时间表与安全缓解方法",
    titleEn: "Teething: Symptoms, Timeline, and Safe Relief Methods",
    excerptZh: "流口水、烦躁、失眠——长牙对宝宝和父母都是煎熬。了解什么是正常的、牙齿何时萌出，以及如何安全缓解疼痛。",
    excerptEn: "Drooling, fussiness, and sleepless nights — teething is tough for babies and parents alike. Learn what's normal, when teeth appear, and how to safely soothe the pain.",
    contentZh: `<h2>宝宝什么时候开始长牙？</h2>
<p>大多数宝宝在4–7个月之间长出第一颗牙，但3–12个月都属正常范围。3岁前大多数孩子会长出全部20颗乳牙，下中切牙通常最先萌出，其次是上中切牙。</p>
<h2>常见长牙症状</h2>
<ul>
<li>过度流口水（可能导致下巴出疹）</li>
<li>见什么咬什么</li>
<li>牙龈红肿或触痛</li>
<li>烦躁、易怒</li>
<li>轻微睡眠紊乱</li>
</ul>
<p>注意：长牙<em>不会</em>引起高烧、腹泻或呕吐。如有这些症状，请就医——可能是其他疾病引起的。</p>
<h2>安全缓解长牙疼痛的方法</h2>
<ul>
<li><strong>冷湿毛巾：</strong>浸湿并冷藏（不要冻结）一块干净毛巾让宝宝咬</li>
<li><strong>牙胶：</strong>橡胶或硅胶牙环——冷藏，不要冷冻</li>
<li><strong>牙龈按摩：</strong>用干净手指轻柔摩擦牙龈</li>
<li><strong>婴儿对乙酰氨基酚：</strong>严重不适时咨询医生</li>
</ul>
<h2>需要避免的事项</h2>
<p>FDA警告不要对2岁以下儿童使用含苯佐卡因的牙胶（如Orajel）——可能引起罕见但严重的高铁血红蛋白血症。琥珀牙胶项链有勒颈和窒息风险，不推荐使用。</p>
<h2>开始牙齿护理</h2>
<p>第一颗牙萌出后，立即开始每天两次刷牙，使用米粒大小的含氟牙膏。在宝宝第一个生日前或第一颗牙萌出后6个月内安排第一次牙科检查。</p>`,
    contentEn: `<h2>When Do Babies Start Teething?</h2>
<p>Most babies get their first tooth between 4 and 7 months, though anywhere from 3 to 12 months is considered normal. By age 3, most children have all 20 primary (baby) teeth.</p>
<h2>Common Teething Symptoms</h2>
<ul>
<li>Excessive drooling (can cause a chin rash)</li>
<li>Chewing on everything in sight</li>
<li>Swollen, red, or tender gums</li>
<li>Fussiness and irritability</li>
<li>Mild sleep disruption</li>
</ul>
<p>Note: Teething does <em>not</em> cause high fever, diarrhea, or vomiting. If your baby has these symptoms, consult your pediatrician.</p>
<h2>Safe Ways to Relieve Teething Pain</h2>
<ul>
<li><strong>Cold washcloth:</strong> Wet and chill (not freeze) a clean washcloth for your baby to chew</li>
<li><strong>Teething rings:</strong> Rubber or silicone rings — refrigerate, don't freeze</li>
<li><strong>Gum massage:</strong> Rub gums gently with a clean finger</li>
<li><strong>Infant acetaminophen:</strong> For severe discomfort, ask your doctor about appropriate dosing</li>
</ul>
<h2>What to Avoid</h2>
<p>The FDA warns against teething gels containing benzocaine for children under 2 — they can cause methemoglobinemia. Amber teething necklaces pose strangulation and choking risks and are not recommended by pediatricians.</p>
<h2>Starting Dental Care</h2>
<p>As soon as the first tooth appears, begin brushing twice daily with a rice-grain sized amount of fluoride toothpaste. Schedule your baby's first dental visit by their first birthday.</p>`,
    author: "Dr. Sarah Mitchell, MD",
    date: "2026-01-28",
    readTimeZh: "5分钟",
    readTimeEn: "5 min read",
    tags: ["长牙", "乳牙", "口腔护理", "宝宝健康"],
  },
  {
    slug: "iron-rich-foods-babies-toddlers",
    category: "美食营养",
    titleZh: "婴幼儿补铁食物完全指南",
    titleEn: "Iron-Rich Foods for Babies and Toddlers: A Complete Guide",
    excerptZh: "缺铁是幼儿最常见的营养缺乏症。了解哪些食物富含铁质、如何促进铁的吸收，以及孩子可能缺铁的信号。",
    excerptEn: "Iron deficiency is the most common nutritional deficiency in young children. Learn which foods are highest in iron, how to boost absorption, and signs your child may not be getting enough.",
    contentZh: `<h2>铁质为何如此重要</h2>
<p>铁对大脑发育和血红蛋白的生成至关重要。婴儿出生时携带铁储量，可维持约6个月，之后必须从食物中获取铁质。1–3岁幼儿每天需要7mg铁——对他们的体型来说是相当高的量。</p>
<h2>适合6个月以上婴儿的最佳补铁食物</h2>
<ul>
<li><strong>强化铁的婴儿米糊</strong>——满足铁需求最简便的方式之一</li>
<li><strong>肉泥</strong>（牛肉、鸡肉、火鸡、羊肉）——含血红素铁，吸收率最高</li>
<li><strong>扁豆和豆类泥</strong>——优质植物性铁来源</li>
<li><strong>菠菜和羽衣甘蓝泥</strong>——搭配富含维生素C的食物促进吸收</li>
<li><strong>蛋黄</strong>——约6个月起的良好铁来源</li>
</ul>
<h2>适合幼儿的最佳补铁食物</h2>
<ul>
<li>软煮红肉（牛肉、羊肉）</li>
<li>罐装金枪鱼或三文鱼</li>
<li>豆腐块</li>
<li>强化铁的早餐麦片</li>
<li>鹰嘴豆、芸豆、扁豆</li>
<li>南瓜子（对小幼儿研磨后使用）</li>
</ul>
<h2>如何促进铁的吸收</h2>
<p>将富含铁的食物与维生素C来源（草莓、橙子、甜椒、番茄）搭配食用，可大幅提高吸收率——对植物性铁尤为重要。避免在富含铁的餐食中同时提供牛奶，因为钙会与铁竞争吸收。</p>
<h2>缺铁的信号</h2>
<ul>
<li>皮肤、嘴唇或指甲床苍白</li>
<li>疲劳、精力不足</li>
<li>食欲下降</li>
<li>频繁感染</li>
<li>发育迟缓</li>
</ul>`,
    contentEn: `<h2>Why Iron Is So Important</h2>
<p>Iron is essential for brain development and the production of hemoglobin, which carries oxygen in the blood. Babies are born with iron stores that last about 6 months. Toddlers aged 1–3 need 7mg of iron per day.</p>
<h2>Best Iron-Rich Foods for Babies (6+ months)</h2>
<ul>
<li><strong>Iron-fortified infant cereals</strong> — one of the easiest ways to meet iron needs</li>
<li><strong>Pureed meat</strong> (beef, chicken, turkey, lamb) — contains heme iron, the most absorbable form</li>
<li><strong>Pureed lentils and beans</strong> — excellent plant-based source</li>
<li><strong>Pureed spinach and kale</strong> — combine with vitamin C foods to boost absorption</li>
<li><strong>Egg yolk</strong> — good source from around 6 months</li>
</ul>
<h2>Best Iron-Rich Foods for Toddlers</h2>
<ul>
<li>Soft-cooked red meat (beef, lamb)</li>
<li>Canned tuna or salmon</li>
<li>Tofu cubes</li>
<li>Fortified breakfast cereals</li>
<li>Chickpeas, kidney beans, lentils</li>
</ul>
<h2>How to Boost Iron Absorption</h2>
<p>Pair iron-rich foods with vitamin C sources (strawberries, orange segments, bell peppers, tomatoes) to dramatically increase absorption. Avoid serving cow's milk with iron-rich meals, as calcium competes with iron absorption.</p>
<h2>Signs of Iron Deficiency</h2>
<ul>
<li>Pale skin, lips, or fingernail beds</li>
<li>Fatigue and low energy</li>
<li>Decreased appetite</li>
<li>Frequent infections</li>
<li>Delayed development</li>
</ul>`,
    author: "Amy Chen, Registered Dietitian",
    date: "2026-01-10",
    readTimeZh: "6分钟",
    readTimeEn: "6 min read",
    tags: ["铁质", "营养", "宝宝辅食", "幼儿饮食"],
  },
  {
    slug: "baby-led-weaning-complete-guide",
    category: "美食营养",
    titleZh: "宝宝主导辅食（BLW）：如何运作及入门指南",
    titleEn: "Baby-Led Weaning: How It Works and How to Get Started",
    excerptZh: "BLW跳过泥状辅食，让宝宝从一开始就自己吃软质手指食物。这里是你需要知道的一切，以安全地实践BLW。",
    excerptEn: "Baby-led weaning (BLW) skips purees and lets babies feed themselves soft finger foods from the start. Here's everything you need to know to do it safely.",
    contentZh: `<h2>什么是宝宝主导辅食？</h2>
<p>BLW（Baby-Led Weaning）是一种添加辅食的方式，让宝宝自己抓取软烂的整块食物，而不是被用勺子喂泥状食物。它旨在尊重宝宝自然的发育节奏和饥饿信号。</p>
<h2>何时开始</h2>
<p>就绪信号与泥状辅食相同：约6个月大，能在少量支撑下坐稳，舌推反射消失，对食物表现出兴趣。BLW不要在6个月前开始。</p>
<h2>如何安全准备食物</h2>
<ul>
<li>食物要软到可以用手指捏扁</li>
<li>切成手指大小的条状或块状（便于宝宝握持）</li>
<li>避免圆形食物（葡萄、樱桃番茄）——要纵向切开</li>
<li>第一年内不加盐、糖或蜂蜜</li>
<li>避免硬、脆或粘稠的食物（生苹果、坚果、花生酱直接从勺上舔）</li>
</ul>
<h2>适合BLW入门的食物</h2>
<p>清蒸西兰花小花朵、软煮胡萝卜条、熟透的牛油果片、香蕉段、软煮意大利面、炒鸡蛋、配鹰嘴豆泥或牛油果泥的面包条。</p>
<h2>理解干呕反射</h2>
<p>干呕是正常的，不同于呛噎。婴儿的干呕反射位于口腔前部——这是一种安全机制。干呕看起来很吓人，但通常会自行解决。呛噎是无声的，需要立即处理。开始辅食前请学习婴儿急救。</p>`,
    contentEn: `<h2>What Is Baby-Led Weaning?</h2>
<p>Baby-led weaning (BLW) is an approach where babies self-feed soft, appropriately sized pieces of whole food rather than being spoon-fed purees. It's designed to respect the baby's natural developmental pace and hunger cues.</p>
<h2>When to Start</h2>
<p>The same readiness signs apply as for purees: around 6 months, able to sit up with minimal support, lost the tongue-thrust reflex, and showing interest in food. Never start before 6 months with BLW.</p>
<h2>How to Prepare Food Safely</h2>
<ul>
<li>Food should be soft enough to squish between your fingers</li>
<li>Cut into strips or sticks about the size of your finger</li>
<li>Avoid round shapes (grapes, cherry tomatoes) — cut them lengthwise</li>
<li>No added salt, sugar, or honey in the first year</li>
<li>Avoid hard, crunchy, or sticky foods</li>
</ul>
<h2>Good First BLW Foods</h2>
<p>Steamed broccoli florets, soft-cooked carrot sticks, ripe avocado slices, banana pieces, soft-cooked pasta, scrambled egg, toast fingers with hummus or mashed avocado.</p>
<h2>Understanding the Gag Reflex</h2>
<p>Gagging is normal and different from choking. Babies have a very sensitive gag reflex positioned far forward in the mouth — this is a safety mechanism. Always supervise meals and learn infant first aid before starting solids.</p>`,
    author: "Amy Chen, Registered Dietitian",
    date: "2026-01-22",
    readTimeZh: "7分钟",
    readTimeEn: "7 min read",
    tags: ["宝宝主导辅食", "BLW", "手指食物", "辅食"],
  },
  {
    slug: "foods-that-boost-brain-development",
    category: "美食营养",
    titleZh: "10种促进孩子大脑发育的食物",
    titleEn: "10 Foods That Support Your Child's Brain Development",
    excerptZh: "人生最初五年是大脑发育的关键窗口。这些富含营养的食物为孩子成长中的大脑提供最需要的基础材料。",
    excerptEn: "The first five years are a critical window for brain development. These nutrient-rich foods provide the building blocks your child's growing brain needs most.",
    contentZh: `<h2>营养为何对大脑发育至关重要</h2>
<p>大脑在生命最初几年的生长速度超过其他任何时期。3岁时，孩子的大脑已达到成人大小的80%。特定营养素——Omega-3脂肪酸、铁、锌、碘、胆碱和B族维生素——在神经发育、髓鞘形成和认知功能中发挥关键作用。</p>
<h2>最佳健脑食物</h2>
<h3>1. 富脂鱼类（三文鱼、沙丁鱼、鲭鱼）</h3>
<p>富含DHA Omega-3脂肪酸，是大脑的主要结构性脂肪。每周争取吃2次。选择低汞品种，如三文鱼和沙丁鱼。</p>
<h3>2. 鸡蛋</h3>
<p>含有胆碱，对记忆和神经递质产生至关重要。营养在蛋黄中——不要跳过它。</p>
<h3>3. 浆果</h3>
<p>蓝莓、草莓和黑莓富含抗氧化剂，保护脑细胞免受氧化应激并支持记忆。</p>
<h3>4. 绿叶蔬菜</h3>
<p>菠菜、羽衣甘蓝和西兰花提供叶酸和维生素K，支持认知功能。如果孩子抗拒，可以混入奶昔。</p>
<h3>5. 豆类和扁豆</h3>
<p>铁、锌和B族维生素的优质来源——对大脑能量和神经递质合成都不可或缺。</p>
<h3>6. 全谷物</h3>
<p>提供稳定的葡萄糖——大脑首选的燃料。燕麦、全麦和藜麦是很好的选择。</p>
<h3>7. 酸奶</h3>
<p>乳制品中的碘对甲状腺功能和大脑发育至关重要。全脂原味酸奶对幼儿最为理想。</p>
<h2>实用建议</h2>
<p>注重多样性而非完美。吃多种全食物的孩子会自然获得所需的大多数营养素。限制添加糖高的超加工食品，因为它们会取代更有营养的选择。</p>`,
    contentEn: `<h2>Why Nutrition Matters for Brain Development</h2>
<p>The brain grows faster in the first few years of life than at any other time. By age 3, a child's brain has reached 80% of its adult size. Specific nutrients — omega-3 fatty acids, iron, zinc, iodine, choline, and B vitamins — play key roles in neural development.</p>
<h2>Top Brain-Boosting Foods</h2>
<h3>1. Fatty Fish (Salmon, Sardines, Mackerel)</h3>
<p>Rich in DHA omega-3 fatty acids, which are the primary structural fat in the brain. Aim for 2 servings per week. Choose low-mercury options like salmon and sardines.</p>
<h3>2. Eggs</h3>
<p>Contain choline, which is essential for memory and neurotransmitter production. The yolk is where the nutrients are — don't skip it.</p>
<h3>3. Berries</h3>
<p>Blueberries, strawberries, and blackberries are packed with antioxidants that protect brain cells and support memory.</p>
<h3>4. Leafy Greens</h3>
<p>Spinach, kale, and broccoli provide folate and vitamin K, which support cognitive function.</p>
<h3>5. Beans and Lentils</h3>
<p>Excellent source of iron, zinc, and B vitamins — all essential for brain energy and neurotransmitter synthesis.</p>
<h3>6. Whole Grains</h3>
<p>Provide steady glucose — the brain's preferred fuel. Oats, whole wheat, and quinoa are great choices.</p>
<h3>7. Yogurt</h3>
<p>Iodine (found in dairy) is critical for thyroid function and brain development. Full-fat, plain yogurt is ideal for young children.</p>
<h2>Practical Tips</h2>
<p>Focus on variety over perfection. A child who eats a wide range of whole foods will naturally get most of the nutrients they need.</p>`,
    author: "Amy Chen, Registered Dietitian",
    date: "2026-02-11",
    readTimeZh: "6分钟",
    readTimeEn: "6 min read",
    tags: ["大脑发育", "营养", "Omega-3", "幼儿饮食"],
  },
  {
    slug: "gross-motor-milestones-0-2-years",
    category: "成长记录",
    titleZh: "大运动里程碑：从新生儿到2岁",
    titleEn: "Gross Motor Milestones: From Newborn to 2 Years",
    excerptZh: "翻身、坐立、爬行、走路——这是前两年大运动里程碑的完整时间表，以及需要和儿科医生讨论的预警信号。",
    excerptEn: "Rolling, sitting, crawling, walking — here's a complete timeline of gross motor milestones in the first two years, plus red flags that warrant a conversation with your pediatrician.",
    contentZh: `<h2>什么是大运动技能？</h2>
<p>大运动技能涉及用于全身运动的大肌肉群：翻身、坐立、爬行、扶站和行走。这些技能按可预测的顺序发育，但具体时间因孩子而异。</p>
<h2>里程碑时间表</h2>
<h3>0–3个月</h3>
<ul>
<li>俯趴时短暂抬头</li>
<li>2个月时俯趴可将头抬至45°</li>
<li>蹬腿、动手臂</li>
</ul>
<h3>4–6个月</h3>
<ul>
<li>从俯趴翻到仰卧（通常先）再翻回来</li>
<li>直立时头部保持平稳</li>
<li>扶持站立时能支撑体重</li>
<li>有支撑时能坐</li>
</ul>
<h3>7–9个月</h3>
<ul>
<li>能独立坐</li>
<li>进入爬行位置并开始爬（有些宝宝跳过爬行阶段）</li>
<li>扶着家具站立</li>
</ul>
<h3>10–12个月</h3>
<ul>
<li>扶着家具移动</li>
<li>短暂不依靠支撑站立</li>
<li>可能迈出第一步——大多数宝宝在9–12个月走路，但15个月前都属正常</li>
</ul>
<h3>12–24个月</h3>
<ul>
<li>独立平稳行走</li>
<li>爬上家具</li>
<li>跑步（虽然经常摔倒）</li>
<li>踢球</li>
<li>18–24个月扶手爬楼梯</li>
</ul>
<h2>需要就医的预警信号</h2>
<ul>
<li>6个月仍不会翻身</li>
<li>9个月仍不能独立坐</li>
<li>12个月仍不能扶物站立</li>
<li>18个月仍不会走路</li>
<li>任何时候出现已获得运动技能的退步</li>
</ul>`,
    contentEn: `<h2>What Are Gross Motor Skills?</h2>
<p>Gross motor skills involve the large muscle groups used for whole-body movements: rolling, sitting, crawling, pulling to stand, and walking. These skills develop in a predictable sequence, though the exact timing varies considerably between children.</p>
<h2>Milestone Timeline</h2>
<h3>0–3 Months</h3>
<ul>
<li>Lifts head briefly during tummy time</li>
<li>Holds head up at 45° during tummy time by 2 months</li>
<li>Kicks legs and moves arms</li>
</ul>
<h3>4–6 Months</h3>
<ul>
<li>Rolls from tummy to back, then back to tummy</li>
<li>Holds head steady when upright</li>
<li>Bears weight on legs when held standing</li>
<li>Sits with support</li>
</ul>
<h3>7–9 Months</h3>
<ul>
<li>Sits independently</li>
<li>Gets into crawling position and begins crawling</li>
<li>Pulls to stand while holding furniture</li>
</ul>
<h3>10–12 Months</h3>
<ul>
<li>Cruises along furniture</li>
<li>Stands briefly without support</li>
<li>May take first steps — most babies walk between 9 and 12 months, but up to 15 months is normal</li>
</ul>
<h3>12–24 Months</h3>
<ul>
<li>Walks independently and steadily</li>
<li>Climbs onto furniture</li>
<li>Runs (though falls frequently)</li>
<li>Kicks a ball</li>
<li>Walks up stairs with support by 18–24 months</li>
</ul>
<h2>Red Flags to Discuss with Your Doctor</h2>
<ul>
<li>Not rolling by 6 months</li>
<li>Not sitting independently by 9 months</li>
<li>Not standing with support by 12 months</li>
<li>Not walking by 18 months</li>
<li>Loss of previously acquired motor skills at any age</li>
</ul>`,
    author: "Dr. Rachel Foster, Developmental Pediatrician",
    date: "2026-01-18",
    readTimeZh: "7分钟",
    readTimeEn: "7 min read",
    tags: ["大运动", "里程碑", "爬行", "走路", "成长"],
  },
  {
    slug: "cognitive-development-ages-2-5",
    category: "成长记录",
    titleZh: "2–5岁认知发育：孩子大脑里正在发生什么",
    titleEn: "Cognitive Development Ages 2–5: What's Happening in Your Child's Brain",
    excerptZh: "学前期在思维、记忆和解决问题方面都有巨大飞跃。了解2–5岁之间的认知发育情况，以及如何支持它。",
    excerptEn: "The preschool years bring dramatic leaps in thinking, memory, and problem-solving. Here's what cognitive development looks like between ages 2 and 5, and how to support it.",
    contentZh: `<h2>前运算阶段</h2>
<p>在2–7岁之间，孩子处于发展心理学家皮亚杰所称的「前运算阶段」。他们开始用语言和符号来表示物体，进行想象性游戏，并思考这个世界——但思维仍主要是自我中心的、直觉性的，而非逻辑性的。</p>
<h2>按年龄划分的主要认知里程碑</h2>
<h3>2岁</h3>
<ul>
<li>按形状和颜色对物体分类</li>
<li>能遵循两步指令</li>
<li>进行简单的假装游戏</li>
<li>能指出书中被提及的图片</li>
</ul>
<h3>3岁</h3>
<ul>
<li>能做简单拼图（3–4块）</li>
<li>理解「相同」和「不同」的概念</li>
<li>进行更复杂的扮演游戏</li>
<li>能说出基本颜色名称</li>
</ul>
<h3>4岁</h3>
<ul>
<li>数到10及以上</li>
<li>能画出可辨认的图形（有头和四肢的人）</li>
<li>理解因果关系</li>
<li>不停地问「为什么」</li>
</ul>
<h3>5岁</h3>
<ul>
<li>数到20并理解基本数字概念</li>
<li>能写一些字母和数字</li>
<li>理解时间概念（昨天、今天、明天）</li>
<li>能讲述有开头、中间和结尾的故事</li>
</ul>
<h2>如何支持认知发育</h2>
<ul>
<li><strong>每天一起阅读</strong>——没有什么比这更有效地建立词汇量和认知能力</li>
<li><strong>提开放式问题</strong>——「你觉得会发生什么？」能激发推理思维</li>
<li><strong>提供开放式玩具</strong>——积木、橡皮泥和艺术材料鼓励创意思维</li>
<li><strong>限制被动屏幕时间</strong>——优先保证互动游戏和对话</li>
<li><strong>让他们自己解决问题</strong>——当他们遇到困难时，克制立即介入的冲动</li>
</ul>`,
    contentEn: `<h2>The Preoperational Stage</h2>
<p>Between ages 2 and 7, children are in what developmental psychologist Jean Piaget called the "preoperational stage." They begin using language and symbols to represent objects, engage in imaginative play, and think about the world — but their thinking is still largely egocentric and intuitive rather than logical.</p>
<h2>Key Cognitive Milestones by Age</h2>
<h3>Age 2</h3>
<ul>
<li>Sorts objects by shape and color</li>
<li>Follows two-step instructions</li>
<li>Engages in simple make-believe play</li>
<li>Points to named pictures in a book</li>
</ul>
<h3>Age 3</h3>
<ul>
<li>Works simple puzzles (3–4 pieces)</li>
<li>Understands the concept of "same" and "different"</li>
<li>Engages in more elaborate pretend play</li>
<li>Names basic colors</li>
</ul>
<h3>Age 4</h3>
<ul>
<li>Counts to 10 and beyond</li>
<li>Draws recognizable figures</li>
<li>Understands cause and effect</li>
<li>Asks "why" questions constantly</li>
</ul>
<h3>Age 5</h3>
<ul>
<li>Counts to 20 and understands basic number concepts</li>
<li>Writes some letters and numbers</li>
<li>Understands the concept of time</li>
<li>Can tell a story with a beginning, middle, and end</li>
</ul>
<h2>How to Support Cognitive Development</h2>
<ul>
<li><strong>Read together daily</strong> — nothing builds vocabulary and cognition more effectively</li>
<li><strong>Ask open-ended questions</strong> — "What do you think will happen?" stimulates reasoning</li>
<li><strong>Provide open-ended toys</strong> — blocks, playdough, and art supplies encourage creative thinking</li>
<li><strong>Limit passive screen time</strong> — prioritize interactive play and conversation</li>
<li><strong>Let them problem-solve</strong> — resist the urge to jump in immediately when they're struggling</li>
</ul>`,
    author: "Dr. Rachel Foster, Developmental Pediatrician",
    date: "2026-02-07",
    readTimeZh: "7分钟",
    readTimeEn: "7 min read",
    tags: ["认知发育", "学前", "里程碑", "学习"],
  },
  {
    slug: "breastfeeding-basics-new-moms",
    category: "孕育新生",
    titleZh: "母乳喂养基础：每位新手妈妈需要知道的事",
    titleEn: "Breastfeeding Basics: What Every New Mom Needs to Know",
    excerptZh: "母乳喂养很自然，但不总是那么容易。关于含乳、奶量、常见困难以及何时寻求帮助的实用指南。",
    excerptEn: "Breastfeeding is natural, but it doesn't always come naturally. Here's a practical guide to latching, milk supply, common challenges, and when to ask for help.",
    contentZh: `<h2>最初几个小时很重要</h2>
<p>出生后立即肌肤接触，并在第一个小时内尝试哺乳，有助于刺激泌乳。宝宝出生时天生有强烈的吸吮本能，在出生后1–2小时内最为活跃。</p>
<h2>正确含乳</h2>
<p>正确的含乳是舒适有效母乳喂养的基础。宝宝应含住大部分乳晕——而不仅仅是乳头。正确含乳的信号：最初几秒后不再疼痛、能听到吞咽声、宝宝嘴唇向外翻、下巴接触到乳房。整个哺乳过程中持续的疼痛通常意味着含乳姿势有问题。</p>
<h2>喂奶频率</h2>
<p>新生儿每天喂8–12次（每2–3小时一次）。按需哺乳——注意早期饥饿信号（觅食、吸吮小手、头部转动），不要等到哭泣才喂。最初几周，如果宝宝睡眠超过3–4小时，可能需要叫醒喂奶。</p>
<h2>了解你的乳汁</h2>
<ul>
<li><strong>初乳（1–3天）：</strong>浓稠、黄色，富含抗体。量少是正常的且足够的。</li>
<li><strong>过渡乳（3–14天）：</strong>乳汁「来」了，乳房感觉更胀</li>
<li><strong>成熟乳（2周以上）：</strong>看起来更稀薄但营养完全</li>
</ul>
<h2>常见困难及解决方法</h2>
<ul>
<li><strong>乳头疼痛：</strong>通常是含乳问题——咨询哺乳顾问</li>
<li><strong>乳房充盈：</strong>频繁喂奶；喂前热敷，喂后冷敷</li>
<li><strong>奶量不足担忧：</strong>通常是误解——湿尿布数量和体重增长是比「感觉空了」更好的指标</li>
<li><strong>乳腺炎：</strong>出现类流感症状加上发红发热的乳房——联系医生，通常需要抗生素</li>
</ul>`,
    contentEn: `<h2>The First Hours Matter</h2>
<p>Skin-to-skin contact immediately after birth and attempting to nurse within the first hour helps stimulate milk production and establishes feeding.</p>
<h2>Getting a Good Latch</h2>
<p>A proper latch is the foundation of comfortable, effective breastfeeding. Your baby should take in a large portion of the areola — not just the nipple. Signs of a good latch: no pain after the first few seconds, you can hear swallowing, baby's lips are flanged outward. Pain that persists throughout a feeding usually signals a latch issue.</p>
<h2>How Often to Feed</h2>
<p>Newborns feed 8–12 times per day (every 2–3 hours). Feed on demand — watch for early hunger cues rather than waiting for crying. In the early weeks, you may need to wake your baby to feed if they sleep longer than 3–4 hours.</p>
<h2>Understanding Your Milk</h2>
<ul>
<li><strong>Colostrum (days 1–3):</strong> Thick, yellowish, and packed with antibodies. Small amounts are normal and sufficient.</li>
<li><strong>Transitional milk (days 3–14):</strong> Milk "comes in," breasts feel fuller</li>
<li><strong>Mature milk (2+ weeks):</strong> More watery-looking but perfectly nutritious</li>
</ul>
<h2>Common Challenges and Solutions</h2>
<ul>
<li><strong>Sore nipples:</strong> Usually a latch issue — see a lactation consultant</li>
<li><strong>Engorgement:</strong> Feed frequently; apply a warm compress before feeding and cold after</li>
<li><strong>Low supply concerns:</strong> Often unfounded — wet diapers and weight gain are better indicators</li>
<li><strong>Mastitis:</strong> Flu-like symptoms with a red, hot breast — contact your doctor, usually needs antibiotics</li>
</ul>`,
    author: "Dr. Olivia Barnes, OB-GYN",
    date: "2026-01-08",
    readTimeZh: "8分钟",
    readTimeEn: "8 min read",
    tags: ["母乳喂养", "新生儿", "产后", "哺乳"],
  },
  {
    slug: "postpartum-depression-signs-help",
    category: "孕育新生",
    titleZh: "产后抑郁：症状、信号及如何获得帮助",
    titleEn: "Postpartum Depression: Signs, Symptoms, and How to Get Help",
    excerptZh: "产后抑郁影响七分之一的新手妈妈——但大多数人没有接受治疗。了解如何识别它、它与产后情绪低落有何不同，以及在哪里寻求支持。",
    excerptEn: "Postpartum depression affects 1 in 7 new mothers — yet most go untreated. Learn how to recognize it, how it differs from the baby blues, and where to find support.",
    contentZh: `<h2>产后情绪低落 vs. 产后抑郁</h2>
<p>多达80%的新手妈妈会经历「产后情绪低落」——产后1–2周内的哭泣、情绪波动和焦虑。这是分娩后激素骤变引起的，会自行消退。产后抑郁（PPD）则不同：更强烈、持续更长（超过2周），并干扰日常生活。</p>
<h2>产后抑郁的信号</h2>
<ul>
<li>持续的悲伤、空虚或绝望感</li>
<li>对以前喜欢的活动失去兴趣</li>
<li>难以与宝宝建立联结</li>
<li>从家人和朋友中退缩</li>
<li>超出正常新生儿影响的睡眠或饮食变化</li>
<li>极度疲劳</li>
<li>无价值感、羞愧或内疚</li>
<li>难以清晰思考或做决定</li>
<li>有伤害自己或宝宝的想法（立即寻求帮助）</li>
</ul>
<h2>谁有风险？</h2>
<p>PPD可能影响任何新手妈妈，不分年龄、收入、文化或孩子数量。风险因素包括个人或家族抑郁史、孕期焦虑、生活压力大、缺乏支持以及分娩困难。</p>
<h2>获得帮助</h2>
<p>与你的妇科医生、助产士或家庭医生沟通。有效的治疗包括心理治疗（尤其是认知行为治疗）、药物治疗（几种抗抑郁药在哺乳期是安全的）和支持团体。你不是坏妈妈——PPD是一种医学疾病，不是个人失败。</p>`,
    contentEn: `<h2>Baby Blues vs. Postpartum Depression</h2>
<p>Up to 80% of new mothers experience the "baby blues" — tearfulness, mood swings, and anxiety in the first 1–2 weeks after birth. This resolves on its own. Postpartum depression (PPD) is different: it's more intense, lasts longer (beyond 2 weeks), and interferes with daily functioning.</p>
<h2>Signs of Postpartum Depression</h2>
<ul>
<li>Persistent sadness, emptiness, or hopelessness</li>
<li>Loss of interest or pleasure in activities you used to enjoy</li>
<li>Difficulty bonding with your baby</li>
<li>Withdrawing from family and friends</li>
<li>Changes in appetite or sleep beyond normal newborn disruption</li>
<li>Overwhelming fatigue or loss of energy</li>
<li>Feelings of worthlessness, shame, or guilt</li>
<li>Difficulty thinking clearly or making decisions</li>
<li>Thoughts of harming yourself or your baby (seek help immediately)</li>
</ul>
<h2>Who Is at Risk?</h2>
<p>PPD can affect any new mother regardless of age, income, culture, or number of previous children. Risk factors include a personal or family history of depression, anxiety during pregnancy, stressful life events, and lack of support.</p>
<h2>Getting Help</h2>
<p>Talk to your OB, midwife, or primary care doctor. Effective treatments include therapy (particularly cognitive behavioral therapy), medication (several antidepressants are safe during breastfeeding), and support groups. You are not a bad mother for struggling — PPD is a medical condition, not a personal failure.</p>`,
    author: "Dr. Olivia Barnes, OB-GYN",
    date: "2026-02-19",
    readTimeZh: "7分钟",
    readTimeEn: "7 min read",
    tags: ["产后抑郁", "心理健康", "PPD", "新手妈妈"],
  },
  {
    slug: "car-seat-safety-guide",
    category: "安全防护",
    titleZh: "儿童安全座椅：安装、类型及年龄指南",
    titleEn: "Car Seat Safety: Installation, Types, and Age Guidelines",
    excerptZh: "车祸是儿童死亡的主要原因之一。正确使用合适的安全座椅可将死亡风险降低多达71%。这里是你需要知道的一切。",
    excerptEn: "Car crashes are a leading cause of death for children. Installing and using the right car seat correctly can reduce the risk of death by up to 71%. Here's everything you need to know.",
    contentZh: `<h2>按年龄和体型划分的安全座椅类型</h2>
<h3>后向婴儿安全椅</h3>
<p>适合新生儿和婴儿。尽可能长时间保持后向——直到孩子达到座椅的最大身高或重量限制（通常远超2岁）。后向是最安全的位置，因为它将碰撞力分散到全身。</p>
<h3>后向可转换安全椅</h3>
<p>后向使用时间比婴儿安全椅更长，然后可转换为前向。对于成长中的孩子是个好投资。</p>
<h3>前向安全椅（带肩带）</h3>
<p>孩子超过后向限制后，配有5点式安全带的前向安全椅是下一步。让孩子一直使用这个位置，直到达到安全椅的安全带限制。</p>
<h3>增高座椅</h3>
<p>孩子超过安全带限制后配合车辆安全带使用，直到安全带贴合良好——通常身高约4英尺9英寸（约145厘米），通常在8–12岁之间。</p>
<h2>常见安装错误</h2>
<ul>
<li>座椅前后或左右移动超过1英寸——太松了</li>
<li>肩带扭曲或不够紧（捏测试：不应有多余空隙）</li>
<li>胸夹位置在肚子而不是腋窝水平</li>
<li>使用来历不明的二手座椅（永远不要使用经历过碰撞的座椅）</li>
<li>使用过了保质期的座椅</li>
</ul>`,
    contentEn: `<h2>Car Seat Types by Age and Size</h2>
<h3>Rear-Facing Infant Seats</h3>
<p>For newborns and infants. Keep children rear-facing as long as possible — until they reach the maximum height or weight limit of their seat (usually well past age 2). Rear-facing is the safest position because it distributes crash forces across the whole body.</p>
<h3>Rear-Facing Convertible Seats</h3>
<p>Can be used rear-facing for longer than infant seats, then converted to forward-facing. A good investment for growing children.</p>
<h3>Forward-Facing with Harness</h3>
<p>Once a child outgrows rear-facing limits, forward-facing with a 5-point harness is the next step.</p>
<h3>Booster Seats</h3>
<p>Used with the vehicle's seat belt once the child outgrows the harness. Children should use a booster until the seat belt fits properly — typically around 4'9" tall, usually between ages 8–12.</p>
<h2>Installation Mistakes to Avoid</h2>
<ul>
<li>Seat moves more than 1 inch side to side or front to back — it's too loose</li>
<li>Harness straps are twisted or not snug (pinch test: no slack should remain)</li>
<li>Chest clip positioned at the belly instead of armpit level</li>
<li>Using a second-hand seat without knowing its history</li>
<li>Using a seat that has passed its expiration date</li>
</ul>`,
    author: "Tom Bradley, Child Safety Specialist",
    date: "2026-01-30",
    readTimeZh: "7分钟",
    readTimeEn: "7 min read",
    tags: ["安全座椅", "行车安全", "婴儿安全"],
  },
  {
    slug: "water-safety-babies-toddlers",
    category: "安全防护",
    titleZh: "婴幼儿水上安全：溺水预防指南",
    titleEn: "Water Safety for Babies and Toddlers: Drowning Prevention Guide",
    excerptZh: "溺水是1–4岁儿童意外死亡的主要原因。大多数溺水发生在家庭泳池和浴缸中。以下是保护孩子远离水边危险的方法。",
    excerptEn: "Drowning is the leading cause of accidental death in children ages 1–4. Most drownings happen in home pools and bathtubs. Here's how to keep your child safe around water.",
    contentZh: `<h2>溺水的残酷现实</h2>
<p>溺水可能在几秒钟内发生，仅需1–2英寸（约5厘米）的水。它几乎总是无声的——与电影中戏剧性的拍打不同。孩子在大人在场、只是转眼片刻的情况下就可能溺水。持续的、臂长范围内的监督是最重要的保护。</p>
<h2>浴缸安全</h2>
<ul>
<li>永远不要单独将婴儿或幼儿留在浴缸中——哪怕一秒钟，哪怕去接电话或开门</li>
<li>使用后立即将浴缸中的水排干</li>
<li>避免使用浴椅和浴圈——它们不是安全设备，会带来虚假的安全感</li>
<li>马桶盖保持关闭，对幼儿使用马桶锁</li>
</ul>
<h2>家庭泳池安全</h2>
<ul>
<li>在所有家庭泳池周围安装四面围栏，配有自动关闭、自动锁定的门——这一单一措施可将溺水风险降低多达83%</li>
<li>不使用时取下地上泳池的步梯</li>
<li>充气泳池不安全——每次使用后排空并收起</li>
<li>学习CPR——立即实施CPR可显著提高存活率</li>
</ul>
<h2>游泳课</h2>
<p>美国儿科学会建议大多数孩子从1岁开始学游泳。研究表明，正式游泳课可将1–4岁儿童溺水风险降低多达88%。但游泳课不能让孩子「防溺水」——监督仍然必不可少。</p>`,
    contentEn: `<h2>The Shocking Reality of Drowning</h2>
<p>Drowning can happen in seconds and in as little as 1–2 inches of water. It is almost always silent. A child can drown while an adult is present and looking away for just a moment. Constant, within-arm's-reach supervision is the most important protection.</p>
<h2>Bathtub Safety</h2>
<ul>
<li>Never leave a baby or toddler alone in the bath — not for a second, not to answer the door or phone</li>
<li>Empty the tub immediately after use</li>
<li>Avoid bath seats and rings — they are not safety devices and create a false sense of security</li>
<li>Keep toilet lids closed and use lid locks for toddlers</li>
</ul>
<h2>Home Pool Safety</h2>
<ul>
<li>Install a 4-sided fence with a self-closing, self-latching gate around all home pools — this single measure reduces drowning risk by up to 83%</li>
<li>Remove steps and ladders from above-ground pools when not in use</li>
<li>Never rely on inflatable pools as safe — empty and store them after each use</li>
<li>Learn CPR — survival rates improve dramatically with immediate CPR</li>
</ul>
<h2>Swimming Lessons</h2>
<p>The AAP recommends swimming lessons for most children starting at age 1. Research shows formal swim lessons reduce drowning risk in children ages 1–4 by up to 88%. However, swim lessons do not make a child "drown-proof" — supervision remains essential.</p>`,
    author: "Tom Bradley, Child Safety Specialist",
    date: "2026-02-25",
    readTimeZh: "6分钟",
    readTimeEn: "6 min read",
    tags: ["水上安全", "溺水预防", "泳池安全", "幼儿安全"],
  },
  {
    slug: "potty-training-complete-guide",
    category: "育儿经",
    titleZh: "如厕训练：何时开始以及如何成功",
    titleEn: "Potty Training: When to Start and How to Succeed",
    excerptZh: "大多数孩子在18–36个月之间做好如厕训练的准备。了解如何识别就绪信号、选择方法以及无压力地应对意外。",
    excerptEn: "Most children are ready for potty training between 18 and 36 months. Here's how to recognize the signs of readiness, choose a method, and handle setbacks without stress.",
    contentZh: `<h2>孩子准备好的信号</h2>
<p>就绪程度——而非年龄——才是关键因素。大多数孩子在18–36个月之间表现出准备迹象，但在准备好之前强推会导致更漫长、更令人沮丧的训练。寻找：连续2小时以上保持干燥、对卫生间或他人如厕表现出兴趣、拉扯湿尿布、能遵循简单的两步指令。</p>
<h2>选择方法</h2>
<h3>孩子主导（渐进式）方法</h3>
<p>随意地介绍马桶，先让孩子穿着衣服坐在马桶上，阅读关于如厕的绘本，并在数周或数月内跟随孩子的节奏。压力低、压力小、节奏慢。</p>
<h3>3天集中训练法</h3>
<p>清出三天在家，完全抛弃尿布（睡眠除外），密切观察信号，一有需要就冲向马桶。需要投入，但对真正准备好的孩子效果很快。</p>
<h2>处理意外</h2>
<p>保持冷静。意外是正常的，不是失败的迹象。平静地清理，不要羞耻或惩罚。负面反应会增加焦虑，使训练更难。真诚地赞美成功，但不要过度庆祝——让它感觉自然，而不是高风险。</p>
<h2>夜间训练稍后进行</h2>
<p>夜间干燥主要由一种荷尔蒙（ADH）控制，这种荷尔蒙独立于白天训练而成熟——通常在之后6个月到2年。不要催促夜间干燥，直到孩子连续在干燥状态下醒来。使用床垫保护套，放松面对它。</p>`,
    contentEn: `<h2>Signs Your Child Is Ready</h2>
<p>Readiness — not age — is the key factor. Most children show signs between 18–36 months, but pushing before they're ready leads to longer, more frustrating training. Look for: staying dry for 2+ hours at a stretch, showing interest in the bathroom, pulling at a wet or dirty diaper, and being able to follow simple two-step instructions.</p>
<h2>Choosing a Method</h2>
<h3>Child-Led (Gradual) Approach</h3>
<p>Introduce the potty casually, let your child sit on it with clothes on first, read books about toileting, and follow their lead over weeks or months. Low pressure, low stress, slower pace.</p>
<h3>3-Day Method (Intensive Training)</h3>
<p>Clear three days at home, ditch diapers completely (except sleep), watch closely for cues, and rush to the potty at the first sign of needing to go. Requires dedication but can work quickly for children who are truly ready.</p>
<h2>Handling Accidents</h2>
<p>Stay calm. Accidents are normal and are not signs of failure. Clean up matter-of-factly without shame or punishment. Negative reactions increase anxiety, which makes training harder. Praise success genuinely but don't over-celebrate.</p>
<h2>Night Training Comes Later</h2>
<p>Nighttime dryness is largely controlled by a hormone (ADH) that matures independently of daytime training — often 6 months to 2 years later. Don't pressure night dryness until your child wakes consistently dry.</p>`,
    author: "Lisa Tanner, Child Psychologist",
    date: "2026-02-14",
    readTimeZh: "7分钟",
    readTimeEn: "7 min read",
    tags: ["如厕训练", "幼儿", "育儿"],
  },
  {
    slug: "raising-emotionally-intelligent-children",
    category: "育儿经",
    titleZh: "如何培养高情商的孩子",
    titleEn: "How to Raise an Emotionally Intelligent Child",
    excerptZh: "情商对于成功、人际关系和心理健康的预测能力超过智商。以下是从最小的年龄开始培养情商的方法。",
    excerptEn: "Emotional intelligence predicts success, relationships, and mental health more than IQ. Here's how to nurture it from the earliest years.",
    contentZh: `<h2>什么是情商？</h2>
<p>情商（EQ）是认识、理解、管理和表达情绪的能力——以及认识并回应他人情绪的能力。研究表明，高情商的孩子有更好的友谊、更好的学业表现、更有效地处理压力，并且行为问题更少。</p>
<h2>情绪辅导：核心技能</h2>
<p>情绪辅导包括四个步骤：注意并命名孩子的情绪、将情绪视为联结的机会、在解决问题前先产生共情、在接受感受的同时设定界限。</p>
<p>不要说「别哭了，没什么大不了的」，而要说「我看到你真的很失望。当事情不如预期时确实很难受。我们来想想下一步该怎么做。」</p>
<h2>从出生开始培养情商</h2>
<ul>
<li><strong>婴儿：</strong>持续回应哭声。这教会孩子情绪信号会得到回应——情感安全感的基础。</li>
<li><strong>幼儿：</strong>大声命名情绪：「你因为积木倒了而沮丧。」提供情绪词汇。</li>
<li><strong>学前儿童：</strong>阅读有情感主题的书籍。问「你觉得她感觉怎么样？」指出他人的情绪。</li>
<li><strong>学龄儿童：</strong>情绪平静后一起解决问题。教导所有感受都是可以接受的；并非所有行为都是可以接受的。</li>
</ul>
<h2>以身作则</h2>
<p>孩子主要通过观察大人来学习情绪调节。当你说「我现在感到沮丧，所以我要先深呼吸再回应」，你正在教一个宝贵的课程。</p>`,
    contentEn: `<h2>What Is Emotional Intelligence?</h2>
<p>Emotional intelligence (EQ) is the ability to recognize, understand, manage, and express emotions — and to recognize and respond to emotions in others. Research shows that children with high EQ have better friendships, perform better academically, handle stress more effectively, and have fewer behavioral problems.</p>
<h2>Emotion Coaching: The Core Skill</h2>
<p>Emotion coaching involves four steps: noticing and naming your child's emotion, treating emotions as opportunities for connection, empathizing before problem-solving, and setting limits while validating feelings.</p>
<p>Instead of "Stop crying, it's not a big deal," try "I can see you're really disappointed. It's hard when things don't go the way we hoped. Let's figure out what to do next."</p>
<h2>Building EQ from Birth</h2>
<ul>
<li><strong>Infants:</strong> Respond consistently to cries. This teaches that emotions signal needs that get met — the foundation of emotional security.</li>
<li><strong>Toddlers:</strong> Name emotions out loud: "You're frustrated that the blocks fell down." Provide a feelings vocabulary.</li>
<li><strong>Preschoolers:</strong> Read books with emotional themes. Ask "How do you think she feels?"</li>
<li><strong>School age:</strong> Problem-solve together after emotions settle. Teach that all feelings are okay; not all behaviors are.</li>
</ul>
<h2>Model What You Want to See</h2>
<p>Children learn emotional regulation primarily by watching adults. When you say "I'm feeling frustrated right now, so I'm going to take a few deep breaths before I respond," you're teaching an invaluable lesson.</p>`,
    author: "Lisa Tanner, Child Psychologist",
    date: "2026-02-28",
    readTimeZh: "6分钟",
    readTimeEn: "6 min read",
    tags: ["情商", "EQ", "育儿", "儿童发展"],
  },
  {
    slug: "sleep-training-methods-compared",
    category: "育儿经",
    titleZh: "睡眠训练方法对比：哭声免疫法、法伯法与无哭泣方案",
    titleEn: "Sleep Training Methods Compared: CIO, Ferber, and No-Cry Options",
    excerptZh: "帮助宝宝整觉睡眠没有唯一正确的方式。我们分析了最流行的睡眠训练方法，帮你选择最适合你家的方案。",
    excerptEn: "There's no single right way to help your baby sleep through the night. We break down the most popular sleep training methods so you can choose what works best for your family.",
    contentZh: `<h2>何时可以开始睡眠训练？</h2>
<p>大多数儿科医生建议等到宝宝至少4–6个月大再进行睡眠训练。到这个年龄，许多宝宝在发育上已经能够睡更长时间并自我安抚。开始前请与医生确认。</p>
<h2>哭声免疫法（消退法）</h2>
<p>将宝宝清醒地放入婴儿床，父母直到早晨（或设定时间）都不返回。这种方法往往见效快——通常3晚内。对父母情感上可能很难，但研究一致表明它不会对宝宝造成长期心理伤害。</p>
<h2>法伯法（渐进式消退）</h2>
<p>父母在逐渐延长的时间间隔后查看（例如3分钟，然后5分钟，再10分钟），但不抱起宝宝。查看提供安慰，同时鼓励自我安抚。这是一种折中方法，许多父母觉得可以接受。</p>
<h2>无哭泣方法</h2>
<p>如「睡眠女士跨步法」或Elizabeth Pantley的无哭泣方法，涉及渐进式的父母撤退——在2–4周内每晚慢慢离婴儿床更远。需要时间更长但几乎不涉及哭泣。对于觉得长时间哭泣太有压力的家庭效果很好。</p>
<h2>椅子法</h2>
<p>父母坐在婴儿床旁边的椅子上，直到宝宝入睡，每隔几晚将椅子移得更远，直到在房间外面。温和渐进，但需要显著的一致性。</p>`,
    contentEn: `<h2>When Can You Start Sleep Training?</h2>
<p>Most pediatricians recommend waiting until babies are at least 4–6 months old before sleep training. Always confirm with your doctor before beginning.</p>
<h2>Cry It Out (Extinction Method)</h2>
<p>The baby is placed in the crib awake and parents do not return until morning. This method tends to work quickly — often within 3 nights. Research consistently shows it does not cause long-term psychological harm to babies.</p>
<h2>The Ferber Method (Graduated Extinction)</h2>
<p>Parents check in at progressively longer intervals without picking up the baby. The check-ins provide reassurance while still encouraging self-soothing. This is a middle-ground approach that many parents find manageable.</p>
<h2>No-Cry Methods</h2>
<p>Approaches like the "Sleep Lady Shuffle" involve gradual parental withdrawal — slowly moving further from the crib each night over 2–4 weeks. These take longer but involve little to no crying.</p>
<h2>Chair Method</h2>
<p>A parent sits in a chair near the crib until the baby falls asleep, moving the chair further away every few nights until they're outside the room. Gentle and gradual, though it requires significant consistency.</p>`,
    author: "Lisa Tanner, Child Psychologist",
    date: "2026-02-03",
    readTimeZh: "7分钟",
    readTimeEn: "7 min read",
    tags: ["睡眠训练", "法伯法", "宝宝睡眠", "育儿"],
  },
  {
    slug: "language-development-toddlers-1-3",
    category: "成长记录",
    titleZh: "幼儿语言发育：1–3岁应该期待什么",
    titleEn: "Language Development in Toddlers: What to Expect Ages 1–3",
    excerptZh: "从第一个词到完整句子——语言里程碑及何时寻求帮助的指南。",
    excerptEn: "From first words to full sentences — a guide to speech milestones and when to seek help.",
    contentZh: `<h2>语言爆发期</h2>
<p>在1–3岁之间，孩子从说几个词到能用短句交流。这种快速增长是发育中最令人兴奋——有时也最令人担忧——的阶段之一。了解什么是正常的，有助于你支持孩子并早期发现迟缓。</p>
<h2>12–18个月</h2>
<p>大多数孩子在12个月左右说出第一个真正的词。到18个月，预计有10–20个词，并能遵循简单指令如「过来」或「把球给我」。这个年龄的孩子理解的远多于他们能说的。</p>
<h2>18–24个月</h2>
<p>词汇量迅速增长——通常每周增加几个新词。到2岁，大多数幼儿会组合两个词（「要奶奶」「爸爸去」），词汇量超过50个词。陌生人能理解他们说话的约一半。</p>
<h2>2–3岁</h2>
<p>三词短语出现并增长为简单句子。到3岁，孩子通常有200–1000个词，不停地问「为什么」，陌生人能理解他们约75%的话语。他们开始掌握基本语法规则，尽管不够完美。</p>
<h2>如何支持语言发展</h2>
<ul>
<li><strong>不停地说话：</strong>描述你在做什么。「现在我在切苹果，它是红色的！」</li>
<li><strong>每天大声读书：</strong>哪怕10分钟的共读也能显著提升词汇量。</li>
<li><strong>扩展他们说的话：</strong>他们说「狗」，你说「对，一只大棕狗！」</li>
<li><strong>限制屏幕时间：</strong>被动观看不像现场对话那样建立语言能力。</li>
</ul>
<h2>需要注意的预警信号</h2>
<p>如果孩子：16个月没有词语，任何年龄出现语言技能退步，或24个月仍不能组合两个词，请与儿科医生沟通。早期语言治疗非常有效，越早开始越好。</p>`,
    contentEn: `<h2>The Language Explosion</h2>
<p>Between ages 1 and 3, children go from saying a handful of words to speaking in short sentences. Knowing what's typical helps you support your child and catch delays early.</p>
<h2>12–18 Months</h2>
<p>Most children say their first real word around 12 months. By 18 months, expect 10–20 words and an ability to follow simple instructions. Children at this age understand far more than they can say.</p>
<h2>18–24 Months</h2>
<p>Vocabulary grows rapidly — often adding several new words per week. By age 2, most toddlers combine two words and have 50+ words. Strangers should understand about half of what they say.</p>
<h2>2–3 Years</h2>
<p>Three-word phrases appear and grow into simple sentences. By age 3, children typically have 200–1,000 words, ask "why" constantly, and are understood by strangers about 75% of the time.</p>
<h2>How to Support Language Growth</h2>
<ul>
<li><strong>Talk constantly:</strong> Narrate what you're doing.</li>
<li><strong>Read aloud every day:</strong> Even 10 minutes of shared reading dramatically boosts vocabulary.</li>
<li><strong>Expand what they say:</strong> If they say "dog," you say "Yes, a big brown dog!"</li>
<li><strong>Limit screen time:</strong> Passive viewing doesn't build language the way live conversation does.</li>
</ul>
<h2>Red Flags to Watch For</h2>
<p>Talk to your pediatrician if your child has no words by 16 months, loses language skills at any age, or is not combining words by 24 months.</p>`,
    author: "Dr. Priya Shah, Developmental Pediatrician",
    date: "2026-02-10",
    readTimeZh: "6分钟",
    readTimeEn: "6 min read",
    tags: ["语言发育", "语言里程碑", "幼儿", "成长"],
  },
  {
    slug: "social-emotional-development-preschool",
    category: "成长记录",
    titleZh: "学前期（3–5岁）社会情感发育",
    titleEn: "Social and Emotional Development in Preschoolers (Ages 3–5)",
    excerptZh: "孩子在学前期如何学会管理情绪、交朋友和理解他人。",
    excerptEn: "How children learn to manage feelings, make friends, and understand others during the preschool years.",
    contentZh: `<h2>社会情感技能为何重要</h2>
<p>研究一致表明，社会情感技能——理解和管理情绪、建立关系、对他人产生共情的能力——与学业技能同等重要，甚至对长期成功更有预测性。学前期是建立这一基础的关键窗口。</p>
<h2>3岁时应该期待什么</h2>
<p>三岁的孩子开始理解他人也有感受，但仍主要从自己的角度看世界。预期会有大情绪、难以分享，以及平行游戏——在其他孩子旁边玩，而不是一起玩。</p>
<h2>4–5岁：增长的社会意识</h2>
<p>到4–5岁，孩子开始真正的合作游戏，在游戏中协商角色，并建立真正的友谊。他们变得更擅长等待轮到自己，用语言而不是发脾气来表达感受。同理心加深——他们可能会安慰哭泣的朋友。</p>
<h2>这个年龄段的情绪调节策略</h2>
<ul>
<li><strong>命名感受：</strong>「你现在看起来真的很沮丧。当积木倒下时确实很难受。」</li>
<li><strong>教授平静技巧：</strong>深呼吸（「闻花香，吹蜡烛」）对这个年龄段效果很好。</li>
<li><strong>情景角色扮演：</strong>在情况发生前先演练社交场景。</li>
<li><strong>阅读以情感为主题的书籍：</strong>故事帮助孩子安全地探索感受。</li>
</ul>
<h2>支持友谊技能</h2>
<p>安排与一个孩子的定期玩耍——小群体不那么令人不知所措。从旁辅导而非立即介入。让孩子处理小冲突；只在有人受伤时介入。</p>`,
    contentEn: `<h2>Why Social-Emotional Skills Matter</h2>
<p>Research consistently shows that social-emotional skills — the ability to understand and manage emotions, build relationships, and empathize with others — are as important as academic skills for long-term success. The preschool years are a critical window for building this foundation.</p>
<h2>What to Expect at Age 3</h2>
<p>Three-year-olds are beginning to understand that others have feelings too, but they still see the world primarily through their own perspective. Expect big emotions, difficulty sharing, and parallel play.</p>
<h2>Ages 4–5: Growing Social Awareness</h2>
<p>By age 4–5, children begin true cooperative play, negotiate roles in games, and form genuine friendships. They become better at waiting their turn and expressing feelings in words rather than tantrums.</p>
<h2>Emotional Regulation Strategies for This Age</h2>
<ul>
<li><strong>Name the feeling:</strong> "You look really frustrated right now. It's hard when the tower falls."</li>
<li><strong>Teach calming techniques:</strong> Deep breathing ("smell the flowers, blow out the candles") works well for this age.</li>
<li><strong>Role-play scenarios:</strong> Act out social situations to practice responses before they happen.</li>
<li><strong>Read emotion-focused books:</strong> Stories help children explore feelings safely.</li>
</ul>
<h2>Supporting Friendship Skills</h2>
<p>Arrange regular playdates with one child at a time — smaller groups are less overwhelming. Coach from the sidelines rather than intervening immediately. Let children work through minor conflicts.</p>`,
    author: "Dr. Aisha Okonkwo, Child Psychologist",
    date: "2026-02-17",
    readTimeZh: "7分钟",
    readTimeEn: "7 min read",
    tags: ["社会发展", "情商", "学前", "成长"],
  },
  {
    slug: "second-trimester-guide",
    category: "孕育新生",
    titleZh: "孕中期完全指南：第13–27周",
    titleEn: "The Second Trimester: Your Complete Guide to Weeks 13–27",
    excerptZh: "常被称为「黄金孕期」——应该期待什么、关键检查项目，以及如何保持健康。",
    excerptEn: "Often called the 'golden trimester' — what to expect, key tests, and how to stay healthy.",
    contentZh: `<h2>欢迎来到孕中期</h2>
<p>对大多数孕妇来说，孕中期带来了令人欣慰的缓解。孕吐通常消退，精力恢复，流产风险显著下降。你会开始显怀，并在第18–22周左右第一次感觉到宝宝动。</p>
<h2>身体变化</h2>
<p>这几周子宫迅速扩张。你可能注意到腹部中线颜色加深（妊娠纹线）、子宫伸展引起的圆韧带疼痛，以及乳房增大。由于血容量增加，鼻塞和牙龈出血也很常见。</p>
<h2>关键检查和测试</h2>
<ul>
<li><strong>解剖扫描（18–22周）：</strong>检查胎儿器官的超声波，如需要可显示性别。</li>
<li><strong>四联筛查（15–20周）：</strong>筛查染色体异常的血液检测。</li>
<li><strong>葡萄糖耐量测试（24–28周）：</strong>筛查妊娠糖尿病。</li>
<li><strong>定期产检：</strong>这个孕期通常每4周一次。</li>
</ul>
<h2>感受宝宝动</h2>
<p>初次怀孕的妈妈通常在第18–22周感受到胎动（胎儿初动）。开始时感觉像扑动或气泡。到第24–25周，动作变得更明显。</p>
<h2>营养重点</h2>
<p>钙的需求增加——每天争取摄入1000mg，来自乳制品、强化食品或绿叶蔬菜。随着血容量增加，富含铁的食物仍然重要。继续服用含叶酸和DHA的产前维生素。</p>`,
    contentEn: `<h2>Welcome to the Second Trimester</h2>
<p>For most pregnant women, the second trimester brings welcome relief. Morning sickness usually fades, energy returns, and the risk of miscarriage drops significantly. You'll begin to look visibly pregnant and, around week 18–22, feel your baby move for the first time.</p>
<h2>Physical Changes</h2>
<p>Your uterus expands rapidly during these weeks. You may notice a darkening line down your abdomen (linea nigra), round ligament pain, and growing breasts. Nasal congestion and bleeding gums are common due to increased blood volume.</p>
<h2>Key Appointments and Tests</h2>
<ul>
<li><strong>Anatomy scan (18–22 weeks):</strong> An ultrasound that checks fetal organs and can reveal the sex if desired.</li>
<li><strong>Quad screen (15–20 weeks):</strong> A blood test screening for chromosomal conditions.</li>
<li><strong>Glucose challenge test (24–28 weeks):</strong> Screens for gestational diabetes.</li>
<li><strong>Regular prenatal visits:</strong> Usually every 4 weeks during this trimester.</li>
</ul>
<h2>Feeling Baby Move</h2>
<p>First-time mothers typically feel movement (quickening) between weeks 18–22. It starts as fluttering or bubbles. By week 24–25, movements become more distinct.</p>
<h2>Nutrition Focus</h2>
<p>Calcium needs increase — aim for 1,000 mg daily from dairy, fortified foods, or leafy greens. Iron-rich foods remain important as blood volume expands. Continue your prenatal vitamin with folate and DHA.</p>`,
    author: "Dr. Rachel Kim, OB-GYN",
    date: "2026-02-24",
    readTimeZh: "7分钟",
    readTimeEn: "7 min read",
    tags: ["孕中期", "孕期", "产前检查", "解剖扫描"],
  },
  {
    slug: "preparing-for-labor-birth-plan",
    category: "孕育新生",
    titleZh: "分娩准备：如何制定一份真正有效的生育计划",
    titleEn: "Preparing for Labor: How to Write a Birth Plan That Works",
    excerptZh: "关于制定生育计划的实用指南，以及对分娩过程的现实期望。",
    excerptEn: "A practical guide to creating a birth plan and what to realistically expect during labor.",
    contentZh: `<h2>什么是生育计划？</h2>
<p>生育计划是一份书面文件，向医疗团队传达你对分娩的偏好。它不是保证——分娩难以预测——但它有助于确保你的意愿被知晓，并在大日子来临前与医生展开重要对话。</p>
<h2>应该包含什么</h2>
<ul>
<li><strong>疼痛管理偏好：</strong>硬膜外麻醉、笑气、自然方式或组合方式。</li>
<li><strong>分娩环境：</strong>音乐、灯光、自由走动、可用水中分娩。</li>
<li><strong>支持人员：</strong>你希望谁在场及他们的角色。</li>
<li><strong>胎心监护：</strong>持续电子监护还是间歇性听诊。</li>
<li><strong>干预措施：</strong>关于静脉输液、会阴切开和辅助分娩的偏好。</li>
<li><strong>分娩后：</strong>延迟断脐、立即肌肤接触、母乳喂养启动。</li>
<li><strong>如果需要剖腹产：</strong>「温柔剖腹产」的偏好、谁在场、手术室内的肌肤接触。</li>
</ul>
<h2>保持现实和灵活</h2>
<p>最好的生育计划简短（一页）、聚焦于优先事项，并包含一条说明你愿意根据医疗需要进行调整的备注。过于刚性的计划可能与工作人员产生冲突，并在事情不按计划进行时带来困扰。</p>
<h2>如何使用你的生育计划</h2>
<p>在36周前与你的产科医生或助产士一起审查它。带几份打印副本去医院。温和地介绍自己和你的计划；合作关系带来更好的结果。</p>`,
    contentEn: `<h2>What Is a Birth Plan?</h2>
<p>A birth plan is a written document that communicates your preferences for labor and delivery to your medical team. It's not a guarantee — birth is unpredictable — but it helps ensure your wishes are known and opens important conversations with your provider before the big day.</p>
<h2>What to Include</h2>
<ul>
<li><strong>Pain management preferences:</strong> Epidural, nitrous oxide, natural techniques, or a combination.</li>
<li><strong>Labor environment:</strong> Music, lighting, freedom to move, water immersion if available.</li>
<li><strong>Support people:</strong> Who you want present and their roles.</li>
<li><strong>Interventions:</strong> Your preferences around IV, episiotomy, and assisted delivery if needed.</li>
<li><strong>After birth:</strong> Delayed cord clamping, immediate skin-to-skin, breastfeeding initiation.</li>
</ul>
<h2>Keep It Realistic and Flexible</h2>
<p>The best birth plans are short (one page), focused on priorities, and include a note that you're open to adjustments based on medical necessity. A rigid plan can create conflict with staff and distress if things don't go as planned.</p>
<h2>How to Use Your Birth Plan</h2>
<p>Review it with your OB or midwife before 36 weeks. Bring several printed copies to the hospital. Introduce yourself and your plan warmly; collaborative relationships lead to better outcomes.</p>`,
    author: "Sarah Greenfield, Certified Nurse Midwife",
    date: "2026-03-03",
    readTimeZh: "6分钟",
    readTimeEn: "6 min read",
    tags: ["生育计划", "分娩", "孕期", "分娩准备"],
  },
  {
    slug: "kitchen-safety-with-young-children",
    category: "安全防护",
    titleZh: "有幼儿的厨房安全：预防烧伤和割伤",
    titleEn: "Kitchen Safety with Young Children: Preventing Burns and Cuts",
    excerptZh: "厨房是儿童家庭伤害最常见的发生地。以下是如何保证安全的方法。",
    excerptEn: "The kitchen is the most common site of childhood household injuries. Here's how to keep it safe.",
    contentZh: `<h2>为什么厨房是高风险区域</h2>
<p>厨房里有热表面、锋利工具、重型物件和有毒清洁产品——全都在好奇幼儿够得到的高度。热液体引起的烧伤是5岁以下儿童受伤的主要原因之一。</p>
<h2>炉灶和烤箱安全</h2>
<ul>
<li>尽可能使用后方炉灶，锅柄朝内摆放。</li>
<li>安装炉灶旋钮保护盖，防止孩子开启炉眼。</li>
<li>在炉灶旁烹饪时不要抱着孩子。</li>
<li>在炉灶周围保持至少3英尺（约1米）的「无孩区」。</li>
</ul>
<h2>热液体危害</h2>
<p>溢洒的热饮比任何其他来源都更容易造成烫伤。抱着孩子时不要端热饮，杯子放在桌子和柜台边缘以外。将热水器设置在48°C（120°F）以防止水龙头烫伤。</p>
<h2>锋利物品</h2>
<ul>
<li>将刀具存放在锁定的抽屉或够不到的刀架上。</li>
<li>教5岁以上的孩子刀具安全技能，而不是简单地禁止他们。</li>
<li>立即小心地处理碎玻璃——用湿纸巾收拾小碎片。</li>
</ul>
<h2>安全地让孩子参与</h2>
<p>孩子可以从小就安全地在厨房帮忙——搅拌、洗蔬菜、量材料。分配适合年龄的任务，一起烹饪既建立技能，也减少了对厨房工具的「禁果」吸引力。</p>`,
    contentEn: `<h2>Why the Kitchen Is High-Risk</h2>
<p>The kitchen contains hot surfaces, sharp tools, heavy objects, and toxic cleaning products — all at heights accessible to curious toddlers. Burns from hot liquids are one of the leading causes of injury in children under 5.</p>
<h2>Stove and Oven Safety</h2>
<ul>
<li>Always use back burners when possible, with pot handles turned inward.</li>
<li>Install a stove knob cover to prevent children from turning on burners.</li>
<li>Never hold a child while cooking at the stove.</li>
<li>Keep a "kid-free zone" of at least 3 feet around the stove.</li>
</ul>
<h2>Hot Liquid Hazards</h2>
<p>Spilled hot drinks cause more scalds than any other source. Never carry hot drinks while holding a child, and keep cups away from table and counter edges. Set your water heater to 48°C (120°F) to prevent scalds at the tap.</p>
<h2>Sharp Objects</h2>
<ul>
<li>Store knives in a locked drawer or a knife block out of reach.</li>
<li>Teach older children (5+) knife safety as a skill, rather than simply forbidding them.</li>
</ul>
<h2>Involving Children Safely</h2>
<p>Children can safely help in the kitchen from a young age — stirring, washing vegetables, measuring ingredients. Assign age-appropriate tasks and use a step stool so they're stable. Cooking together builds skills and reduces the forbidden-fruit appeal of kitchen tools.</p>`,
    author: "James Whitfield, Pediatric Safety Specialist",
    date: "2026-03-10",
    readTimeZh: "6分钟",
    readTimeEn: "6 min read",
    tags: ["厨房安全", "烧伤预防", "儿童安全", "家居危险"],
  },
  {
    slug: "playground-safety-tips",
    category: "安全防护",
    titleZh: "游乐场安全：让孩子在玩耍中保持安全",
    titleEn: "Playground Safety: Keeping Kids Safe While They Play",
    excerptZh: "游乐场对孩子的发展至关重要——同时也是每年20万次以上急诊就诊的发生地。了解风险所在。",
    excerptEn: "Playgrounds are essential for development — and the site of 200,000+ ER visits per year. Know the risks.",
    contentZh: `<h2>游戏的重要性——及其风险</h2>
<p>户外游乐场游戏能建立力量、协调能力、社交技能和自信心。但游乐场也是许多儿童受伤的地方，大多数是跌倒。大多数伤害可以通过适当的设施、地面和监督来预防。</p>
<h2>孩子玩耍前需要检查的事项</h2>
<ul>
<li><strong>地面：</strong>安全的游乐场有吸冲击力的地面——木屑、橡胶碎料或倾倒橡胶——至少12英寸深，延伸至设施外6英尺。</li>
<li><strong>适龄设施：</strong>大多数游乐场为2–5岁和5–12岁设有专区。使用正确的区域。</li>
<li><strong>无危险：</strong>检查是否有破损设施、外露螺栓、锋利边缘，或3.5–9英寸之间的开口（头部嵌入风险）。</li>
<li><strong>遮阳：</strong>夏天金属滑梯和深色表面会非常热——让孩子使用前先测试。</li>
</ul>
<h2>最常见的伤害及如何预防</h2>
<p>从攀爬设施跌落是严重伤害的主要原因。教孩子两手抓紧并脚先滑下滑梯，一次一个人。密切监督悬环——这是手臂骨折最多的原因。</p>
<h2>秋千安全</h2>
<p>幼儿使用桶形秋千，直到他们能独立抓住。教孩子远离运动中的秋千。推秋千时不要站在正前方——站在侧面。</p>
<h2>衣物注意事项</h2>
<p>游乐场玩耍前去掉带绳子的帽衫和围巾——它们可能被设施钩住导致勒颈。确保鞋带已系好。不建议在游乐场戴头盔，因为头盔可能被设施夹住。</p>`,
    contentEn: `<h2>The Importance of Play — and Its Risks</h2>
<p>Outdoor play on playgrounds builds strength, coordination, social skills, and confidence. But playgrounds are also where many childhood injuries occur, mostly from falls. Most injuries are preventable with proper equipment, surfaces, and supervision.</p>
<h2>What to Look for Before Your Child Plays</h2>
<ul>
<li><strong>Surface:</strong> Safe playgrounds have impact-absorbing surfaces — wood chips, rubber mulch, or poured rubber — at least 12 inches deep and extending 6 feet beyond equipment.</li>
<li><strong>Age-appropriate equipment:</strong> Most playgrounds designate areas for ages 2–5 and 5–12. Use the right section.</li>
<li><strong>No hazards:</strong> Check for broken equipment, exposed bolts, sharp edges, or openings between 3.5 and 9 inches (head entrapment risk).</li>
<li><strong>Shade:</strong> Metal slides and dark surfaces get extremely hot in summer — test before your child uses them.</li>
</ul>
<h2>The Most Common Injuries and How to Prevent Them</h2>
<p>Falls from climbing equipment cause the majority of serious injuries. Teach children to hold on with both hands and to come down slides feet-first and one at a time. Supervise closely on monkey bars — these cause the most broken arms.</p>
<h2>Swing Safety</h2>
<p>Keep young children in bucket swings until they can hold on independently. Teach children to stay clear of moving swings. Never push a swing while facing it — walk to the side.</p>
<h2>Clothing Considerations</h2>
<p>Remove drawstring hoodies and scarves before playground use — these can catch on equipment and cause strangulation. Ensure shoelaces are tied.</p>`,
    author: "Dr. Maria Santos, Pediatric Emergency Medicine",
    date: "2026-03-17",
    readTimeZh: "6分钟",
    readTimeEn: "6 min read",
    tags: ["游乐场安全", "儿童安全", "户外游戏", "伤害预防"],
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
