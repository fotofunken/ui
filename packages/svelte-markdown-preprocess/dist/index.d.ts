type Layouts = Record<string, string>;
type Options = {
    /** defaults to `@immich/ui` */
    markdownPackageName?: string;
    debugPath?: string;
    layouts?: Layouts;
};
export declare const svelteMarkdownPreprocess: (options: Options) => {
    name: string;
    markup({ content, filename }: {
        content: string;
        filename?: string;
    }): Promise<{
        code: string;
    } | undefined>;
};
export {};
