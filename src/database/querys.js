
export const queries = {
    getProducts:"SELECT * FROM Products",
    postProduct:'INSERT INTO Products (name, description, quantity) VALUES (@name, @description, @quantity)',
    getProductById: "SELECT * FROM Products WHERE Id = @Id",
    deleteProduct: 'DELETE FROM [abeldb].[dbo].[Products] WHERE Id = @Id'
}