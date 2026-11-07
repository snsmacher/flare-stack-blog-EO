/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Unsubscribe_Failed_TitleInputs */

const zh_unsubscribe_failed_title = /** @type {(inputs: Unsubscribe_Failed_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`退订失败`)
};

const en_unsubscribe_failed_title = /** @type {(inputs: Unsubscribe_Failed_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unsubscribe Failed`)
};

/**
* | output |
* | --- |
* | "Unsubscribe Failed" |
*
* @param {Unsubscribe_Failed_TitleInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const unsubscribe_failed_title = /** @type {((inputs?: Unsubscribe_Failed_TitleInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Unsubscribe_Failed_TitleInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_unsubscribe_failed_title(inputs)
	return zh_unsubscribe_failed_title(inputs)
});