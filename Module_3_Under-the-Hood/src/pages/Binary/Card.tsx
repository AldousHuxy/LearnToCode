type CardProps = {
    title: string
    value: number
    label: string
    onIncrement: () => void
}

export const Card = ({ title, value, label, onIncrement }: CardProps) => {
    return (
        <div className="border bg-mhfd-dark-blue text-white p-4 rounded-2xl shadow">
            <div className="text-3xl text-center font-bold mb-2">{title}</div>
            <div className="text-center text-4xl font-bold">{label}</div>
            <div className="text-center text-sm mb-2">{value === 0 ? '---' : `${value} clicks`}</div>
            <div className="flex justify-center p-2">
                <button className="cursor-pointer border-2 border-medium-green text-medium-green hover:bg-medium-green hover:text-white px-4 py-2 rounded" onClick={onIncrement}>
                    Increment
                </button>
            </div>
        </div>
    )
}