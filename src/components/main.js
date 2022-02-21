import axios from "axios";
import { Component } from "react"

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
            <main >
                <div class="conteiner_poke">
                    {  
                        this.state.pokemons.map((poke)=>{
                                return <div class="poke_name" key={poke.name}>{poke.name}</div>
                        })
                    }
                </div>
                <div class="conteiner_nav">
                    <button 
                    onClick={ ()=>{
                        this.goToPage(this.state.previous);
                    } }>
                            anterior
                    </button>
                    <button
                        onClick={ ()=>{
                            
                            this.goToPage(this.state.next);
                        } }>
                            proximo
                    </button>
                </div>
              
            </ main >
        )
    }
    
  }