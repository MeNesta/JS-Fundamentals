const args = Process.argv.length - 2;

if (argCount === 0) {
    console.log("0 argument");
} else if (argCount === 1) {
    console.log("1 argument")
} else {
    console.log(`${argCount} argument`);
}