import { screen, fireEvent } from '@testing-library/react'
import { customRender as render } from '../../utils/test'
import { Dashboard, DashboardProps } from './Dashboard'

let daskboardProps: DashboardProps
describe('Dashboard', () => {
  beforeEach(() => {
    daskboardProps = {
      data: [
        {
          'type': 'pdf',
          'name': 'Amplified',
          'added': '2022-02-07',
        },
        {
          'type': 'pdf',
          'name': 'Employee Handbook',
          'added': '2017-01-06',
        },
        {
          'type': 'pdf',
          'name': 'Human Resources Handbook',
          'added': '2014-02-06',
        },
        {
          'type': 'pdf',
          'name': 'Executive Handbook',
          'added': '2012-04-03',
        },
        {
          'type': 'pdf',
          'name': 'Setup Guide',
          'added': '2017-07-02',
        },
        {
          'type': 'pdf',
          'name': 'Statements',
          'added': '2017-02-15',
        },
        {
          'type': 'pdf',
          'name': 'Networks Handbook',
          'added': '2013-02-14',
        },
        {
          'type': 'pdf',
          'name': 'Marketing Handbook',
          'added': '2015-02-06',
        },
        {
          'type': 'pdf',
          'name': 'Public Holiday policy',
          'added': '2016-12-06',
        },
        {
          'type': 'pdf',
          'name': 'Public Holiday policy 2',
          'added': '2016-12-07',
        },
        {
          'type': 'pdf',
          'name': 'Public Holiday policy 3',
          'added': '2016-12-08',
        },
        {
          'type': 'zsv',
          'name': 'Zen',
          'added': '2011-05-16',
        },
        {
          'type': 'pdf',
          'name': 'Public Holiday policy final',
          'added': '2016-12-09',
        },
        {
          'type': 'folder',
          'name': 'Expenses',
          'files': [
            {
              'type': 'doc',
              'name': 'Expenses claim form',
              'added': '2017-05-02',
            },
            {
              'type': 'doc',
              'name': 'Fuel allowances',
              'added': '2017-05-03',
            },
          ],
        },
        {
          'type': 'csv',
          'name': 'Cost centres',
          'added': '2016-08-12',
        },
        {
          'type': 'folder',
          'name': 'Misc',
          'files': [
            {
              'type': 'doc',
              'name': 'Christmas party',
              'added': '2017-12-01',
            },
            {
              'type': 'doc',
              'name': 'Christmas party 2',
              'added': '2019-12-01',
            },
            {
              'type': 'mov',
              'name': 'Welcome to the company!',
              'added': '2015-04-24',
            },
          ],
        },
      ],
    }
  })

  it('renders correctly', async () => {
    const { asFragment } = render(<Dashboard {...daskboardProps} />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('filters elements', async () => {
    const { asFragment } = render(<Dashboard {...daskboardProps} />)

    fireEvent.change(screen.getByTestId('Filter'), {
      target: { value: 'State' },
    })

    let expectedFirstElement = screen.getByTestId('cell-Statements-0')
    let firstElement = screen.getByTestId('tablebody').firstChild?.firstChild
    expect(expectedFirstElement).toEqual(firstElement)
    expect(asFragment()).toMatchSnapshot()
  })
})
