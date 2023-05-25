import Icon from '@ant-design/icons';

const Svg = () => <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M29.3544 6.41469C29.5942 6.66025 29.7285 6.98991 29.7285 7.33319C29.7285 7.67646 29.5942 8.00612 29.3544 8.25169L15.9536 21.9989L29.3544 35.7434C29.5942 35.989 29.7285 36.3187 29.7285 36.6619C29.7285 37.0052 29.5942 37.3349 29.3544 37.5804C29.2378 37.7002 29.0984 37.7954 28.9444 37.8603C28.7904 37.9253 28.625 37.9588 28.4579 37.9588C28.2907 37.9588 28.1253 37.9253 27.9713 37.8603C27.8174 37.7954 27.678 37.7002 27.5614 37.5804L13.3109 22.9587C13.0606 22.7019 12.9205 22.3575 12.9205 21.9989C12.9205 21.6404 13.0606 21.296 13.3109 21.0392L27.5614 6.41744C27.678 6.29769 27.8174 6.20252 27.9713 6.13753C28.1253 6.07254 28.2907 6.03906 28.4579 6.03906C28.625 6.03906 28.7904 6.07254 28.9444 6.13753C29.0984 6.20252 29.2378 6.29769 29.3544 6.41744V6.41469Z" fill="#6E7882"/>
</svg>

interface IProps {
    onClick: () => void;
}

export const PrevArrowIcon = ({onClick}: IProps) => <Icon onClick={() => onClick()} component={Svg} />