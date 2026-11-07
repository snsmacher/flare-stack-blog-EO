/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Dashboard_Unreplied_TitleInputs */

const zh_dashboard_unreplied_title = /** @type {(inputs: Dashboard_Unreplied_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`待回复评论`)
};

const en_dashboard_unreplied_title = /** @type {(inputs: Dashboard_Unreplied_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Awaiting your reply`)
};

/**
* | output |
* | --- |
* | "Awaiting your reply" |
*
* @param {Dashboard_Unreplied_TitleInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const dashboard_unreplied_title = /** @type {((inputs?: Dashboard_Unreplied_TitleInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_Unreplied_TitleInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_dashboard_unreplied_title(inputs)
	return zh_dashboard_unreplied_title(inputs)
});