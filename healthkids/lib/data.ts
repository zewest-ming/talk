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
  // Baby Health - Additional
  {
    slug: "baby-vaccination-schedule",
    category: "baby-health",
    title: "Baby Vaccination Schedule: What to Expect from Birth to 12 Months",
    excerpt: "Vaccinations are one of the most important things you can do to protect your baby. Here's exactly which vaccines are recommended and when, with tips on managing post-shot reactions.",
    content: `
<h2>Why Vaccines Matter in the First Year</h2>
<p>Babies are born with some immunity passed from their mothers, but it fades quickly. Vaccines train the immune system to fight specific diseases before your baby is exposed to them. The first year of life is one of the most vulnerable periods, so the vaccination schedule is front-loaded with protection.</p>

<h2>The Recommended Schedule (Birth to 12 Months)</h2>
<ul>
<li><strong>Birth:</strong> Hepatitis B (dose 1)</li>
<li><strong>2 months:</strong> DTaP, Hib, IPV, PCV15, RV, Hepatitis B (dose 2)</li>
<li><strong>4 months:</strong> DTaP, Hib, IPV, PCV15, RV</li>
<li><strong>6 months:</strong> DTaP, Hib, PCV15, RV, Hepatitis B (dose 3), Influenza (yearly)</li>
<li><strong>12 months:</strong> MMR, Varicella, Hepatitis A (dose 1), PCV15 booster</li>
</ul>
<p>This schedule is set by the CDC and AAP based on when babies' immune systems are ready and when diseases pose the greatest risk.</p>

<h2>Common Reactions and How to Manage Them</h2>
<p>Mild reactions are normal and a sign the immune system is responding. These include soreness at the injection site, low-grade fever, and fussiness. You can apply a cool, damp cloth to the injection site and ask your doctor about appropriate doses of infant acetaminophen for fever or discomfort.</p>

<h2>Serious Reactions: When to Call the Doctor</h2>
<ul>
<li>High fever above 104°F (40°C)</li>
<li>Non-stop crying for more than 3 hours</li>
<li>Seizures or convulsions</li>
<li>Extreme drowsiness or difficulty waking</li>
<li>Hives, swelling of the face, or difficulty breathing (seek emergency care immediately)</li>
</ul>

<h2>Addressing Common Concerns</h2>
<p>Vaccine safety is among the most thoroughly researched topics in medicine. Decades of data from hundreds of millions of children confirm that the recommended vaccines are safe and effective. Delaying or skipping vaccines leaves your baby unprotected during the period of highest risk.</p>
    `,
    author: "Dr. James Patel, Pediatrician",
    date: "2026-01-14",
    readTime: "6 min read",
    tags: ["vaccines", "immunization", "baby health", "newborn"],
  },
  {
    slug: "teething-symptoms-and-relief",
    category: "baby-health",
    title: "Teething: Symptoms, Timeline, and Safe Relief Methods",
    excerpt: "Drooling, fussiness, and sleepless nights — teething is tough for babies and parents alike. Learn what's normal, when teeth appear, and how to safely soothe the pain.",
    content: `
<h2>When Do Babies Start Teething?</h2>
<p>Most babies get their first tooth between 4 and 7 months, though anywhere from 3 to 12 months is considered normal. By age 3, most children have all 20 primary (baby) teeth. The lower central incisors usually come in first, followed by the upper central incisors.</p>

<h2>Common Teething Symptoms</h2>
<ul>
<li>Excessive drooling (can cause a chin rash)</li>
<li>Chewing on everything in sight</li>
<li>Swollen, red, or tender gums</li>
<li>Fussiness and irritability</li>
<li>Mild sleep disruption</li>
</ul>
<p>Note: Teething does <em>not</em> cause high fever, diarrhea, or vomiting. If your baby has these symptoms, consult your pediatrician — another illness may be the cause.</p>

<h2>Safe Ways to Relieve Teething Pain</h2>
<ul>
<li><strong>Cold washcloth:</strong> Wet and chill (not freeze) a clean washcloth for your baby to chew</li>
<li><strong>Teething rings:</strong> Rubber or silicone rings — refrigerate, don't freeze</li>
<li><strong>Gum massage:</strong> Rub gums gently with a clean finger</li>
<li><strong>Infant acetaminophen:</strong> For severe discomfort, ask your doctor about appropriate dosing</li>
</ul>

<h2>What to Avoid</h2>
<p>The FDA warns against teething gels containing benzocaine (like Orajel) for children under 2 — they can cause a rare but serious condition called methemoglobinemia. Amber teething necklaces pose strangulation and choking risks and are not recommended by pediatricians.</p>

<h2>Starting Dental Care</h2>
<p>As soon as the first tooth appears, begin brushing twice daily with a rice-grain sized amount of fluoride toothpaste. Schedule your baby's first dental visit by their first birthday or within 6 months of the first tooth appearing.</p>
    `,
    author: "Dr. Sarah Mitchell, MD",
    date: "2026-01-28",
    readTime: "5 min read",
    tags: ["teething", "baby teeth", "dental care", "baby health"],
  },

  // Nutrition - Additional
  {
    slug: "iron-rich-foods-babies-toddlers",
    category: "nutrition",
    title: "Iron-Rich Foods for Babies and Toddlers: A Complete Guide",
    excerpt: "Iron deficiency is the most common nutritional deficiency in young children. Learn which foods are highest in iron, how to boost absorption, and signs your child may not be getting enough.",
    content: `
<h2>Why Iron Is So Important</h2>
<p>Iron is essential for brain development and the production of hemoglobin, which carries oxygen in the blood. Babies are born with iron stores that last about 6 months, after which they must get iron from food. Toddlers aged 1–3 need 7mg of iron per day — a surprisingly high amount for their size.</p>

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
<li>Pumpkin seeds (ground for young toddlers)</li>
</ul>

<h2>How to Boost Iron Absorption</h2>
<p>Pair iron-rich foods with vitamin C sources (strawberries, orange segments, bell peppers, tomatoes) to dramatically increase absorption — especially important for plant-based iron. Avoid serving cow's milk with iron-rich meals, as calcium competes with iron absorption.</p>

<h2>Signs of Iron Deficiency</h2>
<ul>
<li>Pale skin, lips, or fingernail beds</li>
<li>Fatigue and low energy</li>
<li>Decreased appetite</li>
<li>Frequent infections</li>
<li>Delayed development</li>
</ul>
<p>If you're concerned, ask your pediatrician for a simple blood test. Iron deficiency anemia is very treatable once identified.</p>
    `,
    author: "Amy Chen, Registered Dietitian",
    date: "2026-01-10",
    readTime: "6 min read",
    tags: ["iron", "nutrition", "baby food", "toddler diet"],
  },
  {
    slug: "baby-led-weaning-complete-guide",
    category: "nutrition",
    title: "Baby-Led Weaning: How It Works and How to Get Started",
    excerpt: "Baby-led weaning (BLW) skips purees and lets babies feed themselves soft finger foods from the start. Here's everything you need to know to do it safely.",
    content: `
<h2>What Is Baby-Led Weaning?</h2>
<p>Baby-led weaning (BLW) is an approach to introducing solids where babies self-feed soft, appropriately sized pieces of whole food rather than being spoon-fed purees. Developed by UK health visitor Gill Rapley, it's designed to respect the baby's natural developmental pace and hunger cues.</p>

<h2>When to Start</h2>
<p>The same readiness signs apply as for purees: around 6 months, able to sit up with minimal support, lost the tongue-thrust reflex, and showing interest in food. Never start before 6 months with BLW.</p>

<h2>How to Prepare Food Safely</h2>
<ul>
<li>Food should be soft enough to squish between your fingers</li>
<li>Cut into strips or sticks about the size of your finger (easier for babies to grip)</li>
<li>Avoid round shapes (grapes, cherry tomatoes) — cut them lengthwise</li>
<li>No added salt, sugar, or honey in the first year</li>
<li>Avoid hard, crunchy, or sticky foods (raw apple, nuts, nut butter straight off a spoon)</li>
</ul>

<h2>Good First BLW Foods</h2>
<p>Steamed broccoli florets, soft-cooked carrot sticks, ripe avocado slices, banana pieces, soft-cooked pasta, scrambled egg, toast fingers with hummus or mashed avocado.</p>

<h2>Understanding the Gag Reflex</h2>
<p>Gagging is normal and different from choking. Babies have a very sensitive gag reflex positioned far forward in the mouth — this is a safety mechanism. Gagging looks dramatic but usually resolves on its own. Choking is silent and requires immediate action. Always supervise meals and learn infant first aid before starting solids.</p>

<h2>Combining BLW with Purees</h2>
<p>Many families take a mixed approach, offering both finger foods and spoon-fed purees. This is perfectly fine and can make the transition easier while ensuring adequate iron intake.</p>
    `,
    author: "Amy Chen, Registered Dietitian",
    date: "2026-01-22",
    readTime: "7 min read",
    tags: ["baby-led weaning", "BLW", "finger foods", "solid foods"],
  },
  {
    slug: "foods-that-boost-brain-development",
    category: "nutrition",
    title: "10 Foods That Support Your Child's Brain Development",
    excerpt: "The first five years are a critical window for brain development. These nutrient-rich foods provide the building blocks your child's growing brain needs most.",
    content: `
<h2>Why Nutrition Matters for Brain Development</h2>
<p>The brain grows faster in the first few years of life than at any other time. By age 3, a child's brain has reached 80% of its adult size. Specific nutrients — omega-3 fatty acids, iron, zinc, iodine, choline, and B vitamins — play key roles in neural development, myelin formation, and cognitive function.</p>

<h2>Top Brain-Boosting Foods</h2>

<h3>1. Fatty Fish (Salmon, Sardines, Mackerel)</h3>
<p>Rich in DHA omega-3 fatty acids, which are the primary structural fat in the brain. Aim for 2 servings per week. Choose low-mercury options like salmon and sardines.</p>

<h3>2. Eggs</h3>
<p>Contain choline, which is essential for memory and neurotransmitter production. The yolk is where the nutrients are — don't skip it.</p>

<h3>3. Berries</h3>
<p>Blueberries, strawberries, and blackberries are packed with antioxidants that protect brain cells from oxidative stress and support memory.</p>

<h3>4. Leafy Greens</h3>
<p>Spinach, kale, and broccoli provide folate and vitamin K, which support cognitive function. Blend into smoothies if your child resists them.</p>

<h3>5. Beans and Lentils</h3>
<p>Excellent source of iron, zinc, and B vitamins — all essential for brain energy and neurotransmitter synthesis.</p>

<h3>6. Whole Grains</h3>
<p>Provide steady glucose — the brain's preferred fuel. Oats, whole wheat, and quinoa are great choices.</p>

<h3>7. Yogurt</h3>
<p>Iodine (found in dairy) is critical for thyroid function and brain development. Full-fat, plain yogurt is ideal for young children.</p>

<h2>Practical Tips</h2>
<p>Focus on variety over perfection. A child who eats a wide range of whole foods will naturally get most of the nutrients they need. Limit ultra-processed foods high in added sugar, as they displace more nutritious options.</p>
    `,
    author: "Amy Chen, Registered Dietitian",
    date: "2026-02-11",
    readTime: "6 min read",
    tags: ["brain development", "nutrition", "omega-3", "toddler diet"],
  },

  // Development - Additional
  {
    slug: "gross-motor-milestones-0-2-years",
    category: "development",
    title: "Gross Motor Milestones: From Newborn to 2 Years",
    excerpt: "Rolling, sitting, crawling, walking — here's a complete timeline of gross motor milestones in the first two years, plus red flags that warrant a conversation with your pediatrician.",
    content: `
<h2>What Are Gross Motor Skills?</h2>
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
<li>Rolls from tummy to back (usually first), then back to tummy</li>
<li>Holds head steady when upright</li>
<li>Bears weight on legs when held standing</li>
<li>Sits with support</li>
</ul>

<h3>7–9 Months</h3>
<ul>
<li>Sits independently</li>
<li>Gets into crawling position and begins crawling (some babies skip this)</li>
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
</ul>

<h2>The Role of Tummy Time</h2>
<p>Supervised tummy time from birth is essential — it builds the neck, shoulder, and core strength that underpins all gross motor development. Start with a few minutes several times a day and gradually increase.</p>
    `,
    author: "Dr. Rachel Foster, Developmental Pediatrician",
    date: "2026-01-18",
    readTime: "7 min read",
    tags: ["motor skills", "milestones", "crawling", "walking", "development"],
  },
  {
    slug: "cognitive-development-ages-2-5",
    category: "development",
    title: "Cognitive Development Ages 2–5: What's Happening in Your Child's Brain",
    excerpt: "The preschool years bring dramatic leaps in thinking, memory, and problem-solving. Here's what cognitive development looks like between ages 2 and 5, and how to support it.",
    content: `
<h2>The Preoperational Stage</h2>
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
<li>Draws recognizable figures (person with head and limbs)</li>
<li>Understands cause and effect</li>
<li>Asks "why" questions constantly</li>
</ul>

<h3>Age 5</h3>
<ul>
<li>Counts to 20 and understands basic number concepts</li>
<li>Writes some letters and numbers</li>
<li>Understands the concept of time (yesterday, today, tomorrow)</li>
<li>Can tell a story with a beginning, middle, and end</li>
</ul>

<h2>How to Support Cognitive Development</h2>
<ul>
<li><strong>Read together daily</strong> — nothing builds vocabulary and cognition more effectively</li>
<li><strong>Ask open-ended questions</strong> — "What do you think will happen?" stimulates reasoning</li>
<li><strong>Provide open-ended toys</strong> — blocks, playdough, and art supplies encourage creative thinking</li>
<li><strong>Limit passive screen time</strong> — prioritize interactive play and conversation</li>
<li><strong>Let them problem-solve</strong> — resist the urge to jump in immediately when they're struggling</li>
</ul>
    `,
    author: "Dr. Rachel Foster, Developmental Pediatrician",
    date: "2026-02-07",
    readTime: "7 min read",
    tags: ["cognitive development", "preschool", "milestones", "learning"],
  },

  // Pregnancy - Additional
  {
    slug: "breastfeeding-basics-new-moms",
    category: "pregnancy",
    title: "Breastfeeding Basics: What Every New Mom Needs to Know",
    excerpt: "Breastfeeding is natural, but it doesn't always come naturally. Here's a practical guide to latching, milk supply, common challenges, and when to ask for help.",
    content: `
<h2>The First Hours Matter</h2>
<p>Skin-to-skin contact immediately after birth and attempting to nurse within the first hour helps stimulate milk production and establishes feeding. Your baby is born with a strong suckling instinct that is most active in the first 1–2 hours after birth.</p>

<h2>Getting a Good Latch</h2>
<p>A proper latch is the foundation of comfortable, effective breastfeeding. Your baby should take in a large portion of the areola — not just the nipple. Signs of a good latch: no pain after the first few seconds, you can hear swallowing, baby's lips are flanged outward, and their chin touches your breast. Pain that persists throughout a feeding usually signals a latch issue.</p>

<h2>How Often to Feed</h2>
<p>Newborns feed 8–12 times per day (every 2–3 hours). Feed on demand — watch for early hunger cues (rooting, sucking hands, turning head) rather than waiting for crying. In the early weeks, you may need to wake your baby to feed if they sleep longer than 3–4 hours.</p>

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
<li><strong>Low supply concerns:</strong> Often unfounded — wet diapers and weight gain are better indicators than "feeling empty"</li>
<li><strong>Mastitis:</strong> Flu-like symptoms with a red, hot breast — contact your doctor, usually needs antibiotics</li>
</ul>

<h2>Getting Support</h2>
<p>International Board Certified Lactation Consultants (IBCLCs) are the gold standard for breastfeeding support. Many hospitals have them on staff, and many insurance plans cover lactation visits. Don't struggle alone — breastfeeding support dramatically improves success rates.</p>
    `,
    author: "Dr. Olivia Barnes, OB-GYN",
    date: "2026-01-08",
    readTime: "8 min read",
    tags: ["breastfeeding", "newborn", "postpartum", "lactation"],
  },
  {
    slug: "postpartum-depression-signs-help",
    category: "pregnancy",
    title: "Postpartum Depression: Signs, Symptoms, and How to Get Help",
    excerpt: "Postpartum depression affects 1 in 7 new mothers — yet most go untreated. Learn how to recognize it, how it differs from the baby blues, and where to find support.",
    content: `
<h2>Baby Blues vs. Postpartum Depression</h2>
<p>Up to 80% of new mothers experience the "baby blues" — tearfulness, mood swings, and anxiety in the first 1–2 weeks after birth. This is caused by the dramatic hormonal shift after delivery and resolves on its own. Postpartum depression (PPD) is different: it's more intense, lasts longer (beyond 2 weeks), and interferes with daily functioning.</p>

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
<p>PPD can affect any new mother regardless of age, income, culture, or number of previous children. Risk factors include a personal or family history of depression, anxiety during pregnancy, stressful life events, lack of support, and difficult delivery or infant health issues.</p>

<h2>Postpartum Anxiety and Other Conditions</h2>
<p>PPD is the most well-known postpartum mood disorder, but postpartum anxiety (excessive worry, racing thoughts) is equally common. Postpartum OCD and, rarely, postpartum psychosis also exist. All are treatable.</p>

<h2>Getting Help</h2>
<p>Talk to your OB, midwife, or primary care doctor. Effective treatments include therapy (particularly cognitive behavioral therapy), medication (several antidepressants are safe during breastfeeding), and support groups. Postpartum Support International (postpartum.net) offers a helpline and provider directory. You are not a bad mother for struggling — PPD is a medical condition, not a personal failure.</p>
    `,
    author: "Dr. Olivia Barnes, OB-GYN",
    date: "2026-02-19",
    readTime: "7 min read",
    tags: ["postpartum depression", "mental health", "PPD", "new mom"],
  },

  // Safety - Additional
  {
    slug: "car-seat-safety-guide",
    category: "safety",
    title: "Car Seat Safety: Installation, Types, and Age Guidelines",
    excerpt: "Car crashes are a leading cause of death for children. Installing and using the right car seat correctly can reduce the risk of death by up to 71%. Here's everything you need to know.",
    content: `
<h2>Car Seat Types by Age and Size</h2>

<h3>Rear-Facing Infant Seats</h3>
<p>For newborns and infants. Keep children rear-facing as long as possible — until they reach the maximum height or weight limit of their seat (usually well past age 2). Rear-facing is the safest position because it distributes crash forces across the whole body.</p>

<h3>Rear-Facing Convertible Seats</h3>
<p>Can be used rear-facing for longer than infant seats, then converted to forward-facing. A good investment for growing children.</p>

<h3>Forward-Facing with Harness</h3>
<p>Once a child outgrows rear-facing limits, forward-facing with a 5-point harness is the next step. Keep children in this position until they reach the seat's harness limits.</p>

<h3>Booster Seats</h3>
<p>Used with the vehicle's seat belt once the child outgrows the harness. Children should use a booster until the seat belt fits properly — typically around 4'9" tall, usually between ages 8–12.</p>

<h2>Installation Mistakes to Avoid</h2>
<ul>
<li>Seat moves more than 1 inch side to side or front to back — it's too loose</li>
<li>Harness straps are twisted or not snug (pinch test: no slack should remain)</li>
<li>Chest clip positioned at the belly instead of armpit level</li>
<li>Using a second-hand seat without knowing its history (never use a seat that has been in a crash)</li>
<li>Using a seat that has passed its expiration date (printed on the seat)</li>
</ul>

<h2>Getting Your Installation Checked</h2>
<p>Studies show that up to 60% of car seats are installed incorrectly. Find a certified Child Passenger Safety Technician (CPST) at SafeKids.org for a free inspection. Many fire stations and hospitals also offer checks.</p>

<h2>Never Do This</h2>
<p>Never place a rear-facing car seat in front of an active airbag. Never add aftermarket products not approved by the seat's manufacturer. Never use a winter coat under the harness — dress baby in thin layers and cover with a blanket over the harness.</p>
    `,
    author: "Tom Bradley, Child Safety Specialist",
    date: "2026-01-30",
    readTime: "7 min read",
    tags: ["car seat", "road safety", "infant safety", "child safety"],
  },
  {
    slug: "water-safety-babies-toddlers",
    category: "safety",
    title: "Water Safety for Babies and Toddlers: Drowning Prevention Guide",
    excerpt: "Drowning is the leading cause of accidental death in children ages 1–4. Most drownings happen in home pools and bathtubs. Here's how to keep your child safe around water.",
    content: `
<h2>The Shocking Reality of Drowning</h2>
<p>Drowning can happen in seconds and in as little as 1–2 inches of water. It is almost always silent — unlike the dramatic splashing shown in movies. A child can drown while an adult is present and looking away for just a moment. Constant, within-arm's-reach supervision is the most important protection.</p>

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
<p>The AAP recommends swimming lessons for most children starting at age 1. Research shows formal swim lessons reduce drowning risk in children ages 1–4 by up to 88%. However, swim lessons do not make a child "drown-proof" — supervision remains essential.</p>

<h2>Life Jackets</h2>
<p>Always use a properly fitted, Coast Guard-approved life jacket on boats, docks, and open water. Puddle jumpers and inflatable arm bands are not substitutes for life jackets and should not be used in open water.</p>

<h2>Stay Within Arm's Reach</h2>
<p>Designate a "water watcher" — one adult whose sole job is watching children in the water, with no phone, book, or other distractions. Rotate this role every 15–20 minutes to maintain attention.</p>
    `,
    author: "Tom Bradley, Child Safety Specialist",
    date: "2026-02-25",
    readTime: "6 min read",
    tags: ["water safety", "drowning prevention", "pool safety", "toddler safety"],
  },

  // Parenting Tips - Additional
  {
    slug: "potty-training-complete-guide",
    category: "parenting-tips",
    title: "Potty Training: When to Start and How to Succeed",
    excerpt: "Most children are ready for potty training between 18 and 36 months. Here's how to recognize the signs of readiness, choose a method, and handle setbacks without stress.",
    content: `
<h2>Signs Your Child Is Ready</h2>
<p>Readiness — not age — is the key factor. Most children show signs between 18–36 months, but pushing before they're ready leads to longer, more frustrating training. Look for: staying dry for 2+ hours at a stretch, showing interest in the bathroom or others' toilet use, pulling at a wet or dirty diaper, and being able to follow simple two-step instructions.</p>

<h2>Choosing a Method</h2>

<h3>Child-Led (Gradual) Approach</h3>
<p>Introduce the potty casually, let your child sit on it with clothes on first, read books about toileting, and follow their lead over weeks or months. Low pressure, low stress, slower pace.</p>

<h3>3-Day Method (Intensive Training)</h3>
<p>Clear three days at home, ditch diapers completely (except sleep), watch closely for cues, and rush to the potty at the first sign of needing to go. Requires dedication but can work quickly for children who are truly ready.</p>

<h3>Scheduled Sits</h3>
<p>Take your child to the potty at regular intervals (every 1.5–2 hours) regardless of whether they say they need to go. Pairs well with both approaches above.</p>

<h2>Handling Accidents</h2>
<p>Stay calm. Accidents are normal and are not signs of failure. Clean up matter-of-factly without shame or punishment. Negative reactions increase anxiety, which makes training harder. Praise success genuinely but don't over-celebrate — make it feel normal, not high-stakes.</p>

<h2>Night Training Comes Later</h2>
<p>Nighttime dryness is largely controlled by a hormone (ADH) that matures independently of daytime training — often 6 months to 2 years later. Don't pressure night dryness until your child wakes consistently dry. Use a mattress protector and stay relaxed about it.</p>

<h2>When to Talk to Your Doctor</h2>
<p>If your child shows no readiness signs by age 3, has frequent painful urination, has been trained but regresses significantly (especially after a stress-free period), or has never had bowel control by age 4, discuss with your pediatrician.</p>
    `,
    author: "Lisa Tanner, Child Psychologist",
    date: "2026-02-14",
    readTime: "7 min read",
    tags: ["potty training", "toddler", "toilet training", "parenting"],
  },
  {
    slug: "raising-emotionally-intelligent-children",
    category: "parenting-tips",
    title: "How to Raise an Emotionally Intelligent Child",
    excerpt: "Emotional intelligence predicts success, relationships, and mental health more than IQ. Here's how to nurture it from the earliest years.",
    content: `
<h2>What Is Emotional Intelligence?</h2>
<p>Emotional intelligence (EQ) is the ability to recognize, understand, manage, and express emotions — and to recognize and respond to emotions in others. Research by psychologist John Gottman and others shows that children with high EQ have better friendships, perform better academically, handle stress more effectively, and have fewer behavioral problems.</p>

<h2>Emotion Coaching: The Core Skill</h2>
<p>Gottman's research identified "emotion coaching" as the most powerful parenting style for developing EQ. It involves four steps: noticing and naming your child's emotion, treating emotions as opportunities for connection, empathizing before problem-solving, and setting limits while validating feelings.</p>
<p>Instead of "Stop crying, it's not a big deal," try "I can see you're really disappointed. It's hard when things don't go the way we hoped. Let's figure out what to do next."</p>

<h2>Building EQ from Birth</h2>
<ul>
<li><strong>Infants:</strong> Respond consistently to cries. This teaches that emotions signal needs that get met — the foundation of emotional security.</li>
<li><strong>Toddlers:</strong> Name emotions out loud: "You're frustrated that the blocks fell down." Provide a feelings vocabulary.</li>
<li><strong>Preschoolers:</strong> Read books with emotional themes. Ask "How do you think she feels?" Point out emotions in others.</li>
<li><strong>School age:</strong> Problem-solve together after emotions settle. Teach that all feelings are okay; not all behaviors are.</li>
</ul>

<h2>Model What You Want to See</h2>
<p>Children learn emotional regulation primarily by watching adults. When you say "I'm feeling frustrated right now, so I'm going to take a few deep breaths before I respond," you're teaching an invaluable lesson. Don't hide all your emotions — healthy, regulated expression of real feelings is the best teacher.</p>

<h2>The Power of Play</h2>
<p>Dramatic play (playing house, superheroes, doctor) is one of the most powerful ways young children process and practice emotions. Resist over-scheduling — unstructured play time is essential for emotional development.</p>
    `,
    author: "Lisa Tanner, Child Psychologist",
    date: "2026-02-28",
    readTime: "6 min read",
    tags: ["emotional intelligence", "EQ", "parenting", "child development"],
  },
  {
    slug: "sleep-training-methods-compared",
    category: "parenting-tips",
    title: "Sleep Training Methods Compared: CIO, Ferber, and No-Cry Options",
    excerpt: "There's no single right way to help your baby sleep through the night. We break down the most popular sleep training methods so you can choose what works best for your family.",
    content: `
<h2>When Can You Start Sleep Training?</h2>
<p>Most pediatricians recommend waiting until babies are at least 4–6 months old before sleep training. By this age, many babies are developmentally capable of sleeping longer stretches and self-soothing. Always confirm with your doctor before beginning.</p>

<h2>Cry It Out (Extinction Method)</h2>
<p>The baby is placed in the crib awake and parents do not return until morning (or a set time). This method tends to work quickly — often within 3 nights. It can be emotionally difficult for parents, but research consistently shows it does not cause long-term psychological harm to babies.</p>

<h2>The Ferber Method (Graduated Extinction)</h2>
<p>Parents check in at progressively longer intervals (e.g., 3 minutes, then 5, then 10) without picking up the baby. The check-ins provide reassurance while still encouraging self-soothing. This is a middle-ground approach that many parents find manageable.</p>

<h2>No-Cry Methods</h2>
<p>Approaches like the "Sleep Lady Shuffle" or Elizabeth Pantley's no-cry method involve gradual parental withdrawal — slowly moving further from the crib each night over 2–4 weeks. These take longer but involve little to no crying. They work well for families who find prolonged crying too stressful.</p>

<h2>Chair Method</h2>
<p>A parent sits in a chair near the crib until the baby falls asleep, moving the chair further away every few nights until they're outside the room. Gentle and gradual, though it requires significant consistency.</p>

<h2>Choosing What's Right for Your Family</h2>
<p>The best sleep training method is the one you can implement consistently. A method abandoned after one hard night accomplishes nothing. Consider your baby's temperament, your own stress tolerance, and your living situation when choosing an approach.</p>
    `,
    author: "Lisa Tanner, Child Psychologist",
    date: "2026-02-03",
    readTime: "7 min read",
    tags: ["sleep training", "Ferber", "baby sleep", "parenting"],
  },
  {
    slug: "language-development-toddlers-1-3",
    category: "development",
    title: "Language Development in Toddlers: What to Expect Ages 1–3",
    excerpt: "From first words to full sentences — a guide to speech milestones and when to seek help.",
    content: `
<h2>The Language Explosion</h2>
<p>Between ages 1 and 3, children go from saying a handful of words to speaking in short sentences. This rapid growth is one of the most exciting — and sometimes worrying — stages of development. Knowing what's typical helps you support your child and catch delays early.</p>

<h2>12–18 Months</h2>
<p>Most children say their first real word around 12 months. By 18 months, expect 10–20 words and an ability to follow simple instructions like "come here" or "give me the ball." Children at this age understand far more than they can say.</p>

<h2>18–24 Months</h2>
<p>Vocabulary grows rapidly — often adding several new words per week. By age 2, most toddlers combine two words ("more milk," "daddy go") and have 50+ words. Strangers should understand about half of what they say.</p>

<h2>2–3 Years</h2>
<p>Three-word phrases appear and grow into simple sentences. By age 3, children typically have 200–1,000 words, ask "why" constantly, and are understood by strangers about 75% of the time. They begin to grasp basic grammar rules even if imperfectly.</p>

<h2>How to Support Language Growth</h2>
<ul>
<li><strong>Talk constantly:</strong> Narrate what you're doing. "Now I'm cutting the apple. It's red!"</li>
<li><strong>Read aloud every day:</strong> Even 10 minutes of shared reading dramatically boosts vocabulary.</li>
<li><strong>Expand what they say:</strong> If they say "dog," you say "Yes, a big brown dog!"</li>
<li><strong>Limit screen time:</strong> Passive viewing doesn't build language the way live conversation does.</li>
</ul>

<h2>Red Flags to Watch For</h2>
<p>Talk to your pediatrician if your child: has no words by 16 months, loses language skills at any age, or is not combining words by 24 months. Early speech therapy is highly effective and works best when started young.</p>
    `,
    author: "Dr. Priya Shah, Developmental Pediatrician",
    date: "2026-02-10",
    readTime: "6 min read",
    tags: ["language development", "speech milestones", "toddler", "development"],
  },
  {
    slug: "social-emotional-development-preschool",
    category: "development",
    title: "Social and Emotional Development in Preschoolers (Ages 3–5)",
    excerpt: "How children learn to manage feelings, make friends, and understand others during the preschool years.",
    content: `
<h2>Why Social-Emotional Skills Matter</h2>
<p>Research consistently shows that social-emotional skills — the ability to understand and manage emotions, build relationships, and empathize with others — are as important as academic skills for long-term success. The preschool years are a critical window for building this foundation.</p>

<h2>What to Expect at Age 3</h2>
<p>Three-year-olds are beginning to understand that others have feelings too, but they still see the world primarily through their own perspective. Expect big emotions, difficulty sharing, and parallel play — playing near other children rather than with them.</p>

<h2>Ages 4–5: Growing Social Awareness</h2>
<p>By age 4–5, children begin true cooperative play, negotiate roles in games, and form genuine friendships. They become better at waiting their turn and expressing feelings in words rather than tantrums. Empathy deepens — they may comfort a crying friend.</p>

<h2>Emotional Regulation Strategies for This Age</h2>
<ul>
<li><strong>Name the feeling:</strong> "You look really frustrated right now. It's hard when the tower falls."</li>
<li><strong>Teach calming techniques:</strong> Deep breathing ("smell the flowers, blow out the candles") works well for this age.</li>
<li><strong>Role-play scenarios:</strong> Act out social situations to practice responses before they happen.</li>
<li><strong>Read emotion-focused books:</strong> Stories help children explore feelings safely.</li>
</ul>

<h2>Supporting Friendship Skills</h2>
<p>Arrange regular playdates with one child at a time — smaller groups are less overwhelming. Coach from the sidelines rather than intervening immediately. Let children work through minor conflicts; step in only when someone is being hurt.</p>

<h2>When to Seek Support</h2>
<p>If your child is consistently aggressive, extremely withdrawn, or has intense fears that interfere with daily life, speak with your pediatrician. Many challenges at this age respond very well to play therapy and parent coaching.</p>
    `,
    author: "Dr. Aisha Okonkwo, Child Psychologist",
    date: "2026-02-17",
    readTime: "7 min read",
    tags: ["social development", "emotional intelligence", "preschool", "development"],
  },
  {
    slug: "second-trimester-guide",
    category: "pregnancy",
    title: "The Second Trimester: Your Complete Guide to Weeks 13–27",
    excerpt: "Often called the 'golden trimester' — what to expect, key tests, and how to stay healthy.",
    content: `
<h2>Welcome to the Second Trimester</h2>
<p>For most pregnant women, the second trimester brings welcome relief. Morning sickness usually fades, energy returns, and the risk of miscarriage drops significantly. You'll begin to look visibly pregnant and, around week 18–22, feel your baby move for the first time.</p>

<h2>Physical Changes</h2>
<p>Your uterus expands rapidly during these weeks. You may notice a darkening line down your abdomen (linea nigra), round ligament pain as the uterus stretches, and growing breasts. Nasal congestion and bleeding gums are common due to increased blood volume.</p>

<h2>Key Appointments and Tests</h2>
<ul>
<li><strong>Anatomy scan (18–22 weeks):</strong> An ultrasound that checks fetal organs and can reveal the sex if desired.</li>
<li><strong>Quad screen (15–20 weeks):</strong> A blood test screening for chromosomal conditions.</li>
<li><strong>Glucose challenge test (24–28 weeks):</strong> Screens for gestational diabetes.</li>
<li><strong>Regular prenatal visits:</strong> Usually every 4 weeks during this trimester.</li>
</ul>

<h2>Feeling Baby Move</h2>
<p>First-time mothers typically feel movement (quickening) between weeks 18–22. It starts as fluttering or bubbles. By week 24–25, movements become more distinct. Your provider may ask you to track "kick counts" later in pregnancy.</p>

<h2>Nutrition Focus</h2>
<p>Calcium needs increase — aim for 1,000 mg daily from dairy, fortified foods, or leafy greens. Iron-rich foods remain important as blood volume expands. Continue your prenatal vitamin with folate and DHA.</p>

<h2>Exercise and Rest</h2>
<p>Most forms of moderate exercise are safe and beneficial — walking, swimming, and prenatal yoga all help manage weight gain and prepare your body for labor. Avoid lying flat on your back after week 20, as this can restrict blood flow.</p>
    `,
    author: "Dr. Rachel Kim, OB-GYN",
    date: "2026-02-24",
    readTime: "7 min read",
    tags: ["second trimester", "pregnancy", "prenatal care", "anatomy scan"],
  },
  {
    slug: "preparing-for-labor-birth-plan",
    category: "pregnancy",
    title: "Preparing for Labor: How to Write a Birth Plan That Works",
    excerpt: "A practical guide to creating a birth plan and what to realistically expect during labor.",
    content: `
<h2>What Is a Birth Plan?</h2>
<p>A birth plan is a written document that communicates your preferences for labor and delivery to your medical team. It's not a guarantee — birth is unpredictable — but it helps ensure your wishes are known and opens important conversations with your provider before the big day.</p>

<h2>What to Include</h2>
<ul>
<li><strong>Pain management preferences:</strong> Epidural, nitrous oxide, natural techniques, or a combination.</li>
<li><strong>Labor environment:</strong> Music, lighting, freedom to move, water immersion if available.</li>
<li><strong>Support people:</strong> Who you want present and their roles.</li>
<li><strong>Fetal monitoring:</strong> Continuous electronic monitoring vs. intermittent auscultation.</li>
<li><strong>Interventions:</strong> Your preferences around IV, episiotomy, and assisted delivery if needed.</li>
<li><strong>After birth:</strong> Delayed cord clamping, immediate skin-to-skin, breastfeeding initiation.</li>
<li><strong>If cesarean is needed:</strong> Preferences for a "gentle cesarean," who is present, skin-to-skin in the OR.</li>
</ul>

<h2>Keep It Realistic and Flexible</h2>
<p>The best birth plans are short (one page), focused on priorities, and include a note that you're open to adjustments based on medical necessity. A rigid plan can create conflict with staff and distress if things don't go as planned.</p>

<h2>How to Use Your Birth Plan</h2>
<p>Review it with your OB or midwife before 36 weeks. Bring several printed copies to the hospital — one for your chart, one for the nursing staff, one for your partner. Introduce yourself and your plan warmly; collaborative relationships lead to better outcomes.</p>

<h2>Preparing Beyond the Plan</h2>
<p>Take a childbirth education class, practice breathing techniques, and tour your birth location. The more informed and prepared you feel, the more confident you'll be handling whatever labor brings.</p>
    `,
    author: "Sarah Greenfield, Certified Nurse Midwife",
    date: "2026-03-03",
    readTime: "6 min read",
    tags: ["birth plan", "labor", "pregnancy", "childbirth preparation"],
  },
  {
    slug: "kitchen-safety-with-young-children",
    category: "safety",
    title: "Kitchen Safety with Young Children: Preventing Burns and Cuts",
    excerpt: "The kitchen is the most common site of childhood household injuries. Here's how to keep it safe.",
    content: `
<h2>Why the Kitchen Is High-Risk</h2>
<p>The kitchen contains hot surfaces, sharp tools, heavy objects, and toxic cleaning products — all at heights accessible to curious toddlers. Burns from hot liquids are one of the leading causes of injury in children under 5. Proactive safety measures make a significant difference.</p>

<h2>Stove and Oven Safety</h2>
<ul>
<li>Always use back burners when possible, with pot handles turned inward.</li>
<li>Install a stove knob cover to prevent children from turning on burners.</li>
<li>Never hold a child while cooking at the stove.</li>
<li>Keep a "kid-free zone" of at least 3 feet around the stove.</li>
<li>Use oven mitts every time — children learn by watching you model safe behavior.</li>
</ul>

<h2>Hot Liquid Hazards</h2>
<p>Spilled hot drinks cause more scalds than any other source. Never carry hot drinks while holding a child, and keep cups away from table and counter edges. Set your water heater to 48°C (120°F) to prevent scalds at the tap.</p>

<h2>Sharp Objects</h2>
<ul>
<li>Store knives in a locked drawer or a knife block out of reach.</li>
<li>Teach older children (5+) knife safety as a skill, rather than simply forbidding them.</li>
<li>Dispose of broken glass immediately and carefully — use damp paper towels to pick up small shards.</li>
</ul>

<h2>Cleaning Products and Medications</h2>
<p>Store all cleaning products in a locked cabinet below the counter — never under the sink without a safety latch. Keep the Poison Control number (in the US: 1-800-222-1222) saved in your phone.</p>

<h2>Involving Children Safely</h2>
<p>Children can safely help in the kitchen from a young age — stirring, washing vegetables, measuring ingredients. Assign age-appropriate tasks and use a learning tower or step stool so they're stable. Cooking together builds skills and reduces the forbidden-fruit appeal of kitchen tools.</p>
    `,
    author: "James Whitfield, Pediatric Safety Specialist",
    date: "2026-03-10",
    readTime: "6 min read",
    tags: ["kitchen safety", "burn prevention", "child safety", "household hazards"],
  },
  {
    slug: "playground-safety-tips",
    category: "safety",
    title: "Playground Safety: Keeping Kids Safe While They Play",
    excerpt: "Playgrounds are essential for development — and the site of 200,000+ ER visits per year. Know the risks.",
    content: `
<h2>The Importance of Play — and Its Risks</h2>
<p>Outdoor play on playgrounds builds strength, coordination, social skills, and confidence. But playgrounds are also where many childhood injuries occur, mostly from falls. Most injuries are preventable with proper equipment, surfaces, and supervision.</p>

<h2>What to Look for Before Your Child Plays</h2>
<ul>
<li><strong>Surface:</strong> Safe playgrounds have impact-absorbing surfaces — wood chips, rubber mulch, or poured rubber — at least 12 inches deep and extending 6 feet beyond equipment.</li>
<li><strong>Age-appropriate equipment:</strong> Most playgrounds designate areas for ages 2–5 and 5–12. Use the right section.</li>
<li><strong>No hazards:</strong> Check for broken equipment, exposed bolts, sharp edges, or openings between 3.5 and 9 inches (head entrapment risk).</li>
<li><strong>Shade:</strong> Metal slides and dark surfaces get extremely hot in summer — test before your child uses them.</li>
</ul>

<h2>The Most Common Injuries and How to Prevent Them</h2>
<p><strong>Falls from climbing equipment</strong> cause the majority of serious injuries. Teach children to hold on with both hands and to come down slides feet-first and one at a time. Supervise closely on monkey bars — these cause the most broken arms.</p>

<h2>Swing Safety</h2>
<p>Keep young children in bucket swings until they can hold on independently. Teach children to stay clear of moving swings. Never push a swing while facing it — walk to the side.</p>

<h2>Clothing Considerations</h2>
<p>Remove drawstring hoodies and scarves before playground use — these can catch on equipment and cause strangulation. Ensure shoelaces are tied. Helmets are not recommended on playgrounds, as they can get caught in equipment.</p>

<h2>Supervision Guidelines by Age</h2>
<p>Children under 5 need close, hands-on supervision. Ages 5–7 need watchful nearby supervision. Older children can play more independently but still benefit from an adult being present. Set clear boundaries about where they can go.</p>
    `,
    author: "Dr. Maria Santos, Pediatric Emergency Medicine",
    date: "2026-03-17",
    readTime: "6 min read",
    tags: ["playground safety", "child safety", "outdoor play", "injury prevention"],
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
