import React from "react"
import { StarIcon } from "./startIcon"
import { StarFilledIcon } from "./startFilledIcon"

interface IProps {
	checked: boolean
	onChange: (checked: boolean) => void
}

export const FavoriteCheckBox = ({ checked, onChange }: IProps) => {
	return <span onClick={(e) => {e.stopPropagation(); onChange(!checked)}}>{ checked ? <StarFilledIcon /> : <StarIcon /> }</span>
}
