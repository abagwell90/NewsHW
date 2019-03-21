const axios = require("axios");
const cheerio = require("cheerio");

// could not get mondoDB or Mongoose to work correctly

function getArticle() {

    console.log("getArticle is working");

    const url = 'https://news.ycombinator.com'
    return axios.get(url)
        .then(response => {
            const data = [];
            const $ = cheerio.load(response.data);
            $('table.itemlist tr td:nth-child(3)').each((i, elem) => {
                data.push({
                    title: $(elem).text(),
                    link: $(elem).find('a.storylink').attr("href"),
                    source: $(elem).find('.sitestr').text(),
                });

            });
            return data;

        })
        .catch(error => {
            console.log(error);
        })


}
module.exports = {
    getArticle

};