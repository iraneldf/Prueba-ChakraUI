import Image from 'next/image'
import styles from './page.module.css'
import {
  Badge,
  Box,
  Card,
  Flex,
  Heading,
  HStack,
  Input,
  Stack,
  Text
} from '@chakra-ui/react'
import Assignments from '@/views/home/assignments'
import ToolBar from '@/views/home/toolbar'
import TableSeccionHeader from '@/views/home/table-seccion/table-seccion-header'
import TableSeccion from '@/views/home/table-seccion'

export default function Home () {
  return (
    <Box
      width={'100%'}
      display={'flex'}
      flexDirection={'column'}
      gap={'1rem'}
      alignItems={'center'}
      justifyContent='start'
      padding={'1rem'}
    >
      <ToolBar />
      <TableSeccion />
    </Box>
  )
}
