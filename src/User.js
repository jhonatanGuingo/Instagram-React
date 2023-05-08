import React from "react"

export default function User(){
    const [userName, SetUsername] = React.useState("catanacomics");
    const [imgUser, SetimgUser] = React.useState("assets/img/catanacomics.svg");

    function perguntarNome(){
        const nome = prompt('Qual seu nome de usuario?')
        if (!nome){
            return;
        }
        SetUsername(nome);
    }

    function alterarImg (){
        const img = prompt('Coloque um endereço de imagem:')
        if (!img){
            return;
        }
        SetimgUser(img);
    }

    return(
        <div class="usuario">
          <img data-test="profile-image" src={imgUser} onClick = {alterarImg} alt="imagem de perfil"/>
          <div class="texto">
            <span data-test="name"> 
              <strong>{userName}</strong>
              <ion-icon 
              data-test="edit-name" 
              name="pencil"
              onClick = {perguntarNome}
              ></ion-icon>
            </span>
          </div>
        </div>
    )
}