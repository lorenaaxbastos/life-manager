export type HttpSuccess<T = unknown> = {
  status: "success";
  data: T;
};

export type HttpError = {
  status: "error";
  error: {
    message: string;
    code?: string | number;
    details?: unknown;
  };
};

export type HttpResponse<T = unknown> = HttpSuccess<T> | HttpError;

export function success<T = unknown>(data: T): HttpSuccess<T> {
  return { status: "success", data };
}

export function failure(message: string, code?: string | number, details?: unknown): HttpError {
  return { status: "error", error: { message, code, details } };
}
