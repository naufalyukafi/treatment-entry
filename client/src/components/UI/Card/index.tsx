import { Card } from '@chakra-ui/react'
const CardForm = ({ children }: { children: React.ReactNode }) => {
    return (
        <Card bg="#FFFAFA" display="flex" justifyContent="center" p="10" w={{ base: '100%', md: "50%" }}>
            {children}
        </Card>
    )
}

export default CardForm