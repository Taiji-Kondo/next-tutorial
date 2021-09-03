import { parseISO, format } from 'date-fns'
import {VFC} from "react";

type DatePropsType = {
  dateString?: string
}

export const Date: VFC<DatePropsType> = ({ dateString }) => {
  if (!dateString) return <time>-</time>

  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}