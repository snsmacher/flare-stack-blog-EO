/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Dashboard_Unreplied_Empty_TitleInputs */

const zh_dashboard_unreplied_empty_title = /** @type {(inputs: Dashboard_Unreplied_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`都回复完了`)
};

const en_dashboard_unreplied_empty_title = /** @type {(inputs: Dashboard_Unreplied_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`All caught up`)
};

/**
* | output |
* | --- |
* | "All caught up" |
*
* @param {Dashboard_Unreplied_Empty_TitleInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const dashboard_unreplied_empty_title = /** @type {((inputs?: Dashboard_Unreplied_Empty_TitleInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_Unreplied_Empty_TitleInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_dashboard_unreplied_empty_title(inputs)
	return zh_dashboard_unreplied_empty_title(inputs)
});