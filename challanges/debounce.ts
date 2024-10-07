export default function debounce(func: Function, wait: number): Function {
    throw 'Not implemented!';
}

const test = debounce((x) => console.log(x), 1000);
test(1);
test(2);
test(3);
test(4);
test(5);