import Icon from '@ant-design/icons';
import React from 'react';

const Svg = () => <svg height="100%" width="100%" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.6994 3.85188L16.0587 16.305C15.8594 17.1838 15.34 17.4025 14.6019 16.9888L10.5781 14.0238L8.63687 15.8913C8.42187 16.1063 8.2425 16.2856 7.82812 16.2856L8.1175 12.1881L15.5744 5.45001C15.8987 5.16126 15.5037 5.00063 15.0706 5.29001L5.85187 11.095L1.88312 9.85251C1.02 9.58313 1.00437 8.98938 2.06312 8.57501L17.5862 2.59438C18.305 2.32501 18.9337 2.75438 18.6994 3.85251V3.85188Z"
 fill="currentColor" />
</svg>

export const TelegramIcon = () => <Icon component={() => <Svg />} />
