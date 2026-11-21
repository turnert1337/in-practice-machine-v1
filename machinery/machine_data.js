/* The Podcast Machine — data registry.
   machine.html reads this. Post PLANS (hook/outline/crafting/quotes) are NOT
   duplicated here — the drafting view fetches them live from
   content_rounds/round3_content.json (single source of truth).
   Stages: idea → outlining → drafting → (published).
   RULE (operator, binding): Turner writes the posts himself. The pipeline ends
   at outline + plan + crafting direction; scaffolds in drafts/ are reference. */

window.MACHINE = {

  episodes: [
    {
      id: "ep1",
      title: "Ep 1 · One Project, One Screen",
      recorded: "2026-08-29",
      stage: "published",
      stages: ["recording","processing","final edit/review","published"],
      stageIndex: 3,
      runtime: "100:00",
      links: [
        { label: "▶ Listen (Substack)", href: "https://readlossy.substack.com/p/one-project-one-screen" },
        { label: "Spotify", href: "https://open.spotify.com/show/2P77kAG0gPvfKSfc9JG331" }
      ],
      posts: [],
      note: "Published 2026-09-04. Feedback banked: tighter intro (applied on ep 3's excerpt format)."
    },
    {
      id: "ep2",
      title: "Ep 2 · (untitled)",
      recorded: "2026-09-13",
      stage: "cancelled",
      stages: ["recording","processing","final edit/review","published"],
      stageIndex: -1,
      runtime: "~99 min (Jeremy's track only)",
      links: [],
      posts: [],
      ideaBank: ["ib1","ib2","ib3","ib4"],
      note: "Cancelled — Turner's track lost in upload (operator call 2026-10-13: \"lost to the abyss\"). Jeremy's surviving track seeded the idea bank below; those ideas are reusable, the episode is not."
    },
    {
      id: "ep3",
      title: "Ep 3 · The Cutting Room (chaptered excerpts)",
      recorded: "2026-10-10",
      stage: "shelved",
      stages: ["recording","processing","final edit/review","published"],
      stageIndex: 2,
      runtime: "20:46.8 · 3 chapters · River AI narrator",
      links: [
        { label: "Riverside studio (open edit: \"Ep3 Excerpts — The Cutting Room\", rev 16)", href: "https://riverside.com/dashboard/studios/turner-tomlinsons-studio/projects" },
        { label: "⚑ Guided walkthrough (the 4 remaining manual steps)", view: "walkthrough" },
        { label: "Build record", href: "reports/ep03_chaptered_episode.md" }
      ],
      posts: ["p1","p2","p3"],
      note: "SHELVED 2026-11-17 (Turner: \"episode 3 - shelved, we are only working with podcasts that fit the mold of what we want to do at this point\"). Out of the publish queue, not deleted: the edit, VO and the p1–p3 posts stay as they are. Before shelving: final edit/review. Cut + VO done (edit 6acc15f6bd2b7feb98c7f836, rev 16). Remaining: your drag-reorder, the 104ms ear-check, a listen-through — then the export call is yours. The walkthrough view guides all of it."
    },
    {
      id: "ep4",
      title: "Ep 4 · A System That Builds Systems (public Ep 2)",
      recorded: "2026-11-07",
      stage: "published",
      stages: ["recording","processing","final edit/review","published"],
      stageIndex: 3,
      runtime: "22:17 · 3 chapters · Eric AI narrator · In Practice theme + cards",
      links: [
        { label: "▶ Listen (Substack) — public Ep 2", href: "https://readlossy.substack.com/p/a-system-that-builds-systems" },
        { label: "Spotify — Ep 2", href: "https://open.spotify.com/episode/26hPoeq2WkxL2vLC8hal5l" },
        { label: "▶ Drafted episode — v7, 22:17 (play in Riverside editor)", href: "https://riverside.com/editor/ff632ab9-e8f9-4590-9f9a-b5494ada7044/6aefaf8bf693295f04217027/preview" },
        { label: "Riverside project (all edits + raw recording)", href: "https://riverside.com/dashboard/studios/turner-tomlinsons-studio/projects/6aef3164e4150ec6f5242a9c" },
        { label: "🔎 Gauntlet receipts (rounds 1 + 2 override)", view: "ep4gauntlet" }
      ],
      posts: ["p6","p7","p8"],
      note: "V7 ASSEMBLED (edit 6aefaf8bf693295f04217027, rev 19, 22:17) — animated cards v2: FLOATING treatment (card drifts/rocks over a blurred blow-up of itself; phase-continuous across the theme→AI-intro cut). v6's zoom was rejected + its first upload rendered black in Riverside (missing resolution metadata — fixed, always pass resolution explicitly now). Carries from v5: narrator +3dB, 'read-lossy' pronunciation fix, locked intro master, outro fading in under 'That's a factory', theme, −13dB bridges, 177 filler mutes, Magic Audio. All earlier edits kept as reference. PUBLISHED 2026-11-16 20:41 CT as public Ep 2 (S1, full, 22:17): https://readlossy.substack.com/p/a-system-that-builds-systems. RSS item verified (itunes:episode 2, duration 1337, audio/mpeg). On Spotify 2026-11-16 by 21:03 CT (~22 min after publish): https://open.spotify.com/episode/26hPoeq2WkxL2vLC8hal5l. Export 6afb72de78c6049d98aed383; packet ~/PodcastDraftBackups/editorial/ep4_public_ep2_publish_packet.md; routine 99_project_skills/06_publish_audio_episode.md."
    }
  ],

  posts: [
    {
      id: "p1", title: "Fluency vs. Substance",
      stage: "outlining", source: "ep3",
      gate: "Writing plan drafted — lock it in the drafting view to advance.",
      planFrom: "round3", planId: "p1",
      scaffold: "drafts/ep03_post1_fluency-vs-substance.md",
      chapterLink: "episode timestamp 0:30 (Slop Bomb chapter) — becomes a real link at publish",
      research: null,
      targetWords: { target: 1900, band: [1600, 2200],
        rationale: "Your two comps run ~2,200 (Yuzheng) and ~2,900 (Robots Ate My Homework) words. The audience brief caps the band at 2,200 and warns that a tight 1,400 beats a padded 2,400. Land just under the cap: the slop-bomb scene and the two-page-rule mechanism earn the length, and a post about hollow fluency cannot afford a hollow paragraph." },
      similar: [
        { label: "The Article Sounded Right but Had No Ground Under It — Yuzheng Sun",
          href: "https://yuzheng.substack.com/p/the-article-sounded-right-but-had",
          why: "First-person: the author catches their own AI-assisted piece being structurally fluent and hollow — your thesis, but from the writer's seat instead of the meeting room. Good for calibrating how the confession register reads." },
        { label: "The post-AI internet needs a different kind of literacy — Robots Ate My Homework",
          href: "https://robotsatemyhomework.substack.com/p/post-ai-internet-literacy",
          why: "The professor's-eye version: 'perfectly vapid' essays and six markers for spotting emptiness. Useful as a foil — yours is the manager's version, and your mechanism (the two-page rule, read-it-word-for-word) is what this one lacks." }
      ],
      summary: "Decision engine → coaching agents → no free lunches; the 27-page slop-bomb scene stays the cold open. Title is the operator's own."
    },
    {
      id: "p2", title: "My Agent Made a Smart Call I Never Approved",
      stage: "outlining", source: "ep3",
      gate: "Writing plan drafted — s4 research attached below. Lock to advance.",
      planFrom: "round3", planId: "p2",
      scaffold: "drafts/ep03_post2_agent-decision-i-never-approved.md",
      chapterLink: "episode timestamp 14:37 (Rate Limit chapter; ~6:51 if you do the reorder) — real link at publish",
      research: "../20_research/03_opus_two_more_things.md",
      targetWords: { target: 1600, band: [1400, 1900],
        rationale: "The comps run long — ~3,300 (Alan Paris) and ~2,100 (Dr. Rockmore) — but both argue from the news. Your round-3 brief calls this the leanest, most technical post of the three, and your receipt is first-person. Lean plus receipts beats their length; past 1,900 you're diluting the one thing they can't match." },
      similar: [
        { label: "The AI Didn't Go Rogue. Authority Failed. — Alan Paris",
          href: "https://alanparis.substack.com/p/the-ai-didnt-go-rogue-authority-failed",
          why: "Makes the same reframe you're making — not disobedience, mis-scoped authority — off the recent OpenAI/Anthropic incidents. Watch how he keeps the incident subordinate to the governance claim; that's the structure your post wants." },
        { label: "The Permission Problem — Dr. Rockmore",
          href: "https://drrockmore.substack.com/p/the-permission-problem",
          why: "The permission/verification gap as its own subject. Your edge over both of these: a first-person receipt (the 5-hour limit gone in one hour) that neither has — they argue from the news, you argue from your own logs." }
      ],
      summary: "The token-burn story is the receipt, not the subject. Thesis: agents make locally smart, globally expensive calls; you can't delegate what you can't verify. Title is mine, not yours — flag from the drafts README: approve or rename."
    },
    {
      id: "p3", title: "My 150 Apple Notes Became a Compost Heap",
      stage: "outlining", source: "ep3",
      gate: "Writing plan drafted — lock it in the drafting view to advance.",
      planFrom: "round3", planId: "p3",
      scaffold: "drafts/ep03_post3_apple-notes-compost-heap.md",
      chapterLink: "episode timestamp 7:02 (Apple Notes chapter; ~14:3x after reorder) — real link at publish",
      research: null,
      targetWords: { target: 1400, band: [1200, 1700],
        rationale: "This genre runs short: ~680 (Andresen) and ~1,050 (The Creative Lifestyle). Yours earns more length because it ships a working machine — the riff engine, the simulated beta readers — but past ~1,700 it stops being a personal essay and starts being documentation." },
      similar: [
        { label: "The Writer's Compost Heap — Katya Andresen",
          href: "https://katyaandresen.substack.com/p/the-writers-compost-heap",
          why: "The closest metaphor match on the platform: unused writing as compost, decomposition → recomposition as the creative cycle. Check what your riff engine adds that her hand-worked version can't do — that delta is your post." },
        { label: "Don't Let The Notes App Become a Digital Graveyard — The Creative Lifestyle",
          href: "https://thecreativelifestyle.substack.com/p/dont-let-the-notes-app-become-a-digital",
          why: "Your exact problem statement (notes app as graveyard of good ideas) without your solution. Yours is this post plus a working machine — the 150 #CH notes, the riff engine, the simulated beta readers." }
      ],
      summary: "The #CH notes, the riff engine, the nine-sentence framework; Carbon Chicken plug placeholder you'll tune."
    },

    {
      id: "p4", title: "GRIM Vanishing Points: How to Aim at Where We're Going",
      stage: "published", source: "standalone",
      publishedUrl: "https://readlossy.substack.com/p/grim-vanishing-points-how-to-aim", publishedOn: "2026-11-10",
      series: { part: 1, of: 2, role: "where we're going", pair: "p5" },
      substackDraft: "https://readlossy.substack.com/publish/post/224347768",
      grimFinal: "10_app/drafts/final/p4_vanishing-points.md",
      gate: "2026-11-10: round-1 editorial applied (55 accepted edits, e-title rejected — GRIM stays in the title; e-series implemented: part two named, pending Turner's review). GRIM final re-encoded and staged as a Substack draft, parked on the publish-review modal. Attribution gate CLOSED: \"what I call the Great Re-encode Into Markdown\" coins it as his. Turner published it himself 2026-11-10.",
      planInline: {
        size_words: "1,100–1,500",
        hook: "Sutton discipline, zero runway: the thesis is the first sentence. 'Visible code is becoming a diagnostic symptom — like consciously noticing your own breathing — and natural language is the vanishing point software is converging toward.' No wind-up, no 'in the age of AI.' The essay then spends its whole length making that sentence feel obvious in retrospect, which is exactly how Software 2.0 and The Bitter Lesson both worked.",
        outline: [
          "Thesis as sentence one (the Sutton move). Then one paragraph of what it claims and doesn't claim: this is about perceptibility, not interface choice.",
          "Handle Karpathy the Mollick way, immediately: cite 'the hottest new programming language is English' (2023) and vibe coding (2025) openly, credit them, then state the labeled increment — they argue about where the interface sits; this argues about what remains visible. Different axis. One paragraph, then move.",
          "Receipt 1 (parallel form, Koomen's singular-anchor rule): a specific fleet moment where the symptom fired — you had to consciously open raw code, what triggered it, what it cost in time and attention. Named project, dated.",
          "Receipt 2: the before/after — a task that used to mean reading code and now doesn't (the tmux terminal work or a session-log skill), with a commit reference. Checkable, Mollick-style.",
          "Receipt 3, the bitter turn: the abstraction leak — code became visible again unexpectedly. This is the essay's own Bitter Lesson moment; it keeps the thesis earned instead of triumphalist. Each receipt shorter than the last.",
          "The Brunelleschi analogy does its interpretive work here, once: perspective didn't eliminate depth, it organized it toward a point you stop looking at. One historical analogy carrying the essay is the proven Koomen structure — but it must interpret the receipts, not decorate the thesis.",
          "Close on why the lesson is uncomfortable (Sutton's closing move): engineers' identity lives in the code the way AI researchers' lived in their heuristics."
        ],
        pull_quotes: [
          "Visible code is a diagnostic symptom, not a feature.",
          "The first time you notice your own breathing, something is usually wrong.",
          "Perspective didn't eliminate depth; it organized it toward a point you stop looking at."
        ],
        crafting: "ATTRIBUTION GATE (blocking, decide before lock): 'the great reencode' has NO findable public source — multiple search passes, nothing on HN, X, Substack, or press. Never publish it as a borrowed citation. Your three options: drop the phrase · tell me where you heard it so it can be verified and credited · coin it as explicitly your own. Recommended: coin it — you already named the GRIM machinery with it, which strongly suggests it was yours all along, and a clean coinage is worth more than a vague citation (see comp evidence: a six-word tweet outcoined a thousand essays). Other crafting: strict parallel receipts, each with one named, dated anchor — never 'code these days'; the differentiation sentence (perceptibility vs. interface) must appear before the first receipt or HN tags it derivative in the first comment; cover image from your actual screen, not stock.",
        why: "The lane is genuinely occupied — Karpathy owns both adjacent phrases, with years of unprompted citation. But the comp dissection found the open ground: nobody in the set argues that visible code is itself a symptom of an unfinished system. Karpathy, Koomen, Yegge, and Mollick all argue about interface or beneficiaries; the physicality/perceptibility axis is unclaimed. That's the post.",
        alt_titles: ["The Vanishing Point", "Be Allergic to Code", "Code as Symptom"]
      },
      scaffold: null,
      chapterLink: null,
      research: "../20_research/04_vanishing_point_comps.md",
      targetWords: { target: 1300, band: [1100, 1500],
        rationale: "The structure model is Sutton's Bitter Lesson (~1,100 words: thesis as first sentence, parallel receipts, zero padding) and the lane-owner comp, Software 2.0, runs ~1,200–1,500. The comp set's closing verdict: length didn't determine landing, discipline did. Three receipts, each shorter than the last, leaves no room to pad." },
      similar: [
        { label: "The Bitter Lesson — Richard Sutton",
          href: "http://www.incompleteideas.net/IncIdeas/BitterLesson.html",
          why: "The structure model to steal outright: thesis as the opening sentence, parallel receipts on an identical beat, a closing turn on why the lesson is hard to accept. ~1,100 words, treated as scripture for six years." },
        { label: "AI Horseless Carriages — Pete Koomen",
          href: "https://koomen.dev/essays/horseless-carriages/",
          why: "The closest structural comp (864 points, 478 comments on HN): one historical analogy carrying the essay, one singular concrete villain. Your Brunelleschi is his horseless carriage — the analogy must interpret the receipts, not decorate the thesis." },
        { label: "Software 2.0 — Andrej Karpathy",
          href: "https://karpathy.medium.com/software-2-0-a64152b37c35",
          why: "The lane owner. He doesn't argue the reframe — he asserts it in one sentence and spends the rest making it feel obvious in retrospect. Your thesis sentence needs the same declarative confidence." },
        { label: "\"The hottest new programming language is English\" — Karpathy (tweet, 2023)",
          href: "https://x.com/karpathy/status/1617979122625712128",
          why: "The single biggest occupied-territory risk: 12.8M views, fact-checked like a proverb. Cite it openly and move past it fast — your claim is about the disappearance of visibility, not the choice of interface language." },
        { label: "Vibe coding — Karpathy (tweet, 2025)",
          href: "https://en.wikipedia.org/wiki/Vibe_coding",
          why: "'Forget that the code even exists' is the closest existing phrase to 'be allergic to code.' Distinction to sharpen: vibe coding is a workflow attitude; yours is an architectural prediction about where code sits in the stack. Also the reminder: a six-word tweet outcoined a thousand essays." },
        { label: "Revenge of the Junior Developer — Steve Yegge",
          href: "https://frontendmasters.com/blog/revenge-of-the-junior-developer/",
          why: "The maximalist pole (~4,500 words, six-wave taxonomy, voice buying trust before argument). Your 1,100–1,500 target is a deliberate rejection of this mode — which means every sentence carries weight Yegge spends paragraphs earning." },
        { label: "Speaking Things Into Existence — Ethan Mollick",
          href: "https://www.oneusefulthing.org/p/speaking-things-into-existence",
          why: "The template for handling Karpathy: open by citing him, add one clearly-labeled increment (vibeworking) instead of pretending the lane is empty. Your increment is the physical/perceptual symptom framing — the one axis the whole comp set leaves unclaimed." }
      ],
      summary: "Natural language as the vanishing point software converges toward; visible code as a diagnostic symptom (the breathing analogy). Differentiated from Karpathy on the perceptibility axis — the one claim the comp set leaves unclaimed. Full dissection: 20_research/04."
    },

    /* ---- part 2 of the series Vanishing Point opens (Turner, 2026-10-31):
            p4 = where we're going, p5 = how we'll get there. p4 references it. ---- */
    {
      id: "p5", title: "The Fast Takeoff Is Here (It's Just Not Evenly Distributed)",
      stage: "idea", source: "standalone",
      series: { part: 2, of: 2, role: "how we'll get there", pair: "p4" },
      summary: "Part two of the series The Vanishing Point opens: Vanishing Point is where we're going; this one is how we'll get there. Referenced from inside Vanishing Point. Title only so far, no plan yet. Before it locks: the title riffs on the line usually credited to William Gibson (\"the future is already here, it's just not very evenly distributed\"), whose origin is disputed, so verify how to credit it during research."
    },

    /* ---- ep4 chapter-paired posts (gauntlet round 1, 2026-11-07). Ideation:
            each pairs with an ep4 chapter; titles are candidates, Turner's call. ---- */
    {
      "id": "p6",
      "title": "The Agent Human Resources Department",
      "stage": "outlining",
      "source": "ep4",
      "subtitleCandidate": "Start an Agent Resources Department",
      "titleNote": "Title = the spoken chapter name, exactly (Turner 2026-11-17: \"keep chapter names the same\"). Subtitle is your call; the reader panel says the subtitle/preview line has to carry the 'first job is saying no' angle, because the title alone reads like the vendor 'agent boss' pieces.",
      "gate": "Writing plan ready (2026-11-17), built from the chapter 1 transcript, a 4-reader audience panel and verified references. Read the 3 pieces on the right to unlock the desk (~37 min), then write. Four questions only you can answer are at the bottom of the plan.",
      "planInline": {
        "size_words": "1,400–1,900",
        "hook": "Open on your own receipt, not the podcast: the six-persona panel you spun up to pick this episode's chapters. Six agents, each given a one-line role (a lens), working without seeing each other, ranking 30 pitches, then gone. Then the concrete outcome that answers 'did it work, compared to what?': three of the six judges independently flagged a line that was nowhere on the tape (the 'first agent decides if the next deserves to exist' quote) before it could ship. Nobody hired them, reviewed them, or kept them. That's the scene the rest of the post interprets.",
        "outline": [
          "1 · Scene (first ~150 words): the six-agent panel, what it did, and the fabricated-quote catch. Give the cost if you can find it (see question 3). Embed chapter 1 (0:53–9:33) right after this beat.",
          "2 · The question you asked on tape, framed as speculation, then answered: one person at the top of 'hundreds of thousands of agents' (1:26). Altman's one-person billion-dollar company is the backdrop (see seasoning). Your answer, in your words at 3:37 and 3:54: the limit isn't agent count, it's judgment and time. Keep this to one paragraph; three readers flagged the scale talk as hype unless you take it apart.",
          "3 · Jeremy's coinage, credited (2:02): an agent resources department, with an interview, a review process, a budget, charters (2:13–2:42). One short paragraph. It's his design, and it's the title.",
          "4 · Your turn, the thesis: the department should grow out of real need (4:14), and its first control is a worth-it check before any new agent exists (4:51). Two quotes maximum here; the panel said five in a row reads like a transcript.",
          "5 · Receipts first (what you actually run), glossed in plain language: (a) a cost check before any multi-agent team spins up: the size and cost band are shown first, and 5 or more agents need your explicit yes; (b) an independent reviewer that sees only the goal and the result, never the builder's reasoning (audit language: separation of duties). Then the honest line: your gate checks cost, not return.",
          "6 · Tactical spine, labeled as a PROPOSAL (not built): the worth-it gate as 4–5 questions with an ugly threshold you pick. Candidates from the panel: how often does this happen; minutes saved per run; what does one error cost; how will a run be checked, and by whom; who babysits it when it drifts. Gate production agents, not sandbox tinkering (that's your answer to Mollick's 'bias toward allowing' counterpoint).",
          "7 · Jeremy's later stages, one short list, clearly 'not built': role statement + rubric reviews where the review rewrites the role, not the worker (6:18–6:36); levels as checked runs (your level 32, 8:26, a thought experiment); a failure budget, 'just not on expensive mistakes' (9:04). One line on XP at most.",
          "8 · The writer's turn (one paragraph, the sci-fi reader's ask): the panel did a day's work and vanished. A review that rewrites the job instead of the worker. Ask one question you actually care about here, and don't answer all of them.",
          "9 · Opinion stake, stated as a claim someone could argue with by name, then close. Full episode link in the footer."
        ],
        "tape_quotes": [
          {
            "who": "Turner",
            "t": "1:26",
            "text": "they constantly have hundreds of thousands of agents working and it's literally one person at the top"
          },
          {
            "who": "Jeremy",
            "t": "2:02",
            "text": "we don't need a human resources department. We need a [pause] an agent resources department.",
            "note": "strict verbatim has the stutter"
          },
          {
            "who": "Jeremy",
            "t": "2:13",
            "text": "maybe it's a twenty minute interview with that agent … it needs its own review process"
          },
          {
            "who": "Turner",
            "t": "3:37",
            "text": "I asked myself what's between me and my army of agents and it's … one practical need, right? … you don't wanna just build it for no reason."
          },
          {
            "who": "Turner",
            "t": "3:54",
            "text": "saying no to a lot of things is a lot more valuable right now."
          },
          {
            "who": "Turner",
            "t": "4:04–4:14",
            "text": "I find the ideas in the fertile ground that justifies a team that can maybe just build itself … an agent resources department like suddenly emerges really naturally from that."
          },
          {
            "who": "Turner",
            "t": "4:51",
            "text": "just run a quick ROI on what this is supposed to do … give it a pass fail … Like an ROI check before you spin up yet another agent"
          },
          {
            "who": "Turner",
            "t": "6:18–6:36",
            "text": "simple role statement and rubric is all the AI needs … modify the role statement for this role and reissue the role … a whole self healing loop on the role"
          },
          {
            "who": "Turner",
            "t": "8:26",
            "text": "it's level 32 … it's done it and had it checked and verified that it did it right 32 times",
            "note": "a thought experiment, not a running counter"
          },
          {
            "who": "Jeremy",
            "t": "9:04",
            "text": "failing is learning. you just don't want it to fail on some expensive mistakes"
          }
        ],
        "pull_quotes": [
          "Candidate: The first department an agent org needs is the one that can say no.",
          "Candidate: Level 32 should mean 32 checked runs.",
          "Write your own. Two readers flagged the earlier candidates as 'not X, it's Y' cadence, and 'agents are free to hire' as false (they cost tokens, latency and review time). The 15× token figure in the seasoning is the honest version."
        ],
        "built": {
          "yes": [
            "A role-per-agent panel: the six-persona gauntlet that picked this episode's chapters, each with a written lens (ep4 gauntlet receipts).",
            "An independent reviewer that sees only the goal and the deliverable (the validate motion).",
            "A cost gate: every team motion shows its size and cost band before spawning, and 5+ agents need your explicit yes (CLAUDE.md §3.9)."
          ],
          "no": [
            "The worth-it (ROI) pass/fail gate. Yours checks cost, not return.",
            "Intake interviews, charters, per-agent budgets and periodic rubric reviews (Jeremy's design).",
            "XP or levels. 'Level 32' is a thought experiment."
          ]
        },
        "audience": [
          {
            "reader": "Hands-on agent builder",
            "lands": "The cost gate with human approval at 5+ agents, the goal-only reviewer, levels as checked runs, and above all the admission that the gate checks cost, not return.",
            "missing": "Real numbers: what the panel cost, whether it beat one agent ranking alone, how often the 5+ gate has said no, one failure story, and an ugly ROI rule.",
            "cut": "Put receipts before Jeremy's unbuilt ideas; cut the hundreds-of-thousands line or label it as speculation. Flagged 'not X, it's Y' in the thesis and pull-quotes.",
            "comment": "Show me the cost band for the six-agent panel and how often the 5+ gate has actually blocked you."
          },
          {
            "reader": "Manager / operator",
            "lands": "The worth-it check as a governance step they could propose Monday; checked runs as the way to trust an automation; the failure budget for risk conversations.",
            "missing": "The gate itself as 5–6 questions with a threshold and an owner; one worked cost example; a sample role statement + rubric; a rule for one agent vs a team.",
            "cut": "Most of the beat-4 quotes (keep two), the sci-fi-scale framing, the XP material. Gloss jargon: sub agents, spin up, validator, charters.",
            "comment": "If you posted the five questions, I'd run our Q1 agent pilot requests through them this week."
          },
          {
            "reader": "Skeptic tired of AI hype",
            "lands": "The built/not-built honesty; the goal-only reviewer and the human approval step are real controls.",
            "missing": "How many times the gate said no and whether it was right; one case where the reviewer caught something and one where it missed.",
            "cut": "The HR metaphor where it isn't needed ('hired' agents are prompts), the self-healing line unless one loop is shown converging, most XP.",
            "comment": "Your one shipped HR control is a rate limiter plus a change-approval step. How many times did it say no, and was it right?"
          },
          {
            "reader": "Sci-fi reader (came for the fiction)",
            "lands": "The six panelists who did a day's work and vanished; one person at the top as an image (god or lonely manager?); a review that rewrites the role, not the worker.",
            "missing": "One scene where the gate actually said no, a specific agent you almost made and didn't, and the writer's voice: is the top of the pyramid power or vertigo?",
            "cut": "Translate 'ROI pass/fail' to 'is this worth it?'; shrink the audit to a short paragraph.",
            "comment": "You say the first job of agent HR is saying no. Isn't the second job deciding what we owe the ones we said yes to, even if the answer is 'nothing'?"
          }
        ],
        "audience_changes": "Receipts moved ahead of Jeremy's ideas, and the unbuilt parts are grouped and labeled. The panel's fabricated-quote catch now answers 'it worked compared to what'. 'Agents are free to hire' is gone, replaced by the 15× token figure. The gate becomes a written proposal of 4–5 questions. Tape quotes are capped at two per beat. Jargon gets plain-language glosses. One writer's paragraph is added. Scale talk is reduced to one framed paragraph.",
        "seasoning": [
          {
            "label": "Anthropic — Building effective AI agents (Dec 2024)",
            "href": "https://www.anthropic.com/engineering/building-effective-agents",
            "stance": "supports",
            "why": "\"find the simplest solution possible, and only increase complexity when needed.\" Your gate is this rule turned into policy. Cite it so the thesis reads as practice, not contrarianism."
          },
          {
            "label": "Anthropic — How we built our multi-agent research system (Jun 2025)",
            "href": "https://www.anthropic.com/engineering/multi-agent-research-system",
            "stance": "supports, with a number",
            "why": "\"multi-agent systems use about 15× more tokens as chats\", and they need tasks \"where the value of the task is high enough to pay for the increased performance.\" That's the ROI gate in the builder's own words, and the honest replacement for 'agents are free.'"
          },
          {
            "label": "Cognition (Walden Yan) — Don't Build Multi-Agents (Jun 2025)",
            "href": "https://cognition.com/blog/dont-build-multi-agents",
            "stance": "challenges",
            "why": "The hidden cost of another agent is coordination and lost context, not tokens. It cuts against the org-chart picture: their fix is fewer agents with shared context, not a better-run roster. Worth one sentence of argument."
          },
          {
            "label": "Gartner: over 40% of agentic AI projects canceled by end of 2027 (Jun 2025, via Reuters)",
            "href": "https://www.thestar.com.my/tech/tech-news/2025/06/25/over-40-of-agentic-ai-projects-will-be-scrapped-by-2027-gartner-says",
            "stance": "supports",
            "why": "Cause: \"escalating costs and unclear business value.\" That's the outside-world version of your worth-it gate. (gartner.com blocked the fetch; this is the Reuters reprint.)"
          },
          {
            "label": "Workday — Agent System of Record (Feb 2025)",
            "href": "https://newsroom.workday.com/2025-02-11-The-Next-Generation-of-Workforce-Management-is-Here-Workday-Unveils-New-Agent-System-of-Record",
            "stance": "argue with",
            "why": "HR-for-agents is already a product: onboard agents 'with defined roles, skills, and secure access', then 'optimize the ROI'. Their order is onboard first, ROI later. Your thesis reverses it."
          },
          {
            "label": "HBR / BCG — Why You Shouldn't Treat AI Agents Like Employees (May 2026)",
            "href": "https://www.bcg.com/news/6may2026-why-you-shouldnt-treat-ai-agents-employees",
            "stance": "challenges your title",
            "why": "1,200+ managers: when AI was framed as an 'employee', they caught 18% fewer errors and pushed accountability onto the AI. The strongest counterpoint to an HR title. Argue that your department is a gate and a budget, not a personification. (HBR is paywalled; BCG's summary page.)"
          }
        ],
        "crafting": "Credit cleanly: the department is Jeremy's coinage; the gate is your idea; neither is shipped. Never put 'first agent decides if the next deserves to exist' in quotes (it isn't on tape, and that's the line your panel caught). Gloss every bit of jargon in one plain clause: sub agents, spin up, validator ('a reviewer that only sees the goal and the result'), charters ('a job description'). Avoid 'not X, it's Y' constructions and tidy triads (checklist #7). Altman's one-person billion-dollar company is real (Fortune, Feb 2024: https://fortune.com/2024/02/04/sam-altman-one-person-unicorn-silicon-valley-founder-myth/); the 2026 'it came true' claims (Medvi, via Marginal Revolution / NYT) aren't verified here, so don't assert them. FOUR QUESTIONS ONLY YOU CAN ANSWER (each one fills a reader's ask): (1) Is there a specific agent or team you almost spun up and didn't? That's the scene where the gate says no. (2) How often has your 5+ approval actually said no or downsized a team? (3) Do you know what the six-persona panel cost in tokens, dollars or minutes? (4) Have you ever checked a panel against a single agent doing the same ranking? If you haven't, say so; that's honest too.",
        "why": "This is the first post of the three, and it sets the honesty bar for the series. The vendor world (Workday, Microsoft's 'agent boss', OpenAI's onboarding language) is already selling HR for agents, and the 2026 BCG study says the employee framing makes managers worse at catching errors. Your open ground: the first control is a refusal, backed by the builders' own cost numbers, written by someone who admits which parts he hasn't built. All four simulated readers stayed for that admission, and all four wanted a real number or a real 'no'.",
        "alt_titles": [
          "(Locked: the spoken chapter name.) Subtitle candidates: 'Start an Agent Resources Department' · 'Its first job is saying no'"
        ]
      },
      "chapterLink": "Chapter 1 of public Ep 2, 0:53–9:33 (https://readlossy.substack.com/p/a-system-that-builds-systems); tape 33:59–42:36",
      "targetWords": {
        "target": 1600,
        "band": [
          1400,
          1900
        ],
        "rationale": "The audience brief puts podcast-derived posts at 1,400–2,200 words, and this is a single-stake post with one tactical spine, so it sits in the lower half. The comps set the ceiling: Anthropic's 'Building effective agents' runs about 3,300 words and Cognition's piece about 2,100, but both are reference guides; yours is one argument with receipts. A tight 1,500 beats a padded 2,100. If you come in under 1,400, the missing words are the scene where the gate said no and a real number, not more setup."
      },
      "similar": [
        {
          "label": "Read first (~14 min): Anthropic — Building effective AI agents",
          "href": "https://www.anthropic.com/engineering/building-effective-agents",
          "why": "~3,300 words. The builders' own rule: stay simple until complexity is proven to help. Your worth-it gate is this rule as policy, so know their exact wording before you write yours."
        },
        {
          "label": "Read first (~9 min): Walden Yan (Cognition) — Don't Build Multi-Agents",
          "href": "https://cognition.com/blog/dont-build-multi-agents",
          "why": "~2,100 words. A second reason to say no: every extra agent costs coordination and context, not just tokens. It also argues against the org-chart picture your title invites."
        },
        {
          "label": "Counterpoint (~14 min): Ethan Mollick — Making AI Work: Leadership, Lab, and Crowd",
          "href": "https://www.oneusefulthing.org/p/making-ai-work-leadership-lab-and",
          "why": "~3,200 words. Mollick says 'be biased towards allowing people to use AI'; heavy gatekeeping drives it into shadow use. Your post needs one sentence on why gating production agents differs from gating experimentation."
        }
      ],
      "summary": "Writing plan ready (2026-11-17). Thesis: the first control an agent org needs is a worth-it gate before any new agent exists; Jeremy's department (interviews, reviews, budgets, levels) grows out of real need afterward. Receipts first: the six-persona panel and its fabricated-quote catch, the cost gate (5+ agents need Turner's yes), and the goal-only reviewer. Honest about what isn't built (the ROI gate, reviews, levels). Seasoned with Anthropic (15× tokens), Cognition, Gartner's 40%, Workday and the 2026 HBR/BCG counterpoint. Full verification notes: 20_research/05_p6_agent_hr_references.md.",
      "feedback": []
    },
    {
      "id": "p7",
      "title": "Simple Rules for a Self-Improving Team",
      "stage": "outlining",
      "source": "ep4",
      "subtitleCandidate": "Five hops, nothing lost, seven new rules per hop",
      "titleNote": "Title = the spoken chapter name, exactly (Turner 2026-11-17). Two readers wouldn't click 'self-improving' on its own; all four would click the telephone-game finding. So the subtitle should carry the finding.",
      "gate": "Writing plan ready (2026-11-17), built from the chapter 2 transcript, a 4-reader audience panel and verified references. Read the 3 pieces on the right to unlock the desk (~38 min), then write. Four questions only you can answer are at the bottom of the plan.",
      "planInline": {
        "size_words": "1,400–1,900",
        "hook": "Open on the inversion. In the classic human rumor study (Allport & Postman, 1947), people retelling a story lost about 70% of the details within five or six retellings. Jeremy had an agent run the same game: a brief passed down five agents. The result: \"we lose no context through five steps\", but \"seven or eight different new directives added on for every additional step\" (15:41). One agent wrote \"the operator must be notified about this. And that was never a requirement\" (16:18). People forget, and these agents legislated. Every reader named that invented line as the best moment in the plan. Put it in the first 150 words.",
        "outline": [
          "1 · Scene (first ~150 words): the inversion and the invented rule. Be exact about provenance: this is Jeremy's test, one run, recounted on tape, and the 7–8 count is his. If Jeremy can share the hop-1 vs hop-5 brief, the side-by-side IS the scene (question 3). Embed chapter 2 (9:33–16:37) right after.",
          "2 · Your own receipt, the same pattern in your system (your call to share). Since the podcast project's rulebook (CLAUDE.md) was created on 2026-08-29, it has grown by 23 lines and lost 1. Its newest rule (§3.11, 2026-11-16, relays from the command center count as you) is one you asked for. It was added on purpose, and like every other line it has no expiry or review date. That's the honest receipt: rules arrive and almost none leave. Also: the frame's 'from now on' rule exists, with 0 entries logged in this project.",
          "3 · The idea you brought, in one sentence (three readers: Gribbin is framing, keep it short): complexity from simple rules (9:36–9:48), with Reynolds' Boids (three rules, flocking) as the picture. Then your actual claim: 'if you can get the set of simple rules for how it operates and grows itself right…' (10:06).",
          "4 · Jeremy's mechanism, in plain words (manager: map 'template' to 'the master SOP'): one master template; any project can 'push an issue up' to change it; the factory decides; a new version goes out; every open project checks for it on start (10:56–12:44). One writer, many contributors of lessons. Cognition's 2026 piece says the same about multi-agent systems.",
          "5 · Tactical spine, the rules as a short list. Mark which exist: (a) one master template [you have this: the Relay Frame]; (b) lessons go up as requests, and only one place changes behavior [Jeremy has this; your 'from now on' log is unused here]; (c) new versions go out to everyone [Jeremy; not you]; (d) a rule for deleting rules [PROPOSAL, nobody on the tape has it]; (e) once a step is understood, it becomes plain code [you did this once: the iTunes clone]. Say 'I haven't built (d)' in the same paragraph as the thesis, not three sections later.",
          "6 · What a deletion rule could check (proposal; manager and skeptic both asked): any rule nobody can trace to the incident that caused it; rules that haven't fired in N runs; duplicates. Prune by removing and merging, not by rewriting the whole rulebook into a summary: the ACE paper found a rewrite collapsed an 18,282-token playbook to 122 tokens and accuracy fell.",
          "7 · Compress what's understood (your story, from the full conversation, not the cut): the iTunes clone. v1 Opus did everything; v2 split it into subagents to cut cost; v3 asked 'which of this … should just be Python code?' Your words: 'the quality stabilizes, the cost goes down' (tape 55:47–56:05). Give one number if you have one (question 1). The sci-fi reader's line for it: 'the parts we understood stopped needing a mind'. That's their phrase, so only use it if it's yours too.",
          "8 · The writer's turn (one paragraph): who decides an emergent rule was noise and not the team learning something you didn't know? 'The operator must be notified' might have been caution. A team that can only improve in ways you already approve of… End on the question, not an answer.",
          "9 · Opinion stake as a citable claim, with the not-built admission attached. Close with the depth guess labeled as a guess: 'six levels deep might be the limit' (14:23)."
        ],
        "tape_quotes": [
          {
            "who": "Turner",
            "t": "9:36–9:48",
            "text": "he's got one book, it's called Deep Simplicity … complexity emerges … from simple rules … if you're gonna grow a big organization, you're gonna have agents managing each other",
            "note": "he says 'Gribbons … maybe it's Gibbons'; print 'John Gribbin'"
          },
          {
            "who": "Turner",
            "t": "10:06",
            "text": "if you can get the set of simple rules for how it operates and grows itself right, then the … business is the flywheel component"
          },
          {
            "who": "Turner",
            "t": "10:27",
            "text": "simple management, simple self healing, simple contracts of how to, for instance, issue a new agent, prove its ROI first … that suddenly mean I can … shift those decisions into auto",
            "note": "a triad as speech is fine; don't echo it in your prose"
          },
          {
            "who": "Jeremy",
            "t": "10:56",
            "text": "the factory has a template that is versioned"
          },
          {
            "who": "Jeremy",
            "t": "10:56–12:44",
            "text": "push an issue up to the factory to update the template … every project that's open … every time it starts, it looks for a new update"
          },
          {
            "who": "Jeremy",
            "t": "13:42",
            "text": "the YouTube manager is actually another factory. It's a micro factory"
          },
          {
            "who": "Jeremy",
            "t": "14:23",
            "text": "the six levels deep might be the limit",
            "note": "a guess; label it"
          },
          {
            "who": "Jeremy",
            "t": "15:41",
            "text": "we lose no context through five steps. But what ends up happening instead is we get seven or eight different new directives added on for every additional step"
          },
          {
            "who": "Jeremy",
            "t": "16:18",
            "text": "the operator must be notified about this. And that was never a requirement, but one just added that in there as its own note"
          },
          {
            "who": "Jeremy",
            "t": "16:32",
            "text": "it's not a … human-based telephone game where we lose the context"
          },
          {
            "who": "Turner",
            "t": "tape 55:47–56:05 (full conversation, NOT in the cut)",
            "text": "which of this, now that we understand the process at high resolution, should just be Python code? … the quality stabilizes, the cost goes down"
          }
        ],
        "pull_quotes": [
          "Candidate: People forget. These agents legislated.",
          "Candidate: Every rulebook I own has only ever grown.",
          "Write your own. The builder flagged 'Your agents won't forget your rules. They'll write their own.' as a 'not X, it's Y' shape that sounds machine-made, and the skeptic flagged 'five hops, no lost context' as n=1 dressed up as a statistic. If you use the number, attribute it: 'in Jeremy's test'."
        ],
        "built": {
          "yes": [
            "One master template stamped into every new project (the Relay Frame, ~/CommandCenter/_templates).",
            "A 'from now on' rule that edits the template and logs it (log-customization). It exists, but 0 entries are logged in this project.",
            "Routines rewritten after each run: the publish routine was updated during and after Ep 2, and the cadence routine came out of it.",
            "Compressing an understood step into code: the iTunes clone v1→v3 (your story, tape 55:47)."
          ],
          "no": [
            "A deletion/pruning pass. Nobody on the tape has one, and the thesis depends on it.",
            "New template versions flowing out to projects already open (Jeremy's check-on-start).",
            "The telephone test. Jeremy ran it; you proposed it.",
            "The 'midnight learning cycle' and the holistic review after each run, which you floated later in the conversation (tape 54:29, 59:58)."
          ]
        },
        "audience": [
          {
            "reader": "Hands-on agent builder",
            "lands": "The telephone result and the invented 'operator must be notified' line (lead with it); the iTunes v1→v3 arc, the only part they'd forward; push-issue-up / publish / check-on-start as a copyable mechanism; the blunt built list.",
            "missing": "The test setup (model, brief, fresh contexts or one chain, how many runs; is 7–8 counted or remembered?), a hop-0 vs hop-5 diff, iTunes numbers, your own rulebook growth and how many rules you've ever removed ('if that's zero, that's your post'), and what a pruning pass checks.",
            "cut": "Gribbin to one sentence, the six-levels guess (label it), the callback to post 1. They also flagged: 'self-improving' promises a closed loop when it's really a human editing a template, so say so.",
            "comment": "Per-hop directive drift inside one task and months of 'from now on' rules are two different problems. Which one does your pruning rule fix?"
          },
          {
            "reader": "Manager / operator",
            "lands": "'A rule for deleting rules' (goes on a slide); the invented 'operator must be notified' (that's how their SOP binder grows); 'lessons flow up, one place changes behavior' as a rule they could run with humans tomorrow; the depth limit (they'd forward it to their CEO).",
            "missing": "What a pruning review looks like (how often, who owns it, what kills a rule); one worked example of an issue going up; a rule for when a step becomes a fixed script; one sentence saying this works for human teams too.",
            "cut": "The iTunes version history (keep the one line on quality up, cost down), micro-factories, the Gribbin detail, timestamps in the body. Map 'template' to 'master SOP' and define 'agent' once.",
            "comment": "What would your first pruning pass actually check? I'd like to steal it for our SOP review."
          },
          {
            "reader": "Skeptic tired of AI hype",
            "lands": "The finding (config drift by accretion is real), the built/not-built honesty, the guard on the half-remembered study, the iTunes arc as real engineering.",
            "missing": "The actual hop-1 vs hop-5 artifact, iTunes cost/quality numbers, one 'from now on' entry and the incident behind it, and one rule you deleted by hand and why.",
            "cut": "The 'flywheel' line, 'self healing' without a measure, micro-factories, the depth limit unless framed as a guess, and any pull-quote that turns n=1 into a statistic.",
            "comment": "You've named the problem and admitted you haven't built the fix. Credit for the admission, but that's what the post actually says."
          },
          {
            "reader": "Sci-fi reader",
            "lands": "'The operator must be notified', a mind down the chain deciding someone should be told (a little conscience or a little bureaucrat); the inversion of the worry (copies grow instead of fading, like scripture gathering margin notes); eight levels down with no idea of the objective (a generation ship).",
            "missing": "A scene with a body in it (the brief at hop one beside hop five); your own confession (did an agent ever write a rule you then obeyed without noticing?); an image for pruning (a gardener, a ship shedding dead protocols).",
            "cut": "The iTunes stack in one sentence; 'versioned template / push an issue up / check-on-start' as one plain picture (everyone carries the same handbook, and it gets reissued); the inventory as a short paragraph.",
            "comment": "When you prune that rule, who decides it wasn't wisdom?"
          }
        ],
        "audience_changes": "Opens on the inversion (humans lose ~70%, these agents added rules) and the invented rule. Provenance is stated: Jeremy's one run, his count. Your own receipt was added: the rulebook grew +23/−1, and even the rules you ask for arrive with no expiry or review date. 'Self-improving' is made honest: a human editing a template, with the not-built deletion rule admitted inside the thesis paragraph. The deletion rule is now a proposal with real tests and the ACE warning against summarizing. Plain-language mapping added (template = master SOP), and one sentence that it works for human teams. Gribbin is cut to one line with Boids as the picture. Micro-factories and the depth guess are demoted. One writer's paragraph on who decides what counts as noise.",
        "seasoning": [
          {
            "label": "Gall's Law: John Gall, Systemantics (1975)",
            "href": "https://en.wikipedia.org/wiki/Systemantics",
            "stance": "supports",
            "why": "\"A complex system that works is invariably found to have evolved from a simple system that worked.\" The respectable version of your thesis. Cite the book, not a page: the sources disagree (p.71 vs p.22)."
          },
          {
            "label": "Perez et al.: When LLMs Play the Telephone Game (ICLR 2025, arXiv 2407.04503)",
            "href": "https://arxiv.org/abs/2407.04503",
            "stance": "supports",
            "why": "The real study of LLM telephone chains: small biases amplify into 'attractors', and 'more open-ended instructions lead to stronger attraction effects'. Drift has a direction; it isn't random loss. Supports tight hand-off formats. (Retitled in Jan 2026; cite the current title.)"
          },
          {
            "label": "Allport & Postman, The Psychology of Rumor (1947)",
            "href": "https://en.wikipedia.org/wiki/Rumor",
            "stance": "context (the inversion)",
            "why": "Humans retelling a story lost ~70% of details within 5–6 retellings. This is the correct citation for the half-remembered 'MIT or maybe Google' 20% figure, which doesn't exist as stated. It makes the opening's contrast real."
          },
          {
            "label": "Jaroslawicz et al.: How Many Instructions Can LLMs Follow at Once? (NeurIPS 2025)",
            "href": "https://arxiv.org/abs/2507.11538",
            "stance": "supports pruning",
            "why": "The best frontier models reach only 68% accuracy at 500 instructions, with a bias toward earlier ones. Every accreted directive has a cost: the number behind 'a rule for deleting rules'."
          },
          {
            "label": "Zhang et al.: Agentic Context Engineering (ACE, ICLR 2026)",
            "href": "https://arxiv.org/abs/2510.04618",
            "stance": "challenges naive compression",
            "why": "Rewriting a playbook into a summary collapsed 18,282 tokens to 122 and accuracy fell from 66.7 to 57.1. Their fix is to grow, then refine by removing duplicates. Your deletion rule should remove and merge, never summarize."
          },
          {
            "label": "Song, Pu, Zhao: SkillOps (arXiv 2605.13716, 2026)",
            "href": "https://arxiv.org/abs/2605.13716",
            "stance": "supports",
            "why": "Names 'skill technical debt': skill libraries pile up defects as skills are added and patched. The 2026 research vocabulary for what your rulebook's +23/−1 shows."
          }
        ],
        "crafting": "Attribution: the telephone test is Jeremy's, one run, recounted on tape. Never present 7–8 directives as a measured statistic, and don't cite the 'MIT or maybe Google' study (15:14): use Allport & Postman for the human baseline. Print 'John Gribbin' (he's misnamed on tape). The iTunes clone and the midnight cycle are from the full conversation, not the cut; say so if you use them. If you want a deterministic-code line, Anthropic's Agent Skills post says \"Because code is deterministic, this workflow is consistent and repeatable\" (https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills). Ohno's 'no standard, no kaizen' has no written source, so skip it or attribute it as 'a saying in lean circles'. Avoid 'not X, it's Y' (checklist #7). FOUR QUESTIONS ONLY YOU CAN ANSWER: (1) Any numbers for the iTunes clone (cost per run, v1 vs v3), and does it still run? (2) Have you ever deleted a rule from a CLAUDE.md or skill by hand? Which one, and why? That's the scene for the deletion rule. (3) Can Jeremy share the telephone-test artifact (hop 1 vs hop 5)? Ask him; it's the best possible opening. (4) Do you want to use your own rulebook as the receipt (+23/−1 since August; even rules you requested, like §3.11, have no review date)? It's in the public repo already.",
        "why": "Post 2 of 3. Every reader landed on the same moment: an agent down a chain inventing a requirement. The research backs the turn. Human chains forget (Allport & Postman); LLM chains drift toward attractors (Perez et al.); and every extra instruction costs accuracy (IFScale). Your open ground is the missing rule nobody on the tape has, a rule for deleting rules, with your own repo as an honest receipt that you need it too.",
        "alt_titles": [
          "(Locked: the spoken chapter name.) Subtitle candidates: 'Five hops, nothing lost, seven new rules per hop' · 'People forget. These agents legislated.'"
        ]
      },
      "chapterLink": "Chapter 2 of public Ep 2, 9:33–16:37 (https://readlossy.substack.com/p/a-system-that-builds-systems); tape ~46:48–53:45",
      "targetWords": {
        "target": 1600,
        "band": [
          1400,
          1900
        ],
        "rationale": "The audience brief puts podcast-derived posts at 1,400–2,200 words. This is one finding plus one proposed rule, so it sits in the lower half. The prior-reading pieces run 2,800–3,200 words, but they are surveys; yours is a single argument with one strong scene. If you're under 1,400, the missing words are the hop-1 vs hop-5 brief and the rule you once deleted, not more Gribbin."
      },
      "similar": [
        {
          "label": "Read first (~14 min): Anthropic — Effective context engineering for AI agents",
          "href": "https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents",
          "why": "~3,200 words. 'Find the smallest possible set of high-signal tokens.' Every directive costs attention, and it warns against 'a laundry list of edge cases', which is exactly what accretion builds."
        },
        {
          "label": "Counterpoint (~12 min): ACE — Agentic Context Engineering (abstract + §1–2)",
          "href": "https://arxiv.org/html/2510.04618v1",
          "why": "~2,850 words to the end of §2. Compressing a playbook by rewriting it can destroy it; their fix is grow-and-refine. This shapes how your deletion rule should work."
        },
        {
          "label": "Read first (~12 min): Walden Yan (Cognition) — Multi-Agents: What's Actually Working (Apr 2026)",
          "href": "https://cognition.com/blog/multi-agents-working",
          "why": "~2,800 words. 'Writes stay single-threaded' and other agents contribute intelligence, not actions. The same shape as Jeremy's factory: one writer to the template, many contributors of lessons."
        }
      ],
      "summary": "Writing plan ready (2026-11-17). Thesis: agent chains don't forget your rules the way people do; they add their own. So a self-improving team needs a rule for deleting rules, which nobody on the tape has built, Turner included. Opens on the inversion (Allport & Postman's ~70% human loss vs Jeremy's agents adding 7–8 directives per hop, one inventing 'the operator must be notified'). Turner's own receipt: the rulebook grew +23/−1 since August, and even rules he requested carry no review date. Seasoned with Gall's Law, Perez et al. (LLM telephone game), IFScale, ACE and SkillOps. Verification notes: 20_research/06_p7_simple_rules_references.md.",
      "feedback": []
    },
    {
      "id": "p8",
      "title": "Delegation, Relinquishment, and Levelling Up Agents",
      "stage": "outlining",
      "source": "ep4",
      "subtitleCandidate": "Ten Verified Runs, Then I Stop Checking",
      "titleNote": "Title = the spoken chapter name, exactly (Turner 2026-11-17: \"keep chapter names the same\"). HONESTY FLAG on the old subtitle: it reads as a shipped practice. The graduation isn't built (18:52, 19:48), and run 1 wasn't clean (see beat 6). Readers wanted 'relinquish' up front; a subtitle like 'Delegated work comes back to you. Relinquished work doesn't.' or 'My agent wouldn't take a relayed go' does that.",
      "gate": "Writing plan ready (2026-11-17), built from the chapter 3 transcript, a 4-reader audience panel and verified references. Read the 3 pieces on the right to unlock the desk (~26 min), then write. Three questions only you can answer are at the bottom of the plan.",
      "planInline": {
        "size_words": "1,400–1,900",
        "hook": "Open on the publish button for the very episode this post pairs with, told as a moment, not plumbing (the sci-fi and manager readers both lost the thread in the noun-heavy version). The podcast agent had staged everything. It stopped at publish, because that step is yours. You said 'go' to your command center, and it relayed the go. The podcast agent wouldn't treat a relayed go as yours. The command center did the click only because you'd said it directly, in its own chat. Every reader called this the real hook. The builder wants a title built on it; the sci-fi reader calls it 'loyal to your voice specifically'. Give the half-second at the button: what did it feel like to look at something that was waiting for you?",
        "outline": [
          "1 · Scene (first ~150 words): the publish button and the refused relay, in plain words. Be exact about how the gate held, because the skeptic will read 'the command center did it' as a bypass. Accurate version: the publish routine says only you click; the podcast agent's own operating rules required your word in its chat; a separate permission check blocked an agent commit the same night; the command center acted on your direct 'go'. So the gate held at your voice. Then the new wrinkle: afterward you asked for a rule (§3.11) that relays from the command center count as you. The podcast agent still holds out for your word in its own chat before it treats that rule as yours, and that loyalty-to-your-voice question is beat 7. Embed chapter 3 (16:37–22:17) after this.",
          "2 · The distinction, with ONE quote and the rest paraphrased (every reader said the timestamp stack reads like a deposition): delegated work 'comes back to you and you're still managing it' (17:50); relinquished means 'I'm not gonna meddle' (18:42). It's a management idea you never needed with people (18:17) and do need with agents (18:33). The manager says it transfers straight to human teams, so say so in one line.",
          "3 · The admission, early: 'I don't have like a relinquished skill' (18:52); 'I don't have a system here. So off the cuff…' (19:48). Put 'I'm proposing' in the thesis sentence itself, not in a later guard.",
          "4 · Tactical spine: the ladder as a PROPOSAL (train → delegate with checked logs → relinquish after ten clean runs, 19:42–20:29), with the parts the readers demanded. (a) What counts as a clean run: zero edits to what the agent staged, nothing fixed after publish, verification passed. (b) What resets the count: a model change, a routine edit, the platform changing a button. (c) A demotion rule: any dirty run drops it back to delegated. Claude Code's auto mode already has one: 3 blocks in a row or 20 in a session sends you back to manual approval. (d) Levels per step, not per workflow (Parasuraman et al.): drafting can be relinquished while the publish decision stays yours. (e) Why ten? You picked it by feel on tape. Say so.",
          "5 · The cost and the counterpoint: Jeremy's warning that measuring every agent grows 'exponentially' (21:03), and Bainbridge's 'Ironies of Automation': 'people can write down numbers without noticing what they are.' A counter measures how often something ran, not how well. Logs nobody reads are a diary. So relinquished work has to fail loudly. Then the twist from Anthropic's own data: in testing, humans approving commands caught only 13.6% of dangerous ones; auto mode caught 89%. 'A human checked it' isn't proof of quality either.",
          "6 · Keep it honest, run 1 by your own definition: the publish routine has one full run (2026-11-16), and it wasn't clean. The upload limit forced you to drag the file in, the episode number was wiped and refilled, and the relay question stopped the click. So the count may be 0 of 10, not 1 of 10 (question 2). Skip the 2027-03-22 date math (the manager: cadence isn't trust); 'months, if nothing breaks' says it.",
          "7 · Which steps never graduate, decided up front (manager: the list compliance will ask for): the publish click, anything irreversible or public, anything that spends money. The sci-fi reader's turn: you built something loyal to your voice. After ten clean runs, do you relinquish the work, or that loyalty? One paragraph, end on the question.",
          "8 · Opinion stake as a claim, then close on the rule, not on Jeremy's 'a system that builds systems' (three readers: a podcast line, not an ending). Link posts 1 and 2 once, without recapping them."
        ],
        "tape_quotes": [
          {
            "who": "Jeremy",
            "t": "17:08",
            "text": "What can we delegate that we could never have done before?"
          },
          {
            "who": "Turner",
            "t": "17:46",
            "text": "Delegate versus relinquish I find myself thinking of a lot too."
          },
          {
            "who": "Turner",
            "t": "17:50",
            "text": "if you delegate something fundamentally you expect it to come back to you and you're still managing it"
          },
          {
            "who": "Turner",
            "t": "18:10",
            "text": "I still don't trust you and … I'm gonna control the risk that I'm exposed to by insisting on doing a final review. But relinquishing is … you actually can just take this."
          },
          {
            "who": "Turner",
            "t": "18:17–18:33",
            "text": "I didn't find that much use in that distinction when I manage people … With the agents, it strikes me as much more valuable"
          },
          {
            "who": "Turner",
            "t": "18:42",
            "text": "I'm not gonna meddle. I'm not gonna go in and go check the assembly line on it 'cause relinquished that."
          },
          {
            "who": "Turner",
            "t": "18:52",
            "text": "I don't have like a relinquished skill or anything that detailed"
          },
          {
            "who": "Turner",
            "t": "19:48",
            "text": "I don't have a system here. So … off the cuff"
          },
          {
            "who": "Turner",
            "t": "20:10",
            "text": "once you've done it right ten times through delegation, we upgrade this into a relinquished workflow"
          },
          {
            "who": "Turner",
            "t": "20:29",
            "text": "I don't need to be part of the workflow. … the logs need to be there … this sort of relinquishment graduation ceremony"
          },
          {
            "who": "Turner",
            "t": "20:44",
            "text": "if it's graduating, what's it graduating towards? … maintaining the same quality with less and less oversight from me. That should kind of be the metric."
          },
          {
            "who": "Jeremy",
            "t": "21:03",
            "text": "as the number of agents grow, the work to manage them becomes exponentially greater"
          }
        ],
        "pull_quotes": [
          "Candidate: Delegated work comes back to you. Relinquished work doesn't. (Use once. The builder flagged it as overused when it's both the thesis and the pull-quote.)",
          "Candidate: My agent wouldn't take a relayed 'go'.",
          "Write your own. Readers flagged 'it's delegation, not relinquishment' and 'you haven't delegated, you've made more work to review' as 'not X, it's Y' shapes, and 'observability is the cost of relinquishment' as an aphorism doing evidence's job."
        ],
        "built": {
          "yes": [
            "Hard-gated steps written into routines: the publish routine says only you click (99_project_skills/06 §1, §4).",
            "Gates that held on 2026-11-16: the podcast agent wouldn't act on a relayed go, and a permission check blocked an agent commit. Both are the agent platform's rules, not code you wrote. Say which is which.",
            "Verification after the run: RSS item check plus a Spotify poll, recorded in the routine. That's the start of a log.",
            "A written routine with run notes (publish routine run 1, Ep 2)."
          ],
          "no": [
            "A run counter, a clean-run definition, a demotion rule, a graduation step.",
            "Any workflow you've actually relinquished.",
            "Reset conditions (model change, routine edit, platform change).",
            "Your confirmation of §3.11 (relays count as you) in the podcast agent's own chat. You asked for the rule in the command center's chat on 11/16."
          ]
        },
        "audience": [
          {
            "reader": "Hands-on agent builder",
            "lands": "The relay refusal (an authority-propagation problem anyone running orchestrator→worker agents has hit: 'this is the post'), run 1 with an honest timeline, the 'what would let you stop checking' test, Jeremy's observability tax.",
            "missing": "A clean-run definition and whether one dirty run resets the count; what the logs contain; whether the gate is a permission rule, a hook, or a sentence the model chooses to obey; what the relay sent and why it was refused; why ten; which publish steps could ever graduate.",
            "cut": "'Could versus should', the timestamp stack, Jeremy's closing line, the recap of posts 1–2. Flagged several 'not X, it's Y' lines and the train/delegate/graduate triad for a thing that doesn't exist yet.",
            "comment": "'Ten clean runs' needs a definition and a reset rule, or it's vibes with a counter. And was the publish gate a hard permission or a sentence in a skill file?"
          },
          {
            "reader": "Manager / operator",
            "lands": "The delegate/relinquish distinction (they'd use it at a leadership offsite), the 'what would let you stop checking' test, ten runs then graduate as something to pitch, Jeremy naming their fear about monitoring cost.",
            "missing": "What a clean run is, who scores it, and whether a failure at #7 resets; a one-page rule for which tasks can get on the ladder (risk, reversibility, cost of error); what 'checking the logs' means for a non-engineer; an example outside publishing; why ten.",
            "cut": "Most of the opening plumbing (keep: 'it stopped at publish because only I'm allowed to press it'), timestamps in the body, the 2027-03-22 date math (cadence isn't trust).",
            "comment": "How do you decide up front which steps are permanently gated versus gated until proven? That's the list my compliance team will ask for."
          },
          {
            "reader": "Skeptic tired of AI hype",
            "lands": "The admission, 'Run 1 of 10' as a public counter, the relay refusal as a real safety property, 'some steps never graduate'.",
            "missing": "A clean-run checklist, a demotion rule, counter-reset conditions (model update, skill edit, platform change), one near-miss a check caught, what's in the log and what alerts on it.",
            "cut": "'A system that builds systems', 'could versus should', the people-vs-agents aside. Central contradiction to address: how do you measure quality while removing the thing that measures it? And make the gate story exact so it doesn't read as a bypass.",
            "comment": "A counter isn't oversight, and logs nobody reads aren't observability. Publish the demotion rule alongside the promotion rule and I'll follow along to run 10."
          },
          {
            "reader": "Sci-fi reader",
            "lands": "The agent that refused a relayed go ('pure Murderbot': whose voice counts as the master's?); 'I'm not gonna meddle' (how a parent talks about a grown child); 'I don't have a system here'; permanent gates as an Asimov law you built without naming it.",
            "missing": "The half-second at the button: relief, pride, unease that it waited for you. A question from the other side: what do ten clean runs look like to the agent? One line connecting this to your fiction.",
            "cut": "Every body timestamp; jargon (command center, skills, observability → 'you can only stop watching if something else is watching'); the date math ('about four months, if nothing breaks').",
            "comment": "You built something loyal to your voice specifically. After ten clean runs, do you relinquish the work, or do you relinquish that?"
          }
        ],
        "audience_changes": "The opening is now a moment, not plumbing, and it states exactly how the gate held. 'I'm proposing' moved into the thesis sentence. The quote stack is cut to one quote plus paraphrase. The ladder gained what all four readers demanded: a clean-run definition, reset conditions, a demotion rule (with Claude Code's real demotion trigger as precedent), levels per step, and an honest 'ten was chosen by feel'. Bainbridge and Anthropic's own numbers are added as the counterpoint. Run 1 is re-scored honestly: it wasn't clean. The date math is gone. A never-graduates list is added. The ending is a rule plus the loyalty question, not Jeremy's slogan.",
        "seasoning": [
          {
            "label": "Bainbridge — Ironies of Automation (Automatica, 1983)",
            "href": "https://gwern.net/doc/sociology/technology/1983-bainbridge.pdf",
            "stance": "challenges (strongest counterpoint)",
            "why": "\"people can write down numbers without noticing what they are\": a direct hit on 'run counter + logs'. Also: \"automatic systems should fail obviously.\" Ten clean runs make you a worse checker on run eleven, so relinquished work must fail loudly."
          },
          {
            "label": "Anthropic — Measuring AI agent autonomy in practice (Feb 2026)",
            "href": "https://www.anthropic.com/research/measuring-agent-autonomy",
            "stance": "supports",
            "why": "Full auto-approve rises from ~20% of sessions for newer users to over 40% by 750 sessions, while interrupts rise too. People level agents up by experience, and oversight changes form instead of disappearing. That's your counter in everything but name."
          },
          {
            "label": "Anthropic — Auto mode is now the default in Claude Code (Aug 2026)",
            "href": "https://claude.com/blog/auto-mode-default-in-claude-code",
            "stance": "challenges 'a human checked it'",
            "why": "In testing, humans approving commands caught 13.6% of dangerous ones; auto mode caught 89%. It also has a built-in demotion: 3 blocks in a row or 20 in a session drops you back to manual. Precedent for your missing demotion rule. (Engineering detail: https://www.anthropic.com/engineering/claude-code-auto-mode)"
          },
          {
            "label": "Management 3.0 — Delegation Poker / 7 levels of delegation (Jurgen Appelo)",
            "href": "https://management30.com/practice/delegation-poker/",
            "stance": "context",
            "why": "Level 6 'Inquire' ('I will inquire after they decide') is your delegated; level 7 'Delegate' is relinquished. Appelo moves up 'when you see growth and maturity'. Your counter swaps that judgment for evidence."
          },
          {
            "label": "SAE J3016 — levels of driving automation (2021)",
            "href": "https://saemobilus.sae.org/content/j3016_202104",
            "stance": "context",
            "why": "The real dividing line is who's responsible: at levels 0–2 'you must constantly supervise'; at level 3 'when the feature requests, you must drive'; at levels 4–5 it 'will not require you to take over'. Level 3 is the awkward middle your ladder has to avoid."
          },
          {
            "label": "Parasuraman, Sheridan & Wickens — Types and levels of human interaction with automation (IEEE SMC, 2000)",
            "href": "https://doi.org/10.1109/3468.844354",
            "stance": "supports",
            "why": "Automation levels apply per function (gathering information, analyzing it, deciding, acting), not per system. So drafting can be relinquished while the publish decision stays yours by design. Your never-graduates list has a 25-year-old pedigree."
          }
        ],
        "crafting": "The ten-run graduation is a proposal; say 'I'm proposing' in the thesis sentence. Tell the gate story exactly (see beat 1): the gate held at your voice. Distinguish what you wrote (the routine's 'only Turner clicks') from what the agent platform enforced (the relay refusal, the commit block). The METR time-horizon work (https://metr.org/blog/2025-03-19-measuring-ai-ability-to-complete-long-tasks/) is optional context: a 50% horizon is a coin flip, not a basis for relinquishing anything. Don't quote METR's later Opus horizon figures; they weren't verified. Close on the rule, not the slogan. 'Levelling' is British spelling: keep it in the title, and use 'level up' in body text if you prefer. THREE QUESTIONS ONLY YOU CAN ANSWER: (1) What did the moment at the publish button feel like? It's the scene. (2) By your own definition, was run 1 clean? If not, is this post 'run 0 of 10'? (3) What's your never-graduates list (publish, spending money, anything public)? The relay standoff can stay in the post as fact if you choose to write it.",
        "why": "Post 3 of 3, and the honesty test for the series: the chapter's big idea is one you say on tape you haven't built. Every reader trusted the admission and wanted the missing parts: a clean-run definition, a reset, a demotion rule. The research supplies precedent for each (Appelo's levels, Parasuraman's per-function automation, Claude Code's demotion trigger) and the strongest counterpoint (Bainbridge). The open ground is a public count that starts honestly, possibly at zero, with the steps that never graduate named up front.",
        "alt_titles": [
          "(Locked: the spoken chapter name.) Subtitle candidates: 'My agent wouldn't take a relayed go' · 'Delegated work comes back to you. Relinquished work doesn't.' · 'Ten Verified Runs, Then I Stop Checking' (only as a commitment, not a claim)"
        ]
      },
      "chapterLink": "Chapter 3 of public Ep 2, 16:37–22:17 (https://readlossy.substack.com/p/a-system-that-builds-systems); tape 85:11–90:27",
      "targetWords": {
        "target": 1600,
        "band": [
          1400,
          1900
        ],
        "rationale": "The audience brief puts podcast-derived posts at 1,400–2,200 words. This post carries one distinction and one proposed ladder, so it sits in the lower half. Bainbridge makes the case for the classics in ~5,000 words, but you're not writing a survey. If you're under 1,400, the missing words are the clean-run definition and the demotion rule, which every reader asked for. Don't add more quotes."
      },
      "similar": [
        {
          "label": "Counterpoint (~8 min): Adrian Colyer's summary of Bainbridge, Ironies of Automation",
          "href": "https://blog.acolyer.org/2020/01/08/ironies-of-automation/",
          "why": "~1,800 words. The 1983 paper in summary: the more reliable the automation, the worse the human monitor gets. The full paper (~22 min) is in the seasoning if you want the source quotes."
        },
        {
          "label": "Read first (~9 min): Anthropic — Auto mode is now the default in Claude Code",
          "href": "https://claude.com/blog/auto-mode-default-in-claude-code",
          "why": "~2,100 words. Measured evidence that human approval catches less than people assume, and a real demotion trigger. Steal both ideas for your ladder."
        },
        {
          "label": "Read first (~9 min): Laura Summers (Pydantic) — The Human-in-the-Loop is Tired (Feb 2026)",
          "href": "https://pydantic.dev/articles/the-human-in-the-loop-is-tired",
          "why": "~2,100 words. 'The satisfying part shrank. The exhausting part grew.' Oversight has a human cost, which is the reason to want relinquishment rather than merely tolerate it."
        }
      ],
      "summary": "Writing plan ready (2026-11-17). Thesis (as a proposal): move a workflow from delegated (comes back for review) to relinquished (doesn't) on evidence, with a defined clean run, reset conditions and a demotion rule, while some steps never graduate. Turner hasn't built it and says so. Opens on the Ep 2 publish button: the podcast agent refused a relayed go, and the gate held at Turner's voice. Run 1 re-scored honestly (it wasn't clean). Seasoned with Bainbridge, Anthropic's autonomy study and auto-mode data, Appelo's delegation levels, SAE J3016 and Parasuraman et al. Verification notes: 20_research/07_p8_delegation_references.md.",
      "feedback": []
    },

    /* ---- idea bank: ep2 orphans (Jeremy's surviving track). Reusable ideas,
            not pending posts. Escalate any of them by saying so. ---- */
    { id: "ib1", title: "Don't hire a clone of yourself (the management layer)", stage: "idea", source: "ep2",
      summary: "Jeremy's 1.3M-word audit → \"to mimic yourself is to mimic your flaws\" → the ideal-manager layer; totem/pull-cord/dreidel autonomy scale; the 60%-useless-meetings audit." },
    { id: "ib2", title: "The overnight shift (coach loop)", stage: "idea", source: "ep2",
      summary: "Workers stall; a coach agent loops every 10 minutes overnight; agent-filed issues need acceptance criteria; your harness is your taste and taste compounds." },
    { id: "ib3", title: "Your client already asked WebMD", stage: "idea", source: "ep2",
      summary: "Chatbot perception floor; owners test what CSRs should; practitioner-as-physician; show-don't-ask." },
    { id: "ib4", title: "Ship 8 of 10 / the detox story", stage: "idea", source: "ep2",
      summary: "Perfectionism vs the friend who ships; 1% compounding; prioritization/leverage/compounding trifecta; \"I unplugged for 10 days and the fleet published a podcast.\"" }
  ],

  quicklinks: {
    substack: [
      { label: "Publish desk", href: "https://readlossy.substack.com/publish" },
      { label: "Posts dashboard", href: "https://readlossy.substack.com/publish/posts" },
      { label: "Stats", href: "https://readlossy.substack.com/publish/stats" },
      { label: "Settings (podcast + site)", href: "https://readlossy.substack.com/publish/settings" },
      { label: "The site, as readers see it", href: "https://readlossy.substack.com" }
    ],
    riverside: [
      { label: "Studio projects (recordings + edits)", href: "https://riverside.com/dashboard/studios/turner-tomlinsons-studio/projects" }
    ],
    jeremy: [],   /* nothing on file — never fabricated. Tell me his links (site, LinkedIn, Thrive) and I wire them here; same moment is the right one to finally add him to the people list. */
    northstars: [
      { label: "swyx — The Rise of the AI Engineer", href: "https://www.latent.space/p/ai-engineer",
        why: "An essay as a community-founding document: the opinion stake written as a claim others cite or argue with by name. Your \"taste compounds\" wants this treatment." },
      { label: "Simon Willison's weblog", href: "https://simonwillison.net",
        why: "Radical specificity and a strict content taxonomy — notes vs guides vs TILs. The receipts-first register your audience brief demands." },
      { label: "Lenny's Newsletter", href: "https://www.lennysnewsletter.com",
        why: "The repurposing loop done right: lead with the concrete win in two sentences, tactical 3–5 bullet spine mid-post, narrative wrapped around it." },
      { label: "The Pragmatic Engineer (Gergely Orosz)", href: "https://blog.pragmaticengineer.com",
        why: "Years of free groundwork, strongest material kept free, organic-only growth — the trajectory your Pocock adoptions are modeled on." }
    ],
    surfaces: [
      { label: "Review Deck (round 3)", href: "review_deck.html" },
      { label: "Content review", href: "content_review.html" },
      { label: "VO auditions", href: "vo_auditions.html" },
      { label: "Pocock study", href: "pocock_study.html" },
      { label: "Car view (claude.ai artifact)", href: "https://claude.ai/code/artifact/48b0b977-f764-4f57-9e74-93ff9bc81217" },
      { label: "Legacy console (rounds 1–10, ep1 era)", href: "index.html" }
    ]
  },

  rules: [
    "Turner writes the posts himself — agents outline, plan, and coach only.",
    "Full prose reasoning on every review surface; no bare verdicts.",
    "Nothing publishes or sends without his explicit say-so.",
    "Walmart-discretion filter on all public content.",
    "Cadence discipline: the one-extra-post-a-week rule (adopted, load-bearing)."
  ]
};
