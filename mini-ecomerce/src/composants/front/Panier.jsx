import React from "react";
import axios from "axios";
import { useRef } from "react"
import { commandeVerif } from "../verif/verif";
import Alert from "../Alert";
import { useAlert } from "../../hook/useAlert";
import { dataContext } from "../../context/dataContext";
import { useContext } from "react";
import { profilContext } from "../../context/profilContext";




const Panier = () => {

    const { panier, supprimer } = useContext(dataContext);
    const { profil } = useContext(profilContext);

    const nomRef = useRef();
    const emailRef = useRef();
    const adresseRef = useRef();
    const messageRef = useRef();

    const [alerte , setAlerte , getError] = useAlert(commandeVerif)

    const handleSubmit = (e) => {
        e.preventDefault();
        const demande = {
            nom : JSON.stringify(nomRef.current.value),
            email : emailRef.current.value ,
            adresse : JSON.stringify(adresseRef.current.value),
            message : JSON.stringify(messageRef.current.value),

        }
        
        if(getError(demande)) return ; 
        
        // envoyer les données saisies dans l'API pour enregistrement 
        axios.post(`${import.meta.env.VITE_API}commande.json`, demande)
             .then(reponse => {
                e.target.reset();
                setAlerte({type : "success" , liste : ["La commande a bien été enregistré"] }) 
             })
             .catch(ex => setAlerte({type : "warning" , liste : ["erreur lors de l'enregistrement du message"]}))
    }

    const handleFocus = () => {
        setAlerte({});
    }

    return ( <>
        <h1>Votre Panier</h1>
        <div className="d-flex justify-content-between align-items-center mb-3">
            </div>
            <table className="table table-sm table-striped">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>nom</th>
                        <th>prix</th>
                        <th>actions</th>
                    </tr>
                </thead>


               <tbody>
                    {panier.map((article) => {
                        return (
                        <tr key={article.id}>
                            <th scope="row">{article.id}</th>
                            <td>{article.titre}</td>
                            <td>{new Intl.NumberFormat("fr-FR", { style: 'currency', currency: 'EUR' }).format(article.prix)}</td>
                            <td>
                                <button onClick={() => supprimer(article)} className="btn border-danger text-danger" >supprimer</button>
                            </td>
                        </tr>
                    )}) }
                </tbody>


            </table>
            
            <hr></hr>

            <h1>Votre profil</h1>

            <form onSubmit={handleSubmit} className="col-12">
                <input type="nom" 
                    placeholder="votre nom"  
                    className="form-control mb-3" 
                    ref={nomRef}
                    onFocus={handleFocus}/>

                <input type="email" 
                    placeholder="votre@email.fr"  
                    className="form-control mb-3" 
                    ref={emailRef}
                    onFocus={handleFocus}/>

                <input type="adresse" 
                    placeholder="votre rue / code postal / ville"  
                    className="form-control mb-3" 
                    ref={adresseRef}
                    onFocus={handleFocus}/>

                <textarea  
                    placeholder="Commentaire" 
                    className="form-control mb-3" 
                    rows={5} 
                    ref={messageRef}
                    onFocus={handleFocus}></textarea>
                <input type="submit" to="/Commande" className="btn btn-warning" value="Commander" onClick={() => ajouter(demande)} />
            </form>
            <Alert alerte={alerte} />
    </> );
}
 
export default Panier;