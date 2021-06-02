import React, { useState } from 'react';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import arrayMove from 'array-move';
import { Button } from 'zarm';

const SortableItem = SortableElement(({ value }) => {
    return (
        <div className='item-content' style={{ background: '#fff', flexShrink: '0', height: '3rem', boxSizing: 'content-box', padding: '.6rem 1.5rem', margin: '0.2rem', lineHeight: '3rem' }}>
            {value}
        </div>
    )
});
// hoc
const SortableList = SortableContainer(({ items, sort }) => {
    return (
        <ul style={
            sort
                ? { display: 'flex', flexDirection: "row", maxHeight: '20rem', flexWrap: 'wrap' } :
                { display: 'flex', flexDirection: "column", maxHeight: '12rem', overflow: 'scroll' }
        }
        >
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
    const [list, setlist] = useState(['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7', 'Item 8'])

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

