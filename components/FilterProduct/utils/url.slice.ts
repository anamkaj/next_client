// функция восстановления из url состояния чекбоксов

export const urlSlice = (
  urlParam: string | null,
  paramFilter: React.MutableRefObject<{
    [key: string]: string[]
  }>,
) => {
  const arrayParamUrl: { [key: string]: string[] } = {}
  const _ = urlParam?.split('f_').map((x) => {
    if (x !== '') {
      // Формирования ключа и параметров фильтра
      const key = x.split('_vl_')
      const value = key
        .slice(1)
        .map((g) => g.split('q_'))
        .flat()
        .slice(1)

      // Удаление и замена знаков "+" и ","

      const result = value.map((x) => {
        const strArray: string[] = []
        let regex = /\§/g
        for (let str of x) {
          strArray.push(str === '§' ? str.replace(regex, '+') : str)
        }
        let resultString = `q_${strArray.join('')}`
        if (x.endsWith(',')) {
          const delComma = resultString.slice(0, resultString.length - 1)
          return delComma
        }
        return resultString
      })
      arrayParamUrl[key[0]] = result
    }
  })

  paramFilter.current = arrayParamUrl
}
