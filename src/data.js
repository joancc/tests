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
            address: "Montevideo",
            key: "12408416"
          },
          {
            address: "Calzada de Guadalupe CDMX",
            key: "12408416"
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
            address: "Aragón",
            key: "34564459"
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
            address: "Indios Verdes",
            key: "34564459"
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
            address: "Indios Vallejo",
            key: "34564459"
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
            address: "Chilpancingo",
            key: "34564459"
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
            address: "Guanajuato",
            key: "34564459"
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
            address: "Aragón",
            key: "34564459"
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
            address: "Indios Verdes",
            key: "34564459"
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
            address: "Indios Vallejo",
            key: "34564459"
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
            address: "Mazatlán",
            key: "34564459"
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
            address: "Indios Rio Nazas",
            key: "34564459"
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
            address: "San Lazaro",
            key: "34564459"
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
