function _nullishCoalesce(lhs, rhsFn) {
  if (lhs != null) {
    return lhs
  } else {
    return rhsFn()
  }
}
;('use client')

import {
  Button,
  FileUpload as ChakraFileUpload,
  Icon,
  IconButton,
  Span,
  Stack,
  Text,
  VStack,
  useFileUploadContext,
  useRecipe,
} from '@chakra-ui/react'
import { forwardRef } from 'react'
import { RiDeleteBinLine, RiFileLine, RiUploadLine } from 'react-icons/ri'

export const FileUploadRoot = forwardRef(function FileUploadRoot(props, ref) {
  const { children, inputProps, ...rest } = props
  return (
    <ChakraFileUpload.Root alignItems='flex-start' {...rest}>
      <ChakraFileUpload.HiddenInput ref={ref} {...inputProps} />
      {children}
    </ChakraFileUpload.Root>
  )
})

export const FileUploadTrigger = ChakraFileUpload.Trigger

export const FileUploadDropzone = forwardRef(
  function FileUploadDropzone(props, ref) {
    const { children, label, description, ...rest } = props
    return (
      <ChakraFileUpload.Dropzone ref={ref} {...rest}>
        <Icon fontSize='xl' color='fg.muted'>
          <RiUploadLine />
        </Icon>
        <VStack gap='1' mt='1' textAlign='center' textStyle='sm'>
          <div>{label}</div>
          {description && <Text color='fg.muted'>{description}</Text>}
        </VStack>
        {children}
      </ChakraFileUpload.Dropzone>
    )
  },
)

const FileUploadItem = (props) => {
  const { file, showSize, showDelete } = props
  return (
    <ChakraFileUpload.Item file={file}>
      <ChakraFileUpload.ItemPreview asChild>
        <Icon fontSize='lg' color='fg.muted'>
          <RiFileLine />
        </Icon>
      </ChakraFileUpload.ItemPreview>

      {showSize ? (
        <Stack gap='0.5' flex='1' pe='4'>
          <ChakraFileUpload.ItemName lineClamp='1' />
          <ChakraFileUpload.ItemSizeText />
        </Stack>
      ) : (
        <ChakraFileUpload.ItemName lineClamp='1' flex='1' pe='4' />
      )}

      {showDelete && (
        <ChakraFileUpload.ItemDeleteTrigger asChild>
          <IconButton variant='ghost' color='fg.muted'>
            <RiDeleteBinLine />
          </IconButton>
        </ChakraFileUpload.ItemDeleteTrigger>
      )}
    </ChakraFileUpload.Item>
  )
}

export const FileUploadList = forwardRef(function FileUploadList(props, ref) {
  const { showSize, showDelete, files, ...rest } = props

  const fileUpload = useFileUploadContext()
  const acceptedFiles = _nullishCoalesce(files, () => fileUpload.acceptedFiles)

  if (acceptedFiles.length === 0) return null

  return (
    <ChakraFileUpload.ItemGroup ref={ref} {...rest}>
      {acceptedFiles.map((file) => (
        <FileUploadItem
          key={file.name}
          file={file}
          showSize={showSize}
          showDelete={showDelete}
        />
      ))}
    </ChakraFileUpload.ItemGroup>
  )
})

export const FileInput = forwardRef(function FileInput(props, ref) {
  const inputRecipe = useRecipe({ key: 'input' })
  const [recipeProps, restProps] = inputRecipe.splitVariantProps(props)
  const { placeholder = 'Select file(s)', ...rest } = restProps
  return (
    <ChakraFileUpload.Trigger asChild>
      <Button
        unstyled
        py='0'
        ref={ref}
        {...rest}
        css={[inputRecipe(recipeProps), props.css]}
      >
        <ChakraFileUpload.Context>
          {({ acceptedFiles }) => {
            if (acceptedFiles.length === 1) {
              return <span>{acceptedFiles[0].name}</span>
            }
            if (acceptedFiles.length > 1) {
              return <span>{acceptedFiles.length} files</span>
            }
            return <Span color='fg.subtle'>{placeholder}</Span>
          }}
        </ChakraFileUpload.Context>
      </Button>
    </ChakraFileUpload.Trigger>
  )
})

export const FileUploadLabel = ChakraFileUpload.Label
export const FileUploadClearTrigger = ChakraFileUpload.ClearTrigger
