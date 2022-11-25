export interface HeadWord {
  text: string
  pos: string
}

export interface WordSens {
  id: string
  definition: string
}

export interface WordResult {
  // id: string
  // language: string
  headword: HeadWord
  senses: WordSens[]
}

export interface WordResponce {
  // n_results: number
  // page_number: number
  // results_per_page: number
  // n_pages: number
  // available_n_pages: number
  results: WordResult[]
}
