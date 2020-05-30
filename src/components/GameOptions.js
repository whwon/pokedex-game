import React, { useState } from 'react';
import './GameOptions.css';
import { Link } from 'react-router-dom';

function GameOptions() {
    const initialState = {
        panel1: false,
        panel2: false,
        panel3: false
    }
    let [{panel1, panel2, panel3}, accordionOpen] = useState(initialState);

    const accordion = (panel) => {
        if(panel === 'panel1') {
            panel1 = !panel1;
            panel2 = false;
            panel3 = false;
            accordionOpen({panel1, panel2, panel3})
        } else if (panel === 'panel2') {
            panel1 = false;
            panel2 = !panel2;
            panel3 = false;
            accordionOpen({panel1, panel2, panel3})
        } else {
            panel1 = false;
            panel2 = false;
            panel3 = !panel3;
            accordionOpen({panel1, panel2, panel3})
        }
    }

    return(
        <div className="options">
            <button className="accordion" onClick={() => accordion("panel1")}>Random Pokemon</button>
            {panel1 &&
                <div className="panel">
                    <p className="description">If you simply just want to look at all of the different pokemon for the fun of it.</p>
                    <Link to='/guessImage'>
                        <li>Let's Play!</li>
                    </Link>
                </div>
            }

            <button className="accordion" onClick={() => accordion("panel2")}>Guess By Image</button>
            {panel2 &&
                <div className="panel">
                    <p className="description">
                        How about we play the classic "Who's That Pokemon??",
                        paying homage to the classic Pokemon anime where they show a silhouette of Pokemon image.
                        Tryout your pokemon knowledge!
                    </p>
                    <Link to='/guessImage'>
                        <li>Let's Play!</li>
                    </Link>
                </div>
            }

            <button className="accordion" onClick={() => accordion("panel3")}>Guess By Stats</button>
                {panel3 &&
                    <div className="panel">
                        <p className="description">
                            This one is for the diehard fans and fans who want a bit more challenge to their Pokemon knowledge.
                            Here you will be given some stats of the Pokemon and you have to guess based on that.
                        </p>
                        <Link to='/guessStats'>
                            <li>Let's Play!</li>
                        </Link>
                    </div>
                }
        </div>
    )
}

export default GameOptions;