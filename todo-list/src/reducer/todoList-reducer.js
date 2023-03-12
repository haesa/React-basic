export default function todosReducer(todos, action) {
  switch (action.type) {
    case 'add':
      const { id, todo } = action;
      return [...todos, { id, todo }];
    case 'delete':
      const { target } = action;
      return todos.filter((item) => item.id.toString() !== target);
    default:
      throw Error(`알 수 없는 액션 타입이다: ${action.type}`);
  }
}
