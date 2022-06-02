export type ResponseData = {
  name: string
  url: string
}

export type ApiData = {
  data: {
    results: Array<ResponseData>
  }
}
