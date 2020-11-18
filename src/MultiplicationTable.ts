
interface Expression {
  factor1: number,
  factor2: number,
  product: number
}
export class MultiplicationTable {

  public render(start: number, end: number): string {
    if (!this.isBetween1To10(start)) return 'the start number should between 1 and 10'
    if (!this.isBetween1To10(end)) return 'the end number should between 1 and 10'
    if (!this.isEndGreaterThanStart(start, end)) return ''
    const expressions = this.getExpressions(start, end)
    const getFormatString = this.getFormatString(expressions)
    return getFormatString
  }
  private isEndGreaterThanStart(start: number, end: number): boolean {
    return start <= end
  }
  private isBetween1To10(input: number): boolean {
    return (input >= 1) && (input <= 10)
  }

  private getExpressions(start: number, end: number): Expression[][] {
    const output: Expression[][] = []
    for (let i = start; i <= end; i++) {
      const column: Expression[] = []
      for (let j = start; j <= start + i; j++) {
        const element: Expression = {
          factor1: j,
          factor2: i,
          product: i * j
        }
        column.push(element)
      }
      output.push(column)
    }
    return output
    //console.log(output)
  }

  private getFormatString(data: Expression[][]): string {
    let outputString = ''
    for (let i = 0; i < data.length; i++) {
      let columnString = ''
      for (let j = 0; j <= i; j++) {
        let elementString = `${data[i][j].factor1}*${data[i][j].factor2}=${data[i][j].product}`
        if (!(i === j)) { elementString += '  ' }
        columnString += elementString
      }
      if (!(i === data.length - 1)) { columnString += '\n' }
      outputString += columnString
    }
    return outputString
  }
}
