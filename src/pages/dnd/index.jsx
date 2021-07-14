import { useState } from 'react';
import Sort from './sort'
import './index.scss'
import { useEffect } from 'react';

function Dnd() {
    const [sort, setSort] = useState(null);
    useEffect(() => {
    }, [])

    return (
        <div className='dnd_wrap fa'>
            <div className='edit_mobile'>
                <Sort sort={sort} />

            </div>
            <div className='simulator'>

            </div>
        </div>
    )
}

export default Dnd;