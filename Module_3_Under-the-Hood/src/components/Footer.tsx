export const Footer = () => {
    const year: number = new Date().getFullYear()

    return (
        <div className="flex justify-center p-4 bg-mhfd-dark-blue text-white text-sm">
            &copy; {year} Mile High Flood District
        </div>
    )
}