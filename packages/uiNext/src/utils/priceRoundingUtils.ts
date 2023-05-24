export const parsePrice = (price:number):string => {
    let string = String(price);
    let integer = price;
    if (string.indexOf(".") !== -1) {
        integer = Number(string.substring(0, string.indexOf(".")));
    }
    let result;
    if (integer > 1e6) {
        result= (price / 1e6).toFixed(2) + "M";
    }else if(integer > 1e3 && integer <= 1e6){
        result= (price / 1e3).toFixed(2) + "K";
    } else if (integer > 0 && integer <= 1e3) {
        // result= price.toFixed(priceRoundingWithDigitalNumber(price) > 2 ? 2 : priceRoundingWithDigitalNumber(price));
        if (priceRoundingWithDigitalNumber(price) > 2) {
            result = parseTheLongDigitalNumber(string, price);
        } else {
            result = price.toFixed(priceRoundingWithDigitalNumber(price));
        }
    } else {
        result = parseTheLongDigitalNumber(string, price);
    }
    return result;
};

const parseTheLongDigitalNumber = (priceStr: string, price: number): string => {
    let result;
    let decimal = priceStr.substring(priceStr.indexOf(".") + 1);
    let integel = Math.floor(price);
    if (decimal.length <= 2) {
        result = price.toString();
    } else {
        result= integel + '.' + decimal.substring(0, 2) + "..." + decimal.substring(decimal.length - 1);
    }
    return result;
}

const priceRoundingWithDigitalNumber = (price: number): number => {
    let string = String(price);
    if (string.indexOf(".") + 1 <= 0 ) {
        return 0;
    } else {
        let x = string.indexOf(".") + 1;
        let y = string.length - x;


        return y;
    }
}
