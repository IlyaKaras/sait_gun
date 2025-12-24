// storage/weapon_data.jsx
// Описание базовых моделей оружия для выбора (Шаг 1) + точки (слоты) с координатами на изображении
export const weapons = [
  {
    id: "saiga_mk_030_545",
    name: "Сайга-МК исп. 030 кал. 5,45",
    baseImage: "/src/images/weapons/saiga_mk_030_545_base.png",
    // Определяем точки/слоты (как плюсики на сайте) с координатами для оверлея
    slots: [
      { key: "magazine", label: "Магазин", x: 360, y: 260, z: 10 },
      { key: "stock", label: "Приклад", x: 40, y: 180, z: 5 },
      { key: "grip", label: "Рукоятка", x: 220, y: 280, z: 8 },
      { key: "gas_tube", label: "Газовая трубка", x: 280, y: 150, z: 6 },
      { key: "rail", label: "Планка/цевьё", x: 300, y: 190, z: 7 },
      { key: "muzzle", label: "Дульное устройство", x: 520, y: 180, z: 9 },
      { key: "sight", label: "Прицел", x: 260, y: 120, z: 12 }
    ]
  },
  {
    id: "tr3_gen1_545",
    name: "TR3 gen.1 кал. 5,45x39",
    baseImage: "/src/images/weapons/tr3_gen1_545_base.png",
    slots: [
      { key: "magazine", label: "Магазин", x: 360, y: 260, z: 10 },
      { key: "stock", label: "Приклад", x: 45, y: 180, z: 5 },
      { key: "grip", label: "Рукоятка", x: 225, y: 280, z: 8 },
      { key: "gas_tube", label: "Газовая трубка", x: 285, y: 150, z: 6 },
      { key: "rail", label: "Планка/цевьё", x: 305, y: 190, z: 7 },
      { key: "muzzle", label: "Дульное устройство", x: 525, y: 180, z: 9 },
      { key: "sight", label: "Прицел", x: 265, y: 120, z: 12 }
    ]
  },
  {
    id: "saiga_223",
    name: "Сайга-МК кал. .223",
    baseImage: "/src/images/weapons/saiga_223_base.png",
    slots: [
      { key: "magazine", label: "Магазин", x: 360, y: 260, z: 10 },
      { key: "stock", label: "Приклад", x: 45, y: 180, z: 5 },
      { key: "grip", label: "Рукоятка", x: 225, y: 280, z: 8 },
      { key: "gas_tube", label: "Газовая трубка", x: 285, y: 150, z: 6 },
      { key: "rail", label: "Планка/цевьё", x: 305, y: 190, z: 7 },
      { key: "muzzle", label: "Дульное устройство", x: 525, y: 180, z: 9 },
      { key: "sight", label: "Прицел", x: 265, y: 120, z: 12 }
    ]
  },
  {
    id: "vepr_308",
    name: "Вепрь-308",
    baseImage: "/src/images/weapons/vepr_308_base.png",
    slots: [
      { key: "magazine", label: "Магазин", x: 370, y: 270, z: 10 },
      { key: "stock", label: "Приклад", x: 55, y: 190, z: 5 },
      { key: "grip", label: "Рукоятка", x: 235, y: 290, z: 8 },
      { key: "rail", label: "Планка/цевьё", x: 315, y: 200, z: 7 },
      { key: "muzzle", label: "Дульное устройство", x: 540, y: 190, z: 9 },
      { key: "sight", label: "Прицел", x: 275, y: 130, z: 12 }
    ]
  },
  {
    id: "tigr_svd",
    name: "Тигр (СВД гражданская)",
    baseImage: "/src/images/weapons/tigr_base.png",
    slots: [
      { key: "magazine", label: "Магазин", x: 360, y: 265, z: 10 },
      { key: "stock", label: "Приклад", x: 75, y: 190, z: 5 },
      { key: "rail", label: "Кронштейн/планка", x: 260, y: 180, z: 7 },
      { key: "muzzle", label: "Дульное устройство", x: 520, y: 180, z: 9 },
      { key: "sight", label: "Прицел", x: 250, y: 140, z: 12 }
    ]
  },
  {
    id: "saiga_12",
    name: "Сайга-12",
    baseImage: "/src/images/weapons/saiga_12_base.png",
    slots: [
      { key: "magazine", label: "Магазин", x: 355, y: 275, z: 10 },
      { key: "stock", label: "Приклад", x: 45, y: 195, z: 5 },
      { key: "grip", label: "Рукоятка", x: 225, y: 290, z: 8 },
      { key: "rail", label: "Планка/цевьё", x: 300, y: 205, z: 7 },
      { key: "muzzle", label: "Дульное устройство", x: 520, y: 195, z: 9 },
      { key: "sight", label: "Прицел", x: 260, y: 145, z: 12 }
    ]
  }
];
