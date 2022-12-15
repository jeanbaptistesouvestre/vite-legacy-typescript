const obj1 = {
    a: {
        b: {
            c: 1
        }
    }
}

const obj2 = {
    a: {
        b: {

        }
    }
}

const o: any = Math.random() > 0.5 ? obj1 : obj2

console.log(o?.a?.b?.c?.d);


export default {}