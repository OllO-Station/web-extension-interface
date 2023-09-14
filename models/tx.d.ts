import { ExtensionOptions, PublicKey, Tx } from '@terra-money/feather.js';
import { WebExtensionCreateTxFailed, WebExtensionTxFailed, WebExtensionTxUnspecifiedError } from '../errors';
export declare enum WebExtensionTxStatus {
    PROGRESS = "PROGRESS",
    SUCCEED = "SUCCEED",
    FAIL = "FAIL",
    DENIED = "DENIED"
}
export interface WebExtensionTxProgress {
    status: WebExtensionTxStatus.PROGRESS;
    payload?: unknown;
}
export interface WebExtensionPostPayload {
    height: number;
    raw_log: string;
    txhash: string;
}
export type WebExtensionSignPayload = Tx.Data;
export interface WebExtensionSignBytesPayload {
    recid: number;
    /**
     * base64 Uint8Array
     *
     * @example
     * ```
     * // stringified by
     * Buffer.from(Uint8Array).toString('base64')
     *
     * // to Uint8Array
     * Uint8Array.from(Buffer.from(base64String, 'base64'))
     * ```
     */
    signature: string;
    /**
     * @example
     * ```
     * PublicKey.fromData(public_key)
     * ```
     */
    public_key?: PublicKey.Data;
}
export interface WebExtensionTxSucceed<Payload> {
    status: WebExtensionTxStatus.SUCCEED;
    payload: Payload;
}
export interface WebExtensionTxFail {
    status: WebExtensionTxStatus.FAIL;
    error: WebExtensionCreateTxFailed | WebExtensionTxFailed | WebExtensionTxUnspecifiedError;
}
export interface WebExtensionTxDenied {
    status: WebExtensionTxStatus.DENIED;
}
export type WebExtensionTxResult<Payload> = WebExtensionTxProgress | WebExtensionTxSucceed<Payload> | WebExtensionTxFail | WebExtensionTxDenied;
export interface SerializedCreateTxOptions extends Omit<ExtensionOptions, 'msgs' | 'fee'> {
    msgs: string[];
    fee: string | undefined;
}
export declare function serializeTx(tx: ExtensionOptions): SerializedCreateTxOptions;
export declare function deserializeTx(tx: SerializedCreateTxOptions): ExtensionOptions;
