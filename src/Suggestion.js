export default function Suggestion(props){
    <div class="sugestao">
            <div class="usuario">
                <img src={props.imgSuggestion}/>
                <div class="texto">
                    <div class="nome">{props.userSuggestion}</div>
                    <div class="razao">Segue você</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
    </div>

}