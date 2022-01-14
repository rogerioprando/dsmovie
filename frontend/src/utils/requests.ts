/* 
    variavel de ambiente para o endereço que a aplicação vai conversar
    por padrão é localhost mas será definido no netlify REACT_APP_BACKEND_URL
    ?? : operador de coalescência nula
*/

export const BASE_URL = process.env.REACT_APP_BACKEND_URL ?? "http://localhost:8080";

