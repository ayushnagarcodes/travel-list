export default function Stats({ items }) {
    // you can also calculate this by filtering the array that has item.packed === true and then finding its length
    const totalPacked = items.reduce(
        (num, item) => (item.packed ? (num += 1) : num),
        0
    );

    return (
        <footer className="stats">
            <em>
                {items.length > 0
                    ? items.length === totalPacked
                        ? "You got everything! Ready to go 🛫"
                        : `You have ${
                              items.length
                          } items on you list, and you already packed ${totalPacked} (${Math.round(
                              (totalPacked / items.length) * 100
                          )}%) 💼`
                    : "Start adding some items to your packing list 🚀"}
            </em>
        </footer>
    );
}
