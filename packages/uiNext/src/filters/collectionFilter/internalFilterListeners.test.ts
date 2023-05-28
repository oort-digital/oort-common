import { IFilterListeners } from ".";
import { InternalFilterListeners } from "./internalFilterListeners";

class TestListeners implements IFilterListeners {

    submit = () => {
        this.callCounter++
    }

    close = () => {
        this.callCounter++
    }

    clear = () => {
        this.callCounter++
    }

    callCounter: number = 0
}

test('add/remove listeners', async () => {
    
    const filterListeners = new InternalFilterListeners()

    const listeners1 = new TestListeners()
    const listeners2 = new TestListeners()

    filterListeners.addListeners(listeners1)
    filterListeners.addListeners(listeners2)

    filterListeners.submit()
    filterListeners.removeListeners(listeners1)
    filterListeners.submit()

    expect(listeners1.callCounter).toEqual(1)
    expect(listeners2.callCounter).toEqual(2)

 });