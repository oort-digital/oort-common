import {  NumRangeSearchParam } from "./searchParams"
import { NumRange } from "./typesAndInterfaces"

const KEY = 'c'

const setter = (_p: any) => {}

const r1: NumRange = [1, 2]
const r2: NumRange = [undefined, 2]
const r3: NumRange = [1, undefined]

const r1Param = '1-2'
const r2Param = '-2'
const r3Param = '1'

test('numRangeSearchParam serialize', async () => {

    const urlSearchParams = new URLSearchParams()
    const searchParam = new NumRangeSearchParam(KEY, urlSearchParams, setter)

    const runTest = (range: NumRange, expected: string) => {
        searchParam.setParam(range)
        const actualArr = urlSearchParams.getAll(KEY)
        expect(actualArr.length).toEqual(1)
        expect(actualArr[0]).toEqual(expected)
    }

    runTest(r1, r1Param)
    runTest(r2, r2Param)
    runTest(r3, r3Param)
});

test('numRangeSearchParam deserialize', async () => {

    const urlSearchParams = new URLSearchParams()
    
    const runTest = (paramStr: string, expected: NumRange) => {
        urlSearchParams.set(KEY, paramStr)
        const searchParam = new NumRangeSearchParam(KEY, urlSearchParams, setter)
        const { param } = searchParam
        expect(param[0]).toEqual(expected[0])
        expect(param[1]).toEqual(expected[1])
    }

    runTest(r1Param, r1)
    runTest(r2Param, r2)
    runTest(r3Param, r3)
});

