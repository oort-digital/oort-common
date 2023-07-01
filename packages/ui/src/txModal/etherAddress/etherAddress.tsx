import { Typography } from "antd";
import { addTrailingSlash, toMassked } from "@oort-digital/utils";

const { Link } = Typography;

interface IEtherAddressProps {
  address: string;
  blockExplorer: string;
}

export function EtherAddress(props: IEtherAddressProps) {
  const { address, blockExplorer } = props;
  const href = `${addTrailingSlash(blockExplorer)}address/${address}`;

  return (
    <Link href={href} target="_blank">
      {toMassked(address)}
    </Link>
  );
}