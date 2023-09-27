import { useState } from "react";
import Item from "./Item";

export default function PackingList({
    items,
    onDeleteItem,
    onClearList,
    onToggleItem,
}) {
    const [sortType, setSortType] = useState("input");
    let sortedItems;

    if (sortType === "input") {
        sortedItems = items;
    }

    if (sortType === "description") {
        sortedItems = items
            .slice()
            .sort((a, b) => a.description.localeCompare(b.description));
    }

    if (sortType === "packed") {
        sortedItems = items
            .slice()
            .sort((a, b) => Number(a.packed) - Number(b.packed));
    }

    return (
        <section className="list">
            <ul>
                {sortedItems.map((obj) => (
                    <Item
                        key={obj.id}
                        itemObj={obj}
                        onDeleteItem={onDeleteItem}
                        onToggleItem={onToggleItem}
                    />
                ))}
            </ul>
            <div className="actions">
                <select
                    value={sortType}
                    onChange={(e) => setSortType(e.target.value)}
                >
                    <option value="input">SORT BY INPUT ORDER</option>
                    <option value="description">SORT BY DESCRIPTION</option>
                    <option value="packed">SORT BY PACKED STATUS</option>
                </select>
                <button onClick={onClearList}>CLEAR LIST</button>
            </div>
        </section>
    );
}
