import informationRepository from "@/repositories/information-repository/indext";
import { error } from "console";

async function findGeologicInfos() {
    const geoInfo = await informationRepository.fetchGeoInfo();

    if (!geoInfo) {
        throw error('Conteúdo não encontrado')
    }

    return geoInfo;
}

async function findHistoricInfos() {
    const histInfo = await informationRepository.fetchHistInfo();

    if (!histInfo) {
        throw error('Conteúdo não encontrado')
    }

    return histInfo;
}

const informationService = {
    findGeologicInfos,
    findHistoricInfos,
};

export default informationService;