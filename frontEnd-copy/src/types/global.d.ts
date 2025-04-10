declare namespace NodeJS {
    interface RequireContext {
        keys(): string[];
        (id: string): any;
        <T>(id: string): T;
        resolve(id: string): string;
        id: string;
    }

    interface NodeRequire {
        context(
        directory: string,
        useSubdirectories?: boolean,
        regExp?: RegExp
        ): RequireContext;
    }
}