import { useState } from 'react'
import {
  Input,
  InputLeftElement,
  InputRightElement,
  Button,
  Center,
  Grid,
  Heading,
  useDisclosure,
  InputGroup,
} from '@chakra-ui/react'

import { ModalView } from './components/ModalView.component'
import { Dashboard } from './components/Dashboard.component'
import { SpentsTable } from './components/SpentsTable.component'
import { Form } from './components/Form.component'

const App = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [spents] = useState([])

  return (
    <main>
      <Heading as="h1" marginBlock="6" textAlign="center">
        Gasto Semanal
      </Heading>
      <InputGroup m="0 auto" mb="3" size="md" width="30%">
        <InputLeftElement
          color="gray.300"
          fontSize="1.2rem"
          pointerEvents="none"
        >
          $
        </InputLeftElement>
        <Input placeholder="e.j. 1500" />
        <InputRightElement w="10rem">
          <Button h="1.75rem" size="sm">
            Definir Presupuesto
          </Button>
        </InputRightElement>
      </InputGroup>
      <Center mb="6">
        <Button w="30%" onClick={onOpen}>
          Agregar gasto
        </Button>
      </Center>
      <ModalView isOpen={isOpen} onClose={onClose}>
        <Form />
      </ModalView>
      <Grid m="0 auto" templateColumns="repeat(2,1fr)" width="80%">
        <Dashboard />
        <SpentsTable spents={spents} />
      </Grid>
    </main>
  )
}

export default App
