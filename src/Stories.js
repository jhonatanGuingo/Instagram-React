import Story from "./Story"

export default function Stories(){
    const stories = [
        {
            img: "assets/img/9gag.svg",
            title: "9 gag"
        },
        {
            img: "assets/img/meowed.svg",
            title: "meowed"
        },
        {
            img: "assets/img/nathanwpylestrangeplanet.svg",
            title: "nathanwpylestrangeplanet"
        },
        {
            img: "assets/img/wawawicomics.svg",
            title: "wawawicomics"
        },        
        {
            img: "assets/img/barked.svg",
            title: "barked"
        },
        {
            img: "assets/img/respondeai.svg",
            title: "respondeai"
        },
        {
            img: "assets/img/filomoderna.svg",
            title: "filomoderna"
        },
        {
            img: "assets/img/memeriagourmet.svg",
            title: "memeriagourmet"
        }
        ]
    return(
        <div class="stories">
            {stories.map(conteudo =>(
                <Story img={conteudo.img} title={conteudo.title} />
            ))}
            <div class="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
          </div>
        </div>
    )
}

