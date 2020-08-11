import React from "react";
import Directory from "./components/Directory";
import ProductInfo from "./components/ProductInfo";

class App extends React.Component {
  constructor() {
    super();
    this.thumbnailClicker = this.thumbnailClicker.bind(this);
    this.selectOnChange = this.selectOnChange.bind(this);

    this.state = {
      option: 'black',
      mainImage: `https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5388/5388900_sd.jpg;maxHeight=640;maxWidth=550`,
      uniqueID: 123,
      name:
        'Microsoft - Surface Pro 6 - 12.3" Touch Screen - Intel Core i5 - 8GB Memory - 256GB Solid State Drive',
      description:
        "Complete presentations with this 12.3-inch Microsoft Surface Pro 6 bundle. The Intel Core i5 processor and 8GB of RAM power programs that keep you on task, and the 256GB solid-state drive lacks moving parts to operate quietly.",
      brand: "Microsoft",
      department: "Computers",
      color: "Black",
      subDept: "Laptops",
      sku: 6306014,
      price: 930.99,
      avgRating: 4.7,
      colors: ["Black"],
      reviews: [],
      questions: {
        question:
          "Does this work with the full and regular version of Office 365 where you can create and use real Excel spreadsheets that support macros?",
        answer:
          "Yep! It runs full Windows 10 and full versions of all the Office365 products.",
      },
      images: [
        "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6306/6306014ld.jpg",
        "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6306/6306014cv13d.jpg",
        "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6306/6306014cv12d.jpg",
      ],
      peopleAlsoBought: [],
      peopleAlsoViewed: [],
      recentlyViewed: false,
    };
  }
  componentDidMount() {
    this.setState({
      mainImage: this.state.images[0],
      option: this.state.colors[0]
    })
  }

  thumbnailClicker(e) {
    this.setState({ mainImage: e.target.src })
  }

  selectOnChange(e) {
    console.log(e.target.value)
    this.setState({ option: e.target.value })
  }

  render() {
    const { department, subDept, brand, sku,
      avgRating, name, images, mainImage, price, colors, option
    } = this.state
    return (
      <div id="main-component-container">
        <Directory
          department={department}
          subDept={subDept}
        />
        <div id="main display">
          <ProductInfo
            name={name}
            brand={brand}
            sku={sku}
            avgRating={avgRating}
            images={images}
            mainImage={mainImage}
            thumbnailClicker={this.thumbnailClicker}
            price={price}
            options={colors}
            option={option}
            selectOnChange={this.selectOnChange}
          />
        </div>
      </div>
    );
  }
}

export default App;
