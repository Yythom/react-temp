import React, { useState } from 'react';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import arrayMove from 'array-move';
import { Button } from 'zarm';

const SortableItem = SortableElement(({ value }) => {
    return (
        <Button size='xs' style={{ background: '#fff', padding: '.6rem 1.5rem' }}>{value}</Button>
    )
});
// hoc
const SortableList = SortableContainer(({ items, sort }) => {
    return (
        <ul style={{ display: 'flex', flexDirection: sort ? "row" : "column", flexWrap: 'wrap' }}>
            {
                items.map((value, index) => (
                    <SortableItem
                        key={`item-${value}`}
                        index={index}
                        value={value}
                        collection="newGifs"
                    />
                ))
            }
        </ul >
    );
});


function SortableComponent({ sort }) {
    const [list, setlist] = useState(['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7'])

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
    return <SortableList sort={sort} items={list} axis={sort ? "xy" : "y"} onSortEnd={onSortEnd} />;
}


export default SortableComponent

