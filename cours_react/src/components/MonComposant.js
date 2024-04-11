import { useRef, useState } from "react";

const MonComponent = () => {
    //state => les etats:
    const [black, setBlack] = useState(false);
    const [nbr, setNbr] = useState(0);
    const [color, setColor] = useState("");
    const [pokemons, setPokemon] = useState([
        { id: 1, nom: "Pikachu" },
        { id: 2, nom: "Bulbizzar" },
        { id: 3, nom: "Rattatak" },
        { id: 4, nom: "Tortank" },
        { id: 52, nom: "Dragofeu" }
    ]);
    const inputRef = useRef()
    // fonctions et les constantes => logique :
    const handleClick = (id) => {
        // const copie = pokemons.filter(pokemon =>  pokemon.id !== id);
        // setPokemon(copie);
        const index = pokemons.findIndex(pokemon => pokemon.id === id);
        const copie = [...pokemons];
        copie.splice(index, 1);
        setPokemon(copie);
    }

    const handleSubmit = e => {
        e.preventDefault();
        const newpokemon = inputRef.current.value;
        // const newId = Math.max.apply(null, pokemons.map(pokemon => pokemon.id)) + 1;
        const newId = Math.max(...pokemons.map(pokemon => pokemon.id)) + 1;
        const pokeObjet = [...pokemons, { id: newId, nom: newpokemon }];
        setPokemon(pokeObjet);
    }

    const generateRandomRGB = () => {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r},${g},${b})`;
    };

    const randomRGB = generateRandomRGB();

    const changeColor = () => {
        setBlack(false);
        setNbr(nbr + 1);
        setColor(randomRGB)
    }

    // le rendu coter front :
    return (
        <>
            <h1>test</h1>
            <ul>
                {pokemons.map(
                    (el, index) => <li key={index}>{el.nom} id={el.id}
                        <button onClick={() => handleClick(el.id)}>-</button></li>
                )}
            </ul>
            <div style={{ height: '90px', width: '90px', background: black ? 'black' : color }}></div>
            <form onSubmit={handleSubmit}>
                <input ref={inputRef} type="text"></input>
                <button type="submit">+</button>
            </form>
            <button onClick={() => setBlack(true)}>black</button>
            <button onClick={changeColor}>change color</button>
            <p>Nombre de fois ou on change la couleur : {nbr}</p>
        </>
    );
};

export default MonComponent;

function generateRandomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

const randomRGB = generateRandomRGB();
console.log(randomRGB);
