import { cn } from '@/lib/utils'
import { GitHubLogoIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import React from 'react'
import { buttonVariants } from './ui/button'

export default function Nav() {
  return (
    <div className='absolute top-3 sm:top-8 w-full flex justify-center'>
        <Link
            href="https://github.com/jakobhoeg/shadcn-button-extended"
            className={cn(
              buttonVariants({ variant: "ghost", size: "icon" }),
              "h-12 w-12 rounded-full",
            )}
          >
            <GitHubLogoIcon className="h-8 w-8" />
          </Link>
    </div>
  )
}
