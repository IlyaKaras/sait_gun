// storage/accessories_data.jsx
// Полная JSON-структура аксессуаров с названием, совместимостью, типом, ценой и путём к изображению.
// type: 'magazine' | 'stock' | 'grip' | 'gas_tube' | 'rail' | 'muzzle' | 'sight'
export const accessories = [
  // ==== Магазины 5.45 (Сайга-МК, TR3) ====
  {
    id: "mag_pufgun_60_545",
    name: "Магазин Pufgun 60В усиленный 5.45x39 (черный)",
    type: "magazine",
    compatibility: ["saiga_mk_030_545", "tr3_gen1_545"],
    price: 5368,
    image: "/src/images/modules/mag_pufgun_60_545.jpg",
    inStock: true,
    withAdapter: false
  },
  {
    id: "mag_stich_60_545_olive",
    name: "Магазин Стич Профи 60 патронов 5.45x39 (олива)",
    type: "magazine",
    compatibility: ["saiga_mk_030_545", "tr3_gen1_545"],
    price: 7510,
    image: "/src/images/modules/mag_stich_60_545_olive.webp",
    inStock: true,
    withAdapter: false
  },
  {
    id: "mag_rpk74_bakelite_45",
    name: "Магазин РПК-74 бакелит 45 патронов",
    type: "magazine",
    compatibility: ["saiga_mk_030_545", "tr3_gen1_545"],
    price: 3590,
    image: "/src/images/modules/mag_rpk74_bakelite_45.webp",
    inStock: false,
    withAdapter: false
  },
  {
    id: "mag_ak74_30",
    name: "Магазин АК-74 30 патронов",
    type: "magazine",
    compatibility: ["saiga_mk_030_545", "tr3_gen1_545"],
    price: 3100,
    image: "/src/images/modules/mag_ak74_30.jpg",
    inStock: true,
    withAdapter: false
  },

  // ==== Магазины .223 (Сайга .223) ====
  {
    id: "mag_saiga_223_30",
    name: "Магазин Сайга .223 30 патронов",
    type: "magazine",
    compatibility: ["saiga_223"],
    price: 3200,
    image: "/src/images/modules/mag_saiga_223_30.webp",
    inStock: true,
    withAdapter: false
  },

  // ==== Магазины .308 (Вепрь-308) ====
  {
    id: "mag_vepr_308_5",
    name: "Магазин Вепрь-308 5 патронов",
    type: "magazine",
    compatibility: ["vepr_308"],
    price: 3500,
    image: "/src/images/modules/mag_vepr_308_5.jpeg",
    inStock: true,
    withAdapter: false
  },
  {
    id: "mag_vepr_308_10",
    name: "Магазин Вепрь-308 10 патронов",
    type: "magazine",
    compatibility: ["vepr_308"],
    price: 4200,
    image: "/src/images/modules/mag_vepr_308_10.png",
    inStock: true,
    withAdapter: false
  },

  // ==== Магазины СВД/Тигр ====
  {
    id: "mag_tigr_10",
    name: "Магазин Тигр 10 патронов",
    type: "magazine",
    compatibility: ["tigr_svd"],
    price: 5200,
    image: "/src/images/modules/mag_tigr_10.webp",
    inStock: true,
    withAdapter: false
  },

  // ==== Магазины 12 калибр (Сайга-12) ====
  {
    id: "mag_saiga12_5",
    name: "Магазин Сайга-12 5 патронов",
    type: "magazine",
    compatibility: ["saiga_12"],
    price: 2900,
    image: "/src/images/modules/mag_saiga12_5.jpg",
    inStock: true,
    withAdapter: false
  },
  {
    id: "mag_saiga12_10",
    name: "Магазин Сайга-12 10 патронов",
    type: "magazine",
    compatibility: ["saiga_12"],
    price: 3600,
    image: "/src/images/modules/mag_saiga12_10.webp",
    inStock: true,
    withAdapter: false
  },
  {
    id: "drum_saiga12_20",
    name: "Барабан Сайга-12 20 патронов",
    type: "magazine",
    compatibility: ["saiga_12"],
    price: 8900,
    image: "/src/images/modules/drum_saiga12_20.webp",
    inStock: true,
    withAdapter: true
  },

  // ==== Прицелы ====
  {
    id: "sight_pk01",
    name: "Прицел коллиматорный PK-01",
    type: "sight",
    compatibility: ["saiga_mk_030_545", "tr3_gen1_545", "saiga_223", "vepr_308", "saiga_12"],
    price: 9500,
    image: "/src/images/modules/sight_pk01.jpg",
    inStock: true,
    withAdapter: false
  },
  {
    id: "sight_posp_4x24",
    name: "Оптический прицел ПОСП 4x24",
    type: "sight",
    compatibility: ["tigr_svd", "vepr_308"],
    price: 18500,
    image: "/src/images/modules/sight_psop_4x24.jpeg",
    inStock: true,
    withAdapter: true
  },
  {
    id: "sight_holosun_hs403",
    name: "Прицел коллиматорный Holosun HS403",
    type: "sight",
    compatibility: ["saiga_mk_030_545", "tr3_gen1_545", "saiga_223", "saiga_12"],
    price: 21000,
    image: "/src/images/modules/sight_holosun_hs403.jpg",
    inStock: true,
    withAdapter: false
  },
  {
    id: "sight_leupold_vxf_3_9x40",
    name: "Leupold VX-Freedom 3-9x40",
    type: "sight",
    compatibility: ["vepr_308", "tigr_svd"],
    price: 46000,
    image: "/src/images/modules/sight_leupold_vxf_3_9x40.jpg",
    inStock: true,
    withAdapter: true
  },
  {
    id: "sight_acog_4x",
    name: "ACOG 4x",
    type: "sight",
    compatibility: ["tr3_gen1_545", "saiga_223"],
    price: 82000,
    image: "/src/images/modules/sight_acog_4x.webp",
    inStock: false,
    withAdapter: true
  },

  // ==== Приклады ====
  {
    id: "stock_fold_ak74m",
    name: "Штатный складной приклад АК-74М/Сайга",
    type: "stock",
    compatibility: ["saiga_mk_030_545", "saiga_12"],
    price: 8500,
    image: "/src/images/modules/stock_fold_ak74m.jpg",
    inStock: true,
    withAdapter: false
  },
  {
    id: "stock_fab_telescopic",
    name: "Приклад телескопический FAB Defense",
    type: "stock",
    compatibility: ["saiga_mk_030_545", "tr3_gen1_545", "saiga_223"],
    price: 16500,
    image: "/src/images/modules/stock_fab_telescopic.webp",
    inStock: true,
    withAdapter: true
  },
  {
    id: "stock_ati_adjustable",
    name: "Приклад регулируемый ATI",
    type: "stock",
    compatibility: ["vepr_308"],
    price: 14200,
    image: "/src/images/modules/stock_ati_adjustable.png",
    inStock: true,
    withAdapter: true
  },
  {
    id: "stock_svd_wood",
    name: "Приклад деревянный СВД",
    type: "stock",
    compatibility: ["tigr_svd"],
    price: 18000,
    image: "/src/images/modules/stock_svd_wood.webp",
    inStock: true,
    withAdapter: false
  },

  // ==== Рукоятки ====
  {
    id: "grip_ak_standard",
    name: "Штатная рукоятка АК/Сайга",
    type: "grip",
    compatibility: ["saiga_mk_030_545", "tr3_gen1_545", "saiga_223", "saiga_12"],
    price: 0,
    image: "/src/images/modules/grip_ak_standart.jpg",
    inStock: true,
    withAdapter: false
  },
  {
    id: "grip_magpul_moe",
    name: "Рукоятка Magpul MOE",
    type: "grip",
    compatibility: ["saiga_mk_030_545", "tr3_gen1_545", "saiga_223"],
    price: 7400,
    image: "/src/images/modules/grip_magpul_moe.webp",
    inStock: true,
    withAdapter: false
  },

  // ==== Газовые трубки / накладки ====
  {
    id: "gas_tube_stock",
    name: "Штатная газовая трубка с накладкой АК/Сайга",
    type: "gas_tube",
    compatibility: ["saiga_mk_030_545", "tr3_gen1_545", "saiga_223", "saiga_12"],
    price: 0,
    image: "/src/images/modules/gas_tube_stock.webp",
    inStock: true,
    withAdapter: false
  },

  // ==== Цевья / планки ====
  {
    id: "rail_picatinny_upper",
    name: "Верхняя планка Picatinny",
    type: "rail",
    compatibility: ["saiga_mk_030_545", "tr3_gen1_545", "saiga_223"],
    price: 5200,
    image: "/src/images/modules/rail_picatinny_upper.jpeg",
    inStock: true,
    withAdapter: true
  },
  {
    id: "rail_mlok_handguard",
    name: "Цевьё M-LOK",
    type: "rail",
    compatibility: ["saiga_mk_030_545", "tr3_gen1_545", "saiga_223", "saiga_12"],
    price: 11800,
    image: "/src/images/modules/rail_mlock_hanguard.jpg",
    inStock: true,
    withAdapter: true
  },

  // ==== Дульные устройства ====
  {
    id: "muzzle_brake_ak",
    name: "Компенсатор/тормоз АК",
    type: "muzzle",
    compatibility: ["saiga_mk_030_545", "tr3_gen1_545", "saiga_223"],
    price: 6200,
    image: "/src/images/modules/muzzle_brake_ak.jpg",
    inStock: true,
    withAdapter: false
  },
  {
    id: "flash_hider_ak",
    name: "Пламегаситель АК",
    type: "muzzle",
    compatibility: ["saiga_mk_030_545", "tr3_gen1_545", "saiga_223", "saiga_12"],
    price: 4800,
    image: "/src/images/modules/flash_hider_ak.jpg",
    inStock: true,
    withAdapter: false
  }
];
