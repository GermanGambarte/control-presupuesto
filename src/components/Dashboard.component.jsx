import {
  Box,
  CircularProgress,
  CircularProgressLabel,
  Text,
} from '@chakra-ui/react'

export const Dashboard = () => {
  return (
    <Box m="0 auto" w="80%">
      <CircularProgress size="300px" value={40}>
        <CircularProgressLabel fontSize="40px">
          40% <Text>Gastado</Text>
        </CircularProgressLabel>
      </CircularProgress>
      <Box>
        <Text>Presupuesto: $00,00</Text>
        <Text>Disponible: $00,00</Text>
        <Text>Gastado: $00,00</Text>
      </Box>
    </Box>
  )
}
