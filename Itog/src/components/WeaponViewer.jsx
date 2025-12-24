// components/WeaponViewer.jsx
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

function WeaponViewer({ weapon, selectedSlot, selectedModules, accessories, onSelectSlot }) {
  const width = 600; // ширина холста
  const height = 360;

  const getAccessoryBySlot = (slotKey) => {
    const accId = selectedModules[slotKey];
    if (!accId) return null;
    return accessories.find(a => a.id === accId);
  };

  return (
    <Box sx={{ position: "relative", width, height, backgroundColor: "#000", borderRadius: "8px" }}>
      <img
        src={weapon.baseImage}
        alt={weapon.name}
        style={{ width: width, height: height, objectFit: "contain" }}
      />

      {/* Наложенные модули */}
      {weapon.slots.map(slot => {
        const acc = getAccessoryBySlot(slot.key);
        if (!acc) return null;
        return (
          <img
            key={`overlay-${slot.key}`}
            src={acc.image}
            alt={acc.name}
            style={{
              position: "absolute",
              left: slot.x,
              top: slot.y,
              width: 120,
              height: 80,
              objectFit: "contain",
              zIndex: slot.z
            }}
          />
        );
      })}

      {/* Плюсики для точек */}
      {weapon.slots.map(slot => (
        <IconButton
          key={slot.key}
          onClick={() => onSelectSlot(slot)}
          sx={{
            position: "absolute",
            left: slot.x - 12,
            top: slot.y - 12,
            zIndex: 20,
            color: selectedSlot?.key === slot.key ? "#E50914" : "#fff",
            backgroundColor: "rgba(255,255,255,0.08)"
          }}
        >
          <AddCircleOutlineIcon />
        </IconButton>
      ))}
    </Box>
  );
}

export default WeaponViewer;
