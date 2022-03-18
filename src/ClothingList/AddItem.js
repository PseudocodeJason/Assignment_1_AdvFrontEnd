import React from 'react'
import "./ClothingList.css";
import { Button } from "react-bootstrap";

export const AddClothes = ({ name, setName, price, setPrice, description, setDescription, stock, setStock, addClothes }) => {
    return (
        <div>
            <br/><br/>
            <label>Name: </label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
            <label>Price: </label>
            <input type="number" value={price} onChange={(e) => setPrice(e.target.value)}></input>
            <label>Description: </label>
            <input type="description" value={description} onChange={(e) => setDescription(e.target.value)}></input>
            <label>Stock: </label>
            <input type="number" value={stock} onChange={(e) => setStock(e.target.value)}></input>
            <Button variant="primary" onClick={() => addClothes({ name: name, price: "$" + price, description: description, stock: stock })}> Add Clothes</Button>
        </div>
    )
}