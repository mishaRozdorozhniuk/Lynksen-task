import React, {FC, useEffect} from 'react';
import BreedCard from "./BreedCard";
import {useTypesSelector} from "../../hooks/useTypesSelector";
import {fetchCats} from "../../store/action-creator/cats";
import {useActions} from "../../hooks/useActions";
import SliderComponent from "../Slider/Slider";
import axios from "axios";
import Loading from "../Loading/Loading";
import './BreedGallery.scss'

interface Cat {
    breeds: any[],
    id: string,
    url: string
}

interface CatBreedInfo {
    name: string,
    id: string,
    description: string
}

const BreedGallery:FC = () => {
    const {cats, loading, error} = useTypesSelector(state => state.cats)
    const {fetchCats, replacePhoto} = useActions()

    useEffect(() => {
       fetchCats()
    }, [])

    if(loading) {
        return <Loading />
    }

    if(error) {
        return <h1>{error}</h1>
    }

    const replaceCatPhotoWithRandomByBreed = async (breed: String, id: String) => {
        try {
            const response = await axios.get(
                `https://api.thecatapi.com/v1/images/search?breed_id=${breed}`
            );
            replacePhoto({replacedCadPhoto: response.data[0].url, breed, id})
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="container">
            <h1 className="gallery__title">Cat breed gallery</h1>
            <section className="slider">
                <SliderComponent>
                    {cats && cats?.map((item: Cat) => (
                        <React.Fragment key={item.id}>
                            {item?.breeds.map((cat: CatBreedInfo) => (
                                <React.Fragment key={cat.id}>
                                    <BreedCard
                                        id={item.id}
                                        breed={cat.id}
                                        name={cat.name}
                                        onClick={replaceCatPhotoWithRandomByBreed}
                                        description={cat.description}
                                        image={item.url} />
                                </React.Fragment>
                            ))}
                        </React.Fragment>
                    ))}
                </SliderComponent>
            </section>
        </div>
    );
};
export default BreedGallery;