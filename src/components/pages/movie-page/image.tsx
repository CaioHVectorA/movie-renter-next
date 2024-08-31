
//todo - add visualizer or something else
export const MovieImage = ({ src, alt }: { src: string, alt: string }) => (
    <div className="">
        <img src={src} alt={alt} style={{ aspectRatio: '1/1.5' }} className="w-full object-contain h-80"/>
    </div>
)