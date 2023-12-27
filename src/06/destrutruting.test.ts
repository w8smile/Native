type ManType = {
    name: "Serg",
    age: 29,
    lessons: [{title: '1'}, {title: "2"}],
    address: {
        street: {
            title: 'Sozh'
        }
    }
}

let props: ManType;
beforeEach(()=> {
    test("", () => {

        const {age, lessons} = props
        const {title} = props.address.street

        const a = props.age
        const l = props.lessons})

})


