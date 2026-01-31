import { FAQ } from '@/types/blog'

export const faqs: FAQ[] = [
  {
    id: 'ai-as-tool',
    question: 'How I Use AI as a Tool, Not a Crutch',
    answer: `Think of AI as a really smart assistant, not the boss.

I lean on it for:
• Brainstorming different angles
• Generating repetitive code
• Validating my concepts early

But I draw the line at:
• Letting it make structural choices without my input
• Copy-pasting stuff I can't fully grasp
• Skipping the actual problem-solving

Here's my rule: if I can't break it down simply enough to teach someone else, it's not ready for deployment.

This approach keeps me efficient while actually improving my craft — not letting it atrophy.`
  },
  {
    id: 'learning-new-tech',
    question: 'How I Learn New Tech Without Getting Overwhelmed',
    answer: `Depth over breadth — that's my learning philosophy.

I don't binge courses or chase every new framework. Instead, I pick something I want to create and dive in immediately. Hit a roadblock? Then I figure out precisely what I need to clear it.

My workflow looks like:
• Start building right away
• Study when obstacles appear
• Polish once it works

This keeps things manageable and hands-on. Tiny experiments gradually stack up into genuine expertise — minus the exhaustion.`
  },
  {
    id: 'confusion-to-clarity',
    question: 'How I Turn Confusion Into Clear, Working Systems',
    answer: `Complexity usually signals unclear thinking, not impossible challenges.

When I'm staring at a mess, I pump the brakes and:
• Articulate what's actually wrong in my own words
• Chop it into bite-sized chunks
• Knock them out one by one

Structure brings understanding.

Once the mental model clicks into place, implementation becomes almost automatic.

This habit accelerates debugging, improves architectural decisions, and keeps me grounded when projects get chaotic.`
  }
]

// Alias for blogs page compatibility
export const blogs = faqs

export const getFAQById = (id: string): FAQ | undefined => {
  return faqs.find(faq => faq.id === id)
}

// Alias for blog pages
export const getBlogById = getFAQById
