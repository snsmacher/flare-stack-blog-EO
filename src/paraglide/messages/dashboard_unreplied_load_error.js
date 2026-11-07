/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Dashboard_Unreplied_Load_ErrorInputs */

const zh_dashboard_unreplied_load_error = /** @type {(inputs: Dashboard_Unreplied_Load_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`待回复评论加载失败`)
};

const en_dashboard_unreplied_load_error = /** @type {(inputs: Dashboard_Unreplied_Load_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Couldn't load comments awaiting reply`)
};

/**
* | output |
* | --- |
* | "Couldn't load comments awaiting reply" |
*
* @param {Dashboard_Unreplied_Load_ErrorInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const dashboard_unreplied_load_error = /** @type {((inputs?: Dashboard_Unreplied_Load_ErrorInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_Unreplied_Load_ErrorInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_dashboard_unreplied_load_error(inputs)
	return zh_dashboard_unreplied_load_error(inputs)
});