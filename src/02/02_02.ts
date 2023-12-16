
export type StreetType = {
    title: string
}


export type AdressType ={
    number?: number
    street: StreetType
}
export type HouseType = {
    id?: number
    buildedAt: number
    repaired: boolean
    address: AdressType
}

export type governmentBuildings = {
    type: "HOSPITAL" | "FIRE-STATION"
    budget: number
    staffCount: number
    address: AdressType
}

export type CityType = {
    title: string
    houses: Array<HouseType>
    governmentBuildings: Array<governmentBuildings>
    citizensNumber: number
}