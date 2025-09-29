import type { ReactNode } from 'react';

type InfoCardProps = {
    list: ReactNode[]
}

export const InfoCard = ({ list }: InfoCardProps) => {
    return (
        <div className="bg-linear-to-r from-mhfd-purple to-mhfd-blue border border-mhfd-dark-blue mb-4 p-2 shadow">
            <ul className="list-none mb-1 font-bold text-lg text-mhfd-dark-blue">
                {list.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </div>
    )
}