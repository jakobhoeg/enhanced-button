import CodeDisplayBlock from "@/components/code-display-block";
import Nav from "@/components/nav";
import TailwindCodeblock from "@/components/tailwind_codeblock";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import { buttonCode, exampleButtonGooeyLeft, exampleButtonGooeyRight, exampleButtonIconLeft, exampleButtonIconRight, exampleButtonLinkHover1, exampleButtonLinkHover2, exampleButtonRingHover, exampleButtonShine, tailwindCode } from "@/code";
import ButtonExample from "@/components/button-example";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-between">
      <div className="absolute  h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      <div className="z-10 px-5 text-center max-w-8xl w-full h-full items-center  text-sm flex flex-col gap-5">
        <Nav />
        <div className="min-h-screen text-center max-w-8xl w-full items-center  text-sm flex flex-col gap-5">
        <div className="flex flex-col gap-1 sm:gap-4 pt-14 sm:pt-32 items-center justify-center">
          <div>
            <h1 className="text-3xl font-medium sm:text-6xl">
              Enhanced version of
            </h1>
            <h1 className="text-3xl font-medium sm:text-6xl animate-text-gradient bg-gradient-to-r from-zinc-900 via-zinc-500 to-zinc-500 bg-[150%_auto] bg-clip-text leading-tight text-transparent ">
              shadcn-button component.
            </h1>
          </div>
          <p className="text-base max-w-prose sm:text-lg pt-5">
            Easily expand the regular shadcn-button component with new button
            styles, without the need of creating new additional button components.
          </p>
        </div>

        <div className="pt-4 md:max-w-3xl max-w-sm flex">
          <Tabs defaultValue="button" className="">
            <TabsList className="w-full">
              <TabsTrigger value="button">button.tsx</TabsTrigger>
              <TabsTrigger value="tailwind">tailwind.config.ts</TabsTrigger>
            </TabsList>
            <TabsContent value="button">
              <CodeDisplayBlock
                component="src/components/ui/button.tsx"
                code={buttonCode}
                lang="tsx"
              />
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
          

          <ButtonExample text="Icon right" variant="expandIcon" Icon={ArrowRightIcon} iconPlacement="right" code={exampleButtonIconRight} />

          <ButtonExample text="Icon left" variant="expandIcon" Icon={ArrowLeftIcon} iconPlacement="left" code={exampleButtonIconLeft}/>

          <ButtonExample text="Gooey left" variant="gooeyLeft" code={exampleButtonGooeyLeft}/>
          <ButtonExample text="Gooey right" variant="gooeyRight" code={exampleButtonGooeyRight}/>

          <ButtonExample text="Shine" variant="shine" code={exampleButtonShine}/>


          <ButtonExample text="Ring hover" variant="ringHover" code={exampleButtonRingHover}/>

          <ButtonExample text="Link hover 1" variant="linkHover1" code={exampleButtonLinkHover1}/>

          <ButtonExample text="Link hover 2" variant="linkHover2" code={exampleButtonLinkHover2}/>
         


        </div>
        </div>
       <footer className="w-full h-24 mb-10  flex items-center justify-center">
        <p className="text-xs">Check out the <a href="https://github.com/jakobhoeg/enhanced-button" className="font-bold">Github</a> page for more information.</p>
      </footer>
       </div>


    </main>
  );
}
