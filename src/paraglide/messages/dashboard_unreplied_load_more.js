/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Dashboard_Unreplied_Load_MoreInputs */

const zh_dashboard_unreplied_load_more = /** @type {(inputs: Dashboard_Unreplied_Load_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`加载更多`)
};

const en_dashboard_unreplied_load_more = /** @type {(inputs: Dashboard_Unreplied_Load_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Load more`)
};

/**
* | output |
* | --- |
* | "Load more" |
*
* @param {Dashboard_Unreplied_Load_MoreInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const dashboard_unreplied_load_more = /** @type {((inputs?: Dashboard_Unreplied_Load_MoreInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_Unreplied_Load_MoreInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_dashboard_unreplied_load_more(inputs)
	return zh_dashboard_unreplied_load_more(inputs)
});