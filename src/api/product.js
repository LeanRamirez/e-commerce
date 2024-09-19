import { ENV } from "../utils";

// Función para obtener los últimos productos publicados
async function getLastestPublished(limite = 20) {
    try {
        const sortFilter = "sort=publishedAt:desc";
        const paginationFilter = `pagination[limit]=${limite}`;
        const populateFilter = "populate=*";
        const filters = `${sortFilter}&${paginationFilter}&${populateFilter}`;
        const url = `${ENV.API_URL}/${ENV.ENDPOINTS.PRODUCTS}?${filters}`;

        const response = await fetch(url);

        if (response.status !== 200) throw response;

        return await response.json();
    } catch (error) {
        throw error;
    }
}

// Función para buscar productos dinámicamente por título, tags y características
async function searchProduct(text) {
    try {
        const cleanText = encodeURIComponent(text.trim());  // Limpiar y escapar el texto de búsqueda

        // Definir los filtros para cada campo
        const searchTitleFilter = `filters[title][$containsi]=${cleanText}`;
        const searchTagsFilter = `filters[tags][$containsi]=${cleanText}`;
        // const searchCharacteristicsFilter = `filters[characteristics][$containsi]=${cleanText}`;

        // Paginación y populate
        const pagination = "pagination[pageSize]=100";
        const populate = "populate=*";

        // Unir todos los filtros
        const filters = `${searchTitleFilter}&${searchTagsFilter}&${pagination}&${populate}`;

        // Construir la URL completa
        const url = `${ENV.API_URL}/${ENV.ENDPOINTS.PRODUCTS}?${filters}`;

        // Realizar la petición fetch
        const response = await fetch(url);

        if (response.status !== 200) throw response;

        // Convertir la respuesta a JSON
        const data = await response.json();
        console.log('Data:', data); // Verificar los datos obtenidos
        return data;
    } catch (error) {
        console.error("Error al buscar productos:", error);
        throw error;
    }
}



// Exportar las funciones
export const productCtrl = {
    getLastestPublished,
    search: searchProduct,
};
