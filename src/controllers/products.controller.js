import {getConnection} from '../database/connection'

export const getProducts = async (req,res) => {
    const pool = await getConnection();
    const  result = await pool.request()
    .query('SELECT * FROM Products')
    console.log(result);
    res.json(result.recordset)
};

export const createNewProduct = (req, res) => {
    res.json('new product')
}