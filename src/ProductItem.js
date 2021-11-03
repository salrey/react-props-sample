import { Component } from "react"

class ProductItem extends Component {
    // constructor() {
    //     super()
    // }
    
    render() {
        const { manufacturer, name, price } = this.props
        return (
          <div className="productItem">
            <li>
              {manufacturer} {name} - ${price}
            </li>
          </div>
        )
    }
  }
  
  export default ProductItem
  