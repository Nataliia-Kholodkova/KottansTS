interface Todo {
  title: string
  description: string
  completed: boolean
}

interface Expected1 {
  title: string
  completed: boolean
}

interface Expected2 {
  title: string
}

type MyOmit<T, K extends keyof T> = {[P in keyof T as P extends K ? never : P] : T[P]}

type TodoOmit = MyOmit<Todo, 'description' | 'title'>;

const todo: TodoOmit = {
    completed: false,
  }
