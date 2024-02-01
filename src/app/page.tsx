import CodeBlockk from "@/components/codeblockk";
import Nav from "@/components/nav";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between">
      <div className="absolute  h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      <div className="z-10 text-center max-w-8xl w-full h-full items-center  text-sm flex flex-col gap-5">
        <Nav />
        <div className="flex flex-col gap-4 pt-20 sm:pt-32 items-center justify-center">
          <div>
          <h1 className="text-3xl font-medium sm:text-6xl">Extended, ready to use</h1>
          <h1 className="text-3xl font-medium sm:text-6xl animate-text-gradient bg-gradient-to-r from-zinc-900 via-zinc-500 to-zinc-500 bg-[150%_auto] bg-clip-text leading-tight text-transparent ">shadcn-button component.</h1>
          </div>
          <p className="text-base max-w-prose sm:text-lg pt-5">All it takes is <strong>one</strong> copy-paste into your project, and you're good to go. Get started by copying the code below and overwrite your existing code inside <strong>src/components/ui/button.tsx</strong></p>
        </div>

        <div className="pt-4"> 
        <CodeBlockk />

        </div>


        <div className=" flex flex-col gap-5 items-center justify-center w-full">
        <Button variant="expandIcon" Icon={ArrowRightIcon} iconPlacement="right">
          Icon right
        </Button>
        <Button variant="expandIcon" Icon={ArrowLeftIcon} iconPlacement="left">
          Icon left
        </Button>
        <Button className="w-24" variant="shine">
          Shine
        </Button>
        <Button className="w-24" variant="hoverRing">
          Ring
        </Button>
        <Button variant="linkHover">
          Link hover 1
        </Button>
        <Button variant="linkHover2">
          Link hover 2
        </Button>
        </div>
      </div>
    </main>
  );
}
