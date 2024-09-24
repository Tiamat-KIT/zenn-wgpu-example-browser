type CustomSectionProps = {
    title: string,
    canvas_id: string,
    time: number | null
}


export default function CustomSection({title,canvas_id,time}:CustomSectionProps){
    return (
        <section className="flex justify-center flex-col mt-8 p-3 border rounded-lg w-96">
            <h3 className="font-sans font-bold text-xl text-center">{title}</h3>
            <canvas  id={canvas_id} />
            {time !== null && (
                <span className="flex flex-row">
                    <p>Rendering Time</p>
                    <p id={`time-${canvas_id}`}>{time}ms</p>
                </span>
            )}
        </section>
        
    )
}