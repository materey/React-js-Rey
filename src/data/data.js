const productos = [
    {
        id: "Vlk001",
        nombre: "Wooly premium",
        descripcion: "",
        precio: 400000,
        categoria: "Palos",
        stock: 5,
        imagen: "https://acdn.mitiendanube.com/stores/001/979/534/products/wooly-premium-plata-6-17793b9aed3cbff98417036936517538-640-0.webp",
    },

    {
        id: "Vlk002",
        nombre: "Wit extreme",
        descripcion: "",
        precio: 500000,
        categoria: "Palos",
        stock: 10,
        imagen: "https://acdn.mitiendanube.com/stores/001/979/534/products/wit-extreme-series-7-108dab9c26d123fc9717036839512854-640-0.webp",
    },

    {
        id: "Vlk003",
        nombre: "Wit extreme 3D",
        descripcion: "",
        precio: 500000,
        categoria: "Palos",
        stock: 10,
        imagen: "https://acdn.mitiendanube.com/stores/001/979/534/products/wit-3d-7-5dfef2b4615cc3615e17036889090040-640-0.webp",
    },

    {
        id: "Bls001",
        nombre: "Probag oregon",
        descripcion: "",
        precio: 90000,
        categoria: "Bolsos",
        stock: 3,
        imagen: "https://oregon-hockey.com/cdn/shop/products/DSC4739_823x.jpg?v=1625215149"
    },

    {
        id: "Bls002",
        nombre: "Probag balling",
        descripcion: "",
        precio: 70000,
        categoria: "Bolsos",
        stock: 7,
        imagen: "https://acdn.mitiendanube.com/stores/002/203/728/products/4-1-a4b6f7ce6ec4ef5e1d17206264636108-640-0.webp"
    },

    {
        id: "Bls003",
        nombre: "Bolso vlack",
        descripcion: "",
        precio: 100000,
        categoria: "Bolsos",
        stock: 8,
        imagen: "https://acdn.mitiendanube.com/stores/002/203/728/products/bolso-vlack-verde-esmeralda-1-9d2acb499ba11958b217158823321183-640-0.webp"
    },

    {
        id: "Ind001",
        nombre: "Buzo Vlack Iyabo",
        descripcion: "",
        precio: 50000,
        categoria: "Indumentaria",
        stock: 20,
        imagen: "https://acdn.mitiendanube.com/stores/002/203/728/products/buzo-vlack-iyabo-31-940d9a6298400dcb3316832015958992-640-0.webp"
    },

    {
        id: "Ind002",
        nombre: "Remera Vlack Cumin",
        descripcion: "",
        precio: 20000,
        categoria: "Indumentaria",
        stock: 20,
        imagen: "https://acdn.mitiendanube.com/stores/002/203/728/products/musculosa-cumin-negro4-8e432dedc6aa7e27e816618865702361-640-0.webp"
    },

    {
        id: "Ind003",
        nombre: "Medias Vlack Pro Socks",
        descripcion: "",
        precio: 10000,
        categoria: "Indumentaria",
        stock: 30,
        imagen: "https://acdn.mitiendanube.com/stores/002/203/728/products/medias-vlack-pro-socks-31-9bf32a5885a59a885c16856264204308-640-0.webp"
    },

    {
        id: "Acc001",
        nombre: "Overgrip JP Grays",
        descripcion: "",
        precio: 20000,
        categoria: "Accesorios",
        stock: 30,
        imagen: "https://acdn.mitiendanube.com/stores/002/203/728/products/overgrip-grays-azul-4c27884b977b8bdd4817187371551153-640-0.webp"
    },

    {
        id: "Acc002",
        nombre: "Guante Balling Venture",
        descripcion: "",
        precio: 70000,
        categoria: "Accesorios",
        stock: 10,
        imagen: "https://acdn.mitiendanube.com/stores/002/203/728/products/guante-venture-largo-negro-3-67bdb92a3b673c7a1717044699468840-640-0.webp"
    }
]

const obtenerProductos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos)
        }, 2000);
    });
}

export default obtenerProductos