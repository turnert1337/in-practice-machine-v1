# In Practice — Podcast Machine v1

The production machine for **In Practice with Jeremy & Turner**. This repo takes in a raw recording session and manages the output: episodes, voiceover scripts, X snippets, music, and the reports the operators asked for on tape.

**Control room (GitHub Pages):** https://turnert1337.github.io/in-practice-machine-v1/

This is version 1 of the machine. The plan (stated on tape, 79:35): copy this repo and issue a new version each session, tightening the loop every time — the goal state is ≤1 hour of post-processing per side, with two weeks of output staged automatically.

## This session: recorded 2026-11-21

- **Input:** Riverside session `fdeb3d50` (~145 min). Transcript in `transcripts/`.
- **Output in flight:** two ~20-minute episodes + 14 X snippet candidates + new intro music. Status lives on the control-room page.
- Meta-instructions were given on-air with the trigger word **Kit Kat**; the compliance list is in `reports/01_session_breakdown.md`.

## Layout

| Path | What |
|------|------|
| `docs/` | The control-room page (GitHub Pages serves this) |
| `reports/` | Session breakdown, quality report, proof-of-life answer, two-episode cut plan |
| `scripts/` | VO scripts Turner reads (intros, bridges, outros); recordings land in `scripts/recordings/` |
| `snippets/` | X snippet slate for Jeremy, linked to Riverside clip edits |
| `music/` | Three candidate intro tracks (originals, synthesized for this repo) |
| `transcripts/` | Raw session transcripts |
| `machinery/` | The machine as of session 4 (drafting views, call sheets, brand, hardware probe, studio launchers) |

## How we collaborate here

Both of us (and our agents) work this repo directly — Jeremy has collaborator access. Jeremy's suggestion from the wrap (146:55): file **issues** for suggestions/changes and either side's agent picks them up. Edits to `docs/` publish automatically via Pages on merge to `main`.
