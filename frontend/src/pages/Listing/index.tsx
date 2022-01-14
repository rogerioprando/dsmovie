import Pagination from "components/Pagination";
import MovieCard from "components/MovieCard";
import axios from "axios";
import { BASE_URL } from "utils/requests";
import { useEffect, useState } from "react";
import { MoviePage } from "types/movie";

/* 
    o componente react é uma função javascript e 
    antes do return podemos ter qualquer lógica implementada dentro da função

*/

function Listing() {


    const [pageNumber, setPageNumber] = useState(0);


    /* 
        useEffect: Uma função para ser executada, e uma lista de objetos que vai ser observada. 
        Sempre que alterar algo nos objetos observados ele executa a função novamente 
        se a lista ficar vazia só executa uma quando componente for carregado */

    useEffect(() => {
        axios.get(`${BASE_URL}/movies?size=12&page=1`)
            .then(response => {
                const data = response.data as MoviePage;
                console.log(data);
                setPageNumber(data.number);
            });
    }, [])


    /*
        TESTE AXIOS
        o resultado de um axios.get é um Promises (operação assíncrona)
        response: resposta da requisição get

        axios.get('http://localhost:8080/movies?size=12&page=0')
            .then(response => {
                console.log(response.data)
            });

    */


    return (
        <>

            <p>{pageNumber}</p>

            <Pagination />
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                </div>
            </div>

        </>

    );

}

export default Listing;