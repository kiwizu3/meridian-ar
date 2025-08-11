'use client';
import { Accordion, AccordionItem } from '@nextui-org/react';
import { Chevron } from '@/components/icons';
import { AccordionProps } from '@/types';

export default function CustomAccordion(props: AccordionProps) {
  const itemClasses = {
    base: 'bg-cardGreen px-0 shadow-none',
    heading: '',
    titleWrapper: '',
    title: 'font-secondary font-normal text-base leading-8 text-gray50 ',
    trigger:
      'px-6 py-3 data-[hover=true]:bg-greeen2 capitalize data-[open=true]:bg-greeen2 rounded-xl h-fit flex items-center bg-white1/10',
    indicator: 'text-medium ',
    content: 'py-4 md:py-6 lg:pt-10 lg:pb-14 px-4',
  };
  return (
    <Accordion
      variant="splitted"
      itemClasses={itemClasses}
      className="px-0 gap-4"
      defaultExpandedKeys={['0']}
    >
      {props?.accordionItems?.map((items: any, index) => (
        <AccordionItem
          key={index}
          aria-label={items?.title}
          title={items?.title}
          className=""
          indicator={({ isOpen }) =>
            isOpen ? (
              <Chevron
                className="fill-white text-white -rotate-90"
                width={24}
                height={24}
              />
            ) : (
              <Chevron
                className="fill-white text-white"
                width={24}
                height={24}
              />
            )
          }
        >
          {items?.content}
        </AccordionItem>
      ))}
    </Accordion>
  );
}
