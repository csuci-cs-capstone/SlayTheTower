import React from 'react';
import titleStyle from "./title.module.scss";
import { setScreen } from '../../ducks/screen';
import { useDispatch } from 'react-redux';

import { updatePlayer } from '../../ducks/player'
import { heros } from '../../game-data/heros-data'

const Title = () => {

    const dispatch = useDispatch();
    dispatch(updatePlayer(heros[0]))
    

    return (
        <div className={titleStyle.game} >
            <div className={titleStyle.title} >SLAY THE TOWER</div>
            <div className={titleStyle.menu} onClick={() => dispatch(setScreen('Encounter'))}> START ENCOUNTER</div>
        </div>
    );
}

export default Title