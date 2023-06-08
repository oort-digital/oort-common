import { Typography } from "antd";
import { toMassked } from "@oort-digital/utils";
import { addTralingSlash } from "../utils";

const { Link } = Typography;

interface IEtherAddressProps {
  address: string;
  blockExplorer: string;
}

export function EtherAddress(props: IEtherAddressProps) {
  const { address, blockExplorer } = props;
  const href = `${addTralingSlash(blockExplorer)}address/${address}`;

  return (
    <Link href={href} target="_blank">
      {toMassked(address)}
    </Link>
  );
}