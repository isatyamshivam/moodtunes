/**
 * emotionMapper.js
 * ─────────────────────────────────────────────────────────────
 * Maps raw FER-2013 emotion CNN output labels to MoodTunes mood
 * keys used in moods.js (happy | excited | relaxed | sad | neutral).
 */

/**
 * The 7 FER-2013 emotion classes in the exact order the
 * emotion CNN outputs its softmax probabilities.
 */
export const EMOTION_LABELS = [
  'angry',
  'disgusted',
  'fearful',
  'happy',
  'neutral',
  'sad',
  'surprised',
];

/**
 * Mapping from raw emotion label → MoodTunes mood key.
 * Must match the `value` field of objects in MOODS (moods.js).
 */
const EMOTION_TO_MOOD = {
  happy: 'happy',
  sad: 'sad',
  angry: 'neutral',
  neutral: 'neutral',
  surprised: 'excited',
  fearful: 'relaxed',
  disgusted: 'sad',
};

/**
 * Convert a raw FER-2013 emotion label to a MoodTunes mood key.
 *
 * @param {string} emotionLabel — one of the 7 EMOTION_LABELS
 * @returns {string} mood key recognised by MOODS_BY_VALUE
 */
export function mapEmotionToMood(emotionLabel) {
  return EMOTION_TO_MOOD[emotionLabel] || 'neutral';
}
