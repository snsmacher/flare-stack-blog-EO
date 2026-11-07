/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Request_Error_Unauthenticated_DescInputs */

const zh_request_error_unauthenticated_desc = /** @type {(inputs: Request_Error_Unauthenticated_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请先登录后继续。`)
};

const en_request_error_unauthenticated_desc = /** @type {(inputs: Request_Error_Unauthenticated_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Please sign in to continue.`)
};

/**
* | output |
* | --- |
* | "Please sign in to continue." |
*
* @param {Request_Error_Unauthenticated_DescInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const request_error_unauthenticated_desc = /** @type {((inputs?: Request_Error_Unauthenticated_DescInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Request_Error_Unauthenticated_DescInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_request_error_unauthenticated_desc(inputs)
	return zh_request_error_unauthenticated_desc(inputs)
});