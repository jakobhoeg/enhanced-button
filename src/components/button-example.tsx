import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Button, ButtonProps } from "./ui/button";
import { exampleButtonIconRight } from "@/code";
import CodeblockButton from "./codeblock-buttons";


interface ButtonExampleProps {
    Icon?: React.ElementType;
    iconPlacement?: "left" | "right";
    text: string;
    variant: ButtonProps["variant"];
    code: string;
}

const ButtonExample: React.FC<ButtonExampleProps> = ({ Icon, iconPlacement, text, variant, code }) => {
  return (
    <Tabs defaultValue="button" className="">
      <TabsList className="w-full">
        <TabsTrigger value="button">Example</TabsTrigger>
        <TabsTrigger value="tailwind">Code</TabsTrigger>
      </TabsList>
      <TabsContent value="button" className="h-full">
        <div className=" border h-52 flex justify-center items-center rounded-lg bg-background shadow-sm">
          <Button
            variant={variant}
            Icon={Icon!}
            iconPlacement={iconPlacement!}
          >
            {text}
          </Button>
        </div>
      </TabsContent>
      <TabsContent value="tailwind">
        <CodeblockButton component={variant!} code={code} lang="tsx" />
      </TabsContent>
    </Tabs>
  );
}

export default ButtonExample;