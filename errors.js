export class WebExtensionUserDenied extends Error {
    constructor() {
        super('User Denied');
        this.toString = () => {
            return `[${this.name}]`;
        };
        this.toJSON = () => {
            return {
                name: this.name,
            };
        };
        this.name = 'WebExtensionUserDenied';
    }
}
export class WebExtensionCreateTxFailed extends Error {
    constructor(message) {
        super(message);
        this.toString = () => {
            return `[${this.name} message="${this.message}"]`;
        };
        this.toJSON = () => {
            return {
                name: this.name,
                message: this.message,
            };
        };
        this.name = 'WebExtensionCreateTxFailed';
    }
}
export class WebExtensionTxFailed extends Error {
    constructor(txhash, message, raw_message) {
        super(message);
        this.txhash = txhash;
        this.raw_message = raw_message;
        this.toString = () => {
            return `[${this.name} txhash="${this.txhash}" message="${this.message}"]\n${JSON.stringify(this.raw_message, null, 2)}`;
        };
        this.toJSON = () => {
            return {
                name: this.name,
                txhash: this.txhash,
                message: this.message,
                raw_message: this.raw_message,
            };
        };
        this.name = 'WebExtensionTxFailed';
    }
}
export class WebExtensionTxUnspecifiedError extends Error {
    constructor(message) {
        super(message);
        this.toString = () => {
            return `[${this.name} message="${this.message}"]`;
        };
        this.toJSON = () => {
            return {
                name: this.name,
                message: this.message,
            };
        };
        this.name = 'WebExtensionTxUnspecifiedError';
    }
}
export class WebExtensionLedgerError extends Error {
    constructor(code, message) {
        super(message);
        this.code = code;
        this.toString = () => {
            return `[${this.name} code="${this.code}" message="${this.message}"]`;
        };
        this.toJSON = () => {
            return {
                name: this.name,
                code: this.code,
                message: this.message,
            };
        };
        this.name = 'WebExtensionLedgerError';
    }
}
// ---------------------------------------------
// functions
// ---------------------------------------------
export function isWebExtensionError(error) {
    return (error instanceof WebExtensionUserDenied ||
        error instanceof WebExtensionCreateTxFailed ||
        error instanceof WebExtensionTxFailed ||
        error instanceof WebExtensionLedgerError ||
        error instanceof WebExtensionTxUnspecifiedError);
}
export function createTxErrorFromJson(json) {
    switch (json.name) {
        case 'WebExtensionUserDenied':
            return new WebExtensionUserDenied();
        case 'WebExtensionCreateTxFailed':
            return new WebExtensionCreateTxFailed(json.message);
        case 'WebExtensionLedgerError':
            return new WebExtensionLedgerError(json.code, json.message);
        case 'WebExtensionTxFailed':
            return new WebExtensionTxFailed(json.txhash, json.message, json.raw_message);
        default:
            return new WebExtensionTxUnspecifiedError('message' in json ? json.message : String(json));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3JzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL0B0ZXJyYS1tb25leS93ZWItZXh0ZW5zaW9uLWludGVyZmFjZS9lcnJvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxPQUFPLHNCQUF1QixTQUFRLEtBQUs7SUFDL0M7UUFDRSxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7UUFJdkIsYUFBUSxHQUFHLEdBQUcsRUFBRTtZQUNkLE9BQU8sSUFBSSxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUM7UUFDMUIsQ0FBQyxDQUFDO1FBRUYsV0FBTSxHQUFHLEdBQUcsRUFBRTtZQUNaLE9BQU87Z0JBQ0wsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO2FBQ2hCLENBQUM7UUFDSixDQUFDLENBQUM7UUFYQSxJQUFJLENBQUMsSUFBSSxHQUFHLHdCQUF3QixDQUFDO0lBQ3ZDLENBQUM7Q0FXRjtBQUVELE1BQU0sT0FBTywwQkFBMkIsU0FBUSxLQUFLO0lBQ25ELFlBQVksT0FBZTtRQUN6QixLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFJakIsYUFBUSxHQUFHLEdBQUcsRUFBRTtZQUNkLE9BQU8sSUFBSSxJQUFJLENBQUMsSUFBSSxhQUFhLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQztRQUNwRCxDQUFDLENBQUM7UUFFRixXQUFNLEdBQUcsR0FBRyxFQUFFO1lBQ1osT0FBTztnQkFDTCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7Z0JBQ2YsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO2FBQ3RCLENBQUM7UUFDSixDQUFDLENBQUM7UUFaQSxJQUFJLENBQUMsSUFBSSxHQUFHLDRCQUE0QixDQUFDO0lBQzNDLENBQUM7Q0FZRjtBQUVELE1BQU0sT0FBTyxvQkFBcUIsU0FBUSxLQUFLO0lBQzdDLFlBQ2tCLE1BQTBCLEVBQzFDLE9BQWUsRUFDQyxXQUFnQjtRQUVoQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7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QU8sSUFBSSxvQkFBb0IsQ0FDN0IsSUFBSSxDQUFDLE1BQU0sRUFDWCxJQUFJLENBQUMsT0FBTyxFQUNaLElBQUksQ0FBQyxXQUFXLENBQ2pCLENBQUM7UUFDSjtZQUNFLE9BQU8sSUFBSSw4QkFBOEIsQ0FDdkMsU0FBUyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUNoRCxDQUFDO0tBQ0w7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFdlYkV4dGVuc2lvblVzZXJEZW5pZWQgZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCdVc2VyIERlbmllZCcpO1xuICAgIHRoaXMubmFtZSA9ICdXZWJFeHRlbnNpb25Vc2VyRGVuaWVkJztcbiAgfVxuXG4gIHRvU3RyaW5nID0gKCkgPT4ge1xuICAgIHJldHVybiBgWyR7dGhpcy5uYW1lfV1gO1xuICB9O1xuXG4gIHRvSlNPTiA9ICgpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgIH07XG4gIH07XG59XG5cbmV4cG9ydCBjbGFzcyBXZWJFeHRlbnNpb25DcmVhdGVUeEZhaWxlZCBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IobWVzc2FnZTogc3RyaW5nKSB7XG4gICAgc3VwZXIobWVzc2FnZSk7XG4gICAgdGhpcy5uYW1lID0gJ1dlYkV4dGVuc2lvbkNyZWF0ZVR4RmFpbGVkJztcbiAgfVxuXG4gIHRvU3RyaW5nID0gKCkgPT4ge1xuICAgIHJldHVybiBgWyR7dGhpcy5uYW1lfSBtZXNzYWdlPVwiJHt0aGlzLm1lc3NhZ2V9XCJdYDtcbiAgfTtcblxuICB0b0pTT04gPSAoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgIG1lc3NhZ2U6IHRoaXMubWVzc2FnZSxcbiAgICB9O1xuICB9O1xufVxuXG5leHBvcnQgY2xhc3MgV2ViRXh0ZW5zaW9uVHhGYWlsZWQgZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyByZWFkb25seSB0eGhhc2g6IHN0cmluZyB8IHVuZGVmaW5lZCxcbiAgICBtZXNzYWdlOiBzdHJpbmcsXG4gICAgcHVibGljIHJlYWRvbmx5IHJhd19tZXNzYWdlOiBhbnksXG4gICkge1xuICAgIHN1cGVyKG1lc3NhZ2UpO1xuICAgIHRoaXMubmFtZSA9ICdXZWJFeHRlbnNpb25UeEZhaWxlZCc7XG4gIH1cblxuICB0b1N0cmluZyA9ICgpID0+IHtcbiAgICByZXR1cm4gYFske3RoaXMubmFtZX0gdHhoYXNoPVwiJHt0aGlzLnR4aGFzaH1cIiBtZXNzYWdlPVwiJHtcbiAgICAgIHRoaXMubWVzc2FnZVxuICAgIH1cIl1cXG4ke0pTT04uc3RyaW5naWZ5KHRoaXMucmF3X21lc3NhZ2UsIG51bGwsIDIpfWA7XG4gIH07XG5cbiAgdG9KU09OID0gKCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICB0eGhhc2g6IHRoaXMudHhoYXNoLFxuICAgICAgbWVzc2FnZTogdGhpcy5tZXNzYWdlLFxuICAgICAgcmF3X21lc3NhZ2U6IHRoaXMucmF3X21lc3NhZ2UsXG4gICAgfTtcbiAgfTtcbn1cblxuZXhwb3J0IGNsYXNzIFdlYkV4dGVuc2lvblR4VW5zcGVjaWZpZWRFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IobWVzc2FnZTogc3RyaW5nKSB7XG4gICAgc3VwZXIobWVzc2FnZSk7XG4gICAgdGhpcy5uYW1lID0gJ1dlYkV4dGVuc2lvblR4VW5zcGVjaWZpZWRFcnJvcic7XG4gIH1cblxuICB0b1N0cmluZyA9ICgpID0+IHtcbiAgICByZXR1cm4gYFske3RoaXMubmFtZX0gbWVzc2FnZT1cIiR7dGhpcy5tZXNzYWdlfVwiXWA7XG4gIH07XG5cbiAgdG9KU09OID0gKCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICBtZXNzYWdlOiB0aGlzLm1lc3NhZ2UsXG4gICAgfTtcbiAgfTtcbn1cblxuZXhwb3J0IGNsYXNzIFdlYkV4dGVuc2lvbkxlZGdlckVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcmVhZG9ubHkgY29kZTogbnVtYmVyLCBtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICBzdXBlcihtZXNzYWdlKTtcbiAgICB0aGlzLm5hbWUgPSAnV2ViRXh0ZW5zaW9uTGVkZ2VyRXJyb3InO1xuICB9XG5cbiAgdG9TdHJpbmcgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGBbJHt0aGlzLm5hbWV9IGNvZGU9XCIke3RoaXMuY29kZX1cIiBtZXNzYWdlPVwiJHt0aGlzLm1lc3NhZ2V9XCJdYDtcbiAgfTtcblxuICB0b0pTT04gPSAoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgIGNvZGU6IHRoaXMuY29kZSxcbiAgICAgIG1lc3NhZ2U6IHRoaXMubWVzc2FnZSxcbiAgICB9O1xuICB9O1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIGZ1bmN0aW9uc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5leHBvcnQgZnVuY3Rpb24gaXNXZWJFeHRlbnNpb25FcnJvcihlcnJvcjogdW5rbm93bik6IGJvb2xlYW4ge1xuICByZXR1cm4gKFxuICAgIGVycm9yIGluc3RhbmNlb2YgV2ViRXh0ZW5zaW9uVXNlckRlbmllZCB8fFxuICAgIGVycm9yIGluc3RhbmNlb2YgV2ViRXh0ZW5zaW9uQ3JlYXRlVHhGYWlsZWQgfHxcbiAgICBlcnJvciBpbnN0YW5jZW9mIFdlYkV4dGVuc2lvblR4RmFpbGVkIHx8XG4gICAgZXJyb3IgaW5zdGFuY2VvZiBXZWJFeHRlbnNpb25MZWRnZXJFcnJvciB8fFxuICAgIGVycm9yIGluc3RhbmNlb2YgV2ViRXh0ZW5zaW9uVHhVbnNwZWNpZmllZEVycm9yXG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUeEVycm9yRnJvbUpzb24oXG4gIGpzb246IGFueSxcbik6XG4gIHwgV2ViRXh0ZW5zaW9uVXNlckRlbmllZFxuICB8IFdlYkV4dGVuc2lvbkNyZWF0ZVR4RmFpbGVkXG4gIHwgV2ViRXh0ZW5zaW9uVHhGYWlsZWRcbiAgfCBXZWJFeHRlbnNpb25MZWRnZXJFcnJvclxuICB8IFdlYkV4dGVuc2lvblR4VW5zcGVjaWZpZWRFcnJvciB7XG4gIHN3aXRjaCAoanNvbi5uYW1lKSB7XG4gICAgY2FzZSAnV2ViRXh0ZW5zaW9uVXNlckRlbmllZCc6XG4gICAgICByZXR1cm4gbmV3IFdlYkV4dGVuc2lvblVzZXJEZW5pZWQoKTtcbiAgICBjYXNlICdXZWJFeHRlbnNpb25DcmVhdGVUeEZhaWxlZCc6XG4gICAgICByZXR1cm4gbmV3IFdlYkV4dGVuc2lvbkNyZWF0ZVR4RmFpbGVkKGpzb24ubWVzc2FnZSk7XG4gICAgY2FzZSAnV2ViRXh0ZW5zaW9uTGVkZ2VyRXJyb3InOlxuICAgICAgcmV0dXJuIG5ldyBXZWJFeHRlbnNpb25MZWRnZXJFcnJvcihqc29uLmNvZGUsIGpzb24ubWVzc2FnZSk7XG4gICAgY2FzZSAnV2ViRXh0ZW5zaW9uVHhGYWlsZWQnOlxuICAgICAgcmV0dXJuIG5ldyBXZWJFeHRlbnNpb25UeEZhaWxlZChcbiAgICAgICAganNvbi50eGhhc2gsXG4gICAgICAgIGpzb24ubWVzc2FnZSxcbiAgICAgICAganNvbi5yYXdfbWVzc2FnZSxcbiAgICAgICk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBuZXcgV2ViRXh0ZW5zaW9uVHhVbnNwZWNpZmllZEVycm9yKFxuICAgICAgICAnbWVzc2FnZScgaW4ganNvbiA/IGpzb24ubWVzc2FnZSA6IFN0cmluZyhqc29uKSxcbiAgICAgICk7XG4gIH1cbn1cbiJdfQ==