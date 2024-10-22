'use client'
import * as React from 'react';

import AcordeonButtonsComponent from "@/components/AcordeonButtonsComponent";
import {Box, Flex, Heading, HStack, Icon, Text, VStack} from "@chakra-ui/react";
import {MdGridView, MdMenu} from "react-icons/md";
import {SlGlobe, SlSettings} from "react-icons/sl";
import {LuBell, LuBookOpen, LuFileText, LuImage, LuServer} from "react-icons/lu";
import {RiTruckLine} from "react-icons/ri";
import {BiGift} from "react-icons/bi";
import {IoGameControllerOutline} from "react-icons/io5";
import {AiOutlineDatabase} from "react-icons/ai";


export default function MySideBar() {
    const menuItems = [{title: 'Dashboard', IconComponent: MdGridView}, {
        title: 'Orders', IconComponent: LuFileText
    }, {title: 'Banners', IconComponent: LuImage}, {
        title: 'Public Info', IconComponent: LuBookOpen
    }, {title: 'Notifications', IconComponent: LuBell}, {
        title: 'Roulette Game', IconComponent: IoGameControllerOutline
    }, {title: 'Inventaries', IconComponent: AiOutlineDatabase}, {title: 'Coupons', IconComponent: BiGift}, {
        title: 'Shippings', IconComponent: RiTruckLine
    },];
    return (

        <Box
            as="nav"
            pos="relative"
            top="0"
            left="0"
            width="250px"
            height="100vh"
            bg="white"
            boxShadow="none"
        >
            <Flex direction="column" p={4}>
                {/* Título del sidebar */}
                <Heading mb={50} size="md">Logo</Heading>

                {/* Contenido del sidebar con cartas personalizadas */}
                <VStack spacing={4} align="stretch">
                    {menuItems.map((item, index) => (
                        <CustomHoverCard key={index} title={item.title} IconComponent={item.IconComponent}/>))}
                </VStack>


                {/* Separador */}


                {/* 2do Título del sidebar */}
                <Heading mt={50} color={"gray.500"} size="md">Nomenclators</Heading>

                {/*<AcordeonButtonComponent/>*/}
                <AcordeonButtonsComponent/>
            </Flex>
        </Box>

    );
}

function CustomHoverCard({title, IconComponent}) {
    const [hovered, setHovered] = React.useState(false);

    return (<Box
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        transition="all 0.2s ease"
        bg={hovered ? "orange.100" : "transparent"}
        color={hovered ? "orange.500" : "gray.400"}
        borderRadius="2xl"
        padding={4}
        boxShadow={"none"}
    >
        <HStack spacing={2}>
            {/* Icono y texto en una sola línea */}
            <Icon fontSize="30px" mr={"15px"} color={hovered ? "orange.500" : "gray.400"}>
                <IconComponent/>
            </Icon>
            <Heading size="sm">{title}</Heading>

        </HStack>

    </Box>);
}
