class NumRecord {
    totalNum;
    generatedNum;

    constructor(partTotalNum, generatedNum) {
        this.totalNum = partTotalNum;
        this.generatedNum = generatedNum;
    }
}

const getHintInterval = (index, items) => {
    let start = 0;
    for (let i = 0; i < index; i++) {
        start += items[i].probability;
    }
    const end = start + items[index].probability;

    return [start, end];
};

function initData(totalNum, json, numMap) {
    for (let key in json) {
        const item = json[key];
        for (let j = 0; j < item.items.length; j++) {
            const part = item.items[j];
            part.hitInterval = getHintInterval(j, item.items);
            const num = Math.round(totalNum * item.items[j].probability / 100);
            const numRecord = new NumRecord(num, 0);
            const key = item.name + "-" + part.name;
            numMap.set(key, numRecord);
        }
    }
    // console.log(numMap)
}

function generateItemRandomly(jsonObject, numMap) {
    const random = Math.floor(Math.random() * 100);
    let objectIndex;
    for (let i = 0; i < jsonObject.items.length; i++) {
        if (random >= jsonObject.items[i].hitInterval[0] && random < jsonObject.items[i].hitInterval[1]) {
            objectIndex = i;
            break;
        }
    }

    const key = jsonObject.name + "-" + jsonObject.items[objectIndex].name;
    let numRecord = numMap.get(key);
    if (numRecord.generatedNum >= numRecord.totalNum) {
        for (let i = 0; i < jsonObject.items.length; i++) {
            const key = jsonObject.name + "-" + jsonObject.items[i].name;
            let numRecord = numMap.get(key);
            if (numRecord.generatedNum < numRecord.totalNum) {
                objectIndex = i;
                numRecord.generatedNum++;
                break;
            }
        }
    } else {
        numRecord.generatedNum++;
    }

    return objectIndex;
}

module.exports = {
    generateItemRandomly,
    initData
};

