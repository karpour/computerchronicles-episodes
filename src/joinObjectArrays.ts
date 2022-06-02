/**
 * Joins 2 object arrays, variables that both objects share will be overwritten with values from objects in array2
 * @param array1 Array of items to join
 * @param array2 Array of items to join
 * @param compareFunc Comparison functions, determines if 2 objects will be joined
 */
export default function joinObjectArrays<A extends Object, B extends Object>(array1: A[], array2: B[], compareFunc: (arg1: A, arg2: B) => boolean): (A & B)[] {
    return array1.map(x => Object.assign(x, array2.find(y => compareFunc(x, y))));
}
