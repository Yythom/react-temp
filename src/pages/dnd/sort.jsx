import { useState } from 'react';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import arrayMove from 'array-move';
import { Button } from 'zarm';

const SortableItem = SortableElement(({ list, value, i, setlist }) => {
    return (
        <div className='item-content move-square'>
            <div>
                {value || null}
            </div>
            <Button className='del'
                onClick={(e) => {
                    e.stopPropagation();
                    const new_list = [...list];
                    new_list.splice(i, 1);
                    setlist(new_list);
                }}
            >
                删除
            </Button>
        </div>
    )
});
// hoc
const SortableList = SortableContainer(({ items, sort, setlist }) => {
    return (
        <ul style={
            sort
                ? { display: 'flex', flexDirection: "row", maxHeight: '100%', flexWrap: 'wrap' } :
                { display: 'flex', flexDirection: "column", maxHeight: '100%', overflow: 'scroll' }
        }
        >
            {
                items.map((value, i) => (
                    <SortableItem
                        setlist={setlist}
                        list={items}
                        key={`item-${value}`}
                        index={i}
                        i={i}
                        value={value}
                        collection="newGifs"
                    />
                ))
            }
        </ul >
    );
});


function SortableComponent({ sort, list, setlist }) {
    if (!list) return
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
    return <SortableList distance={10} setlist={setlist} sort={sort} items={list} axis={sort ? "xy" : "y"} onSortEnd={onSortEnd} />;
}


export default SortableComponent

