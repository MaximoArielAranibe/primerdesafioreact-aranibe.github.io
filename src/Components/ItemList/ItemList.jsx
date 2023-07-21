import { Item } from "../Item/Item.jsx";

const ItemList = () => {
  const items = [
    {
      id: 1,
      name: "Whey Protein Isolated",
      category:"Proteinas",
      brand: "ENA",
      weight: "930grs",
      description: "description",
      price: 10000,
      stock: 1,
      thumbnail:"https://i.ibb.co/WgZQLyG/whey-protein-ena.png"
    },
    {
      id: 2,
      name: "Beast Blood",
      category:"Preentrenos",
      brand: "No se",
      weigth: "350grs",
      description: "description",
      price: 5500,
      stock: 2,
      thumbnail:"https://i.ibb.co/4ZKDcgK/preentreno-beastblood.png"
    },
    {
      id: 3,
      name: "Ripped X",
      category:"Quemadores de grasa",
      brand: "ENA",
      weight: "60 capsulas",
      description: "Quemador de grasa con pimienta",
      price: 3500,
      stock: 4,
      thumbnail:"https://i.ibb.co/QKz7qMr/quemador-de-grasa-ena.png"
    },
    {
      id: 4,
      name: "Whey Protein&Mass",
      category:"Proteinas",
      brand: "SPX",
      weigth: "1080grs",
      description: "description",
      price: 4800,
      stock: 6,
      thumbnail:"https://i.ibb.co/mDXDbmS/whey-protein-spx.png"
    },
    {
      id: 5,
      name: "Whey Protein&Mass",
      category:"Proteinas",
      brand: "SPX",
      weigth: "1080grs",
      description: "description",
      price: 1,
      stock: 25,
      thumbnail:"https://i.ibb.co/TBm49Vc/whey-protein-mass-spx.png"
    },
    {
      id: 6,
      name: "Whey Protein",
      category:"Quemadores de grasa",
      brand: "ENA",
      weigth: "1080",
      description: "description",
      price: 1,
      stock: 25,
      thumbnail:"https://i.ibb.co/kxLchVr/whey-cutter-spx.png"
    },
    {
      id: 7,
      name: "Whey Protein",
      category:"Quemadores de grasa",
      brand: "ENA",
      weigth: "1080",
      description: "description",
      price: 1,
      stock: 25,
      thumbnail:""
    },
    {
      id: 8,
      name: "Whey Protein",
      category:"Quemadores de grasa",
      brand: "ENA",
      weigth: "1080",
      description: "description",
      price: 1,
      stock: 25,
      thumbnail:""
    },
    {
      id: 9,
      name: "Whey Protein",
      category:"Quemadores de grasa",
      brand: "ENA",
      weigth: "1080",
      description: "description",
      price: 1,
      stock: 25,
      thumbnail:""
    },
    {
      id: 10,
      name: "Whey Protein",
      category:"Quemadores de grasa",
      brand: "ENA",
      weigth: "1080",
      description: "description",
      price: 1,
      stock: 25,
      thumbnail:""
    },
    {
      id: 11,
      name: "Whey Protein",
      category:"Quemadores de grasa",
      brand: "ENA",
      weigth: "1080",
      description: "description",
      price: 1,
      stock: 25,
      thumbnail:""
    },
    {
      id: 12,
      name: "Whey Protein",
      category:"Quemadores de grasa",
      brand: "ENA",
      weigth: "1080",
      description: "description",
      price: 1,
      stock: 25,
      thumbnail:""
    },
    {
      id: 13,
      name: "Whey Protein",
      category:"Quemadores de grasa",
      brand: "ENA",
      weigth: "1080",
      description: "description",
      price: 1,
      stock: 25,
      thumbnail:""
    },
    {
      id: 14,
      name: "Whey Protein",
      category:"Quemadores de grasa",
      thumbnail:"",
      brand: "ENA",
      weigth: "1080",
      description: "description",
      price: 1,
      stock: 25,
    },
  ];
  return (
    <div className="column ">
      {items.map((item) => {
        return (
          <Item key={item.id} name={item.name} thumbnail={item.thumbnail} price={item.price} category={item.category} brand={item.brand} weigth={item.weigth} description={item.description} />
        );
      })}
    </div>
  );
};

export default ItemList;
