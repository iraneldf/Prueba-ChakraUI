import {AbsoluteCenter, Box, Button} from "@chakra-ui/react"
import {
    AccordionItem,
    AccordionItemContent,
    AccordionItemTrigger,
    AccordionRoot,
} from "@/components/ui/accordion"


export default function AcordeonButtonsComponent() {
    const items = [
        {value: "a", title: "First Item", text: 'asdasd'},
        {value: "a", title: "First Item", text: 'asdasd'},
        {value: "a", title: "First Item", text: 'asdasd'},
    ];

    return (
        <AccordionRoot spaceY="4" m="5" variant="plain" collapsible defaultValue={["b"]}>
            {items.map((item, index) => (
                <AccordionItem key={index} value={item.value}>

                    <Box position="relative">
                        <AccordionItemTrigger indicatorPlacement="start">
                            {item.title}
                        </AccordionItemTrigger>

                        <AbsoluteCenter axis="vertical" insetEnd="0">
                            <Button variant="subtle" colorPalette="blue">
                                Action
                            </Button>
                        </AbsoluteCenter>
                    </Box>
                    <AccordionItemContent>{item.text}</AccordionItemContent>
                </AccordionItem>
            ))}
        </AccordionRoot>
    );
}
