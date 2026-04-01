export type Category = {
  slug: string;
  name: string;
  description: string;
  icon: string;
  color: string;
};

export type Article = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
};

export const categories: Category[] = [
  {
    slug: "baby-health",
    name: "Baby Health",
    description: "Essential health tips, common illnesses, and when to see a doctor.",
    icon: "🍼",
    color: "bg-blue-50 text-blue-700 border-blue-200",
  },
  {
    slug: "parenting-tips",
    name: "Parenting Tips",
    description: "Practical advice for everyday parenting challenges.",
    icon: "👨‍👩‍👧",
    color: "bg-green-50 text-green-700 border-green-200",
  },
  {
    slug: "nutrition",
    name: "Nutrition & Diet",
    description: "Healthy eating guides, recipes, and feeding milestones.",
    icon: "🥦",
    color: "bg-yellow-50 text-yellow-700 border-yellow-200",
  },
  {
    slug: "development",
    name: "Child Development",
    description: "Growth milestones, cognitive development, and learning stages.",
    icon: "🧠",
    color: "bg-purple-50 text-purple-700 border-purple-200",
  },
  {
    slug: "pregnancy",
    name: "Pregnancy & Newborn",
    description: "Preparing for birth, newborn care, and postpartum recovery.",
    icon: "🤰",
    color: "bg-pink-50 text-pink-700 border-pink-200",
  },
  {
    slug: "safety",
    name: "Child Safety",
    description: "Home safety, outdoor precautions, and emergency guidance.",
    icon: "🛡️",
    color: "bg-red-50 text-red-700 border-red-200",
  },
];

