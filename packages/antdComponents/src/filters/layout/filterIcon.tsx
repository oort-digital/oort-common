import Icon from '@ant-design/icons';

const Svg = () => <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5734 0.609253H1.427C0.989496 0.609253 0.716282 1.08604 0.935925 1.4664L5.0895 8.52711V12.8235C5.0895 13.1396 5.34307 13.395 5.65735 13.395H10.3431C10.6574 13.395 10.9109 13.1396 10.9109 12.8235V8.52711L15.0663 1.4664C15.2841 1.08604 15.0109 0.609253 14.5734 0.609253ZM9.63236 12.1093H6.36807V9.32354H9.63414V12.1093H9.63236ZM9.80378 7.88425L9.63414 8.18068H6.36628L6.19664 7.88425L2.65557 1.89497H13.3449L9.80378 7.88425Z" fill="currentColor"/>
</svg>

export const FilterIcon = () => <Icon component={() => <Svg />} />
