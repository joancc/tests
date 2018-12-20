const companies = [
  {
    id: 1,
    name: "Empresa no patito S.A de C.V",
    rfc: "POASHF12434",
    key: null,
    active: true,
    branches: [
      {
        warehouses: [
          {
            name: "Almacén de la Ciudad de México y EDOMEX",
            key: "12408416",
            active: true
          },
          {
            name: "Almacén Sonora Grill",
            key: "90078434",
            active: false
          },
          {
            name: "Almacén ASFSDFAD",
            key: "12408416",
            active: true
          }
        ],
        offices: [
          {
            name: "Oficinas Sureste",
            key: "12408416",
            active: true
          },
          {
            name: "Oficinas Pueblos de Santa Fe",
            key: "90078434",
            active: false
          },
          {
            name: "Oficinas Puerto Madero",
            key: "34567895",
            active: true
          },
          {
            name: "Oficinas Río Amazonas",
            key: "98324534",
            active: true
          }
        ],
        stores: [
          {
            name: "Tienda Mixcoac",
            key: "34657890",
            active: true
          },
          {
            name: "Tienda centralizada Cancún A",
            key: "32344456",
            active: false
          },
          {
            name: "Tienda condesa",
            key: "25678965",
            active: true
          },
          {
            name: "Tienda metro chilpancingo",
            key: "25670005",
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
    key: null,
    active: false,
    branches: []
  },
  {
    id: 3,
    name: "Almacén Sonora Grill",
    rfc: null,
    key: "90078434",
    active: true,
    branches: []
  }
];

export default companies;
