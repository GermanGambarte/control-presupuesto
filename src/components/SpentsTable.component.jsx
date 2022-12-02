import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
  Button,
} from '@chakra-ui/react'

export const SpentsTable = ({ spents }) => {
  return (
    <TableContainer>
      <Table w="80%">
        <Thead>
          <Tr>
            <Th>Motivo</Th>
            <Th>Monto</Th>
            <Th>Opciones</Th>
          </Tr>
        </Thead>
        <Tbody>
          {spents.map((spent) => (
            <Tr key={spent.id}>
              <Td>{spent.motive}</Td>
              <Td>{spent.amount}</Td>
              <Td display="flex" justifyContent="space-around">
                <Button>Editar</Button>
                <Button>Eliminar</Button>
              </Td>
            </Tr>
          ))}
          <Tr>
            <Td>Motivo</Td>
            <Td>$0,00</Td>
            <Td display="flex" justifyContent="space-around">
              <Button>Editar</Button>
              <Button>Eliminar</Button>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  )
}
