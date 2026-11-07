/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Unsubscribe_Back_HomeInputs */

const zh_unsubscribe_back_home = /** @type {(inputs: Unsubscribe_Back_HomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`返回首页`)
};

const en_unsubscribe_back_home = /** @type {(inputs: Unsubscribe_Back_HomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Back to Home`)
};

/**
* | output |
* | --- |
* | "Back to Home" |
*
* @param {Unsubscribe_Back_HomeInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const unsubscribe_back_home = /** @type {((inputs?: Unsubscribe_Back_HomeInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Unsubscribe_Back_HomeInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_unsubscribe_back_home(inputs)
	return zh_unsubscribe_back_home(inputs)
});