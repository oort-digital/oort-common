import { PathType, isExcludedPath } from "./isExcludedPath"


test("include", () => {

    const pathStr = "campaigns"
    const pathAddTrailingSlash: PathType = {
        path: pathStr,
        compareMethod: "include",
        addTrailingSlash: true
    }

    const path: PathType = {
        path: pathStr,
        compareMethod: "include",
        addTrailingSlash: false
    }

    function assert(p: PathType) {
        expect(isExcludedPath("/campaigns", [p])).toBeTruthy()
        expect(isExcludedPath("/campaigns/qwerty", [p])).toBeTruthy()
    }

    assert(pathStr)
    assert(path)
    assert(pathAddTrailingSlash)
})

test("equal", () => {

    const path: PathType = {
        path: "/campaigns",
        compareMethod: "equal",
        addTrailingSlash: false
    }
    expect(isExcludedPath("/campaigns", [path])).toBeTruthy()
    expect(isExcludedPath("/campaigns/", [path])).toBeFalsy()
    expect(isExcludedPath("/campaigns/qwerty", [path])).toBeFalsy()

    const pathAddTrailignSlash: PathType = {
        path: "/campaigns",
        compareMethod: "equal",
        addTrailingSlash: true
    }
    expect(isExcludedPath("/campaigns", [pathAddTrailignSlash])).toBeTruthy()
    expect(isExcludedPath("/campaigns/", [pathAddTrailignSlash])).toBeTruthy()
    expect(isExcludedPath("/campaigns/qwerty", [pathAddTrailignSlash])).toBeFalsy()

})