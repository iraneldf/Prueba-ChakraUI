'use client'
import * as React from 'react';

import AcordeonButtonsComponent from "@/components/SideBar/AcordeonButtonsComponent";
import {Box, Flex, Heading, HStack, Icon, Separator, Text, VStack} from "@chakra-ui/react";
import {MdGridView, MdMenu} from "react-icons/md";
import {SlGlobe, SlSettings} from "react-icons/sl";
import {LuBell, LuBookOpen, LuFileText, LuImage, LuServer} from "react-icons/lu";
import {RiTruckLine} from "react-icons/ri";
import {BiGift} from "react-icons/bi";
import {IoGameControllerOutline} from "react-icons/io5";
import {AiOutlineDatabase} from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";


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

            px={"20px"}
            py={"30px"}
            bg="white"
            boxShadow="none"
        >
            <Flex direction="column" justify-conten={"center"}  width={"229px"}>
                {/* Título del sidebar */}
                <Box width={"229px"} aling={"center"}  height="68px" display="flex" alignItems="center" justifyContent="center" mb={"49px"}>
                    <Image
                        src={'/images/logo.png'}
                        alt={'Logo'}
                        objectFit={'cover'}
                        width={162}
                        height={64}
                        priority
                        quality={80}
                    />
                </Box>


                {/* Contenido del sidebar con cartas personalizadas */}
                <VStack gap={"5px"} align="stretch">
                    {menuItems.map((item, index) => (
                        <CustomHoverCard key={index} title={item.title} IconComponent={item.IconComponent}/>))}
                </VStack>


                {/* Separador */}
                <Separator my={"20px"} w={"229px"}/>

                {/* 2do Título del sidebar */}
                <Heading color={"#737791"} fontWeight="700" size="16px">Nomenclators</Heading>

                {/*<AcordeonButtonComponent/>*/}
                <AcordeonButtonsComponent/>
            </Flex>
        </Box>

    );
}

function CustomHoverCard({title, IconComponent}) {
    const [hovered, setHovered] = React.useState(false);

    return (
        <Link href={"/asdasd"}>
            <Box
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                transition="all 0.2s ease"
                bg={hovered ? "#FFF9EC" : "transparent"}
                color={hovered ? "#FF7500" : "#A0AEC0"}
                borderRadius="16px"
                px={"24px"}
                h={"60px"}
                boxShadow={"none"}
                display="flex"
                alignItems="center"
            >

                <HStack gap={"22px"}>
                    {/* Icono y texto en una sola línea */}
                    <Icon fontSize="24px" color={hovered ? "#FF7500" : "#A0AEC0"}>
                        <IconComponent/>
                    </Icon>
                    <Heading fontWeight="600" size="14px" >{title}</Heading>

                </HStack>


            </Box>
        </Link>);
}
