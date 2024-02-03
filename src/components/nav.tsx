'use client'

import { cn } from '@/lib/utils'
import { GitHubLogoIcon, StarFilledIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import React from 'react'
import { buttonVariants } from './ui/button'

export default function Nav() {
  const [isHovered, setIsHovered] = React.useState(false);



  return (
    <div className='absolute top-1 sm:top-8 w-full flex justify-center'>
        <Link
            href="https://github.com/jakobhoeg/enhanced-button"
            className={cn(
              buttonVariants({ variant: "ghost", size: "icon" }),
              "h-12 w-12 rounded-full relative",
            )}
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}
          >
            <GitHubLogoIcon className="h-8 w-8" />
                <StarFilledIcon className="h-4 w-4 text-yellow-400 absolute top-1 right-1 transition-all animate-bounce " />
          </Link>
    </div>
  )
}
