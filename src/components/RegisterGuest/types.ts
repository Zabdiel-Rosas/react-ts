export interface IProps<T> {
  list: T[]
  setList: React.Dispatch<React.SetStateAction<T[]>>
}
