import { useState } from "react";

function Description (){

    const [showFullText, setShowFullText] = useState(false);
    const htmlText = '<p class="my-3">La Foux d\'Allos, dans la résidence 3* "Les Cimes" à plus de 1800m d\'altitude au pied des pistes (100m), avec piscine chauffée, sauna, hammam (ouvert selon la saison) ascenseurs, parking...</p><p class="my-3">Notre appartement de 34 m² accueillera 4 à 6 personnes avec tout le confort. Une chambre avec un grand lit et sa fenêtre face aux pistes, un coin "montagne" avec son lit superposé, salon avec lit gigogne deux places, coin cuisine avec lave vaisselle, une salle de bain avec baignoire et toilette séparés.</p><p class="my-3">Le logement</p><p>Le logement est très bien équipée,cuisine avec 4 plaques électriques, micro ondes, lave vaisselle , appareil à raclette et fondu à disposition), séjour avec écran plat, canapé gigogne (2x 90cm -190cm), coin montagnes lit superposés (90cm-190cm) et une chambre fermé par une porte coulissante (160cm-200cm), salle de bain avec lavabo, wc séparé </p><p class="my-3">Accès des voyageurs</p><p>Accès local à ski au niveau 0 <br></br>Accès gratuit piscine, sauna et hammam (ouvert en fonction de la saison)</p><p class="my-3">Autres remarques</p><p>Le nettoyage est fait par les locataires à leur départ dans la bienveillance de chacun. Nous avons mis à disposition touts le matériel nécessaires pour accueillir aux miens nos clients (produits d entretien à disposition) </p>'
    
    const toggleShowFullText = () => {
        setShowFullText(!showFullText);
      };

    return(
        <div className="flex py-6 flex-col">
            {showFullText ? (
                <>
                 <div dangerouslySetInnerHTML={{ __html: htmlText }} />
                <button className="underline font-semibold max-w-fit" onClick={toggleShowFullText}>Voir moins</button>
                </>
            ) : (
                <>
                 <div dangerouslySetInnerHTML={{ __html: htmlText.slice(0, 400) + "..." }} />
                <button className="underline font-semibold max-w-fit" onClick={toggleShowFullText}>En savoir plus</button>
                </>
            )}
            </div>
    )
}
export default Description;