import React from 'react';
import {useCharacters} from "@/assects/hook/useCharacters";
import {CharacterItem} from "@/components/CharacterItem/CharacterItem";
import {HeaderMeta} from "@/components/HedaerMeta/HeaderMeta";
import {getLayout} from "@/components/Layout/Layout";
import Link from "next/link";

function Characters() {

    const characters = useCharacters()

    return (
        <>
            <HeaderMeta title={'Characters'}/>
            {characters && characters.map(character =>
                <Link key={character.id} href={`/characters/${character.id}`}>
                    <CharacterItem
                        character={character}
                    />
                </Link>
            )}
        </>
    );
}

Characters.getLayout = getLayout;
export default Characters;
