'use client'

// Tools
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { usePathname } from 'next/navigation'

// Types
import { TextBlockType } from "@/types/components/text-block-type"

// Components
import NormalText from "@/components/normal-text"

// Function to sanitize content alignment
const sanitizeContentAlignment = (alignment: string) => {
  return alignment.replace(/[\u200B-\u200D\uFEFF]/g, '')
}

const TextBlock: React.FC<TextBlockType> = ({
  active,
  componentIndex,
  anchor,
  content,
  contentAlignment,
}) => {
  const [alignmentStyles, setAlignmentStyles] = useState({})
  const pathName = usePathname()

  useEffect(() => {
    const sanitizedAlignment = sanitizeContentAlignment(contentAlignment)

    if (sanitizedAlignment === 'left') {
      setAlignmentStyles({ justifyContent: 'flex-start', textAlign: 'left' })
    } else if (sanitizedAlignment === 'center') {
      setAlignmentStyles({ justifyContent: 'center', textAlign: 'center' })
    } else if (sanitizedAlignment === 'right') {
      setAlignmentStyles({ justifyContent: 'flex-end', textAlign: 'right' })
    }
  }, [contentAlignment])

  console.log('TextBlock rendered', {
    active,
    componentIndex,
    anchor,
    content,
    contentAlignment,
    alignmentStyles,
    pathName
  })

  if (active) {
    return (
      <section
        id={`${anchor ? anchor : 'text-block-' + componentIndex}`}
        className={`w-full flex flex-col items-center`}
      >
        {content && (
          <motion.div 
            className={`w-full max-w-2xl content`}
            initial={{ 
              opacity: 0,
              scale: 0.95
            }}
            whileInView={{ 
              opacity: 1,
              scale: 1
            }}
            viewport={{ once: true }} 
            transition={{ 
              delay: componentIndex !== 0 ? 0.5 : 0,
              type: 'spring',
              duration: 1.5
            }}
            style={alignmentStyles}
          >
            <NormalText content={content} />
          </motion.div>
        )}
      </section>
    )
  }

  return null
}

export default TextBlock
