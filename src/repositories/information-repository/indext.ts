import { prisma } from "@/config";

async function fetchGeoInfo() {
    return prisma.geoInfos.findMany();
}

async function fetchHistInfo() {
    return prisma.histInfos.findMany();
}

const informationRepository = {
    fetchGeoInfo,
    fetchHistInfo
}

export default informationRepository;