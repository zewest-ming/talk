import anthropic
import re
import datetime

client = anthropic.Anthropic()

# Read current data.ts to find existing slugs
with open("healthkids/lib/data.ts", "r") as f:
    current_content = f.read()

existing_slugs = re.findall(r'slug: "([^"]+)"', current_content)

today = datetime.date.today().isoformat()

prompt = f"""You are adding articles to a children's health website called HealthyKids.

Existing article slugs (do NOT repeat these):
{chr(10).join(existing_slugs)}

Write exactly 2 new high-quality health articles in TypeScript object format.
Each article must follow this exact structure (use backtick template literals for content):

  {{
    slug: "unique-kebab-case-slug",
    category: "baby-health" | "parenting-tips" | "nutrition" | "development" | "pregnancy" | "safety",
    title: "Article Title",
    excerpt: "1-2 sentence summary",
    content: `
<h2>Section Title</h2>
<p>Paragraph text...</p>
<h2>Another Section</h2>
<ul>
<li>Point 1</li>
</ul>
    `,
    author: "Dr. Sarah Mitchell, MD" | "Amy Chen, Registered Dietitian" | "Lisa Tanner, Child Psychologist" | "Tom Bradley, Child Safety Specialist" | "Dr. James Patel, Pediatrician" | "Dr. Olivia Barnes, OB-GYN" | "Dr. Rachel Foster, Developmental Pediatrician",
    date: "{today}",
    readTime: "X min read",
    tags: ["tag1", "tag2", "tag3"],
  }},

Output ONLY the 2 TypeScript objects (no extra text, no imports, no exports).
Choose topics not yet covered. Each article should have 4-5 h2 sections with substantial content."""

message = client.messages.create(
    model="claude-opus-4-6",
    max_tokens=4000,
    messages=[{"role": "user", "content": prompt}]
)

new_articles = message.content[0].text.strip()

# Insert before closing ];
updated = current_content.replace(
    "];\n\nexport function getArticlesByCategory",
    f"{new_articles}\n];\n\nexport function getArticlesByCategory"
)

with open("healthkids/lib/data.ts", "w") as f:
    f.write(updated)

print("Successfully added 2 new articles.")
