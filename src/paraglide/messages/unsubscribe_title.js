/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Unsubscribe_TitleInputs */

const zh_unsubscribe_title = /** @type {(inputs: Unsubscribe_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`退订邮件通知`)
};

const en_unsubscribe_title = /** @type {(inputs: Unsubscribe_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unsubscribe from Email Notifications`)
};

/**
* | output |
* | --- |
* | "Unsubscribe from Email Notifications" |
*
* @param {Unsubscribe_TitleInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const unsubscribe_title = /** @type {((inputs?: Unsubscribe_TitleInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Unsubscribe_TitleInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_unsubscribe_title(inputs)
	return zh_unsubscribe_title(inputs)
});