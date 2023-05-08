import React from "react"

export default function Post(props){
    const [save, SetSave] = React.useState(false)
    const iconeSave = save ? "bookmark" : "bookmark-outline";
    let numeroLikes = Number(props.numberLikes);
    const [heart, SetHeart] = React.useState("heart-outline")
    const [heartIcon, SetRedIcon] = React.useState("heart-outline")
    const [nLikes, SetNumberLikes] = React.useState(numeroLikes)
   


    function addLikes(){
        SetHeart(heart === "heart-outline" ? "heart" : "heart-outline");
        SetRedIcon(heart === "heart-outline" ? "red" : "black");
        SetNumberLikes(heart === "heart-outline" ? (nLikes +1) : (nLikes -1))

    }
    function likeImg(){
        if(heart === "heart-outline"){
        SetHeart("heart" );
        SetRedIcon("red" );
        SetNumberLikes((nLikes +1) )
    }
    }
 
    return(
        <div class="post" data-test="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.imgUser}/>
                    {props.nameUser}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
              <img data-test="post-image" onClick = {likeImg} src={props.imgPost} />
            </div>

            <div class="fundo">
              <div class="acoes">
                <div>
                  <ion-icon 
                  data-test="like-post"
                  name={heart}
                  class = {heartIcon}
                  onClick = {addLikes} ></ion-icon>
                  <ion-icon name="chatbubble-outline"></ion-icon>
                  <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                  <ion-icon 
                  data-test="save-post"
                  name={iconeSave}
                  
                  onClick= {() => SetSave(!save)}
                  ></ion-icon>
                </div>
              </div>

              <div class="curtidas">
                <img src={props.imgLike}/>
                <div class="texto">
                  Curtido por <strong>{props.likeUser}</strong> e <strong>outras <span data-test="likes-number">{nLikes}</span> pessoas</strong>
                </div>
              </div>
            </div>
        </div>
    )
}