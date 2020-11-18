import {MultiplicationTable} from '../src/MultiplicationTable'

describe('Multiplication Table', () => {
  it('should render multiplication table of (1, 1)', () => {
    // given
    const table = new MultiplicationTable()
    const start = 2
    const end = 4

    //when
    const rendered = table.render(start, end)

    //then
    expect(rendered).toBe('2*2=4\n2*3=6  3*3=9\n2*4=8  3*4=12  4*4=16')
  })

  it('should start in the range between 1 to 10', () => {
    // given
    const table = new MultiplicationTable()
    const start = 0
    const end = 11

    //when
    const rendered1 = table.render(start, end)

    //then
    expect(rendered1).toBe('the start number should between 1 and 10')
  })
  it('should end in the range between 1 to 10', () => {
    // given
    const table = new MultiplicationTable()
    const start = 3
    const end = 20

    //when
    const rendered = table.render(start, end)

    //then
    expect(rendered).toBe('the end number should between 1 and 10')
  })

  it('should end greater than start', () => {
    // given
    const table = new MultiplicationTable()
    const start = 3
    const end = 2

    //when
    const rendered = table.render(start, end)

    //then
    expect(rendered).toBe('')
  })
})
