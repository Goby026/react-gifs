import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {

    // hook personalizado
    const {images, isLoading } = useFetchGifs( category );

    return (
      <>
        <h3>{category}</h3>
        <div className="card-grid">
          {/* {
                images.map( (img) => {
                    return <li key={img.id}>
                                <h5>{img.title}</h5>
                                <img src={img.image}></img>
                            </li>
                } )
            } */}
          {images.map((image) => (
            <GifItem key={image.id} {...image} />
          ))}
        </div>
      </>
    );
};
