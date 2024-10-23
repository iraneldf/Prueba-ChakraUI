import {AbsoluteCenter, Box, Button} from "@chakra-ui/react"
import {
    AccordionItem,
    AccordionItemContent,
    AccordionItemTrigger,
    AccordionRoot,
} from "@/components/ui/accordion"


export default function AcordeonButtonsComponent() {
    const items = [
        {value: "a", title: "Client", text: 'asdasd'},
    ];

    return (
        <AccordionRoot spaceY="4" m="5" variant="plain" collapsible defaultValue={["b"]}>
            {items.map((item, index) => (
                <AccordionItem key={index} value={item.value}>

                    <Box position="relative">
                        <AccordionItemTrigger indicatorPlacement="start">
                            {item.title}
                        </AccordionItemTrigger>

                    </Box>
                    <AccordionItemContent>{item.text}</AccordionItemContent>
                </AccordionItem>
            ))}
        </AccordionRoot>
    );
}
