/**
 * 🎬 Bollywood Movie Title Fixer
 *
 * Pappu ne ek movie database banaya hai lekin usne saare titles galat type
 * kar diye - kuch ALL CAPS mein, kuch all lowercase mein, kuch mein extra
 * spaces hain. Tu fix kar de titles ko proper Title Case mein!
 *
 * Rules:
 *   - Extra spaces hatao: leading, trailing, aur beech ke multiple spaces ko
 *     single space banao
 *   - Har word ka pehla letter uppercase, baaki lowercase (Title Case)
 *   - EXCEPTION: Chhote words jo Title Case mein lowercase rehte hain:
 *     "ka", "ki", "ke", "se", "aur", "ya", "the", "of", "in", "a", "an"
 *     LEKIN agar word title ka PEHLA word hai toh capitalize karo
 *   - Hint: Use trim(), split(), map(), join(), charAt(), toUpperCase(),
 *     toLowerCase(), slice()
 *
 * Validation:
 *   - Agar input string nahi hai, return ""
 *   - Agar string trim karne ke baad empty hai, return ""
 *
 * @param {string} title - Messy Bollywood movie title
 * @returns {string} Cleaned up Title Case title
 *
 * @example
 *   fixBollywoodTitle("  DILWALE   DULHANIA   LE   JAYENGE  ")
 *   // => "Dilwale Dulhania Le Jayenge"
 *
 *   fixBollywoodTitle("dil ka kya kare")
 *   // => "Dil ka Kya Kare"
 */
export function fixBollywoodTitle(title) {
  if (typeof title !== 'string') {
    return ''
  }
  const cleaned = title.trim().replace(/\s+/g, ' ')
  if (cleaned === '') {
    return ''
  }
  const word = cleaned.split(' ')
  const titleCase = ["ka", "ki", "ke", "se", "aur", "ya", "the", "of", "in", "a", "an"]
  const trimmed = title.trim()
  // const fixed1 = trimmed.map(trim => trim.charAt(0).toUpperCase() + trim.charAt(1).toLowerCase())
  const fixed = word.map((word, index) => {
    word = word.toLowerCase()

    if (index === 0) {
      return word.charAt(0).toUpperCase() + word.slice(1)
    }
    if (titleCase.includes(word)) {
      return word
    }
    return word.charAt(0).toUpperCase() + word.slice(1)
  })
  return fixed.join(' ')
}
