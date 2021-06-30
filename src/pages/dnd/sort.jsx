import { useState } from 'react';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import arrayMove from 'array-move';
import { Button } from 'zarm';

const SortableItem = SortableElement(({ value }) => {
    return (
        <div className='item-content move-square'>
            <div>
                {value}
            </div>
            <Button className='del'
                onClick={(e) => {
                    e.stopPropagation();
                    console.log();
                }}
            >
                删除
            </Button>
        </div>
    )
});
// hoc
const SortableList = SortableContainer(({ items, sort }) => {
    return (
        <ul style={
            sort
                ? { display: 'flex', flexDirection: "row", maxHeight: '100%', flexWrap: 'wrap' } :
                { display: 'flex', flexDirection: "column", maxHeight: '100%', overflow: 'scroll' }
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
    return <SortableList distance={10} sort={sort} items={list} axis={sort ? "xy" : "y"} onSortEnd={onSortEnd} />;
}


export default SortableComponent

