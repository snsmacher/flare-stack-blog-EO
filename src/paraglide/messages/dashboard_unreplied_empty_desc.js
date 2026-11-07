/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Dashboard_Unreplied_Empty_DescInputs */

const zh_dashboard_unreplied_empty_desc = /** @type {(inputs: Dashboard_Unreplied_Empty_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新的访客评论会出现在这里`)
};

const en_dashboard_unreplied_empty_desc = /** @type {(inputs: Dashboard_Unreplied_Empty_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`New visitor comments will show up here`)
};

/**
* | output |
* | --- |
* | "New visitor comments will show up here" |
*
* @param {Dashboard_Unreplied_Empty_DescInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const dashboard_unreplied_empty_desc = /** @type {((inputs?: Dashboard_Unreplied_Empty_DescInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_Unreplied_Empty_DescInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_dashboard_unreplied_empty_desc(inputs)
	return zh_dashboard_unreplied_empty_desc(inputs)
});