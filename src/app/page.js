import Image from "next/image";
import styles from "./page.module.css";
import {Badge, Box, Center, Flex, HStack, Stack, VStack} from "@chakra-ui/react";
import {Button} from "@/components/ui/button";


export default function Home() {
    return (
        <div>
            <Flex>
                <Box  w="full">
                    <HStack pt={"5%"}>
                        <Stack direction="row" spacing={2}>
                            <Badge>Default</Badge>
                            <Badge colorPalette="green">Success</Badge>
                            <Badge colorPalette="red" variant="outline">Removed</Badge>
                            <Badge colorPalette="purple" variant="outline">New</Badge>
                        </Stack>
                        <HStack>
                            <Button>Click me</Button>
                            <Button>Click me</Button>
                        </HStack>
                    </HStack>


                </Box>

            </Flex>



            <Center w="80%" h="200px">
                <Box
                    bg="gray.100"
                    border="1px solid black"
                    p={4}
                >
                    Este es un box gris con solo la esquina superior izquierda ovalada
                </Box>


            </Center>


        </div>
    );
}
