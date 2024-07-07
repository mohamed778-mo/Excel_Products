
const schema = {
    'Id':
     {
         prop: 'categoryAR',
         type: String 
    },
    'Category-AR':
     {
         prop: 'categoryAR',
         type: String 
    },
    'Product-Name-AR': {
         prop: 'productNameAR', 
         type: String 
        },
    'Description-AR': {
         prop: 'descriptionAR', 
         type: String 
        },
    'PRICE-AR': { 
        prop: 'priceAR', 
        type: String 
    },
  
    'Category-EN': { 
        prop: 'categoryEN',
         type: String 
        },
    'Product-Name-EN': { 
        prop: 'productNameEN',
         type: String
         },
    'Description-EN': { 
        prop: 'descriptionEN',
         type: String 
        },
    'PRICE-EN': { 
        prop: 'priceEN',
         type: String 
        },
  
    'Product-Img': { 
        prop: 'productImg',
         type: String 
        }
  };

  module.exports = schema
