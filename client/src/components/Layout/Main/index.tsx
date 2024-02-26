import { Box, Container } from '@chakra-ui/react';
import BgLayout from '/bg-layout.png';

const Main = ({ children }) => (
    <Box
        as="main"
        flexGrow={1}
        bgImg={`url("${BgLayout}")`}
        bgPos="bottom"
        bgRepeat="no-repeat"
        bgSize="contain"
    >
        <Container minW="85%">
            {children}
        </Container>
    </Box>
);

export default Main;