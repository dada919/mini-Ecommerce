import { useArticle } from "../../hook/useArticle";
import { dataContext } from "../../context/dataContext";
import { useContext } from "react";

const Panier = () => {

    const [articles, setArticles] = useArticle()


    const { panier } = useContext(dataContext);

    return ( <>
        
        <h1 className="text-success">Bon de Commande numéro</h1>
        

        <p>Merci pour votre commande !</p>
        <div className="d-flex justify-content-between align-items-center mb-3">
            </div>
            <table className="table table-sm table-striped">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>nom</th>
                        <th>prix</th>
                    </tr>
                </thead>
               <tbody>
                    {panier.map((article) => {
                        return (
                        <tr key={article.id}>
                            <th scope="row">{article.id}</th>
                            <td>{article.titre}</td>
                            <td>{new Intl.NumberFormat("fr-FR", { style: 'currency', currency: 'EUR' }).format(article.prix)}</td>
                        </tr>
                    )}) }
                </tbody>
            </table>
            
            <hr></hr>

            <h1>Détail livraison</h1>


            <tbody>

                    <ul className="col-12" >
                        <li>Nom :</li>
                        <li>Email : </li>
                        <li>Adresse : </li>
                        <li>Commentaire :</li>
                    </ul>
            </tbody>
                
    </> );
}
 
export default Panier;