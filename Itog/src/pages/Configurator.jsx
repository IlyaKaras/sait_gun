// pages/Configurator.jsx
import { useParams } from "react-router-dom";
import { weapons } from "../storage/weapon_data";
import { accessories } from "../storage/accessories_data";
import { useMemo, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import AccessoryList from "../components/AccessoryList";
import WeaponViewer from "../components/WeaponViewer";

const steps = ["Шаг 1", "Шаг 2", "Шаг 3", "Шаг 4"];

function Configurator() {
  const { id } = useParams();
  const weapon = useMemo(() => weapons.find((w) => w.id === id), [id]);

  const [activeStep, setActiveStep] = useState(1); // начинаем с выбора точки/слота
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [selectedModules, setSelectedModules] = useState({}); // { slotKey: accessoryId }

  if (!weapon) {
    return <Typography variant="h5" sx={{ p: 3 }}>Оружие не найдено</Typography>;
  }

  const compatibleAccessories = useMemo(() => {
    if (!selectedSlot) return [];
    return accessories
      .filter(a => a.type === selectedSlot.key && a.compatibility.includes(weapon.id));
  }, [selectedSlot, weapon.id]);

  const totalPrice = useMemo(() => {
    return Object.values(selectedModules)
      .map(accId => accessories.find(a => a.id === accId)?.price || 0)
      .reduce((sum, p) => sum + p, 0);
  }, [selectedModules]);

  const handleSelectSlot = (slot) => {
    setSelectedSlot(slot);
    setActiveStep(2);
  };

  const handleSelectAccessory = (acc) => {
    setSelectedModules(prev => ({ ...prev, [acc.type]: acc.id }));
    setActiveStep(3);
  };

  const resetSlot = () => {
    if (selectedSlot) {
      setSelectedModules(prev => {
        const copy = { ...prev };
        delete copy[selectedSlot.key];
        return copy;
      });
    }
  };

  return (
    <Box sx={{ p: 3, backgroundColor: "#141414", color: "#fff", minHeight: "100vh" }}>
      <Typography variant="h4" sx={{ mb: 2 }}>{weapon.name}</Typography>

      <Stepper activeStep={activeStep} sx={{ mb: 3 }}>
        {steps.map((label, idx) => (
          <Step key={label} completed={activeStep > idx}>
            <StepLabel sx={{ color: "#fff" }}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "600px 1fr" }, gap: 3 }}>
        <WeaponViewer
          weapon={weapon}
          selectedSlot={selectedSlot}
          selectedModules={selectedModules}
          accessories={accessories}
          onSelectSlot={handleSelectSlot}
        />

        <Box>
          <Typography variant="h6" sx={{ mb: 1 }}>
            {selectedSlot ? `Точка: ${selectedSlot.label}` : "Выберите точку"}
          </Typography>
          <Divider sx={{ borderColor: "#333", mb: 2 }} />

          {selectedSlot ? (
            <>
              <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
                <Button
                  variant="outlined"
                  sx={{ borderColor: "#aaa", color: "#fff" }}
                  onClick={() => setActiveStep(1)}
                >
                  Другие точки
                </Button>
                <Button
                  variant="outlined"
                  sx={{ borderColor: "#aaa", color: "#fff" }}
                  onClick={resetSlot}
                >
                  Сбросить модуль
                </Button>
              </Box>

              <AccessoryList
                accessories={compatibleAccessories}
                selectedId={selectedModules[selectedSlot.key]}
                onSelect={handleSelectAccessory}
              />
            </>
          ) : (
            <Typography sx={{ color: "#aaa" }}>
              Нажмите на плюсик на изображении оружия, чтобы выбрать точку.
            </Typography>
          )}

          <Divider sx={{ borderColor: "#333", my: 3 }} />
          <Typography variant="h6">Итоговая цена: {totalPrice} руб.</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Configurator;
