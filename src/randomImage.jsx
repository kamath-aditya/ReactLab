import {useState, useEffect} from "react";

export default function RandomImage() {
    const [imageUrl, setImageUrl] = useState(null);

    useEffect(() => {
        fetch("https://picsum.photos/300")
            .then(response => {setImageUrl(response.url);}
        );    
    }, []);

    return(
        <div>
            <h1>Random Image</h1>
            {
                imageUrl ?
                <img 
                    src={imageUrl} 
                    alt="Random"
                /> : 
                <p>Loading...</p>
            }
        </div>
    )
}