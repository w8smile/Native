import {CityType, governmentBuildings} from "../02/02_02";

export function demolishHousesTheStreet(city: CityType, street: string) {
    city.houses = city.houses.filter(h=>h.address.street.title === street)
}

export const staffCountGreaterThen = (buildings: Array<governmentBuildings>, number: number) => {
    return buildings.filter(b=>b.staffCount>number)
}