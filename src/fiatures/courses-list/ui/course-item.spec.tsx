import { render, screen } from "@testing-library/react"
import { CourseItem } from "./course-item"
import userEvent from "@testing-library/user-event"

describe('course-item', () => {
  it('should call delete callback', async () => {

    const onDelete = jest.fn()

    render(<CourseItem course={{
      id: 'dfg',
      name: 'NextJS',
      description: 'Tests'
    }}
    onDelete={onDelete}
    />)

    await userEvent.click(screen.getByText('Видалити'))

    expect(onDelete).toHaveBeenCalled()
  })
})