import { Flex } from '@chakra-ui/react';
import Main from './Main';
import MainNavbar from './Navbar';


const MainLayout = ({ children }) => {
    //   const mainTextColor = useMainTextColorValue();
    //   const mainTextColorReverse = useMainTextColorValue(false, true);
    // const isLoggedIn = useStore((state) => state.isLoggedIn);
    //   const { isAuth } = useStore()

    // console.log('is auth test ', isAuth)

    return (
        <Flex
            flexDirection="column"
            bg={"white"}
            //   color={mainTextColor}
            minH="100vh"
        >
            <MainNavbar />
            <Main>{children}</Main>
        </Flex>
    );
};

export default MainLayout;