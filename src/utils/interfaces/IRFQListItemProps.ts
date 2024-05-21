import { IRFQ } from "./IRFQ";

export interface IRFQListItemProps extends IRFQ {
    handleRFQClick: (_id: string) => void;
}