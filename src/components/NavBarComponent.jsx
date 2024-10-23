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
import {Avatar} from "@/components/ui/avatar";

export default function NavBarComponent() {
    const {isOpen, onOpen, onClose} = useDisclosure();

    return (
        <Flex
            as="header"
            align="center"
            justify="space-between"
            height={"85px"}
            bg="white" // Cambiado a blanco
        >
            <BreadcrumbRoot ml={"20px"}>
                <BreadcrumbLink color={"#718096"}>Orders</BreadcrumbLink>
                <BreadcrumbLink color={"#2D3748"} fontWeight={"400"}>Orders</BreadcrumbLink>
            </BreadcrumbRoot>

            <Box mr={"20px"} display={{base: 'none', md: 'block'}}>
                <HStack gap={"10px"}>
                    <IconButton color={"#68CCE0"} aria-label="Call support" variant={"subtle"} rounded="full">
                        <SlGlobe/>
                    </IconButton>
                    <IconButton color={"#718EBF"}  aria-label="Call support" variant={"subtle"} rounded="full">
                        <SlSettings/>
                    </IconButton>
                    <Avatar ml={'10px'} name="Oshigaki Kisame" src="images/avatar.png" />
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
