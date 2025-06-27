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
    <UIAccordion type="single" collapsible className="w-full space-y-4">
      {list.items.map((item) => (
        <AccordionItem
          value={item.key}
          key={item.key}
          className="rounded-2xl border-2 border-[#d14f4f]/30 bg-gradient-to-r from-orange-50 to-red-50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] overflow-hidden"
        >
          <AccordionTrigger className="px-6 py-4 hover:bg-gradient-to-r hover:from-red-50 hover:to-orange-100 transition-all duration-200 rounded-t-2xl [&[data-state=open]]:rounded-b-none">
            <span className="text-left">
              <span
                className={cn(
                  "font-bold text-[#d14f4f] text-lg flex items-center gap-2",
                )}
              >
                🎵 {item.title}
              </span>
              {item.shortDescription && (
                <span className={cn("font-medium text-red-600 block mt-1")}>
                  {item.shortDescription}
                </span>
              )}
            </span>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6 bg-gradient-to-br from-white to-orange-50 rounded-b-2xl border-t border-[#d14f4f]/20">
            <div className="pt-4">
              <p
                className={cn(
                  "font-light text-gray-700 leading-relaxed text-base",
                )}
              >
                ✨ {item.mediumDescription}
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </UIAccordion>
  );
}

export { Accordion };
