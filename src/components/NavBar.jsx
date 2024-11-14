
import React from 'react';
import { Box, Flex, HStack, Link, Button, useBreakpointValue } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import CartWidget from './CartWidget';  

const NavBar = () => {
  const displayMenuIcon = useBreakpointValue({ base: true, md: false });

  return (
    <Box as="header" bg="black" py={4}>
      <Flex maxW="1200px" mx="auto" align="center" justify="space-between" px={4}>
        <Box>
          <Link href="/" color="white" fontSize="xl" fontWeight="bold">
            CompraNOgamer
          </Link>
        </Box>

        {/* menu dispositivos graandes */}
        <HStack spacing={8} display={{ base: 'none', md: 'flex' }}>
          <Link href="/" color="white">Inicio</Link>
          <Link href="/shop" color="white">Tienda</Link>
          <Link href="/about" color="white">Nosotros</Link>
          <Link href="/contact" color="white">Contacto</Link>
          <Link href="/cart" color="white">Carrito</Link>
        </HStack>

        {/* menu disitivos chicos */}
        {displayMenuIcon && (
          <Button variant="ghost" color="white" aria-label="Abrir menú" leftIcon={<HamburgerIcon />} />
        )}

        {/* el cartwidget */}
        <CartWidget />
      </Flex>
    </Box>
  );
};

export default NavBar;
