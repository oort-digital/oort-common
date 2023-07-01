import { PathType, isExcludedPath } from "./isExcludedPath"


test("include", () => {

    const path = "campaigns"
    const pathType: PathType = {
        path,
        compareMethod: "include"
    }

    expect(isExcludedPath("/campaigns", [path])).toBeTruthy()
    expect(isExcludedPath("/campaigns/qwerty", [path])).toBeTruthy()
    expect(isExcludedPath("/campaigns", [pathType])).toBeTruthy()
    expect(isExcludedPath("/campaigns/qwerty", [pathType])).toBeTruthy()

})

test("equal", () => {

    const pathType: PathType = {
        path: "/campaigns",
        compareMethod: "equal"
    }
    expect(isExcludedPath("/campaigns", [pathType])).toBeTruthy()
    expect(isExcludedPath("/campaigns/qwerty", [pathType])).toBeFalsy()

})