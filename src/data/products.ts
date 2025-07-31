interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Smartphone Premium",
    description: "Tela 6.5'', 128GB, Câmera Tripla 48MP",
    price: 2499.99,
    image: "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 2,
    name: "Notebook Ultrafino",
    description: "Processador i7, 16GB RAM, SSD 512GB",
    price: 4299.99,
    image: "https://plus.unsplash.com/premium_photo-1681702156223-ea59bfbf1065?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 3,
    name: "Fone Bluetooth",
    description: "Cancelamento de ruído, 30h de bateria",
    price: 599.99,
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 4,
    name: "Smartwatch Inteligente",
    description: "Monitor de batimentos, GPS, à prova d'água",
    price: 899.99,
    image: "https://images.unsplash.com/photo-1660844817855-3ecc7ef21f12?q=80&w=486&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 5,
    name: "Tablet Android",
    description: "Tela 10.1'', 64GB, Caneta inclusa",
    price: 1299.99,
    image: "https://images.unsplash.com/photo-1623126908029-58cb08a2b272?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 6,
    name: "Câmera DSLR",
    description: "24.2MP, Gravação em 4K, Kit com lente 18-55mm",
    price: 2899.99,
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 7,
    name: "Console de Videogame",
    description: "1TB SSD, Controle sem fio, Jogo exclusivo incluso",
    price: 3499.99,
    image: "https://images.unsplash.com/photo-1486401899868-0e435ed85128?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 8,
    name: "Caixa de Som Bluetooth",
    description: "50W RMS, Resistente à água, Bateria de 20h",
    price: 499.99,
    image: "https://plus.unsplash.com/premium_photo-1683141496040-eeef9702269f?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 9,
    name: "Monitor Gamer",
    description: "27'', 144Hz, 1ms, Resolução QHD",
    price: 1899.99,
    image: "https://images.unsplash.com/photo-1551645120-d70bfe84c826?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 10,
    name: "Teclado Mecânico",
    description: "Switches Red, RGB, ABNT2",
    price: 349.99,
    image: "https://images.unsplash.com/photo-1625130694338-4110ba634e59?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];