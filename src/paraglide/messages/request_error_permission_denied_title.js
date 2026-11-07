/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Request_Error_Permission_Denied_TitleInputs */

const zh_request_error_permission_denied_title = /** @type {(inputs: Request_Error_Permission_Denied_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`权限不足`)
};

const en_request_error_permission_denied_title = /** @type {(inputs: Request_Error_Permission_Denied_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Permission Denied`)
};

/**
* | output |
* | --- |
* | "Permission Denied" |
*
* @param {Request_Error_Permission_Denied_TitleInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const request_error_permission_denied_title = /** @type {((inputs?: Request_Error_Permission_Denied_TitleInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Request_Error_Permission_Denied_TitleInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_request_error_permission_denied_title(inputs)
	return zh_request_error_permission_denied_title(inputs)
});