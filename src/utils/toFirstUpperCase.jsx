// capitalize the first letter of a string

export function toFirstUpperCase(str) {

    str = str.toLowerCase();
    return str.charAt(0).toUpperCase() + str.slice(1)

}

// capitalize the first letter of each word in a string

export function toEachFirstUpperCase(str) {

    str = str.toLowerCase();

    const arr = str.split(" ");

    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }

    return arr.join(" ");

}