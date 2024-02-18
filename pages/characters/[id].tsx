import React from 'react';
import {CharacterItem} from "@/components/CharacterItem/CharacterItem";
import {HeaderMeta} from "@/components/HedaerMeta/HeaderMeta";
import {getLayout} from "@/components/Layout/Layout";
import {useCharacter} from "@/assects/hook/useCharacter";

function Character() {

    const character = useCharacter()

    return (
        <>
            <HeaderMeta title={'Characters'}/>
            {character &&
                <CharacterItem
                    key={character.id}
                    character={character}
                />}
        </>
    );
}

Character.getLayout = getLayout;
export default Character;
