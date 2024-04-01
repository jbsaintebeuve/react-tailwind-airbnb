
const featuresData = [
    {
        title: "Arrivée autonome",
        text: "Vous pouvez entrer dans les lieux avec une boîte à clé sécurisée.",
        icon: "https://a0.muscache.com/im/pictures/user/ec73a19e-e545-4488-bf3a-79e6ea7bdc36.jpg?im_w=240"
    },
    {
        title: "Stéphanie est Superhôte",
        text: "Les Superhôtes sont des hôtes expérimentés et très bien notés.",
        icon: "https://a0.muscache.com/im/pictures/user/ec73a19e-e545-4488-bf3a-79e6ea7bdc36.jpg?im_w=240"
    },
    {
        title: "Procédure d'arrivée irréprochable",
        text: "100 % des voyageurs ont attribué 5 étoiles à la procédure d'arrivée.",
        icon: "https://a0.muscache.com/im/pictures/user/ec73a19e-e545-4488-bf3a-79e6ea7bdc36.jpg?im_w=240"
    },
]

function KeyFeatures(){

    return( 
        <div className="flex py-6 flex-col">
            {featuresData.map((item, index) => (
                 <div className="flex my-4" key={index}>
                    <img className="h-12 rounded-full mr-5" src={item.icon}></img>
                    <div>
                        <p className="font-semibold text-lg">{item.title}</p>
                        <p className="text-gray-500">{item.text}</p>
                    </div>
                </div>
            )
            )}
        </div>

    )
}
export default KeyFeatures;