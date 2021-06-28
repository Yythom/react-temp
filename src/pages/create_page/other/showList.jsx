

const List = ({ value }) => {

    return (
        Array.from(new Array(100).keys()).map((e, i) => {
            return (
                <div key={i}>#{i}:{value}</div>
            )
        })
    )
};

export default List