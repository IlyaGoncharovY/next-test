import React, {FC} from 'react';
import Image from "next/image";
import {CharacterType} from "@/assects/types/types";
import s from './CharacterItem.module.scss';

interface ICharacterItem {
    character: CharacterType;
}

export const CharacterItem:FC<ICharacterItem> = ({character}) => {
    return (
        <div className={s.container}>
            {character.name}
            <Image
                src={character.image}
                alt={`image - ${character.name}`}
                width={300}
                height={300}
            />
        </div>
    );
};