export const articles: Article[] = [
  // Baby Health
  {
    slug: "fever-in-babies-when-to-worry",
    category: "baby-health",
    title: "Fever in Babies: When to Worry and When to Wait",
    excerpt: "Not every fever requires a trip to the ER. Learn how to read your baby's temperature, what counts as a dangerous fever, and when to call your pediatrician.",
    content: `
<h2>What Temperature Is Considered a Fever?</h2>
<p>A fever is generally defined as a rectal temperature of 100.4°F (38°C) or higher. For babies under 3 months old, any fever is a medical emergency and you should call your doctor immediately.</p>

<h2>How to Take Your Baby's Temperature Accurately</h2>
<p>For infants under 3 months, a rectal thermometer gives the most accurate reading. Digital thermometers are safe and fast. Ear and forehead thermometers can be used for older babies but may be less accurate for newborns.</p>

<h2>When to Call the Doctor Immediately</h2>
<ul>
<li>Baby is under 3 months old with any fever</li>
<li>Temperature is above 104°F (40°C) at any age</li>
<li>Baby is unusually difficult to wake</li>
<li>Baby has a stiff neck, rash, or difficulty breathing</li>
<li>Fever lasts more than 2 days</li>
</ul>

<h2>Home Care for Mild Fevers</h2>
<p>For babies older than 3 months with a mild fever (100.4–102°F), you can often manage at home. Keep them hydrated, dress them lightly, and offer extra nursing or bottle feeds. Ask your doctor before giving any fever-reducing medication.</p>

<h2>What Causes Fevers in Babies?</h2>
<p>Most fevers in babies are caused by viral infections like the common cold or flu. Less commonly, bacterial infections such as ear infections or urinary tract infections can cause fevers and require antibiotic treatment.</p>

<h2>The Bottom Line</h2>
<p>Trust your instincts. If your baby seems unwell beyond just a high temperature, or if something feels "off," always contact your pediatrician. It's always better to check than to wait.</p>
    `,
    author: "Dr. Sarah Mitchell, MD",
    date: "2026-03-20",
    readTime: "5 min read",
    tags: ["fever", "newborn", "baby health", "pediatrician"],
  },
  {
    slug: "common-baby-rashes-guide",
    category: "baby-health",
    title: "A Parent's Guide to Common Baby Rashes",
    excerpt: "Baby skin is sensitive and rashes are common. Here's how to identify diaper rash, eczema, heat rash, and other common skin conditions — and what to do about them.",
    content: `
<h2>Diaper Rash</h2>
<p>Diaper rash is one of the most common skin irritations in babies. It appears as red, inflamed skin in the diaper area. The best treatment is keeping the area clean and dry, using a zinc oxide barrier cream, and giving the skin time to air out.</p>

<h2>Baby Eczema</h2>
<p>Eczema (atopic dermatitis) causes dry, itchy, red patches. It often appears on cheeks and the scalp in infants and on the arms and legs in older babies. Use fragrance-free moisturizers, avoid harsh soaps, and consult a doctor if it's severe.</p>

<h2>Heat Rash (Prickly Heat)</h2>
<p>Tiny red bumps or blisters appearing when a baby overheats. Move to a cooler environment, remove excess clothing, and avoid heavy creams that can block pores.</p>

<h2>Cradle Cap</h2>
<p>Yellowish, crusty or scaly patches on the scalp. While it looks alarming, cradle cap is harmless and usually clears up on its own. Gentle shampooing and soft brushing can help.</p>

<h2>When to See a Doctor</h2>
<p>Seek medical attention if the rash is accompanied by fever, spreads rapidly, has blisters or pus, or doesn't improve after a few days of home care.</p>
    `,
    author: "Emma Clarke, RN",
    date: "2026-03-15",
    readTime: "6 min read",
    tags: ["rash", "eczema", "diaper rash", "skin care"],
  },
  {
    slug: "baby-sleep-safety-complete-guide",
    category: "baby-health",
    title: "Safe Sleep for Babies: Everything Parents Need to Know",
    excerpt: "Following safe sleep guidelines dramatically reduces the risk of SIDS. Learn the ABC rule, the safest sleep positions, and what to keep out of the crib.",
    content: `
<h2>The ABCs of Safe Sleep</h2>
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
<li>Don't use positioners or wedges marketed for sleep</li>
</ul>

<h2>When Can the Rules Relax?</h2>
<p>Once your baby can consistently roll from back to front and back again (usually around 6 months), you can allow them to find their own sleep position. But continue to place them on their back initially.</p>
    `,
    author: "Dr. James Patel, Pediatrician",
    date: "2026-03-10",
    readTime: "7 min read",
    tags: ["sleep safety", "SIDS", "newborn", "crib"],
  },

  // Parenting Tips
  {
    slug: "toddler-tantrums-calm-strategies",
    category: "parenting-tips",
    title: "Toddler Tantrums: 8 Calm-Down Strategies That Actually Work",
    excerpt: "Tantrums are a normal part of toddler development — but that doesn't make them easy. These evidence-based strategies will help you and your child get through them.",
    content: `
<h2>Why Toddlers Have Tantrums</h2>
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
<p>After the tantrum, offer a hug and a brief, simple explanation of what happened and what they can do next time.</p>
    `,
    author: "Lisa Tanner, Child Psychologist",
    date: "2026-03-18",
    readTime: "6 min read",
    tags: ["tantrums", "toddler", "behavior", "emotional regulation"],
  },
  {
    slug: "screen-time-kids-guidelines",
    category: "parenting-tips",
    title: "Screen Time for Kids: Updated Guidelines for Every Age",
    excerpt: "How much screen time is too much? What counts as quality content? Here's what the latest pediatric research says about children and digital devices.",
    content: `
<h2>Current Screen Time Guidelines by Age</h2>
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
<p>Create tech-free zones (bedrooms, dinner table). Use parental controls and co-view when possible. Model the behavior you want — your kids notice your phone habits too.</p>
    `,
    author: "Dr. Rachel Foster, Developmental Pediatrician",
    date: "2026-03-12",
    readTime: "5 min read",
    tags: ["screen time", "digital health", "toddler", "tech"],
  },

  // Nutrition
  {
    slug: "starting-solids-6-month-guide",
    category: "nutrition",
    title: "Starting Solids at 6 Months: A Step-by-Step Guide",
    excerpt: "Ready to introduce your baby to solid foods? Learn the signs of readiness, which foods to start with, what to avoid, and how to handle allergies.",
    content: `
<h2>Signs Your Baby Is Ready for Solids</h2>
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
<p>At 6 months, solid food is complementary to breast milk or formula — not a replacement. Start with 1–2 tablespoons once a day and gradually increase as your baby shows interest.</p>
    `,
    author: "Amy Chen, Registered Dietitian",
    date: "2026-03-22",
    readTime: "7 min read",
    tags: ["solid foods", "baby feeding", "nutrition", "weaning"],
  },
  {
    slug: "healthy-snacks-toddlers",
    category: "nutrition",
    title: "20 Healthy Snack Ideas Toddlers Actually Love",
    excerpt: "Getting toddlers to eat healthy snacks can feel impossible. These 20 ideas are nutritious, easy to prepare, and toddler-approved.",
    content: `
<h2>Why Snacks Matter for Toddlers</h2>
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
<p>Keep snack times consistent, offer snacks 2 hours before meals so hunger cues are preserved, and always sit together for snacks to avoid choking risks.</p>
    `,
    author: "Amy Chen, Registered Dietitian",
    date: "2026-03-08",
    readTime: "4 min read",
    tags: ["snacks", "toddler food", "nutrition", "recipes"],
  },

  // Development
  {
    slug: "speech-development-milestones-0-3",
    category: "development",
    title: "Speech & Language Milestones: Ages 0–3 Years",
    excerpt: "When should your baby say their first word? When do toddlers start putting sentences together? Here's a clear timeline of speech milestones and red flags to watch for.",
    content: `
<h2>Why Speech Milestones Matter</h2>
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
<li>Begins combining two words ("more milk")</li>
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
</ul>
    `,
    author: "Dr. Nina Walsh, Speech-Language Pathologist",
    date: "2026-03-17",
    readTime: "8 min read",
    tags: ["speech", "language", "milestones", "development"],
  },

  // Pregnancy
  {
    slug: "newborn-care-first-week",
    category: "pregnancy",
    title: "Newborn Care: Surviving (and Thriving) in the First Week",
    excerpt: "The first week with a newborn is beautiful, exhausting, and overwhelming. Here's your practical guide to feeding, sleeping, umbilical cord care, and knowing when to call the doctor.",
    content: `
<h2>Feeding Your Newborn</h2>
<p>Newborns need to feed every 2–3 hours — that's 8–12 times per day. Whether breastfeeding or formula feeding, watch for hunger cues: rooting, sucking on hands, turning head side to side. Crying is a late hunger cue.</p>

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
</ul>
    `,
    author: "Dr. Olivia Barnes, OB-GYN",
    date: "2026-03-25",
    readTime: "8 min read",
    tags: ["newborn", "first week", "postpartum", "baby care"],
  },

  // Safety
  {
    slug: "childproofing-home-room-by-room",
    category: "safety",
    title: "Childproofing Your Home: A Room-by-Room Checklist",
    excerpt: "Before your baby starts crawling and walking, it's time to childproof. This comprehensive checklist covers every room in your house.",
    content: `
<h2>When to Start Childproofing</h2>
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
<p>Get down on your hands and knees to see the world from your baby's perspective — you'll spot hazards you'd never notice from standing height.</p>
    `,
    author: "Tom Bradley, Child Safety Specialist",
    date: "2026-03-05",
    readTime: "6 min read",
    tags: ["childproofing", "home safety", "baby proofing", "safety"],
  },
];

export function getArticlesByCategory(categorySlug: string): Article[] {
  return articles.filter((a) => a.category === categorySlug);
}

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getFeaturedArticles(count = 6): Article[] {
  return articles.slice(0, count);
}
