import Suggestion from "./Suggestion";

export default function Suggestions(){
    const suggestion = [
        {
            imgSuggestion: "assets/img/bad.vibes.memes.svg",
            nameSuggestion: "bad.vibes.memes"
            
        },
        {
            imgSuggestion: "assets/img/chibirdart.svg",
            nameSuggestion: "chibirdart"
            
        },
        {
            imgSuggestion: "assets/img/razoesparaacreditar.svg",
            nameSuggestion: "razoesparaacreditar"
            
        },
        {
            imgSuggestion: "assets/img/adorable_animals.svg",
            nameSuggestion: "adorable_animals"
            
        },
        {
            imgSuggestion: "assets/img/smallcutecats.svg",
            nameSuggestion: "smallcutecats"
            
        }
    ]

    return(
        <div class="sugestoes">
          <div class="titulo">
            Sugestões para você
            <div>Ver tudo</div>
          </div>
         {suggestion.map(conteudo =>(
            <Suggestion imgSuggestion = {conteudo.imgSuggestion} nameSuggestion = {conteudo.nameSuggestion}/>
         ))} 
        </div>  
    )
}