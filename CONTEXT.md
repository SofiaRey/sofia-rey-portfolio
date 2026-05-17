# Sofía Rey Portfolio

A creative portfolio website for Sofía Rey, multimedia designer. Single-page site with an Apple-style scroll-driven video frame animation as the background.

## Language

**Frame Sequence**:
A set of pre-extracted WebP images from a source video, rendered to a canvas element based on scroll position or timed playback.
_Avoid_: Video, animation frames, sprites

**Intro Playback**:
The automatic playback of frames 0–69 at page load (5 seconds at real-time speed) before scroll-driven mode activates. Starts after the first 30 frames are preloaded; remaining frames load during playback.
_Avoid_: Auto-play video, opening animation

**Scroll-Driven Mode**:
The state after Intro Playback completes, where the current frame is determined by the user's scroll position mapped to frames 70–377.
_Avoid_: Scroll animation, parallax

**Noise Overlay**:
An animated semi-transparent texture layer rendered above all content, providing a film-grain aesthetic.
_Avoid_: Grain filter, texture layer

**Process Item**:
One of five portfolio categories displayed as SVG illustrations orbiting in a circle, linking to project pages in the future.
_Avoid_: Project, portfolio piece, work item

**Role Rotation**:
The vertical-slide text animation in the hero cycling through Sofía's disciplines: diseñadora, video editor, photographer, ux designer, graphic designer.
_Avoid_: Text carousel, typing effect

## Relationships

- A **Frame Sequence** has exactly two resolution variants: desktop (1920x1080) and mobile (960x540), with 378 frames each
- **Intro Playback** always completes before **Scroll-Driven Mode** begins
- The **Noise Overlay** sits above all content and the **Frame Sequence** canvas
- Each **Process Item** will eventually link to a dedicated project page

## Example dialogue

> **Dev:** "When does the Frame Sequence switch from Intro Playback to Scroll-Driven Mode?"
> **Domain expert:** "The intro always plays to completion (70 frames over 5 seconds at 1:1 speed). Once it finishes, the canvas immediately shows whichever frame corresponds to the current scroll position."

## Flagged ambiguities

- "video" could mean the source MP4 or the canvas playback — resolved: the source file is the "source video"; what the user sees is the "Frame Sequence."
- "animation" is overloaded (frame sequence, noise, process item orbit, role rotation, fade-up reveals) — resolved: each has its own specific term.
