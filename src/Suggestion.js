export default function Suggestion(props){
    return(

       <div class="sugestao">
            <div class="usuario">
                <img src={props.imgSuggestion}/>
                <div class="texto">
                    <div class="nome">{props.nameSuggestion}</div>
                    <div class="razao">Segue você</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
    </div>
) 
}