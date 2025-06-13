export type Initialization = {
    type: "init";
    value: {
        monaco: string;
        flow: string;
    };
};
export type ContentUpdate = {
    type: "update";
    value: string;
};
export type FlowOutput = {
    type: "output";
    value: any;
};
export type InputRequest = {
    type: "input";
    value: {
        previousMessages: string[];
        prompt: string;
    };
};
export type UploadResponse = {
    type: "upload";
    value: any;
};
export type ExportResponse = {
    type: "export";
    value: any;
};
export type HostMessage =
    | Initialization
    | ContentUpdate
    | FlowOutput
    | UploadResponse
    | InputRequest
    | ExportResponse;

export type ViewReady = {
    action: "ready";
};
export type ContentChange = {
    action: "change";
    value: string;
};

export type UploadRequest = {
    action: "upload";
    value: any;
};

export type RunRequest = {
    action: "run";
    value: any;
};
export type InputResponse = {
    action: "input";
    value: string;
};

export type WebviewMessage = ViewReady | ContentChange | UploadRequest | RunRequest | InputResponse;
