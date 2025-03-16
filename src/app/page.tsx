import CodeDisplayBlock from '@/components/code-display-block';
import Nav from '@/components/nav';
import TailwindCodeblock from '@/components/tailwind_codeblock';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeftIcon, ArrowRightIcon, TrashIcon } from '@radix-ui/react-icons';
import { buttonCode } from '@/code';
import ButtonExample from '@/components/button-example';

// workaround to get the icons to display in the codeblock
ArrowRightIcon.displayName = 'ArrowRightIcon';
ArrowLeftIcon.displayName = 'ArrowLeftIcon';

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-between">
      <div className="absolute  h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      <div className="z-10 px-5 text-center max-w-8xl w-full h-full items-center  text-sm flex flex-col gap-5">
        <Nav />
        <div className="min-h-screen text-center max-w-8xl w-full items-center  text-sm flex flex-col gap-5">
          <div className="flex flex-col gap-1 sm:gap-4 pt-14 sm:pt-32 items-center justify-center">
            <div>
              <h1 className="text-3xl font-medium sm:text-6xl">Enhanced version of</h1>
              <h1 className="text-3xl font-medium sm:text-6xl animate-text-gradient bg-gradient-to-r from-zinc-900 via-zinc-500 to-zinc-500 bg-[150%_auto] bg-clip-text leading-tight text-transparent ">
                shadcn-button component.
              </h1>
            </div>
            <p className="text-base max-w-prose sm:text-lg pt-5">
              Easily expand the regular shadcn-button component with new button styles, without the need of creating new additional button components.
            </p>
          </div>

          <div className="pt-4 md:max-w-3xl max-w-sm flex">
            <Tabs defaultValue="button" className="">
              <TabsList className="w-full">
                <TabsTrigger value="button">button.tsx</TabsTrigger>
                <TabsTrigger value="tailwind">tailwind.config.ts</TabsTrigger>
              </TabsList>
              <TabsContent value="button">
                <CodeDisplayBlock component="src/components/ui/button.tsx" code={buttonCode} lang="tsx" />
              </TabsContent>
              <TabsContent value="tailwind">
                <TailwindCodeblock />
              </TabsContent>
            </Tabs>
          </div>

          <p className="text-xs md:text-sm pt-3"> ✨ Simply copy & paste the code above and use it in your project.</p>
        </div>

        <div className="w-full flex flex-col justify-center items-center mt-16 md:mt-10 mb-14 gap-20">
          <div className="flex flex-col gap-5">
            <h1 className="text-4xl font-medium">Examples & Usage</h1>
            <p className="text-sm max-w-prose sm:text-base">
              All the button variants below are available in the new shadcn-button component. Easily reuse them anywhere in your project.
            </p>
          </div>

          <div className="max-w-sm lg:max-w-4xl grid gap-10 lg:grid-cols-2 grid-flow-row w-full">
            <ButtonExample text="Icon right" effect="expandIcon" icon={ArrowRightIcon} iconPlacement="right" />
            <ButtonExample text="Icon left" effect="expandIcon" icon={ArrowLeftIcon} iconPlacement="left" />
            <ButtonExample text="Gooey left" effect="gooeyLeft" />
            <ButtonExample text="Gooey right" effect="gooeyRight" />
            <ButtonExample text="Shine" effect="shine" />
            <ButtonExample text="Shine Hover" effect="shineHover" />
            <ButtonExample text="Ring hover" effect="ringHover" />
            <ButtonExample text="Link hover underline" variant="link" effect="hoverUnderline" />
            <ButtonExample text="Link underline" variant="link" effect="underline" />
            <ButtonExample text='Gradient slide show' effect="gradientSlideShow" />
          </div>
        </div>

        <div className="w-full flex flex-col justify-center items-center mt-16 md:mt-10 mb-14 gap-20">
          <div className="flex flex-col gap-5">
            <h1 className="text-4xl font-medium">Mixed Usage</h1>
            <p className="text-sm max-w-prose sm:text-base">Here are some examples of how you can mix the different button variants together.</p>
          </div>

          <div className="max-w-sm lg:max-w-4xl grid gap-10 lg:grid-cols-2 grid-flow-row w-full">
            <ButtonExample variant="destructive" text="Destructive Icon right" effect="expandIcon" icon={TrashIcon} iconPlacement="right" />
            <ButtonExample
              className="bg-blue-500 hover:bg-blue-400"
              text="Custom Ghost Icon left"
              effect="expandIcon"
              icon={ArrowLeftIcon}
              iconPlacement="left"
            />
            <ButtonExample variant="secondary" text="Secondary Gooey left" effect="gooeyLeft" />
            <ButtonExample variant="destructive" text="Destructive Gooey right" effect="gooeyRight" />
            <ButtonExample variant="destructive" text="Destructive Shine" effect="shine" />
            <ButtonExample className="bg-blue-500 hover:bg-blue-400" text="Custom Shine Hover" effect="shineHover" />
            <ButtonExample variant="outline" text="Outline Ring hover" effect="ringHover" />
            <ButtonExample variant="outline" text="Outline Link hover underline" effect="hoverUnderline" />
            <ButtonExample variant="outline" text="Outline Link underline" effect="underline" />
          </div>
        </div>

        <footer className="w-full h-24 mb-10  flex items-center justify-center">
          <p className="text-xs">
            Check out the{' '}
            <a href="https://github.com/jakobhoeg/enhanced-button" className="font-bold">
              Github
            </a>{' '}
            page for more information.
          </p>
        </footer>
      </div>
    </main>
  );
}
