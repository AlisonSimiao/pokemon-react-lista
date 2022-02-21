import axios from "axios";
import { Component } from "react"
import { Box, Button, Flex} from "@chakra-ui/react"

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state={
            pokemons : [],
            next: "",
            previous: ""
        }
    }

    async componentDidMount() {
        this.goToPage();
    }

    async goToPage(url = null) {
        const link = url ?? "https://pokeapi.co/api/v2/pokemon";
        const {data} = await axios.get(link);
        console.log(data);
        this.setState({
            pokemons: data.results,
            next: data.next,
            previous: data.previous
        })
    }

    render(){
        return (
            <Flex
            p= "10px 0"
            w="70vw"
            backgroundSize="contain"
            backgroundRepeat="repeat"
            direction="column"
            gap="10px"
            m="auto"
            >
                <Flex  
                    mg="auto"
                    direction= "column"
                    gap="2"
                >
                    {  
                        this.state.pokemons.map((poke)=>{
                                return <Box 
                                            display=" inline-block"
                                            border="1px solid #ff3800"
                                            p="5"
                                            bg=" rgb(252, 252, 252)"
                                            borderRadius="5"
                                            font-weight="700"
                                            text-transform="capitalize" 
                                            color="gray.600"
                                            key={poke.name}>
                                                {poke.name}
                                        </Box>
                        })
                    }
                </Flex>
                <Flex justify="space-between">
                    <Button 
                    color="white"
                    bg= "#ff3700cb"
                    border="1px solid #af717183"
                    casing="uppercase"
                    cursor="pointer"
                    onClick={ ()=>{
                        this.goToPage(this.state.previous);
                    } }>
                            anterior
                    </Button>
                    <Button
                        color="white"
                        bg= "#ff3700cb"
                        border="1px solid #af717183"
                        casing="uppercase"
                        cursor="pointer"
                        onClick={ ()=>{
                            
                            this.goToPage(this.state.next);
                        } }>
                            proximo
                    </Button>
                </Flex>
              
            </ Flex >
        )
    }
    
  }