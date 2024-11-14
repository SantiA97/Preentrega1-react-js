
import React from 'react';
import { Box, IconButton, Badge } from '@chakra-ui/react';
import { FaShoppingCart } from 'react-icons/fa'; 

const CartWidget = () => {
  const cartItemCount = 5;  

  return (
    <Box position="relative">
      <IconButton
        icon={<FaShoppingCart />}
        aria-label="Carrito de compras"
        colorScheme="teal"
        variant="ghost"
        fontSize="24px"
      />
      <Badge
        colorScheme="red"
        position="absolute"
        top="-5px"
        right="-5px"
        borderRadius="full"
        px={2}
        py={1}
        fontSize="sm"
      >
        {cartItemCount}
      </Badge>
    </Box>
  );
};

export default CartWidget;
