
function Card(props) {
    const name = props.card.name;
    const description = props.card.description;
    return (
        <>
            
            <div key={name} className="flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-white/10">
            <div className="text-base leading-7">
                <h3 className="font-semibold text-white">{name}</h3>
                <p className="mt-2 text-gray-300">{description}</p>
            </div>
            </div>

        </>
    )
}

export default Card