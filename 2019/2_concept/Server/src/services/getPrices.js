const rp = require('request-promise')
const cheerio = require('cheerio')

let product = {}

const getCompanies = async (data) => {
    const url = data.url
    const selectorProductPrice = data.selectorProductPrice

    const html = await rp(url)
    cheerio(selectorProductPrice, html).filter(async (i, e) => {
        if(e.children[0].data) {
            product =
                {
                    url: url,
                    company: data.company,
                    productName: data.productName,
                    productPrice: parseFloat(e.children[0].data),
                    selectorProductPrice: selectorProductPrice,
                }
        }
    })
    // console.log(product)
    return product
};

module.exports = {getCompanies}

