/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Dashboard_Writing_TitleInputs */

const zh_dashboard_writing_title = /** @type {(inputs: Dashboard_Writing_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`写作记录`)
};

const en_dashboard_writing_title = /** @type {(inputs: Dashboard_Writing_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Writing`)
};

/**
* | output |
* | --- |
* | "Writing" |
*
* @param {Dashboard_Writing_TitleInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const dashboard_writing_title = /** @type {((inputs?: Dashboard_Writing_TitleInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_Writing_TitleInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_dashboard_writing_title(inputs)
	return zh_dashboard_writing_title(inputs)
});