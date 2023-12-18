import {governmentBuildings, HouseType} from "../02/02_02";


export const getStreetsTitlesOfGovernmentBuildings =
    (buildings: Array<governmentBuildings>) => {
    return buildings.map(b=>b.address.street.title)
}

export const getStreetsTitlesOfHouses = (houses: Array<HouseType>) => {
    return houses.map(h=>h.address.street.title)
}

export const createMessages = (houses: Array<HouseType>) => {
    return houses.map(m=>`Hello guys from ${m.address.street.title}`)
}