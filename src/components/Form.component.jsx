import {
  InputGroup,
  InputLeftElement,
  FormControl,
  FormLabel,
  Input,
  Button,
} from '@chakra-ui/react'

export const Form = () => {
  return (
    <FormControl action="">
      <FormLabel htmlFor="motive">Motivo:</FormLabel>
      <Input
        id="motive"
        name="motive"
        placeholder="e.j. Varios..."
        type="text"
      />
      <FormLabel htmlFor="amount">Monto:</FormLabel>
      <InputGroup>
        <InputLeftElement
          color="gray.300"
          fontSize="1.2rem"
          pointerEvents="none"
        >
          $
        </InputLeftElement>
        <Input d="amount" name="amount" placeholder="e.j. 500" type="number" />
      </InputGroup>
      <Button marginBlock="1rem" w="100%">
        Agregar a la lista
      </Button>
    </FormControl>
  )
}
