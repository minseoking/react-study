export interface ResultModel<T> {
    Success: boolean;
    Code?: string;
    Description?: string;
    Exception?: string;
    Result?: T;
}
