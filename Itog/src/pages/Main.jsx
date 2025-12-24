// pages/Main.jsx
import { useState } from "react";
import { weapons } from "../storage/weapon_data";
import { NavLink } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

function Main() {
  const [searchTerm, setSearchTerm] = useState("");

  const filtered = weapons.filter((w) =>
    w.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const sorted = [...filtered].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <>
      <input
        type="text"
        placeholder="Найти оружие..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          padding: "10px",
          margin: "20px",
          borderRadius: "5px",
          border: "1px solid #E50914",
          backgroundColor: "#1c1c1c",
          color: "#fff",
          width: "calc(100% - 80px)"
        }}
      />
      <Grid container spacing={2} sx={{ marginTop: 2, padding: "0 20px 40px" }}>
        {sorted.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card
              sx={{
                maxWidth: 300,
                backgroundColor: "#1c1c1c",
                color: "#fff",
                borderRadius: "8px",
                transition: "transform 0.3s",
                "&:hover": { transform: "scale(1.03)" }
              }}
            >
              <NavLink
                to={"/config/" + item.id}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <CardMedia
                  component="img"
                  height="220"
                  image={item.baseImage}
                  alt={item.name}
                  sx={{ objectFit: "contain", background: "#000" }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6">
                    {item.name}
                  </Typography>
                </CardContent>
              </NavLink>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default Main;
