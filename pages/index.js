import { Box } from "@chakra-ui/react"
import Header from "../src/components/header"
import Main from "../src/components/main"

const { Component } = require("react")

class Homepage extends Component {
    render(){
        return( 
                <Box bg="gray.100" w='100vw' color='whiteAlpha.800'>
                    <Header />
                    <Main/>
                </ Box>
            )

    }
  }
  
  export default Homepage