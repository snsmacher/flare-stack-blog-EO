/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Request_Error_Unauthenticated_TitleInputs */

const zh_request_error_unauthenticated_title = /** @type {(inputs: Request_Error_Unauthenticated_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未登录`)
};

const en_request_error_unauthenticated_title = /** @type {(inputs: Request_Error_Unauthenticated_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sign In Required`)
};

/**
* | output |
* | --- |
* | "Sign In Required" |
*
* @param {Request_Error_Unauthenticated_TitleInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const request_error_unauthenticated_title = /** @type {((inputs?: Request_Error_Unauthenticated_TitleInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Request_Error_Unauthenticated_TitleInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_request_error_unauthenticated_title(inputs)
	return zh_request_error_unauthenticated_title(inputs)
});