import { Flex, Text } from "@chakra-ui/react"
import { Component } from "react"

class Header extends Component {
    
    render(){
        return (
            <Flex color= "white"
            background= "#ff3800"
            justify= "center"
            align-items= "center"
            p= "1"
            fontSize="25">
                <Text fontSize='1xl'> 
                    Refatorando Pokemons 
                </Text>
            </Flex>
        )
    }
    
  }
  
export default Header