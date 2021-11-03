import { Component } from "react"

class ProductItem extends Component {
    // constructor() {
    //     super()
    // }
    
    render() {
        const { manufacturer, name, price } = this.props
        return (
          <li>
            {manufacturer} {name} - ${price}
          </li>
        )
    }
  }
  
  export default ProductItem
  