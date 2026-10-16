/**
 * Nursing Notebook - High Graphic Colorful Vector Subject Icons
 * Scope: RMU B.Sc. in Nursing (25 Verified Subjects + Fallback)
 * 
 * Each icon is an ultra-crisp, multi-layered 64x64 SVG with rich gradients,
 * 3D lighting, specular highlights, drop-shadows and micro-animations.
 */

(function () {
  'use strict';

  const SUBJECT_GRAPHICS = {
    // =========================================================================
    // 1ST YEAR SUBJECTS
    // =========================================================================

    // B111: Communicative English
    B111: `
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="subject-graphic-svg" aria-hidden="true">
        <defs>
          <linearGradient id="g-b111-blue" x1="8" y1="8" x2="48" y2="48" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#3B82F6"/>
            <stop offset="100%" stop-color="#1D4ED8"/>
          </linearGradient>
          <linearGradient id="g-b111-coral" x1="28" y1="24" x2="56" y2="52" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#FB923C"/>
            <stop offset="100%" stop-color="#EA580C"/>
          </linearGradient>
          <linearGradient id="g-b111-gold" x1="12" y1="12" x2="36" y2="36" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#FDE047"/>
            <stop offset="100%" stop-color="#F59E0B"/>
          </linearGradient>
          <filter id="f-b111-sh" x="0" y="2" width="64" height="60" filterUnits="userSpaceOnUse">
            <feDropShadow dx="0" dy="3" stdDeviation="3" flood-color="#1D4ED8" flood-opacity="0.28"/>
          </filter>
        </defs>
        <g filter="url(#f-b111-sh)">
          <!-- Primary Blue Speech Bubble -->
          <path d="M10 16C10 11.58 13.58 8 18 8H40C44.42 8 48 11.58 48 16V30C48 34.42 44.42 38 40 38H24L14 46V38H18C13.58 38 10 34.42 10 30V16Z" fill="url(#g-b111-blue)"/>
          <!-- Glossy highlight on blue bubble -->
          <path d="M12 16C12 12.69 14.69 10 18 10H38C35 13 25 15 14 16.5L12 16Z" fill="#FFFFFF" fill-opacity="0.35"/>
          <!-- Speech lines inside blue bubble -->
          <rect x="18" y="18" width="20" height="3" rx="1.5" fill="#FFFFFF"/>
          <rect x="18" y="24" width="14" height="3" rx="1.5" fill="#BFDBFE"/>
          <circle cx="36" cy="25.5" r="1.5" fill="#FDE047"/>
          <!-- Secondary Coral Speech Bubble (Overlapping) -->
          <g class="svg-anim-float">
            <path d="M28 30C28 26.69 30.69 24 34 24H50C53.31 24 56 26.69 56 30V40C56 43.31 53.31 46 50 46H46L38 52V46H34C30.69 46 28 43.31 28 40V30Z" fill="url(#g-b111-coral)"/>
            <path d="M29 30C29 27.5 31.5 25.5 34 25.5H48C45 27.5 37 29 30 30.2L29 30Z" fill="#FFFFFF" fill-opacity="0.3"/>
            <!-- Dialogue 3-dots -->
            <circle cx="37" cy="35" r="2" fill="#FFFFFF"/>
            <circle cx="43" cy="35" r="2" fill="#FFFFFF"/>
            <circle cx="49" cy="35" r="2" fill="#FFFFFF"/>
          </g>
          <!-- Broadcast sound arcs -->
          <path d="M50 14C53 16.5 55 20 55 24" stroke="url(#g-b111-gold)" stroke-width="2.5" stroke-linecap="round" class="svg-anim-pulse"/>
          <path d="M54 10C58 13.5 60 18.5 60 24" stroke="url(#g-b111-gold)" stroke-width="2" stroke-linecap="round" stroke-dasharray="1 3" class="svg-anim-pulse"/>
        </g>
      </svg>
    `,

    // B112: Nursing Informatics
    B112: `
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="subject-graphic-svg" aria-hidden="true">
        <defs>
          <linearGradient id="g-b112-laptop" x1="12" y1="12" x2="52" y2="44" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#475569"/>
            <stop offset="100%" stop-color="#1E293B"/>
          </linearGradient>
          <linearGradient id="g-b112-screen" x1="16" y1="14" x2="48" y2="38" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#0F172A"/>
            <stop offset="100%" stop-color="#0284C7"/>
          </linearGradient>
          <linearGradient id="g-b112-ecg" x1="18" y1="26" x2="46" y2="26" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#34D399"/>
            <stop offset="50%" stop-color="#10B981"/>
            <stop offset="100%" stop-color="#A7F3D0"/>
          </linearGradient>
          <filter id="f-b112-sh" x="2" y="6" width="60" height="56" filterUnits="userSpaceOnUse">
            <feDropShadow dx="0" dy="4" stdDeviation="3.5" flood-color="#0284C7" flood-opacity="0.32"/>
          </filter>
        </defs>
        <g filter="url(#f-b112-sh)">
          <!-- Laptop Screen Shell -->
          <rect x="12" y="12" width="40" height="28" rx="4" fill="url(#g-b112-laptop)" stroke="#64748B" stroke-width="1.5"/>
          <!-- Screen Display Glass -->
          <rect x="15" y="15" width="34" height="22" rx="2" fill="url(#g-b112-screen)"/>
          <!-- Active Neon ECG Pulse Graph -->
          <path d="M17 26H23L25 21L28 31L31 23L33 28L35 26H47" stroke="url(#g-b112-ecg)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-anim-ecg"/>
          <!-- Digital Telemetry Metric Bars -->
          <rect x="18" y="18" width="4" height="2" rx="0.5" fill="#38BDF8"/>
          <rect x="24" y="18" width="6" height="2" rx="0.5" fill="#38BDF8" fill-opacity="0.7"/>
          <!-- Medical Cross Badge on Screen -->
          <rect x="41" y="17" width="5" height="5" rx="1" fill="#EF4444"/>
          <path d="M43.5 18V21M42 19.5H45" stroke="#FFFFFF" stroke-width="1" stroke-linecap="round"/>
          <!-- Laptop Keyboard Base -->
          <path d="M6 42H58L54 48H10L6 42Z" fill="#334155" stroke="#64748B" stroke-width="1.5"/>
          <rect x="26" y="43" width="12" height="2" rx="1" fill="#94A3B8"/>
          <!-- Glowing Data / Cloud Waves -->
          <path d="M26 8C27.5 6 30 5 32 5C34.5 5 37 6.5 38 9" stroke="#38BDF8" stroke-width="2" stroke-linecap="round" class="svg-anim-pulse"/>
          <circle cx="32" cy="8" r="1.5" fill="#38BDF8"/>
        </g>
      </svg>
    `,

    // B113: Behavioral Science and Nursing Humanities
    B113: `
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="subject-graphic-svg" aria-hidden="true">
        <defs>
          <linearGradient id="g-b113-head" x1="14" y1="10" x2="46" y2="52" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#8B5CF6"/>
            <stop offset="100%" stop-color="#4C1D95"/>
          </linearGradient>
          <linearGradient id="g-b113-heart" x1="34" y1="28" x2="54" y2="48" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#FB7185"/>
            <stop offset="100%" stop-color="#E11D48"/>
          </linearGradient>
          <linearGradient id="g-b113-syn" x1="18" y1="14" x2="36" y2="30" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#38BDF8"/>
            <stop offset="100%" stop-color="#F472B6"/>
          </linearGradient>
          <filter id="f-b113-sh" x="4" y="4" width="56" height="58" filterUnits="userSpaceOnUse">
            <feDropShadow dx="0" dy="4" stdDeviation="3.5" flood-color="#8B5CF6" flood-opacity="0.32"/>
          </filter>
        </defs>
        <g filter="url(#f-b113-sh)">
          <!-- Human Profile Silhouette -->
          <path d="M16 50C16 43 20 38 23 36C21 34 19 30 19 25C19 15.6 26.6 8 36 8C43.5 8 49 13.5 49 21C49 23.5 48 26 46 28L47 33C47 34 46 35 44 36L44 39C44 41 42 42 40 43L39 48L32 50H16Z" fill="url(#g-b113-head)"/>
          <path d="M22 18C26 12 36 10 42 14" stroke="#C4B5FD" stroke-width="2" stroke-linecap="round" fill="none" opacity="0.6"/>
          <!-- Glowing Neural Tree / Synapses Inside Brain -->
          <g class="svg-anim-pulse">
            <circle cx="32" cy="18" r="3" fill="#F472B6"/>
            <circle cx="25" cy="22" r="2.5" fill="#38BDF8"/>
            <circle cx="38" cy="23" r="2.5" fill="#FDE047"/>
            <circle cx="31" cy="28" r="2.2" fill="#34D399"/>
            <path d="M25 22L32 18L38 23M32 18V28" stroke="url(#g-b113-syn)" stroke-width="1.8" stroke-linecap="round"/>
          </g>
          <!-- Floating Compassionate Heart -->
          <g class="svg-anim-float">
            <path d="M44 32C41.8 32 40 33.8 40 36C40 39.5 45 44 46 45C47 44 52 39.5 52 36C52 33.8 50.2 32 48 32C46.6 32 45.4 32.7 44.8 33.8C44.4 33.8 44 32 44 32Z" fill="url(#g-b113-heart)"/>
            <circle cx="46" cy="36" r="6" stroke="#FDA4AF" stroke-width="1" stroke-dasharray="2 2" fill="none" class="svg-anim-pulse"/>
          </g>
        </g>
      </svg>
    `,

    // B124: Anatomy
    B124: `
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="subject-graphic-svg" aria-hidden="true">
        <defs>
          <linearGradient id="g-b124-torso" x1="16" y1="10" x2="48" y2="54" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#0D9488"/>
            <stop offset="100%" stop-color="#044E54"/>
          </linearGradient>
          <linearGradient id="g-b124-bone" x1="24" y1="16" x2="40" y2="44" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#FFFFFF"/>
            <stop offset="100%" stop-color="#E2E8F0"/>
          </linearGradient>
          <filter id="f-b124-sh" x="6" y="4" width="52" height="58" filterUnits="userSpaceOnUse">
            <feDropShadow dx="0" dy="4" stdDeviation="3.5" flood-color="#0D9488" flood-opacity="0.32"/>
          </filter>
        </defs>
        <g filter="url(#f-b124-sh)">
          <!-- Muscular Torso Base Form -->
          <path d="M22 14C24 16 27 17 32 17C37 17 40 16 42 14L49 19C48 25 45 30 46 36C47 42 43 47 41 52H23C21 47 17 42 18 36C19 30 16 25 15 19L22 14Z" fill="url(#g-b124-torso)"/>
          <!-- Head / Neck Outline -->
          <circle cx="32" cy="9" r="5" fill="#14B8A6"/>
          <path d="M29 13H35V17H29V13Z" fill="#0D9488"/>
          <!-- Spine & Vertebrae -->
          <rect x="30.5" y="19" width="3" height="24" rx="1.5" fill="url(#g-b124-bone)"/>
          <circle cx="32" cy="22" r="1.5" fill="#CBD5E1"/>
          <circle cx="32" cy="28" r="1.5" fill="#CBD5E1"/>
          <circle cx="32" cy="34" r="1.5" fill="#CBD5E1"/>
          <circle cx="32" cy="40" r="1.5" fill="#CBD5E1"/>
          <!-- Ribcage Symmetrical Arches -->
          <path d="M32 23C27 21 23 24 21 27M32 23C37 21 41 24 43 27" stroke="url(#g-b124-bone)" stroke-width="2" stroke-linecap="round"/>
          <path d="M32 28C26 27 23 29 22 33M32 28C38 27 41 29 42 33" stroke="url(#g-b124-bone)" stroke-width="2" stroke-linecap="round"/>
          <path d="M32 33C27 32 24 34 23 38M32 33C37 32 40 34 41 38" stroke="url(#g-b124-bone)" stroke-width="1.8" stroke-linecap="round"/>
          <!-- Vital Core Node at Heart Axis -->
          <circle cx="28" cy="26" r="3" fill="#F59E0B" class="svg-anim-pulse"/>
          <!-- Anatomical Measure Rings -->
          <circle cx="32" cy="32" r="23" stroke="#2DD4BF" stroke-width="1.2" stroke-dasharray="3 3" opacity="0.4" class="svg-anim-spin"/>
        </g>
      </svg>
    `,

    // B125: Physiology
    B125: `
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="subject-graphic-svg" aria-hidden="true">
        <defs>
          <linearGradient id="g-b125-heart" x1="16" y1="12" x2="48" y2="52" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#EF4444"/>
            <stop offset="60%" stop-color="#DC2626"/>
            <stop offset="100%" stop-color="#991B1B"/>
          </linearGradient>
          <linearGradient id="g-b125-aorta" x1="26" y1="6" x2="38" y2="20" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#F87171"/>
            <stop offset="100%" stop-color="#DC2626"/>
          </linearGradient>
          <linearGradient id="g-b125-vein" x1="38" y1="6" x2="46" y2="20" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#38BDF8"/>
            <stop offset="100%" stop-color="#0284C7"/>
          </linearGradient>
          <filter id="f-b125-sh" x="4" y="4" width="56" height="58" filterUnits="userSpaceOnUse">
            <feDropShadow dx="0" dy="4" stdDeviation="4" flood-color="#DC2626" flood-opacity="0.36"/>
          </filter>
        </defs>
        <g filter="url(#f-b125-sh)">
          <!-- Vena Cava (Blue Vessel) -->
          <path d="M40 8H45V18H40V8Z" fill="url(#g-b125-vein)" rx="2"/>
          <!-- Aortic Arch with Arterial Branches -->
          <path d="M25 15C25 9.5 29.5 6 35 6C38 6 41 8 42 11L37 16C36 15 35 14 34 14C31.5 14 29.5 15.5 29.5 18V20H25V15Z" fill="url(#g-b125-aorta)"/>
          <rect x="29" y="4" width="3" height="5" rx="1" fill="#F87171"/>
          <rect x="34" y="3" width="3" height="5" rx="1" fill="#F87171"/>
          <!-- Anatomical 3D Heart Muscle Base -->
          <g class="svg-anim-pulse">
            <path d="M32 52L20 40C14 34 13 24 20 18C26 13 31 16 32 19C33 16 38 13 44 18C51 24 50 34 44 40L32 52Z" fill="url(#g-b125-heart)"/>
            <!-- 3D Specular Muscle Sheen -->
            <path d="M22 20C17 24 17 31 21 36L30 46C26 38 24 30 25 22C25 20 23.5 19.5 22 20Z" fill="#FFFFFF" fill-opacity="0.25"/>
            <!-- Neon Cyan ECG Wave across Heart -->
            <path d="M12 34H23L26 27L29 41L33 30L36 37L39 34H52" stroke="#22D3EE" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="svg-anim-ecg"/>
            <!-- Pulsing Cardiac Rhythm Dot -->
            <circle cx="33" cy="30" r="2.5" fill="#FFFFFF" class="svg-anim-pulse"/>
          </g>
        </g>
      </svg>
    `,

    // B126: Microbiology and Pathology
    B126: `
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="subject-graphic-svg" aria-hidden="true">
        <defs>
          <linearGradient id="g-b126-scope" x1="16" y1="8" x2="48" y2="52" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#3B82F6"/>
            <stop offset="100%" stop-color="#1E3A8A"/>
          </linearGradient>
          <linearGradient id="g-b126-gold" x1="28" y1="20" x2="44" y2="36" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#FBBF24"/>
            <stop offset="100%" stop-color="#D97706"/>
          </linearGradient>
          <linearGradient id="g-b126-light" x1="32" y1="46" x2="32" y2="34" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#2DD4BF" stop-opacity="0.8"/>
            <stop offset="100%" stop-color="#2DD4BF" stop-opacity="0"/>
          </linearGradient>
          <filter id="f-b126-sh" x="4" y="4" width="56" height="58" filterUnits="userSpaceOnUse">
            <feDropShadow dx="0" dy="4" stdDeviation="3.5" flood-color="#1E3A8A" flood-opacity="0.32"/>
          </filter>
        </defs>
        <g filter="url(#f-b126-sh)">
          <!-- Microscope Arm & Curved Body -->
          <path d="M38 18C44 20 48 26 48 33C48 40 44 46 38 48H32V44H38C42 42 44 38 44 33C44 28 42 24 38 22V18Z" fill="url(#g-b126-scope)"/>
          <!-- Eyepiece & Monocular Tube -->
          <rect x="23" y="6" width="6" height="5" rx="1.5" fill="#1E293B"/>
          <path d="M24 11L32 23H27L19 11H24Z" fill="url(#g-b126-scope)"/>
          <!-- Revolving Nosepiece with Gold Objectives -->
          <ellipse cx="32" cy="24" rx="6" ry="3" fill="url(#g-b126-gold)"/>
          <rect x="29" y="26" width="3" height="6" rx="1" fill="url(#g-b126-gold)"/>
          <rect x="34" y="26" width="2.5" height="4.5" rx="0.8" fill="#94A3B8"/>
          <!-- Mechanical Specimen Stage & Slide -->
          <rect x="18" y="34" width="24" height="3" rx="1" fill="#1E293B"/>
          <rect x="24" y="32.5" width="12" height="2" rx="0.5" fill="#E2E8F0"/>
          <circle cx="30" cy="33.5" r="1.5" fill="#EC4899"/>
          <!-- Upward Illuminator Cone -->
          <polygon points="26,46 34,46 37,35 23,35" fill="url(#g-b126-light)"/>
          <!-- Heavy Microscope Stand Base -->
          <path d="M16 52C16 49 20 48 32 48C44 48 48 49 48 52V54H16V52Z" fill="url(#g-b126-scope)"/>
          <!-- Focus Knob -->
          <circle cx="44" cy="36" r="4" fill="url(#g-b126-gold)"/>
          <!-- Floating Pathogen / Microbe Cells -->
          <g class="svg-anim-float">
            <circle cx="14" cy="22" r="4.5" fill="#A855F7" fill-opacity="0.85"/>
            <circle cx="14" cy="22" r="2.5" fill="#F472B6"/>
            <path d="M14 16V18M14 26V28M8 22H10M18 22H20" stroke="#A855F7" stroke-width="1.5" stroke-linecap="round"/>
          </g>
        </g>
      </svg>
    `,

    // B137: Fundamentals of Nursing - I
    B137: `
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="subject-graphic-svg" aria-hidden="true">
        <defs>
          <linearGradient id="g-b137-cap" x1="12" y1="10" x2="52" y2="34" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#FFFFFF"/>
            <stop offset="100%" stop-color="#E2E8F0"/>
          </linearGradient>
          <linearGradient id="g-b137-teal" x1="14" y1="28" x2="50" y2="56" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#14B8A6"/>
            <stop offset="100%" stop-color="#0F766E"/>
          </linearGradient>
          <linearGradient id="g-b137-gold" x1="26" y1="40" x2="38" y2="52" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#FDE047"/>
            <stop offset="100%" stop-color="#D97706"/>
          </linearGradient>
          <filter id="f-b137-sh" x="4" y="4" width="56" height="58" filterUnits="userSpaceOnUse">
            <feDropShadow dx="0" dy="4" stdDeviation="3.5" flood-color="#0F766E" flood-opacity="0.32"/>
          </filter>
        </defs>
        <g filter="url(#f-b137-sh)">
          <!-- Classic Crisp Nurse's Cap -->
          <path d="M12 28L18 12H46L52 28L44 32H20L12 28Z" fill="url(#g-b137-cap)" stroke="#CBD5E1" stroke-width="1.5"/>
          <path d="M18 12L24 24H40L46 12" fill="#F1F5F9" fill-opacity="0.6"/>
          <!-- Prominent Red Cross on Nurse Cap -->
          <rect x="29.5" y="16" width="5" height="12" rx="1" fill="#EF4444"/>
          <rect x="26" y="19.5" width="12" height="5" rx="1" fill="#EF4444"/>
          <!-- Looping Professional Stethoscope -->
          <path d="M16 34C16 44 24 50 32 50C40 50 48 44 48 34" stroke="url(#g-b137-teal)" stroke-width="3.5" stroke-linecap="round"/>
          <path d="M22 49L22 55C22 57 26 58 32 58C38 58 42 57 42 55L42 49" stroke="url(#g-b137-teal)" stroke-width="2.5" stroke-linecap="round"/>
          <!-- Chrome Binaural Headset Arch -->
          <path d="M16 34L14 31C13 29 14 26 16 26H18" stroke="#94A3B8" stroke-width="2.5" stroke-linecap="round"/>
          <path d="M48 34L50 31C51 29 50 26 48 26H46" stroke="#94A3B8" stroke-width="2.5" stroke-linecap="round"/>
          <!-- Stethoscope Chestpiece Bell with Diaphragm -->
          <g class="svg-anim-pulse">
            <circle cx="32" cy="52" r="5" fill="url(#g-b137-gold)" stroke="#FFFFFF" stroke-width="1.5"/>
            <circle cx="32" cy="52" r="2.2" fill="#0F766E"/>
          </g>
        </g>
      </svg>
    `,

    // =========================================================================
    // 2ND YEAR SUBJECTS
    // =========================================================================

    // B231: Fundamentals of Nursing - II
    B231: `
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="subject-graphic-svg" aria-hidden="true">
        <defs>
          <linearGradient id="g-b231-box" x1="10" y1="18" x2="54" y2="52" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#EF4444"/>
            <stop offset="100%" stop-color="#B91C1C"/>
          </linearGradient>
          <linearGradient id="g-b231-iv" x1="42" y1="8" x2="56" y2="34" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#E0F2FE"/>
            <stop offset="100%" stop-color="#7DD3FC"/>
          </linearGradient>
          <filter id="f-b231-sh" x="4" y="6" width="56" height="56" filterUnits="userSpaceOnUse">
            <feDropShadow dx="0" dy="4" stdDeviation="3.5" flood-color="#B91C1C" flood-opacity="0.32"/>
          </filter>
        </defs>
        <g filter="url(#f-b231-sh)">
          <!-- Emergency Medical Case Box -->
          <rect x="10" y="24" width="38" height="28" rx="5" fill="url(#g-b231-box)"/>
          <path d="M10 32H48" stroke="#7F1D1D" stroke-width="1.5"/>
          <!-- Chrome Handle -->
          <path d="M22 24V18C22 16.5 23.5 15 25 15H33C34.5 15 36 16.5 36 18V24" stroke="#CBD5E1" stroke-width="2.5" fill="none"/>
          <!-- White Medical Cross on Kit -->
          <rect x="26.5" y="32" width="5" height="13" rx="1" fill="#FFFFFF"/>
          <rect x="22.5" y="36" width="13" height="5" rx="1" fill="#FFFFFF"/>
          <!-- Chrome Corner Reinforcements -->
          <circle cx="14" cy="28" r="1.5" fill="#E2E8F0"/>
          <circle cx="44" cy="28" r="1.5" fill="#E2E8F0"/>
          <circle cx="14" cy="48" r="1.5" fill="#E2E8F0"/>
          <circle cx="44" cy="48" r="1.5" fill="#E2E8F0"/>
          <!-- Suspended IV Infusion Bottle -->
          <g class="svg-anim-float">
            <path d="M48 10C48 9 49 8 50 8H54C55 8 56 9 56 10V12H48V10Z" fill="#94A3B8"/>
            <rect x="46" y="12" width="12" height="20" rx="3" fill="url(#g-b231-iv)" stroke="#38BDF8" stroke-width="1.2"/>
            <path d="M48 18H56M48 24H54" stroke="#0284C7" stroke-width="1" opacity="0.6"/>
            <!-- IV Drip Tubing -->
            <path d="M52 32V42C52 46 48 48 44 48" stroke="#38BDF8" stroke-width="1.8" stroke-linecap="round"/>
          </g>
        </g>
      </svg>
    `,

    // B232: Pediatric Nursing
    B232: `
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="subject-graphic-svg" aria-hidden="true">
        <defs>
          <linearGradient id="g-b232-bottle" x1="16" y1="16" x2="36" y2="48" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#E0F2FE"/>
            <stop offset="100%" stop-color="#7DD3FC"/>
          </linearGradient>
          <linearGradient id="g-b232-bear" x1="32" y1="24" x2="56" y2="48" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#FBBF24"/>
            <stop offset="100%" stop-color="#D97706"/>
          </linearGradient>
          <filter id="f-b232-sh" x="6" y="6" width="52" height="56" filterUnits="userSpaceOnUse">
            <feDropShadow dx="0" dy="4" stdDeviation="3.5" flood-color="#D97706" flood-opacity="0.3"/>
          </filter>
        </defs>
        <g filter="url(#f-b232-sh)">
          <!-- Pediatric Baby Bottle -->
          <path d="M22 10C22 8.5 24 7 26 7C28 7 30 8.5 30 10V14H22V10Z" fill="#FDE68A"/>
          <rect x="20" y="14" width="12" height="4" rx="1.5" fill="#F59E0B"/>
          <rect x="18" y="18" width="16" height="30" rx="4" fill="url(#g-b232-bottle)" stroke="#38BDF8" stroke-width="1.5"/>
          <!-- Measurement Lines on Bottle -->
          <line x1="22" y1="24" x2="26" y2="24" stroke="#0284C7" stroke-width="1.5" stroke-linecap="round"/>
          <line x1="22" y1="30" x2="28" y2="30" stroke="#0284C7" stroke-width="1.5" stroke-linecap="round"/>
          <line x1="22" y1="36" x2="26" y2="36" stroke="#0284C7" stroke-width="1.5" stroke-linecap="round"/>
          <!-- Cute Friendly Bear Badge -->
          <g class="svg-anim-float">
            <!-- Bear Ears -->
            <circle cx="37" cy="26" r="4" fill="url(#g-b232-bear)"/>
            <circle cx="37" cy="26" r="2" fill="#FDE68A"/>
            <circle cx="51" cy="26" r="4" fill="url(#g-b232-bear)"/>
            <circle cx="51" cy="26" r="2" fill="#FDE68A"/>
            <!-- Bear Head -->
            <circle cx="44" cy="34" r="9" fill="url(#g-b232-bear)"/>
            <circle cx="41.5" cy="32" r="1.2" fill="#1E293B"/>
            <circle cx="46.5" cy="32" r="1.2" fill="#1E293B"/>
            <ellipse cx="44" cy="36" rx="3.5" ry="2.5" fill="#FDE68A"/>
            <circle cx="44" cy="35" r="1" fill="#78350F"/>
            <!-- Rosy Cheeks -->
            <circle cx="39" cy="35" r="1.5" fill="#FB7185" opacity="0.7"/>
            <circle cx="49" cy="35" r="1.5" fill="#FB7185" opacity="0.7"/>
          </g>
          <!-- Pediatric Heart Stethoscope -->
          <path d="M12 40C12 48 20 54 28 54C34 54 40 50 42 46" stroke="#FB7185" stroke-width="2" stroke-linecap="round" fill="none"/>
          <circle cx="42" cy="46" r="2.5" fill="#E11D48"/>
        </g>
      </svg>
    `,

    // B233: Medical and Surgical Nursing - I
    B233: `
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="subject-graphic-svg" aria-hidden="true">
        <defs>
          <linearGradient id="g-b233-steel" x1="14" y1="10" x2="48" y2="48" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#F8FAFC"/>
            <stop offset="50%" stop-color="#CBD5E1"/>
            <stop offset="100%" stop-color="#64748B"/>
          </linearGradient>
          <linearGradient id="g-b233-lamp" x1="32" y1="4" x2="32" y2="30" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#FDE047" stop-opacity="0.8"/>
            <stop offset="100%" stop-color="#FDE047" stop-opacity="0"/>
          </linearGradient>
          <filter id="f-b233-sh" x="4" y="4" width="56" height="58" filterUnits="userSpaceOnUse">
            <feDropShadow dx="0" dy="4" stdDeviation="3.5" flood-color="#0F766E" flood-opacity="0.32"/>
          </filter>
        </defs>
        <g filter="url(#f-b233-sh)">
          <!-- Overhead Surgical Lamp Glow Cone -->
          <polygon points="26,6 38,6 54,34 10,34" fill="url(#g-b233-lamp)"/>
          <ellipse cx="32" cy="6" rx="8" ry="3" fill="#0D9488" stroke="#14B8A6" stroke-width="1.5"/>
          <!-- Crossed Surgical Scalpel -->
          <g>
            <path d="M14 50L36 28L42 34L20 56H14V50Z" fill="url(#g-b233-steel)"/>
            <path d="M36 28L48 16C50 14 53 15 52 18L44 32L36 28Z" fill="#F1F5F9" stroke="#94A3B8" stroke-width="1"/>
            <!-- Blade Cutting Edge Shine -->
            <path d="M48 16L40 30" stroke="#38BDF8" stroke-width="1.5" stroke-linecap="round"/>
          </g>
          <!-- Crossed Surgical Forceps / Clamp -->
          <g>
            <path d="M50 50L30 30M16 16L30 30" stroke="url(#g-b233-steel)" stroke-width="3" stroke-linecap="round"/>
            <circle cx="30" cy="30" r="2.5" fill="#334155"/>
            <!-- Finger Rings -->
            <circle cx="51" cy="51" r="5" stroke="#94A3B8" stroke-width="2.5" fill="none"/>
            <circle cx="15" cy="15" r="4.5" stroke="#94A3B8" stroke-width="2" fill="none"/>
          </g>
          <!-- Sterile Cross Badge -->
          <circle cx="32" cy="46" r="4.5" fill="#0D9488"/>
          <path d="M32 43.5V48.5M29.5 46H34.5" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round"/>
        </g>
      </svg>
    `,

    // B224: Pharmacology
    B224: `
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="subject-graphic-svg" aria-hidden="true">
        <defs>
          <linearGradient id="g-b224-cap1" x1="14" y1="18" x2="30" y2="34" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#EF4444"/>
            <stop offset="100%" stop-color="#B91C1C"/>
          </linearGradient>
          <linearGradient id="g-b224-cap2" x1="28" y1="32" x2="44" y2="48" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#E0F2FE"/>
            <stop offset="100%" stop-color="#38BDF8"/>
          </linearGradient>
          <linearGradient id="g-b224-bot" x1="32" y1="14" x2="56" y2="52" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#F59E0B"/>
            <stop offset="100%" stop-color="#92400E"/>
          </linearGradient>
          <filter id="f-b224-sh" x="6" y="6" width="54" height="56" filterUnits="userSpaceOnUse">
            <feDropShadow dx="0" dy="4" stdDeviation="3.5" flood-color="#B91C1C" flood-opacity="0.32"/>
          </filter>
        </defs>
        <g filter="url(#f-b224-sh)">
          <!-- Amber Medicine Bottle in Background -->
          <rect x="36" y="10" width="16" height="4" rx="1.5" fill="#E2E8F0"/>
          <rect x="34" y="14" width="20" height="36" rx="4" fill="url(#g-b224-bot)"/>
          <!-- Prescription Label with Rx -->
          <rect x="36" y="24" width="16" height="18" rx="2" fill="#FFFFFF"/>
          <text x="40" y="37" font-family="serif" font-weight="bold" font-size="11" fill="#DC2626">Rx</text>
          <!-- 3D Glossy Bi-Color Capsule at 45 Degrees -->
          <g class="svg-anim-float" transform="rotate(-30 28 32)">
            <!-- Top Half (Red) -->
            <path d="M20 18C16 22 16 28 20 32L26 32L26 18H20Z" fill="url(#g-b224-cap1)"/>
            <!-- Bottom Half (Ice Blue) -->
            <path d="M26 18L26 32L34 32C38 32 41 27 38 22L36 20C33 17 29 17 26 18Z" fill="url(#g-b224-cap2)"/>
            <line x1="26" y1="18" x2="26" y2="32" stroke="#FFFFFF" stroke-width="1.2"/>
            <!-- Specular Highlight Curve -->
            <path d="M21 21C20 23 20 27 22 29" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" opacity="0.6"/>
          </g>
          <!-- Scored Round Tablet Pill -->
          <circle cx="20" cy="46" r="7" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1.5"/>
          <line x1="15" y1="46" x2="25" y2="46" stroke="#94A3B8" stroke-width="1.5"/>
        </g>
      </svg>
    `,

    // B235: Traumatology and Orthopedic Nursing
    B235: `
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="subject-graphic-svg" aria-hidden="true">
        <defs>
          <linearGradient id="g-b235-bone" x1="14" y1="14" x2="50" y2="50" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#FFFBEB"/>
            <stop offset="60%" stop-color="#FDE68A"/>
            <stop offset="100%" stop-color="#D97706"/>
          </linearGradient>
          <linearGradient id="g-b235-band" x1="22" y1="24" x2="42" y2="40" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#38BDF8"/>
            <stop offset="100%" stop-color="#0284C7"/>
          </linearGradient>
          <filter id="f-b235-sh" x="6" y="6" width="52" height="54" filterUnits="userSpaceOnUse">
            <feDropShadow dx="0" dy="4" stdDeviation="3.5" flood-color="#D97706" flood-opacity="0.32"/>
          </filter>
        </defs>
        <g filter="url(#f-b235-sh)">
          <!-- Anatomical Long Bone Diagonal -->
          <path d="M18 14C15 14 13 16 13 19C13 22 15 24 17 24C18 24 19 23 20 22L42 44C41 45 40 46 40 47C40 50 42 52 45 52C48 52 50 50 50 47C50 44 48 42 46 42L24 20C24 18 24 17 23 16C22 14 20 14 18 14Z" fill="url(#g-b235-bone)" stroke="#B45309" stroke-width="1.2"/>
          <!-- Epiphysis Bone Head Double Bulb -->
          <circle cx="15" cy="17" r="4" fill="url(#g-b235-bone)"/>
          <circle cx="21" cy="13" r="4" fill="url(#g-b235-bone)"/>
          <circle cx="49" cy="49" r="4" fill="url(#g-b235-bone)"/>
          <circle cx="43" cy="53" r="4" fill="url(#g-b235-bone)"/>
          <!-- Orthopedic Support Compression Bandage Wrap -->
          <g class="svg-anim-float">
            <rect x="26" y="27" width="12" height="12" rx="3" fill="url(#g-b235-band)" transform="rotate(-45 32 33)"/>
            <line x1="28" y1="28" x2="36" y2="36" stroke="#FFFFFF" stroke-width="1.5"/>
            <line x1="32" y1="24" x2="40" y2="32" stroke="#FFFFFF" stroke-width="1.5"/>
          </g>
          <!-- Trauma Medical Red Cross -->
          <circle cx="44" cy="20" r="6" fill="#EF4444" class="svg-anim-pulse"/>
          <path d="M44 17V23M41 20H47" stroke="#FFFFFF" stroke-width="1.8" stroke-linecap="round"/>
          <!-- Joint Articulation Angle Ring -->
          <path d="M20 44C20 48 24 52 28 52" stroke="#0284C7" stroke-width="1.5" stroke-dasharray="2 2"/>
        </g>
      </svg>
    `,

    // B226: Nutrition and Biochemistry
    B226: `
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="subject-graphic-svg" aria-hidden="true">
        <defs>
          <linearGradient id="g-b226-apple" x1="24" y1="16" x2="52" y2="48" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#10B981"/>
            <stop offset="100%" stop-color="#047857"/>
          </linearGradient>
          <linearGradient id="g-b226-dna" x1="12" y1="10" x2="28" y2="54" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#38BDF8"/>
            <stop offset="50%" stop-color="#A855F7"/>
            <stop offset="100%" stop-color="#F43F5E"/>
          </linearGradient>
          <filter id="f-b226-sh" x="6" y="6" width="54" height="54" filterUnits="userSpaceOnUse">
            <feDropShadow dx="0" dy="4" stdDeviation="3.5" flood-color="#047857" flood-opacity="0.32"/>
          </filter>
        </defs>
        <g filter="url(#f-b226-sh)">
          <!-- Fresh Nutrition Green Apple -->
          <path d="M38 18C34 18 32 20 31 22C30 20 28 18 24 18C18 18 14 24 14 32C14 43 28 50 31 51C34 50 48 43 48 32C48 24 44 18 38 18Z" fill="url(#g-b226-apple)"/>
          <path d="M31 18V13C31 10 34 8 36 7" stroke="#78350F" stroke-width="2" stroke-linecap="round"/>
          <path d="M33 12C37 10 41 12 42 15C39 16 35 15 33 12Z" fill="#34D399"/>
          <!-- Specular 3D Highlight on Apple -->
          <ellipse cx="23" cy="26" rx="4" ry="7" transform="rotate(-20 23 26)" fill="#FFFFFF" fill-opacity="0.3"/>
          <!-- Intertwined Double-Helix DNA Strand -->
          <g class="svg-anim-float">
            <!-- Left strand wave -->
            <path d="M12 14C18 20 18 28 12 34C6 40 6 48 12 54" stroke="url(#g-b226-dna)" stroke-width="2.5" stroke-linecap="round" fill="none"/>
            <!-- Right strand wave -->
            <path d="M20 14C14 20 14 28 20 34C26 40 26 48 20 54" stroke="url(#g-b226-dna)" stroke-width="2.5" stroke-linecap="round" fill="none"/>
            <!-- Base Pair Rungs -->
            <line x1="14" y1="18" x2="18" y2="18" stroke="#FBBF24" stroke-width="2"/>
            <line x1="15" y1="24" x2="17" y2="24" stroke="#38BDF8" stroke-width="2"/>
            <line x1="14" y1="38" x2="18" y2="38" stroke="#EC4899" stroke-width="2"/>
            <line x1="15" y1="44" x2="17" y2="44" stroke="#34D399" stroke-width="2"/>
          </g>
          <!-- Hexagonal Biochemistry Molecular Node -->
          <g class="svg-anim-spin" style="transform-origin: 50px 20px;">
            <circle cx="50" cy="20" r="3" fill="#38BDF8"/>
            <circle cx="56" cy="24" r="2" fill="#F43F5E"/>
            <line x1="50" y1="20" x2="56" y2="24" stroke="#CBD5E1" stroke-width="1.5"/>
          </g>
        </g>
      </svg>
    `,

    // B237: Laws, Ethics and Forensic Nursing
    B237: `
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="subject-graphic-svg" aria-hidden="true">
        <defs>
          <linearGradient id="g-b237-gold" x1="14" y1="8" x2="50" y2="52" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#FDE047"/>
            <stop offset="50%" stop-color="#F59E0B"/>
            <stop offset="100%" stop-color="#B45309"/>
          </linearGradient>
          <linearGradient id="g-b237-seal" x1="26" y1="42" x2="38" y2="56" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#BE123C"/>
            <stop offset="100%" stop-color="#881337"/>
          </linearGradient>
          <filter id="f-b237-sh" x="6" y="6" width="52" height="54" filterUnits="userSpaceOnUse">
            <feDropShadow dx="0" dy="4" stdDeviation="3.5" flood-color="#B45309" flood-opacity="0.32"/>
          </filter>
        </defs>
        <g filter="url(#f-b237-sh)">
          <!-- Scales of Justice Center Pillar -->
          <rect x="30.5" y="12" width="3" height="34" rx="1.5" fill="url(#g-b237-gold)"/>
          <ellipse cx="32" cy="11" rx="4" ry="3" fill="url(#g-b237-gold)"/>
          <!-- Balanced Beam -->
          <path d="M12 18H52" stroke="url(#g-b237-gold)" stroke-width="3" stroke-linecap="round"/>
          <circle cx="32" cy="18" r="3" fill="#D97706"/>
          <!-- Left Weighing Pan & Chains -->
          <line x1="14" y1="18" x2="10" y2="30" stroke="#CBD5E1" stroke-width="1.2"/>
          <line x1="14" y1="18" x2="18" y2="30" stroke="#CBD5E1" stroke-width="1.2"/>
          <path d="M8 30C8 33 11 35 14 35C17 35 20 33 20 30H8Z" fill="url(#g-b237-gold)"/>
          <!-- Right Weighing Pan & Chains -->
          <line x1="50" y1="18" x2="46" y2="30" stroke="#CBD5E1" stroke-width="1.2"/>
          <line x1="50" y1="18" x2="54" y2="30" stroke="#CBD5E1" stroke-width="1.2"/>
          <path d="M44 30C44 33 47 35 50 35C53 35 56 33 56 30H44Z" fill="url(#g-b237-gold)"/>
          <!-- Forensic Caduceus Serpent coiling center staff -->
          <path d="M30 38C26 36 28 30 32 30C36 30 38 24 34 22" stroke="#2DD4BF" stroke-width="2" stroke-linecap="round" fill="none"/>
          <!-- Official Wax Seal at Base -->
          <circle cx="32" cy="46" r="6" fill="url(#g-b237-seal)"/>
          <circle cx="32" cy="46" r="3.5" stroke="#FDA4AF" stroke-width="1" fill="none"/>
          <path d="M29 51L27 58L32 55L37 58L35 51" fill="#9F1239"/>
        </g>
      </svg>
    `,

    // =========================================================================
    // 3RD YEAR SUBJECTS
    // =========================================================================

    // B331: Geriatric Nursing
    B331: `
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="subject-graphic-svg" aria-hidden="true">
        <defs>
          <linearGradient id="g-b331-gold" x1="16" y1="10" x2="48" y2="52" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#F59E0B"/>
            <stop offset="100%" stop-color="#EA580C"/>
          </linearGradient>
          <linearGradient id="g-b331-heart" x1="20" y1="20" x2="44" y2="44" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#FB7185"/>
            <stop offset="100%" stop-color="#E11D48"/>
          </linearGradient>
          <filter id="f-b331-sh" x="6" y="6" width="52" height="54" filterUnits="userSpaceOnUse">
            <feDropShadow dx="0" dy="4" stdDeviation="3.5" flood-color="#EA580C" flood-opacity="0.32"/>
          </filter>
        </defs>
        <g filter="url(#f-b331-sh)">
          <!-- Classical Senior Walking Cane with Carved Handle -->
          <path d="M44 14C44 10 40 8 36 8C32 8 30 11 30 14V52" stroke="url(#g-b331-gold)" stroke-width="4" stroke-linecap="round"/>
          <rect x="29" y="18" width="6" height="3" rx="1" fill="#FEF08A"/>
          <rect x="28" y="48" width="8" height="4" rx="2" fill="#78350F"/>
          <!-- Caring Hands Supporting Silhouette -->
          <g class="svg-anim-float">
            <!-- Warm Caring Heart Halo -->
            <path d="M26 22C21 16 12 21 12 28C12 37 26 44 26 44C26 44 40 37 40 28C40 21 31 16 26 22Z" fill="url(#g-b331-heart)" opacity="0.85"/>
            <!-- Gentle Clasping Hands Icon Inside -->
            <path d="M19 28C21 26 25 28 27 30M23 34C25 32 29 32 31 34" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"/>
            <circle cx="26" cy="27" r="1.5" fill="#FFFFFF"/>
          </g>
          <!-- Radiating Warmth Sparkles -->
          <circle cx="16" cy="18" r="1.5" fill="#FDE047" class="svg-anim-pulse"/>
          <circle cx="48" cy="28" r="1.5" fill="#FDE047" class="svg-anim-pulse"/>
        </g>
      </svg>
    `,

    // B332: Mental Health and Psychiatric Nursing
    B332: `
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="subject-graphic-svg" aria-hidden="true">
        <defs>
          <linearGradient id="g-b332-brain" x1="14" y1="10" x2="50" y2="40" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#C084FC"/>
            <stop offset="50%" stop-color="#8B5CF6"/>
            <stop offset="100%" stop-color="#6D28D9"/>
          </linearGradient>
          <linearGradient id="g-b332-lotus" x1="20" y1="36" x2="44" y2="54" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#F472B6"/>
            <stop offset="100%" stop-color="#DB2777"/>
          </linearGradient>
          <filter id="f-b332-sh" x="6" y="6" width="52" height="54" filterUnits="userSpaceOnUse">
            <feDropShadow dx="0" dy="4" stdDeviation="3.5" flood-color="#6D28D9" flood-opacity="0.35"/>
          </filter>
        </defs>
        <g filter="url(#f-b332-sh)">
          <!-- Serene Luminous Brain -->
          <g class="svg-anim-pulse">
            <!-- Left Hemisphere -->
            <path d="M31 14C28 10 21 11 18 16C15 21 14 26 18 31C16 35 19 40 23 40C26 40 29 38 31 35V14Z" fill="url(#g-b332-brain)"/>
            <!-- Right Hemisphere -->
            <path d="M33 14C36 10 43 11 46 16C49 21 50 26 46 31C48 35 45 40 41 40C38 40 35 38 33 35V14Z" fill="url(#g-b332-brain)"/>
            <!-- Cerebral Gyri Folds -->
            <path d="M22 20C24 22 24 26 21 28M42 20C40 22 40 26 43 28" stroke="#E9D5FF" stroke-width="1.5" stroke-linecap="round"/>
          </g>
          <!-- Blooming Sacred Lotus at Base (Symbol of Mental Peace) -->
          <g class="svg-anim-float">
            <!-- Central Lotus Petal -->
            <path d="M32 32C30 38 32 44 32 46C32 44 34 38 32 32Z" fill="#FDF2F8"/>
            <!-- Left & Right Petals -->
            <path d="M32 46C27 44 22 40 20 36C24 35 29 40 32 46Z" fill="url(#g-b332-lotus)"/>
            <path d="M32 46C37 44 42 40 44 36C40 35 35 40 32 46Z" fill="url(#g-b332-lotus)"/>
            <!-- Base Leaves -->
            <path d="M16 46C22 44 28 47 32 49C36 47 42 44 48 46C40 50 24 50 16 46Z" fill="#2DD4BF"/>
          </g>
          <!-- Mindful Concentric Calm Rings -->
          <circle cx="32" cy="24" r="20" stroke="#C084FC" stroke-width="1" stroke-dasharray="2 3" opacity="0.4" class="svg-anim-spin"/>
        </g>
      </svg>
    `,

    // B333: Emergency and Critical Care Nursing
    B333: `
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="subject-graphic-svg" aria-hidden="true">
        <defs>
          <linearGradient id="g-b333-amb" x1="10" y1="20" x2="54" y2="48" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#FFFFFF"/>
            <stop offset="100%" stop-color="#E2E8F0"/>
          </linearGradient>
          <linearGradient id="g-b333-red" x1="10" y1="28" x2="54" y2="44" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#EF4444"/>
            <stop offset="100%" stop-color="#B91C1C"/>
          </linearGradient>
          <filter id="f-b333-sh" x="4" y="6" width="56" height="54" filterUnits="userSpaceOnUse">
            <feDropShadow dx="0" dy="4" stdDeviation="3.5" flood-color="#DC2626" flood-opacity="0.35"/>
          </filter>
        </defs>
        <g filter="url(#f-b333-sh)">
          <!-- Emergency Vehicle Cabin Body -->
          <path d="M10 24C10 21.8 11.8 20 14 20H36V44H10V24Z" fill="url(#g-b333-amb)"/>
          <path d="M36 24H44L52 32V44H36V24Z" fill="url(#g-b333-amb)"/>
          <!-- Windshield Glass -->
          <path d="M38 26H43L49 32H38V26Z" fill="#38BDF8"/>
          <!-- Emergency Red Stripe across Chassis -->
          <rect x="10" y="34" width="42" height="6" fill="url(#g-b333-red)"/>
          <!-- Medical Cross on Ambulance -->
          <rect x="21" y="24" width="4" height="8" rx="0.5" fill="#EF4444"/>
          <rect x="19" y="26" width="8" height="4" rx="0.5" fill="#EF4444"/>
          <!-- Ambulance Wheels -->
          <circle cx="19" cy="45" r="5" fill="#1E293B"/>
          <circle cx="19" cy="45" r="2" fill="#94A3B8"/>
          <circle cx="43" cy="45" r="5" fill="#1E293B"/>
          <circle cx="43" cy="45" r="2" fill="#94A3B8"/>
          <!-- Dual Flashing Roof Emergency Sirens -->
          <rect x="23" y="17" width="5" height="3" rx="1" fill="#EF4444" class="svg-anim-pulse"/>
          <rect x="28" y="17" width="5" height="3" rx="1" fill="#2563EB" class="svg-anim-pulse"/>
          <!-- Siren Flash Rays -->
          <path d="M21 14L18 11M33 14L36 11" stroke="#FDE047" stroke-width="2" stroke-linecap="round"/>
          <!-- High-Voltage Defibrillator Shock Wave -->
          <path d="M3 52L22 52L26 47L30 57L34 50L37 54L59 54" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="svg-anim-ecg"/>
        </g>
      </svg>
    `,

    // B334: Medical and Surgical Nursing - II
    B334: `
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="subject-graphic-svg" aria-hidden="true">
        <defs>
          <linearGradient id="g-b334-mask" x1="16" y1="20" x2="48" y2="44" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#2DD4BF"/>
            <stop offset="100%" stop-color="#0F766E"/>
          </linearGradient>
          <linearGradient id="g-b334-mon" x1="12" y1="8" x2="52" y2="28" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#1E293B"/>
            <stop offset="100%" stop-color="#0F172A"/>
          </linearGradient>
          <filter id="f-b334-sh" x="6" y="4" width="52" height="56" filterUnits="userSpaceOnUse">
            <feDropShadow dx="0" dy="4" stdDeviation="3.5" flood-color="#0F766E" flood-opacity="0.32"/>
          </filter>
        </defs>
        <g filter="url(#f-b334-sh)">
          <!-- Critical Surgical Vital Monitor Display -->
          <rect x="14" y="8" width="36" height="20" rx="3" fill="url(#g-b334-mon)" stroke="#475569" stroke-width="1.2"/>
          <path d="M17 18H25L27 12L30 22L33 15L35 20H47" stroke="#34D399" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="svg-anim-ecg"/>
          <circle cx="45" cy="12" r="1.5" fill="#EF4444"/>
          <!-- Surgical Face Mask with Pleats -->
          <g class="svg-anim-float">
            <rect x="16" y="32" width="32" height="20" rx="4" fill="url(#g-b334-mask)"/>
            <line x1="18" y1="38" x2="46" y2="38" stroke="#134E4A" stroke-width="1.2"/>
            <line x1="18" y1="44" x2="46" y2="44" stroke="#134E4A" stroke-width="1.2"/>
            <!-- Ear Loops -->
            <path d="M16 36C10 37 10 47 16 48" stroke="#94A3B8" stroke-width="1.5" fill="none"/>
            <path d="M48 36C54 37 54 47 48 48" stroke="#94A3B8" stroke-width="1.5" fill="none"/>
          </g>
          <!-- Perfusion Arterial Blood Flow Loop -->
          <circle cx="32" cy="42" r="4" fill="#EF4444"/>
          <path d="M32 40V44M30 42H34" stroke="#FFFFFF" stroke-width="1.2" stroke-linecap="round"/>
        </g>
      </svg>
    `,

    // B335: Community Health Nursing and Epidemiology
    B335: `
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="subject-graphic-svg" aria-hidden="true">
        <defs>
          <linearGradient id="g-b335-shield" x1="14" y1="8" x2="50" y2="52" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#10B981"/>
            <stop offset="100%" stop-color="#0284C7"/>
          </linearGradient>
          <linearGradient id="g-b335-globe" x1="20" y1="12" x2="44" y2="36" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#E0F2FE"/>
            <stop offset="100%" stop-color="#BAE6FD"/>
          </linearGradient>
          <filter id="f-b335-sh" x="6" y="6" width="52" height="54" filterUnits="userSpaceOnUse">
            <feDropShadow dx="0" dy="4" stdDeviation="3.5" flood-color="#0284C7" flood-opacity="0.32"/>
          </filter>
        </defs>
        <g filter="url(#f-b335-sh)">
          <!-- Earth Globe with Latitude Lines in Background -->
          <circle cx="32" cy="28" r="16" fill="url(#g-b335-globe)" stroke="#0284C7" stroke-width="1.5"/>
          <ellipse cx="32" cy="28" rx="8" ry="16" stroke="#38BDF8" stroke-width="1.2" fill="none"/>
          <line x1="16" y1="28" x2="48" y2="28" stroke="#38BDF8" stroke-width="1.2"/>
          <!-- Protective Community Health Shield -->
          <g class="svg-anim-float">
            <path d="M32 14L46 20V34C46 43 38 49 32 52C26 49 18 43 18 34V20L32 14Z" fill="url(#g-b335-shield)" fill-opacity="0.9" stroke="#FFFFFF" stroke-width="2"/>
            <!-- White Medical Shield Cross -->
            <rect x="29.5" y="24" width="5" height="14" rx="1" fill="#FFFFFF"/>
            <rect x="25" y="28.5" width="14" height="5" rx="1" fill="#FFFFFF"/>
          </g>
          <!-- Epidemiological Tracking Map Pins -->
          <circle cx="16" cy="18" r="3" fill="#F97316" class="svg-anim-pulse"/>
          <circle cx="48" cy="20" r="3" fill="#F97316" class="svg-anim-pulse"/>
        </g>
      </svg>
    `,

    // =========================================================================
    // 4TH YEAR SUBJECTS
    // =========================================================================

    // B431: Midwifery
    B431: `
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="subject-graphic-svg" aria-hidden="true">
        <defs>
          <linearGradient id="g-b431-mom" x1="16" y1="10" x2="48" y2="52" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#FB7185"/>
            <stop offset="60%" stop-color="#F43F5E"/>
            <stop offset="100%" stop-color="#BE123C"/>
          </linearGradient>
          <linearGradient id="g-b431-baby" x1="26" y1="26" x2="42" y2="46" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#FFFBEB"/>
            <stop offset="100%" stop-color="#FDE68A"/>
          </linearGradient>
          <filter id="f-b431-sh" x="6" y="6" width="52" height="54" filterUnits="userSpaceOnUse">
            <feDropShadow dx="0" dy="4" stdDeviation="3.5" flood-color="#BE123C" flood-opacity="0.32"/>
          </filter>
        </defs>
        <g filter="url(#f-b431-sh)">
          <!-- Tender Maternal Silhouette Cradling Baby -->
          <circle cx="26" cy="16" r="6" fill="url(#g-b431-mom)"/>
          <path d="M22 23C16 26 14 34 14 42C14 48 18 52 26 52C34 52 46 50 48 44C50 38 46 32 40 30L34 26C31 24 25 22 22 23Z" fill="url(#g-b431-mom)"/>
          <!-- Swaddled Newborn Infant -->
          <g class="svg-anim-pulse">
            <!-- Baby Head -->
            <circle cx="36" cy="32" r="4.5" fill="url(#g-b431-baby)"/>
            <circle cx="37" cy="32" r="0.8" fill="#78350F"/>
            <!-- Swaddling Blanket Wrap -->
            <path d="M32 35C30 38 31 43 35 44C39 45 42 41 40 37L32 35Z" fill="#FEE2E2"/>
            <path d="M33 38L39 42" stroke="#F43F5E" stroke-width="1"/>
          </g>
          <!-- Glowing Golden Umbilical / Care Aura -->
          <path d="M26 12C34 10 44 14 48 22" stroke="#FBBF24" stroke-width="2" stroke-linecap="round" class="svg-anim-pulse"/>
          <circle cx="48" cy="22" r="1.5" fill="#FDE047"/>
        </g>
      </svg>
    `,

    // B432: Obstetrical and Gynecological Nursing
    B432: `
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="subject-graphic-svg" aria-hidden="true">
        <defs>
          <linearGradient id="g-b432-us" x1="14" y1="10" x2="48" y2="48" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#E879F9"/>
            <stop offset="100%" stop-color="#A21CAF"/>
          </linearGradient>
          <linearGradient id="g-b432-screen" x1="18" y1="16" x2="42" y2="40" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#0F172A"/>
            <stop offset="100%" stop-color="#0369A1"/>
          </linearGradient>
          <filter id="f-b432-sh" x="6" y="6" width="52" height="54" filterUnits="userSpaceOnUse">
            <feDropShadow dx="0" dy="4" stdDeviation="3.5" flood-color="#A21CAF" flood-opacity="0.32"/>
          </filter>
        </defs>
        <g filter="url(#f-b432-sh)">
          <!-- Circular Fetal Ultrasound Monitor Scope -->
          <circle cx="30" cy="30" r="18" fill="url(#g-b432-screen)" stroke="url(#g-b432-us)" stroke-width="2.5"/>
          <!-- Fetal Profile Silhouette Inside Scope -->
          <g class="svg-anim-float">
            <circle cx="28" cy="25" r="4.5" fill="#FDE047" fill-opacity="0.9"/>
            <path d="M28 29C24 30 23 34 26 37C29 39 33 38 34 35C35 32 32 29 28 29Z" fill="#FDE047" fill-opacity="0.8"/>
          </g>
          <!-- Ultrasound Sound Doppler Waves -->
          <path d="M20 20C24 16 32 16 38 20" stroke="#38BDF8" stroke-width="1.8" stroke-linecap="round" stroke-dasharray="2 3"/>
          <path d="M17 24C22 18 36 18 41 24" stroke="#38BDF8" stroke-width="1.5" stroke-linecap="round"/>
          <!-- Handheld Ultrasound Transducer Wand -->
          <g class="svg-anim-pulse">
            <path d="M42 38L52 48L48 52L38 42L42 38Z" fill="#E2E8F0" stroke="#94A3B8" stroke-width="1.5"/>
            <rect x="36" y="40" width="4" height="4" rx="1" fill="#A21CAF"/>
          </g>
          <!-- Protective Orchid Bloom Accent -->
          <circle cx="46" cy="18" r="4" fill="#F472B6" opacity="0.8"/>
          <circle cx="46" cy="18" r="2" fill="#FDE047"/>
        </g>
      </svg>
    `,

    // B433: Nursing Administration and Management
    B433: `
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="subject-graphic-svg" aria-hidden="true">
        <defs>
          <linearGradient id="g-b433-board" x1="14" y1="12" x2="48" y2="52" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#1E40AF"/>
            <stop offset="100%" stop-color="#1E3A8A"/>
          </linearGradient>
          <linearGradient id="g-b433-gold" x1="24" y1="8" x2="40" y2="20" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#FDE047"/>
            <stop offset="100%" stop-color="#D97706"/>
          </linearGradient>
          <filter id="f-b433-sh" x="6" y="6" width="52" height="54" filterUnits="userSpaceOnUse">
            <feDropShadow dx="0" dy="4" stdDeviation="3.5" flood-color="#1E3A8A" flood-opacity="0.32"/>
          </filter>
        </defs>
        <g filter="url(#f-b433-sh)">
          <!-- Hospital Tower Facade in Background -->
          <rect x="12" y="14" width="16" height="34" rx="2" fill="#334155"/>
          <rect x="15" y="18" width="3" height="3" fill="#94A3B8"/>
          <rect x="21" y="18" width="3" height="3" fill="#94A3B8"/>
          <rect x="15" y="24" width="3" height="3" fill="#94A3B8"/>
          <rect x="21" y="24" width="3" height="3" fill="#94A3B8"/>
          <!-- Red Cross on Hospital Roof -->
          <circle cx="20" cy="11" r="3" fill="#EF4444"/>
          <!-- Executive Management Clipboard -->
          <rect x="24" y="16" width="28" height="36" rx="4" fill="url(#g-b433-board)"/>
          <rect x="27" y="22" width="22" height="27" rx="2" fill="#FFFFFF"/>
          <!-- Golden Board Clamp -->
          <rect x="32" y="13" width="12" height="6" rx="2" fill="url(#g-b433-gold)"/>
          <circle cx="38" cy="16" r="1.5" fill="#78350F"/>
          <!-- Approved Management Checkmarks -->
          <path d="M30 28L33 31L40 25" stroke="#10B981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M30 36L33 39L40 33" stroke="#10B981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <line x1="30" y1="43" x2="44" y2="43" stroke="#CBD5E1" stroke-width="2" stroke-linecap="round"/>
        </g>
      </svg>
    `,

    // B434: Nursing Education
    B434: `
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="subject-graphic-svg" aria-hidden="true">
        <defs>
          <linearGradient id="g-b434-mortar" x1="12" y1="10" x2="52" y2="34" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#334155"/>
            <stop offset="100%" stop-color="#0F172A"/>
          </linearGradient>
          <linearGradient id="g-b434-gold" x1="28" y1="20" x2="44" y2="44" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#FDE047"/>
            <stop offset="100%" stop-color="#F59E0B"/>
          </linearGradient>
          <linearGradient id="g-b434-book" x1="14" y1="36" x2="48" y2="54" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#0284C7"/>
            <stop offset="100%" stop-color="#0369A1"/>
          </linearGradient>
          <filter id="f-b434-sh" x="6" y="6" width="52" height="54" filterUnits="userSpaceOnUse">
            <feDropShadow dx="0" dy="4" stdDeviation="3.5" flood-color="#0F172A" flood-opacity="0.32"/>
          </filter>
        </defs>
        <g filter="url(#f-b434-sh)">
          <!-- Open Master Nursing Textbook at Base -->
          <path d="M14 42C20 40 26 41 32 44C38 41 44 40 50 42V52C44 50 38 50 32 53C26 50 20 50 14 52V42Z" fill="url(#g-b434-book)"/>
          <path d="M16 42C21 41 26 42 32 44C38 42 43 41 48 42V50C43 49 38 49 32 51C26 49 21 49 16 50V42Z" fill="#F8FAFC"/>
          <!-- Crimson Ribbon Bookmark -->
          <path d="M32 44V56L35 53L38 56V44" fill="#EF4444"/>
          <!-- Academic Graduation Cap (Mortarboard) -->
          <g class="svg-anim-float">
            <!-- Diamond Top Cap -->
            <polygon points="32,10 54,20 32,30 10,20" fill="url(#g-b434-mortar)" stroke="#475569" stroke-width="1.2"/>
            <!-- Skull Cap Ring -->
            <path d="M20 24.5V33C20 37 25 40 32 40C39 40 44 37 44 33V24.5" fill="#1E293B"/>
            <!-- Center Button -->
            <circle cx="32" cy="20" r="2.5" fill="url(#g-b434-gold)"/>
            <!-- Swinging Silk Tassel -->
            <path d="M32 20L44 26V35" stroke="url(#g-b434-gold)" stroke-width="2" stroke-linecap="round"/>
            <polygon points="42,35 46,35 45,41 43,41" fill="url(#g-b434-gold)"/>
          </g>
        </g>
      </svg>
    `,

    // B435: Research and Biostatistics
    B435: `
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="subject-graphic-svg" aria-hidden="true">
        <defs>
          <linearGradient id="g-b435-flask" x1="12" y1="14" x2="36" y2="52" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#E0F2FE"/>
            <stop offset="100%" stop-color="#38BDF8"/>
          </linearGradient>
          <linearGradient id="g-b435-fluid" x1="14" y1="36" x2="34" y2="50" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#8B5CF6"/>
            <stop offset="100%" stop-color="#6D28D9"/>
          </linearGradient>
          <linearGradient id="g-b435-chart" x1="36" y1="20" x2="56" y2="52" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#10B981"/>
            <stop offset="100%" stop-color="#047857"/>
          </linearGradient>
          <filter id="f-b435-sh" x="6" y="6" width="54" height="54" filterUnits="userSpaceOnUse">
            <feDropShadow dx="0" dy="4" stdDeviation="3.5" flood-color="#6D28D9" flood-opacity="0.32"/>
          </filter>
        </defs>
        <g filter="url(#f-b435-sh)">
          <!-- Glass Erlenmeyer Laboratory Flask -->
          <path d="M21 12H27V22L36 44C37 47 35 50 32 50H16C13 50 11 47 12 44L21 22V12Z" fill="url(#g-b435-flask)" stroke="#0284C7" stroke-width="1.5"/>
          <rect x="19" y="10" width="10" height="3" rx="1" fill="#0284C7"/>
          <!-- Bubbling Violet Chemical Reagent -->
          <path d="M14 44L18 36C22 38 26 34 30 36L34 44C35 47 33 50 30 50H18C15 50 13 47 14 44Z" fill="url(#g-b435-fluid)"/>
          <!-- Effervescent Rising Bubbles -->
          <circle cx="20" cy="40" r="1.5" fill="#FFFFFF" class="svg-anim-bubble"/>
          <circle cx="26" cy="34" r="2" fill="#FFFFFF" class="svg-anim-bubble d2"/>
          <circle cx="23" cy="26" r="1.2" fill="#C4B5FD" class="svg-anim-bubble d3"/>
          <!-- Ascending Biostatistics 3D Bar Chart -->
          <rect x="38" y="38" width="4" height="12" rx="1" fill="#94A3B8"/>
          <rect x="44" y="30" width="4" height="20" rx="1" fill="#38BDF8"/>
          <rect x="50" y="20" width="4" height="30" rx="1" fill="url(#g-b435-chart)"/>
          <!-- Upward Statistical Trend Regression Arrow -->
          <path d="M36 34L44 26L54 16M54 16H47M54 16V22" stroke="#EF4444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      </svg>
    `,

    // B416: Advanced Communicative English
    B416: `
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="subject-graphic-svg" aria-hidden="true">
        <defs>
          <linearGradient id="g-b416-mic" x1="24" y1="10" x2="40" y2="34" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#E2E8F0"/>
            <stop offset="50%" stop-color="#94A3B8"/>
            <stop offset="100%" stop-color="#475569"/>
          </linearGradient>
          <linearGradient id="g-b416-blue" x1="16" y1="14" x2="48" y2="48" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#4338CA"/>
            <stop offset="100%" stop-color="#1E1B4B"/>
          </linearGradient>
          <linearGradient id="g-b416-gold" x1="42" y1="12" x2="56" y2="26" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#FDE047"/>
            <stop offset="100%" stop-color="#F59E0B"/>
          </linearGradient>
          <filter id="f-b416-sh" x="6" y="6" width="52" height="54" filterUnits="userSpaceOnUse">
            <feDropShadow dx="0" dy="4" stdDeviation="3.5" flood-color="#4338CA" flood-opacity="0.32"/>
          </filter>
        </defs>
        <g filter="url(#f-b416-sh)">
          <!-- Global Communication Earth Waves in Background -->
          <circle cx="32" cy="30" r="18" fill="url(#g-b416-blue)"/>
          <ellipse cx="32" cy="30" rx="8" ry="18" stroke="#6366F1" stroke-width="1.2" fill="none"/>
          <line x1="14" y1="30" x2="50" y2="30" stroke="#6366F1" stroke-width="1.2"/>
          <!-- Professional Studio Broadcast Microphone -->
          <g class="svg-anim-float">
            <!-- Mic Capsule -->
            <rect x="27" y="16" width="10" height="18" rx="5" fill="url(#g-b416-mic)"/>
            <!-- Grille Mesh Texture Lines -->
            <line x1="27" y1="21" x2="37" y2="21" stroke="#334155" stroke-width="1"/>
            <line x1="27" y1="25" x2="37" y2="25" stroke="#334155" stroke-width="1"/>
            <line x1="32" y1="16" x2="32" y2="27" stroke="#334155" stroke-width="1"/>
            <!-- U-Shaped Suspension Bracket -->
            <path d="M23 25C23 31 27 36 32 36C37 36 41 31 41 25" stroke="#E2E8F0" stroke-width="2.5" stroke-linecap="round" fill="none"/>
            <line x1="32" y1="36" x2="32" y2="44" stroke="#CBD5E1" stroke-width="3"/>
            <rect x="24" y="44" width="16" height="3" rx="1.5" fill="#E2E8F0"/>
          </g>
          <!-- Acoustic Broadcast Waves -->
          <path d="M44 20C47 23 49 27 49 31" stroke="#22D3EE" stroke-width="2" stroke-linecap="round" class="svg-anim-pulse"/>
          <path d="M20 20C17 23 15 27 15 31" stroke="#22D3EE" stroke-width="2" stroke-linecap="round" class="svg-anim-pulse"/>
          <!-- Golden Star of Fluency & Excellence -->
          <polygon points="48,12 50,16 54,17 51,20 52,24 48,22 44,24 45,20 42,17 46,16" fill="url(#g-b416-gold)" class="svg-anim-pulse"/>
        </g>
      </svg>
    `,

    // =========================================================================
    // FALLBACK / DEFAULT ICON
    // =========================================================================

    default: `
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="subject-graphic-svg" aria-hidden="true">
        <defs>
          <linearGradient id="g-def-teal" x1="16" y1="10" x2="48" y2="52" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#14B8A6"/>
            <stop offset="100%" stop-color="#0F766E"/>
          </linearGradient>
          <linearGradient id="g-def-gold" x1="24" y1="12" x2="40" y2="48" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#FDE047"/>
            <stop offset="100%" stop-color="#D97706"/>
          </linearGradient>
          <filter id="f-def-sh" x="6" y="6" width="52" height="54" filterUnits="userSpaceOnUse">
            <feDropShadow dx="0" dy="4" stdDeviation="3.5" flood-color="#0F766E" flood-opacity="0.32"/>
          </filter>
        </defs>
        <g filter="url(#f-def-sh)">
          <!-- Classical Caduceus Staff in Center -->
          <rect x="30.5" y="10" width="3" height="38" rx="1.5" fill="url(#g-def-gold)"/>
          <circle cx="32" cy="10" r="3.5" fill="url(#g-def-gold)"/>
          <!-- Caduceus Dual Healing Wings -->
          <path d="M32 14C24 10 18 16 20 22C24 20 28 18 32 18C36 18 40 20 44 22C46 16 40 10 32 14Z" fill="url(#g-def-gold)" opacity="0.9"/>
          <!-- Coiled Healing Serpent -->
          <path d="M28 26C36 24 36 32 28 34C36 36 36 42 32 44" stroke="#2DD4BF" stroke-width="2.5" stroke-linecap="round" fill="none"/>
          <!-- Professional Stethoscope Chestpiece -->
          <circle cx="44" cy="42" r="6" fill="url(#g-def-teal)" stroke="#FFFFFF" stroke-width="1.5"/>
          <circle cx="44" cy="42" r="2.5" fill="#FDE047"/>
        </g>
      </svg>
    `
  };

  // Attach to window object for global application access
  window.SUBJECT_GRAPHICS = SUBJECT_GRAPHICS;
})();
