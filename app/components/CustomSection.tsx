type CustomSectionProps = {
    title: string,
    canvas_id: string,
    time: number | null
}


export default function CustomSection({title,canvas_id,time}:CustomSectionProps){
    return (
        <section>
            <h3>{title}</h3>
            <canvas id={canvas_id} />
            {time !== null && <p>Rendering Time {time}ms</p>}
        </section>
        
    )
}