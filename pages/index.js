import Header from "../src/components/header"
import Main from "../src/components/main"

const { Component } = require("react")

class Homepage extends Component {
    render(){
        return( 
                <>
                    <Header />
                    <Main/>
                </>
            )

    }
  }
  
  export default Homepage