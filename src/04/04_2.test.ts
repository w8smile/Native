import {CityType} from "../02/02_02";
import {demolishHousesTheStreet, staffCountGreaterThen} from "./04_2";

let city: CityType;

beforeEach(()=>{
    city = {
        title: "New York",
        houses: [
            {
                id: 1, buildedAt: 2012,repaired: false,
                address: {number: 100, street: {title: "White Street"}}
            },
            {
                id: 2,buildedAt: 2008,repaired: false,
                address: {number: 100, street: {title: "Happy street"}}
            },
            {
                id: 3,buildedAt: 2020,repaired: false,
                address: {number: 200, street: {title: "Hogwarts street"}}
            }],
        governmentBuildings: [
            {
                type: "HOSPITAL", budget: 200000, staffCount: 200,
                address: {
                    street:
                        {title: "Central Str"
                        }}
            },
            {
                type: "FIRE-STATION", budget: 500000, staffCount: 1000,
                address: {
                    street:
                        {title: "Souths park str"
                        }}
            }
        ],
        citizensNumber: 100000
    }
})

test('destroyed', ()=> {
    demolishHousesTheStreet(city, "Happy street")
    expect(city.houses.length).toBe(1);
    expect(city.houses[0].id).toBe(2);
})

test('buildings staff count', ()=> {
    let buildings = staffCountGreaterThen(city.governmentBuildings,500);

    expect(buildings.length).toBe(1)
    expect(buildings[0].type).toBe("FIRE-STATION")
})