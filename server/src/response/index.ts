interface JSONResponse<T> {
    status: boolean;
    code: number;
    message: string;
    results: T | null;
    createdAt: number;
    pagination?: Pagination;
}

interface Pagination {
    limit: number;
    offset: number;
}


// Generate JSON
const createJSON = <T>(code: number, message: string, results: T | null, limit?: number, offset?: number): JSONResponse<T> => {
    // return {
    //     status: code === 200,
    //     code,
    //     message,
    //     results,
    //     createdAt: Date.now()
    // };
    const jsonResponse: JSONResponse<T> = {
        status: code === 200,
        code,
        message,
        results,
        createdAt: Date.now()
    };

    if (limit !== undefined && offset !== undefined) {
        jsonResponse.pagination = {
            limit,
            offset,
        };
    }

    return jsonResponse;
};

// Response handler
const success = <T>(data: T, res: any, limit?: number, offset?: number): void => res.status(200).send(createJSON<T>(200, 'Success', data, limit, offset));

const successWithCustomMsg = <T>(msg: string, data: T, res: any): void => res.status(200).send(createJSON<T>(200, msg, data));

const successWithErrorMsg = (msg: string, res: any): void => res.status(200).send(createJSON<null>(501, msg, null));

const notFound = <T>(data: T, res: any): void => res.status(404).send(createJSON<T>(404, 'Not Found', data));

const internalServerError = (err: any, res: any): void => res.status(501).send(createJSON<null>(501, 'Something problem was happen', null));

const errorParams = (mssg: string, res: any): void => res.status(400).send(createJSON<null>(400, mssg, null));

const forbidden = <T>(data: T, res: any): void => res.status(403).send(createJSON<T>(403, 'Forbidden', data));

// Export
export {
    success,
    successWithCustomMsg,
    successWithErrorMsg,
    notFound,
    internalServerError,
    forbidden,
    errorParams
};
