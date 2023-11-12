const item = [[23, 43, 534], [545, 56, 760], [49, 6, 92]];

const data = item.map((arr, index) => {
    arr.map((data, key) => {
        console.log(`Array[${index},${key}] : ${data}`)
    });
});

