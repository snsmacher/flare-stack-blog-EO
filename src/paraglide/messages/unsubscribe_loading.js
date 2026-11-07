/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Unsubscribe_LoadingInputs */

const zh_unsubscribe_loading = /** @type {(inputs: Unsubscribe_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`正在处理退订请求...`)
};

const en_unsubscribe_loading = /** @type {(inputs: Unsubscribe_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Processing unsubscribe request...`)
};

/**
* | output |
* | --- |
* | "Processing unsubscribe request..." |
*
* @param {Unsubscribe_LoadingInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const unsubscribe_loading = /** @type {((inputs?: Unsubscribe_LoadingInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Unsubscribe_LoadingInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_unsubscribe_loading(inputs)
	return zh_unsubscribe_loading(inputs)
});