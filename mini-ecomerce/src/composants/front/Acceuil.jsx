import { useArticle } from "../../hook/useArticle";
import { dataContext } from "../../context/dataContext"
import { useContext } from "react";

const Acceuil = () => {
    
    const [articles] = useArticle();
    const {ajouter} = useContext(dataContext)
  
    return ( <div className="row">
        <h1>Catalogue</h1>
        {articles.map(article => {
            return <article className="col-4 mb-3"  key={article.id}>
                <div className="card">
                    <h2 className="card-header">{article.titre}</h2>
                    <div className="card-body">{article.contenu }</div>
                    
                    <footer className="card-footer d-flex justify-content-between">
                        <button className="btn border-primary text-primary" onClick={() => ajouter(article) }>
                            <span>Ajouter au panier</span>
                        </button>
                        <h3><strong>{ new Intl.NumberFormat("fr-FR", { style: 'currency', currency: 'EUR' }).format(article.prix)}</strong></h3>
                    </footer>
                </div>
            </article>
        })}
    </div> );
}

export default Acceuil;