import Post from "./Post";

export default function Posts(){
    const posts = [
        {
            imgUser: "assets/img/meowed.svg",
            nameUser: "meowed",
            imgPost: "assets/img/gato-telefone.svg",
            imgLike: "assets/img/respondeai.svg",
            likeUser: "respondeai",
            numberLikes: "101523"
        },
        {
            imgUser: "assets/img/barked.svg",
            nameUser: "barked",
            imgPost: "assets/img/dog.svg",
            imgLike: "assets/img/adorable_animals.svg",
            likeUser: "adorable_animals",
            numberLikes: "99159"
        },
        {
            imgUser: "assets/img/barked.svg",
            nameUser: "barked",
            imgPost: "assets/img/dog.svg",
            imgLike: "assets/img/adorable_animals.svg",
            likeUser: "adorable_animals",
            numberLikes: "99159"
        }
    ]

    return(
        <div class="posts">
            {posts.map(conteudo =>(
                <Post imgUser = {conteudo.imgUser} nameUser = {conteudo.nameUser} imgPost = {conteudo.imgPost}
                imgLike = {conteudo.imgLike} likeUser = {conteudo.likeUser} numberLikes = {conteudo.numberLikes} />
            ))}
        </div>
        
    )
}