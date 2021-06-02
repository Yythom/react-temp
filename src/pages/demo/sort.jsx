import React, { useState } from 'react';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import arrayMove from 'array-move';

const SortableItem = SortableElement(({ value }) => {
    return (
        <li style={{ fontSize: '2rem', width: '22rem' }}>{value}</li>
    )
});
// hoc
const SortableList = SortableContainer(({ items, sort }) => {
    return (
        <ul style={{ display: sort && 'flex' }}>
            {items.map((value, index) => (
                <SortableItem
                    key={`item-${value}`}
                    index={index}
                    value={value}
                    collection="newGifs"
                />
            ))}
        </ul>
    );
});


function SortableComponent({ sort }) {
    const [list, setlist] = useState(['Item 1', 'Item 2', 'Item 3', 'Item 4'])

    /**
     *  collection: "newGifs" 自定义在 SortableItem上的属性
     *  isKeySorting: undefined
     *  newIndex: 1
     *  nodes: Array
     *  oldIndex: 2
     */
    const onSortEnd = ({ oldIndex, newIndex, collection }) => { // SortableItem
        let newarr = arrayMove(list, oldIndex, newIndex);
        console.log(newarr, collection);
        setlist(newarr)
    };
    return <SortableList sort={sort} items={list} axis={sort ? "x" : "y"} onSortEnd={onSortEnd} />;
}


export default SortableComponent

