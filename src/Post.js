export default function Post(props){
    return(
        <div class="post" data-test="post">
            <div class="topo">
                <div class="usuario">
                    <img data-test="post-image" src={props.imgUser}/>
                    {props.nameUser}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
              <img src={props.imgPost} />
            </div>

            <div class="fundo">
              <div class="acoes">
                <div>
                  <ion-icon name="heart-outline"></ion-icon>
                  <ion-icon name="chatbubble-outline"></ion-icon>
                  <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                  <ion-icon name="bookmark-outline"></ion-icon>
                </div>
              </div>

              <div class="curtidas">
                <img src={props.imgLike}/>
                <div class="texto">
                  Curtido por <strong>{props.likeUser}</strong> e <strong>outras {props.numberLikes} pessoas</strong>
                </div>
              </div>
            </div>
        </div>
    )
}