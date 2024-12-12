import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Button, ButtonIconProps, ButtonProps } from './ui/button';
import { generateExampleButtonCode } from '@/code';
import CodeblockButton from './codeblock-buttons';

export type ButtonExampleProps = Omit<ButtonProps & ButtonIconProps, 'children'> & {
  text: string;
};

const ButtonExample: React.FC<ButtonExampleProps> = (props: ButtonExampleProps) => {
  const { text } = props;
  return (
    <Tabs defaultValue="button" className="">
      <TabsList className="w-full">
        <TabsTrigger value="button">Example</TabsTrigger>
        <TabsTrigger value="tailwind">Code</TabsTrigger>
      </TabsList>
      <TabsContent value="button" className="h-full">
        <div className=" border h-52 flex justify-center items-center rounded-lg bg-background shadow-sm">
          <Button {...(props as ButtonProps & ButtonIconProps)}>{text}</Button>
        </div>
      </TabsContent>
      <TabsContent value="tailwind">
        <CodeblockButton component={props.variant!} code={generateExampleButtonCode(props)} lang="tsx" />
      </TabsContent>
    </Tabs>
  );
};

export default ButtonExample;
