import { users } from "../storage/profile_data";
import Avatar from "@mui/material/Avatar";
import Favorite from "../components/Favorite";
import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Profile() {
  const [showFavorite, setShowFavorite] = useState(true);

  return (
    <Box sx={{ p: 3, backgroundColor: "#141414", color: "#fff", minHeight: "100vh" }}>
      {users.map((item) => (
        <Box
          key={item.name}
          sx={{
            backgroundColor: "#1c1c1c",
            borderRadius: "8px",
            p: 3,
            mb: 3,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
            <Avatar src={item.image} sx={{ width: 80, height: 80 }} />
            <Box>
              <Typography variant="h5" sx={{ fontWeight: 700 }}>
                {item.name}
              </Typography>
              <Typography variant="body2" sx={{ color: "#aaa" }}>
                {item.info}
              </Typography>
            </Box>
          </Box>

          {showFavorite && <Favorite />}
        </Box>
      ))}
    </Box>
  );
}

export default Profile;