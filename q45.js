function Car_new(manufacturer, model, ...options) {
    let car = {
        manufacturer: manufacturer,
        model: model,
        options: options
    };
    options.forEach(option => {
        let [key, value] = option.split(":");
    });
    return car;
}
let myCar = Car_new("XLI", "corolla", "white", "sunroof: true");
console.log(myCar);
export {};
