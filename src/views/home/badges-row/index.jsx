import { Badge, HStack, Stack } from '@chakra-ui/react'

const BadgesRow = () => {
  return (
    <HStack pt={'5%'}>
      <Stack direction='row' spacing={2}>
        <Badge>Default</Badge>
        <Badge colorPalette='green'>Success</Badge>
        <Badge colorPalette='red' variant='outline'>
          Removed
        </Badge>
        <Badge colorPalette='purple' variant='outline'>
          New
        </Badge>
      </Stack>
    </HStack>
  )
}

export default BadgesRow
