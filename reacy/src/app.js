import React, { Component } from 'react';
import './App.css';
import pokemon from './poke.json'

class App extends Component {
    state = {
        message: "Click an image to begin!",
        topScore: 0,
        curScore: 0,
        pokemon: pokemon,
        uPokemon: pokemon
    }

    componentDidMount() {
    }

    shuffleArray = array => {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    selectDog = type => {
        const findDog = this.state.uPokemon.find(item => item.type === type);

        if(findPokemon === undefined) {
            // failure to select a new dog
            this.setState({ 
                message: "You guessed incorrectly!",
                topScore: (this.state.curScore > this.state.topScore) ? this.state.curScore : this.state.topScore,
                curScore: 0,
                pokemon: pokemon,
                uPokemon: pokemon
            });
        }
        else {
            // success to select a new dog
            const newPokemon = this.state.uPokemon.filter(item => item.type !== type);
            
            this.setState({ 
                message: "You guessed correctly!",
                curScore: this.state.curScore + 1,
                pokemon: pokemon,
                uPokemon: newPokemons
            });
        }

        this.shuffleArray(pokemon);
    };

    render() {
        return (
            <Wrapper>
                <Navpills
                    message={this.state.message}
                    curScore={this.state.curScore}
                    topScore={this.state.topScore}
                />
                <Title />
                {
                    this.state.pokemon.map(dog => (
                        <DogCard
                            type={pokemon.type}
                            image={pokemon.image}
                            selectPokemon={this.selectPokemon} 
                            curScore={this.state.curScore}
                        />
                    ))
                }
            </Wrapper>
        );
    }
}

export default App;
