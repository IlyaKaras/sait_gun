// components/AccessoryList.jsx
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useMemo, useState } from "react";

function AccessoryList({ accessories, selectedId, onSelect }) {
  const [onlyInStock, setOnlyInStock] = useState(false);
  const [onlyWithAdapter, setOnlyWithAdapter] = useState(false);
  const [sort, setSort] = useState("priceAsc"); // priceAsc | priceDesc

  const filtered = useMemo(() => {
    let list = accessories;
    if (onlyInStock) list = list.filter(a => a.inStock);
    if (onlyWithAdapter) list = list.filter(a => a.withAdapter);
    if (sort === "priceAsc") list = [...list].sort((a,b)=>a.price-b.price);
    if (sort === "priceDesc") list = [...list].sort((a,b)=>b.price-a.price);
    return list;
  }, [accessories, onlyInStock, onlyWithAdapter, sort]);

  return (
    <>
      <Box sx={{ display: "flex", gap: 2, alignItems: "center", mb: 2 }}>
        <FormControlLabel
          control={<Checkbox checked={onlyInStock} onChange={e=>setOnlyInStock(e.target.checked)} />}
          label="В наличии"
        />
        <FormControlLabel
          control={<Checkbox checked={onlyWithAdapter} onChange={e=>setOnlyWithAdapter(e.target.checked)} />}
          label="С переходником"
        />
        <Button
          variant={sort === "priceAsc" ? "contained" : "outlined"}
          onClick={() => setSort("priceAsc")}
          sx={{ backgroundColor: sort === "priceAsc" ? "#E50914" : "transparent", color: "#fff", borderColor: "#aaa" }}
        >
          Цена ↑
        </Button>
        <Button
          variant={sort === "priceDesc" ? "contained" : "outlined"}
          onClick={() => setSort("priceDesc")}
          sx={{ backgroundColor: sort === "priceDesc" ? "#E50914" : "transparent", color: "#fff", borderColor: "#aaa" }}
        >
          Цена ↓
        </Button>
      </Box>

      <Grid container spacing={2}>
        {filtered.map(acc => (
          <Grid item xs={12} sm={6} md={6} key={acc.id}>
            <Card
              sx={{
                backgroundColor: "#1c1c1c",
                color: "#fff",
                borderRadius: "8px",
                border: selectedId === acc.id ? "2px solid #E50914" : "1px solid #333"
              }}
            >
              <CardMedia
                component="img"
                height="120"
                image={acc.image}
                alt={acc.name}
                sx={{ objectFit: "contain", background: "#000" }}
              />
              <CardContent>
                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>{acc.name}</Typography>
                <Typography variant="body2" sx={{ color: "#aaa" }}>
                  Цена: {acc.price} руб. • {acc.inStock ? "В наличии" : "Нет в наличии"} • {acc.withAdapter ? "С переходником" : "Без переходника"}
                </Typography>
                <Box sx={{ mt: 1 }}>
                  <Button
                    variant="outlined"
                    sx={{ borderColor: "#aaa", color: "#fff" }}
                    onClick={() => onSelect(acc)}
                  >
                    Выбрать
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default AccessoryList;
