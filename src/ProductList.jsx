import { useState, useEffect } from 'react';
import {
  Card, CardContent, CardMedia, Typography, Button,
  Grid, Table, TableBody, TableCell, TableContainer,
  TableRow, Paper, ButtonGroup
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function ProductList() {
  const Products = [
    { id: 1, image: "/images/shoe1.webp", name: "Urban Blaze Men's Low Top Sneakers", price: 2899 },
    { id: 2, image: "/images/shoe2.webp", name: "Red Tape Men Colorblocked Gre", price: 1462 },
    { id: 3, image: "/images/shoe3.webp", name: "The Souled Store Men's Urban Blaz", price: 2699 },
    { id: 4, image: "/images/shoe4.webp", name: "Asian Men's Mexico-11 Casual Sneakers", price: 799 },
    { id: 5, image: "/images/shoe5.webp", name: "U.S. POLO ASSN Men. CLARKIN 4", price: 1439 },
    { id: 6, image: "/images/shoe6.webp", name: "The Souled Store Men's Urban Blaze: Inferno Sneakers", price: 2599 },
    { id: 7, image: "/images/shoe7.webp", name: "The Roadster Lifestyle Co Women's Pointed Toe Block Heels", price: 999 },
    { id: 8, image: "/images/shoe8.webp", name: "The Souled Store Top Gun Maverick Kicks High Top Sneakers", price: 3199 }
  ];

  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cartItem");
    return saved ? JSON.parse(saved) : [];
  });

  // Update localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem("cartItem", JSON.stringify(cart));
  }, [cart]);

  const handleAddToCart = (product) => {
    const existing = cart.find(item => item.id === product.id);
    let updatedCart;

    if (existing) {
      updatedCart = cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      updatedCart = [...cart, { ...product, quantity: 1 }];
    }

    setCart(updatedCart);
  };

  const updateQuantity = (id, delta) => {
    const updatedCart = cart
      .map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      );
    setCart(updatedCart);
  };

  const getTotalPrice = () => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  return (
    <div style={{ background: "#e3e2e2", padding: "50px" }}>
      <h1 style={{ paddingBottom: "30px", textAlign: "center" }}>
        Assignment-3 : Creating a React application for an online shoe store
      </h1>

      <Grid container spacing={4}>
        {/* Product List */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Grid container spacing={2}>
            {Products.map((product) => (
              <Grid size={{ xs: 12, md: 6 }} key={product.id}>
                <Card>
                  <CardMedia component="img" image={product.image} alt={product.name} height={300} />
                  <CardContent>
                    <Typography gutterBottom variant="h6">
                      {product.name}
                    </Typography>
                    <Typography sx={{ color: 'text.secondary', marginBottom: 2 }}>
                      ₹ {product.price}
                    </Typography>
                    <Button variant="contained" onClick={() => handleAddToCart(product)}>
                      Add to cart
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Cart Section */}
        <Grid  size={{ xs: 12, md: 6 }}>
          <h2 style={{ marginBottom: "30px" }}>🛒 Cart ({cart.length} items)</h2>

          {cart.length === 0 ? (
            <Typography>No items in cart</Typography>
          ) : (
            <>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }}>
                  <TableBody>
                    {cart.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell>
                          <img src={item.image} alt={item.name} width={50} height={50} />
                        </TableCell>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>₹ {item.price}</TableCell>
                        <TableCell>
                          <ButtonGroup size="small" variant="contained">
                            <Button onClick={() => updateQuantity(item.id, +1)}><AddIcon /></Button>
                            <Button variant="outlined" disabled>{item.quantity}</Button>
                            <Button onClick={() => updateQuantity(item.id, -1)} disabled={item.quantity === 1}><RemoveIcon /></Button>
                          </ButtonGroup>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>

              <Typography variant="h6" sx={{ marginTop: 2 }}>
                Total: ₹ {getTotalPrice()}
              </Typography>
            </>
          )}
        </Grid>
      </Grid>
    </div>
  );
}

export default ProductList;
