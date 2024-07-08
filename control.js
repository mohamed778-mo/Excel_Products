const readXlsxFile = require('read-excel-file/node');
const schema = require('./model')

const get_products = (req, res) => {
    const lang = req.query.lang || 'EN';
  
    readXlsxFile('./TEMP (1) (1).xlsx', { schema })
      .then(({ rows, errors }) => {
        if (errors.length === 0) {
          const filteredProducts = rows.map(row => ({
            id: row.id,
            productName: lang === 'AR' ? row.productNameAR : row.productNameEN,
            description: lang === 'AR' ? row.descriptionAR : row.descriptionEN,
            category: lang === 'AR' ? row.categoryAR : row.categoryEN,
            price: lang === 'AR' ? row.priceAR : row.priceEN,
            image: row.productImg
          }));
          res.json(filteredProducts);
        } else {
          res.status(500).json({ errors });
        }
      })
      .catch(error => {
        res.status(500).json({ error: error.message });
      });
  }



  module.exports = {get_products}
