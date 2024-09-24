import * as R from 'ramda';

import { Text } from '../../../ui'
import TodoItem from '../../todo-item';

const List = ({ todoList }) => todoList.length ? (
  R.map((item) => (
    <TodoItem key={item.id} todo={item} />
  ), todoList)
) : (
  <Text textAlign='center' color='blacks.3'>
    Empty list
  </Text>
)

export default List;