document.addEventListener('DOMContentLoaded', () => {
    let change = document.querySelector(".change");
    hexa_table = {
        0: "0",
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        10: "A",
        11: "B",
        12: "C",
        13: "D",
        14: "E",
        15: "F",
    }
    change.addEventListener('click', () => {
        let x = Math.floor(Math.random() * 256) + 1;
        let y = Math.floor(Math.random() * 256) + 1;
        let z = Math.floor(Math.random() * 256) + 1;
        document.body.style.backgroundColor = `rgb(${x},${y},${z})`;
        document.body.style.transition = "2s";
        hex = "#";
        let value_x = Math.floor(x / 16);
        let value_x_remainder = Math.floor(x % 16);
        hex += hex_table[value_x];
        hex += hex_table[value_x_remainder];

        let value_y = Math.floor(y / 16);
        let value_y_remainder = Math.floor(y % 16);
        hex += hex_table[value_y];
        hex += hex_table[value_y_remainder];

        let value_z = Math.floor(z / 16);
        let value_z_remainder = Math.floor(z % 16);
        hex += hex_table[value_z];
        hex += hex_table[value_z_remainder];

        document.querySelector(".data-color").innerHTML = `Background Color: ${hex}`;

    })
});
