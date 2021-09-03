import { parseISO, format } from 'date-fns'
import {VFC} from "react";

type DatePropsType = {
  dateString: string
}

export const Date: VFC<DatePropsType> = ({ dateString }) => {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}