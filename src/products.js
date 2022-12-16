const productsArray = [
    {
        id: "1",
        title: "Cofee",
        price: 3.99 
    },
    {
        id: "2",
        title: "Shirt",
        price: 9.99 
    },
    {
        id: "3",
        title: "Camera",
        price: 39.99 
    },
]
function getProductsData(id){
  let productsData = productsArray.find(product => product.id === id);
  if (productsData === undefined){
    console.log("Product data is not exist for id: " +id);
    return undefined
  }
  return productsData;
}


export {productsArray, getProductsData};