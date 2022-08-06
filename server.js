const express = require("express");
const app = express();

app.use(express.json());

const cors = require("cors");
app.use(cors());

require("dotenv").config();

const axios = require("axios");
const cheerio = require("cheerio");

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.status(200).send("Your api endpoint is at localhost:8000 make post request there")
})

app.post("/api/v1", async (req, res) => {

  try {

    const { url } = req.body;

    const result = await axios.get(url);

    const html = result.data;

    const $ = cheerio.load(html);

    const item = $("head");

    // the description
    const simpledesc = item.find("meta[name=description]").attr("content");
    const ogDesc = item.find("meta[property=og:description]").attr("content");
    let description = simpledesc ? simpledesc : ogDesc;

    // the title
    const simpletitle = item.find("title").text();
    const ogTitle = item.find("meta[property=og:title]").attr("content");
    let title = simpletitle ? simpletitle : ogTitle;

    // og image
    const image = item.find("meta[property=og:image]").attr("content");
    //favicon
    const icon = item.find("link[rel=icon]").attr("href");
    let favicon = icon ? `${url}${icon}` : undefined;

    res.status(200).json({
      success: true,
      data: {
        url,
        title,
        description,
        image,
        favicon
      }
    });
  }
  catch (err) {
    res.json({
      success: false,
      data: "Please enter a valid URL"
    })
  }

});


app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});


