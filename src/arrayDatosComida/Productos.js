export const Products = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/aca-geek/image/upload/v1642890604/G-VERDE_p5vqze.png",
    color: "Verde",
    precio: "25 MXN",
    categorias: 1,
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/aca-geek/image/upload/v1642890603/G-MOLE_vcq8zz.png",
    color: "Mole",
    precio: "25 MXN",
    categorias: 1,
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/aca-geek/image/upload/v1642890603/G-GUAYABA_xfs39s.png",
    color: "Guayaba",
    precio: "25 MXN",
    categorias: 1,
  },
  {
    id: 4,
    image:
      "https://res.cloudinary.com/aca-geek/image/upload/v1642890603/G-PIÑA_pjbpz2.png",
    color: "Piña",
    precio: "25 MXN",
    categorias: 1,
  },
  {
    id: 5,
    image:
      "https://res.cloudinary.com/aca-geek/image/upload/v1642890603/G-PASAS_wzyyai.png",
    color: "Pasas",
    precio: "25 MXN",
    categorias: 1,
  },
  {
    id: 6,
    image:
      "https://res.cloudinary.com/aca-geek/image/upload/v1642890604/B-CHOCOLATE_vh1svc.png",
    color: "Champurrado",
    precio: "12 MXN",
    categorias: 2,
  },
  {
    id: 7,
    image:
      "https://res.cloudinary.com/aca-geek/image/upload/v1642890604/B-ARROZ_CON_LECHE_qebvxg.png",
    color: "Atole de Arroz",
    precio: "12 MXN",
    categorias: 2,
  },
  {
    id: 8,
    image:
      "https://res.cloudinary.com/aca-geek/image/upload/v1642890604/B-CHOCOLATE_vh1svc.png",
    color: "Chocolate Caliente",
    precio: "12 MXN",
    categorias: 2,
  },
  {
    id: 9,
    image:
      "https://res.cloudinary.com/aca-geek/image/upload/v1642890604/B-CAFE_xofdyd.png",
    color: "Cafe Negro",
    precio: "12 MXN",
    categorias: 2,
  },

  {
    id: 10,
    image:
      "https://res.cloudinary.com/aca-geek/image/upload/v1642898243/T-VERDE_jxczbp.png",
    color: "Tamal Verde",
    precio: "14 MXN",
    categorias: 3,
  },
  {
    id: 11,
    image:
      "https://res.cloudinary.com/aca-geek/image/upload/v1642898243/T-MOLE_pra1mu.png",
    color: "Tamal de Mole",
    precio: "14 MXN",
    categorias: 3,
  },
  {
    id: 12,
    image:
      "https://res.cloudinary.com/aca-geek/image/upload/v1642898243/TD-GUAYABA_oxy15p.png",
    color: "Tamal de Guayaba",
    precio: "14 MXN",
    categorias: 3,
  },
  {
    id: 13,
    image:
      "https://res.cloudinary.com/aca-geek/image/upload/v1642898243/TD-PI%C3%91A_ubzxgs.png",
    color: "Tamal de Piña",
    precio: "14 MXN",
    categorias: 3,
  },
  {
    id: 14,
    image:
      "https://res.cloudinary.com/aca-geek/image/upload/v1642898242/TD-PASAS_rwvq6i.png",
    color: "Tamal de Pasas",
    precio: "14 MXN",
    categorias: 3,
  },
];

export const categorias = [
  {
    id: 1,
    nombre: "Guajolotas",
    sabores: [
      {
        image:
          "https://res.cloudinary.com/aca-geek/image/upload/v1642890604/verde_qen9tt.png",
      },
      {
        image:
          "https://res.cloudinary.com/aca-geek/image/upload/v1642890604/mole_ngf5v0.png",
      },
      {
        image:
          "https://res.cloudinary.com/aca-geek/image/upload/v1642890604/rajas_pwf8w2.png",
      },
      {
        image:
          "https://res.cloudinary.com/aca-geek/image/upload/v1642890604/piña_hbynkk.png",
      },
      {
        image:
          "https://res.cloudinary.com/aca-geek/image/upload/v1642890604/pasas_szehm7.png",
      },
      {
        image:
          "https://res.cloudinary.com/aca-geek/image/upload/v1642890604/guayaba_iqyc42.png",
      },
    ],

    combo: [6,7,8,9]
  },

  {
    id: 2,
    nombre: "Bebidas",
    sabores: [
      {
        image:
          "https://res.cloudinary.com/aca-geek/image/upload/v1642890604/champurrado_bxhadd.png",
      },
      {
        image:
          "https://res.cloudinary.com/aca-geek/image/upload/v1642890604/arroz_con_leche_kk1w3l.png",
      },
      {
        image:
          "https://res.cloudinary.com/aca-geek/image/upload/v1642890603/chocolate_yig7fz.png",
      },
      {
        image:
          "https://res.cloudinary.com/aca-geek/image/upload/v1642890604/cafe_xdkts3.png",
      },
    ],
    combo: [1,2,3,4,5]
  },

  {
    id: 3,
    nombre: "Tamales",
    sabores: [
      {
        image:
          "https://res.cloudinary.com/aca-geek/image/upload/v1642890604/verde_qen9tt.png",
      },
      {
        image:
          "https://res.cloudinary.com/aca-geek/image/upload/v1642890604/mole_ngf5v0.png",
      },
      {
        image:
          "https://res.cloudinary.com/aca-geek/image/upload/v1642890604/rajas_pwf8w2.png",
      },
      {
        image:
          "https://res.cloudinary.com/aca-geek/image/upload/v1642890604/piña_hbynkk.png",
      },
      {
        image:
          "https://res.cloudinary.com/aca-geek/image/upload/v1642890604/pasas_szehm7.png",
      },
      {
        image:
          "https://res.cloudinary.com/aca-geek/image/upload/v1642890604/guayaba_iqyc42.png",
      },
    ],
    combo: [6,7,8,9]
  },
];
