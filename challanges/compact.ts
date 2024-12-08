export default function compact<T>(
    array: Array<T | null | undefined | false | 0 | ''>,
  ): Array<T> {
    const filtered: Array<T> = array.filter((v): v is T => { return v !== null && v !== undefined && v !== false && v !== 0 && v !== '' && !Number.isNaN(v)})
    return filtered
  }

  const t = compact([1, null, 0, null, false, undefined, '', NaN, 0, 2, () => {}])
  console.log(t)