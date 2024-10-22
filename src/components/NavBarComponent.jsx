'use client'
import {
    Box,
    Flex,
    Icon,
    IconButton,
    useDisclosure,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    HStack
} from "@chakra-ui/react";
import {BreadcrumbCurrentLink, BreadcrumbRoot} from "@/components/ui/breadcrumb";
import {SlGlobe, SlSettings} from "react-icons/sl";
import {SlUser} from "react-icons/sl";

export default function NavBarComponent() {
    const {isOpen, onOpen, onClose} = useDisclosure();

    return (
        <Flex
            as="header"
            align="center"
            justify="space-between"
            mb={4}
            bg="white" // Cambiado a blanco
            p={2}
        >
            <BreadcrumbRoot ml={"20px"}>
                <BreadcrumbLink color={"gray.400"}>Orders</BreadcrumbLink>
                <BreadcrumbLink>Orders</BreadcrumbLink>
            </BreadcrumbRoot>

            <Box display={{base: 'none', md: 'block'}}>
                <HStack spacing={"4"}>
                    <IconButton color={"blue.300"} aria-label="Call support" variant={"subtle"} rounded="full">
                        <SlGlobe/>
                    </IconButton>
                    <IconButton color={"purple"} aria-label="Call support" variant={"subtle"} rounded="full">
                        <SlSettings/>
                    </IconButton>
                    <IconButton color={"blue.200"} aria-label="Call support" variant={"subtle"} rounded="full">
                        <SlUser/>
                    </IconButton>
                </HStack>

            </Box>


            <IconButton
                icon={<Icon name="menu"/>}
                aria-label="Open Menu"
                display={{base: 'inline-flex', md: 'none'}}
                onClick={onOpen}
            />
        </Flex>
    );
}
