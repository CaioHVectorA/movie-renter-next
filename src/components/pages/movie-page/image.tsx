
//todo - add visualizer or something else
export const MovieImage = ({ src, alt }: { src: string, alt: string }) => (
    <div>
        <img src={src} alt={alt} className=" h-full object-cover"/>
    </div>
)