import {
    Box,
    HStack,
    Link,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Avatar,
    Button,
    Flex
} from '@chakra-ui/react';

const MainNavbar = () => {
    const renderProfile = () => (
        <Menu>
            <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                    size={'sm'}
                    src={
                        'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                    }
                />
            </MenuButton>
            <MenuList>
                <MenuItem>Profile</MenuItem>
            </MenuList>
        </Menu>
    )
    // const Links = ['Dashboard', 'Patien']

    // const NavLink = (props: any) => {
    //     const { children } = props
    //     return (
    //         <Box
    //             as="a"
    //             px={2}
    //             py={1}
    //             rounded={'md'}
    //             _hover={{
    //                 textDecoration: 'none',
    //                 bg: useColorModeValue('gray.200', 'gray.700'),
    //             }}
    //             href={'#'}>
    //             {children}
    //         </Box>
    //     )
    // }
    return (
        <Box as="header" p="4" bg="white" shadow="md" zIndex="1" >
            <Flex
                maxW="80rem"
                mx="auto"
                justifyContent="space-between"
                display={{ base: 'none', md: 'flex' }}
            >
                <Box className=''>
                    <Link as="a">
                        <img src={"./logo.png"} width={100} height={100} alt="CareNow" />
                    </Link>
                </Box>
                {/* <Box>
                    <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
                        {Links.map((link) => (
                            <NavLink key={link}>{link}</NavLink>
                        ))}
                    </HStack>
                </Box> */}
                <Box>
                    {renderProfile()}
                </Box>
            </Flex>

            {/* Mobile Devices */}
            <HStack
                justifyContent="space-between"
                display={{ base: 'flex', md: 'none' }}
            >
                <Link w="28" as="a">
                    <img src={"./logo.png"} width={100} height={100} alt="CareNow" />
                </Link>
            </HStack>
        </Box>
    );
};

export default MainNavbar;