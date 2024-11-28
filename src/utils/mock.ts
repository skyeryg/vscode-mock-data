import type { ConfigType, UnitTypeLong } from 'dayjs'
import dayjs from 'dayjs'

type UnitType = Exclude<UnitTypeLong, 'date' | 'millisecond'>

const formatMap: Record<UnitType, string> = {
  year: 'YYYY',
  month: 'YYYY-MM',
  day: 'YYYY-MM-DD',
  hour: 'YYYY-MM-DD HH',
  minute: 'YYYY-MM-DD HH:mm',
  second: 'YYYY-MM-DD HH:mm:ss',
}

export function dateRange(start: ConfigType = undefined, length = 10, unit: UnitType = 'day', format: string | undefined = undefined) {
  format = format || formatMap[unit]
  const dateMin = dayjs(start)

  const dates = []
  for (let i = 0; i <= length; i++)
    dates.push(dateMin.add(i, unit).format(format))

  return dates
}

export function dateBetween(start: ConfigType = undefined, end: ConfigType = undefined, unit: UnitType = 'day', format: string | undefined = undefined) {
  format = format || formatMap[unit]
  const dateMin = dayjs(start)
  const dateMax = end ? dayjs(end) : dateMin.add(10, unit)
  const length = dateMax.diff(dateMin, unit)

  return dateRange(start, length, unit, format)
}
