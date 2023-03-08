import React, {FC} from 'react';
import Button from "../Button/Button";
import './BreedGallery.scss'

interface CardProps {
    name: string;
    description: string;
    image: string;
    breed: string,
    onClick: (breed: string, id: string) => void,
    id: string
}

const BreedCard: FC<CardProps> = ({name, description, image, breed, id, onClick}) => {
    return (
        <article className="card">
            <span className="card__name">{name}</span>
            <img className="card__image" src={image} alt="cat-photo"/>
            <p className="card__description">{description}</p>
            <Button text="Replace" onClick={() => onClick(breed, id)} />
        </article>
    );
};

export default BreedCard;