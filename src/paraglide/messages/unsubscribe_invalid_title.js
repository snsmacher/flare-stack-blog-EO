/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Unsubscribe_Invalid_TitleInputs */

const zh_unsubscribe_invalid_title = /** @type {(inputs: Unsubscribe_Invalid_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无效的退订链接`)
};

const en_unsubscribe_invalid_title = /** @type {(inputs: Unsubscribe_Invalid_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Invalid Unsubscribe Link`)
};

/**
* | output |
* | --- |
* | "Invalid Unsubscribe Link" |
*
* @param {Unsubscribe_Invalid_TitleInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const unsubscribe_invalid_title = /** @type {((inputs?: Unsubscribe_Invalid_TitleInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Unsubscribe_Invalid_TitleInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_unsubscribe_invalid_title(inputs)
	return zh_unsubscribe_invalid_title(inputs)
});