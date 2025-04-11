// 'use client'

// import { cn } from '@/lib/utils'
// import { useEffect, useState } from 'react'

// export const TypewriterEffect = ({
//   words = [],
//   className,
//   cursorClassName,
// }: {
//   words: {
//     text: string
//     className?: string
//   }[]
//   className?: string
//   cursorClassName?: string
// }) => {
//   const [displayedWords, setDisplayedWords] = useState<string[]>([])
//   const [currentIndex, setCurrentIndex] = useState(0)

//   useEffect(() => {
//     if (!words.length) return // Safety check for empty words

//     const wordAppearInterval = 550 // 0.55s between words
//     const displayDuration = 3000 // 3s pause after full sentence

//     const addWord = () => {
//       setDisplayedWords((prev) => [...prev, words[currentIndex].text])
//       setCurrentIndex((prev) => prev + 1)
//     }

//     if (currentIndex < words.length) {
//       const wordTimer = setTimeout(addWord, wordAppearInterval)
//       return () => clearTimeout(wordTimer)
//     } else {
//       // Reset after display duration
//       const resetTimer = setTimeout(() => {
//         setDisplayedWords([])
//         setCurrentIndex(0)
//       }, displayDuration)

//       return () => clearTimeout(resetTimer)
//     }
//   }, [currentIndex, words])

//   return (
//     <div className={cn('flex items-center text-3xl font-bold', className)}>
//       <div className="flex flex-nowrap items-center overflow-hidden">
//         {displayedWords.map((text, idx) => (
//           <span key={idx} className={cn('mr-2', words[idx]?.className || '')}>
//             {text}
//           </span>
//         ))}
//         <span
//           className={cn(
//             'ml-1 inline-block h-6 w-[3px] animate-blink bg-primary',
//             cursorClassName
//           )}
//         />
//       </div>
//     </div>
//   )
// }
'use client'

import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'

export const TypewriterEffect = ({
  words = [],
  className,
  cursorClassName,
}: {
  words: {
    text: string
    className?: string
  }[]
  className?: string
  cursorClassName?: string
}) => {
  const [displayedWords, setDisplayedWords] = useState<string[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (!words.length) return

    const wordAppearInterval = 550
    const displayDuration = 3000

    const addWord = () => {
      setDisplayedWords((prev) => [...prev, words[currentIndex].text])
      setCurrentIndex((prev) => prev + 1)
    }

    if (currentIndex < words.length) {
      const wordTimer = setTimeout(addWord, wordAppearInterval)
      return () => clearTimeout(wordTimer)
    } else {
      const resetTimer = setTimeout(() => {
        setDisplayedWords([])
        setCurrentIndex(0)
      }, displayDuration)

      return () => clearTimeout(resetTimer)
    }
  }, [currentIndex, words])

  return (
    <div className={cn('text-xl sm:text-2xl md:text-3xl font-bold', className)}>
      <div className="flex flex-wrap justify-center items-center gap-x-2 gap-y-1 text-center">
        {displayedWords.map((text, idx) => {
          const isLast = idx === displayedWords.length - 1
          return isLast ? (
            <span key={idx} className="flex items-center gap-1">
              <span className={cn(words[idx]?.className || '')}>{text}</span>
              <span
                className={cn(
                  'inline-block h-6 w-[2px] animate-blink bg-primary',
                  cursorClassName
                )}
              />
            </span>
          ) : (
            <span key={idx} className={cn(words[idx]?.className || '')}>
              {text}
            </span>
          )
        })}
      </div>
    </div>
  )
}
