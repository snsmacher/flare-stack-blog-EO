/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Request_Error_Permission_Denied_DescInputs */

const zh_request_error_permission_denied_desc = /** @type {(inputs: Request_Error_Permission_Denied_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`当前操作仅管理员可执行。`)
};

const en_request_error_permission_denied_desc = /** @type {(inputs: Request_Error_Permission_Denied_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This action is only available to administrators.`)
};

/**
* | output |
* | --- |
* | "This action is only available to administrators." |
*
* @param {Request_Error_Permission_Denied_DescInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const request_error_permission_denied_desc = /** @type {((inputs?: Request_Error_Permission_Denied_DescInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Request_Error_Permission_Denied_DescInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_request_error_permission_denied_desc(inputs)
	return zh_request_error_permission_denied_desc(inputs)
});