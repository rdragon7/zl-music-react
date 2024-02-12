export interface IProps {
  total: number
  pageSize: number
  currentPage: number
  onPageChange: (page: number, pageSize: number) => void
}
