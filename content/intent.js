/**
 * INTENT ARCHITECTURE.
 *
 * A service page is not a brochure with sections in a pleasing order. It is a
 * ladder, and each rung answers the one question a reader is actually holding
 * at that moment. Put a rung out of order and the reader falls off: nobody
 * cares how a system works before they believe it was built for them.
 *
 * This file is the single definition of that ladder. Pages render from it, so
 * the order cannot drift between one service and another, and the small mono
 * label above each section is not decoration — it is the page telling you which
 * question it is currently answering.
 *
 * The ordering claim worth defending: QUALIFY comes second, before the problem
 * statement. Most service pages open with a problem and hope the reader
 * self-identifies. We name the businesses first. A roofing contractor should
 * know inside eight seconds that the page is addressed to them, and a reader
 * who is not in the list should find that out on rung two rather than rung nine.
 */

export const INTENT_LADDER = [
  {
    id: 'orient',
    label: 'What this is',
    question: 'What am I looking at?',
    note: 'One outcome, stated plainly. No throat-clearing.',
  },
  {
    id: 'qualify',
    label: 'Who it is for',
    question: 'Is this built for a business like mine?',
    note: 'Named business types with their own pressure. Includes who it is not for.',
  },
  {
    id: 'recognise',
    label: 'The problem',
    question: 'Do they understand what is actually going wrong?',
    note: 'The failure described from the inside, in terms the reader already uses.',
  },
  {
    id: 'evaluate',
    label: 'What we build',
    question: 'What exactly would I be buying?',
    note: 'Components, named. Capability described, never sold.',
  },
  {
    id: 'understand',
    label: 'How it works',
    question: 'How does this actually function?',
    note: 'The mechanism, shown. This is where the bento module earns its place.',
  },
  {
    id: 'justify',
    label: 'What changes',
    question: 'What is different afterwards?',
    note: 'Operational change, not adjectives. Each one falsifiable.',
  },
  {
    id: 'derisk',
    label: 'How we deliver',
    question: 'How does this start, and what do I get at each step?',
    note: 'Stages with named artefacts, so the buyer can see the exit points.',
  },
  {
    id: 'object',
    label: 'Questions',
    question: 'But what about the thing that worries me?',
    note: 'Question-shaped headings with direct answers. Legible to answer engines.',
  },
  {
    id: 'extend',
    label: 'The other half',
    question: 'What happens at the edge of this service?',
    note: 'The handoff to the operations side. The positioning, made concrete.',
  },
  {
    id: 'act',
    label: 'Start',
    question: 'What is the next step?',
    note: 'One action. A conversation, not a form maze.',
  },
];

export const intentById = Object.fromEntries(INTENT_LADDER.map((i) => [i.id, i]));

/**
 * Register assignment. The design rule is one dark immersive moment per page
 * and one bento cluster per page — this is where the system decides which
 * rungs get them, rather than each page deciding for itself and drifting.
 */
export const REGISTER_BY_INTENT = {
  orient: 'ink', // the immersive moment
  qualify: 'paper',
  recognise: 'paper',
  evaluate: 'paper',
  understand: 'bento', // the mechanism cluster
  justify: 'paper',
  derisk: 'paper',
  object: 'paper',
  extend: 'ink-quiet', // a second dark band, but static — no motion
  act: 'paper',
};
