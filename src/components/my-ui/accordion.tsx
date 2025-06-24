import {
  Accordion as UIAccordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { Item } from "@/config/pages/products";
import { cn } from "@/lib/utils";

type Props = {
  list: {
    items: Item[];
  };
};

function Accordion({ list }: Props) {
  return (
    <UIAccordion type="single" collapsible className="w-full">
      {list.items.map((item) => (
        <AccordionItem value={item.key} key={item.key}>
          <AccordionTrigger>
            <span>
              <span className={cn("font-bold")}>{item.title}</span>
              {item.shortDescription && (
                <span className={cn("font-medium")}>
                  {" - "}
                  {item.shortDescription}
                </span>
              )}
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <p className={cn("font-light")}>{item.mediumDescription}</p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </UIAccordion>
  );
}

export { Accordion };
