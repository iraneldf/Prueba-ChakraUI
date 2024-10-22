import {Provider} from "@/components/ui/provider"

import {
    Box,
    Flex,
    DrawerOverlay,
    DrawerContent,
    DrawerHeader,
    DrawerFooter,
    DrawerBody,
    useDisclosure,
    IconButton,
    Icon,
    Button,
} from '@chakra-ui/react';

import NavBarComponent from "@/components/NavBarComponent";
import MySideBar from "@/components/SideBarComponent";

export default function RootLayout({children}) {

    return (
        <html lang='es' suppressHydrationWarning>
        <body>
        <Provider>
            <Flex direction="row" minHeight="100vh">
            {/*    /!* Barra de navegacion lateral *!/*/}
                <MySideBar/>

            {/*    /!* Main Content *!/*/}
                <Box flex="1" p={4}>
            {/*        /!* Barra navegacion superior *!/*/}
                    <NavBarComponent/>

                    <Box bg="gray.50" borderTopLeftRadius="60px" height={"full"} width={"100%"}>
                        {children}
                    </Box>
                </Box>
            </Flex>
        </Provider>
        </body>
        </html>
    );
}
