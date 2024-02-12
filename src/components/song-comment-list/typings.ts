export interface IProps {
  info: any
  total?: number
  isShowPagination: boolean
  currentPage?: number
  handleCurrentPage: (page: number) => void
  handlePagination: (pageSize: number, args: number) => void
}
