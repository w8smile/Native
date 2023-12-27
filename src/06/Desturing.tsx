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

type PropsType = {
    title: string
    man: ManType
}

export const ManComponent = (props: PropsType) => {
    const {title, man} = props

    return <div>
        <h1>{title}</h1>
        <hr/>
        <div>
            {man.name}
        </div>
    </div>

}