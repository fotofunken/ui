export declare class SvelteFile {
    private scripts;
    private lines;
    private closingTags;
    addScript(line: string): this;
    addTemplate(line: string): this;
    addTag(tag: string, closingTag: string): void;
    export(): string;
}
