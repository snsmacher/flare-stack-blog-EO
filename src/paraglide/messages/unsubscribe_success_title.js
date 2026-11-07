/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Unsubscribe_Success_TitleInputs */

const zh_unsubscribe_success_title = /** @type {(inputs: Unsubscribe_Success_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`退订成功`)
};

const en_unsubscribe_success_title = /** @type {(inputs: Unsubscribe_Success_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unsubscribe Successful`)
};

/**
* | output |
* | --- |
* | "Unsubscribe Successful" |
*
* @param {Unsubscribe_Success_TitleInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const unsubscribe_success_title = /** @type {((inputs?: Unsubscribe_Success_TitleInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Unsubscribe_Success_TitleInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_unsubscribe_success_title(inputs)
	return zh_unsubscribe_success_title(inputs)
});