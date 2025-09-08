import type { ReactNode } from 'react';

type InfoCardProps = {
    list: ReactNode[]
}

export const InfoCard = ({ list }: InfoCardProps) => {
    return (
        <div className="bg-linear-to-r from-mhfd-purple to-mhfd-blue border-4 border-mhfd-dark-blue mb-4 p-4 rounded-2xl shadow">
            <ul className="list-disc list-inside mb-2 font-bold text-lg text-mhfd-dark-blue">
                {list.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </div>
    )
}