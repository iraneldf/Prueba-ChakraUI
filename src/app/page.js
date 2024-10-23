import Image from "next/image";
import styles from "./page.module.css";
import {
    Badge,
    Box,
    Card,
    Flex, For, Heading,
    HStack, Input, Spacer,
    Stack, Text,
} from "@chakra-ui/react";
import {Button} from "@/components/ui/button";
import {Avatar} from "@/components/ui/avatar"
import {Field} from "@/components/ui/field";


export default function Home() {
    return (
        <div>
            <Flex direction="row" justifyContent="flex-end">
                <Box w="full">
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


            <Box m={"50px"} w={{base: "100%", md: "95%"}}>
                <Flex direction="row" gap={"10"} alignItems="stretch">

                    <Card.Root border={"none"} boxShadow="xs" borderRadius="10px" flex={"4"}>
                        <Card.Header>
                            <Flex direction="row" alignItems="center" justifyContent="space-between">
                                <Box>
                                    <Heading fontWeight="bold" size="lg">Orders</Heading>
                                    <Text textStyle="sm" color={"gray"}>Order Summary</Text>
                                </Box>

                                <Box>
                                    <HStack spacing={4}>

                                        <Input name="email" type="date"/>
                                        <Input name="email" type="date"/>

                                    </HStack>
                                </Box>

                            </Flex>
                        </Card.Header>
                        <Card.Body/>
                        <Card.Footer/>
                    </Card.Root>

                    <Card.Root flex={"1"} borderRadius="10px">
                        <Card.Header>
                            <Heading fontWeight="bold" size="lg">Assignments</Heading>
                        </Card.Header>
                        <Card.Body/>
                        <Card.Footer/>
                    </Card.Root>

                </Flex>
            </Box>


        </div>
    );
}
