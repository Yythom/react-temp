import { useState } from 'react';
import Sort from './sort'

function Dnd() {
    const [sort, setSort] = useState(null);

    return (
        <div>
            <Sort sort={sort} />
        </div>
    )
}

export default Dnd;