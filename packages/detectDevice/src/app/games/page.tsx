import { headers } from "next/headers";
import { detectDevice } from "../../detectDevice";
import dynamic from "next/dynamic";

const Desktop = dynamic(() => import("./desktop"));
const Mobile = dynamic(() => import("./mobile"));
const Tablet = dynamic(() => import("./tablet"));

function Games() {
  const deviceType = detectDevice(headers());

  function render() {
    if (deviceType === "desktop") {
      return <Desktop />;
    }

    if (deviceType === "mobile") {
      return <Mobile />;
    }

    return <Tablet />;
  }

  return render();
}

export default Games;
