const companies = [
  {
    id: 1,
    name: "Empresa no patito S.A de C.V",
    rfc: "POASHF12434",
    key: false,
    active: true,
    branches: [
      {
        id: 11,
        name: "Almacén de México",
        key: "12408416",
        active: true,
        type: "warehouse",
        locations: [
          {
            id: 111,
            name: "Montevideo",
            key: "12408416",
            active: true
          },
          {
            id: 112,
            name: "Calzada de Guadalupe CDMX",
            key: "12408416",
            active: false
          }
        ]
      },
      {
        id: 12,
        name: "Almacén Sonora Grill",
        key: "90078434",
        active: false,
        type: "warehouse",
        locations: [
          {
            id: 121,
            name: "Aragón",
            key: "34564459",
            active: true
          }
        ]
      },
      {
        id: 13,
        name: "Almacén ASFSDFAD",
        key: "12408416",
        active: true,
        type: "warehouse",
        locations: [
          {
            id: 131,
            name: "Indios Verdes",
            key: "34564459",
            active: true
          }
        ]
      },
      {
        id: 14,
        name: "Oficinas Sureste",
        key: "12408416",
        active: true,
        type: "office",
        locations: [
          {
            id: 141,
            name: "Indios Vallejo",
            key: "34564459",
            active: true
          }
        ]
      },
      {
        id: 15,
        name: "Oficinas Río Amazonas",
        key: "98324534",
        active: true,
        type: "office",
        locations: [
          {
            id: 151,
            name: "Chilpancingo",
            key: "34564459",
            active: true
          }
        ]
      },
      {
        id: 16,
        name: "Tienda Mixcoac",
        key: "34657890",
        type: "store",
        active: false,
        locations: [
          {
            id: 161,
            name: "Guanajuato",
            key: "34564459",
            active: true
          }
        ]
      }
    ]
  },
  {
    id: 2,
    name: "Empresa no patito S.A de C.V",
    rfc: "POASHF12434",
    key: false,
    active: false,
    branches: []
  },
  {
    id: 3,
    name: "Almacén Sonora Grill",
    rfc: false,
    key: "90078434",
    active: true,
    branches: [
      {
        id: 31,
        name: "Almacén Sonora Grill",
        key: "90078434",
        active: false,
        type: "warehouse",
        locations: [
          {
            id: 313,
            name: "Aragón",
            key: "34564459",
            active: true
          }
        ]
      },
      {
        id: 32,
        name: "Almacén ASFSDFAD",
        key: "12408416",
        active: true,
        type: "warehouse",
        locations: [
          {
            id: 321,
            name: "Indios Verdes",
            key: "34564459",
            active: true
          },
          {
            id: 322,
            name: "Casas Alemán",
            key: "34777912",
            active: true
          }
        ]
      },
      {
        id: 33,
        name: "Oficinas Sureste",
        key: "12408416",
        active: true,
        type: "office",
        locations: [
          {
            id: 331,
            name: "Indios Vallejo",
            key: "34564459",
            active: true
          }
        ]
      },
      {
        id: 34,
        name: "Oficinas Pueblos de Santa Fe",
        key: "90078434",
        active: false,
        type: "office",
        locations: [
          {
            id: 341,
            name: "Mazatlán",
            key: "34564459",
            active: true
          }
        ]
      },
      {
        id: 35,
        name: "Oficinas Puerto Madero",
        key: "34567895",
        active: true,
        type: "office",
        locations: [
          {
            id: 351,
            name: "Indios Rio Nazas",
            key: "34564459",
            active: true
          }
        ]
      },
      {
        id: 36,
        name: "Tienda condesa",
        key: "25678965",
        active: true,
        type: "store",
        locations: [
          {
            id: 361,
            name: "San Lazaro",
            key: "34564459",
            active: true
          }
        ]
      }
    ]
  },
  {
    id: 4,
    name: "Almacén Xalapa",
    rfc: false,
    key: "90078434",
    active: false,
    branches: []
  }
];

export default companies;
