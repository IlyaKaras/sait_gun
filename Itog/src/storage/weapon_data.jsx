// storage/weapon_data.jsx
// Описание базовых моделей оружия для выбора (Шаг 1) + точки (слоты) с координатами на изображении
export const weapons = [
  {
    id: "saiga_mk_030_545",
    name: "Сайга-МК исп. 030 кал. 5,45",
    baseImage: "/src/images/weapons/saiga_mk_030_545_base.jpg",
    // Определяем точки/слоты (как плюсики на сайте) с координатами для оверлея
    slots: [
      { key: "grip", label: "Рукоятка", x: 185, y: 200, z: 8 },          
      { key: "magazine", label: "Магазин", x: 275, y: 200, z: 10 },      
      { key: "sight", label: "Прицел", x: 231, y: 135, z: 12 },          
      { key: "rail", label: "Цевьё", x: 355, y: 150, z: 7 },             
      { key: "gas_tube", label: "Газовая трубка", x: 370, y: 130, z: 6 }, 
      { key: "muzzle", label: "Дульное устройство", x: 520, y: 150, z: 9 }, 
      { key: "stock", label: "Приклад", x: 110, y: 160, z: 5 }             
    ]


  },
  {
    id: "tr3_gen1_545",
    name: "TR3 gen.1 кал. 5,45x39",
    baseImage: "/src/images/weapons/tr3_gen1_545_base.webp",
    slots: [
      { key: "magazine", label: "Магазин", x: 265, y: 180, z: 10 },
      { key: "stock", label: "Приклад", x: 60, y: 150, z: 5 },
      { key: "grip", label: "Рукоятка", x: 159, y: 200, z: 8 },
      { key: "gas_tube", label: "Газовая трубка", x: 360, y: 110, z: 6 },
      { key: "rail", label: "Планка/цевьё", x: 360, y: 140, z: 7 },
      { key: "muzzle", label: "Дульное устройство", x: 540, y: 131, z: 9 },
      { key: "sight", label: "Прицел", x: 265, y: 110, z: 12 }
    ]
  },
  {
    id: "saiga_223",
    name: "Сайга-МК кал. .223",
    baseImage: "/src/images/weapons/saiga_223_base.webp",
    slots: [
      { key: "magazine", label: "Магазин", x: 260, y: 190, z: 10 },
      { key: "stock", label: "Приклад", x: 90, y: 160, z: 5 },
      { key: "grip", label: "Рукоятка", x: 169, y: 190, z: 8 },
      { key: "gas_tube", label: "Газовая трубка", x: 360, y: 130, z: 6 },
      { key: "rail", label: "Планка/цевьё", x: 360, y: 150, z: 7 },
      { key: "muzzle", label: "Дульное устройство", x: 550, y: 145, z: 9 },
      { key: "sight", label: "Прицел", x: 220, y: 130, z: 12 }
    ]
  },
  {
    id: "vepr_308",
    name: "Вепрь-308",
    baseImage: "/src/images/weapons/vepr_308_base.jpg",
    slots: [
      { key: "magazine", label: "Магазин", x: 240, y: 180, z: 10 },
      { key: "stock", label: "Приклад", x: 70, y: 180, z: 5 },
      { key: "grip", label: "Рукоятка", x: 160, y: 190, z: 8 },
      { key: "rail", label: "Планка/цевьё", x: 340, y: 157, z: 7 },
      { key: "muzzle", label: "Дульное устройство", x: 550, y: 150, z: 9 },
      { key: "sight", label: "Прицел", x: 230, y: 140, z: 12 }
    ]
  },
  {
    id: "tigr_svd",
    name: "Тигр (СВД гражданская)",
    baseImage: "/src/images/weapons/tigr_base.webp",
    slots: [
      { key: "magazine", label: "Магазин", x: 220, y: 190, z: 10 },
      { key: "stock", label: "Приклад", x: 120, y: 190, z: 5 },
      { key: "rail", label: "Кронштейн/планка", x: 340, y: 150, z: 7 },
      { key: "muzzle", label: "Дульное устройство", x: 560, y: 150, z: 9 },
      { key: "sight", label: "Прицел", x: 180, y: 145, z: 12 }
    ]
  },
  {
    id: "saiga_12",
    name: "Сайга-12",
    baseImage: "/src/images/weapons/saiga_12_base.webp",
    slots: [
      { key: "magazine", label: "Магазин", x: 288, y: 170, z: 10 },
      { key: "stock", label: "Приклад", x: 80, y: 140, z: 5 },
      { key: "grip", label: "Рукоятка", x: 176, y: 180, z: 8 },
      { key: "rail", label: "Планка/цевьё", x: 370, y: 130, z: 7 },
      { key: "muzzle", label: "Дульное устройство", x: 560, y: 125, z: 9 },
      { key: "sight", label: "Прицел", x: 260, y: 100, z: 12 }
    ]
  }
];
