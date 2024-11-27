


export const Cards: React.FC = () => {
    return (
        <div className="flex justify-between gap-8 pt-10">
            <div className="bg-indigo-200 p-5 rounded-md shadow-md">
                <h2 className="tracking-widest text-gray-700">Qualidade do ar</h2>
                <p className="font-bold tracking-widest ">Boa</p>
            </div>
            <div className="bg-indigo-200 p-5 rounded-md shadow-md">
                <h2 className="tracking-widest text-gray-700">Alertas emitidos hoje</h2>
                <p className="font-bold tracking-widest">0</p>
            </div>
            <div className="bg-indigo-200 p-5 rounded-md shadow-md">
                <h2 className="tracking-widest text-gray-700">Temperatura atual</h2>
                <p className="font-bold tracking-widest">31C</p>
            </div>
        </div>
    )
}
export default Cards;