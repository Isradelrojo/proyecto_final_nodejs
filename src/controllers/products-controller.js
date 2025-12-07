import { products } from '../models/products.model.js';
import * as model from '../models/products.model.js';
// import fs from 'fs';    
// import path from 'path';


// const __dirname = import.meta.dirname;

// console.log("DIRNAME", __dirname);

export const getAllProducts = async (req, res) => {
    if (products === 0) {
        return await res.status(400).json({ message: "No hay productos disponibles" });

    }
    const productsData = await products();
    //console.log('Products data in controller:', productsData);
    res.status(200).json(productsData);
};

export const getProductById = (req, res) => {
    const { id } = req.params;
    const product = products.find(p => p.id === parseInt(id));  
    if (product) {
        res.status(200).json(product);
    } else {
        res.status(404).json({ message: "Producto no encontrado" });
    };
};

export const createProduct = async (req, res) => {
  if (typeof req.body.name == undefined) {
    return res.status(422).json({ error: "El nombre es obligatorio" });
  }

  const { name, price, categories } = req.body;

  const product = await model.createProduct({ name, price, categories });

  res.status(201).json(product);
};

