const Product = require("../models/Product");

const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://dhillman1989:WSV1Y71ICnONfBJJ@cluster0.qzgj7.mongodb.net/shop?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
  )
  .then(() => {
    console.log("DB connected!");
  })
  .catch((err) => {
    console.log(err.message);
  });

const seedsArray = [
  {
    name: "apple",
    category: "fruit",
    price: 0.6,
    image:
      "https://static9.depositphotos.com/1307373/1179/i/600/depositphotos_11794280-stock-photo-red-apple.jpg",
    desc:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus non reprehenderit dolor omnis modi, totam ipsa incidunt sit sapiente cumque amet cupiditate eius consequatur quod tempora corrupti eos veritatis ab? ",
  },
  {
    name: "sugar",
    category: "pantry",
    price: 1.2,
    image:
      "https://cdn.bmstores.co.uk/images/hpcProductImage/imgFull/296234-tate-and-lyle-granulated-sugar-500g1.jpg",
    desc:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus non reprehenderit dolor omnis modi, totam ipsa incidunt sit sapiente cumque amet cupiditate eius consequatur quod tempora corrupti eos veritatis ab? ",
  },
  {
    name: "flour",
    category: "pantry",
    price: 1.4,
    image:
      "https://www.bakerybits.co.uk/pub/media/catalog/product/cache/f0e7e5b8ad709afafa5a25a50539ad29/m/a/matthews_flour_product-134.jpg",
    desc:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus non reprehenderit dolor omnis modi, totam ipsa incidunt sit sapiente cumque amet cupiditate eius consequatur quod tempora corrupti eos veritatis ab? ",
  },
  {
    name: "cucumber",
    category: "vegetables",
    price: 0.9,
    image:
      "https://cdn.shopify.com/s/files/1/0137/3683/7220/products/VEGBOX_119_2048x.jpg?v=1597234220",
    desc:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus non reprehenderit dolor omnis modi, totam ipsa incidunt sit sapiente cumque amet cupiditate eius consequatur quod tempora corrupti eos veritatis ab? ",
  },
  {
    name: "ketchup",
    category: "sauces",
    price: 1.05,
    image:
      "https://salvo1968.co.uk/media/catalog/product/cache/2c83c4d31fd0090674a9637ee17e02e6/h/e/heinz_tomatoketchup342g_main_image.jpg",
    desc:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus non reprehenderit dolor omnis modi, totam ipsa incidunt sit sapiente cumque amet cupiditate eius consequatur quod tempora corrupti eos veritatis ab? ",
  },
  {
    name: "chicken",
    category: "meat",
    price: 4.5,
    image:
      "https://www.dinneratthezoo.com/wp-content/uploads/2018/10/smoked-chicken-4.jpg",
    desc:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus non reprehenderit dolor omnis modi, totam ipsa incidunt sit sapiente cumque amet cupiditate eius consequatur quod tempora corrupti eos veritatis ab? ",
  },
  {
    name: "sausage rolls",
    category: "bakery",
    price: 1.2,
    image:
      "https://www.thespruceeats.com/thmb/mbq7SItMDkkw2pNcqM4b_Ezom_8=/1885x1414/smart/filters:no_upscale()/sausage-roll-901ecec7f1d54c10940c1bdbbc1b8e46.jpg",
    desc:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus non reprehenderit dolor omnis modi, totam ipsa incidunt sit sapiente cumque amet cupiditate eius consequatur quod tempora corrupti eos veritatis ab? ",
  },
  {
    name: "Coffee",
    category: "hot drinks",
    price: 1.9,
    image:
      "https://www.staples.co.uk/content/images/product/GenesisExtraLarge/60/67/asset.5786067.jpg",
    desc:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus non reprehenderit dolor omnis modi, totam ipsa incidunt sit sapiente cumque amet cupiditate eius consequatur quod tempora corrupti eos veritatis ab? ",
  },
];

const seedProducts = async () => {
  await Product.deleteMany({});
  for (let i = 0; i < seedsArray.length; i++) {
    const product = new Product({
      ...seedsArray[i],
    });
    await product.save();
  }
};

seedProducts().then(() => mongoose.connection.close());
