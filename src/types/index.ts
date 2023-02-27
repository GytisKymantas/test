
export interface Option {
    label:string;
    value:string;
}
export interface Question {
    title: string;
    fact1?: string;
    fact2?: string;
    options: Option[]
  }
  
  export interface SelectQuestion {
    type: 'select';
    key: string;
    question: Question;
  }