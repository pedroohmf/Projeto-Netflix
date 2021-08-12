import React, { useState } from 'react';
import './MovieRow.css';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

export default ({title, items}) => {

    const [scrollX, setScrollX] = useState(0);

    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        if(x > 0) {
            x = 0;
        }
        setScrollX(x);
    }

    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listW = items.results.length * 160.4 + 60;
        if((window.innerWidth - listW) > x) {
            x = (window.innerWidth - listW) - 33;
        }
        setScrollX(x);
    }

    return (
        <div className="MovieRow">
            <h2>{title}</h2>
            <div className="movieRow--left" onClick={handleLeftArrow}>
                <NavigateBeforeIcon style={{fontSize: 100}} />
            </div>
            <div className="movieRow--right" onClick={handleRightArrow}> 
                <NavigateNextIcon style={{fontSize: 100}} />
            </div>

            <div className="movieRow--listarea">
                <div className="movieRow--list" style={{
                    marginLeft: scrollX,
                    width: items.results.length * 200
                }}>
                {items.results.length > 0 && items.results.map((item, key)=> (
                    <div key={key} className="movieRow--item">
                    <img src={`https://image.tmdb.org/t/p/w342${item.poster_path}`} alt={item.original_title} style={{backgroundSize: '100 100'}} />
                    </div>
                    
                ))}
                </div>
                
            </div>
        </div>
    )
}