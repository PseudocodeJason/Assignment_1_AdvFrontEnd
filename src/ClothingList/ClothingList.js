import { RoleWrapper } from "../RoleWrapper/RoleWrapper";
import "./ClothingList.css";
import {useNavigate, useParams} from "react-router-dom";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { AddClothes } from "./AddItem";


export const ClothingList = () => {
  console.log('Clothing List rendered')
  const navigate = useNavigate();
  const {role} = useParams();
 
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState("");
  const [filter, setfilter] = useState("")
  

  const [clothingList, setClothes] = useState([
    {id: 1, name: "Hat", price: "$20.99", description: "You got to look nice", stock: 69},
    {id: 2, name: "Shirt", price: "$35.98", description: "Pretty popular with the peoples", stock: 54},
    {id: 3, name: "Pant", price: "$29.99", description: "I guess it be looking like pants", stock: 8},
    {id: 4, name: "Sock", price: "$4.99", description: "Filled with holes idk why you would get it", stock: 564 },
    {id: 5, name: "Shoes", price: "$49.99", description: "Selling Shoes but not in pairs", stock: 44},
    {id: 6, name: "Ring", price: "$4.99", description: "Ahh well Its a ring", stock: 56},
  ])

  const filteredList = clothingList.filter(clothing => clothing.name.startsWith(filter));

  const addClothes = (item) => {
    const existingItem = clothingList.find((clothingItem) => clothingItem.name === item.name)
    if (existingItem){
      const newClothes = [...clothingList];
      const item = newClothes.find((clothingItem) => clothingItem.name === item.name)
      item.stock += item.stock
      setClothes(newClothes)
    }
    setClothes([...clothingList, item])
  }


  return (
    <div className="clothing-list">
      
      <RoleWrapper rolesAllowed={['Admin']} currentRole={role}>
      <AddClothes name={name} setName={setName} price={price} setPrice={setPrice} description={description} setDescription={setDescription} stock={stock} setStock={setStock} addClothes={addClothes} />
      </RoleWrapper>
      <Button onClick={() => navigate('/')} variant="primary">
        Login
      </Button><br/><br/>
      <label> Filter: </label>
      <input
        type="text"
        value={filter}
        onChange={(e) => setfilter(e.target.value)}
      >
      </input><br/><br/>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          {filteredList.map(({id, name, price, description, stock}, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{name}</td>
              <td>{price}</td>
              <td>{description}</td>
              <td>{stock}</td>
            </tr>
          ))}
        </tbody>
      </table><br/>
    </div>
  );
};
